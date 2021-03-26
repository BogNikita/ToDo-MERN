const User = require('../model/User');
const bcrypt = require('bcryptjs');
const {validationResult} = require('express-validator');
const jwt = require('jsonwebtoken');
const config = require('config');


exports.postRegister = async (req, res) => {

    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                message: 'Некорректные данные'
            });
        }

        const {email, password, remember} = req.body;

        const candidate = await User.findOne({email});

        if (candidate) {
           return res.status(400).json({message: 'Такой пользователь уже существует'});
        }

        const hashedPassword = await bcrypt.hash(password, 12);

        const user = new User({email, password: hashedPassword});

        await user.save();

        res.status(201).json({message: 'Пользователь создан'});


    } catch (e) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте позже'});
    }
};

exports.postLogin = async (req, res) => {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                message: 'Некорректные данные при входе'
            });
        }

        const {email, password, remember} = req.body;

        const user = await User.findOne({email});
        if (!user) {
            return res.status(400).json({message: 'Такого пользователя не существует'})
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({message: 'Неверный пароль'});
        }

        if (remember) {
            res.cookie('user', email)
        } else {
            res.cookie('user', '', {maxAge: 0})
        }

        const token = jwt.sign(
            {userId: user.id},
            config.get('jwtSecret'),
            {expiresIn: '1h'}
        );

        res.json({token, userId: user.id})


    } catch (e) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте позже'})
    }
};
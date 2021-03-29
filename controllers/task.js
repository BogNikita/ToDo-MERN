const Task = require('../model/Task');


exports.getTasks = async (req,res) => {
    try {
        const task = await Task.find({owner: req.user.userId});
        res.json(task)
    } catch (e) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте позже'});
    }
};

exports.createTask = async (req, res) => {
    try {
        const {title, description, id} = req.body;
        const task = new Task({id, title, description, owner: req.user.userId})
        await task.save();

        res.status(201).json({status: 'Задача добавлена'})
    } catch (e) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте позже'});
    }
};

exports.changeTask = async (req, res) => {
    try {
        const {title, description, id} = req.body;
        const task = await Task.findOneAndUpdate({id}, {title, description});
        await task.save();

        res.status(201).json({status: 'Сообщение изменено'});
    } catch (e) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте позже'});
    }
};

exports.changeComplteTask = async (req, res) => {
    try {
        const {completed, id} = req.body;
        const task = await Task.findOneAndUpdate({id}, {completed});
        await task.save();

        res.status(201).json({status: 'Статус изменен'});
    } catch (e) {
       res.status(500).json({message: 'Что-то пошло не так, попробуйте позже'}); 
    }
};

exports.deleteTask = async (req, res) => {
    try {
        const {id} = req.body;
        await Task.findOneAndDelete({id});

        res.status(201).json({status: 'Запись удалена'});
    } catch (e) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте позже'});
    }
};

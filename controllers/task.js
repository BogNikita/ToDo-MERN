const Task = require('../model/Task');
const config = require('config');


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
        const {title, description} = req.body;
        const task = new Task({title, description, owner: req.user.userId})
        await task.save();

        res.status(201).json({status: 'Задача добавлена'})
    } catch (e) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте позже'});
    }
};

exports.changeTask = async (req, res) => {
    try {
        const {title, description, id} = req.body;
        const task = await Task.findByIdAndUpdate(id, {title, description});
        await task.save();

        res.status(201).json({status: 'Сообщение изменено'});
    } catch (e) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте позже'});
    }
};

exports.changeComplteTask = async (req, res) => {
    try {
        const {completed, id} = req.body;
        const task = await Task.findByIdAndUpdate(id, {completed});
        await task.save();

        res.status(201).json({status: 'Статус изменен'});
    } catch (e) {
       res.status(500).json({message: 'Что-то пошло не так, попробуйте позже'}); 
    }
};

exports.deleteTask = async (req, res) => {
    try {
        const {id} = req.body;
        const task = await Task.findByIdAndDelete(id);

        res.status(201).json({status: 'Запись удалена'});
    } catch (e) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте позже'});
    }
};

const {Schema, model, Types} = require('mongoose');

const schema = new Schema({
    id: {type: String, required: true},
    title: {type: String, required: true},
    description: {type: String},
    completed: {type: Boolean, default: false},
    date: {type: Date, default: Date.now},
    owner: {type: Types.ObjectId, ref: 'User'}
});

module.exports = model('Task', schema)
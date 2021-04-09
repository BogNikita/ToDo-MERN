const express = require('express');
const config = require('config');
const mongoose = require('mongoose');
const path = require('path');
const router = require('./routes');
const cookieParser = require('cookie-parser');


const app = express();
app.use(express.static(path.join(__dirname, 'client/build')))

app.use(express.json({extended: true}));
app.use(cookieParser());
app.use(router);


const PORT = process.env.PORT || 5000;

async function start() {
    try {
        await mongoose.connect(config.get('mongoUri'), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false 
        })
        app.listen(PORT, () => console.log(`Server has benn started on port ${PORT}...`));
    } catch (e) {
        console.log('Server Error', e.message);
        process.exit(1)
    }
}

start();

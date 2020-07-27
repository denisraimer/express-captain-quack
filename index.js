const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const {createServer} = require('http');
const url = 'mongodb+srv://dbUser:dbuser@cluster0.ueslo.mongodb.net/captain-quack?retryWrites=true&w=majority';
const port = 4000;
const app = express();

mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

app.use(bodyParser.json());
app.use('/api', require('./api'));

const server = createServer(app);
server.listen(port, () => console.log(`Server is up. port: ${port}`));
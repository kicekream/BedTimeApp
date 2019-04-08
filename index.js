const express = require('express');
const mongoose = require('mongoose');

const {User} = require('./models/user')
const {Category} = require('./models/category')
const {Story} = require('./models/story')
const {Notification} = require('./models/notification')
const {Settings} = require('./models/settings')

const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost/bedTimeApp', {useNewUrlParser: true})
    .then(console.log('Connected to Database'))
    .catch((err)=> console.log(`error connecting to database ${err}`));


app.listen(3000, ()=> console.log('Database started on port 3000'));
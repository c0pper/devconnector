const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const passport = require('passport')

const users = require('./routes/api/users')
const profiles = require('./routes/api/profiles')
const posts = require('./routes/api/posts')

const app = express()

//bodyParser middleware
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//DB config
const db = require('./config/keys').mongoURI

//connect to mongodb
mongoose
    .connect(db)
    .then(() => console.log('mongodb connected'))
    .catch(err => console.log(err))

//Passport middleware
app.use(passport.initialize())

//Passport config
require('./config/passport.js')(passport)

//use routes
app.use('/api/users', users)
app.use('/api/profiles', profiles)
app.use('/api/posts', posts)

port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server running on port ${port}`))
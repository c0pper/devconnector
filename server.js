const express = require('express')
const mongoose = require('mongoose')

const users = require('./routes/api/users')
const profiles = require('./routes/api/profiles')
const posts = require('./routes/api/posts')
const { use } = require('passport')

const app = express()

//DB config
const db = require('./config/keys').mongoURI

//connect to mongodb
mongoose
    .connect(db)
    .then(() => console.log('mongodb connected'))
    .catch(err => console.log(err))

app.get('/', (req, res) => res.send('Hello'))

//use routes
app.use('/api/users', users)
app.use('/api/profiles', profiles)
app.use('/api/posts', posts)

port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server running on port ${port}`))
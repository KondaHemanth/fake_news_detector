const bodyParser = require('body-parser')
const express = require('express')
const app = express()

const path = require('path')

const checkerRouter = require('./routes/checker')

app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({extended: false}))

// Checker Routes
app.use(checkerRouter)

// Home route
app.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'))
})

// 404 Route
app.use((req,res,next) => {
    res.status(404).send('404 - Page not Found')
})


app.listen(process.env.PORT || 3000)

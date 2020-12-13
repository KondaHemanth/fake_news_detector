const { Router } = require('express')
const express = require('express')
const router = express.Router()

const path = require('path')

// Python Child Process


router.get('/checker', (req, res, next) => {
    res.sendFile(path.join(__dirname, '..','views', 'checker.html'))
})

router.post('/checker', (req, res, next) => {

    if(/^http[s]*:\/\//.test(req.body.url)){
        const spawn = require('child_process').spawn
        
        const childPython = spawn('python3', ['news.py', req.body.url])
        
        childPython.stdout.on('data', (data) => {
            res.render(path.join(__dirname, '..','views', 'result.ejs'), {
                'result': data.toString()
            })
        })
    } else {
        res.render(path.join(__dirname, '..','views', 'result.ejs'), {
            'result': 'Please enter a valid URL'
        })
    }

})

module.exports = router
const express = require('express')
const app = express()
const path = require('path')

app.use(express.static(path.join(__dirname,'views')))


app.listen (4000, () => console.log('Listening on port 4000'))

app.use('/views', express.static(__dirname + '/views/css'))
app.use('/views', express.static(__dirname + '/views/3Program/js'))
app.use('/views', express.static(__dirname + '/views/photos'))


app.get('/',(req, res) =>{
    res.sendFile(__dirname + '/views/1Home/index.html')
})

app.get('/info',(req, res) =>{
    res.sendFile(__dirname + '/views/2Info/Info_.html')
})

app.get('/program',(req, res) =>{
    res.sendFile(__dirname + '/views/3Program/program_.html')
})

app.get('/faq',(req, res) =>{
    res.sendFile(__dirname + '/views/4FAQ/faq_.html')
})

app.get('/gallery',(req, res) =>{
    res.sendFile(__dirname + '/views/5Gallery/gallery_.html')
})

app.get('/contact',(req, res) =>{
    res.sendFile(__dirname + '/views/6Contact_form/contact_.html')
})


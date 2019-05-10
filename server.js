const app = require('express')()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

//Body Parser Middleware
app.use(bodyParser.json())

const db = require('./config/keys').mongoURI

mongoose.connect(db)
    .then(function () { 
        console.log("Connected to the database...")
    }) 
    .catch(function (err) {
        console.log(err)
    }) 
//

const user = require('./routes/api/users.js')


app.get('/',function(req,res) {
    res.send("Hello World!!")
})

app.use('/api/user',user)

const port = process.env.PORT || 5000

app.listen(port,function () {
    console.log("Server started on port...")
})








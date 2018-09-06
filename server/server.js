const {mongoose} = require('./db/mongoose');
const {User} = require('./models/user');
const {Todo} = require('./models/todo');

const express = require('express');
const bodyParser = require('body-parser');

let app = express();
const port = process.argv[2] || 3000;

app.use(bodyParser.json());
app.post('/todos',(req, res) => {
    console.log(req.body);
    var todo = new Todo({
        text:req.body.text
    });
    todo.save().then((doc)=>{
        console.log('todo saved!',doc);
        res.send({
            doc
        })
    },(err) => {
        console.log('couldnt save to do!',err)
        res.status(400).send({
            err
        });
    });
    
});


app.listen(port,() => {
    console.log('Starting app on port',port);
})


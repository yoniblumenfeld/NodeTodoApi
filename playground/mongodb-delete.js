const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
    if(err){
        return console.log('unable to connect to mongodb servers');
    }
    
    console.log('Connected to mongodb successfuly');
    const db = client.db('TodoApp');

    db.collection('Users').deleteMany({name:'Yoni'}).then((err,res)=>{
        if (err){
            return console.log(err);
            }
    });
    db.collection('Users').findOneAndDelete({_id:new ObjectID('5b86995199771419da885fcd')}).then((doc)=>{
        console.log(doc);
    });
    

    // client.close();
});


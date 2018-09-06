const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
    if(err){
        return console.log('unable to connect to mongodb servers');
    }
    console.log('Connected to mongodb successfuly');
    const db = client.db('TodoApp');

    db.collection('Users').find({name:'Yoni'}).toArray().then((docs)=>{
        console.log(JSON.stringify(docs,undefined,2));
    }, (err) => {
        console.log('Unable to fetch Users',err);
    });

    // client.close();
});


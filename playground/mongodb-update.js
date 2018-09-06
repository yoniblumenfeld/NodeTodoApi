const {MongoClient,ObjectID} = require('mongodb');
const dbUrl = 'mongodb://localhost:27017/TodoApp'

MongoClient.connect(dbUrl,(err,client) => {
    if (err){
        return console.log(`Unable to connect to mongodb servers.\n error: ${err}`);
    }
    console.log('Connected to mongodb');
    let db = client.db('TodoApp');
    db.collection('Users').findOneAndUpdate({
        name: 'Gal'
        },{
            $inc:{age:1}
        },{
            returnOriginal:false
        })
        .then((result) => {
            console.log(result);
            client.close()
        })
    });
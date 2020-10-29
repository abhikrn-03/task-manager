const {MongoClient, ObjectID} = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
    if (error){
        return console.log('Unable to connect to database');
    }
    const db = client.db(databaseName);
    
// CRUD OPERATIONS
    // Inserting one user document.
    // db.collection('users').insertOne({
    //     name: 'Shourya',
    //     age: 19
    // }, (error, result) => {
    //     if (error){
    //         return console.log('Unable to add document');
    //     }
    //     console.log(result.ops);
    // });

    // Inserting multiple user documents.
    // db.collection('users').insertMany([
    //     {
    //         name: 'Rachel',
    //         age: 26
    //     }, {
    //         name: 'Ross',
    //         age: 30
    //     }
    // ], (error, result) => {
    //     if (error){
    //         return console.log('Unable to add documents!');
    //     }
    //     console.log(result.ops);
    // });

    // Inserting multiple task documents.
    // db.collection('tasks').insertMany([
    //     {
    //         description: 'Work on Hack-a-duck project',
    //         completed: false
    //     }, {
    //         description: 'Organise a party',
    //         completed: false
    //     }, {
    //         description: 'Fix date for party',
    //         completed: true
    //     }
    // ], (error, result) => {
    //     if (error){
    //         return console.log('Unable to add documents');
    //     }
    //     console.log(result.ops);
    // });

    // Finding one user document
    // db.collection('users').findOne( { _id: new ObjectID("5f99c8b5ee76ae5b99c60326") }, (error, user) => {
    //     if (error){
    //         return console.log('Unable to find user');
    //     }
    //     console.log(user);
    // });

    // Finding multiple user documents.
    // db.collection('users').find( { age: 19} ).toArray((error, users) => {
    //     if (error){
    //         return console.log('Unable to find documents');
    //     }
    //     console.log(users);
    // });

    // Finding count of multiple user docs
    // db.collection('users').find( { age: 19} ).count((error, count) => {
    //     if (error){
    //         return console.log('Unable to find documents');
    //     }
    //     console.log(count);
    // });

    // Fetching a task with id
    // db.collection('tasks').findOne( { _id: new ObjectID("5f99beaf0f7aad57f3fbd98e") }, (error, task) => {
    //     if (error){
    //         return console.log('Unable to find task');
    //     }
    //     console.log(task);
    // });

    // Fetching all incompleted tasks
    // db.collection('tasks').find({ completed: false }).toArray((error, tasks) => {
    //     if (error){
    //         return console.log('Unable to find tasks');
    //     }
    //     console.log(tasks);
    // });

    // Incrementing a value in document
    // db.collection('users').updateOne({
    //     _id: new ObjectID("5f99bd4b65a64d55cc25e37f")
    // }, { $inc: {
    //     age: 1
    //     }
    // }).then((result) => {
    //     console.log(result);
    // }).catch((error) => {
    //     console.log(error);
    // });

    // Updating all tasks to be completed
    // db.collection('tasks').updateMany({
    //     completed: false
    // }, { $set: {
    //     completed: true
    //     }
    // }).then((result) => {
    //     console.log(result.modifiedCount);
    // }).catch((error) => {
    //     console.log(error);
    // });

    // Deleting documents
    // db.collection('users').deleteMany({
    //     name: 'Abhik'
    // }).then((result) => {
    //     console.log(result.deletedCount);
    // }).catch((error) => {
    //     console.log(error);
    // });

});
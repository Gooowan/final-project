const mongoose = require('mongoose');

// const mongoConnection = 'mongodb+srv://yusprax:yuspraxPass@cluster0.v1opa5q.mongodb.net/?retryWrites=true&w=majority'
let dbString = 'mongodb+srv://user241:user241@cluster0.y1ex4ca.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(dbString);

const dbConnection = mongoose.connection;

dbConnection.on('error', () => console.error('MongoDB connection error:'));

dbConnection.once('open', () => console.log('Connected to MongoDB'));

module.exports = mongoose;
import express = require('express');
import * as mongoose from 'mongoose';
import session = require('express-session');
import connectMongo = require('connect-mongo');
import * as mongodb from 'mongodb';

var app = express();

/// Create MongoStore
var MongoStore = connectMongo(session);

/// Use MongoStore

// MongoUrlOptions
app.use(session({
    secret: 'secret',
    store: new MongoStore({url: 'mongodb://localhost/test'})
}));


app.use(session({
    secret: 'secret',
    store: new MongoStore({
        url: 'mongodb://localhost/test',
        collection: "test-sessions",
        ttl: 30 * 24 * 60 * 60 // = 30 days
    })
}));

// MongooseConnectionOptions
mongoose.connect('mongodb://localhost/test')
app.use(session({
    secret: 'secret',
    store: new MongoStore({mongooseConnection: mongoose.connection})
}));

// NativeMongoOptions
var Db = mongodb.Db
var Server = mongodb.Server
var mongoDb = new Db('test', new Server('localhost', 27017));
app.use(session({
    secret: 'secret',
    store: new MongoStore({db: mongoDb})
}));

// NativeMongoPromiseOptions
var Client = mongodb.MongoClient;
var mongoDbPromise = Client.connect('mongodb://localhost/test').then(client => client.db())
app.use(session({
    secret: 'secret',
    store: new MongoStore({ dbPromise: mongoDbPromise })
}));

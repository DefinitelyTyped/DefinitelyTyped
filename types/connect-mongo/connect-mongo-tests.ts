import express = require('express');
import * as mongoose from 'mongoose';
import session = require('express-session');
import connectMongo = require('connect-mongo');
import * as mongodb from 'mongodb';

var app = express();

/// Create MongoStore
var MongoStore = connectMongo(session);

/// Use MongoStore

var url = 'mongodb://localhost/test';

// MongoUrlOptions
app.use(session({
    secret: 'secret',
    store: new MongoStore({url})
}));


app.use(session({
    secret: 'secret',
    store: new MongoStore({
        url,
        collection: "test-sessions",
        ttl: 30 * 24 * 60 * 60 // = 30 days
    })
}));

// MongooseConnectionOptions
mongoose.connect(url)
app.use(session({
    secret: 'secret',
    store: new MongoStore({mongooseConnection: mongoose.connection})
}));

// NativeMongoOptions
var MongoClient = mongodb.MongoClient;
MongoClient.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(client => {
    app.use(session({
        secret: 'secret',
        store: new MongoStore({ client })
    }));
});

// NativeMongoPromiseOptions
var Client = mongodb.MongoClient;
var clientPromise = Client.connect(url);
app.use(session({
    secret: 'secret',
    store: new MongoStore({ clientPromise })
}));

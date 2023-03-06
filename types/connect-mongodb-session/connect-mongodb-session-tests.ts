import * as express from 'express';
import session = require('express-session');
import connectMongo = require('connect-mongodb-session');

const MongoDBStore = connectMongo(session);

const app = express();
const store = new MongoDBStore({
    uri: 'mongodb://localhost:27017/connect_mongodb_session_test',
    collection: 'mySessions',
    expiresKey: `_ts`,
    expiresAfterSeconds: 60 * 60 * 24 * 14,
}, (error) => {
    // some connection error occur
});

store.on('connected', () => {
    store.client; // The underlying MongoClient object from the MongoDB driver
});

// Catch errors
store.on('error', (error) => {
});

app.use(session({
    secret: 'This is a secret',
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7 // 1 week
    },
    store,
    // Boilerplate options, see:
    // * https://www.npmjs.com/package/express-session#resave
    // * https://www.npmjs.com/package/express-session#saveuninitialized
    resave: true,
    saveUninitialized: true
}));

app.get('/', (req, res) => {
    res.send('Hello ' + JSON.stringify(req.session));
});

app.listen(3000);


import express = require('express');
import cors = require('cors');

const app = express();
app.use(cors());
app.use(cors({
    maxAge: 100,
    credentials: true,
    optionsSuccessStatus: 200
}));
app.use(cors({
    methods: 'GET,POST,PUT',
    exposedHeaders: 'Content-Range,X-Content-Range',
    allowedHeaders: 'Content-Type,Authorization'
}));
app.use(cors({
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    exposedHeaders: ['Content-Range', 'X-Content-Range'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(cors({
    origin: true
}));
app.use(cors({
    origin: 'http://example.com'
}));
app.use(cors({
    origin: /example\.com$/
}));
app.use(cors({
    origin: [/example\.com$/, 'http://example.com']
}));
app.use(cors({
    origin: ['http://example.com', 'http://fakeurl.com']
}));
app.use(cors({
    origin: [/example\.com$/, /fakeurl\.com$/]
}));
app.use(cors({
    origin: (requestOrigin, cb) => {
        try {
            const allow = !requestOrigin || requestOrigin.indexOf('.edu') !== -1;
            cb(null, allow);
        } catch (err) {
            cb(err);
        }
    }
}));
app.use(cors((req, cb) => {
    if (req.query.trusted) {
        cb(null, {origin: 'http://example.com', credentials: true});
    } else {
        cb(new Error('Not trusted'));
    }
}))




// import mongoose = require('mongoose');
import express = require('express');
import jSend = require('easy-jsend');

// var schema = new mongoose.Schema({
//     name: {type: String}
// });

// var Model = mongoose.model('model', schema);
var Model = {};

jSend.init({partial: true});

var app = express();

app.get('/success', function (req, res, next) {
    res.success('Success');
});

app.get('/fail', function (req, res, next) {
    res.fail('fail');
});

app.get('/error', function (req, res, next) {
    res.error('error');
});

app.get('/partial', function (req, res, next) {
    res.partial({
        offset: 10,
        limit: 50,
        count: 100,
        data: []
    });
});

app.get('/partial', function (req, res, next) {
    res.makePartial({
        model: Model,
        search: {},
        opts: {
            limit: 30,
            skip: 10
        },
        result: []
    });
});
/**
 * Created by karl on 14/07/15.
 */



import express = require('express');
import eSupertest = require('easy-xapi-supertest');

var app = express();

var getAgent = eSupertest.getAgentFactory(app);

var agent = getAgent({
    user: 'Jack',
    role: 'user'
});

var getAgent2 = eSupertest.getAgentFactory(app, function (user:string, role?:string) {
    return {
        user: user,
        role: role || 'user'
    }
});

var agent = getAgent2('Jack');

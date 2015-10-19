/// <reference path="js-data.d.ts" />

import JSData = require('js-data');
//TODO
//import DSRedisAdapter = require('js-data-redis')
var store = new JSData.DS();

// register and use http by default for async operations
//TODO
//store.registerAdapter('redis', new DSRedisAdapter(), {default: true});

// simplest model definition
var User = store.defineResource('user');

User.find(1).then(function (user: any) {
    user; // { id: 1, name: 'John' }
});
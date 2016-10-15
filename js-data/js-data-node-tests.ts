/// <reference path="../js-data-http/js-data-http.d.ts" />

import JSData = require('js-data');
import DSHttpAdapter = require('js-data-http')
var store = new JSData.DS();

// register and use http by default for async operations
store.registerAdapter('redis', new DSHttpAdapter(), {default: true});

// simplest model definition
var User = store.defineResource('user');

User.find(1).then(function (user: any) {
    user; // { id: 1, name: 'John' }
});

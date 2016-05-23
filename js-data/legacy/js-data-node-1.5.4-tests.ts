

import JSData = require('js-data');
var store = new JSData.DS();

// simplest model definition
var User = store.defineResource('user');

User.find(1).then(function (user: any) {
    user; // { id: 1, name: 'John' }
});

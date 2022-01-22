//Example from https://www.npmjs.com/package/frisby
import frisby = require('frisby');

var URL = 'http://localhost:3000/';
var URL_AUTH = 'http://username:password@localhost:3000/';

frisby.globalSetup({
    // globalSetup is for ALL requests
    request: {
        headers: { 'X-Auth-Token': 'fa8426a0-8eaf-4d22-8e13-7c1b16a9370c' },
    },
});

frisby
    .create('GET user johndoe')
    .get(URL + '/users/3.json')
    .expectStatus(200)
    .expectJSONTypes({
        id: Number,
        username: String,
        is_admin: Boolean,
    })
    .expectJSON({
        id: 3,
        username: 'johndoe',
        is_admin: false,
    })
    .toss();

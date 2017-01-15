import dotenv = require('dotenv');

// typically, result will be an Object
let env = dotenv.config({
    silent: true
});

// ... but it might also be `false`
let result = dotenv.config({
    path: '.non-existing-env'
});

dotenv.config({
    path: '.env'
});

dotenv.config({
    encoding: 'utf8'
});

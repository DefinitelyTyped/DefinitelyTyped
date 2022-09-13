import dotenv = require('dotenv-defaults');

// config
dotenv.config({
    path: '.env-example',
    encoding: 'utf8',
    debug: true,
    // added via augmentation
    defaults: '.env.defaults',
});
dotenv.parse('HOST=omnionline.us');

// tslint:disable-next-line: no-var-requires this imports is triggering dotenv no import by design
require('dotenv-defaults/config');

console.log(process.env.HOST);
console.log(process.env.EMAIL);

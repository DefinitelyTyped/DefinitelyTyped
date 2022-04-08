import ziggy = require('ziggy-js');

new ziggy.Router();

// $ExpectType Router
ziggy.default();

// $ExpectType string
ziggy.default("test");

// $ExpectType boolean
new ziggy.Router().current("test");

// $ExpectType string
new ziggy.Router().current();

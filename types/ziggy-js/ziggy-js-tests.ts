import ziggy = require('ziggy-js');

new ziggy.Router();

// $ExpectType Router
ziggy.default();

// $ExpectType string
ziggy.default("test");

// $ExpectType Router
ziggy.default(undefined, undefined, true, {});

// $ExpectType boolean
new ziggy.Router().current("test");

// $ExpectType string
new ziggy.Router().current();

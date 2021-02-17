import ziggy = require('ziggy-js');

new ziggy.Router();

// $ExpectType Router
ziggy.default();

// $ExpectType string
ziggy.default("test");

import ziggy = require('ziggy-js');

new ziggy.Router();

// $ExpectType Router
ziggy.default();

// $ExpectType string
ziggy.default("test");

const Ziggy = {
    routes: {},
    defaults: {},
    url: '',
};

// $ExpectType Router
ziggy.default(undefined, undefined, undefined, Ziggy);

// $ExpectType boolean
new ziggy.Router().current("test");

// $ExpectType string | undefined
new ziggy.Router().current();

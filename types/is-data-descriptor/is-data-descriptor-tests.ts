import isDataDesc = require("is-data-descriptor");

// $ExpectType boolean
isDataDesc({
    configurable: true,
    enumerable: true,
    writable: true,
    value: true
});

// $ExpectType boolean
isDataDesc({
    descriptor: {
        configurable: true,
        enumerable: true,
        writable: true,
        value: true
    }
}, 'descriptor');

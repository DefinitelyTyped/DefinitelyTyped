import isDataDesc = require("is-data-descriptor");

// $ExpectType boolean
isDataDesc({
    configurable: true,
    enumerable: true,
    writable: true,
    value: true
});

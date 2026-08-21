import idObj = require("identity-obj-proxy");

// $ExpectType false
idObj.__esModule;

// $ExpectType string
idObj.any;
// $ExpectType string
idObj.other;
// $ExpectType string
idObj.key;

// @ts-expect-error This is readonly
idObj.__esModule = false;
// @ts-expect-error This is readonly
idObj.other = "";

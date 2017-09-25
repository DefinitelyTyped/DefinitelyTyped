import isIpPrivate = require("private-ip");

isIpPrivate("127.0.0.1");
// => true

isIpPrivate("13.59.213.165");
// => false

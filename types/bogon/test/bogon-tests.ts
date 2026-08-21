import bogon = require("bogon");

bogon("192.168.0.1"); // $ExpectType boolean
bogon.isBogon("8.8.8.8"); // $ExpectType boolean
bogon.isPrivate("224.0.1.1"); // $ExpectType boolean

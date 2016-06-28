///<reference path="email-addresses.d.ts"/>

import addrs = require('email-addresses');

var result: Object;

result = addrs.parseOneAddress('Jack  Bowman  <jack@fogcreek.com >');
result = addrs.parseAddressList(['foo@bar.com', 'Foo Bar <foo@bar.com>']);

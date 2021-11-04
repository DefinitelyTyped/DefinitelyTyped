import timingSafeEqual = require('timing-safe-equal');

const buffer: Buffer = new Buffer([1, 2, 3, 4, 5]);
// $ExpectType boolean
timingSafeEqual(buffer, buffer);

import unixTime = require('unix-time');

var myUnixDate: number = unixTime(new Date());

console.log('Is valid unix timestamp? =>', new Date(myUnixDate * 1000)); // Returns the current date in GMT format

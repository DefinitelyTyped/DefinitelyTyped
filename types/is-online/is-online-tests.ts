import isOnline = require('is-online');

isOnline(); // $ExpectType Promise<boolean>
isOnline({ timeout: 10 }); // $ExpectType Promise<boolean>
isOnline({ version: 'v4' }); // $ExpectType Promise<boolean>
isOnline({ version: 'v6' }); // $ExpectType Promise<boolean>

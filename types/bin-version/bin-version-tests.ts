import binVersion = require('bin-version');

// $ExpectType Promise<string>
binVersion('curl');
// $ExpectType Promise<string>
binVersion('openssl', { args: ['version'] });

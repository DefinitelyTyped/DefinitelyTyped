import resolvePath = require('resolve-path');

resolvePath('/var/log/', 'user.log'); // $ExpectType string
resolvePath('user.log'); // $ExpectType string

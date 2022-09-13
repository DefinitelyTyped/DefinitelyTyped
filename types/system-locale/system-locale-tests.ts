import locale = require('system-locale');

locale(); // $ExpectType Promise<string>
locale.sync(); // $ExpectType string

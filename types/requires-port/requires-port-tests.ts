import required = require('requires-port');

required('8080', 'http'); // $ExpectType boolean
required('80', 'http'); // $ExpectType boolean
required('80', 'https://yomoma.com'); // $ExpectType boolean
required(80, 'https://yomoma.com'); // $ExpectType boolean

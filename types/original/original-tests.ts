import origin = require('original');

// $ExpectType string
origin('https://google.com/gmail');

// $ExpectType boolean
origin.same('https://google.com/gmail', 'https://google.com:443/gmail');

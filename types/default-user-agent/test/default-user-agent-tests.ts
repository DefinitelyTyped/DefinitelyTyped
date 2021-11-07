import ua = require('default-user-agent');

ua(); // $ExpectType string
ua('urllib', '0.0.1'); // $ExpectType string

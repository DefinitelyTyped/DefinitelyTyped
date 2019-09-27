import saslprep = require('saslprep');

saslprep('password\u00AD'); // $ExpectType string
saslprep('password\u00AD', { allowUnassigned: true }); // $ExpectType string

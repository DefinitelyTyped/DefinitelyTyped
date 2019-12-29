import removeMd = require('remove-markdown');

removeMd(''); // $ExpectType string
removeMd('', {}); // $ExpectType string
removeMd('', { stripListLeaders: true, gfm: true }); // $ExpectType string

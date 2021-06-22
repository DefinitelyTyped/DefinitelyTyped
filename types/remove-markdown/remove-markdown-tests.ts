import removeMd = require('remove-markdown');

removeMd(''); // $ExpectType string
removeMd('', {}); // $ExpectType string
removeMd('', { stripListLeaders: true, listUnicodeChar: '', gfm: true, useImgAltText: true }); // $ExpectType string

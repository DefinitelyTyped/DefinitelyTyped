import cliTruncate = require('cli-truncate');

// Truncate at different positions
// $ExpectType string
cliTruncate('unicorn', 4); // default position: 'end'

// $ExpectType string
cliTruncate('unicorn', 4, {position: 'start'});

// $ExpectType string
cliTruncate('unicorn', 4, {position: 'middle'});

// Truncate Unicode surrogate pairs
// $ExpectType string
cliTruncate('uni\uD83C\uDE00corn', 5);

// Truncate full-width characters
// $ExpectType string
cliTruncate('안녕하세요', 3);

import expand = require('brace-expansion');

// $ExpectType string[]
expand('file-{a,b,c}.jpg');
expand('-v{,,}');
expand('file{0..2}.jpg');
expand('file-{a..c}.jpg');
expand('file{2..0}.jpg');
expand('file{0..4..2}.jpg');
expand('file-{a..e..2}.jpg');
expand('file{00..10..5}.jpg');
expand('{{A..C},{a..c}}');
expand('ppp{,config,oe{,conf}}');

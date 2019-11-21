import normalize = require('normalize-path');

normalize('\\foo\\bar\\baz\\'); // $ExpectType string
normalize('\\foo\\bar\\baz\\', false); // $ExpectType string

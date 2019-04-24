import clip = require('text-clipper');

clip('text', 123); // $ExpectType string
clip('text', 123, { breakWords: true, html: false }); // $ExpectType string
clip('text', 123, { imageWeight: 123, indicator: 'something', maxLines: 321 }); // $ExpectType string

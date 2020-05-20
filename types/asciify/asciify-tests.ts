

import asciify = require('asciify');

asciify('Whoa', function(err, result){console.log(result)});
asciify('Whoa', '3-d', function(err, result){console.log(result)});
asciify('Whoa', {font:'3-d'}, function(err, result){console.log(result)});

asciify.getFonts(function(err, fonts) { fonts.slice(0); });

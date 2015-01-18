var fs = require('fs');
var ejs = require('ejs');

var input = fs.readFileSync('./when.d.ts.ejs', { encoding: 'utf-8' });
var output = ejs.render(input, { open: '<(', close: ')>' });

fs.writeFileSync('./when.d.ts', output, { encoding: 'utf-8' });

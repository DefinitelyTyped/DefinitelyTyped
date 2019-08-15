import cssbeautify = require('./index');

var str = '';

str = cssbeautify(str);

str = cssbeautify(str, {});

str = cssbeautify(str, {
  indent: '  ',
  openbrace: 'separate-line',
  autosemicolon: true
});

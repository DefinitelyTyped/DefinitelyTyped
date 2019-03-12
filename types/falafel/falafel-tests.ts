import falafel = require("falafel");


var src = '(' + function () {
  var xs = [ 1, 2, [ 3, 4 ] ];
  var ys = [ 5, 6 ];
} + ')()';

var output = falafel(src, function (node: any) {});

src = '(function () {'
      + 'var xs = [ 1, 2, [ 3, 4 ] ];'
      + 'var ys = [ 5, 6 ];'
      + 'g([ xs, ys ]);'
  + '})()';

output = falafel(src, function (node: any) {});

output = falafel(src, {parser: null, ecmaVersion: 6, plugins: { jsx: true }}, function(node: any) {});
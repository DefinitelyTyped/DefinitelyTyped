import falafel = require("falafel");

const src = '(' + function () {
  var xs = [ 1, 2, [ 3, 4 ] ];
  var ys = [ 5, 6 ];
} + ')()';

var output = falafel(src, function (node: any) {});

const src2 = `(function () {'
      + 'var xs = [ 1, 2, [ 3, 4 ] ];'
      + 'var ys = [ 5, 6 ];'
      + 'g([ xs, ys ]);'
  + '})()`;

output = falafel(src2,  (node: any) => {});

output = falafel(src2, {parser: null, ecmaVersion: 6, plugins: { jsx: true }}, (node: any) => {});
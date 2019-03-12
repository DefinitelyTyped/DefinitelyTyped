import falafel = require("falafel");

const src = `( ${function () {
  const xs = [ 1, 2, [ 3, 4 ] ];
  const ys = [ 5, 6 ];
}})()`;

falafel(src, function (node: any) {});

const src2 = "(function () {var xs = [ 1, 2, [ 3, 4 ] ];})()";

falafel(src2,  (node: any) => {});

falafel(src2, {parser: null, ecmaVersion: 6, plugins: { jsx: true }}, (node: any) => {});
import falafel = require('falafel');

const src = `( ${() => {
    const xs = [1, 2, [3, 4]];
    const ys = [5, 6];
}})()`;

falafel(src, (node: any) => {}); // $ExpectType Falafel

const src2 = '(function () {var xs = [ 1, 2, [ 3, 4 ] ];})()';

falafel(src2, (node: any) => {}); // $ExpectType Falafel

falafel(src2, { parser: null, ecmaVersion: 6, plugins: { jsx: true } }, (node: any) => {}); // $ExpectType Falafel

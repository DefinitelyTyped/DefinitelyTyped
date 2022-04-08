import fusv = require('find-unused-sass-variables');

// 'scss' is a folder
let unused = fusv.find('scss'); // $ExpectType Results
// Array of unused variables
// ['$foo', '$bar', '$imunused']
unused.unused; // $ExpectType string[]
unused.total; // $ExpectType number

const ignoredVars = ['$my-var', '$my-second-var'];
unused = fusv.find('scss', { ignore: ignoredVars }); // $ExpectType Results

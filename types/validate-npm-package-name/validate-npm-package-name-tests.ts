import validate = require('validate-npm-package-name');

validate('some-package'); // $ExpectType Result
validate('example.com'); // $ExpectType Result
validate('under_score'); // $ExpectType Result
validate('123numeric'); // $ExpectType Result
validate('@npm/thingy'); // $ExpectType Result
validate('@jane/foo.js'); // $ExpectType Result

validate.scopedPackagePattern;  // $ExpectType RegExp

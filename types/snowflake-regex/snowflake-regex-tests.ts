import regex = require('snowflake-regex');
const generate = regex.generate;

// RegExp & { generate(options?: GenerateOptions): RegExp }
regex;

generate(); // $ExpectType RegExp
generate({}); // $ExpectType RegExp
generate({ exact: true }); // $ExpectType RegExp
generate({ global: true }); // $ExpectType RegExp
generate({ multiline: true }); // $ExpectType RegExp
generate({ exact: true, global: true, multiline: true }); // $ExpectType RegExp

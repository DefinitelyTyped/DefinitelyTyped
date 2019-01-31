import lineColumnPath = require('line-column-path');

const parsed = lineColumnPath.parse('unicorn.js:8:14');
// $ExpectType Required<PathDescriptor>
parsed;
// $ExpectType Required<PathDescriptor>
lineColumnPath.parse({ file: 'unicorn.js' });
// $ExpectType Required<PathDescriptor>
lineColumnPath.parse({ file: 'unicorn.js', line: 1 });
// $ExpectType Required<PathDescriptor>
lineColumnPath.parse({ file: 'unicorn.js', column: 1 });

// $ExpectType string
lineColumnPath.stringify(parsed);
// $ExpectType string
lineColumnPath.stringify({ file: 'unicorn.js' });
// $ExpectType string
lineColumnPath.stringify({ file: 'unicorn.js', line: 1 });
// $ExpectType string
lineColumnPath.stringify({ file: 'unicorn.js', column: 1 });

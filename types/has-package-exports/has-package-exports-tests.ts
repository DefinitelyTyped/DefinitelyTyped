import hasPackageExports = require('has-package-exports');
hasPackageExports; // $ExpectType boolean | null

import hasPackageExportsConditional = require('has-package-exports/conditional');
hasPackageExportsConditional; // $ExpectType boolean | null

import hasPackageExportsPattern = require('has-package-exports/pattern');
hasPackageExportsPattern; // $ExpectType boolean

// These are invalid because of `package.json#exports`:
import hasPackageExportsIllegal1 = require('has-package-exports/index'); // $ExpectError
import hasPackageExportsIllegal2 = require('has-package-exports/index.js'); // $ExpectError
import hasPackageExportsConditionalIllegal = require('has-package-exports/conditional.js'); // $ExpectError
import hasPackageExportsPatternIllegal = require('has-package-exports/pattern.js'); // $ExpectError

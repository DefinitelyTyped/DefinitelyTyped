import hasPackageExports = require('has-package-exports');
hasPackageExports; // $ExpectType boolean | null

import hasPackageExportsConditional = require('has-package-exports/conditional');
hasPackageExportsConditional; // $ExpectType boolean | null

import hasPackageExportsPattern = require('has-package-exports/pattern');
hasPackageExportsPattern; // $ExpectType boolean

// These are invalid because of `package.json#exports`:
// @ts-expect-error
import hasPackageExportsIllegal1 = require('has-package-exports/index');
// @ts-expect-error
import hasPackageExportsIllegal2 = require('has-package-exports/index.js');
// @ts-expect-error
import hasPackageExportsConditionalIllegal = require('has-package-exports/conditional.js');
// @ts-expect-error
import hasPackageExportsPatternIllegal = require('has-package-exports/pattern.js');

import hasPackageSelfReference = require('has-package-self-reference');
hasPackageSelfReference; // $ExpectType boolean | null

// These are invalid because of `package.json#exports`:
// @ts-expect-error
import hasPackageSelfReferenceIllegal1 = require('has-package-self-reference/index');
// @ts-expect-error
import hasPackageSelfReferenceIllegal2 = require('has-package-self-reference/index.js');

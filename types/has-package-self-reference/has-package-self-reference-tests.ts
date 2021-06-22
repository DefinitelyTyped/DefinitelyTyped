import hasPackageSelfReference = require('has-package-self-reference');
hasPackageSelfReference; // $ExpectType boolean | null

// These are invalid because of `package.json#exports`:
import hasPackageSelfReferenceIllegal1 = require('has-package-self-reference/index'); // $ExpectError
import hasPackageSelfReferenceIllegal2 = require('has-package-self-reference/index.js'); // $ExpectError

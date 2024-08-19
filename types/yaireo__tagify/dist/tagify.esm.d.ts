// The package JSON "exports" field just redirects "./dist/tagify.esm.js" to "./index.d.ts"
// This file exists solely for supporting Node 10, which does not support "exports" in package.json

// Type tests are never run against a Node 10 environment.
// Also, there's a lint rule that disallows relative imports in tests.
// As a result, tests are never run against this file

import Tagify = require("../index.js");

export as namespace Tagify;

export = Tagify;

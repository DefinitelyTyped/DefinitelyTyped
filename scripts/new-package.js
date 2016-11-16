/// <reference types="node" />
"use strict";
const fs_1 = require("fs");
const path = require("path");
const newPackageName = process.argv[2];
if (!newPackageName) {
    throw new Error("Usage: node scripts/new-package.js new-package-name");
}
fs_1.mkdirSync(newPackageName);
write("index.d.ts", `// Type definitions for ${newPackageName} 1.2
// Project: https://github.com/baz/foo (Does not have to be to GitHub, but prefer linking to a source code repository rather than to a project website.)
// Definitions by: My Self <https://github.com/me>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

Fill the header in!
`);
const testsFile = `${newPackageName}-tests.ts`;
write(testsFile, "");
const tsconfig = {
    "compilerOptions": {
        "module": "commonjs",
        "target": "es6",
        "noImplicitAny": true,
        "strictNullChecks": true,
        "baseUrl": "../",
        "typeRoots": [
            "../"
        ],
        "types": [],
        "noEmit": true,
        "forceConsistentCasingInFileNames": true
    },
    "files": [
        "index.d.ts",
        `${newPackageName}-tests.ts`
    ]
};
write("tsconfig.json", JSON.stringify(tsconfig, undefined, 4));
function write(name, content) {
    fs_1.writeFileSync(path.join(newPackageName, name), content);
}

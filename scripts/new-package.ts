/// <reference types="node" />

import { mkdirSync, writeFileSync } from "fs";
import * as path from "path";

const newPackageName = process.argv[2];
if (!newPackageName) {
    throw new Error("Usage: node scripts/new-package.js new-package-name")
}

mkdirSync(newPackageName);

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

write("tslint.json", '{ "extends": "../tslint.json" }');

function write(name: string, content: string) {
    writeFileSync(path.join(newPackageName, name), content);
}

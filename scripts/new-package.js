/// <reference types="node" />
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const http_1 = require("http");
const fs_1 = require("fs");
const path = require("path");
const newPackageName = process.argv[2];
if (!newPackageName) {
    throw new Error("Usage: node scripts/new-package.js new-package-name");
}
run().catch(e => {
    console.error(e);
    process.exit(1);
});
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        const files = [
            ["index.d.ts", yield getIndex()],
            [`${newPackageName}-tests.ts`, ""],
            ["tsconfig.json", `${JSON.stringify(getTSConfig(), undefined, 4)}\n`],
            ["tslint.json", '{ "extends": "../tslint.json" }\n'],
        ];
        try {
            yield pify1(fs_1.mkdir, newPackageName);
            yield Promise.all(files.map(([name, text]) => write(name, text)));
        }
        catch (e) {
            if (e.code === "EEXIST") {
                console.warn(`Module “${newPackageName}” already exists!`);
            }
            else {
                console.error(`Error creating module files: ${e}\nCleaning Up.`);
                yield Promise.all(files.map(([name]) => rm(name)));
                yield pify1(fs_1.rmdir, newPackageName);
            }
            process.exit(1);
        }
    });
}
function getIndex() {
    return __awaiter(this, void 0, void 0, function* () {
        let version = "x.x";
        let project = "https://github.com/baz/foo (Does not have to be to GitHub, but prefer linking to a source code repository rather than to a project website.)";
        try {
            const reg = JSON.parse(yield loadString(`http://registry.npmjs.org/${newPackageName}`));
            const { latest } = reg["dist-tags"];
            const { homepage } = reg.versions[latest];
            version = latest.split(".").slice(0, 2).join(".");
            if (homepage !== undefined)
                project = homepage;
        }
        catch (e) {
            console.warn(`Warning: could not retrieve version/homepage information: ${e.message}`);
        }
        return `// Type definitions for ${newPackageName} ${version}
// Project: ${project}
// Definitions by: My Self <https://github.com/me>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

Fill the header in!
`;
    });
}
function getTSConfig() {
    return {
        "compilerOptions": {
            "module": "commonjs",
            "target": "es6",
            "noImplicitAny": true,
            "noImplicitThis": true,
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
}
function write(name, content) {
    return new Promise((resolve, reject) => {
        fs_1.writeFile(path.join(newPackageName, name), content, err => err ? reject(err) : resolve());
    });
}
function rm(name) {
    return pify1(fs_1.unlink, path.join(newPackageName, name)).catch((e) => {
        if (e.code === "ENOENT")
            return;
        throw e;
    });
}
function pify1(fn, arg) {
    return new Promise((resolve, reject) => {
        fn(arg, err => err ? reject(err) : resolve());
    });
}
function loadString(url) {
    return new Promise((resolve, reject) => {
        http_1.get(url, (res) => {
            if (res.statusCode !== 200) {
                return reject(new Error(`HTTP Error ${res.statusCode}: ${http_1.STATUS_CODES[res.statusCode || 500]} for ${url}`));
            }
            let rawData = "";
            res.on("data", chunk => rawData += chunk);
            res.on("end", () => resolve(rawData));
        }).on("error", e => reject(e));
    });
}

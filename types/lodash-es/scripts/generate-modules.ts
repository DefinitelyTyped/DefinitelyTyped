// Usage: ts-node generate-modules.ts

/// <reference types="node" />

import * as fs from "fs";
import { STATUS_CODES } from "http";
import { get } from "https";
import * as path from "path";
import * as prettier from 'prettier';

const GROUP_WITH_DEFAULTS = [
    'array',
    'collection',
    'function',
    'date',
    'lang',
    'math',
    'number',
    'object',
    'string',
    'util',
];

const SPECIAL_DEFAULTS = ['seq'];

const SPECIAL_DEFAULTS_OF_SEQ = [
    'at',
    'lodash',
    'reverse',
    'value',
];

const SRC_REGEXP = /default\s\{([^\}]+)}/;

main().catch(console.error);

async function main() {
    const versionObject = await getPackageVersion();

    const results = await getDefaultsDefinitions(versionObject.fullVersion);

    const extractedResults = results.map(extractDefaults).map(arr => arr.sort());

    const tsFiles = [];

    GROUP_WITH_DEFAULTS.forEach((group, index) => {
        console.log(group);

        // output per file per module
        extractedResults[index].forEach((module) => {
            console.log(`    ${module}`);
            // Generate local module
            const localDir = path.join("..", module);
            tsFiles.push(`${module}/index.d.ts`);
            writeDirAndIndex(localDir, `import { ${module} } from "lodash";\nexport default ${module};\n`);
        });

        // output default
        const defaultModule = `${group}.default.d.ts`;
        tsFiles.push(defaultModule);

        console.log('  ' + defaultModule);

        const filePath = path.join("..", defaultModule);
        writeFileSync(filePath, `${extractedResults[index].map(val => `import ${val} from "./${val}";`).join('\n')}\n
export default { ${extractedResults[index].join(', ')} };\n`);

        // output group dir
        const groupDir = path.join("..", group);
        tsFiles.push(`${group}/index.d.ts`);

        console.log('  dir: ' + group);

        writeDirAndIndex(groupDir, `${extractedResults[index].map(val => `import { default as ${val} } from "../${val}";`).join('\n')}\n
export { default } from '../${group}.default';\n`);
    });

    const flattenModules = extractedResults.reduce((acc, cur) => acc.concat(cur), []).sort();

    // output full
    console.log('index.d.ts');
    writeDirAndIndex('..', globalDefinitionText('lodash-es', versionObject.majorMinor,
        `${flattenModules.map(val => `export { default as ${val} } from "./${val}";`).join('\n')}\n`));

    console.log('lodash-es-tests.ts');
    const testFilePath = path.join('..', 'lodash-es-tests.ts');
    writeFileSync(testFilePath, `${flattenModules.map(val => `import ${val} from "lodash-es/${val}";`).join('\n')}\n
${flattenModules.map(val => `import { ${val} as ${val}1 } from 'lodash-es';`).join('\n')}\n`);

    // output tsconfig
    console.log('tsconfig.json');
    tsFiles.sort().unshift('index.d.ts', 'lodash-es-tests.ts');
    writeFileSync(path.join('..', 'tsconfig.json'), tsconfig(tsFiles));
}

function formatFile(contents) {
    return prettier.format(contents);
}

function writeFileSync(filePath: string, contents) {
    const source = filePath.endsWith('ts') ? formatFile(contents) : contents;
    fs.writeFileSync(filePath, source);
}

function ensureDir(dir: string) {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
    }
}

function writeDirAndIndex(dir, source) {
    ensureDir(dir);
    const filePath = path.join(dir, "index.d.ts");
    writeFileSync(filePath, source);
}

function extractDefaults(source) {
    return SRC_REGEXP.exec(source)[1].split(',').map((val) => val.trim());
}

async function getDefaultsDefinitions(fullVersion) {
    return Promise.all(GROUP_WITH_DEFAULTS.map(
        (group) => loadString(`https://unpkg.com/lodash-es@${fullVersion}/${group}.default.js`)
    ));
}

async function getPackageVersion() {
    const fullName = "lodash-es";
    const url = `https://registry.npmjs.org/${fullName.toLowerCase()}`;
    const npmInfo = JSON.parse(await loadString(url));
    const fullVersion = npmInfo["dist-tags"].latest;
    const majorMinor = fullVersion.split(".").slice(0, 2).join(".");

    return {
        fullVersion,
        majorMinor
    };
}

function globalDefinitionText(fullName, majorMinor, allModulesImports): string {
    return `
// Type definitions for ${fullName} ${majorMinor}
// Project: http://lodash.com/
// Definitions by: Stephen Lautier <https://github.com/stephenlautier>, e-cloud <https://github.com/e-cloud>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

${allModulesImports}
`.trim() + '\n';
}

function tsconfig(files) {
    return JSON.stringify({
        files,
        compilerOptions: {
            module: "commonjs",
            lib: [
                "es6"
            ],
            noImplicitAny: true,
            noImplicitThis: true,
            strictNullChecks: false,
            baseUrl: "../",
            typeRoots: [
                "../"
            ],
            types: [],
            noEmit: true,
            forceConsistentCasingInFileNames: true
        }
    }, undefined, 4);
}

function tslint() {
    return `{ "extends": "dtslint/dt.json" }\n`;
}

function loadString(url: string): Promise<string> {
    return new Promise((resolve, reject) => {
        get(url, (res) => {
            if (res.statusCode !== 200) {
                return reject(new Error(`HTTP Error ${res.statusCode}: ${STATUS_CODES[res.statusCode || 500]} for ${url}`));
            }
            let rawData = "";
            res.on("data", chunk => rawData += chunk);
            res.on("end", () => resolve(rawData));
        }).on("error", reject);
    });
}

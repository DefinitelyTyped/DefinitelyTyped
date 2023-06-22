/// <reference types="node" />

import * as fs from 'node:fs';

const home = new URL('../types/', import.meta.url);

for (const dirName of fs.readdirSync(home)) {
    if (dirName.startsWith('.') || dirName === 'node_modules' || dirName === 'scripts') {
        continue;
    }

    const dir = new URL(`${dirName}/`, home);
    const stats = fs.lstatSync(dir);
    if (stats.isDirectory()) {
        fixTsconfig(dir);
        // Also do it for old versions
        for (const subdir of fs.readdirSync(dir)) {
            if (/^v\d+$/.test(subdir)) {
                fixTsconfig(new URL(`${subdir}/`, dir));
            }
        }
    }
}

/**
 * @param {URL} dir
 */
function fixTsconfig(dir) {
    const target = new URL('tsconfig.json', dir);
    const json = JSON.parse(fs.readFileSync(target, 'utf-8'));
    json.compilerOptions = fixCompilerOptions(json.compilerOptions);
    fs.writeFileSync(target, JSON.stringify(json, undefined, 4), 'utf-8');
}

/**
 * @param {{}} compilerOptions
 */
function fixCompilerOptions(compilerOptions) {
    // Do something interesting here
    return Object.fromEntries(Object.entries(compilerOptions).map(([key, value]) => [key, value]));
}

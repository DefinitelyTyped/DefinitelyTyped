// Usage: ts-node generate-tsconfigs.ts

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

function fixTsconfig(dir: URL): void {
    const target = new URL('tsconfig.json', dir);
    let json = JSON.parse(fs.readFileSync(target, 'utf-8'));
    json = fix(json);
    fs.writeFileSync(target, JSON.stringify(json, undefined, 4), 'utf-8');
}

function fix(config: any): any {
    const out: any = {};
    for (const key in config) {
        let value = config[key];
        if (key === 'compilerOptions') {
            value = fixCompilerOptions(value);
        }
        out[key] = value;
    }
    return out;
}

function fixCompilerOptions(config: any): any {
    const out: any = {};
    for (const key in config) {
        out[key] = config[key];
        // Do something interesting here
    }
    return out;
}

/// <reference types="node" />

import * as fs from 'node:fs';
import JSON from 'comment-json';

const home = new URL('../types/', import.meta.url);

for (const dirName of fs.readdirSync(home)) {
    if (dirName.startsWith(".") || dirName === "node_modules" || dirName === "scripts") {
        continue;
    }

    const dir = new URL(`${dirName}/`, home);
    const stats = fs.lstatSync(dir);
    if (stats.isDirectory()) {
        fixTslint(dir);
        // Also do it for old versions
        for (const subdir of fs.readdirSync(dir)) {
            if (/^v\d+$/.test(subdir)) {
                fixTslint(new URL(`${subdir}/`, dir));
            }
        }
    }
}

/**
 * @param {URL} dir
 */
function fixTslint(dir) {
    const target = new URL('tslint.json', dir);
    if (!fs.existsSync(target)) return;
    const json = JSON.parse(fs.readFileSync(target, 'utf-8'));
    json.rules = fixRules(json.rules);
    const text =
        Object.keys(json).length === 1
            ? '{ "extends": "@definitelytyped/dtslint/dt.json" }'
            : JSON.stringify(json, undefined, 4);
    fs.writeFileSync(target, text + '\n', 'utf-8');
}

/**
 * @param {{}} rules
 */
function fixRules(rules) {
    return Object.fromEntries(Object.entries(rules).map(([key, value]) => [key, value]));
}


"use strict";
// Usage: ts-node fix-tslint.ts
Object.defineProperty(exports, "__esModule", { value: true });
/// <reference types="node" />
const fs = require("fs");
const path = require("path");
const JSON = require("comment-json");
const home = path.join(__dirname, "..", "types");
for (const dirName of fs.readdirSync(home)) {
    if (dirName.startsWith(".") || dirName === "node_modules" || dirName === "scripts") {
        continue;
    }
    const dir = path.join(home, dirName);
    const stats = fs.lstatSync(dir);
    if (stats.isDirectory()) {
        fixTslint(dir);
        // Also do it for old versions
        for (const subdir of fs.readdirSync(dir)) {
            if (/^v\d+$/.test(subdir)) {
                fixTslint(path.join(dir, subdir));
            }
        }
    }
}
function fixTslint(dir) {
    const target = path.join(dir, 'tslint.json');
    if (!fs.existsSync(target))
        return;
    let json = JSON.parse(fs.readFileSync(target, 'utf-8'));
    json = fix(json);
    const text = Object.keys(json).length === 1 ? '{ "extends": "dtslint/dt.json" }' : JSON.stringify(json, undefined, 4);
    fs.writeFileSync(target, text + "\n", "utf-8");
}
function fix(config) {
    const out = {};
    for (const key in config) {
        let value = config[key];
        out[key] = key === "rules" ? fixRules(value) : value;
    }
    return out;
}
function fixRules(rules) {
    const out = {};
    for (const key in rules) {
        out[key] = rules[key];
    }
    return out;
}

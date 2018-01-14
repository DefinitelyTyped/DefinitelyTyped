// Usage: ts-node generate-tsconfigs.ts

/// <reference types="node" />

import * as fs from 'fs';
import * as path from 'path';

const home = path.join(__dirname, '..');

for (const dirName of fs.readdirSync(home)) {
	if (dirName.startsWith(".") || dirName === "node_modules" || dirName === "scripts") {
		continue;
	}

	const dir = path.join(home, dirName);
	const stats = fs.lstatSync(dir);
	if (stats.isDirectory()) {
		fixTsconfig(dir);
		// Also do it for old versions
		for (const subdir of fs.readdirSync(dir)) {
			if (/^v\d+$/.test(subdir)) {
				fixTsconfig(path.join(dir, subdir));
			}
		}
	}
}

function fixTsconfig(dir: string): void {
	const target = path.join(dir, 'tsconfig.json');
	let json = JSON.parse(fs.readFileSync(target, 'utf-8'));
	json = fix(json);
	fs.writeFileSync(target, JSON.stringify(json, undefined, 4), "utf-8");
}

function fix(config: any): any {
	const out: any = {};
	for (const key in config) {
		let value = config[key];
		if (key === "compilerOptions") {
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

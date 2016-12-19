// Usage: ts-node generate-tsconfigs

/// <reference types="node" />

import * as fs from 'fs';
import * as path from 'path';

function repeat(s: string, count: number) {
	return Array(count + 1).join(s);
}

const home = path.join(__dirname, '..');

const dirs = fs.readdirSync(home).filter(d => !(d.startsWith(".") || d === "node_modules" || d === "scripts"));
for (const dir of dirs.map(d => path.join(home, d))) {
	const stats = fs.lstatSync(dir);
	if (stats.isDirectory()) {
		const target = path.join(dir, 'tsconfig.json');
		let json = JSON.parse(fs.readFileSync(target, 'utf-8'));
		json = fix(json);
		fs.writeFileSync(target, JSON.stringify(json, undefined, 4), "utf-8");
	}
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
		if (key === "noImplicitAny") {
			out.noImplicitThis = true;
		}
	}
	return out;
}

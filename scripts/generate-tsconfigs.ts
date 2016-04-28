/// <reference path="../node/node.d.ts" />

import * as fs from 'fs';
import * as path from 'path';

const template = {
	compilerOptions: {
		module: "commonjs",
		target: "es2015",
		noImplicitAny: true,
		strictNullChecks: true,
		baseUrl: "../"
	}
};

const home = path.join(__dirname, '..');

fs.readdir(home, (err, dirs) => {
	if (err) throw err;

	for (const dir of dirs.map(d => path.join(home, d))) {
		fs.lstat(dir, (err, stats) => {
			if (err) throw err;
			if (stats.isDirectory()) {
				const target = path.join(dir, 'tsconfig.json');
				fs.exists(target, exists => {
					if (!exists) {
						fs.writeFile(target, JSON.stringify(template, undefined, 4), { encoding: 'utf-8' });
					}
				});
			}
		});
	}
});


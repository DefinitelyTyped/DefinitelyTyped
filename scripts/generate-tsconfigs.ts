/// <reference types="node" />

import * as fs from 'fs';
import * as path from 'path';

function repeat(s: string, count: number) {
	return Array(count + 1).join(s);
}

function checkDir(home: string, count: number) {
	fs.readdir(home, (err, dirs) => {
		if (err) throw err;

		for (const dir of dirs.map(d => path.join(home, d))) {
			fs.lstat(dir, (err, stats) => {
				if (err) throw err;
				if (stats.isDirectory()) {
					checkDir(dir, count + 1);
					const target = path.join(dir, 'tsconfig.json');
					fs.exists(target, exists => {
						if (exists) {
							const old = JSON.parse(fs.readFileSync(target, 'utf-8'));
							old['compilerOptions']['typesRoot'] = repeat('../', count);
							fs.writeFileSync(target, JSON.stringify(old, undefined, 4));
						}
					});
				}
			});
		}
	});
}

checkDir(path.join(__dirname, '..'), 1);

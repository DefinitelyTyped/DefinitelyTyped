/// <reference path="../node/index.d.ts" />

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
				if(dir.indexOf('.git') > 0) return;

				if (err) throw err;
				if (stats.isDirectory()) {
					checkDir(dir, count + 1);
					fs.readdir(dir, (err, files) => {
						if (err) throw err;
						const target = path.join(dir, 'tsconfig.json');
						fs.exists(target, exists => {
							if (exists) {
								const old = JSON.parse(fs.readFileSync(target, 'utf-8'));

								let entryPoint: string;
								let definitionFiles = files.filter(f => (f.indexOf('.d.ts') > 0));
								if (definitionFiles.length === 1) {
									entryPoint = definitionFiles[0];
								} else if(fs.existsSync(path.join(dir, 'index.d.ts'))) {
									entryPoint = 'index.d.ts';
								} else {
									entryPoint = path.basename(dir) + '.d.ts';
								}

								if (!fs.existsSync(path.join(dir, entryPoint))) {
									console.log('No file ' + entryPoint + ' exists in ' + dir + ' so deleting it');
									fs.unlink(target);
									return;
								}

								let testFile: string | undefined = path.join(dir, path.basename(dir) + '-tests.ts');
								if (!fs.existsSync(testFile)) {
									let onlyTest = files.filter(f => f.toLowerCase().indexOf('-tests.ts') > 0)[0];
									if (onlyTest) {
										testFile = path.join(dir, onlyTest);
									} else {
										testFile = undefined;
									}
								}
								if (testFile) {
									old['files'] = ['index.d.ts', path.basename(testFile)];
								} else {
									old['files'] = ['index.d.ts'];
								}

								fs.writeFileSync(target, JSON.stringify(old, undefined, 4));
								console.log('Write to ' + target);
							}
						});
					});
				}
			});
		}
	});
}

checkDir(path.join(__dirname, '..'), 1);

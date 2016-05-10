/// <reference types="node" />

import * as fs from 'fs';
import * as path from 'path';

const home = path.join(__dirname, '..');

function forEachTypingDir(callback: (fullPath: string, dirName: string) => void) {
	fs.readdir(home, (err, dirs) => {
		if (err) throw err;
		for (const dir of dirs) {
			const fullPath = path.join(home, dir);
			fs.lstat(fullPath, (err, stats) => {
				if (err) throw err;			
				if (stats.isDirectory()) {
					callback(fullPath, dir);
				}
			});
		}
	});
}

forEachTypingDir(typingPath => {
	fs.readdir(typingPath, (err, files) => {
		if(err) throw err;
		for(const file of files) {
			if (/tscparams$/.test(file)) {
				const fullPath = path.join(typingPath, file);

				fs.readFile(fullPath, 'utf-8', (err, paramText) => {
					if(err) throw err;

					if (paramText.length <= 2) {
						fs.unlink(fullPath);
					}
				});
			}
		}
	});
});

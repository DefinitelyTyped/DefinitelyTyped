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

const referenceRegex = /^\/\/\/\s?\<reference path=["'](.*)["'] \/\>(\s*)$/gm;

forEachTypingDir(typingPath => {
	fs.readdir(typingPath, (err, files) => {
		if (err) throw err;
		for (const file of files) {
			if (/\.ts(x?)$/.test(file)) {
				const fullPath = path.join(typingPath, file);

				console.log('Read ' + fullPath);
				let fileContent = fs.readFileSync(fullPath, 'utf-8');
				let match = referenceRegex.exec(fileContent);
				while(match !== null) {
					const referand = match[1];
					const referandFullPath = path.join(path.dirname(fullPath), referand);
					if (!fs.existsSync(referandFullPath)) {
						console.log(`${fullPath} references missing file ${referandFullPath}`);
						fileContent = fileContent.replace(match[0], '');
						fs.writeFileSync(fullPath, fileContent, 'utf-8');
					}

					match = referenceRegex.exec(fileContent);

				}
			}
		}
	});
});

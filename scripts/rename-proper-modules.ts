/// <reference types="node" />

import * as fs from 'fs';
import * as path from 'path';

const data = JSON.parse(fs.readFileSync(path.join(__dirname, '../../publish-typings/data/definitions.json'), 'utf-8'));

Object.keys(data).forEach(libName => {
	const libData = data[libName];
	if(libData.kind === 'ProperModule') {
		if (libData.definitionFilename !== 'index.d.ts') {
			console.log(`${libName} needs renaming from ${libData.definitionFilename}`);
			const src = path.join(__dirname, '..', libName, libData.definitionFilename);
			const dst = path.join(__dirname, '..', libName, 'index.d.ts');
			fs.rename(src, dst);
		}
	}
});

/// <reference path="../_ref.d.ts" />

module DT {
	'use strict';

	var path = require('path');

	export interface FileDict {
		[fullPath:string]: File;
	}

	export interface FileArrDict {
		[fullPath:string]: File[];
	}

	/////////////////////////////////
	// Given a document root + ts file pattern this class returns:
	//         all the TS files OR just tests OR just definition files
	/////////////////////////////////
	export class File {
		baseDir: string;
		filePathWithName: string;
		dir: string;
		file: string;
		ext: string;
		fullPath: string;
		references: File[] = [];

		constructor(baseDir: string, filePathWithName: string) {
			// why choose?
			this.baseDir = baseDir;
			this.filePathWithName = filePathWithName;
			this.ext = path.extname(this.filePathWithName);
			this.file = path.basename(this.filePathWithName, this.ext);
			this.dir = path.dirname(this.filePathWithName);
			this.fullPath = path.join(this.baseDir, this.dir, this.file + this.ext);

			// lock it (shallow) (needs `use strict` in each file to work)
			// Object.freeze(this);
		}

		toString(): string {
			return '[File ' + this.filePathWithName + ']';
		}
	}
}

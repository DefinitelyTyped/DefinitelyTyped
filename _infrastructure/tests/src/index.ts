/// <reference path="../_ref.d.ts" />
/// <reference path="../runner.ts" />
/// <reference path="util.ts" />

module DT {
	'use strict';

	var fs = require('fs');
	var path = require('path');
	var Lazy = require('lazy.js');
	var Promise: typeof Promise = require('bluebird');

	var readFile = Promise.promisify(fs.readFile);

	/////////////////////////////////
	// Track all files in the repo: map full path to File objects
	/////////////////////////////////
	export class FileIndex {

		fileMap: {[fullPath:string]:File};
		options: ITestRunnerOptions;

		constructor(options: ITestRunnerOptions) {
			this.options = options;
		}

		hasFile(target: string): boolean {
			return target in this.fileMap;
		}

		getFile(target: string): File {
			if (target in this.fileMap) {
				return this.fileMap[target];
			}
			return null;
		}

		parseFiles(files: File[]): Promise<void> {
			return Promise.attempt(() => {
				this.fileMap = Object.create(null);
				files.forEach((file) => {
					this.fileMap[file.fullPath] = file;
				});
				return this.loadReferences(files);
			});
		}

		private loadReferences(files: File[]): Promise<void> {
			return new Promise((resolve, reject) => {
				var queue = files.slice(0);
				var active = [];
				var max = 50;
				var next = () => {
					if (queue.length === 0 && active.length === 0) {
						resolve();
						return;
					}
					// queue paralel
					while (queue.length > 0 && active.length < max) {
						var file = queue.pop();
						active.push(file);
						this.parseFile(file).then((file) => {
							active.splice(active.indexOf(file), 1);
							next();
						}).catch((err) => {
							queue = [];
							active = [];
							reject(err);
						});
					}
				};
				next();
			});
		}

		// TODO replace with a stream?
		private parseFile(file: File): Promise<File> {
			return readFile(file.filePathWithName, {
				encoding: 'utf8',
				flag: 'r'
			}).then((content) => {
				file.references = Lazy(extractReferenceTags(content)).map((ref) => {
					return path.resolve(path.dirname(file.fullPath), ref);
				}).reduce((memo: File[], ref) => {
					if (ref in this.fileMap) {
						memo.push(this.fileMap[ref]);
					}
					else {
						console.log('not mapped? -> ' + ref);
					}
					return memo;
				}, []);
				// return the object
				return file;
			});
		}
	}
}

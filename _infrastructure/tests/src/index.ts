/// <reference path="../_ref.d.ts" />
/// <reference path="../runner.ts" />
/// <reference path="util.ts" />

module DT {
	'use strict';

	var fs = require('fs');
	var path = require('path');
	var glob = require('glob');
	var Lazy: LazyJS.LazyStatic = require('lazy.js');
	var Promise: typeof Promise = require('bluebird');

	var readFile = Promise.promisify(fs.readFile);

	/////////////////////////////////
	// Track all files in the repo: map full path to File objects
	/////////////////////////////////
	export class FileIndex {

		files: File[];
		fileMap: FileDict;
		refMap: FileArrDict;
		options: ITestRunnerOptions;
		changed: FileDict;
		removed: FileDict;
		missing: FileArrDict;

		constructor(private runner: TestRunner, options: ITestRunnerOptions) {
			this.options = options;
		}

		public hasFile(target: string): boolean {
			return target in this.fileMap;
		}

		public getFile(target: string): File {
			if (target in this.fileMap) {
				return this.fileMap[target];
			}
			return null;
		}

		public setFile(file: File): void {
			if (file.fullPath in this.fileMap) {
				throw new Error('cannot overwrite file');
			}
			this.fileMap[file.fullPath] = file;
		}

		public readIndex(): Promise<void> {
			this.fileMap = Object.create(null);

			return Promise.promisify(glob).call(glob, '**/*.ts', {
				cwd: this.runner.dtPath
			}).then((filesNames: string[]) => {
				this.files = Lazy(filesNames).filter((fileName) => {
					return this.runner.checkAcceptFile(fileName);
				}).map((fileName: string) => {
					var file = new File(this.runner.dtPath, fileName);
					this.fileMap[file.fullPath] = file;
					return file;
				}).toArray();
			});
		}

		public collectDiff(changes: string[]): Promise<void> {
			return new Promise((resolve) => {
				// filter changes and bake map for easy lookup
				this.changed = Object.create(null);
				this.removed = Object.create(null);

				Lazy(changes).filter((full) => {
					return this.runner.checkAcceptFile(full);
				}).uniq().each((local) => {
					var full = path.resolve(this.runner.dtPath, local);
					var file = this.getFile(full);
					if (!file) {
						// TODO figure out what to do here
						// what does it mean? deleted?ss
						file = new File(this.runner.dtPath, local);
						this.setFile(file);
						this.removed[full] = file;
						// console.log('not in index? %', file.fullPath);
					}
					else {
						this.changed[full] = file;
					}
				});
				// console.log('changed:\n' + Object.keys(this.changed).join('\n'));
				// console.log('removed:\n' + Object.keys(this.removed).join('\n'));
				resolve();
			});
		}

		public parseFiles(): Promise<void> {
			return this.loadReferences(this.files).then(() => {
				return this.getMissingReferences();
			});
		}

		private getMissingReferences(): Promise<void> {
			return Promise.attempt(() => {
				this.missing = Object.create(null);
				Lazy(this.removed).keys().each((removed) => {
					if (removed in this.refMap) {
						this.missing[removed] = this.refMap[removed];
					}
				});
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
			}).then(() => {
				// bake reverse reference map (referenced to referrers)
				this.refMap = Object.create(null);

				Lazy(files).each((file) => {
					Lazy(file.references).each((ref) => {
						if (ref.fullPath in this.refMap) {
							this.refMap[ref.fullPath].push(file);
						}
						else {
							this.refMap[ref.fullPath] = [file];
						}
					});
				});
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

		public collectTargets(): Promise<File[]> {
			return new Promise((resolve) => {
				// map out files linked to changes
				// - queue holds files touched by a change
				// - pre-fill with actually changed files
				// - loop queue, if current not seen:
				//    - add to result
				//    - from refMap queue all files referring to current

				var result: FileDict = Object.create(null);
				var queue = Lazy<File>(this.changed).values().toArray();

				while (queue.length > 0) {
					var next = queue.shift();
					var fp = next.fullPath;
					if (result[fp]) {
						continue;
					}
					result[fp] = next;
					if (fp in this.refMap) {
						var arr = this.refMap[fp];
						for (var i = 0, ii = arr.length; i < ii; i++) {
							// just add it and skip expensive checks
							queue.push(arr[i]);
						}
					}
				}
				resolve(Lazy<File>(result).values().toArray());
			});
		}
	}
}

/// <reference path="../_ref.d.ts" />
/// <reference path="../runner.ts" />

module DT {
	'use strict';

	var fs = require('fs');
	var path = require('path');
	var Git = require('git-wrapper');
	var Promise: typeof Promise = require('bluebird');

	export class GitChanges {

		git;
		options = {};

		constructor(private runner: TestRunner) {
			var dir = path.join(this.runner.dtPath, '.git');
			if (!fs.existsSync(dir)) {
				throw new Error('cannot locate git-dir: ' + dir);
			}
			this.options['git-dir'] = dir;

			this.git = new Git(this.options);
			this.git.exec = Promise.promisify(this.git.exec);
		}

		public readChanges(): Promise<string[]> {
			var opts = {};
			var args = ['--name-only HEAD~1'];
			return this.git.exec('diff', opts, args).then((msg: string) => {
				return msg.replace(/^\s+/, '').replace(/\s+$/, '').split(/\r?\n/g);
			});
		}
	}
}

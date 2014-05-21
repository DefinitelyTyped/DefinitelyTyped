/// <reference path='../_ref.d.ts' />
/// <reference path='../runner.ts' />
/// <reference path='exec.ts' />

module DT {
	'use strict';

	var fs = require('fs');

	var Promise: typeof Promise = require('bluebird');

	export interface TscExecOptions {
		tscVersion?: string;
		useTscParams?: boolean;
		checkNoImplicitAny?: boolean;
	}

	export class Tsc {
		public static run(tsfile: string, options: TscExecOptions): Promise<ExecResult> {
			var tscPath;
			return new Promise.attempt(() => {
				options = options || {};
				options.tscVersion = options.tscVersion || DEFAULT_TSC_VERSION;
				if (typeof options.checkNoImplicitAny === 'undefined') {
					options.checkNoImplicitAny = true;
				}
				if (typeof options.useTscParams === 'undefined') {
					options.useTscParams = true;
				}
				return fileExists(tsfile);
			}).then((exists) => {
				if (!exists) {
					throw new Error(tsfile + ' does not exist');
				}
				tscPath = './_infrastructure/tests/typescript/' + options.tscVersion + '/tsc.js';
				return fileExists(tscPath);
			}).then((exists) => {
				if (!exists) {
					throw new Error(tscPath + ' does not exist');
				}
				return fileExists(tsfile + '.tscparams');
			}).then(exists => {
				if (exists) {
					return readFile(tsfile + '.tscparams');
				} else {
					return new Promise('');
				}
			}).then((paramContents: string) => {
				var command = 'node ' + tscPath + ' --module commonjs ';
				if (options.useTscParams && paramContents.trim() !== '' && paramContents.trim() !== '""') {
					command += '@' + tsfile + '.tscparams';
				}
				else if (options.checkNoImplicitAny) {
					command += '--noImplicitAny';
				}
				return exec(command, [tsfile]);
			});
		}
	}
}

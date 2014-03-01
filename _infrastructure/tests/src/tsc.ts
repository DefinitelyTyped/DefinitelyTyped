/// <reference path='../_ref.d.ts' />
/// <reference path='../runner.ts' />
/// <reference path='exec.ts' />

module DT {
	'use strict';

	var fs = require('fs');

	var Promise: typeof Promise = require('bluebird');

	export interface TscExecOptions {
		tscVersion?:string;
		useTscParams?:boolean;
		checkNoImplicitAny?:boolean;
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
					throw new Error(tsfile + ' not exists');
				}
				tscPath = './_infrastructure/tests/typescript/' + options.tscVersion + '/tsc.js';
				return fileExists(tscPath);
			}).then((exists) => {
				if (!exists) {
					throw new Error(tscPath + ' is not exists');
				}
				return fileExists(tsfile + '.tscparams');
			}).then((exists) => {
				var command = 'node ' + tscPath + ' --module commonjs ';
				if (options.useTscParams && exists) {
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

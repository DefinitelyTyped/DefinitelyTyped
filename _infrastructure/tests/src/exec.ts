module DT {
	'use strict';

	var Promise: typeof Promise = require('bluebird');
	var nodeExec = require('child_process').exec;

	export class ExecResult {
		error;
		stdout = '';
		stderr = '';
		exitCode: number;
	}

	export function exec(filename: string, cmdLineArgs: string[]): Promise<ExecResult> {
		return new Promise((resolve) => {
			var result = new ExecResult();
			result.exitCode = null;

			var cmdLine = filename + ' ' + cmdLineArgs.join(' ');

			nodeExec(cmdLine, {maxBuffer: 1 * 1024 * 1024}, (error, stdout, stderr) => {
				result.error = error;
				result.stdout = stdout;
				result.stderr = stderr;
				result.exitCode = error ? error.code : 0;
				resolve(result);
			});
		});
	}
}

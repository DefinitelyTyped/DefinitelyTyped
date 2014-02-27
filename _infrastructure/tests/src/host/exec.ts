//﻿
// Copyright (c) Microsoft Corporation.  All rights reserved.
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//

// Allows for executing a program with command-line arguments and reading the result
interface IExec {
	exec: (filename: string, cmdLineArgs: string[], handleResult: (ExecResult) => void) => void;
}

class ExecResult {
	public stdout = "";
	public stderr = "";
	public exitCode: number;
}

class NodeExec implements IExec {
	public exec(filename: string, cmdLineArgs: string[], handleResult: (ExecResult) => void): void {
		var nodeExec = require('child_process').exec;

		var result = new ExecResult();
		result.exitCode = null;
		var cmdLine = filename + ' ' + cmdLineArgs.join(' ');

		var process = nodeExec(cmdLine, {maxBuffer: 1 * 1024 * 1024}, function (error, stdout, stderr) {
			result.stdout = stdout;
			result.stderr = stderr;
			result.exitCode = error ? error.code : 0;
			handleResult(result);
		});
	}
}

var Exec: IExec = function (): IExec {
	return new NodeExec();
}();

//
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
var ExecResult = (function () {
    function ExecResult() {
        this.stdout = "";
        this.stderr = "";
    }
    return ExecResult;
})();

var WindowsScriptHostExec = (function () {
    function WindowsScriptHostExec() {
    }
    WindowsScriptHostExec.prototype.exec = function (filename, cmdLineArgs, handleResult) {
        var result = new ExecResult();
        var shell = new ActiveXObject('WScript.Shell');
        try  {
            var process = shell.Exec(filename + ' ' + cmdLineArgs.join(' '));
        } catch (e) {
            result.stderr = e.message;
            result.exitCode = 1;
            handleResult(result);
            return;
        }

        while (process.Status != 0) {
        }

        result.exitCode = process.ExitCode;
        if (!process.StdOut.AtEndOfStream)
            result.stdout = process.StdOut.ReadAll();
        if (!process.StdErr.AtEndOfStream)
            result.stderr = process.StdErr.ReadAll();

        handleResult(result);
    };
    return WindowsScriptHostExec;
})();

var NodeExec = (function () {
    function NodeExec() {
    }
    NodeExec.prototype.exec = function (filename, cmdLineArgs, handleResult) {
        var nodeExec = require('child_process').exec;

        var result = new ExecResult();
        result.exitCode = null;
        var cmdLine = filename + ' ' + cmdLineArgs.join(' ');

        var process = nodeExec(cmdLine, function (error, stdout, stderr) {
            result.stdout = stdout;
            result.stderr = stderr;
            result.exitCode = error ? error.code : 0;
            handleResult(result);
        });
    };
    return NodeExec;
})();

var Exec = (function () {
    var global = Function("return this;").call(null);
    if (typeof global.ActiveXObject !== "undefined") {
        return new WindowsScriptHostExec();
    } else {
        return new NodeExec();
    }
})();

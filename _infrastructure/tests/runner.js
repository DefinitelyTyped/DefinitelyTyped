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

        var process = nodeExec(cmdLine, { maxBuffer: 1 * 1024 * 1024 }, function (error, stdout, stderr) {
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
var IOUtils;
(function (IOUtils) {
    // Creates the directory including its parent if not already present
    function createDirectoryStructure(ioHost, dirName) {
        if (ioHost.directoryExists(dirName)) {
            return;
        }

        var parentDirectory = ioHost.dirName(dirName);
        if (parentDirectory != "") {
            createDirectoryStructure(ioHost, parentDirectory);
        }
        ioHost.createDirectory(dirName);
    }

    // Creates a file including its directory structure if not already present
    function createFileAndFolderStructure(ioHost, fileName, useUTF8) {
        var path = ioHost.resolvePath(fileName);
        var dirName = ioHost.dirName(path);
        createDirectoryStructure(ioHost, dirName);
        return ioHost.createFile(path, useUTF8);
    }
    IOUtils.createFileAndFolderStructure = createFileAndFolderStructure;

    function throwIOError(message, error) {
        var errorMessage = message;
        if (error && error.message) {
            errorMessage += (" " + error.message);
        }
        throw new Error(errorMessage);
    }
    IOUtils.throwIOError = throwIOError;
})(IOUtils || (IOUtils = {}));

var IO = (function () {
    // Create an IO object for use inside WindowsScriptHost hosts
    // Depends on WSCript and FileSystemObject
    function getWindowsScriptHostIO() {
        var fso = new ActiveXObject("Scripting.FileSystemObject");
        var streamObjectPool = [];

        function getStreamObject() {
            if (streamObjectPool.length > 0) {
                return streamObjectPool.pop();
            } else {
                return new ActiveXObject("ADODB.Stream");
            }
        }

        function releaseStreamObject(obj) {
            streamObjectPool.push(obj);
        }

        var args = [];
        for (var i = 0; i < WScript.Arguments.length; i++) {
            args[i] = WScript.Arguments.Item(i);
        }

        return {
            readFile: function (path) {
                try  {
                    var streamObj = getStreamObject();
                    streamObj.Open();
                    streamObj.Type = 2;
                    streamObj.Charset = 'x-ansi';
                    streamObj.LoadFromFile(path);
                    var bomChar = streamObj.ReadText(2);
                    streamObj.Position = 0;
                    if ((bomChar.charCodeAt(0) == 0xFE && bomChar.charCodeAt(1) == 0xFF) || (bomChar.charCodeAt(0) == 0xFF && bomChar.charCodeAt(1) == 0xFE)) {
                        streamObj.Charset = 'unicode';
                    } else if (bomChar.charCodeAt(0) == 0xEF && bomChar.charCodeAt(1) == 0xBB) {
                        streamObj.Charset = 'utf-8';
                    }

                    // Read the whole file
                    var str = streamObj.ReadText(-1);
                    streamObj.Close();
                    releaseStreamObject(streamObj);
                    return str;
                } catch (err) {
                    IOUtils.throwIOError("Error reading file \"" + path + "\".", err);
                }
            },
            writeFile: function (path, contents) {
                var file = this.createFile(path);
                file.Write(contents);
                file.Close();
            },
            fileExists: function (path) {
                return fso.FileExists(path);
            },
            resolvePath: function (path) {
                return fso.GetAbsolutePathName(path);
            },
            dirName: function (path) {
                return fso.GetParentFolderName(path);
            },
            findFile: function (rootPath, partialFilePath) {
                var path = fso.GetAbsolutePathName(rootPath) + "/" + partialFilePath;

                while (true) {
                    if (fso.FileExists(path)) {
                        try  {
                            var content = this.readFile(path);
                            return { content: content, path: path };
                        } catch (err) {
                            //Tools.CompilerDiagnostics.debugPrint("Could not find " + path + ", trying parent");
                        }
                    } else {
                        rootPath = fso.GetParentFolderName(fso.GetAbsolutePathName(rootPath));

                        if (rootPath == "") {
                            return null;
                        } else {
                            path = fso.BuildPath(rootPath, partialFilePath);
                        }
                    }
                }
            },
            deleteFile: function (path) {
                try  {
                    if (fso.FileExists(path)) {
                        fso.DeleteFile(path, true);
                    }
                } catch (e) {
                    IOUtils.throwIOError("Couldn't delete file '" + path + "'.", e);
                }
            },
            createFile: function (path, useUTF8) {
                try  {
                    var streamObj = getStreamObject();
                    streamObj.Charset = useUTF8 ? 'utf-8' : 'x-ansi';
                    streamObj.Open();
                    return {
                        Write: function (str) {
                            streamObj.WriteText(str, 0);
                        },
                        WriteLine: function (str) {
                            streamObj.WriteText(str, 1);
                        },
                        Close: function () {
                            try  {
                                streamObj.SaveToFile(path, 2);
                            } catch (saveError) {
                                IOUtils.throwIOError("Couldn't write to file '" + path + "'.", saveError);
                            } finally {
                                if (streamObj.State != 0) {
                                    streamObj.Close();
                                }
                                releaseStreamObject(streamObj);
                            }
                        }
                    };
                } catch (creationError) {
                    IOUtils.throwIOError("Couldn't write to file '" + path + "'.", creationError);
                }
            },
            directoryExists: function (path) {
                return fso.FolderExists(path);
            },
            createDirectory: function (path) {
                try  {
                    if (!this.directoryExists(path)) {
                        fso.CreateFolder(path);
                    }
                } catch (e) {
                    IOUtils.throwIOError("Couldn't create directory '" + path + "'.", e);
                }
            },
            dir: function (path, spec, options) {
                options = options || {};
                function filesInFolder(folder, root) {
                    var paths = [];
                    var fc;

                    if (options.recursive) {
                        fc = new Enumerator(folder.subfolders);

                        for (; !fc.atEnd(); fc.moveNext()) {
                            paths = paths.concat(filesInFolder(fc.item(), root + "/" + fc.item().Name));
                        }
                    }

                    fc = new Enumerator(folder.files);

                    for (; !fc.atEnd(); fc.moveNext()) {
                        if (!spec || fc.item().Name.match(spec)) {
                            paths.push(root + "/" + fc.item().Name);
                        }
                    }

                    return paths;
                }

                var folder = fso.GetFolder(path);
                var paths = [];

                return filesInFolder(folder, path);
            },
            print: function (str) {
                WScript.StdOut.Write(str);
            },
            printLine: function (str) {
                WScript.Echo(str);
            },
            arguments: args,
            stderr: WScript.StdErr,
            stdout: WScript.StdOut,
            watchFile: null,
            run: function (source, filename) {
                try  {
                    eval(source);
                } catch (e) {
                    IOUtils.throwIOError("Error while executing file '" + filename + "'.", e);
                }
            },
            getExecutingFilePath: function () {
                return WScript.ScriptFullName;
            },
            quit: function (exitCode) {
                if (typeof exitCode === "undefined") { exitCode = 0; }
                try  {
                    WScript.Quit(exitCode);
                } catch (e) {
                }
            }
        };
    }
    ;

    // Create an IO object for use inside Node.js hosts
    // Depends on 'fs' and 'path' modules
    function getNodeIO() {
        var _fs = require('fs');
        var _path = require('path');
        var _module = require('module');

        return {
            readFile: function (file) {
                try  {
                    var buffer = _fs.readFileSync(file);
                    switch (buffer[0]) {
                        case 0xFE:
                            if (buffer[1] == 0xFF) {
                                // utf16-be. Reading the buffer as big endian is not supported, so convert it to
                                // Little Endian first
                                var i = 0;
                                while ((i + 1) < buffer.length) {
                                    var temp = buffer[i];
                                    buffer[i] = buffer[i + 1];
                                    buffer[i + 1] = temp;
                                    i += 2;
                                }
                                return buffer.toString("ucs2", 2);
                            }
                            break;
                        case 0xFF:
                            if (buffer[1] == 0xFE) {
                                // utf16-le
                                return buffer.toString("ucs2", 2);
                            }
                            break;
                        case 0xEF:
                            if (buffer[1] == 0xBB) {
                                // utf-8
                                return buffer.toString("utf8", 3);
                            }
                    }

                    // Default behaviour
                    return buffer.toString();
                } catch (e) {
                    IOUtils.throwIOError("Error reading file \"" + file + "\".", e);
                }
            },
            writeFile: _fs.writeFileSync,
            deleteFile: function (path) {
                try  {
                    _fs.unlinkSync(path);
                } catch (e) {
                    IOUtils.throwIOError("Couldn't delete file '" + path + "'.", e);
                }
            },
            fileExists: function (path) {
                return _fs.existsSync(path);
            },
            createFile: function (path, useUTF8) {
                function mkdirRecursiveSync(path) {
                    var stats = _fs.statSync(path);
                    if (stats.isFile()) {
                        IOUtils.throwIOError("\"" + path + "\" exists but isn't a directory.", null);
                    } else if (stats.isDirectory()) {
                        return;
                    } else {
                        mkdirRecursiveSync(_path.dirname(path));
                        _fs.mkdirSync(path, 0775);
                    }
                }

                mkdirRecursiveSync(_path.dirname(path));

                try  {
                    var fd = _fs.openSync(path, 'w');
                } catch (e) {
                    IOUtils.throwIOError("Couldn't write to file '" + path + "'.", e);
                }
                return {
                    Write: function (str) {
                        _fs.writeSync(fd, str);
                    },
                    WriteLine: function (str) {
                        _fs.writeSync(fd, str + '\r\n');
                    },
                    Close: function () {
                        _fs.closeSync(fd);
                        fd = null;
                    }
                };
            },
            dir: function dir(path, spec, options) {
                options = options || {};

                function filesInFolder(folder, deep) {
                    var paths = [];

                    var files = _fs.readdirSync(folder);
                    for (var i = 0; i < files.length; i++) {
                        var stat = _fs.statSync(folder + "/" + files[i]);
                        if (options.recursive && stat.isDirectory()) {
                            if (deep < (options.deep || 100)) {
                                paths = paths.concat(filesInFolder(folder + "/" + files[i], 1));
                            }
                        } else if (stat.isFile() && (!spec || files[i].match(spec))) {
                            paths.push(folder + "/" + files[i]);
                        }
                    }

                    return paths;
                }

                return filesInFolder(path, 0);
            },
            createDirectory: function (path) {
                try  {
                    if (!this.directoryExists(path)) {
                        _fs.mkdirSync(path);
                    }
                } catch (e) {
                    IOUtils.throwIOError("Couldn't create directory '" + path + "'.", e);
                }
            },
            directoryExists: function (path) {
                return _fs.existsSync(path) && _fs.lstatSync(path).isDirectory();
            },
            resolvePath: function (path) {
                return _path.resolve(path);
            },
            dirName: function (path) {
                return _path.dirname(path);
            },
            findFile: function (rootPath, partialFilePath) {
                var path = rootPath + "/" + partialFilePath;

                while (true) {
                    if (_fs.existsSync(path)) {
                        try  {
                            var content = this.readFile(path);
                            return { content: content, path: path };
                        } catch (err) {
                            //Tools.CompilerDiagnostics.debugPrint(("Could not find " + path) + ", trying parent");
                        }
                    } else {
                        var parentPath = _path.resolve(rootPath, "..");

                        if (rootPath === parentPath) {
                            return null;
                        } else {
                            rootPath = parentPath;
                            path = _path.resolve(rootPath, partialFilePath);
                        }
                    }
                }
            },
            print: function (str) {
                process.stdout.write(str);
            },
            printLine: function (str) {
                process.stdout.write(str + '\n');
            },
            arguments: process.argv.slice(2),
            stderr: {
                Write: function (str) {
                    process.stderr.write(str);
                },
                WriteLine: function (str) {
                    process.stderr.write(str + '\n');
                },
                Close: function () {
                }
            },
            stdout: {
                Write: function (str) {
                    process.stdout.write(str);
                },
                WriteLine: function (str) {
                    process.stdout.write(str + '\n');
                },
                Close: function () {
                }
            },
            watchFile: function (filename, callback) {
                var firstRun = true;
                var processingChange = false;

                var fileChanged = function (curr, prev) {
                    if (!firstRun) {
                        if (curr.mtime < prev.mtime) {
                            return;
                        }

                        _fs.unwatchFile(filename, fileChanged);
                        if (!processingChange) {
                            processingChange = true;
                            callback(filename);
                            setTimeout(function () {
                                processingChange = false;
                            }, 100);
                        }
                    }
                    firstRun = false;
                    _fs.watchFile(filename, { persistent: true, interval: 500 }, fileChanged);
                };

                fileChanged();
                return {
                    filename: filename,
                    close: function () {
                        _fs.unwatchFile(filename, fileChanged);
                    }
                };
            },
            run: function (source, filename) {
                require.main.filename = filename;
                require.main.paths = _module._nodeModulePaths(_path.dirname(_fs.realpathSync(filename)));
                require.main._compile(source, filename);
            },
            getExecutingFilePath: function () {
                return process.mainModule.filename;
            },
            quit: process.exit
        };
    }
    ;

    if (typeof ActiveXObject === "function")
        return getWindowsScriptHostIO();
else if (typeof require === "function")
        return getNodeIO();
else
        return null;
})();
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var DefinitelyTyped;
(function (DefinitelyTyped) {
    /// <reference path='../../node/node.d.ts' />
    /// <reference path='src/exec.ts' />
    /// <reference path='src/io.ts' />
    (function (TestManager) {
        var path = require('path');

        TestManager.DEFAULT_TSC_VERSION = "0.9.1.1";

        function endsWith(str, suffix) {
            return str.indexOf(suffix, str.length - suffix.length) !== -1;
        }

        var Tsc = (function () {
            function Tsc() {
            }
            Tsc.run = function (tsfile, options, callback) {
                options = options || {};
                options.tscVersion = options.tscVersion || TestManager.DEFAULT_TSC_VERSION;
                if (typeof options.checkNoImplicitAny === "undefined") {
                    options.checkNoImplicitAny = true;
                }
                if (typeof options.useTscParams === "undefined") {
                    options.useTscParams = true;
                }

                if (!IO.fileExists(tsfile)) {
                    throw new Error(tsfile + " not exists");
                }

                var tscPath = './_infrastructure/tests/typescript/' + options.tscVersion + '/tsc.js';
                if (!IO.fileExists(tscPath)) {
                    throw new Error(tscPath + ' is not exists');
                }
                var command = 'node ' + tscPath + ' --module commonjs ';
                if (options.useTscParams && IO.fileExists(tsfile + '.tscparams')) {
                    command += '@' + tsfile + '.tscparams';
                } else if (options.checkNoImplicitAny) {
                    command += '--noImplicitAny';
                }
                Exec.exec(command, [tsfile], function (execResult) {
                    callback(execResult);
                });
            };
            return Tsc;
        })();

        var Test = (function () {
            function Test(suite, tsfile, options) {
                this.suite = suite;
                this.tsfile = tsfile;
                this.options = options;
            }
            Test.prototype.run = function (callback) {
                var _this = this;
                Tsc.run(this.tsfile.filePathWithName, this.options, function (execResult) {
                    var testResult = new TestResult();
                    testResult.hostedBy = _this.suite;
                    testResult.targetFile = _this.tsfile;
                    testResult.options = _this.options;

                    testResult.stdout = execResult.stdout;
                    testResult.stderr = execResult.stderr;
                    testResult.exitCode = execResult.exitCode;

                    callback(testResult);
                });
            };
            return Test;
        })();

        /////////////////////////////////
        // Timer.start starts a timer
        // Timer.end stops the timer and sets asString to the pretty print value
        /////////////////////////////////
        var Timer = (function () {
            function Timer() {
                this.time = 0;
            }
            Timer.prototype.start = function () {
                this.time = 0;
                this.startTime = this.now();
            };

            Timer.prototype.now = function () {
                return Date.now();
            };

            Timer.prototype.end = function () {
                this.time = (this.now() - this.startTime) / 1000;
                this.asString = Timer.prettyDate(this.startTime, this.now());
            };

            Timer.prettyDate = function (date1, date2) {
                var diff = ((date2 - date1) / 1000), day_diff = Math.floor(diff / 86400);

                if (isNaN(day_diff) || day_diff < 0 || day_diff >= 31)
                    return;

                return (day_diff == 0 && (diff < 60 && (diff + " seconds") || diff < 120 && "1 minute" || diff < 3600 && Math.floor(diff / 60) + " minutes" || diff < 7200 && "1 hour" || diff < 86400 && Math.floor(diff / 3600) + " hours") || day_diff == 1 && "Yesterday" || day_diff < 7 && day_diff + " days" || day_diff < 31 && Math.ceil(day_diff / 7) + " weeks");
            };
            return Timer;
        })();
        TestManager.Timer = Timer;

        /////////////////////////////////
        // Given a document root + ts file pattern this class returns:
        //         all the TS files OR just tests OR just definition files
        /////////////////////////////////
        var File = (function () {
            function File(baseDir, filePathWithName) {
                this.baseDir = baseDir;
                this.filePathWithName = filePathWithName;
                var dirName = path.dirname(this.filePathWithName.substr(this.baseDir.length + 1)).replace('\\', '/');
                this.dir = dirName.split('/')[0];
                this.file = path.basename(this.filePathWithName, '.ts');
                this.ext = path.extname(this.filePathWithName);
            }
            Object.defineProperty(File.prototype, "formatName", {
                get: // From '/complete/path/to/file' to 'specfolder/specfile.d.ts'
                function () {
                    var dirName = path.dirname(this.filePathWithName.substr(this.baseDir.length + 1)).replace('\\', '/');
                    return this.dir + ((dirName.split('/').length > 1) ? '/-/' : '/') + this.file + this.ext;
                },
                enumerable: true,
                configurable: true
            });
            return File;
        })();
        TestManager.File = File;

        /////////////////////////////////
        // Test results
        /////////////////////////////////
        var TestResult = (function () {
            function TestResult() {
            }
            Object.defineProperty(TestResult.prototype, "success", {
                get: function () {
                    return this.exitCode === 0;
                },
                enumerable: true,
                configurable: true
            });
            return TestResult;
        })();
        TestManager.TestResult = TestResult;

        /////////////////////////////////
        // Default test reporter
        /////////////////////////////////
        var DefaultTestReporter = (function () {
            function DefaultTestReporter(print) {
                this.print = print;
            }
            DefaultTestReporter.prototype.printPositiveCharacter = function (index, testResult) {
                this.print.out('\33[36m\33[1m' + '.' + '\33[0m');

                this.printBreakIfNeeded(index);
            };

            DefaultTestReporter.prototype.printNegativeCharacter = function (index, testResult) {
                this.print.out("x");

                this.printBreakIfNeeded(index);
            };

            DefaultTestReporter.prototype.printBreakIfNeeded = function (index) {
                if (index % this.print.WIDTH === 0) {
                    this.print.printBreak();
                }
            };
            return DefaultTestReporter;
        })();

        /////////////////////////////////
        // All the common things that we pring are functions of this class
        /////////////////////////////////
        var Print = (function () {
            function Print(version, typings, tests, tsFiles) {
                this.version = version;
                this.typings = typings;
                this.tests = tests;
                this.tsFiles = tsFiles;
                this.WIDTH = 77;
            }
            Print.prototype.out = function (s) {
                process.stdout.write(s);
                return this;
            };

            Print.prototype.repeat = function (s, times) {
                return new Array(times + 1).join(s);
            };

            Print.prototype.printHeader = function () {
                this.out('=============================================================================\n');
                this.out('                    \33[36m\33[1mDefinitelyTyped test runner 0.4.0\33[0m\n');
                this.out('=============================================================================\n');
                this.out(' \33[36m\33[1mTypescript version:\33[0m ' + this.version + '\n');
                this.out(' \33[36m\33[1mTypings           :\33[0m ' + this.typings + '\n');
                this.out(' \33[36m\33[1mTests             :\33[0m ' + this.tests + '\n');
                this.out(' \33[36m\33[1mTypeScript files  :\33[0m ' + this.tsFiles + '\n');
            };

            Print.prototype.printSuiteHeader = function (title) {
                var left = Math.floor((this.WIDTH - title.length) / 2) - 1;
                var right = Math.ceil((this.WIDTH - title.length) / 2) - 1;
                this.out(this.repeat("=", left)).out(" \33[34m\33[1m");
                this.out(title);
                this.out("\33[0m ").out(this.repeat("=", right)).printBreak();
            };

            Print.prototype.printDiv = function () {
                this.out('-----------------------------------------------------------------------------\n');
            };

            Print.prototype.printBoldDiv = function () {
                this.out('=============================================================================\n');
            };

            Print.prototype.printErrorsHeader = function () {
                this.out('=============================================================================\n');
                this.out('                    \33[34m\33[1mErrors in files\33[0m \n');
                this.out('=============================================================================\n');
            };

            Print.prototype.printErrorsForFile = function (testResult) {
                this.out('----------------- For file:' + testResult.targetFile.formatName);
                this.printBreak().out(testResult.stderr).printBreak();
            };

            Print.prototype.printBreak = function () {
                this.out('\n');
                return this;
            };

            Print.prototype.clearCurrentLine = function () {
                this.out("\r\33[K");
                return this;
            };

            Print.prototype.printSuccessCount = function (current, total) {
                this.out(' \33[36m\33[1mSuccessful      :\33[0m \33[32m\33[1m' + ((current / total) * 100).toFixed(2) + '% (' + current + '/' + total + ')\33[0m\n');
            };

            Print.prototype.printFailedCount = function (current, total) {
                this.out(' \33[36m\33[1mFailure         :\33[0m \33[31m\33[1m' + ((current / total) * 100).toFixed(2) + '% (' + current + '/' + total + ')\33[0m\n');
            };

            Print.prototype.printTypingsWithoutTestsMessage = function () {
                this.out(' \33[36m\33[1mTyping without tests\33[0m\n');
            };

            Print.prototype.printTotalMessage = function () {
                this.out(' \33[36m\33[1mTotal\33[0m\n');
            };

            Print.prototype.printElapsedTime = function (time, s) {
                this.out(' \33[36m\33[1mElapsed time    :\33[0m ~' + time + ' (' + s + 's)\n');
            };

            Print.prototype.printSuiteErrorCount = function (errorHeadline, current, total, valuesColor) {
                if (typeof valuesColor === "undefined") { valuesColor = '\33[31m\33[1m'; }
                this.out(' \33[36m\33[1m').out(errorHeadline).out(this.repeat(' ', 16 - errorHeadline.length));
                this.out(':\33[0m ' + valuesColor + ((current / total) * 100).toFixed(2) + '% (' + current + '/' + total + ')\33[0m\n');
            };

            Print.prototype.printTypingsWithoutTestName = function (file) {
                this.out(' - \33[33m\33[1m' + file + '\33[0m\n');
            };

            Print.prototype.printTypingsWithoutTest = function (withoutTestTypings) {
                var _this = this;
                if (withoutTestTypings.length > 0) {
                    this.printTypingsWithoutTestsMessage();

                    this.printDiv();
                    withoutTestTypings.forEach(function (t) {
                        _this.printTypingsWithoutTestName(t);
                    });
                }
            };
            return Print;
        })();

        /////////////////////////////////
        // Base class for test suite
        /////////////////////////////////
        var TestSuiteBase = (function () {
            function TestSuiteBase(options, testSuiteName, errorHeadline) {
                this.options = options;
                this.testSuiteName = testSuiteName;
                this.errorHeadline = errorHeadline;
                this.timer = new Timer();
                this.testResults = [];
                this.printErrorCount = true;
            }
            TestSuiteBase.prototype.filterTargetFiles = function (files) {
                throw new Error("please implement this method");
            };

            TestSuiteBase.prototype.start = function (targetFiles, testCallback, suiteCallback) {
                var _this = this;
                targetFiles = this.filterTargetFiles(targetFiles);
                this.timer.start();
                var count = 0;

                // exec test is async process. serialize.
                var executor = function () {
                    var targetFile = targetFiles[count];
                    if (targetFile) {
                        _this.runTest(targetFile, function (result) {
                            testCallback(result, count + 1);
                            count++;
                            executor();
                        });
                    } else {
                        _this.timer.end();
                        _this.finish(suiteCallback);
                    }
                };
                executor();
            };

            TestSuiteBase.prototype.runTest = function (targetFile, callback) {
                var _this = this;
                new Test(this, targetFile, { tscVersion: this.options.tscVersion }).run(function (result) {
                    _this.testResults.push(result);
                    callback(result);
                });
            };

            TestSuiteBase.prototype.finish = function (suiteCallback) {
                suiteCallback(this);
            };

            Object.defineProperty(TestSuiteBase.prototype, "okTests", {
                get: function () {
                    return this.testResults.filter(function (r) {
                        return r.success;
                    });
                },
                enumerable: true,
                configurable: true
            });

            Object.defineProperty(TestSuiteBase.prototype, "ngTests", {
                get: function () {
                    return this.testResults.filter(function (r) {
                        return !r.success;
                    });
                },
                enumerable: true,
                configurable: true
            });
            return TestSuiteBase;
        })();

        /////////////////////////////////
        // .d.ts syntax inspection
        /////////////////////////////////
        var SyntaxChecking = (function (_super) {
            __extends(SyntaxChecking, _super);
            function SyntaxChecking(options) {
                _super.call(this, options, "Syntax checking", "Syntax error");
            }
            SyntaxChecking.prototype.filterTargetFiles = function (files) {
                return files.filter(function (file) {
                    return endsWith(file.formatName.toUpperCase(), '.D.TS');
                });
            };
            return SyntaxChecking;
        })(TestSuiteBase);

        /////////////////////////////////
        // Compile with *-tests.ts
        /////////////////////////////////
        var TestEval = (function (_super) {
            __extends(TestEval, _super);
            function TestEval(options) {
                _super.call(this, options, "Typing tests", "Failed tests");
            }
            TestEval.prototype.filterTargetFiles = function (files) {
                return files.filter(function (file) {
                    return endsWith(file.formatName.toUpperCase(), '-TESTS.TS');
                });
            };
            return TestEval;
        })(TestSuiteBase);

        /////////////////////////////////
        // Try compile without .tscparams
        // It may indicate that it is compatible with --noImplicitAny maybe...
        /////////////////////////////////
        var FindNotRequiredTscparams = (function (_super) {
            __extends(FindNotRequiredTscparams, _super);
            function FindNotRequiredTscparams(options, print) {
                var _this = this;
                _super.call(this, options, "Find not required .tscparams files", "New arrival!");
                this.print = print;
                this.printErrorCount = false;

                this.testReporter = {
                    printPositiveCharacter: function (index, testResult) {
                        _this.print.clearCurrentLine().printTypingsWithoutTestName(testResult.targetFile.formatName);
                    },
                    printNegativeCharacter: function (index, testResult) {
                    }
                };
            }
            FindNotRequiredTscparams.prototype.filterTargetFiles = function (files) {
                return files.filter(function (file) {
                    return IO.fileExists(file.filePathWithName + '.tscparams');
                });
            };

            FindNotRequiredTscparams.prototype.runTest = function (targetFile, callback) {
                var _this = this;
                this.print.clearCurrentLine().out(targetFile.formatName);
                new Test(this, targetFile, { tscVersion: this.options.tscVersion, useTscParams: false, checkNoImplicitAny: true }).run(function (result) {
                    _this.testResults.push(result);
                    callback(result);
                });
            };

            FindNotRequiredTscparams.prototype.finish = function (suiteCallback) {
                this.print.clearCurrentLine();
                suiteCallback(this);
            };

            Object.defineProperty(FindNotRequiredTscparams.prototype, "ngTests", {
                get: function () {
                    // Do not show ng test results
                    return [];
                },
                enumerable: true,
                configurable: true
            });
            return FindNotRequiredTscparams;
        })(TestSuiteBase);

        /////////////////////////////////
        // The main class to kick things off
        /////////////////////////////////
        var TestRunner = (function () {
            function TestRunner(dtPath, options) {
                if (typeof options === "undefined") { options = { tscVersion: TestManager.DEFAULT_TSC_VERSION }; }
                this.options = options;
                this.suites = [];
                this.options.findNotRequiredTscparams = !!this.options.findNotRequiredTscparams;

                var filesName = IO.dir(dtPath, /.\.ts/g, { recursive: true }).sort();

                // only includes .d.ts or -tests.ts or -test.ts or .ts
                filesName = filesName.filter(function (fileName) {
                    return fileName.indexOf('../_infrastructure') < 0;
                }).filter(function (fileName) {
                    return !endsWith(fileName, ".tscparams");
                });
                this.files = filesName.map(function (fileName) {
                    return new File(dtPath, fileName);
                });
            }
            TestRunner.prototype.addSuite = function (suite) {
                this.suites.push(suite);
            };

            TestRunner.prototype.run = function () {
                var _this = this;
                this.timer = new Timer();
                this.timer.start();

                var syntaxChecking = new SyntaxChecking(this.options);
                var testEval = new TestEval(this.options);
                if (!this.options.findNotRequiredTscparams) {
                    this.addSuite(syntaxChecking);
                    this.addSuite(testEval);
                }

                var typings = syntaxChecking.filterTargetFiles(this.files).length;
                var testFiles = testEval.filterTargetFiles(this.files).length;
                this.print = new Print(this.options.tscVersion, typings, testFiles, this.files.length);
                this.print.printHeader();

                if (this.options.findNotRequiredTscparams) {
                    this.addSuite(new FindNotRequiredTscparams(this.options, this.print));
                }

                var count = 0;
                var executor = function () {
                    var suite = _this.suites[count];
                    if (suite) {
                        suite.testReporter = suite.testReporter || new DefaultTestReporter(_this.print);

                        _this.print.printSuiteHeader(suite.testSuiteName);
                        var targetFiles = suite.filterTargetFiles(_this.files);
                        suite.start(targetFiles, function (testResult, index) {
                            _this.testCompleteCallback(testResult, index);
                        }, function (suite) {
                            _this.suiteCompleteCallback(suite);
                            count++;
                            executor();
                        });
                    } else {
                        _this.timer.end();
                        _this.allTestCompleteCallback();
                    }
                };
                executor();
            };

            TestRunner.prototype.testCompleteCallback = function (testResult, index) {
                var reporter = testResult.hostedBy.testReporter;
                if (testResult.success) {
                    reporter.printPositiveCharacter(index, testResult);
                } else {
                    reporter.printNegativeCharacter(index, testResult);
                }
            };

            TestRunner.prototype.suiteCompleteCallback = function (suite) {
                this.print.printBreak();

                this.print.printDiv();
                this.print.printElapsedTime(suite.timer.asString, suite.timer.time);
                this.print.printSuccessCount(suite.okTests.length, suite.testResults.length);
                this.print.printFailedCount(suite.ngTests.length, suite.testResults.length);
            };

            TestRunner.prototype.allTestCompleteCallback = function () {
                var _this = this;
                var testEval = this.suites.filter(function (suite) {
                    return suite instanceof TestEval;
                })[0];
                if (testEval) {
                    var existsTestTypings = testEval.testResults.map(function (testResult) {
                        return testResult.targetFile.dir;
                    }).reduce(function (a, b) {
                        return a.indexOf(b) < 0 ? a.concat([b]) : a;
                    }, []);
                    var typings = this.files.map(function (file) {
                        return file.dir;
                    }).reduce(function (a, b) {
                        return a.indexOf(b) < 0 ? a.concat([b]) : a;
                    }, []);
                    var withoutTestTypings = typings.filter(function (typing) {
                        return existsTestTypings.indexOf(typing) < 0;
                    });
                    this.print.printDiv();
                    this.print.printTypingsWithoutTest(withoutTestTypings);
                }

                this.print.printDiv();
                this.print.printTotalMessage();

                this.print.printDiv();
                this.print.printElapsedTime(this.timer.asString, this.timer.time);
                this.suites.filter(function (suite) {
                    return suite.printErrorCount;
                }).forEach(function (suite) {
                    _this.print.printSuiteErrorCount(suite.errorHeadline, suite.ngTests.length, suite.testResults.length);
                });
                if (testEval) {
                    this.print.printSuiteErrorCount("Without tests", withoutTestTypings.length, typings.length, '\33[33m\33[1m');
                }

                this.print.printDiv();
                if (this.suites.some(function (suite) {
                    return suite.ngTests.length !== 0;
                })) {
                    this.print.printErrorsHeader();

                    this.suites.filter(function (suite) {
                        return suite.ngTests.length !== 0;
                    }).forEach(function (suite) {
                        suite.ngTests.forEach(function (testResult) {
                            _this.print.printErrorsForFile(testResult);
                        });
                        _this.print.printBoldDiv();
                    });

                    process.exit(1);
                }
            };
            return TestRunner;
        })();
        TestManager.TestRunner = TestRunner;
    })(DefinitelyTyped.TestManager || (DefinitelyTyped.TestManager = {}));
    var TestManager = DefinitelyTyped.TestManager;
})(DefinitelyTyped || (DefinitelyTyped = {}));

var dtPath = __dirname + '/../..';
var findNotRequiredTscparams = process.argv.some(function (arg) {
    return arg == "--try-without-tscparams";
});
var tscVersionIndex = process.argv.indexOf("--tsc-version");
var tscVersion = DefinitelyTyped.TestManager.DEFAULT_TSC_VERSION;
if (-1 < tscVersionIndex) {
    tscVersion = process.argv[tscVersionIndex + 1];
}

var runner = new DefinitelyTyped.TestManager.TestRunner(dtPath, {
    tscVersion: tscVersion,
    findNotRequiredTscparams: findNotRequiredTscparams
});
runner.run();

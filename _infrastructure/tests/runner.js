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
/// <reference path='src/exec.ts' />
/// <reference path='src/io.ts' />
var DefinitelyTyped;
(function (DefinitelyTyped) {
    (function (TestManager) {
        var path = require('path');

        function endsWith(str, suffix) {
            return str.indexOf(suffix, str.length - suffix.length) !== -1;
        }

        var Iterator = (function () {
            function Iterator(list) {
                this.list = list;
                this.index = -1;
            }
            Iterator.prototype.next = function () {
                this.index++;
                return this.list[this.index];
            };

            Iterator.prototype.hasNext = function () {
                return this.list[1 + this.index] != null;
            };
            return Iterator;
        })();

        var Tsc = (function () {
            function Tsc() {
            }
            Tsc.run = function (tsfile, callback) {
                Exec.exec('node ./_infrastructure/tests/typescript/tsc.js --module commonjs ', [tsfile], function (ExecResult) {
                    callback(ExecResult);
                });
            };
            return Tsc;
        })();

        var Test = (function () {
            function Test(tsfile) {
                this.tsfile = tsfile;
            }
            Test.prototype.run = function (callback) {
                Tsc.run(this.tsfile, callback);
            };
            return Test;
        })();

        var Typing = (function () {
            function Typing(name, baseDir) {
                this.name = name;
                this.fileHandler = new FileHandler(baseDir + '/' + name + '/', /.\.ts/g);
            }
            return Typing;
        })();

        var FileHandler = (function () {
            function FileHandler(path, pattern) {
                this.path = path;
                this.files = [];
                this.typings = [];
                this.files = IO.dir(path, pattern, { recursive: true }).sort();
            }
            FileHandler.prototype.allTS = function () {
                return this.files;
            };

            FileHandler.prototype.allTests = function () {
                var tests = [];

                for (var i = 0; i < this.files.length; i++) {
                    if (endsWith(this.files[i].toUpperCase(), '-TESTS.TS')) {
                        tests.push(this.files[i]);
                    }
                }

                return tests;
            };

            FileHandler.prototype.allTypings = function () {
                var typings = {};

                for (var i = 0; i < this.files.length; i++) {
                    var file = this.files[i];
                    var firName = path.dirname(file.substr(this.path.length + 1)).replace('\\', '/');
                    var dir = firName.split('/')[0];

                    if (!typings[dir])
                        typings[dir] = true;
                }

                var list = [];
                for (var attr in typings) {
                    list.push(attr);
                }

                return list;
            };
            return FileHandler;
        })();

        var Timer = (function () {
            function Timer() {
                this.time = 0;
            }
            Timer.prettyDate = function (date1, date2) {
                var diff = ((date2 - date1) / 1000), day_diff = Math.floor(diff / 86400);

                if (isNaN(day_diff) || day_diff < 0 || day_diff >= 31)
                    return;

                return (day_diff == 0 && (diff < 60 && (diff + " secconds") || diff < 120 && "1 minute" || diff < 3600 && Math.floor(diff / 60) + " minutes" || diff < 7200 && "1 hour" || diff < 86400 && Math.floor(diff / 3600) + " hours") || day_diff == 1 && "Yesterday" || day_diff < 7 && day_diff + " days" || day_diff < 31 && Math.ceil(day_diff / 7) + " weeks");
            };

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
            return Timer;
        })();

        var Print = (function () {
            function Print(version, typings, tsFiles) {
                this.version = version;
                this.typings = typings;
                this.tsFiles = tsFiles;
            }
            Print.prototype.out = function (s) {
                process.stdout.write(s);
            };

            Print.prototype.printHeader = function () {
                this.out('=============================================================================\n');
                this.out('                    \33[36m\33[1mDefinitelyTyped test runner 0.2.1\33[0m\n');
                this.out('=============================================================================\n');
                this.out(' \33[36m\33[1mTypescript version:\33[0m ' + this.version + '\n');
                this.out(' \33[36m\33[1mTypings           :\33[0m ' + this.typings + '\n');
                this.out(' \33[36m\33[1mTypeScript files  :\33[0m ' + this.tsFiles + '\n');
            };

            Print.prototype.printSyntaxChecking = function () {
                this.out('============================ \33[34m\33[1mSyntax checking\33[0m ================================\n');
            };

            Print.prototype.printTypingTests = function () {
                this.out('============================= \33[34m\33[1mTyping tests\33[0m ==================================\n');
            };

            Print.prototype.printSuccess = function () {
                this.out('\33[36m\33[1m.\33[0m');
            };

            Print.prototype.printFailure = function () {
                this.out('x');
            };

            Print.prototype.printDiv = function () {
                this.out('-----------------------------------------------------------------------------\n');
            };

            Print.prototype.printfilesWithSintaxErrorMessage = function () {
                this.out(' \33[36m\33[1mFiles with syntax error\33[0m\n');
            };

            Print.prototype.printFailedTestMessage = function () {
                this.out(' \33[36m\33[1mFailed tests\33[0m\n');
            };

            Print.prototype.printTypingsWithoutTestsMessage = function () {
                this.out(' \33[36m\33[1mTyping without tests\33[0m\n');
            };

            Print.prototype.printTotalMessage = function () {
                this.out(' \33[36m\33[1mTotal\33[0m\n');
            };

            Print.prototype.printErrorFile = function (file) {
                this.out(' - ' + file + '\n');
            };

            Print.prototype.printTypingsWithoutTest = function (file) {
                this.out(' - \33[33m\33[1m' + file + '\33[0m\n');
            };

            Print.prototype.breack = function () {
                this.out('\n');
            };

            Print.prototype.printSuccessCount = function (current, total) {
                this.out(' \33[36m\33[1mSuccessful      :\33[0m \33[32m\33[1m' + ((current / total) * 100).toFixed(2) + '% (' + current + '/' + total + ')\33[0m\n');
            };

            Print.prototype.printFailedCount = function (current, total) {
                this.out(' \33[36m\33[1mFailure         :\33[0m \33[31m\33[1m' + ((current / total) * 100).toFixed(2) + '% (' + current + '/' + total + ')\33[0m\n');
            };

            Print.prototype.printElapsedTime = function (time, s) {
                this.out(' \33[36m\33[1mElapsed time    :\33[0m ~' + time + ' (' + s + 's)\n');
            };

            Print.prototype.printSyntaxErrorCount = function (current, total) {
                this.out(' \33[36m\33[1mSyntax error    :\33[0m \33[31m\33[1m' + ((current / total) * 100).toFixed(2) + '% (' + current + '/' + total + ')\33[0m\n');
            };

            Print.prototype.printTestErrorCount = function (current, total) {
                this.out(' \33[36m\33[1mFailed tests    :\33[0m \33[31m\33[1m' + ((current / total) * 100).toFixed(2) + '% (' + current + '/' + total + ')\33[0m\n');
            };

            Print.prototype.printWithoutTestCount = function (current, total) {
                this.out(' \33[36m\33[1mWithout tests   :\33[0m \33[33m\33[1m' + ((current / total) * 100).toFixed(2) + '% (' + current + '/' + total + ')\33[0m\n');
            };
            return Print;
        })();

        var File = (function () {
            function File(name, hasError) {
                this.name = name;
                this.hasError = hasError;
            }
            File.prototype.formatName = function (baseDir) {
                var dirName = path.dirname(this.name.substr(baseDir.length + 1)).replace('\\', '/');
                var dir = dirName.split('/')[0];
                var file = path.basename(this.name, '.ts');
                var ext = path.extname(this.name);

                return dir + ((dirName.split('/').length > 1) ? '/-/' : '/') + '\33[36m\33[1m' + file + '\33[0m' + ext;
            };
            return File;
        })();

        var SyntaxChecking = (function () {
            function SyntaxChecking(fileHandler, out) {
                this.fileHandler = fileHandler;
                this.out = out;
                this.files = [];
                this.timer = new Timer();
            }
            SyntaxChecking.prototype.getFailedFiles = function () {
                var list = [];

                for (var i = 0; i < this.files.length; i++) {
                    if (this.files[i].hasError) {
                        list.push(this.files[i]);
                    }
                }

                return list;
            };

            SyntaxChecking.prototype.getSuccessFiles = function () {
                var list = [];

                for (var i = 0; i < this.files.length; i++) {
                    if (!this.files[i].hasError) {
                        list.push(this.files[i]);
                    }
                }

                return list;
            };

            SyntaxChecking.prototype.printStats = function () {
                this.out.printDiv();
                this.out.printElapsedTime(this.timer.asString, this.timer.time);
                this.out.printSuccessCount(this.getSuccessFiles().length, this.files.length);
                this.out.printFailedCount(this.getFailedFiles().length, this.files.length);
            };

            SyntaxChecking.prototype.printFailedFiles = function () {
                if (this.getFailedFiles().length > 0) {
                    this.out.printDiv();

                    this.out.printfilesWithSintaxErrorMessage();

                    this.out.printDiv();

                    for (var i = 0; i < this.getFailedFiles().length; i++) {
                        var errorFile = this.getFailedFiles()[i];
                        this.out.printErrorFile(errorFile.formatName(this.fileHandler.path));
                    }
                }
            };

            SyntaxChecking.prototype.run = function (it, file, len, maxLen, callback) {
                var _this = this;
                if (!endsWith(file.toUpperCase(), '-TESTS.TS') && file.indexOf('../_infrastructure') < 0) {
                    new Test(file).run(function (o) {
                        var failed = false;

                        if (o.exitCode === 1) {
                            _this.out.printFailure();
                            failed = true;
                            len++;
                        } else {
                            _this.out.printSuccess();
                            len++;
                        }

                        _this.files.push(new File(file, failed));

                        if (len > maxLen) {
                            len = 0;
                            _this.out.breack();
                        }

                        if (it.hasNext()) {
                            _this.run(it, it.next(), len, maxLen, callback);
                        } else {
                            _this.out.breack();
                            _this.timer.end();
                            _this.printFailedFiles();
                            _this.printStats();

                            callback(_this.getFailedFiles().length, _this.files.length);
                        }
                    });
                } else if (it.hasNext()) {
                    this.run(it, it.next(), len, maxLen, callback);
                } else {
                    this.out.breack();
                    this.timer.end();
                    this.printStats();
                    this.printFailedFiles();

                    callback(this.getFailedFiles().length, this.files.length);
                }
            };

            SyntaxChecking.prototype.start = function (callback) {
                this.timer.start();

                var tsFiles = this.fileHandler.allTS();

                var it = new Iterator(tsFiles);

                var len = 0;
                var maxLen = 76;

                if (it.hasNext()) {
                    this.run(it, it.next(), len, maxLen, callback);
                }
            };
            return SyntaxChecking;
        })();

        var TestEval = (function () {
            function TestEval(fileHandler, out) {
                this.fileHandler = fileHandler;
                this.out = out;
                this.files = [];
                this.timer = new Timer();
            }
            TestEval.prototype.getFailedFiles = function () {
                var list = [];

                for (var i = 0; i < this.files.length; i++) {
                    if (this.files[i].hasError) {
                        list.push(this.files[i]);
                    }
                }

                return list;
            };

            TestEval.prototype.getSuccessFiles = function () {
                var list = [];

                for (var i = 0; i < this.files.length; i++) {
                    if (!this.files[i].hasError) {
                        list.push(this.files[i]);
                    }
                }

                return list;
            };

            TestEval.prototype.printStats = function () {
                this.out.printDiv();
                this.out.printElapsedTime(this.timer.asString, this.timer.time);
                this.out.printSuccessCount(this.getSuccessFiles().length, this.files.length);
                this.out.printFailedCount(this.getFailedFiles().length, this.files.length);
            };

            TestEval.prototype.printFailedFiles = function () {
                if (this.getFailedFiles().length > 0) {
                    this.out.printDiv();

                    this.out.printFailedTestMessage();

                    this.out.printDiv();

                    for (var i = 0; i < this.getFailedFiles().length; i++) {
                        var errorFile = this.getFailedFiles()[i];
                        this.out.printErrorFile(errorFile.formatName(this.fileHandler.path));
                    }
                }
            };

            TestEval.prototype.run = function (it, file, len, maxLen, callback) {
                var _this = this;
                if (endsWith(file.toUpperCase(), '-TESTS.TS')) {
                    new Test(file).run(function (o) {
                        var failed = false;

                        if (o.exitCode === 1) {
                            _this.out.printFailure();
                            failed = true;
                            len++;
                        } else {
                            _this.out.printSuccess();
                            len++;
                        }

                        _this.files.push(new File(file, failed));

                        if (len > maxLen) {
                            len = 0;
                            _this.out.breack();
                        }

                        if (it.hasNext()) {
                            _this.run(it, it.next(), len, maxLen, callback);
                        } else {
                            _this.out.breack();
                            _this.timer.end();
                            _this.printFailedFiles();
                            _this.printStats();

                            callback(_this.getFailedFiles().length, _this.files.length);
                        }
                    });
                } else if (it.hasNext()) {
                    this.run(it, it.next(), len, maxLen, callback);
                } else {
                    this.out.breack();
                    this.timer.end();
                    this.printFailedFiles();
                    this.printStats();

                    callback(this.getFailedFiles().length, this.files.length);
                }
            };

            TestEval.prototype.start = function (callback) {
                this.timer.start();

                var tsFiles = this.fileHandler.allTS();

                var it = new Iterator(tsFiles);

                var len = 0;
                var maxLen = 76;

                if (it.hasNext()) {
                    this.run(it, it.next(), len, maxLen, callback);
                }
            };
            return TestEval;
        })();

        var TestRunner = (function () {
            function TestRunner(dtPath) {
                this.dtPath = dtPath;
                this.typings = [];
                this.fh = new FileHandler(dtPath, /.\.ts/g);
                this.out = new Print('0.9.1.0', this.fh.allTypings().length, this.fh.allTS().length);
                this.sc = new SyntaxChecking(this.fh, this.out);
                this.te = new TestEval(this.fh, this.out);

                var tpgs = this.fh.allTypings();
                for (var i = 0; i < tpgs.length; i++) {
                    this.typings.push(new Typing(tpgs[i], this.dtPath));
                }
            }
            TestRunner.prototype.printTypingsWithoutTest = function () {
                var count = 0;

                if (this.typings.length > 0) {
                    this.out.printDiv();

                    this.out.printTypingsWithoutTestsMessage();

                    this.out.printDiv();

                    for (var i = 0; i < this.typings.length; i++) {
                        var typing = this.typings[i];
                        if (typing.fileHandler.allTests().length == 0) {
                            if (typing.name != '_infrastructure' && typing.name != '_ReSharper.DefinitelyTyped' && typing.name != 'obj' && typing.name != 'bin' && typing.name != 'Properties') {
                                this.out.printTypingsWithoutTest(typing.name);
                                count++;
                            }
                        }
                    }
                }

                return count;
            };

            TestRunner.prototype.run = function () {
                var _this = this;
                var timer = new Timer();
                timer.start();

                this.out.printHeader();
                this.out.printSyntaxChecking();

                this.sc.start(function (syntaxFailedCount, syntaxTotal) {
                    _this.out.printTypingTests();
                    _this.te.start(function (testFailedCount, testTotal) {
                        var total = _this.printTypingsWithoutTest();

                        timer.end();

                        _this.out.printDiv();
                        _this.out.printTotalMessage();
                        _this.out.printDiv();

                        _this.out.printElapsedTime(timer.asString, timer.time);
                        _this.out.printSyntaxErrorCount(syntaxFailedCount, syntaxTotal);
                        _this.out.printTestErrorCount(testFailedCount, testTotal);
                        _this.out.printWithoutTestCount(total, _this.fh.allTypings().length);

                        _this.out.printDiv();

                        if (syntaxFailedCount > 0 || testFailedCount > 0) {
                            process.exit(1);
                        }
                    });
                });
            };
            return TestRunner;
        })();
        TestManager.TestRunner = TestRunner;
    })(DefinitelyTyped.TestManager || (DefinitelyTyped.TestManager = {}));
    var TestManager = DefinitelyTyped.TestManager;
})(DefinitelyTyped || (DefinitelyTyped = {}));

var dtPath = __dirname + '/../..';

var runner = new DefinitelyTyped.TestManager.TestRunner(dtPath);
runner.run();

var ExecResult = (function () {
    function ExecResult() {
        this.stdout = "";
        this.stderr = "";
    }
    return ExecResult;
})();
var WindowsScriptHostExec = (function () {
    function WindowsScriptHostExec() { }
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
        while(process.Status != 0) {
        }
        result.exitCode = process.ExitCode;
        if(!process.StdOut.AtEndOfStream) {
            result.stdout = process.StdOut.ReadAll();
        }
        if(!process.StdErr.AtEndOfStream) {
            result.stderr = process.StdErr.ReadAll();
        }
        handleResult(result);
    };
    return WindowsScriptHostExec;
})();
var NodeExec = (function () {
    function NodeExec() { }
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
    if(typeof global.ActiveXObject !== "undefined") {
        return new WindowsScriptHostExec();
    } else {
        return new NodeExec();
    }
})();
var IOUtils;
(function (IOUtils) {
    function createDirectoryStructure(ioHost, dirName) {
        if(ioHost.directoryExists(dirName)) {
            return;
        }
        var parentDirectory = ioHost.dirName(dirName);
        if(parentDirectory != "") {
            createDirectoryStructure(ioHost, parentDirectory);
        }
        ioHost.createDirectory(dirName);
    }
    function createFileAndFolderStructure(ioHost, fileName, useUTF8) {
        var path = ioHost.resolvePath(fileName);
        var dirName = ioHost.dirName(path);
        createDirectoryStructure(ioHost, dirName);
        return ioHost.createFile(path, useUTF8);
    }
    IOUtils.createFileAndFolderStructure = createFileAndFolderStructure;
    function throwIOError(message, error) {
        var errorMessage = message;
        if(error && error.message) {
            errorMessage += (" " + error.message);
        }
        throw new Error(errorMessage);
    }
    IOUtils.throwIOError = throwIOError;
})(IOUtils || (IOUtils = {}));

var IO = (function () {
    function getWindowsScriptHostIO() {
        var fso = new ActiveXObject("Scripting.FileSystemObject");
        var streamObjectPool = [];
        function getStreamObject() {
            if(streamObjectPool.length > 0) {
                return streamObjectPool.pop();
            } else {
                return new ActiveXObject("ADODB.Stream");
            }
        }
        function releaseStreamObject(obj) {
            streamObjectPool.push(obj);
        }
        var args = [];
        for(var i = 0; i < WScript.Arguments.length; i++) {
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
                    if((bomChar.charCodeAt(0) == 254 && bomChar.charCodeAt(1) == 255) || (bomChar.charCodeAt(0) == 255 && bomChar.charCodeAt(1) == 254)) {
                        streamObj.Charset = 'unicode';
                    } else if(bomChar.charCodeAt(0) == 239 && bomChar.charCodeAt(1) == 187) {
                        streamObj.Charset = 'utf-8';
                    }
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
                while(true) {
                    if(fso.FileExists(path)) {
                        try  {
                            var content = this.readFile(path);
                            return {
                                content: content,
                                path: path
                            };
                        } catch (err) {
                        }
                    } else {
                        rootPath = fso.GetParentFolderName(fso.GetAbsolutePathName(rootPath));
                        if(rootPath == "") {
                            return null;
                        } else {
                            path = fso.BuildPath(rootPath, partialFilePath);
                        }
                    }
                }
            },
            deleteFile: function (path) {
                try  {
                    if(fso.FileExists(path)) {
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
                            }finally {
                                if(streamObj.State != 0) {
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
                    if(!this.directoryExists(path)) {
                        fso.CreateFolder(path);
                    }
                } catch (e) {
                    IOUtils.throwIOError("Couldn't create directory '" + path + "'.", e);
                }
            },
            dir: function (path, spec, options) {
                options = options || {
                };
                function filesInFolder(folder, root) {
                    var paths = [];
                    var fc;
                    if(options.recursive) {
                        fc = new Enumerator(folder.subfolders);
                        for(; !fc.atEnd(); fc.moveNext()) {
                            paths = paths.concat(filesInFolder(fc.item(), root + "/" + fc.item().Name));
                        }
                    }
                    fc = new Enumerator(folder.files);
                    for(; !fc.atEnd(); fc.moveNext()) {
                        if(!spec || fc.item().Name.match(spec)) {
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
    function getNodeIO() {
        var _fs = require('fs');
        var _path = require('path');
        var _module = require('module');
        return {
            readFile: function (file) {
                try  {
                    var buffer = _fs.readFileSync(file);
                    switch(buffer[0]) {
                        case 254:
                            if(buffer[1] == 255) {
                                var i = 0;
                                while((i + 1) < buffer.length) {
                                    var temp = buffer[i];
                                    buffer[i] = buffer[i + 1];
                                    buffer[i + 1] = temp;
                                    i += 2;
                                }
                                return buffer.toString("ucs2", 2);
                            }
                            break;
                        case 255:
                            if(buffer[1] == 254) {
                                return buffer.toString("ucs2", 2);
                            }
                            break;
                        case 239:
                            if(buffer[1] == 187) {
                                return buffer.toString("utf8", 3);
                            }
                    }
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
                    if(stats.isFile()) {
                        IOUtils.throwIOError("\"" + path + "\" exists but isn't a directory.", null);
                    } else if(stats.isDirectory()) {
                        return;
                    } else {
                        mkdirRecursiveSync(_path.dirname(path));
                        _fs.mkdirSync(path, 775);
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
                options = options || {
                };
                function filesInFolder(folder, deep) {
                    var paths = [];
                    var files = _fs.readdirSync(folder);
                    for(var i = 0; i < files.length; i++) {
                        var stat = _fs.statSync(folder + "/" + files[i]);
                        if(options.recursive && stat.isDirectory()) {
                            if(deep < (options.deep || 100)) {
                                paths = paths.concat(filesInFolder(folder + "/" + files[i], 1));
                            }
                        } else if(stat.isFile() && (!spec || files[i].match(spec))) {
                            paths.push(folder + "/" + files[i]);
                        }
                    }
                    return paths;
                }
                return filesInFolder(path, 0);
            },
            createDirectory: function (path) {
                try  {
                    if(!this.directoryExists(path)) {
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
                while(true) {
                    if(_fs.existsSync(path)) {
                        try  {
                            var content = this.readFile(path);
                            return {
                                content: content,
                                path: path
                            };
                        } catch (err) {
                        }
                    } else {
                        var parentPath = _path.resolve(rootPath, "..");
                        if(rootPath === parentPath) {
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
                    if(!firstRun) {
                        if(curr.mtime < prev.mtime) {
                            return;
                        }
                        _fs.unwatchFile(filename, fileChanged);
                        if(!processingChange) {
                            processingChange = true;
                            callback(filename);
                            setTimeout(function () {
                                processingChange = false;
                            }, 100);
                        }
                    }
                    firstRun = false;
                    _fs.watchFile(filename, {
                        persistent: true,
                        interval: 500
                    }, fileChanged);
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
    if(typeof ActiveXObject === "function") {
        return getWindowsScriptHostIO();
    } else if(typeof require === "function") {
        return getNodeIO();
    } else {
        return null;
    }
})();
var cfg = {
    root: '.',
    pattern: /.\-tests\.ts/g,
    tsc: 'node ./_infrastructure/tests/typescript_0.8.3/tsc.js ',
    exclude: {
        '.git': true,
        '.gitignore': true,
        'package.json': true,
        '_infrastructure': true,
        '.travis.yml': true,
        'LICENSE': true,
        'README.md': true,
        '_ReSharper.DefinitelyTyped': true,
        'obj': true,
        'bin': true,
        'Properties': true,
        'DefinitelyTyped.csproj': true,
        'DefinitelyTyped.csproj.user': true,
        'DefinitelyTyped.sln': true,
        'DefinitelyTyped.v11.suo': true
    }
};
if(process.argv.length > 2) {
    cfg.root = process.argv[2];
}
var TestFile = (function () {
    function TestFile() {
        this.errors = [];
    }
    return TestFile;
})();
var Test = (function () {
    function Test(lib) {
        this.lib = lib;
        this.files = [];
    }
    return Test;
})();
var Tests = (function () {
    function Tests() {
        this.tests = [];
    }
    return Tests;
})();
function getLibDirectory(file) {
    return file.substr(cfg.root.length).split('/')[1];
}
function getErrorList(out) {
    var splitContentByNewlines = function (content) {
        var lines = content.split('\r\n');
        if(lines.length === 1) {
            lines = content.split('\n');
        }
        return lines;
    };
    var result = [];
    var lines = splitContentByNewlines(out);
    for(var i = 0; i < lines.length; i++) {
        if(lines[i]) {
            result.push(lines[i]);
        }
    }
    return result;
}
function runTests(testFiles) {
    var tests = new Tests();
    Exec.exec(cfg.tsc, [
        testFiles[testIndex]
    ], function (ExecResult) {
        var lib = getLibDirectory(testFiles[testIndex]);
        cache_visited_libs[lib] = true;
        var testFile = new TestFile();
        testFile.name = testFiles[testIndex];
        testFile.errors = getErrorList(ExecResult.stderr);
        if(testFile.errors.length == 0) {
            total_success++;
        } else {
            total_failure++;
        }
        console.log('  [\033[36m' + lib + '\033[0m] ' + testFiles[testIndex].substr(cfg.root.length) + ' - ' + (testFile.errors.length == 0 ? '\033[32msuccess\033[0m' : '\033[31mfailure\033[0m'));
        var test = new Test(lib);
        test.files.push(testFile);
        tests.tests.push(test);
        testIndex++;
        if(testIndex < totalTest) {
            Exec.exec(cfg.tsc, [
                testFiles[testIndex]
            ], arguments.callee);
        } else {
            var withoutTests = {
            };
            for(var k = 0; k < allFiles.length; k++) {
                var rootFolder = allFiles[k].substr(cfg.root.length).split('/')[1];
                if(!(rootFolder in cfg.exclude)) {
                    if(!(rootFolder in cache_visited_libs)) {
                        withoutTests[rootFolder] = true;
                    }
                }
            }
            var withoutTestsCount = 0;
            for(var attr in withoutTests) {
                var test = new Test(attr);
                tests.tests.push(test);
                console.log('  [\033[36m' + attr + '\033[0m] without tests');
                withoutTestsCount++;
            }
            console.log('\n> ' + (total_failure + total_success + withoutTestsCount) + ' tests. ' + '\033[32m' + total_success + ' tests success\033[0m, ' + '\033[31m' + total_failure + ' tests failed\033[0m and ' + withoutTestsCount + ' definitions without tests.\n');
            if(total_failure > 0) {
                process.exit(1);
            }
        }
    });
}
var testFiles = IO.dir(cfg.root, cfg.pattern, {
    recursive: true,
    deep: 1
});
var allFiles = IO.dir(cfg.root, null, {
    recursive: true
});
var totalTest = testFiles.length;
var testIndex = 0;
var cache_visited_libs = {
};
var total_failure = 0;
var total_success = 0;
var tscVersion = '?.?.?';
Exec.exec(cfg.tsc, [
    '-version'
], function (ExecResult) {
    tscVersion = ExecResult.stdout;
    console.log('$ tsc -version');
    console.log(tscVersion);
    runTests(testFiles);
});

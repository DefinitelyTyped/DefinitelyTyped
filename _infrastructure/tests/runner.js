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

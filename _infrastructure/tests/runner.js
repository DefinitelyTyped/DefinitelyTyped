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

var Exec = function () {
    return new NodeExec();
}();
/// <reference path="../_ref.d.ts" />
var DT;
(function (DT) {
    'use-strict';

    var path = require('path');

    /////////////////////////////////
    // Given a document root + ts file pattern this class returns:
    //         all the TS files OR just tests OR just definition files
    /////////////////////////////////
    var File = (function () {
        function File(baseDir, filePathWithName) {
            this.references = [];
            this.baseDir = baseDir;
            this.filePathWithName = filePathWithName;
            this.ext = path.extname(this.filePathWithName);
            this.file = path.basename(this.filePathWithName, this.ext);
            this.dir = path.dirname(this.filePathWithName);
            this.formatName = path.join(this.dir, this.file + this.ext);
            this.fullPath = path.join(this.baseDir, this.dir, this.file + this.ext);
            // lock it (shallow)
            // Object.freeze(this);
        }
        File.prototype.toString = function () {
            return '[File ' + this.filePathWithName + ']';
        };
        return File;
    })();
    DT.File = File;
})(DT || (DT = {}));
/// <reference path="../_ref.d.ts" />
/// <reference path="../runner.ts" />
/// <reference path="host/exec.ts" />
var DT;
(function (DT) {
    'use-strict';
    var fs = require('fs');

    var Tsc = (function () {
        function Tsc() {
        }
        Tsc.run = function (tsfile, options, callback) {
            options = options || {};
            options.tscVersion = options.tscVersion || DT.DEFAULT_TSC_VERSION;
            if (typeof options.checkNoImplicitAny === "undefined") {
                options.checkNoImplicitAny = true;
            }
            if (typeof options.useTscParams === "undefined") {
                options.useTscParams = true;
            }

            if (!fs.existsSync(tsfile)) {
                throw new Error(tsfile + " not exists");
            }

            var tscPath = './_infrastructure/tests/typescript/' + options.tscVersion + '/tsc.js';
            if (!fs.existsSync(tscPath)) {
                throw new Error(tscPath + ' is not exists');
            }
            var command = 'node ' + tscPath + ' --module commonjs ';
            if (options.useTscParams && fs.existsSync(tsfile + '.tscparams')) {
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
    DT.Tsc = Tsc;
})(DT || (DT = {}));
/// <reference path="../_ref.d.ts" />
/// <reference path="../runner.ts" />
var DT;
(function (DT) {
    'use-strict';

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
            var diff = ((date2 - date1) / 1000);
            var day_diff = Math.floor(diff / 86400);

            if (isNaN(day_diff) || day_diff < 0 || day_diff >= 31) {
                return null;
            }

            return (day_diff == 0 && (diff < 60 && (diff + " seconds") || diff < 120 && "1 minute" || diff < 3600 && Math.floor(diff / 60) + " minutes" || diff < 7200 && "1 hour" || diff < 86400 && Math.floor(diff / 3600) + " hours") || day_diff == 1 && "Yesterday" || day_diff < 7 && day_diff + " days" || day_diff < 31 && Math.ceil(day_diff / 7) + " weeks");
        };
        return Timer;
    })();
    DT.Timer = Timer;
})(DT || (DT = {}));
/// <reference path="../_ref.d.ts" />
var DT;
(function (DT) {
    'use-strict';

    var referenceTagExp = /<reference[ \t]*path=["']?([\w\.\/_-]*)["']?[ \t]*\/>/g;

    function endsWith(str, suffix) {
        return str.indexOf(suffix, str.length - suffix.length) !== -1;
    }
    DT.endsWith = endsWith;

    function extractReferenceTags(source) {
        var ret = [];
        var match;

        if (!referenceTagExp.global) {
            throw new Error('referenceTagExp RegExp must have global flag');
        }
        referenceTagExp.lastIndex = 0;

        while ((match = referenceTagExp.exec(source))) {
            if (match.length > 0 && match[1].length > 0) {
                ret.push(match[1]);
            }
        }
        return ret;
    }
    DT.extractReferenceTags = extractReferenceTags;
})(DT || (DT = {}));
/// <reference path="../_ref.d.ts" />
/// <reference path="../runner.ts" />
/// <reference path="util.ts" />
var DT;
(function (DT) {
    'use-strict';

    var fs = require('fs');
    var path = require('path');

    var FileIndex = (function () {
        function FileIndex(options) {
            this.options = options;
        }
        FileIndex.prototype.parseFiles = function (files, callback) {
            var _this = this;
            this.fileMap = Object.create(null);
            files.forEach(function (file) {
                _this.fileMap[file.fullPath] = file;
            });
            this.loadReferences(files, function () {
                callback();
            });
        };

        FileIndex.prototype.hasFile = function (target) {
            return target in this.fileMap;
        };

        FileIndex.prototype.getFile = function (target) {
            if (target in this.fileMap) {
                return this.fileMap[target];
            }
            return null;
        };

        FileIndex.prototype.loadReferences = function (files, callback) {
            var _this = this;
            var queue = files.slice(0);
            var active = [];
            var max = 50;
            var next = function () {
                if (queue.length === 0 && active.length === 0) {
                    callback();
                    return;
                }

                while (queue.length > 0 && active.length < max) {
                    var file = queue.pop();
                    active.push(file);
                    _this.parseFile(file, function (file) {
                        active.splice(active.indexOf(file), 1);
                        next();
                    });
                }
            };
            process.nextTick(next);
        };

        FileIndex.prototype.parseFile = function (file, callback) {
            var _this = this;
            fs.readFile(file.filePathWithName, {
                encoding: 'utf8',
                flag: 'r'
            }, function (err, content) {
                if (err) {
                    throw err;
                }

                // console.log('----');
                // console.log(file.filePathWithName);
                file.references = DT.extractReferenceTags(content).map(function (ref) {
                    return path.resolve(path.dirname(file.fullPath), ref);
                }).reduce(function (memo, ref) {
                    if (ref in _this.fileMap) {
                        memo.push(_this.fileMap[ref]);
                    } else {
                        console.log('not mapped? -> ' + ref);
                    }
                    return memo;
                }, []);

                // console.log(file.references);
                callback(file);
            });
        };
        return FileIndex;
    })();
    DT.FileIndex = FileIndex;
})(DT || (DT = {}));
/// <reference path="../_ref.d.ts" />
var DT;
(function (DT) {
    'use-strict';

    var fs = require('fs');
    var path = require('path');
    var Git = require('git-wrapper');

    var GitChanges = (function () {
        function GitChanges(baseDir) {
            this.baseDir = baseDir;
            this.options = {};
            this.paths = [];
            var dir = path.join(baseDir, '.git');
            if (!fs.existsSync(dir)) {
                throw new Error('cannot locate git-dir: ' + dir);
            }
            this.options['git-dir'] = dir;
        }
        GitChanges.prototype.getChanges = function (callback) {
            var _this = this;
            //git diff --name-only HEAD~1
            var git = new Git(this.options);
            var opts = {};
            var args = ['--name-only HEAD~1'];
            git.exec('diff', opts, args, function (err, msg) {
                if (err) {
                    callback(err);
                    return;
                }
                _this.paths = msg.replace(/^\s+/, '').replace(/\s+$/, '').split(/\r?\n/g);

                // console.log(paths);
                callback(null);
            });
        };
        return GitChanges;
    })();
    DT.GitChanges = GitChanges;
})(DT || (DT = {}));
/// <reference path="../_ref.d.ts" />
/// <reference path="../runner.ts" />
var DT;
(function (DT) {
    'use-strict';

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
    DT.Print = Print;
})(DT || (DT = {}));
/// <reference path="../../_ref.d.ts" />
/// <reference path="../printer.ts" />
var DT;
(function (DT) {
    'use-strict';

    

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
    DT.DefaultTestReporter = DefaultTestReporter;
})(DT || (DT = {}));
/// <reference path="../../runner.ts" />
var DT;
(function (DT) {
    'use-strict';

    

    /////////////////////////////////
    // Base class for test suite
    /////////////////////////////////
    var TestSuiteBase = (function () {
        function TestSuiteBase(options, testSuiteName, errorHeadline) {
            this.options = options;
            this.testSuiteName = testSuiteName;
            this.errorHeadline = errorHeadline;
            this.timer = new DT.Timer();
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
            new DT.Test(this, targetFile, { tscVersion: this.options.tscVersion }).run(function (result) {
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
    DT.TestSuiteBase = TestSuiteBase;
})(DT || (DT = {}));
/// <reference path="../../runner.ts" />
/// <reference path="../util.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var DT;
(function (DT) {
    'use-strict';

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
                return DT.endsWith(file.formatName.toUpperCase(), '.D.TS');
            });
        };
        return SyntaxChecking;
    })(DT.TestSuiteBase);
    DT.SyntaxChecking = SyntaxChecking;
})(DT || (DT = {}));
/// <reference path="../../runner.ts" />
/// <reference path="../util.ts" />
var DT;
(function (DT) {
    'use-strict';

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
                return DT.endsWith(file.formatName.toUpperCase(), '-TESTS.TS');
            });
        };
        return TestEval;
    })(DT.TestSuiteBase);
    DT.TestEval = TestEval;
})(DT || (DT = {}));
/// <reference path="../../runner.ts" />
/// <reference path="../file.ts" />
var DT;
(function (DT) {
    'use-strict';

    var fs = require('fs');

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
                return fs.existsSync(file.filePathWithName + '.tscparams');
            });
        };

        FindNotRequiredTscparams.prototype.runTest = function (targetFile, callback) {
            var _this = this;
            this.print.clearCurrentLine().out(targetFile.formatName);
            new DT.Test(this, targetFile, {
                tscVersion: this.options.tscVersion,
                useTscParams: false,
                checkNoImplicitAny: true
            }).run(function (result) {
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
    })(DT.TestSuiteBase);
    DT.FindNotRequiredTscparams = FindNotRequiredTscparams;
})(DT || (DT = {}));
/// <reference path="_ref.d.ts" />
/// <reference path="src/host/exec.ts" />
/// <reference path="src/file.ts" />
/// <reference path="src/tsc.ts" />
/// <reference path="src/timer.ts" />
/// <reference path="src/util.ts" />
/// <reference path="src/index.ts" />
/// <reference path="src/changes.ts" />
/// <reference path="src/printer.ts" />
/// <reference path="src/reporter/reporter.ts" />
/// <reference path="src/suite/suite.ts" />
/// <reference path="src/suite/syntax.ts" />
/// <reference path="src/suite/testEval.ts" />
/// <reference path="src/suite/tscParams.ts" />
var DT;
(function (DT) {
    'use-strict';

    require('source-map-support').install();

    var fs = require('fs');
    var path = require('path');
    var glob = require('glob');

    var tsExp = /\.ts$/;

    DT.DEFAULT_TSC_VERSION = "0.9.1.1";

    var Test = (function () {
        function Test(suite, tsfile, options) {
            this.suite = suite;
            this.tsfile = tsfile;
            this.options = options;
        }
        Test.prototype.run = function (callback) {
            var _this = this;
            DT.Tsc.run(this.tsfile.filePathWithName, this.options, function (execResult) {
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
    DT.Test = Test;

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
    DT.TestResult = TestResult;

    /////////////////////////////////
    // The main class to kick things off
    /////////////////////////////////
    // TODO move to bluebird (Promises)
    // TODO move to lazy.js (functional)
    var TestRunner = (function () {
        function TestRunner(dtPath, options) {
            if (typeof options === "undefined") { options = { tscVersion: DT.DEFAULT_TSC_VERSION }; }
            var _this = this;
            this.dtPath = dtPath;
            this.options = options;
            this.suites = [];
            this.options.findNotRequiredTscparams = !!this.options.findNotRequiredTscparams;

            this.index = new DT.FileIndex(this.options);
            this.changes = new DT.GitChanges(this.dtPath);

            // should be async (way faster)
            // only includes .d.ts or -tests.ts or -test.ts or .ts
            var filesName = glob.sync('**/*.ts', { cwd: dtPath });
            this.files = filesName.filter(function (fileName) {
                return _this.checkAcceptFile(fileName);
            }).sort().map(function (fileName) {
                return new DT.File(dtPath, fileName);
            });
        }
        TestRunner.prototype.addSuite = function (suite) {
            this.suites.push(suite);
        };

        TestRunner.prototype.run = function () {
            this.timer = new DT.Timer();
            this.timer.start();

            // we need promises
            this.doGetChanges();
        };

        TestRunner.prototype.checkAcceptFile = function (fileName) {
            var ok = tsExp.test(fileName);
            ok = ok && fileName.indexOf('_infrastructure') < 0;
            ok = ok && fileName.indexOf('node_modules/') < 0;
            ok = ok && /^[a-z]/i.test(fileName);
            return ok;
        };

        TestRunner.prototype.doGetChanges = function () {
            var _this = this;
            this.changes.getChanges(function (err) {
                if (err) {
                    throw err;
                }
                console.log('');
                console.log('changes:');
                console.log('---');

                _this.changes.paths.forEach(function (file) {
                    console.log(file);
                });
                console.log('---');

                // chain
                _this.doGetReferences();
            });
        };

        TestRunner.prototype.doGetReferences = function () {
            var _this = this;
            this.index.parseFiles(this.files, function () {
                console.log('');
                console.log('files:');
                console.log('---');
                _this.files.forEach(function (file) {
                    console.log(file.filePathWithName);
                    file.references.forEach(function (file) {
                        console.log('  - %s', file.filePathWithName);
                    });
                });
                console.log('---');

                // chain
                _this.doCollectTargets();
            });
        };

        TestRunner.prototype.doCollectTargets = function () {
            // TODO clean this up when functional (do we need changeMap?)
            var _this = this;
            // bake map for lookup
            var changeMap = this.changes.paths.filter(function (full) {
                return _this.checkAcceptFile(full);
            }).map(function (local) {
                return path.resolve(_this.dtPath, local);
            }).reduce(function (memo, full) {
                var file = _this.index.getFile(full);
                if (!file) {
                    // what does it mean? deleted?
                    console.log('not in index: ' + full);
                    return memo;
                }
                memo[full] = file;
                return memo;
            }, Object.create(null));

            // collect referring files (and also log)
            var touched = Object.create(null);
            console.log('');
            console.log('relevant changes:');
            console.log('---');
            Object.keys(changeMap).sort().forEach(function (src) {
                touched[src] = changeMap[src];
                console.log(changeMap[src].formatName);
            });
            console.log('---');

            // terrible loop (whatever)
            // just add stuff until there is nothing new added
            // TODO improve it
            var added;
            do {
                added = 0;
                this.files.forEach(function (file) {
                    // lol getter
                    if (file.fullPath in touched) {
                        return;
                    }

                    // check if one of our references is touched
                    file.references.some(function (ref) {
                        if (ref.fullPath in touched) {
                            // add us
                            touched[file.fullPath] = file;
                            added++;
                            return true;
                        }
                        return false;
                    });
                });
            } while(added > 0);

            console.log('');
            console.log('touched:');
            console.log('---');
            var files = Object.keys(touched).sort().map(function (src) {
                console.log(touched[src].formatName);
                return touched[src];
            });
            console.log('---');

            this.runTests(files);
        };

        TestRunner.prototype.runTests = function (files) {
            var _this = this;
            var syntaxChecking = new DT.SyntaxChecking(this.options);
            var testEval = new DT.TestEval(this.options);
            if (!this.options.findNotRequiredTscparams) {
                this.addSuite(syntaxChecking);
                this.addSuite(testEval);
            }

            var typings = syntaxChecking.filterTargetFiles(files).length;
            var testFiles = testEval.filterTargetFiles(files).length;

            this.print = new DT.Print(this.options.tscVersion, typings, testFiles, files.length);
            this.print.printHeader();

            if (this.options.findNotRequiredTscparams) {
                this.addSuite(new DT.FindNotRequiredTscparams(this.options, this.print));
            }

            var count = 0;
            var executor = function () {
                var suite = _this.suites[count];
                if (suite) {
                    suite.testReporter = suite.testReporter || new DT.DefaultTestReporter(_this.print);

                    _this.print.printSuiteHeader(suite.testSuiteName);
                    var targetFiles = suite.filterTargetFiles(files);
                    suite.start(targetFiles, function (testResult, index) {
                        _this.testCompleteCallback(testResult, index);
                    }, function (suite) {
                        _this.suiteCompleteCallback(suite);
                        count++;
                        executor();
                    });
                } else {
                    _this.timer.end();
                    _this.allTestCompleteCallback(files);
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

        TestRunner.prototype.allTestCompleteCallback = function (files) {
            var _this = this;
            var testEval = this.suites.filter(function (suite) {
                return suite instanceof DT.TestEval;
            })[0];
            if (testEval) {
                var existsTestTypings = testEval.testResults.map(function (testResult) {
                    return testResult.targetFile.dir;
                }).reduce(function (a, b) {
                    return a.indexOf(b) < 0 ? a.concat([b]) : a;
                }, []);

                var typings = files.map(function (file) {
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
    DT.TestRunner = TestRunner;

    var dtPath = path.resolve(path.dirname((module).filename), '..', '..');
    var findNotRequiredTscparams = process.argv.some(function (arg) {
        return arg == "--try-without-tscparams";
    });
    var tscVersionIndex = process.argv.indexOf("--tsc-version");
    var tscVersion = DT.DEFAULT_TSC_VERSION;
    if (-1 < tscVersionIndex) {
        tscVersion = process.argv[tscVersionIndex + 1];
    }

    console.log('--');
    console.log('   dtPath %s', dtPath);
    console.log('   tscVersion %s', tscVersion);
    console.log('   findNotRequiredTscparams %s', findNotRequiredTscparams);
    console.log('--');
    console.log('');

    var runner = new TestRunner(dtPath, {
        tscVersion: tscVersion,
        findNotRequiredTscparams: findNotRequiredTscparams
    });
    runner.run();
})(DT || (DT = {}));
//# sourceMappingURL=runner.js.map

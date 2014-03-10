var DT;
(function (DT) {
    'use strict';

    var Promise = require('bluebird');
    var nodeExec = require('child_process').exec;

    var ExecResult = (function () {
        function ExecResult() {
            this.stdout = '';
            this.stderr = '';
        }
        return ExecResult;
    })();
    DT.ExecResult = ExecResult;

    function exec(filename, cmdLineArgs) {
        return new Promise(function (resolve) {
            var result = new ExecResult();
            result.exitCode = null;

            var cmdLine = filename + ' ' + cmdLineArgs.join(' ');

            nodeExec(cmdLine, { maxBuffer: 1 * 1024 * 1024 }, function (error, stdout, stderr) {
                result.error = error;
                result.stdout = stdout;
                result.stderr = stderr;
                result.exitCode = error ? error.code : 0;
                resolve(result);
            });
        });
    }
    DT.exec = exec;
})(DT || (DT = {}));
/// <reference path="../_ref.d.ts" />
var DT;
(function (DT) {
    'use strict';

    var path = require('path');

    /////////////////////////////////
    // Given a document root + ts file pattern this class returns:
    //         all the TS files OR just tests OR just definition files
    /////////////////////////////////
    var File = (function () {
        function File(baseDir, filePathWithName) {
            this.references = [];
            // why choose?
            this.baseDir = baseDir;
            this.filePathWithName = filePathWithName;
            this.ext = path.extname(this.filePathWithName);
            this.file = path.basename(this.filePathWithName, this.ext);
            this.dir = path.dirname(this.filePathWithName);
            this.fullPath = path.join(this.baseDir, this.dir, this.file + this.ext);
            // lock it (shallow) (needs `use strict` in each file to work)
            // Object.freeze(this);
        }
        File.prototype.toString = function () {
            return '[File ' + this.filePathWithName + ']';
        };
        return File;
    })();
    DT.File = File;
})(DT || (DT = {}));
/// <reference path='../_ref.d.ts' />
/// <reference path='../runner.ts' />
/// <reference path='exec.ts' />
var DT;
(function (DT) {
    'use strict';

    var fs = require('fs');

    var Promise = require('bluebird');

    var Tsc = (function () {
        function Tsc() {
        }
        Tsc.run = function (tsfile, options) {
            var tscPath;
            return new Promise.attempt(function () {
                options = options || {};
                options.tscVersion = options.tscVersion || DT.DEFAULT_TSC_VERSION;
                if (typeof options.checkNoImplicitAny === 'undefined') {
                    options.checkNoImplicitAny = true;
                }
                if (typeof options.useTscParams === 'undefined') {
                    options.useTscParams = true;
                }
                return DT.fileExists(tsfile);
            }).then(function (exists) {
                if (!exists) {
                    throw new Error(tsfile + ' not exists');
                }
                tscPath = './_infrastructure/tests/typescript/' + options.tscVersion + '/tsc.js';
                return DT.fileExists(tscPath);
            }).then(function (exists) {
                if (!exists) {
                    throw new Error(tscPath + ' is not exists');
                }
                return DT.fileExists(tsfile + '.tscparams');
            }).then(function (exists) {
                var command = 'node ' + tscPath + ' --module commonjs ';
                if (options.useTscParams && exists) {
                    command += '@' + tsfile + '.tscparams';
                } else if (options.checkNoImplicitAny) {
                    command += '--noImplicitAny';
                }
                return DT.exec(command, [tsfile]);
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
    'use strict';

    /////////////////////////////////
    // Timer.start starts a timer
    // Timer.end stops the timer and sets asString to the pretty print value
    /////////////////////////////////
    var Timer = (function () {
        function Timer() {
            this.time = 0;
            this.asString = '<not-started>';
        }
        Timer.prototype.start = function () {
            this.time = 0;
            this.startTime = this.now();
            this.asString = '<started>';
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

            return (day_diff == 0 && (diff < 60 && (diff + ' seconds') || diff < 120 && '1 minute' || diff < 3600 && Math.floor(diff / 60) + ' minutes' || diff < 7200 && '1 hour' || diff < 86400 && Math.floor(diff / 3600) + ' hours') || day_diff == 1 && 'Yesterday' || day_diff < 7 && day_diff + ' days' || day_diff < 31 && Math.ceil(day_diff / 7) + ' weeks');
        };
        return Timer;
    })();
    DT.Timer = Timer;
})(DT || (DT = {}));
/// <reference path="../_ref.d.ts" />
var DT;
(function (DT) {
    'use strict';

    var fs = require('fs');
    var Lazy = require('lazy.js');
    var Promise = require('bluebird');

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

    function fileExists(target) {
        return new Promise(function (resolve, reject) {
            fs.exists(target, function (bool) {
                resolve(bool);
            });
        });
    }
    DT.fileExists = fileExists;
})(DT || (DT = {}));
/// <reference path="../_ref.d.ts" />
/// <reference path="../runner.ts" />
/// <reference path="util.ts" />
var DT;
(function (DT) {
    'use strict';

    var fs = require('fs');
    var path = require('path');
    var glob = require('glob');
    var Lazy = require('lazy.js');
    var Promise = require('bluebird');

    var readFile = Promise.promisify(fs.readFile);

    /////////////////////////////////
    // Track all files in the repo: map full path to File objects
    /////////////////////////////////
    var FileIndex = (function () {
        function FileIndex(runner, options) {
            this.runner = runner;
            this.options = options;
        }
        FileIndex.prototype.hasFile = function (target) {
            return target in this.fileMap;
        };

        FileIndex.prototype.getFile = function (target) {
            if (target in this.fileMap) {
                return this.fileMap[target];
            }
            return null;
        };

        FileIndex.prototype.setFile = function (file) {
            if (file.fullPath in this.fileMap) {
                throw new Error('cannot overwrite file');
            }
            this.fileMap[file.fullPath] = file;
        };

        FileIndex.prototype.readIndex = function () {
            var _this = this;
            this.fileMap = Object.create(null);

            return Promise.promisify(glob).call(glob, '**/*.ts', {
                cwd: this.runner.dtPath
            }).then(function (filesNames) {
                _this.files = Lazy(filesNames).filter(function (fileName) {
                    return _this.runner.checkAcceptFile(fileName);
                }).map(function (fileName) {
                    var file = new DT.File(_this.runner.dtPath, fileName);
                    _this.fileMap[file.fullPath] = file;
                    return file;
                }).toArray();
            });
        };

        FileIndex.prototype.collectDiff = function (changes) {
            var _this = this;
            return new Promise(function (resolve) {
                // filter changes and bake map for easy lookup
                _this.changed = Object.create(null);
                _this.removed = Object.create(null);

                Lazy(changes).filter(function (full) {
                    return _this.runner.checkAcceptFile(full);
                }).uniq().each(function (local) {
                    var full = path.resolve(_this.runner.dtPath, local);
                    var file = _this.getFile(full);
                    if (!file) {
                        // TODO figure out what to do here
                        // what does it mean? deleted?ss
                        file = new DT.File(_this.runner.dtPath, local);
                        _this.setFile(file);
                        _this.removed[full] = file;
                        // console.log('not in index? %', file.fullPath);
                    } else {
                        _this.changed[full] = file;
                    }
                });

                // console.log('changed:\n' + Object.keys(this.changed).join('\n'));
                // console.log('removed:\n' + Object.keys(this.removed).join('\n'));
                resolve();
            });
        };

        FileIndex.prototype.parseFiles = function () {
            var _this = this;
            return this.loadReferences(this.files).then(function () {
                return _this.getMissingReferences();
            });
        };

        FileIndex.prototype.getMissingReferences = function () {
            var _this = this;
            return Promise.attempt(function () {
                _this.missing = Object.create(null);
                Lazy(_this.removed).keys().each(function (removed) {
                    if (removed in _this.refMap) {
                        _this.missing[removed] = _this.refMap[removed];
                    }
                });
            });
        };

        FileIndex.prototype.loadReferences = function (files) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                var queue = files.slice(0);
                var active = [];
                var max = 50;
                var next = function () {
                    if (queue.length === 0 && active.length === 0) {
                        resolve();
                        return;
                    }

                    while (queue.length > 0 && active.length < max) {
                        var file = queue.pop();
                        active.push(file);
                        _this.parseFile(file).then(function (file) {
                            active.splice(active.indexOf(file), 1);
                            next();
                        }).catch(function (err) {
                            queue = [];
                            active = [];
                            reject(err);
                        });
                    }
                };
                next();
            }).then(function () {
                // bake reverse reference map (referenced to referrers)
                _this.refMap = Object.create(null);

                Lazy(files).each(function (file) {
                    Lazy(file.references).each(function (ref) {
                        if (ref.fullPath in _this.refMap) {
                            _this.refMap[ref.fullPath].push(file);
                        } else {
                            _this.refMap[ref.fullPath] = [file];
                        }
                    });
                });
            });
        };

        // TODO replace with a stream?
        FileIndex.prototype.parseFile = function (file) {
            var _this = this;
            return readFile(file.filePathWithName, {
                encoding: 'utf8',
                flag: 'r'
            }).then(function (content) {
                file.references = Lazy(DT.extractReferenceTags(content)).map(function (ref) {
                    return path.resolve(path.dirname(file.fullPath), ref);
                }).reduce(function (memo, ref) {
                    if (ref in _this.fileMap) {
                        memo.push(_this.fileMap[ref]);
                    } else {
                        console.log('not mapped? -> ' + ref);
                    }
                    return memo;
                }, []);

                // return the object
                return file;
            });
        };

        FileIndex.prototype.collectTargets = function () {
            var _this = this;
            return new Promise(function (resolve) {
                // map out files linked to changes
                // - queue holds files touched by a change
                // - pre-fill with actually changed files
                // - loop queue, if current not seen:
                //    - add to result
                //    - from refMap queue all files referring to current
                var result = Object.create(null);
                var queue = Lazy(_this.changed).values().toArray();

                while (queue.length > 0) {
                    var next = queue.shift();
                    var fp = next.fullPath;
                    if (result[fp]) {
                        continue;
                    }
                    result[fp] = next;
                    if (fp in _this.refMap) {
                        var arr = _this.refMap[fp];
                        for (var i = 0, ii = arr.length; i < ii; i++) {
                            // just add it and skip expensive checks
                            queue.push(arr[i]);
                        }
                    }
                }
                resolve(Lazy(result).values().toArray());
            });
        };
        return FileIndex;
    })();
    DT.FileIndex = FileIndex;
})(DT || (DT = {}));
/// <reference path="../_ref.d.ts" />
/// <reference path="../runner.ts" />
var DT;
(function (DT) {
    'use strict';

    var fs = require('fs');
    var path = require('path');
    var Git = require('git-wrapper');
    var Promise = require('bluebird');

    var GitChanges = (function () {
        function GitChanges(runner) {
            this.runner = runner;
            this.options = {};
            var dir = path.join(this.runner.dtPath, '.git');
            if (!fs.existsSync(dir)) {
                throw new Error('cannot locate git-dir: ' + dir);
            }
            this.options['git-dir'] = dir;

            this.git = new Git(this.options);
            this.git.exec = Promise.promisify(this.git.exec);
        }
        GitChanges.prototype.readChanges = function () {
            var opts = {};
            var args = ['--name-only HEAD~1'];
            return this.git.exec('diff', opts, args).then(function (msg) {
                return msg.replace(/^\s+/, '').replace(/\s+$/, '').split(/\r?\n/g);
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
    var os = require('os');

    /////////////////////////////////
    // All the common things that we print are functions of this class
    /////////////////////////////////
    var Print = (function () {
        function Print(version) {
            this.version = version;
            this.WIDTH = 77;
        }
        Print.prototype.init = function (typings, tests, tsFiles) {
            this.typings = typings;
            this.tests = tests;
            this.tsFiles = tsFiles;
        };

        Print.prototype.out = function (s) {
            process.stdout.write(s);
            return this;
        };

        Print.prototype.repeat = function (s, times) {
            return new Array(times + 1).join(s);
        };

        Print.prototype.printChangeHeader = function () {
            this.out('=============================================================================\n');
            this.out('                    \33[36m\33[1mDefinitelyTyped Diff Detector 0.1.0\33[0m \n');
            this.out('=============================================================================\n');
        };

        Print.prototype.printHeader = function (options) {
            var totalMem = Math.round(os.totalmem() / 1024 / 1024) + ' mb';
            var freemem = Math.round(os.freemem() / 1024 / 1024) + ' mb';

            this.out('=============================================================================\n');
            this.out('                    \33[36m\33[1mDefinitelyTyped Test Runner 0.5.0\33[0m\n');
            this.out('=============================================================================\n');
            this.out(' \33[36m\33[1mTypescript version:\33[0m ' + this.version + '\n');
            this.out(' \33[36m\33[1mTypings           :\33[0m ' + this.typings + '\n');
            this.out(' \33[36m\33[1mTests             :\33[0m ' + this.tests + '\n');
            this.out(' \33[36m\33[1mTypeScript files  :\33[0m ' + this.tsFiles + '\n');
            this.out(' \33[36m\33[1mTotal Memory      :\33[0m ' + totalMem + '\n');
            this.out(' \33[36m\33[1mFree Memory       :\33[0m ' + freemem + '\n');
            this.out(' \33[36m\33[1mCores             :\33[0m ' + os.cpus().length + '\n');
            this.out(' \33[36m\33[1mConcurrent        :\33[0m ' + options.concurrent + '\n');
        };

        Print.prototype.printSuiteHeader = function (title) {
            var left = Math.floor((this.WIDTH - title.length) / 2) - 1;
            var right = Math.ceil((this.WIDTH - title.length) / 2) - 1;
            this.out(this.repeat('=', left)).out(' \33[34m\33[1m');
            this.out(title);
            this.out('\33[0m ').out(this.repeat('=', right)).printBreak();
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
            this.out('----------------- For file:' + testResult.targetFile.filePathWithName);
            this.printBreak().out(testResult.stderr).printBreak();
        };

        Print.prototype.printBreak = function () {
            this.out('\n');
            return this;
        };

        Print.prototype.clearCurrentLine = function () {
            this.out('\r\33[K');
            return this;
        };

        Print.prototype.printSuccessCount = function (current, total) {
            var arb = (total === 0) ? 0 : (current / total);
            this.out(' \33[36m\33[1mSuccessful      :\33[0m \33[32m\33[1m' + (arb * 100).toFixed(2) + '% (' + current + '/' + total + ')\33[0m\n');
        };

        Print.prototype.printFailedCount = function (current, total) {
            var arb = (total === 0) ? 0 : (current / total);
            this.out(' \33[36m\33[1mFailure         :\33[0m \33[31m\33[1m' + (arb * 100).toFixed(2) + '% (' + current + '/' + total + ')\33[0m\n');
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

        Print.prototype.printSuiteErrorCount = function (errorHeadline, current, total, warn) {
            if (typeof warn === "undefined") { warn = false; }
            var arb = (total === 0) ? 0 : (current / total);
            this.out(' \33[36m\33[1m').out(errorHeadline).out(this.repeat(' ', 16 - errorHeadline.length));
            if (warn) {
                this.out(': \33[31m\33[1m' + (arb * 100).toFixed(2) + '% (' + current + '/' + total + ')\33[0m\n');
            } else {
                this.out(': \33[33m\33[1m' + (arb * 100).toFixed(2) + '% (' + current + '/' + total + ')\33[0m\n');
            }
        };

        Print.prototype.printSubHeader = function (file) {
            this.out(' \33[36m\33[1m' + file + '\33[0m\n');
        };

        Print.prototype.printWarnCode = function (str) {
            this.out(' \33[31m\33[1m<' + str.toLowerCase().replace(/ +/g, '-') + '>\33[0m\n');
        };

        Print.prototype.printLine = function (file) {
            this.out(file + '\n');
        };

        Print.prototype.printElement = function (file) {
            this.out(' - ' + file + '\n');
        };

        Print.prototype.printElement2 = function (file) {
            this.out('    - ' + file + '\n');
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

        Print.prototype.printTestComplete = function (testResult) {
            var reporter = testResult.hostedBy.testReporter;
            if (testResult.success) {
                reporter.printPositiveCharacter(testResult);
            } else {
                reporter.printNegativeCharacter(testResult);
            }
        };

        Print.prototype.printSuiteComplete = function (suite) {
            this.printBreak();

            this.printDiv();
            this.printElapsedTime(suite.timer.asString, suite.timer.time);
            this.printSuccessCount(suite.okTests.length, suite.testResults.length);
            this.printFailedCount(suite.ngTests.length, suite.testResults.length);
        };

        Print.prototype.printTests = function (adding) {
            var _this = this;
            this.printDiv();
            this.printSubHeader('Testing');
            this.printDiv();

            Object.keys(adding).sort().map(function (src) {
                _this.printLine(adding[src].filePathWithName);
                return adding[src];
            });
        };

        Print.prototype.printQueue = function (files) {
            var _this = this;
            this.printDiv();
            this.printSubHeader('Queued for testing');
            this.printDiv();

            files.forEach(function (file) {
                _this.printLine(file.filePathWithName);
            });
        };

        Print.prototype.printTestAll = function () {
            this.printDiv();
            this.printSubHeader('Ignoring changes, testing all files');
        };

        Print.prototype.printFiles = function (files) {
            var _this = this;
            this.printDiv();
            this.printSubHeader('Files');
            this.printDiv();

            files.forEach(function (file) {
                _this.printLine(file.filePathWithName);
                file.references.forEach(function (file) {
                    _this.printElement(file.filePathWithName);
                });
            });
        };

        Print.prototype.printMissing = function (index, refMap) {
            var _this = this;
            this.printDiv();
            this.printSubHeader('Missing references');
            this.printDiv();

            Object.keys(refMap).sort().forEach(function (src) {
                var ref = index.getFile(src);
                _this.printLine('\33[31m\33[1m' + ref.filePathWithName + '\33[0m');
                refMap[src].forEach(function (file) {
                    _this.printElement(file.filePathWithName);
                });
            });
        };

        Print.prototype.printAllChanges = function (paths) {
            var _this = this;
            this.printSubHeader('All changes');
            this.printDiv();

            paths.sort().forEach(function (line) {
                _this.printLine(line);
            });
        };

        Print.prototype.printRelChanges = function (changeMap) {
            var _this = this;
            this.printDiv();
            this.printSubHeader('Interesting files');
            this.printDiv();

            Object.keys(changeMap).sort().forEach(function (src) {
                _this.printLine(changeMap[src].filePathWithName);
            });
        };

        Print.prototype.printRemovals = function (changeMap) {
            var _this = this;
            this.printDiv();
            this.printSubHeader('Removed files');
            this.printDiv();

            Object.keys(changeMap).sort().forEach(function (src) {
                _this.printLine(changeMap[src].filePathWithName);
            });
        };

        Print.prototype.printRefMap = function (index, refMap) {
            var _this = this;
            this.printDiv();
            this.printSubHeader('Referring');
            this.printDiv();

            Object.keys(refMap).sort().forEach(function (src) {
                var ref = index.getFile(src);
                _this.printLine(ref.filePathWithName);
                refMap[src].forEach(function (file) {
                    _this.printLine(' - ' + file.filePathWithName);
                });
            });
        };
        return Print;
    })();
    DT.Print = Print;
})(DT || (DT = {}));
/// <reference path="../../_ref.d.ts" />
/// <reference path="../printer.ts" />
var DT;
(function (DT) {
    

    /////////////////////////////////
    // Default test reporter
    /////////////////////////////////
    var DefaultTestReporter = (function () {
        function DefaultTestReporter(print) {
            this.print = print;
            this.index = 0;
        }
        DefaultTestReporter.prototype.printPositiveCharacter = function (testResult) {
            this.print.out('\33[36m\33[1m' + '.' + '\33[0m');
            this.index++;
            this.printBreakIfNeeded(this.index);
        };

        DefaultTestReporter.prototype.printNegativeCharacter = function (testResult) {
            this.print.out('x');
            this.index++;
            this.printBreakIfNeeded(this.index);
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
    'use strict';

    var Promise = require('bluebird');

    

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
            this.queue = new DT.TestQueue(options.concurrent);
        }
        TestSuiteBase.prototype.filterTargetFiles = function (files) {
            throw new Error('please implement this method');
        };

        TestSuiteBase.prototype.start = function (targetFiles, testCallback) {
            var _this = this;
            this.timer.start();

            return this.filterTargetFiles(targetFiles).then(function (targetFiles) {
                // tests get queued for multi-threading
                return Promise.all(targetFiles.map(function (targetFile) {
                    return _this.runTest(targetFile).then(function (result) {
                        testCallback(result);
                    });
                }));
            }).then(function () {
                _this.timer.end();
                return _this;
            });
        };

        TestSuiteBase.prototype.runTest = function (targetFile) {
            var _this = this;
            return this.queue.run(new DT.Test(this, targetFile, {
                tscVersion: this.options.tscVersion
            })).then(function (result) {
                _this.testResults.push(result);
                return result;
            });
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
    'use strict';

    var Promise = require('bluebird');

    var endDts = /\w\.d\.ts$/i;

    /////////////////////////////////
    // .d.ts syntax inspection
    /////////////////////////////////
    var SyntaxChecking = (function (_super) {
        __extends(SyntaxChecking, _super);
        function SyntaxChecking(options) {
            _super.call(this, options, 'Syntax checking', 'Syntax error');
        }
        SyntaxChecking.prototype.filterTargetFiles = function (files) {
            return Promise.cast(files.filter(function (file) {
                return endDts.test(file.filePathWithName);
            }));
        };
        return SyntaxChecking;
    })(DT.TestSuiteBase);
    DT.SyntaxChecking = SyntaxChecking;
})(DT || (DT = {}));
/// <reference path="../../runner.ts" />
/// <reference path="../util.ts" />
var DT;
(function (DT) {
    'use strict';

    var Promise = require('bluebird');

    var endTestDts = /\w-tests?\.ts$/i;

    /////////////////////////////////
    // Compile with *-tests.ts
    /////////////////////////////////
    var TestEval = (function (_super) {
        __extends(TestEval, _super);
        function TestEval(options) {
            _super.call(this, options, 'Typing tests', 'Failed tests');
        }
        TestEval.prototype.filterTargetFiles = function (files) {
            return Promise.cast(files.filter(function (file) {
                return endTestDts.test(file.filePathWithName);
            }));
        };
        return TestEval;
    })(DT.TestSuiteBase);
    DT.TestEval = TestEval;
})(DT || (DT = {}));
/// <reference path='../../runner.ts' />
/// <reference path='../file.ts' />
var DT;
(function (DT) {
    'use strict';

    var fs = require('fs');
    var Promise = require('bluebird');

    /////////////////////////////////
    // Try compile without .tscparams
    // It may indicate that it is compatible with --noImplicitAny maybe...
    /////////////////////////////////
    var FindNotRequiredTscparams = (function (_super) {
        __extends(FindNotRequiredTscparams, _super);
        function FindNotRequiredTscparams(options, print) {
            var _this = this;
            _super.call(this, options, 'Find not required .tscparams files', 'New arrival!');
            this.print = print;
            this.printErrorCount = false;

            this.testReporter = {
                printPositiveCharacter: function (testResult) {
                    _this.print.clearCurrentLine().printTypingsWithoutTestName(testResult.targetFile.filePathWithName);
                },
                printNegativeCharacter: function (testResult) {
                }
            };
        }
        FindNotRequiredTscparams.prototype.filterTargetFiles = function (files) {
            return Promise.filter(files, function (file) {
                return new Promise(function (resolve) {
                    fs.exists(file.filePathWithName + '.tscparams', resolve);
                });
            });
        };

        FindNotRequiredTscparams.prototype.runTest = function (targetFile) {
            var _this = this;
            this.print.clearCurrentLine().out(targetFile.filePathWithName);

            return this.queue.run(new DT.Test(this, targetFile, {
                tscVersion: this.options.tscVersion,
                useTscParams: false,
                checkNoImplicitAny: true
            })).then(function (result) {
                _this.testResults.push(result);
                _this.print.clearCurrentLine();
                return result;
            });
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
/// <reference path="typings/tsd.d.ts" />
/// <reference path="src/exec.ts" />
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
    require('source-map-support').install();

    // hacky typing
    var Lazy = require('lazy.js');
    var Promise = require('bluebird');

    var os = require('os');
    var fs = require('fs');
    var path = require('path');
    var assert = require('assert');

    var tsExp = /\.ts$/;

    DT.DEFAULT_TSC_VERSION = '0.9.7';

    /////////////////////////////////
    // Single test
    /////////////////////////////////
    var Test = (function () {
        function Test(suite, tsfile, options) {
            this.suite = suite;
            this.tsfile = tsfile;
            this.options = options;
        }
        Test.prototype.run = function () {
            var _this = this;
            return DT.Tsc.run(this.tsfile.filePathWithName, this.options).then(function (execResult) {
                var testResult = new TestResult();
                testResult.hostedBy = _this.suite;
                testResult.targetFile = _this.tsfile;
                testResult.options = _this.options;

                testResult.stdout = execResult.stdout;
                testResult.stderr = execResult.stderr;
                testResult.exitCode = execResult.exitCode;

                return testResult;
            });
        };
        return Test;
    })();
    DT.Test = Test;

    /////////////////////////////////
    // Parallel execute Tests
    /////////////////////////////////
    var TestQueue = (function () {
        function TestQueue(concurrent) {
            this.queue = [];
            this.active = [];
            this.concurrent = Math.max(1, concurrent);
        }
        // add to queue and return a promise
        TestQueue.prototype.run = function (test) {
            var _this = this;
            var defer = Promise.defer();

            // add a closure to queue
            this.queue.push(function () {
                // run it
                var p = test.run();
                p.then(defer.resolve.bind(defer), defer.reject.bind(defer));
                p.finally(function () {
                    var i = _this.active.indexOf(test);
                    if (i > -1) {
                        _this.active.splice(i, 1);
                    }
                    _this.step();
                });

                // return it
                return test;
            });
            this.step();

            // defer it
            return defer.promise;
        };

        TestQueue.prototype.step = function () {
            while (this.queue.length > 0 && this.active.length < this.concurrent) {
                this.active.push(this.queue.pop().call(null));
            }
        };
        return TestQueue;
    })();
    DT.TestQueue = TestQueue;

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
    var TestRunner = (function () {
        function TestRunner(dtPath, options) {
            if (typeof options === "undefined") { options = { tscVersion: DT.DEFAULT_TSC_VERSION }; }
            this.dtPath = dtPath;
            this.options = options;
            this.suites = [];
            this.options.findNotRequiredTscparams = !!this.options.findNotRequiredTscparams;

            this.index = new DT.FileIndex(this, this.options);
            this.changes = new DT.GitChanges(this);

            this.print = new DT.Print(this.options.tscVersion);
        }
        TestRunner.prototype.addSuite = function (suite) {
            this.suites.push(suite);
        };

        TestRunner.prototype.checkAcceptFile = function (fileName) {
            var ok = tsExp.test(fileName);
            ok = ok && fileName.indexOf('_infrastructure') < 0;
            ok = ok && fileName.indexOf('node_modules/') < 0;
            ok = ok && /^[a-z]/i.test(fileName);
            return ok;
        };

        TestRunner.prototype.run = function () {
            var _this = this;
            this.timer = new DT.Timer();
            this.timer.start();

            this.print.printChangeHeader();

            // only includes .d.ts or -tests.ts or -test.ts or .ts
            return this.index.readIndex().then(function () {
                return _this.changes.readChanges();
            }).then(function (changes) {
                _this.print.printAllChanges(changes);
                return _this.index.collectDiff(changes);
            }).then(function () {
                _this.print.printRemovals(_this.index.removed);
                _this.print.printRelChanges(_this.index.changed);
                return _this.index.parseFiles();
            }).then(function () {
                if (_this.options.printRefMap) {
                    _this.print.printRefMap(_this.index, _this.index.refMap);
                }
                if (Lazy(_this.index.missing).some(function (arr) {
                    return arr.length > 0;
                })) {
                    _this.print.printMissing(_this.index, _this.index.missing);
                    _this.print.printBoldDiv();

                    // bail
                    return Promise.cast(false);
                }
                if (_this.options.printFiles) {
                    _this.print.printFiles(_this.index.files);
                }
                return _this.index.collectTargets().then(function (files) {
                    if (_this.options.testChanges) {
                        _this.print.printQueue(files);
                        return _this.runTests(files);
                    } else {
                        _this.print.printTestAll();
                        return _this.runTests(_this.index.files);
                    }
                }).then(function () {
                    return !_this.suites.some(function (suite) {
                        return suite.ngTests.length !== 0;
                    });
                });
            });
        };

        TestRunner.prototype.runTests = function (files) {
            var _this = this;
            return Promise.attempt(function () {
                assert(Array.isArray(files), 'files must be array');

                var syntaxChecking = new DT.SyntaxChecking(_this.options);
                var testEval = new DT.TestEval(_this.options);

                if (!_this.options.findNotRequiredTscparams) {
                    _this.addSuite(syntaxChecking);
                    _this.addSuite(testEval);
                }

                return Promise.all([
                    syntaxChecking.filterTargetFiles(files),
                    testEval.filterTargetFiles(files)
                ]);
            }).spread(function (syntaxFiles, testFiles) {
                _this.print.init(syntaxFiles.length, testFiles.length, files.length);
                _this.print.printHeader(_this.options);

                if (_this.options.findNotRequiredTscparams) {
                    _this.addSuite(new DT.FindNotRequiredTscparams(_this.options, _this.print));
                }

                return Promise.reduce(_this.suites, function (count, suite) {
                    suite.testReporter = suite.testReporter || new DT.DefaultTestReporter(_this.print);

                    _this.print.printSuiteHeader(suite.testSuiteName);

                    if (_this.options.skipTests) {
                        _this.print.printWarnCode('skipped test');
                        return Promise.cast(count++);
                    }

                    return suite.start(files, function (testResult) {
                        _this.print.printTestComplete(testResult);
                    }).then(function (suite) {
                        _this.print.printSuiteComplete(suite);
                        return count++;
                    });
                }, 0);
            }).then(function (count) {
                _this.timer.end();
                _this.finaliseTests(files);
            });
        };

        TestRunner.prototype.finaliseTests = function (files) {
            var _this = this;
            var testEval = Lazy(this.suites).filter(function (suite) {
                return suite instanceof DT.TestEval;
            }).first();

            if (testEval) {
                var existsTestTypings = Lazy(testEval.testResults).map(function (testResult) {
                    return testResult.targetFile.dir;
                }).reduce(function (a, b) {
                    return a.indexOf(b) < 0 ? a.concat([b]) : a;
                }, []);

                var typings = Lazy(files).map(function (file) {
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
                this.print.printSuiteErrorCount('Without tests', withoutTestTypings.length, typings.length, true);
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
            }
        };
        return TestRunner;
    })();
    DT.TestRunner = TestRunner;

    var optimist = require('optimist')(process.argv);
    optimist.default('try-without-tscparams', false);
    optimist.default('single-thread', false);
    optimist.default('tsc-version', DT.DEFAULT_TSC_VERSION);

    optimist.default('test-changes', false);
    optimist.default('skip-tests', false);
    optimist.default('print-files', false);
    optimist.default('print-refmap', false);

    optimist.boolean('help');
    optimist.describe('help', 'print help');
    optimist.alias('h', 'help');

    var argv = optimist.argv;

    var dtPath = path.resolve(path.dirname((module).filename), '..', '..');
    var cpuCores = os.cpus().length;

    if (argv.help) {
        optimist.showHelp();
        process.exit(0);
    }

    var testFull = process.env['TRAVIS_BRANCH'] ? /\w\/full$/.test(process.env['TRAVIS_BRANCH']) : false;

    new TestRunner(dtPath, {
        concurrent: argv['single-thread'] ? 1 : Math.max(cpuCores, 2),
        tscVersion: argv['tsc-version'],
        testChanges: testFull ? false : argv['test-changes'],
        skipTests: argv['skip-tests'],
        printFiles: argv['print-files'],
        printRefMap: argv['print-refmap'],
        findNotRequiredTscparams: argv['try-without-tscparam']
    }).run().then(function (success) {
        if (!success) {
            process.exit(1);
        }
    }).catch(function (err) {
        throw err;
        process.exit(2);
    });
})(DT || (DT = {}));
//grunt-start
/// <reference path="../runner.ts" />
//grunt-end
//# sourceMappingURL=runner.js.map

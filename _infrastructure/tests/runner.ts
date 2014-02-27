/// <reference path='../../node/node.d.ts' />

/// <reference path='src/host/exec.ts' />

/// <reference path='src/file.ts' />
/// <reference path='src/tsc.ts' />
/// <reference path='src/timer.ts' />
/// <reference path="src/util.ts" />
/// <reference path="src/references.ts" />

/// <reference path='src/printer.ts' />
/// <reference path='src/reporter/reporter.ts' />

/// <reference path='src/suite/suite.ts' />
/// <reference path='src/suite/syntax.ts' />
/// <reference path='src/suite/testEval.ts' />
/// <reference path='src/suite/tscParams.ts' />

module DT {
    require('source-map-support');

    var fs = require('fs');
    var path = require('path');
    var glob = require('glob');

    export var DEFAULT_TSC_VERSION = "0.9.1.1";

    export class Test {
        constructor(public suite: ITestSuite, public tsfile: File, public options?: TscExecOptions) {
        }

        public run(callback: (result: TestResult) => void) {
            Tsc.run(this.tsfile.filePathWithName, this.options, (execResult) =>  {
                var testResult = new TestResult();
                testResult.hostedBy = this.suite;
                testResult.targetFile = this.tsfile;
                testResult.options = this.options;

                testResult.stdout = execResult.stdout;
                testResult.stderr = execResult.stderr;
                testResult.exitCode = execResult.exitCode;

                callback(testResult);
            });
        }
    }
    /////////////////////////////////
    // Test results
    /////////////////////////////////
    export class TestResult {
        hostedBy: ITestSuite;
        targetFile: File;
        options: TscExecOptions;

        stdout: string;
        stderr: string;
        exitCode: number;

        public get success(): boolean {
            return this.exitCode === 0;
        }
    }
    export interface ITestRunnerOptions {
        tscVersion:string;
        findNotRequiredTscparams?:boolean;
    }

    /////////////////////////////////
    // The main class to kick things off
    /////////////////////////////////
    export class TestRunner {
        files: File[];
        timer: Timer;
        suites: ITestSuite[] = [];
        private print: Print;

        constructor(dtPath: string, public options: ITestRunnerOptions = {tscVersion: DT.DEFAULT_TSC_VERSION}) {
            this.options.findNotRequiredTscparams = !!this.options.findNotRequiredTscparams;

            // TOD0 remove this after dev!
            var testNames = [
                'async/',
                'jquery/jquery.d',
                'angularjs/angular.d',
                'pixi/'
            ];
            if (process.env.TRAVIS) {
                testNames = null;
            }

            // should be async
            // only includes .d.ts or -tests.ts or -test.ts or .ts
            var filesName = glob.sync('**/*.ts', { cwd: dtPath });
            this.files = filesName
                .filter((fileName) => {
                    return fileName.indexOf('_infrastructure') < 0;
                })
                .filter((fileName) => {
                    return fileName.indexOf('node_modules/') < 0;
                })
                .filter((fileName) => {
                    // TOD0 remove this after dev!
                    return !testNames || testNames.some((pattern) => {
                        return fileName.indexOf(pattern) > -1;
                    });
                })
                .filter((fileName) => {
                    return /^[a-z]/i.test(fileName);
                })
                .sort()
                .map((fileName) => {
                    return new File(dtPath, fileName);
                });
        }

        public addSuite(suite: ITestSuite) {
            this.suites.push(suite);
        }

        public run() {
            this.timer = new Timer();
            this.timer.start();

            var index = new ReferenceIndex(this.options);
            index.collectReferences(this.files, () => {
                this.files.forEach((file) => {
                    console.log(file.filePathWithName);
                    file.references.forEach((file) => {
                       console.log('  - %s', file.filePathWithName);
                    });
                });
                this.runTests();
            });
        }
        public runTests() {

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
            var executor = () => {
                var suite = this.suites[count];
                if (suite) {
                    suite.testReporter = suite.testReporter || new DefaultTestReporter(this.print);

                    this.print.printSuiteHeader(suite.testSuiteName);
                    var targetFiles = suite.filterTargetFiles(this.files);
                    suite.start(
                        targetFiles,
                        (testResult, index) => {
                            this.testCompleteCallback(testResult, index);
                        },
                        (suite) => {
                            this.suiteCompleteCallback(suite);
                            count++;
                            executor();
                        });
                } else {
                    this.timer.end();
                    this.allTestCompleteCallback();
                }
            };
            executor();
        }

        private testCompleteCallback(testResult: TestResult, index: number) {
            var reporter = testResult.hostedBy.testReporter;
            if (testResult.success) {
                reporter.printPositiveCharacter(index, testResult);
            } else {
                reporter.printNegativeCharacter(index, testResult);
            }
        }

        private suiteCompleteCallback(suite: ITestSuite) {
            this.print.printBreak();

            this.print.printDiv();
            this.print.printElapsedTime(suite.timer.asString, suite.timer.time);
            this.print.printSuccessCount(suite.okTests.length, suite.testResults.length);
            this.print.printFailedCount(suite.ngTests.length, suite.testResults.length);
        }

        private allTestCompleteCallback() {
            var testEval = this.suites.filter(suite => suite instanceof TestEval)[0];
            if (testEval) {
                var existsTestTypings: string[] = testEval.testResults
                    .map((testResult) => {
                        return testResult.targetFile.dir;
                    })
                    .reduce((a: string[], b: string) => {
                        return a.indexOf(b) < 0 ? a.concat([b]) : a;
                    }, []);
                var typings: string[] = this.files
                    .map((file) => {
                        return file.dir;
                    })
                    .reduce((a: string[], b: string) => {
                        return a.indexOf(b) < 0 ? a.concat([b]) : a;
                    }, []);
                var withoutTestTypings: string[] = typings
                    .filter((typing) => {
                        return existsTestTypings.indexOf(typing) < 0;
                    });
                this.print.printDiv();
                this.print.printTypingsWithoutTest(withoutTestTypings);
            }

            this.print.printDiv();
            this.print.printTotalMessage();

            this.print.printDiv();
            this.print.printElapsedTime(this.timer.asString, this.timer.time);
            this.suites
                .filter((suite: ITestSuite) => {
                    return suite.printErrorCount;
                })
                .forEach((suite: ITestSuite) => {
                    this.print.printSuiteErrorCount(suite.errorHeadline, suite.ngTests.length, suite.testResults.length);
                });
            if (testEval) {
                this.print.printSuiteErrorCount("Without tests", withoutTestTypings.length, typings.length, '\33[33m\33[1m');
            }

            this.print.printDiv();
            if (this.suites.some((suite) => {
                return suite.ngTests.length !== 0
            })) {
                this.print.printErrorsHeader();

                this.suites
                    .filter((suite) => {
                        return suite.ngTests.length !== 0;
                    })
                    .forEach((suite) =>  {
                        suite.ngTests.forEach((testResult) => {
                            this.print.printErrorsForFile(testResult);
                        });
                        this.print.printBoldDiv();
                    });

                process.exit(1);
            }
        }
    }

    var dtPath = path.resolve(path.dirname((module).filename), '..', '..');
    var findNotRequiredTscparams = process.argv.some(arg => arg == "--try-without-tscparams");
    var tscVersionIndex = process.argv.indexOf("--tsc-version");
    var tscVersion = DEFAULT_TSC_VERSION;
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
}

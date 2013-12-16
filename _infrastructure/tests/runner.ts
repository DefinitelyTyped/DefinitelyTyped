/// <reference path='../../node/node.d.ts' />

/// <reference path='src/exec.ts' />
/// <reference path='src/io.ts' />

module DefinitelyTyped.TestManager {
    var path = require('path');

    export var DEFAULT_TSC_VERSION = "0.9.1.1";

    function endsWith(str:string, suffix:string) {
        return str.indexOf(suffix, str.length - suffix.length) !== -1;
    }

    export interface TscExecOptions {
        tscVersion?:string;
        useTscParams?:boolean;
        checkNoImplicitAny?:boolean;
    }

    class Tsc {
        public static run(tsfile:string, options:TscExecOptions, callback:(result:ExecResult)=>void) {
            options = options || {};
            options.tscVersion = options.tscVersion || DEFAULT_TSC_VERSION;
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
            Exec.exec(command, [tsfile], (execResult) => {
                callback(execResult);
            });
        }
    }

    class Test {
        constructor(public suite:ITestSuite, public tsfile:File, public options?:TscExecOptions) {
        }

        public run(callback:(result:TestResult)=>void) {
            Tsc.run(this.tsfile.filePathWithName, this.options, (execResult)=> {
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
    // Timer.start starts a timer
    // Timer.end stops the timer and sets asString to the pretty print value
    /////////////////////////////////
    export class Timer {
        startTime:number;
        time = 0;
        asString:string;

        public start() {
            this.time = 0;
            this.startTime = this.now();
        }

        public now():number {
            return Date.now();
        }

        public end() {
            this.time = (this.now() - this.startTime) / 1000;
            this.asString = Timer.prettyDate(this.startTime, this.now());
        }

        public static prettyDate(date1:number, date2:number):string {
            var diff = ((date2 - date1) / 1000),
                day_diff = Math.floor(diff / 86400);

            if (isNaN(day_diff) || day_diff < 0 || day_diff >= 31)
                return;

            return <string><any> (day_diff == 0 && (
                diff < 60 && (diff + " seconds") ||
                    diff < 120 && "1 minute" ||
                    diff < 3600 && Math.floor(diff / 60) + " minutes" ||
                    diff < 7200 && "1 hour" ||
                    diff < 86400 && Math.floor(diff / 3600) + " hours") ||
                day_diff == 1 && "Yesterday" ||
                day_diff < 7 && day_diff + " days" ||
                day_diff < 31 && Math.ceil(day_diff / 7) + " weeks");
        }
    }

    /////////////////////////////////
    // Given a document root + ts file pattern this class returns:
    //         all the TS files OR just tests OR just definition files
    /////////////////////////////////
    export class File {
        dir:string;
        file:string;
        ext:string;

        constructor(public baseDir:string, public filePathWithName:string) {
            var dirName = path.dirname(this.filePathWithName.substr(this.baseDir.length + 1)).replace('\\', '/');
            this.dir = dirName.split('/')[0];
            this.file = path.basename(this.filePathWithName, '.ts');
            this.ext = path.extname(this.filePathWithName);
        }

        // From '/complete/path/to/file' to 'specfolder/specfile.d.ts'
        public get formatName():string {
            var dirName = path.dirname(this.filePathWithName.substr(this.baseDir.length + 1)).replace('\\', '/');
            return this.dir + ((dirName.split('/').length > 1) ? '/-/' : '/') + this.file + this.ext;
        }
    }

    /////////////////////////////////
    // Test results
    /////////////////////////////////
    export class TestResult {
        hostedBy:ITestSuite;
        targetFile:File;
        options:TscExecOptions;

        stdout:string;
        stderr:string;
        exitCode:number;

        public get success():boolean {
            return this.exitCode === 0;
        }
    }

    /////////////////////////////////
    // The interface for test suite
    /////////////////////////////////
    export interface ITestSuite {
        testSuiteName:string;
        errorHeadline:string;
        filterTargetFiles(files:File[]):File[];

        start(targetFiles:File[], testCallback:(result:TestResult, index:number)=>void, suiteCallback:(suite:ITestSuite)=>void):void;

        testResults:TestResult[];
        okTests:TestResult[];
        ngTests:TestResult[];
        timer:Timer;

        testReporter:ITestReporter;
        printErrorCount:boolean;
    }

    /////////////////////////////////
    // Test reporter interface
    // for example, . and x
    /////////////////////////////////
    export interface ITestReporter {
        printPositiveCharacter(index:number, testResult:TestResult):void;
        printNegativeCharacter(index:number, testResult:TestResult):void;
    }

    /////////////////////////////////
    // Default test reporter
    /////////////////////////////////
    class DefaultTestReporter implements ITestReporter {
        constructor(public print:Print) {
        }

        public printPositiveCharacter(index:number, testResult:TestResult) {
            this.print.out('\33[36m\33[1m' + '.' + '\33[0m');

            this.printBreakIfNeeded(index);
        }

        public printNegativeCharacter(index:number, testResult:TestResult) {
            this.print.out("x");

            this.printBreakIfNeeded(index);
        }

        private printBreakIfNeeded(index:number) {
            if (index % this.print.WIDTH === 0) {
                this.print.printBreak();
            }
        }
    }

    /////////////////////////////////
    // All the common things that we pring are functions of this class
    /////////////////////////////////
    class Print {

        WIDTH = 77;

        constructor(public version:string, public typings:number, public tests:number, public tsFiles:number) {
        }

        public out(s:any):Print {
            process.stdout.write(s);
            return this;
        }

        public repeat(s:string, times:number):string {
            return new Array(times + 1).join(s);
        }

        public printHeader() {
            this.out('=============================================================================\n');
            this.out('                    \33[36m\33[1mDefinitelyTyped test runner 0.4.0\33[0m\n');
            this.out('=============================================================================\n');
            this.out(' \33[36m\33[1mTypescript version:\33[0m ' + this.version + '\n');
            this.out(' \33[36m\33[1mTypings           :\33[0m ' + this.typings + '\n');
            this.out(' \33[36m\33[1mTests             :\33[0m ' + this.tests + '\n');
            this.out(' \33[36m\33[1mTypeScript files  :\33[0m ' + this.tsFiles + '\n');
        }

        public printSuiteHeader(title:string) {
            var left = Math.floor((this.WIDTH - title.length ) / 2) - 1;
            var right = Math.ceil((this.WIDTH - title.length ) / 2) - 1;
            this.out(this.repeat("=", left)).out(" \33[34m\33[1m");
            this.out(title);
            this.out("\33[0m ").out(this.repeat("=", right)).printBreak();
        }

        public printDiv() {
            this.out('-----------------------------------------------------------------------------\n');
        }

        public printBoldDiv() {
            this.out('=============================================================================\n');
        }

        public printErrorsHeader() {
            this.out('=============================================================================\n');
            this.out('                    \33[34m\33[1mErrors in files\33[0m \n');
            this.out('=============================================================================\n');
        }

        public printErrorsForFile(testResult:TestResult) {
            this.out('----------------- For file:' + testResult.targetFile.formatName);
            this.printBreak().out(testResult.stderr).printBreak();
        }

        public printBreak():Print {
            this.out('\n');
            return this;
        }

        public clearCurrentLine():Print {
            this.out("\r\33[K");
            return this;
        }

        public printSuccessCount(current:number, total:number) {
            this.out(' \33[36m\33[1mSuccessful      :\33[0m \33[32m\33[1m' + ((current / total) * 100).toFixed(2) + '% (' + current + '/' + total + ')\33[0m\n');
        }

        public printFailedCount(current:number, total:number) {
            this.out(' \33[36m\33[1mFailure         :\33[0m \33[31m\33[1m' + ((current / total) * 100).toFixed(2) + '% (' + current + '/' + total + ')\33[0m\n');
        }

        public printTypingsWithoutTestsMessage() {
            this.out(' \33[36m\33[1mTyping without tests\33[0m\n');
        }

        public printTotalMessage() {
            this.out(' \33[36m\33[1mTotal\33[0m\n');
        }

        public printElapsedTime(time:string, s:number) {
            this.out(' \33[36m\33[1mElapsed time    :\33[0m ~' + time + ' (' + s + 's)\n');
        }

        public printSuiteErrorCount(errorHeadline:string, current:number, total:number, valuesColor = '\33[31m\33[1m') {
            this.out(' \33[36m\33[1m').out(errorHeadline).out(this.repeat(' ', 16 - errorHeadline.length));
            this.out(':\33[0m ' + valuesColor + ((current / total) * 100).toFixed(2) + '% (' + current + '/' + total + ')\33[0m\n');
        }

        public printTypingsWithoutTestName(file:string) {
            this.out(' - \33[33m\33[1m' + file + '\33[0m\n');
        }

        public printTypingsWithoutTest(withoutTestTypings:string[]) {
            if (withoutTestTypings.length > 0) {
                this.printTypingsWithoutTestsMessage();

                this.printDiv();
                withoutTestTypings.forEach(t=> {
                    this.printTypingsWithoutTestName(t);
                });
            }
        }
    }

    /////////////////////////////////
    // Base class for test suite
    /////////////////////////////////
    class TestSuiteBase implements ITestSuite {
        timer:Timer = new Timer();
        testResults:TestResult[] = [];
        testReporter:ITestReporter;
        printErrorCount = true;

        constructor(public options:ITestRunnerOptions, public testSuiteName:string, public errorHeadline:string) {
        }

        public filterTargetFiles(files:File[]):File[] {
            throw new Error("please implement this method");
        }

        public start(targetFiles:File[], testCallback:(result:TestResult, index:number)=>void, suiteCallback:(suite:ITestSuite)=>void):void {
            targetFiles = this.filterTargetFiles(targetFiles);
            this.timer.start();
            var count = 0;
            // exec test is async process. serialize.
            var executor = () => {
                var targetFile = targetFiles[count];
                if (targetFile) {
                    this.runTest(targetFile, (result)=> {
                        testCallback(result, count + 1);
                        count++;
                        executor();
                    });
                } else {
                    this.timer.end();
                    this.finish(suiteCallback);
                }
            };
            executor();
        }

        public runTest(targetFile:File, callback:(result:TestResult)=>void):void {
            new Test(this, targetFile, {tscVersion: this.options.tscVersion}).run(result=> {
                this.testResults.push(result);
                callback(result);
            });
        }

        public finish(suiteCallback:(suite:ITestSuite)=>void) {
            suiteCallback(this);
        }

        public get okTests():TestResult[] {
            return this.testResults.filter(r=>r.success);
        }

        public get ngTests():TestResult[] {
            return this.testResults.filter(r=>!r.success);
        }
    }

    /////////////////////////////////
    // .d.ts syntax inspection
    /////////////////////////////////
    class SyntaxChecking extends TestSuiteBase {

        constructor(options:ITestRunnerOptions) {
            super(options, "Syntax checking", "Syntax error");
        }

        public filterTargetFiles(files:File[]):File[] {
            return files.filter(file => endsWith(file.formatName.toUpperCase(), '.D.TS'));
        }
    }

    /////////////////////////////////
    // Compile with *-tests.ts
    /////////////////////////////////
    class TestEval extends TestSuiteBase {

        constructor(options) {
            super(options, "Typing tests", "Failed tests");
        }

        public filterTargetFiles(files:File[]):File[] {
            return files.filter(file => endsWith(file.formatName.toUpperCase(), '-TESTS.TS'));
        }
    }

    /////////////////////////////////
    // Try compile without .tscparams
    // It may indicate that it is compatible with --noImplicitAny maybe...
    /////////////////////////////////
    class FindNotRequiredTscparams extends TestSuiteBase {
        testReporter:ITestReporter;
        printErrorCount = false;

        constructor(options:ITestRunnerOptions, private print:Print) {
            super(options, "Find not required .tscparams files", "New arrival!");

            this.testReporter = {
                printPositiveCharacter: (index:number, testResult:TestResult)=> {
                    this.print
                        .clearCurrentLine()
                        .printTypingsWithoutTestName(testResult.targetFile.formatName);
                },
                printNegativeCharacter: (index:number, testResult:TestResult)=> {
                }
            }
        }

        public filterTargetFiles(files:File[]):File[] {
            return files.filter(file=> IO.fileExists(file.filePathWithName + '.tscparams'));
        }

        public runTest(targetFile:File, callback:(result:TestResult)=>void):void {
            this.print.clearCurrentLine().out(targetFile.formatName);
            new Test(this, targetFile, {tscVersion: this.options.tscVersion, useTscParams: false, checkNoImplicitAny: true}).run(result=> {
                this.testResults.push(result);
                callback(result);
            });
        }

        public finish(suiteCallback:(suite:ITestSuite)=>void) {
            this.print.clearCurrentLine();
            suiteCallback(this);
        }

        public get ngTests():TestResult[] {
            // Do not show ng test results
            return [];
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
        files:File[];
        timer:Timer;
        suites:ITestSuite[] = [];
        private print:Print;

        constructor(dtPath:string, public options:ITestRunnerOptions = {tscVersion: DEFAULT_TSC_VERSION}) {
            this.options.findNotRequiredTscparams = !!this.options.findNotRequiredTscparams;

            var filesName = IO.dir(dtPath, /.\.ts/g, { recursive: true }).sort();
            // only includes .d.ts or -tests.ts or -test.ts or .ts
            filesName = filesName
                .filter(fileName => fileName.indexOf('../_infrastructure') < 0)
                .filter(fileName => !endsWith(fileName, ".tscparams"));
            this.files = filesName.map(fileName => new File(dtPath, fileName));
        }

        public addSuite(suite:ITestSuite) {
            this.suites.push(suite);
        }

        public run() {
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
                        suite=> {
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

        private testCompleteCallback(testResult:TestResult, index:number) {
            var reporter = testResult.hostedBy.testReporter;
            if (testResult.success) {
                reporter.printPositiveCharacter(index, testResult);
            } else {
                reporter.printNegativeCharacter(index, testResult);
            }
        }

        private suiteCompleteCallback(suite:ITestSuite) {
            this.print.printBreak();

            this.print.printDiv();
            this.print.printElapsedTime(suite.timer.asString, suite.timer.time);
            this.print.printSuccessCount(suite.okTests.length, suite.testResults.length);
            this.print.printFailedCount(suite.ngTests.length, suite.testResults.length);
        }

        private allTestCompleteCallback() {
            var testEval = this.suites.filter(suite=>suite instanceof TestEval)[0];
            if (testEval) {
                var existsTestTypings:string[] = testEval.testResults
                    .map(testResult=>testResult.targetFile.dir)
                    .reduce((a, b)=> a.indexOf(b) < 0 ? a.concat([b]) : a, []);
                var typings:string[] = this.files
                    .map(file=>file.dir)
                    .reduce((a, b)=> a.indexOf(b) < 0 ? a.concat([b]) : a, []);
                var withoutTestTypings:string[] = typings
                    .filter(typing=>existsTestTypings.indexOf(typing) < 0);
                this.print.printDiv();
                this.print.printTypingsWithoutTest(withoutTestTypings);
            }

            this.print.printDiv();
            this.print.printTotalMessage();

            this.print.printDiv();
            this.print.printElapsedTime(this.timer.asString, this.timer.time);
            this.suites
                .filter(suite=>suite.printErrorCount)
                .forEach(suite=> {
                    this.print.printSuiteErrorCount(suite.errorHeadline, suite.ngTests.length, suite.testResults.length);
                });
            if (testEval) {
                this.print.printSuiteErrorCount("Without tests", withoutTestTypings.length, typings.length, '\33[33m\33[1m');
            }

            this.print.printDiv();
            if (this.suites.some(suite=>suite.ngTests.length !== 0)) {
                this.print.printErrorsHeader();

                this.suites
                    .filter(suite=>suite.ngTests.length !== 0)
                    .forEach(suite=> {
                        suite.ngTests.forEach(testResult => {
                            this.print.printErrorsForFile(testResult);
                        });
                        this.print.printBoldDiv();
                    });

                process.exit(1);
            }
        }
    }
}

var dtPath = __dirname + '/../..';
var findNotRequiredTscparams = process.argv.some(arg=>arg == "--try-without-tscparams");
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

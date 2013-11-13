/// <reference path='../../node/node.d.ts' />

/// <reference path='src/exec.ts' />
/// <reference path='src/io.ts' />

module DefinitelyTyped.TestManager {

    var path = require('path');

    function endsWith(str, suffix) {
        return str.indexOf(suffix, str.length - suffix.length) !== -1;
    }

    class Iterator {
        index: number = -1;

        constructor(public list: any[]) { }

        public next() {
            this.index++;
            return this.list[this.index];
        }

        public hasNext() {
            return this.list[1 + this.index] != null;
        }
    }

    interface TscCallback {
        (result: ExecResult): void;
    }

    class Tsc {
        public static run(tsfile: string, callback: TscCallback) {
            var command = 'node ./_infrastructure/tests/typescript/tsc.js --module commonjs ';
            if (IO.fileExists(tsfile + '.tscparams')) {
                command += '@' + tsfile + '.tscparams';
            } else {
                command += '--noImplicitAny';
            }
            Exec.exec(command, [tsfile], (ExecResult) => {
                callback(ExecResult);
            });
        }
    }

    class Test {
        constructor(public tsfile: string) { }

        public run(callback: TscCallback) {
            Tsc.run(this.tsfile, callback);
        }
    }

    class Typing {
        public fileHandler: FileHandler;

        constructor(public name: string, baseDir: string) {
            this.fileHandler = new FileHandler(baseDir + '/' + name + '/', /.\.ts/g);
        }
    }

    /////////////////////////////////
    // Given a document root + ts file pattern this class returns:
    //         all the TS files OR just tests OR just definition files 
    ///////////////////////////////// 
    class FileHandler {
        public files: string[] = [];
        public typings: Typing[] = [];

        constructor(public path: string, pattern: any) {
            this.files = IO.dir(path, pattern, { recursive: true }).sort();
        }

        public allTS(): string[] {
            return this.files;
        }

        public allTests(): string[] {
            var tests = [];

            for (var i = 0; i < this.files.length; i++) {
                if (endsWith(this.files[i].toUpperCase(), '-TESTS.TS')) {
                    tests.push(this.files[i]);
                }
            }

            return tests;
        }

        public allTypings(): string[] {
            var typings = {};

            for (var i = 0; i < this.files.length; i++) {
                var file = this.files[i];
                var firName = path.dirname(file.substr(this.path.length + 1)).replace('\\', '/');
                var dir = firName.split('/')[0];

                if (!typings[dir]) typings[dir] = true;
            }

            var list = [];
            for (var attr in typings) {
                list.push(attr);
            }

            return list;
        }
    }

    /////////////////////////////////
    // Timer.start starts a timer 
    // Timer.end stops the timer and sets asString to the pretty print value
    ///////////////////////////////// 
    class Timer {
        public startTime;
        public time = 0;
        public asString: string;

        private static prettyDate(date1, date2): string {
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

        public start() {
            this.time = 0;
            this.startTime = this.now();
        }

        private now() {
            return Date.now();
        }

        public end() {
            this.time = (this.now() - this.startTime) / 1000;
            this.asString = Timer.prettyDate(this.startTime, this.now());
        }
    }

    /////////////////////////////////
    // All the common things that we pring are functions of this class
    ///////////////////////////////// 
    class Print {
        constructor(public version: string, public typings: number, public tsFiles: number) { }

        public out(s) {
            process.stdout.write(s);
        }

        public printHeader() {
            this.out('=============================================================================\n');
            this.out('                    \33[36m\33[1mDefinitelyTyped test runner 0.3.0\33[0m\n');
            this.out('=============================================================================\n');
            this.out(' \33[36m\33[1mTypescript version:\33[0m ' + this.version + '\n');
            this.out(' \33[36m\33[1mTypings           :\33[0m ' + this.typings + '\n');
            this.out(' \33[36m\33[1mTypeScript files  :\33[0m ' + this.tsFiles + '\n');
        }

        public printSyntaxCheckingHeader() {
            this.out('============================ \33[34m\33[1mSyntax checking\33[0m ================================\n');
        }

        public printTypingTestsHeader() {
            this.out('============================= \33[34m\33[1mTyping tests\33[0m ==================================\n');
        }

        public printSuccessCharacter() {
            this.out('\33[36m\33[1m.\33[0m');
        }

        public printFailureCharacter() {
            this.out('x');
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

        public printErrorsForFile(file: File) {            
            this.out('----------------- For file:' + file.formatName() );
            this.printBreak();
            this.out(file.execResult.stderr);
            this.printBreak();
        }

        public printfilesWithSintaxErrorMessage() {
            this.out(' \33[36m\33[1mFiles with syntax error\33[0m\n');
        }

        public printFailedTestMessage() {
            this.out(' \33[36m\33[1mFailed tests\33[0m\n');
        }

        public printTypingsWithoutTestsMessage() {
            this.out(' \33[36m\33[1mTyping without tests\33[0m\n');
        }

        public printTotalMessage() {
            this.out(' \33[36m\33[1mTotal\33[0m\n');
        }

        public printErrorFile(file: string) {
            this.out(' - ' + file + '\n');
        }

        public printTypingsWithoutTest(file) {
            this.out(' - \33[33m\33[1m' + file + '\33[0m\n');
        }

        public printBreak() {
            this.out('\n');
        }

        public printSuccessCount(current: number, total: number) {
            this.out(' \33[36m\33[1mSuccessful      :\33[0m \33[32m\33[1m' + ((current / total) * 100).toFixed(2) + '% (' + current + '/' + total + ')\33[0m\n');
        }

        public printFailedCount(current: number, total: number) {
            this.out(' \33[36m\33[1mFailure         :\33[0m \33[31m\33[1m' + ((current / total) * 100).toFixed(2) + '% (' + current + '/' + total + ')\33[0m\n');
        }

        public printElapsedTime(time, s) {
            this.out(' \33[36m\33[1mElapsed time    :\33[0m ~' + time + ' (' + s + 's)\n');
        }

        public printSyntaxErrorCount(current: number, total: number) {
            this.out(' \33[36m\33[1mSyntax error    :\33[0m \33[31m\33[1m' + ((current / total) * 100).toFixed(2) + '% (' + current + '/' + total + ')\33[0m\n');
        }

        public printTestErrorCount(current: number, total: number) {
            this.out(' \33[36m\33[1mFailed tests    :\33[0m \33[31m\33[1m' + ((current / total) * 100).toFixed(2) + '% (' + current + '/' + total + ')\33[0m\n');
        }

        public printWithoutTestCount(current: number, total: number) {
            this.out(' \33[36m\33[1mWithout tests   :\33[0m \33[33m\33[1m' + ((current / total) * 100).toFixed(2) + '% (' + current + '/' + total + ')\33[0m\n');
        }
    }

    /////////////////////////////
    // Represents the results of a test file execution
    /////////////////////////////
    class File {
        static baseDir: string;

        constructor(public baseDir: string, public filePathWithName: string, public execResult: ExecResult) { }

        // From '/complete/path/to/file' to 'specfolder/specfile.d.ts'
        public formatName(): string {
            var dirName = path.dirname(this.filePathWithName.substr(this.baseDir.length + 1)).replace('\\', '/');
            var dir = dirName.split('/')[0];
            var file = path.basename(this.filePathWithName, '.ts');
            var ext = path.extname(this.filePathWithName);

            return dir + ((dirName.split('/').length > 1) ? '/-/' : '/') + '\33[36m\33[1m' + file + '\33[0m' + ext;
        }
    }


    /////////////////////////////
    // Determine syntax errors in typings
    /////////////////////////////
    class SyntaxChecking {

        private timer: Timer;

        public files: File[] = [];

        private getFailedFiles(): File[] {
            var list: File[] = [];

            for (var i = 0; i < this.files.length; i++) {
                if (this.files[i].execResult.exitCode) {
                    list.push(this.files[i]);
                }
            }

            return list;
        }

        private getSuccessFiles(): File[] {
            var list: File[] = [];

            for (var i = 0; i < this.files.length; i++) {
                if (!this.files[i].execResult.exitCode) {
                    list.push(this.files[i]);
                }
            }

            return list;
        }

        constructor(public fileHandler: FileHandler, public out: Print) {
            this.timer = new Timer();
        }

        private printStats() {
            this.out.printDiv();
            this.out.printElapsedTime(this.timer.asString, this.timer.time);
            this.out.printSuccessCount(this.getSuccessFiles().length, this.files.length);
            this.out.printFailedCount(this.getFailedFiles().length, this.files.length);
        }

        private printFailedFiles() {
            if (this.getFailedFiles().length > 0) {
                this.out.printDiv();

                this.out.printfilesWithSintaxErrorMessage();

                this.out.printDiv();

                for (var i = 0; i < this.getFailedFiles().length; i++) {
                    var errorFile = this.getFailedFiles()[i];
                    this.out.printErrorFile(errorFile.formatName());
                }
            }
        }

        private run(it, file, len, maxLen, callback: Function) {
            if (!endsWith(file.toUpperCase(), '-TESTS.TS') && endsWith(file.toUpperCase(), '.TS') && file.indexOf('../_infrastructure') < 0) {
                new Test(file).run((execResult) => {

                    if (execResult.exitCode === 1) {
                        this.out.printFailureCharacter();
                        len++;
                    } else {
                        this.out.printSuccessCharacter();
                        len++;
                    }

                    this.files.push(new File(this.fileHandler.path, file, execResult));

                    if (len > maxLen) {
                        len = 0;
                        this.out.printBreak();
                    }

                    if (it.hasNext()) {
                        this.run(it, it.next(), len, maxLen, callback);
                    } else {
                        this.out.printBreak();
                        this.timer.end();
                        this.printFailedFiles();
                        this.printStats();

                        callback(this.getFailedFiles().length, this.files.length);
                    }
                });
            } else if (it.hasNext()) {
                this.run(it, it.next(), len, maxLen, callback);
            } else {
                this.out.printBreak();
                this.timer.end();
                this.printStats();
                this.printFailedFiles();

                callback(this.getFailedFiles().length, this.files.length);
            }
        }

        public start(callback: Function) {
            this.timer.start();

            var tsFiles = this.fileHandler.allTS();

            var it = new Iterator(tsFiles);

            var len = 0;
            var maxLen = 76;

            if (it.hasNext()) {
                this.run(it, it.next(), len, maxLen, callback);
            }
        }
    }

    /////////////////////////////
    // Determines errors in typing tests
    /////////////////////////////
    class TestEval {

        private timer: Timer;

        public files: File[] = [];

        private getFailedFiles(): File[] {
            var list: File[] = [];

            for (var i = 0; i < this.files.length; i++) {
                if (this.files[i].execResult.exitCode) {
                    list.push(this.files[i]);
                }
            }

            return list;
        }

        private getSuccessFiles(): File[] {
            var list: File[] = [];

            for (var i = 0; i < this.files.length; i++) {
                if (!this.files[i].execResult.exitCode) {
                    list.push(this.files[i]);
                }
            }

            return list;
        }

        constructor(public fileHandler: FileHandler, public out: Print) {
            this.timer = new Timer();
        }

        private printStats() {
            this.out.printDiv();
            this.out.printElapsedTime(this.timer.asString, this.timer.time);
            this.out.printSuccessCount(this.getSuccessFiles().length, this.files.length);
            this.out.printFailedCount(this.getFailedFiles().length, this.files.length);
        }

        private printFailedFiles() {
            if (this.getFailedFiles().length > 0) {
                this.out.printDiv();

                this.out.printFailedTestMessage();

                this.out.printDiv();

                for (var i = 0; i < this.getFailedFiles().length; i++) {
                    var errorFile = this.getFailedFiles()[i];
                    this.out.printErrorFile(errorFile.formatName());
                }
            }
        }

        private run(it, file, len, maxLen, callback: Function) {
            if (endsWith(file.toUpperCase(), '-TESTS.TS')) {
                new Test(file).run((execResult) => {

                    if (execResult.exitCode === 1) {
                        this.out.printFailureCharacter();
                        len++;
                    } else {
                        this.out.printSuccessCharacter();
                        len++;
                    }

                    this.files.push(new File(this.fileHandler.path, file, execResult));

                    if (len > maxLen) {
                        len = 0;
                        this.out.printBreak();
                    }

                    if (it.hasNext()) {
                        this.run(it, it.next(), len, maxLen, callback);
                    } else {
                        this.out.printBreak();
                        this.timer.end();
                        this.printFailedFiles();
                        this.printStats();

                        callback(this.getFailedFiles().length, this.files.length);
                    }
                });
            } else if (it.hasNext()) {
                this.run(it, it.next(), len, maxLen, callback);
            } else {
                this.out.printBreak();
                this.timer.end();
                this.printFailedFiles();
                this.printStats();

                callback(this.getFailedFiles().length, this.files.length);
            }
        }

        public start(callback: Function) {
            this.timer.start();

            var tsFiles = this.fileHandler.allTS();

            var it = new Iterator(tsFiles);

            var len = 0;
            var maxLen = 76;

            if (it.hasNext()) {
                this.run(it, it.next(), len, maxLen, callback);
            }
        }
    }

    /////////////////////////////////
    // The main class to kick things off        
    ///////////////////////////////// 
    export class TestRunner {
        private fh: FileHandler;
        private out: Print;
        private sc: SyntaxChecking;
        private te: TestEval;
        private typings: Typing[] = [];

        private printTypingsWithoutTest() {
            var count = 0;

            if (this.typings.length > 0) {
                this.out.printDiv();

                this.out.printTypingsWithoutTestsMessage();

                this.out.printDiv();

                for (var i = 0; i < this.typings.length; i++) {
                    var typing = this.typings[i];
                    if (typing.fileHandler.allTests().length == 0) {
                        if (typing.name != '_infrastructure'
                            && typing.name != '_ReSharper.DefinitelyTyped'
                            && typing.name != 'obj'
                            && typing.name != 'bin'
                            && typing.name != 'Properties') {
                            this.out.printTypingsWithoutTest(typing.name);
                            count++;
                        }
                    }
                }
            }

            return count;
        }

        private printErrorsDetected() {
            this.out.printErrorsHeader();

            var printErrorsForFileIfFound = (file: File) => {
                if (file.execResult.exitCode)
                    this.out.printErrorsForFile(file);
            };

            // sc errors:
            this.sc.files.forEach(printErrorsForFileIfFound);
            this.out.printBoldDiv();

            // te errors: 
            this.te.files.forEach(printErrorsForFileIfFound);
            this.out.printBoldDiv();
        }

        constructor(public dtPath: string) {
            this.fh = new FileHandler(dtPath, /.\.ts/g);
            this.out = new Print('0.9.1.1', this.fh.allTypings().length, this.fh.allTS().length);
            this.sc = new SyntaxChecking(this.fh, this.out);
            this.te = new TestEval(this.fh, this.out);

            var tpgs = this.fh.allTypings();
            for (var i = 0; i < tpgs.length; i++) {
                this.typings.push(new Typing(tpgs[i], this.dtPath));
            }
        }

        public run() {
            var timer = new Timer();
            timer.start();

            this.out.printHeader();

            // Run syntax tests
            this.out.printSyntaxCheckingHeader();
            this.sc.start((syntaxFailedCount, syntaxTotal) => {

                // Now run typing tests
                this.out.printTypingTestsHeader();
                this.te.start((testFailedCount, testTotal) => {

                    // Get the tests without any typing and simultaneously print their names
                    var totalTypingsWithoutTest = this.printTypingsWithoutTest();

                    // End total timer and print final messages
                    timer.end();

                    this.out.printDiv();
                    this.out.printTotalMessage();
                    this.out.printDiv();

                    this.out.printElapsedTime(timer.asString, timer.time);
                    this.out.printSyntaxErrorCount(syntaxFailedCount, syntaxTotal);
                    this.out.printTestErrorCount(testFailedCount, testTotal);
                    this.out.printWithoutTestCount(totalTypingsWithoutTest, this.fh.allTypings().length);

                    this.out.printDiv();

                    if (syntaxFailedCount > 0 || testFailedCount > 0) {
                        this.printErrorsDetected();
                        process.exit(1);
                    }
                });
            });
        }
    }
}

var dtPath = __dirname + '/../..';

var runner = new DefinitelyTyped.TestManager.TestRunner(dtPath);
runner.run();

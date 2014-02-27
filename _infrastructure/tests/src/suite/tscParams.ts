/// <reference path="../../runner.ts" />
/// <reference path="../file.ts" />

module DT {
    var fs = require('fs');

    /////////////////////////////////
    // Try compile without .tscparams
    // It may indicate that it is compatible with --noImplicitAny maybe...
    /////////////////////////////////
    export class FindNotRequiredTscparams extends TestSuiteBase {
        testReporter: ITestReporter;
        printErrorCount = false;

        constructor(options: ITestRunnerOptions, private print: Print) {
            super(options, "Find not required .tscparams files", "New arrival!");

            this.testReporter = {
                printPositiveCharacter: (index: number, testResult: TestResult) => {
                    this.print
                        .clearCurrentLine()
                        .printTypingsWithoutTestName(testResult.targetFile.formatName);
                },
                printNegativeCharacter: (index: number, testResult: TestResult) => {
                }
            }
        }

        public filterTargetFiles(files: File[]): File[] {
            return files.filter((file) => {
                return fs.existsSync(file.filePathWithName + '.tscparams');
            });
        }

        public runTest(targetFile: File, callback: (result: TestResult) => void): void {
            this.print.clearCurrentLine().out(targetFile.formatName);
            new Test(this, targetFile, {
                tscVersion: this.options.tscVersion,
                useTscParams: false,
                checkNoImplicitAny: true
            }).run(result=> {
                this.testResults.push(result);
                callback(result);
            });
        }

        public finish(suiteCallback: (suite: ITestSuite)=>void) {
            this.print.clearCurrentLine();
            suiteCallback(this);
        }

        public get ngTests(): TestResult[] {
            // Do not show ng test results
            return [];
        }
    }
}

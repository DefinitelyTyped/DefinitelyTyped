/// <reference path="../../runner.ts" />
/// <reference path="../util.ts" />

module DT {
    /////////////////////////////////
    // .d.ts syntax inspection
    /////////////////////////////////
    export class SyntaxChecking extends TestSuiteBase {

        constructor(options: ITestRunnerOptions) {
            super(options, "Syntax checking", "Syntax error");
        }

        public filterTargetFiles(files: File[]): File[] {
            return files.filter((file) => {
                return DT.endsWith(file.formatName.toUpperCase(), '.D.TS');
            });
        }
    }
}

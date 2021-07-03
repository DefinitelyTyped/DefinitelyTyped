// Type definitions for jasmine-node v1.14.5
// Project: https://github.com/mhevery/jasmine-node
// Definitions by: Sven Reglitzki <https://github.com/svi3c>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import "jasmine";

declare global {
    function it(expectation: string, assertion: (done: (err?: any) => void) => void, timeout?: number): void;

    namespace jasmine {
        interface Env {
            defaultTimeoutInterval: number;
        }

        interface ExecuteSpecsOptions {
            specFolders: string[];
            onComplete?: (runner: Runner) => void;
            isVerbose?: boolean;
            showColors?: boolean;
            teamcity?: string | boolean;
            useRequireJs?: boolean;
            regExpSpec: RegExp;
            junitreport?: {
                report: boolean;
                savePath: string;
                useDotNotation: boolean;
                consolidate: boolean;
            };
            includeStackTrace?: boolean;
            growl?: boolean;
        }

        interface JasmineNode {
            executeSpecsInFolder(options: ExecuteSpecsOptions): void;
            loadHelpersInFolder(path: string, pattern: RegExp): void;
        }
    }
}

declare const jasmine: jasmine.JasmineNode;
export = jasmine;

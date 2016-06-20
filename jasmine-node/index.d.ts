// Type definitions for jasmine-node v1.14.5
// Project: https://github.com/mhevery/jasmine-node
// Definitions by: Sven Reglitzki <https://github.com/svi3c/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

///<reference types="jasmine"/>

declare function it(expectation:string, assertion:(done:(err?:any) => void) => void, timeout?:number):void;

interface ExecuteSpecsOptions {
    specFolders: string[],
    onComplete?: (runner:jasmine.Runner) => void,
    isVerbose?: boolean,
    showColors?: boolean,
    teamcity?: string | boolean,
    useRequireJs?: boolean,
    regExpSpec: RegExp,
    junitreport?: {
        report: boolean,
        savePath: string,
        useDotNotation: boolean,
        consolidate: boolean
    },
    includeStackTrace?: boolean,
    growl?: boolean
}

interface JasmineNode {
    executeSpecsInFolder(options:ExecuteSpecsOptions): void;
    loadHelpersInFolder(path:string, pattern:RegExp): void;
}

declare var jasmine:JasmineNode;

export = jasmine;
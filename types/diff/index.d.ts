// Type definitions for diff 3.2
// Project: https://github.com/kpdecker/jsdiff
// Definitions by: vvakame <https://github.com/vvakame/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

export = JsDiff;
export as namespace JsDiff;

declare namespace JsDiff {
    interface IDiffResult {
        value: string;
        count?: number;
        added?: boolean;
        removed?: boolean;
    }

    interface IBestPath {
        newPos: number;
        componenets: IDiffResult[];
    }

    interface IHunk {
        oldStart: number;
        oldLines: number;
        newStart: number;
        newLines: number;
        lines: string[];
    }

    interface IUniDiff {
        oldFileName: string;
        newFileName: string;
        oldHeader: string;
        newHeader: string;
        hunks: IHunk[];
    }

    class Diff {
        ignoreWhitespace: boolean;

        constructor(ignoreWhitespace?: boolean);

        diff(oldString: string, newString: string): IDiffResult[];

        pushComponent(components: IDiffResult[], value: string, added: boolean, removed: boolean): void;

        extractCommon(basePath: IBestPath, newString: string, oldString: string, diagonalPath: number): number;

        equals(left: string, right: string): boolean;

        join(left: string, right: string): string;

        tokenize(value: string): any; // return types are string or string[]
    }

    function diffChars(oldStr: string, newStr: string): IDiffResult[];

    function diffWords(oldStr: string, newStr: string): IDiffResult[];

    function diffWordsWithSpace(oldStr: string, newStr: string): IDiffResult[];

    function diffJson(oldObj: object, newObj: object): IDiffResult[];

    function diffLines(oldStr: string, newStr: string, options?: {
        ignoreWhitespace?: boolean,
        newlineIsToken?: boolean,
    }): IDiffResult[];

    function diffCss(oldStr: string, newStr: string): IDiffResult[];

    function createPatch(fileName: string, oldStr: string, newStr: string, oldHeader: string, newHeader: string, options?: {context: number}): string;

    function createTwoFilesPatch(oldFileName: string, newFileName: string, oldStr: string, newStr: string, oldHeader: string, newHeader: string, options?: {context: number}): string;

    function structuredPatch(oldFileName: string, newFileName: string, oldStr: string, newStr: string, oldHeader: string, newHeader: string, options?: {context: number}): IUniDiff;

    function applyPatch(oldStr: string, uniDiff: string | IUniDiff | IUniDiff[]): string;

    function applyPatches(uniDiff: IUniDiff[], options: {
        loadFile(index: number, callback: (err: Error, data: string) => void): void,
        patched(index: number, content: string): void,
        complete(err?: Error): void
    }): void;

    function parsePatch(diffStr: string, options?: {strict: boolean}): IUniDiff[];

    function convertChangesToXML(changes: IDiffResult[]): string;

    function convertChangesToDMP(changes: IDiffResult[]): Array<{0: number; 1: string; }>;
}

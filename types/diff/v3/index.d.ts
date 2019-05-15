// Type definitions for diff 3.5
// Project: https://github.com/kpdecker/jsdiff
// Definitions by: vvakame <https://github.com/vvakame>
//                 szdc <https://github.com/szdc>
//                 moc-yuto <https://github.com/moc-yuto>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

export = JsDiff;
export as namespace JsDiff;

declare namespace JsDiff {
    interface IOptions {
        ignoreCase: boolean;
    }

    interface ILinesOptions extends IOptions {
        ignoreWhitespace?: boolean;
        newlineIsToken?: boolean;
    }

    interface IArrayOptions {
        comparator?: (left: any, right: any) => boolean;
    }

    interface IDiffResult {
        value: string;
        count?: number;
        added?: boolean;
        removed?: boolean;
    }

    interface IDiffArraysResult<T> {
        value: T[];
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
        index: string;
        hunks: IHunk[];
    }

    class Diff {
        diff(oldString: string, newString: string, options?: IOptions): IDiffResult[];

        pushComponent(components: IDiffResult[], added: boolean, removed: boolean): void;

        extractCommon(basePath: IBestPath, newString: string, oldString: string, diagonalPath: number): number;

        equals(left: string, right: string): boolean;

        removeEmpty(array: any[]): any[];

        castInput(value: any): any;

        join(chars: string[]): string;

        tokenize(value: string): any; // return types are string or string[]
    }

    function diffChars(oldStr: string, newStr: string, options?: IOptions): IDiffResult[];

    function diffWords(oldStr: string, newStr: string, options?: IOptions): IDiffResult[];

    function diffWordsWithSpace(oldStr: string, newStr: string, options?: IOptions): IDiffResult[];

    function diffJson(oldObj: object, newObj: object, options?: IOptions): IDiffResult[];

    function diffLines(oldStr: string, newStr: string, options?: ILinesOptions): IDiffResult[];

    function diffCss(oldStr: string, newStr: string, options?: IOptions): IDiffResult[];

    function diffTrimmedLines(oldStr: string, newStr: string, options?: ILinesOptions): IDiffResult[];

    function diffSentences(oldStr: string, newStr: string, options?: IOptions): IDiffResult[];

    function diffArrays<T>(oldArr: T[], newArr: T[], options?: IArrayOptions): Array<IDiffArraysResult<T>>;

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

    function merge(mine: string, theirs: string, base: string): IUniDiff;

    function canonicalize(obj: any, stack: any[], replacementStack: any[]): any;
}

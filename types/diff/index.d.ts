// Type definitions for diff 5.0
// Project: https://github.com/kpdecker/jsdiff
// Definitions by: vvakame <https://github.com/vvakame>
//                 szdc <https://github.com/szdc>
//                 moc-yuto <https://github.com/moc-yuto>
//                 BendingBender <https://github.com/BendingBender>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace Diff;

export type Callback = (err: undefined, value?: Change[]) => void;

export interface CallbackOptions {
    /**
     * Callback to call with the result instead of returning the result directly.
     */
    callback: Callback;
}

export interface BaseOptions {
    /**
     * `true` to ignore casing difference.
     * @default false
     */
    ignoreCase?: boolean | undefined;
}

export interface WordsOptions extends BaseOptions {
    /**
     * `true` to ignore leading and trailing whitespace. This is the same as `diffWords()`.
     */
    ignoreWhitespace?: boolean | undefined;
}

export interface LinesOptions extends BaseOptions {
    /**
     * `true` to ignore leading and trailing whitespace. This is the same as `diffTrimmedLines()`.
     */
    ignoreWhitespace?: boolean | undefined;

    /**
     * `true` to treat newline characters as separate tokens. This allows for changes to the newline structure
     * to occur independently of the line content and to be treated as such. In general this is the more
     * human friendly form of `diffLines()` and `diffLines()` is better suited for patches and other computer
     * friendly output.
     */
    newlineIsToken?: boolean | undefined;
}

export interface JsonOptions extends LinesOptions {
    /**
     * Replacer used to stringify the properties of the passed objects.
     */
    stringifyReplacer?: ((key: string, value: any) => any) | undefined;

    /**
     * The value to use when `undefined` values in the passed objects are encountered during stringification.
     * Will only be used if `stringifyReplacer` option wasn't specified.
     * @default undefined
     */
    undefinedReplacement?: any;
}

export interface ArrayOptions<TLeft, TRight> extends BaseOptions {
    /**
     * Comparator for custom equality checks.
     */
    comparator?: ((left: TLeft, right: TRight) => boolean) | undefined;
}

export interface PatchOptions extends LinesOptions {
    /**
     * Describes how many lines of context should be included.
     * @default 4
     */
    context?: number | undefined;
}

export interface ApplyPatchOptions {
    /**
     * Number of lines that are allowed to differ before rejecting a patch.
     * @default 0
     */
    fuzzFactor?: number | undefined;

    /**
     * Callback used to compare to given lines to determine if they should be considered equal when patching.
     * Should return `false` if the lines should be rejected.
     *
     * @default strict equality
     */
    compareLine?: ((
        lineNumber: number,
        line: string,
        operation: '-' | ' ',
        patchContent: string
    ) => boolean) | undefined;
}

export interface ApplyPatchesOptions extends ApplyPatchOptions {
    loadFile(index: ParsedDiff, callback: (err: any, data: string) => void): void;
    patched(index: ParsedDiff, content: string, callback: (err: any) => void): void;
    complete(err: any): void;
}

export interface Change {
    count?: number | undefined;
    /**
     * Text content.
     */
    value: string;
    /**
     * `true` if the value was inserted into the new string.
     */
    added?: boolean | undefined;
    /**
     * `true` if the value was removed from the old string.
     */
    removed?: boolean | undefined;
}

export interface ArrayChange<T> {
    value: T[];
    count?: number | undefined;
    added?: boolean | undefined;
    removed?: boolean | undefined;
}

export interface ParsedDiff {
    index?: string | undefined;
    oldFileName?: string | undefined;
    newFileName?: string | undefined;
    oldHeader?: string | undefined;
    newHeader?: string | undefined;
    hunks: Hunk[];
}

export interface Hunk {
    oldStart: number;
    oldLines: number;
    newStart: number;
    newLines: number;
    lines: string[];
    linedelimiters: string[];
}

export interface BestPath {
    newPos: number;
    componenets: Change[];
}

export class Diff {
    diff(
        oldString: string,
        newString: string,
        options?: Callback | (ArrayOptions<any, any> & Partial<CallbackOptions>)
    ): Change[];

    pushComponent(components: Change[], added: boolean, removed: boolean): void;

    extractCommon(
        basePath: BestPath,
        newString: string,
        oldString: string,
        diagonalPath: number
    ): number;

    equals(left: any, right: any): boolean;

    removeEmpty(array: any[]): any[];

    castInput(value: any): any;

    join(chars: string[]): string;

    tokenize(value: string): any; // return types are string or string[]
}

/**
 * Diffs two blocks of text, comparing character by character.
 *
 * @returns A list of change objects.
 */
export function diffChars(oldStr: string, newStr: string, options?: BaseOptions): Change[];
export function diffChars(
    oldStr: string,
    newStr: string,
    options: Callback | (BaseOptions & CallbackOptions)
): void;

/**
 * Diffs two blocks of text, comparing word by word, ignoring whitespace.
 *
 * @returns A list of change objects.
 */
export function diffWords(oldStr: string, newStr: string, options?: WordsOptions): Change[];
export function diffWords(
    oldStr: string,
    newStr: string,
    options: Callback | (WordsOptions & CallbackOptions)
): void;

/**
 * Diffs two blocks of text, comparing word by word, treating whitespace as significant.
 *
 * @returns A list of change objects.
 */
export function diffWordsWithSpace(
    oldStr: string,
    newStr: string,
    options?: WordsOptions
): Change[];
export function diffWordsWithSpace(
    oldStr: string,
    newStr: string,
    options: Callback | (WordsOptions & CallbackOptions)
): void;

/**
 * Diffs two blocks of text, comparing line by line.
 *
 * @returns A list of change objects.
 */
export function diffLines(oldStr: string, newStr: string, options?: LinesOptions): Change[];
export function diffLines(
    oldStr: string,
    newStr: string,
    options: Callback | (LinesOptions & CallbackOptions)
): void;

/**
 * Diffs two blocks of text, comparing line by line, ignoring leading and trailing whitespace.
 *
 * @returns A list of change objects.
 */
export function diffTrimmedLines(oldStr: string, newStr: string, options?: LinesOptions): Change[];
export function diffTrimmedLines(
    oldStr: string,
    newStr: string,
    options: Callback | (LinesOptions & CallbackOptions)
): void;

/**
 * Diffs two blocks of text, comparing sentence by sentence.
 *
 * @returns A list of change objects.
 */
export function diffSentences(oldStr: string, newStr: string, options?: BaseOptions): Change[];
export function diffSentences(
    oldStr: string,
    newStr: string,
    options: Callback | (BaseOptions & CallbackOptions)
): void;

/**
 * Diffs two blocks of text, comparing CSS tokens.
 *
 * @returns A list of change objects.
 */
export function diffCss(oldStr: string, newStr: string, options?: BaseOptions): Change[];
export function diffCss(
    oldStr: string,
    newStr: string,
    options: Callback | (BaseOptions & CallbackOptions)
): void;

/**
 * Diffs two JSON objects, comparing the fields defined on each. The order of fields, etc does not matter
 * in this comparison.
 *
 * @returns A list of change objects.
 */
export function diffJson(
    oldObj: string | object,
    newObj: string | object,
    options?: JsonOptions
): Change[];
export function diffJson(
    oldObj: string | object,
    newObj: string | object,
    options: Callback | (JsonOptions & CallbackOptions)
): void;

/**
 * Diffs two arrays, comparing each item for strict equality (`===`).
 *
 * @returns A list of change objects.
 */
export function diffArrays<TOld, TNew>(
    oldArr: TOld[],
    newArr: TNew[],
    options?: ArrayOptions<TOld, TNew>
): Array<ArrayChange<TOld | TNew>>;

/**
 * Creates a unified diff patch.
 *
 * @param oldFileName String to be output in the filename section of the patch for the removals.
 * @param newFileName String to be output in the filename section of the patch for the additions.
 * @param oldStr Original string value.
 * @param newStr New string value.
 * @param oldHeader Additional information to include in the old file header.
 * @param newHeader Additional information to include in the new file header.
 */
export function createTwoFilesPatch(
    oldFileName: string,
    newFileName: string,
    oldStr: string,
    newStr: string,
    oldHeader?: string,
    newHeader?: string,
    options?: PatchOptions
): string;

/**
 * Creates a unified diff patch.
 * Just like `createTwoFilesPatch()`, but with `oldFileName` being equal to `newFileName`.
 *
 * @param fileName String to be output in the filename section.
 * @param oldStr Original string value.
 * @param newStr New string value.
 * @param oldHeader Additional information to include in the old file header.
 * @param newHeader Additional information to include in the new file header.
 */
export function createPatch(
    fileName: string,
    oldStr: string,
    newStr: string,
    oldHeader?: string,
    newHeader?: string,
    options?: PatchOptions
): string;

/**
 * This method is similar to `createTwoFilesPatch()`, but returns a data structure suitable for further processing.
 * Parameters are the same as `createTwoFilesPatch()`.
 *
 * @param oldFileName String to be output in the `oldFileName` hunk property.
 * @param newFileName String to be output in the `newFileName` hunk property.
 * @param oldStr Original string value.
 * @param newStr New string value.
 * @param oldHeader Additional information to include in the `oldHeader` hunk property.
 * @param newHeader Additional information to include in the `newHeader` hunk property.
 * @returns An object with an array of hunk objects.
 */
export function structuredPatch(
    oldFileName: string,
    newFileName: string,
    oldStr: string,
    newStr: string,
    oldHeader?: string,
    newHeader?: string,
    options?: PatchOptions
): ParsedDiff;

/**
 * Applies a unified diff patch.
 *
 * @param patch May be a string diff or the output from the `parsePatch()` or `structuredPatch()` methods.
 * @returns A string containing new version of provided data.
 */
export function applyPatch(
    source: string,
    patch: string | ParsedDiff | [ParsedDiff],
    options?: ApplyPatchOptions
): string;

/**
 * Applies one or more patches.
 * This method will iterate over the contents of the patch and apply to data provided through callbacks.
 *
 * The general flow for each patch index is:
 *
 * 1. `options.loadFile(index, callback)` is called. The caller should then load the contents of the file
 * and then pass that to the `callback(err, data)` callback. Passing an `err` will terminate further patch execution.
 * 2. `options.patched(index, content, callback)` is called once the patch has been applied. `content` will be
 * the return value from `applyPatch()`. When it's ready, the caller should call `callback(err)` callback.
 * Passing an `err` will terminate further patch execution.
 * 3. Once all patches have been applied or an error occurs, the `options.complete(err)` callback is made.
 */
export function applyPatches(patch: string | ParsedDiff[], options: ApplyPatchesOptions): void;

/**
 * Parses a patch into structured data.
 *
 * @returns A JSON object representation of the a patch, suitable for use with the `applyPatch()` method.
 */
export function parsePatch(diffStr: string, options?: { strict?: boolean | undefined }): ParsedDiff[];

/**
 * Converts a list of changes to a serialized XML format.
 */
export function convertChangesToXML(changes: Change[]): string;

/**
 * Converts a list of changes to [DMP](http://code.google.com/p/google-diff-match-patch/wiki/API) format.
 */
export function convertChangesToDMP(changes: Change[]): Array<[1 | 0 | -1, string]>;

export function merge(mine: string, theirs: string, base: string): ParsedDiff;

export function canonicalize(obj: any, stack: any[], replacementStack: any[]): any;

export as namespace Diff;

export type Callback<T> = (value: T) => void;

export interface CallbackOptions<T> {
    /**
     * if provided, the diff will be computed in async mode to avoid blocking the event loop while the diff is calculated. The value of the `callback` option should be a function and will be passed the computed diff or patch as its first argument.
     */
    callback: Callback<T>;
}

export interface BaseOptions {
    /**
     * `true` to ignore casing difference.
     * @default false
     */
    ignoreCase?: boolean | undefined;

    /**
     * a number specifying the maximum edit distance to consider between the old and new texts. If the edit distance is higher than this, jsdiff will return `undefined` instead of a diff. You can use this to limit the computational cost of diffing large, very different texts by giving up early if the cost will be huge. Works for functions that return change objects and also for `structuredPatch`, but not other patch-generation functions.
     */
    maxEditLength?: number | undefined;

    /**
     * if `true`, the array of change objects returned will contain one change object per token (e.g. one per line if calling `diffLines`), instead of runs of consecutive tokens that are all added / all removed / all conserved being combined into a single change object.
     */
    oneChangePerToken?: boolean | undefined;
}

export interface WordsOptions extends BaseOptions {
    /**
     * `true` to ignore leading and trailing whitespace. This is the same as `diffWords()`.
     */
    ignoreWhitespace?: boolean | undefined;

    /**
     * An optional [`Intl.Segmenter`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter) object (which must have a `granularity` of `'word'`) for `diffWords` to use to split the text into words.
     *
     * By default, `diffWords` does not use an `Intl.Segmenter`, just some regexes for splitting text into words. This will tend to give worse results than `Intl.Segmenter` would, but ensures the results are consistent across environments; `Intl.Segmenter` behaviour is only loosely specced and the implementations in browsers could in principle change dramatically in future. If you want to use `diffWords` with an `Intl.Segmenter` but ensure it behaves the same whatever environment you run it in, use an `Intl.Segmenter` polyfill instead of the JavaScript engine's native `Intl.Segmenter` implementation.
     *
     * Using an `Intl.Segmenter` should allow better word-level diffing of non-English text than the default behaviour. For instance, `Intl.Segmenter`s can generally identify via built-in dictionaries which sequences of adjacent Chinese characters form words, allowing word-level diffing of Chinese. By specifying a language when instantiating the segmenter (e.g. `new Intl.Segmenter('sv', {granularity: 'word'})`) you can also support language-specific rules, like treating Swedish's colon separated contractions (like *k:a* for *kyrka*) as single words; by default this would be seen as two words separated by a colon.
     */
    intlSegmenter?: Intl.Segmenter | undefined;
}

export interface LinesOptions extends BaseOptions {
    /**
     * `true` to ignore a missing newline character at the end of the last line when comparing it to other lines. (By default, the line `'b\n'` in text `'a\nb\nc'` is not considered equal to the line `'b'` in text `'a\nb'`; this option makes them be considered equal.) Ignored if `ignoreWhitespace` or `newlineIsToken` are also true.
     */
    ignoreNewlineAtEof?: boolean | undefined;

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
     * If `true`, and if the file to be patched consistently uses different line endings to the patch (i.e. either the file always uses Unix line endings while the patch uses Windows ones, or vice versa), then `applyPatch` will behave as if the line endings in the patch were the same as those in the source file. (If `false`, the patch will usually fail to apply in such circumstances since lines deleted in the patch won't be considered to match those in the source file.) Defaults to `true`.
     */
    autoConvertLineEndings?: boolean | undefined;

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
    compareLine?:
        | ((
            lineNumber: number,
            line: string,
            operation: "-" | " ",
            patchContent: string,
        ) => boolean)
        | undefined;
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
     * true if the value was inserted into the new string, otherwise false
     */
    added: boolean;
    /**
     * true if the value was removed from the old string, otherwise false
     */
    removed: boolean;
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
}

export interface BestPath {
    newPos: number;
    components: Change[];
}

export class Diff {
    diff(
        oldString: string,
        newString: string,
        options?: Callback<Change[]> | (ArrayOptions<any, any> & Partial<CallbackOptions<Change[]>>),
    ): Change[];

    pushComponent(components: Change[], added: boolean, removed: boolean): void;

    extractCommon(
        basePath: BestPath,
        newString: string,
        oldString: string,
        diagonalPath: number,
    ): number;

    equals(left: any, right: any, options: any): boolean;

    removeEmpty(array: any[]): any[];

    castInput(value: any, options: any): any;

    join(tokens: string[]): string;

    tokenize(value: string, options: any): any; // return types are string or string[]

    postProcess(changes: Change[], options: any): Change[];
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
    options: Callback<Change[]> | (BaseOptions & CallbackOptions<Change[]>),
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
    options: Callback<Change[]> | (WordsOptions & CallbackOptions<Change[]>),
): void;

/**
 * Diffs two blocks of text, comparing word by word, treating whitespace as significant.
 *
 * @returns A list of change objects.
 */
export function diffWordsWithSpace(
    oldStr: string,
    newStr: string,
    options?: WordsOptions,
): Change[];
export function diffWordsWithSpace(
    oldStr: string,
    newStr: string,
    options: Callback<Change[]> | (WordsOptions & CallbackOptions<Change[]>),
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
    options: Callback<Change[]> | (LinesOptions & CallbackOptions<Change[]>),
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
    options: Callback<Change[]> | (LinesOptions & CallbackOptions<Change[]>),
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
    options: Callback<Change[]> | (BaseOptions & CallbackOptions<Change[]>),
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
    options: Callback<Change[]> | (BaseOptions & CallbackOptions<Change[]>),
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
    options?: JsonOptions,
): Change[];
export function diffJson(
    oldObj: string | object,
    newObj: string | object,
    options: Callback<Change[]> | (JsonOptions & CallbackOptions<Change[]>),
): void;

/**
 * Diffs two arrays, comparing each item for strict equality (`===`).
 *
 * @returns A list of change objects.
 */
export function diffArrays<TOld, TNew>(
    oldArr: TOld[],
    newArr: TNew[],
    options?: ArrayOptions<TOld, TNew>,
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
    options?: PatchOptions,
): string;
export function createTwoFilesPatch(
    oldFileName: string,
    newFileName: string,
    oldStr: string,
    newStr: string,
    oldHeader?: string,
    newHeader?: string,
    options?: PatchOptions & CallbackOptions<string>,
): void;

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
    options?: PatchOptions,
): string;
export function createPatch(
    fileName: string,
    oldStr: string,
    newStr: string,
    oldHeader?: string,
    newHeader?: string,
    options?: PatchOptions & CallbackOptions<string>,
): void;

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
    options?: PatchOptions,
): ParsedDiff;
export function structuredPatch(
    oldFileName: string,
    newFileName: string,
    oldStr: string,
    newStr: string,
    oldHeader?: string,
    newHeader?: string,
    options?: PatchOptions & CallbackOptions<ParsedDiff>,
): void;

/**
 * Applies a unified diff patch.
 *
 * @param patch May be a string diff or the output from the `parsePatch()` or `structuredPatch()` methods.
 * @returns A string containing new version of provided data. false when failed
 */
export function applyPatch(
    source: string,
    patch: string | ParsedDiff | [ParsedDiff],
    options?: ApplyPatchOptions,
): string | false;

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
export function parsePatch(uniDiff: string): ParsedDiff[];

/**
 * Converts a list of changes to a serialized XML format.
 */
export function convertChangesToXML(changes: Change[]): string;

/**
 * Converts a list of changes to [DMP](http://code.google.com/p/google-diff-match-patch/wiki/API) format.
 */
export function convertChangesToDMP(changes: Change[]): Array<[1 | 0 | -1, string]>;

export function merge(mine: string, theirs: string, base: string): ParsedDiff;

/**
 * Returns a new structured patch which when applied will undo the original `patch`.
 * `patch` may be either a single structured patch object (as returned by `structuredPatch`) or an array of them (as returned by `parsePatch`).
 */
export function reversePatch(patch: ParsedDiff | ParsedDiff[]): ParsedDiff;

export function canonicalize(obj: any, stack: any[], replacementStack: any[]): any;

/**
 * creates a unified diff patch.
 * patch may be either a single structured patch object (as returned by structuredPatch)
 * or an array of them (as returned by parsePatch).
 */
export function formatPatch(patch: ParsedDiff | ParsedDiff[]): string;

/// <reference types="node" />

import * as MarkdownIt from "markdown-it";
import * as markdownlint from "markdownlint";

export const newLineRe: RegExp;

export const startsWithPipeRe: RegExp;

/**
 * Regular expression for matching common front matter (YAML and TOML)
 */
export const frontMatterRe: RegExp;

/**
 * Regular expression for matching the start of inline disable/enable comments
 */
export const inlineCommentStartRe: RegExp;

/**
 * Regular expressions for range matching
 */
export const listItemMarkerRe: RegExp;

export const orderedListItemMarkerRe: RegExp;

/**
 * Regular expression for blockquote prefixes
 */
export const blockquotePrefixRe: RegExp;

/**
 * Regular expression for link reference definitions
 */
export const linkReferenceDefinitionRe: RegExp;

/**
 * Regular expression for identifying an HTML entity at the end of a line
 */
export const endOfLineHtmlEntityRe: RegExp;

/**
 * Regular expression for identifying a GitHub emoji code at the end of a line
 */
export const endOfLineGemojiCodeRe: RegExp;

/**
 * All punctuation characters (normal and full-width)
 */
export const allPunctuation: string;

/**
 * All punctuation characters without question mark (normal and full-width)
 */
export const allPunctuationNoQuestion: string;

/**
 * @returns Whether obj is a number.
 */
export function isNumber(obj: unknown): obj is number;

/**
 * @returns Whether obj is a string.
 */
export function isString(obj: unknown): obj is string;

/**
 * @returns Whether obj is a string.
 */
export function isEmptyString(str: string): str is "";

/**
 * @returns Whether obj is an Object.
 */
export function isObject(obj: unknown): obj is object;

/**
 * @returns Whether the input is a URL.
 */
export function isUrl(obj: unknown): obj is URL;

/**
 * Clones the input if it is an Array.
 *
 * @param arr Object of unknown type.
 * @returns Clone of obj iff obj is an Array.
 */
export function cloneIfArray<T>(arr: T): T;

/**
 * Clones the input if it is a URL.
 *
 * @param url Object of unknown type.
 * @returns Clone of obj iff obj is a URL.
 */
export function cloneIfUrl<T>(url: T): T;

/**
 * @returns Whether the input line is blank (contains nothing, whitespace, or
 * comments (unclosed start/end comments allowed).
 */
export function isBlankLine(line: string): boolean;

/**
 * Compare function for Array.prototype.sort for ascending order of numbers.
 *
 * @param a First number.
 * @param b Second number.
 * @returns Positive value if a>b, negative value if b<a, 0 otherwise.
 */
export function numericSortAscending(a: number, b: number): number;

/**
 * @returns true iff the sorted array contains the specified element.
 */
export function includesSorted<T>(array: readonly T[], element: T): boolean;

export function clearHtmlCommentText(text: string): string;

/**
 * Escapes a string for use in a RegExp
 */
export function escapeForRegExp(str: string): string;

/**
 * @returns The string representation of a fence markup character.
 */
export function fencedCodeBlockStyleFor(markup: string): string;

/**
 * Return the string representation of a emphasis or strong markup character.
 *
 * @param markup Emphasis or strong string.
 * @returns String representation.
 */
export function emphasisOrStrongStyleFor(markup: string): string;

/**
 * @returns the number of characters of indent for a token.
 */
export function indentFor(token: MarkdownIt.Token): number;

/**
 * Returns the heading style for a heading token
 */
export function headingStyleFor(token: MarkdownIt.Token): string;

/**
 * Return the string representation of an unordered list marker.
 *
 * @returns String representation.
 */
export function unorderedListStyleFor(token: MarkdownIt.Token): string;

export type FilterTokensHandler = (token: MarkdownIt.Token) => void;

/**
 * Calls the provided function for each matching token.
 */
export function filterTokens(params: markdownlint.RuleParams, type: string, handler: FilterTokensHandler): void;

export type LineMetadata = [
    line: string,
    lineIndex: number,
    inCode: boolean,
    onFence: boolean,
    inTable: boolean,
    inItem: boolean,
    inBreak: boolean,
];

export function getLineMetadata(params: markdownlint.RuleParams): LineMetadata[];

export type ForEachLineHandler = (metadata: LineMetadata) => void;

/**
 * Calls the provided function for each line.
 */
export function forEachLine(lineMetadata: LineMetadata[], handler: ForEachLineHandler): void;

export interface FlattenedList {
    unordered: boolean;
    parentsUnordered: boolean;
    open: MarkdownIt.Token;
    indent: number;
    parentIndent: number;
    items: MarkdownIt.Token[];
    nesting: number;
    lastLineIndex: number;
    insert: number;
}

/**
 * @returns (nested) lists as a flat array (in order)
 */
export function flattenLists(tokens: MarkdownIt.Token[]): FlattenedList[];

export type ForEachHeadingHandler = (heading: MarkdownIt.Token, content: string, token: MarkdownIt.Token) => void;

/**
 * Calls the provided function for each heading's content
 */
export function forEachHeading(params: markdownlint.RuleParams, handler: ForEachHeadingHandler): void;

export type InlineCodeSpanHandler = (code: string, lineIndex: number, columnIndex: number, ticks: number) => void;

/**
 * Calls the provided function for each inline code span's content.
 *
 * @param input Markdown content.
 * @param handler Callback function taking (code, lineIndex,
 * columnIndex, ticks).
 */
export function forEachInlineCodeSpan(input: string, handler: InlineCodeSpanHandler): void;

/**
 * Adds ellipsis to the left/right/middle of the specified text.
 *
 * @param text Text to ellipsify.
 * @param start True iff the start of the text is important.
 * @param end True iff the end of the text is important.
 * @returns Ellipsified text.
 */
export function ellipsify(text: string, start?: boolean, end?: boolean): string;

/**
 * Adds a generic error object via the onError callback.
 *
 * @param onError RuleOnError instance.
 * @param lineNumber Line number.
 * @param detail Error details.
 * @param context Error context.
 * @param range Column and length of error.
 * @param fixInfo RuleOnErrorFixInfo instance.
 */
export function addError(
    onError: markdownlint.RuleOnError,
    lineNumber: number,
    detail?: string,
    context?: string,
    range?: number[],
    fixInfo?: markdownlint.RuleOnErrorFixInfo,
): void;

/**
 * Adds an error object with details conditionally via the onError callback
 */
export function addErrorDetailIf(
    onError: markdownlint.RuleOnError,
    lineNumber: number,
    expected: string,
    actual: string,
    detail: string,
    context: string,
    range: number[],
    fixInfo: markdownlint.RuleOnErrorFixInfo,
): void;

/**
 * Adds an error object with context via the onError callback
 */
export function addErrorContext(
    onError: markdownlint.RuleOnError,
    lineNumber: number,
    context: string,
    left: number,
    right: number,
    range: number[],
    fixInfo: markdownlint.RuleOnErrorFixInfo,
): void;

/**
 * Returns an array of code block and span content ranges.
 *
 * @param params RuleParams instance.
 * @param lineMetadata Line metadata object.
 * @returns Array of ranges (lineIndex, columnIndex, length).
 */
export function codeBlockAndSpanRanges(params: markdownlint.RuleParams, lineMetadata: LineMetadata): number[][];

/**
 * Determines whether the specified range is within another range.
 *
 * @param ranges Array of ranges (line, index, length).
 * @param lineIndex Line index to check.
 * @param index Index to check.
 * @param length Length to check.
 * @returns True iff the specified range is within.
 */
export function withinAnyRange(ranges: number[][], lineIndex: number, index: number, length: number): boolean;

/**
 * @returns a range object for a line by applying a RegExp
 */
export function rangeFromRegExp(line: string, regexp: RegExp): [number, number];

/**
 * @returns Whether the front matter includes a title
 */
export function frontMatterHasTitle(frontMatterLines: string[], frontMatterTitlePattern?: string): boolean;

export interface ReferenceLinkImageData {
    references: Map<string, number>;
    shortcuts: Map<string, number>;
    definitions: Map<string, number>;
    duplicateDefinitions: Array<[string, number]>;
    definitionLineIndices: number[];
}

/**
 * Returns an object with information about reference links and images.
 */
export function getReferenceLinkImageData(params: markdownlint.RuleParams): ReferenceLinkImageData;

/**
 * Gets the most common line ending, falling back to the platform default.
 *
 * @param input Markdown content to analyze.
 * @param os Node.js "os" module.
 * @returns Preferred line ending.
 */
export function getPreferredLineEnding(input: string, os?: typeof import("node:os")): string;

/**
 * Normalizes the fields of a RuleOnErrorFixInfo instance.
 *
 * @param fixInfo RuleOnErrorFixInfo instance.
 * @param lineNumber Line number.
 * @returns Normalized RuleOnErrorFixInfo instance.
 */
export function normalizeFixInfo(
    fixInfo: markdownlint.RuleOnErrorFixInfo,
    lineNumber?: number,
): markdownlint.RuleOnErrorFixInfo;

/**
 * Fixes the specified error on a line of Markdown content.
 *
 * @param line Line of Markdown content.
 * @param fixInfo RuleOnErrorFixInfo instance.
 * @param lineEnding Line ending to use.
 * @returns Fixed content.
 */
export function applyFix(line: string, fixInfo: markdownlint.RuleOnErrorFixInfo, lineEnding: string): string | null;

/**
 * Applies as many fixes as possible to Markdown content.
 *
 * @param input Lines of Markdown content.
 * @param errors RuleOnErrorInfo instances.
 * @returns Corrected content.
 */
export function applyFixes(input: string, errors: markdownlint.RuleOnErrorInfo[]): string;

/**
 * Expands a path with a tilde to an absolute path.
 *
 * @param file Path that may begin with a tilde.
 * @param os Node.js "os" module.
 * @returns Absolute path (or original path).
 */
export function expandTildePath(file: string, os: typeof import("node:os")): string;

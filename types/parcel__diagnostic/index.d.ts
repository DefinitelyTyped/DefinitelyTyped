// Type definitions for @parcel/diagnostic 2.0
// Project: https://github.com/parcel-bundler/parcel#readme
// Definitions by: Arjun Barrett <https://github.com/101arrowz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.7
/// <reference types="node" />

// All type literals are intentional to encourage exact types
// tslint:disable:interface-over-type-literal

/**
 * Used to specify what section of the code should be highlighted
 */
export type DiagnosticCodeHighlightLocation = {
    line: number;
    column: number;
};

/**
 * The highlighted code in an error
 */
export type DiagnosticCodeHighlight = {
    start: DiagnosticCodeHighlightLocation;
    end: DiagnosticCodeHighlightLocation;
    message?: string;
};
/**
 * A frame showcasing errors in code
 */
export type DiagnosticCodeFrame = {
    /**
     * The code that caused the error.
     * If not present, the code is read from the filesystem.
     */
    code?: string;
    codeHighlights: DiagnosticCodeHighlight | DiagnosticCodeHighlight[];
};

/**
 * A style-agnostic way of emitting errors, warnings, and info.
 * The reporters are responsible for rendering the message, code frames, etc.
 */
export type Diagnostic = {
    message: string;
    /**
     * Name of the plugin or file that threw this error
     */
    origin?: string;
    stack?: string;
    name?: string;
    /**
     * The path to the file that contained the error.
     * Either absolute or relative to the project root.
     */
    filePath?: string;
    language?: string;
    codeFrame?: DiagnosticCodeFrame;
    /**
     * Hints that may help resolve issues faster
     */
    hints?: string[];
    skipFormatting?: boolean;
};

/**
 * A (near) standard JavaScript error
 */
export type PrintableError = Error & {
    fileName?: string;
    filePath?: string;
    codeFrame?: string;
    highlightedCodeFrame?: string;
    loc?: {
        column: number;
        line: number;
    },
    source?: string;
};

/**
 * Objects that can be converted to diagnostics
 */
export type Diagnostifiable =
    | Diagnostic
    | Diagnostic[]
    | ThrowableDiagnostic
    | PrintableError
    | string;

/**
 * Options for creating a `ThrowableDiagnostic`
 */
export type ThrowableDiagnosticOpts = {
    diagnostic: Diagnostic | Diagnostic[];
};

/**
 * A diagnostic or list of diagnostics that can be thrown as an error
 */
export default class ThrowableDiagnostic extends Error {
    diagnostics: Diagnostic[];
    constructor(opts: ThrowableDiagnosticOpts);
}

/**
 * Converts an error to one or more diagnostics
 * @param error The error to convert
 * @param realOrigin The original origin of the error
 * @returns The resulting diagnostics
 */
export function errorToDiagnostic(
    error: ThrowableDiagnostic | PrintableError | string,
    realOrigin?: string
): Diagnostic | Diagnostic[];

/**
 * Converts any error into a diagnostic
 * @param input The error to convert
 * @returns The resulting diagnostics
 */
export function anyToDiagnostic(
    input: Diagnostifiable
): Diagnostic | Diagnostic[];

/**
 * Generates code highlights from JSON
 * @param code The JSON code
 * @param ids The JSON IDs to generate highlights for
 */
export function generateJSONCodeHighlights(
    code: string,
    ids: Array<{ key: string; type?: 'key' | 'value'; message?: string }>
): DiagnosticCodeHighlight[];

/**
 * Encodes a component key in the JSON in a json-source-map compatible format
 * @param component The component key to encode
 */
export function encodeJSONKeyComponent(
    component: string
): string;

// Type definitions for @parcel/diagnostic 2.0
// Project: https://github.com/parcel-bundler/parcel#readme
// Definitions by: Arjun Barrett <https://github.com/101arrowz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
/// <reference types="node" />

// Note that the definitions for the public API are much better documented
// and are written in a pleasing rather than technically correct manner.

/**
 * Used to specify what section of the code should be highlighted
 */
export type CodeHighlightLocation = {
    line: number;
    column: number;
};

/**
 * The highlighted code in an error
 */
export type CodeHighlight = {
    start: CodeHighlightLocation;
    end: CodeHighlightLocation;
    message?: string;
};
/**
 * A frame showcasing errors in code
 */
export type CodeFrame = {
    /**
     * The code that caused the error.
     * If not present, the code is read from the filesystem.
     */
    code?: string;
    codeHighlights: CodeHighlight | CodeHighlight[];
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
    filePath: string;
    language?: string;
    codeFrame?: CodeFrame;
    /**
     * Hints that may help resolve issues faster
     */
    hints?: string[];
    skipFormatting?: boolean;
};

export type Diagnostifiable = 
    | Diagnostic
    | Diagnostic[]
    | ThrowableDiagnostic
    | (Error & {
        fileName?: string;
        filePath?: string;
        codeFrame?: string;
        highlightedCodeFrame?: string;
        loc?: {
            column: number;
            line: number;
        },
        source?: string;
    })
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
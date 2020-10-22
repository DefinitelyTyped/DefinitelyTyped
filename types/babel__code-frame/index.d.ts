// Type definitions for @babel/code-frame 7.0
// Project: https://github.com/babel/babel/tree/master/packages/babel-code-frame, https://babeljs.io
// Definitions by: Mohsen Azimi <https://github.com/mohsen1>
//                 Forbes Lindesay <https://github.com/ForbesLindesay>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface SourceLocation {
    start: { line: number; column?: number };
    end?: { line: number; column?: number };
}
export function codeFrameColumns(
    rawLines: string,
    location: SourceLocation,
    options?: BabelCodeFrameOptions
): string;

export interface BabelCodeFrameOptions {
    /** Syntax highlight the code as JavaScript for terminals. default: false */
    highlightCode?: boolean;
    /**  The number of lines to show above the error. default: 2 */
    linesAbove?: number;
    /**  The number of lines to show below the error. default: 3 */
    linesBelow?: number;
    /**
     * Forcibly syntax highlight the code as JavaScript (for non-terminals);
     * overrides highlightCode.
     * default: false
     */
    forceColor?: boolean;
    /**
     * Pass in a string to be displayed inline (if possible) next to the
     * highlighted location in the code. If it can't be positioned inline,
     * it will be placed above the code frame.
     * default: nothing
     */
    message?: string;
}

/**
 * Generate errors that contain a code frame that point to source locations.
 *
 * @param rawLines Raw lines to frame
 * @param lineNumber Line number (1 indexed)
 * @param colNumber Column number
 * @param options Additional options
 *
 * @returns Framed code
 */
export default function codeFrame(
    rawLines: string,
    lineNumber: number,
    colNumber: number,
    options?: BabelCodeFrameOptions
): string;

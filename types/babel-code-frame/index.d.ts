// Type definitions for babel-code-frame 6.20
// Project: https://github.com/babel/babel/tree/master/packages, https://babeljs.io
// Definitions by: Mohsen Azimi <https://github.com/mohsen1>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface BabelCodeFrameOptions {
    /** Syntax highlight the code as JavaScript for terminals. default: false */
    highlightCode?: boolean;
    /**  The number of lines to show above the error. default: 2 */
    linesBelow?: number;
    /**  The number of lines to show below the error. default: 3 */
    linesAbove?: number;
    /**
     * Forcibly syntax highlight the code as JavaScript (for non-terminals);
     * overrides highlightCode.
     * default: false
     */
    forceColor?: boolean;
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
declare function codeFrame(
    rawLines: string,
    lineNumber: number,
    colNumber: number,
    options?: BabelCodeFrameOptions
): string;

export = codeFrame;

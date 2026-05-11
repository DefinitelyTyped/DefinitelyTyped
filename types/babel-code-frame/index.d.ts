interface BabelCodeFrameOptions {
    /** Syntax highlight the code as JavaScript for terminals. default: false */
    highlightCode?: boolean | undefined;
    /**  The number of lines to show above the error. default: 2 */
    linesBelow?: number | undefined;
    /**  The number of lines to show below the error. default: 3 */
    linesAbove?: number | undefined;
    /**
     * Forcibly syntax highlight the code as JavaScript (for non-terminals);
     * overrides highlightCode.
     * default: false
     */
    forceColor?: boolean | undefined;
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
    options?: BabelCodeFrameOptions,
): string;

export = codeFrame;

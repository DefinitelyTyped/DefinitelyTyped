// Project: https://github.com/shebinleo/pdf2html
// Definitions by: manuzcheruz <https://github.com/manuzcheruz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { Stream } from "stream";

/**
 * Configuration options for PDF to HTML conversion
 */
interface PDF2HTMLOptions {
    binary?: string; // Path to the pdftohtml binary
    first_page?: number; // First page to convert
    last_page?: number; // Last page to convert
    complex?: boolean; // Generate complex output
    single_page?: boolean; // Generate a single HTML file
    no_background?: boolean; // No background images
    no_frames?: boolean; // No frames in HTML
    zoom?: number; // Zoom factor
}

/**
 * Error type for PDF2HTML conversion errors
 */
interface PDF2HTMLError extends Error {
    code?: string;
    path?: string;
    syscall?: string;
}

/**
 * Callback function type for async operations
 */
type PDF2HTMLCallback = (error: PDF2HTMLError | null, html?: string) => void;

/**
 * Convert PDF file to HTML synchronously
 * @param source - Path to PDF file or readable stream
 * @param options - Conversion options
 * @returns HTML string
 */
declare function pdf2htmlSync(source: string | Stream, options?: PDF2HTMLOptions): string;

/**
 * Convert PDF file to HTML asynchronously
 * @param source - Path to PDF file or readable stream
 * @param options - Conversion options
 * @param callback - Callback function
 */
declare function pdf2html(source: string | Stream, options: PDF2HTMLOptions, callback: PDF2HTMLCallback): void;

/**
 * Convert PDF file to HTML asynchronously (overload without options)
 * @param source - Path to PDF file or readable stream
 * @param callback - Callback function
 */
declare function pdf2html(source: string | Stream, callback: PDF2HTMLCallback): void;

declare namespace pdf2html {
    export { pdf2htmlSync };
}

export = pdf2html;

// Type definitions for textract 2.4
// Project: https://github.com/dbashford/textract/
// Definitions by: Luca Lindhorst <https://github.com/lal12>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node"/>

import * as ChildProc from "child_process";
import { URL } from "url";

export interface extractorExecOpts {
    exec: { [index: string]: string };
}

export interface Config {
    /**
     * Pass this in as true and textract will not strip any line breaks.
     * @default false
     */
    preserveLineBreaks?: boolean;
    /**
     * Some extractors, like PDF, insert line breaks at the end of every line, even if the middle of a sentence.
     * If this option is set to true, then any instances of a single line break are removed but multiple line breaks are preserved.
     * Check your output with this option, though, this doesn't preserve paragraphs unless there are multiple breaks.
     * @default false
     */
    preserveOnlyMultipleLineBreaks?: boolean;
    /**
     * Some extractors (dxf) use node's exec functionality.
     * This setting allows for providing config to exec execution.
     * One reason you might want to provide this config is if you are dealing with very large files.
     * You might want to increase the exec maxBuffer setting.
     */
    exec?: ChildProc.ExecException;
    /**
     * Doc extractor options for non OS X.
     * See `drawingtotext` manual for available options
     */
    doc?: extractorExecOpts;
    /**
     * DXF extractor options.
     * See `antiword` manual for available options
     */
    dxf?: extractorExecOpts;
    /**
     * Images (png, jpg, gif) extractor options.
     * See `tesseract` manual for available options
     */
    images?: extractorExecOpts;
    /**
     * RTF extractor options.
     * See `unrtf` manual for available options
     */
    rtf?: extractorExecOpts;
    tesseract?: {
        /**
         *  A pass-through to tesseract allowing for setting of language for extraction.
         */
        lang: string,
    } | {
        /**
         * `tesseract.lang` allows a quick means to provide the most popular tesseract option,
         * but if you need to configure more options, you can simply pass `cmd`.
         * `cmd` is the string that matches the command-line options you want to pass to tesseract.
         * For instance, to provide language and psm,
         * you would pass `{ tesseract: { cmd:"-l chi_sim -psm 10" } }`
         */
        cmd: string
    };
    /**
     * This is a proxy options object to the library textract uses for pdf extraction: pdf-text-extract.
     * Options include ownerPassword, userPassword if you are extracting text from password protected PDFs.
     * IMPORTANT: textract modifies the pdf-text-extract layout default so that, instead of layout: layout, it uses layout:raw.
     * It is not suggested you modify this without understanding what trouble that might get you in.
     * See [this GH issue](https://github.com/dbashford/textract/issues/75) for why textract overrides that library's default.
     */
    pdftotextOptions?: {
        firstPage?: number,
        lastPage?: number,
        resolution?: number,
        crop?: {
            x: number, y: number, w: number, h: number
        },
        /**
         * Do not change unless you know what you are doing!
         * @default "raw"
         */
        layout?: "layout" | "raw" | "htmlmeta",
        /**
         * @default "UTF-8"
         */
        encoding?: "UCS-2" | "ASCII7" | "Latin1" | "UTF-8" | "ZapfDingbats" | "Symbol";
        eol?: "unix" | "dos" | "mac",
        ownerPassword?: string,
        userPassword?: string,
        /**
         * @default true
         */
        splitPages?: boolean
    };
    /**
     * When extracting HTML, whether or not to include `alt` text with the extracted text.
     * @default false
     */
    includeAltText?: boolean;
}

export interface URLConfig extends Config {
    /**
     * Used with fromUrl, if set, rather than using the content-type from the URL request, will use the provided typeOverride.
     */
    typeOverride?: string;
}

/**
 * Get text from file by path
 * @param filePath path to file
 * @param callback callback
 */
export function fromFileWithPath(filePath: string, callback: (error: Error, text: string) => void): void;
/**
 * Get text from file by path
 * @param filePath path to file
 * @param config configuration object
 * @param callback callback
 */
export function fromFileWithPath(filePath: string, config: Config, callback: (error: Error, text: string) => void): void;

/**
 * Get text from file by path
 * @param mimeType mime type of file
 * @param filePath path to file
 * @param callback callback
 */
export function fromFileWithMimeAndPath(mimeType: string, filePath: string, callback: (error: Error, text: string) => void): void;
/**
 * Get text from file by path
 * @param mimeType mime type of file
 * @param filePath path to file
 * @param config configuration object
 * @param callback callback
 */
export function fromFileWithMimeAndPath(mimeType: string, filePath: string, config: Config, callback: (error: Error, text: string) => void): void;

/**
 * Get text from file buffer
 * @param mimeType mime type of file
 * @param buffer path to file
 * @param callback callback
 */
export function fromBufferWithMime(mimeType: string, buffer: Buffer, callback: (error: Error, text: string) => void): void;
/**
 * Get text from file buffer
 * @param mimeType mime type of file
 * @param buffer path to file
 * @param config configuration object
 * @param callback callback
 */
export function fromBufferWithMime(mimeType: string, buffer: Buffer, config: Config, callback: (error: Error, text: string) => void): void;

/**
 * Get text from file buffer
 * @param name file name or path
 * @param buffer buffer with file content
 * @param callback callback
 */
export function fromBufferWithName(name: string, buffer: Buffer, callback: (error: Error, text: string) => void): void;
/**
 * Get text from file buffer
 * @param name file name or path
 * @param buffer buffer with file content
 * @param config configuration object
 * @param callback callback
 */
export function fromBufferWithName(name: string, buffer: Buffer, config: Config, callback: (error: Error, text: string) => void): void;

/**
 * Get text from url
 * @param url url as string or object
 * @param callback callback
 */
export function fromUrl(url: string | URL, callback: (error: Error, text: string) => void): void;
/**
 * Get text from url
 * @param url url as string or object
 * @param config configuration object
 * @param callback callback
 */
export function fromUrl(url: string | URL, config: URLConfig, callback: (error: Error, text: string) => void): void;

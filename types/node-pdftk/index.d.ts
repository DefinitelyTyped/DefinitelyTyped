// Type definitions for node-pdftk 2.1
// Project: https://github.com/jjwilly16/node-pdftk#readme
// Definitions by: Andrea Ascari <https://github.com/ascariandrea>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped/types/node-pdftk
// Minimum TypeScript Version: 3.0

/// <reference types="node" />

export type Letter =
    | 'A'
    | 'B'
    | 'C'
    | 'D'
    | 'E'
    | 'F'
    | 'G'
    | 'H'
    | 'I'
    | 'J'
    | 'K'
    | 'L'
    | 'M'
    | 'N'
    | 'O'
    | 'P'
    | 'Q'
    | 'R'
    | 'S'
    | 'T'
    | 'U'
    | 'V'
    | 'W'
    | 'X'
    | 'Y'
    | 'Z';

export type Permission =
    | 'Printing' // – Top Quality Printing
    | 'DegradedPrintin' // – Lower Quality Printing
    | 'ModifyContents' // – Also allows Assembly
    | 'Assembly'
    | 'CopyContents' // – Also allows ScreenReaders
    | 'ScreenReaders'
    | 'ModifyAnnotations' // – Also allows FillIn
    | 'FillIn'
    | 'AllFeatures'; // – Allows the user to perform all of the above, and top quality printing.

export class PDFTK {
    /**
     * PdfTk constructor.
     */
    constructor(src: string[]);
    /**
     * Simple object check. Arrays not included.
     */
    static isObject(item: unknown): boolean;
    /**
     * Simple string check.
     */
    static isString(item: unknown): boolean;
    /**
     * Returns a buffer from a file.
     */
    static fileToBuffer(file: string | Buffer): Buffer;
    /**
     * Returns a buffer from a string.
     */
    static stringToBuffer(file: string | Buffer, encoding?: string): Buffer;
    /**
     * Sanitizes fdf input
     */
    static sanitizeForFdf(str: string): string;
    /**
     * Creates fdf file from JSON input.
     */
    static generateFdfFromJSON(data: object): Buffer;
    /**
     * Creates pdf info text file from JSON input.
     */
    static generateInfoFromJSON(data: object): Buffer;
    /**
     * Run the command.
     */
    output(writeFile: string, outputDest: string, needsOutput?: boolean): Promise<string>;
    output(writeFile?: string): Promise<Buffer>;
    /**
     * Assembles ("concatenate") pages from input PDFs to create a new PDF.
     * @see {@link https://www.pdflabs.com/docs/pdftk-man-page/#dest-op-cat}
     */
    cat(command: string | string[]): this;
    /**
     * Collates pages from input PDF to create new PDF.
     * @see {@link https://www.pdflabs.com/docs/pdftk-man-page/#dest-op-shuffle}
     */
    shuffle(command: string | string[]): this;
    /**
     * Splits a single PDF into individual pages.
     * @see {@link https://www.pdflabs.com/docs/pdftk-man-page/#dest-op-burst}
     */
    burst(outputOptions: string): Promise<string>;
    burst(): Promise<Buffer>;
    /**
     * Takes a single input PDF and rotates just the specified pages.
     * @see {@link https://www.pdflabs.com/docs/pdftk-man-page/#dest-op-rotate}
     */
    rotate(command: string | string[]): this;
    /**
     * Generate fdf file from input PDF.
     * @see {@link https://www.pdflabs.com/docs/pdftk-man-page/#dest-op-generate-fdf}
     */
    generateFdf(): this;
    /**
     * Fill a PDF form from JSON data.
     * @see {@link https://www.pdflabs.com/docs/pdftk-man-page/#dest-op-fill-form}
     */
    fillForm(payload: object): this;
    /**
     * Applies a PDF watermark to the background of a single PDF.
     * @see {@link https://www.pdflabs.com/docs/pdftk-man-page/#dest-op-background}
     */
    background(file: string | Buffer): this;
    /**
     * Same as the background operation, but applies each page of the background PDF to the corresponding page of the input PDF.
     * @see {@link https://www.pdflabs.com/docs/pdftk-man-page/#dest-op-multibackground}
     */
    multiBackground(file: string | Buffer): this;
    /**
     * This behaves just like the background operation except it overlays the stamp PDF page on top of the input PDF document’s pages.
     * @see {@link https://www.pdflabs.com/docs/pdftk-man-page/#dest-op-stamp}
     */
    stamp(file: string | Buffer): this;
    /**
     * Same as the stamp operation, but applies each page of the stamp PDF to the corresponding page of the input PDF.
     * @see {@link https://www.pdflabs.com/docs/pdftk-man-page/#dest-op-multistamp}
     */
    multiStamp(file: string | Buffer): this;
    /**
     * Merge PDF form fields and their data.
     * @see {@link https://www.pdflabs.com/docs/pdftk-man-page/#dest-output-flatten}
     */

    /**
     * Outputs PDF bookmarks and metadata.
     * @see {@link https://www.pdflabs.com/docs/pdftk-man-page/#dest-op-dump-data}
     */
    dumpData(): this;
    /**
     * Outputs PDF bookmarks and metadata with utf-8 encoding.
     * @see {@link https://www.pdflabs.com/docs/pdftk-man-page/#dest-op-dump-data-utf8}
     */
    dumpDataUtf8(): this;
    /**
     * Outputs form field statistics.
     * @see {@link https://www.pdflabs.com/docs/pdftk-man-page/#dest-op-dump-data-fields}
     */
    dumpDataFields(): this;
    /**
     * Outputs form field statistics with utf-8 encoding.
     * @see {@link https://www.pdflabs.com/docs/pdftk-man-page/#dest-op-dump-data-fields-utf8}
     */
    dumpDataFieldsUtf8(): this;
    /**
     * Outputs PDF annotation information.
     * @see {@link https://www.pdflabs.com/docs/pdftk-man-page/#dest-op-dump-data-annots}
     */
    dumpDataAnnots(): this;
    /**
     * Update the bookmarks and metadata of a PDF with utf-8 encoding.
     * @see {@link https://www.pdflabs.com/docs/pdftk-man-page/#dest-op-update-info}
     */
    updateInfo(data: object): this;
    /**
     * Update the bookmarks and metadata of a PDF.
     * @see {@link https://www.pdflabs.com/docs/pdftk-man-page/#dest-op-update-info-utf8}
     */
    updateInfoUtf8(data: object): this;
    /**
     * Attach files to PDF.
     * @see {@link https://www.pdflabs.com/docs/pdftk-man-page/#dest-op-attach} for more information.
     */
    attachFiles(files: string | string[]): this;
    /**
     * Unpack files into an output directory. This method is not chainable, and hereby does not require
     * the output method afterwards.
     * @see {@link https://www.pdflabs.com/docs/pdftk-man-page/#dest-op-unpack} for more information.
     */
    unpackFiles(outputDir: string): Promise<string>;
    /**
     * Used with the {@link attachFiles} method to attach to a specific page.
     * @see {@link https://www.pdflabs.com/docs/pdftk-man-page/#dest-op-attach}
     */
    toPage(pageNo: number): this;
    /**
     * Set Adobe Reader to generate new field appearances.
     * @see {@link https://www.pdflabs.com/docs/pdftk-man-page/#dest-output-need-appearances}
     */
    /**
     * Merge PDF form fields and their data.
     * @see {@link https://www.pdflabs.com/docs/pdftk-man-page/#dest-output-flatten}
     */
    flatten(): this;
    needAppearances(): this;
    /**
     * Restore page sream compression.
     * @see {@link https://www.pdflabs.com/docs/pdftk-man-page/#dest-compress}
     */
    compress(): this;
    /**
     * Remove page stream compression.
     * @see {@link https://www.pdflabs.com/docs/pdftk-man-page/#dest-compress}
     */
    uncompress(): this;
    /**
     * Keep first ID when combining files.
     * @see {@link https://www.pdflabs.com/docs/pdftk-man-page/#dest-keep-id}
     */
    keepFirstId(): this;
    /**
     * Keep final ID when combining pages.
     * @see {@link https://www.pdflabs.com/docs/pdftk-man-page/#dest-keep-id}
     */
    keepFinalId(): this;
    /**
     * Drop all XFA data.
     * @see {@link https://www.pdflabs.com/docs/pdftk-man-page/#dest-drop-xfa}
     */
    dropXfa(): this;
    /**
     * Set the verbose option.
     * @see {@link https://www.pdflabs.com/docs/pdftk-man-page/#dest-verbose}
     */
    verbose(): this;
    /**
     * Never prompt when errors occur.
     * @see {@link https://www.pdflabs.com/docs/pdftk-man-page/#dest-ask}
     */
    dontAsk(): this;
    /**
     * Always prompt when errors occur.
     * @see {@link https://www.pdflabs.com/docs/pdftk-man-page/#dest-ask}
     */
    doAsk(): this;
    /**
     * Set the input password.
     * @see {@link https://www.pdflabs.com/docs/pdftk-man-page/#dest-input-pw}
     */
    inputPw(password: string): this;
    /**
     * Set the user password.
     * @see {@link https://www.pdflabs.com/docs/pdftk-man-page/#dest-output-enc-user-pw}
     */
    userPw(password: string): this;
    /**
     * Set the owner password.
     * @see {@link https://www.pdflabs.com/docs/pdftk-man-page/#dest-output-enc-owner-pw}
     */
    ownerPw(password: string): this;
    /**
     * Set permissions for a PDF. By not passing in the "perms" parameter, you are disabling all features.
     * @see {@link https://www.pdflabs.com/docs/pdftk-man-page/#dest-output-enc-perms}
     */
    allow(perms: Permission | Permission[]): this;
    /**
     * Set 40 bit encryption.
     * @see {@link https://www.pdflabs.com/docs/pdftk-man-page/#dest-output-enc-strength}
     */
    encrypt40Bit(): this;
    /**
     * Set 128 bit encryption.
     * @see {@link https://www.pdflabs.com/docs/pdftk-man-page/#dest-output-enc-strength}
     */
    encrypt128Bit(): this;
    /**
     * Allows the plugin to ignore the PDFTK warnings. Useful with huge PDF files.
     */
    ignoreWarnings(): this;
}

export interface ConfigureOptions {
    bin: string;
    Promise: PromiseConstructor;
    ignoreWarnings: true;
    tempDir: string;
}

export function input(file: string | Buffer | Buffer[] | Partial<Record<Letter, string | Buffer>>): PDFTK;
export function configure(opts: ConfigureOptions): void;

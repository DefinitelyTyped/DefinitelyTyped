// Project: https://www.npmjs.com/package/pdf2docx
// Definitions by: manuzcheruz <https://github.com/manuzcheruz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

export class Parser {
    /**
     * Creates an instance of Parser for PDF processing
     * @param pdf_file Path to the PDF file or Buffer containing PDF data
     * @param password Optional password for encrypted PDF
     */
    constructor(pdf_file: string | Buffer, password?: string);

    /**
     * Parse and convert PDF to DOCX
     * @param docx_file Output DOCX file path
     * @param options Conversion options
     * @returns Promise resolving to parsing status
     */
    parse(docx_file: string, options?: ConversionOptions): Promise<ParsingStatus>;

    /**
     * Convert a specific range of pages
     * @param docx_file Output DOCX file path
     * @param start_page Starting page number (1-based)
     * @param end_page Ending page number (1-based)
     * @param options Conversion options
     * @returns Promise resolving to parsing status
     */
    parsePages(
        docx_file: string,
        start_page: number,
        end_page: number,
        options?: ConversionOptions,
    ): Promise<ParsingStatus>;
}

export interface ConversionOptions {
    start?: number;
    end?: number;
    pages?: number[];
    password?: string;
    tables?: TableOptions;
    images?: ImageOptions;
    font_settings?: FontSettings;
    page_margin?: MarginSettings;
}

export interface TableOptions {
    extract_tables?: boolean;
    cell_border_width?: number;
    cell_margin?: number;
}

export interface ImageOptions {
    extract_images?: boolean;
    max_width?: number;
    max_height?: number;
}

export interface FontSettings {
    default_font_size?: number;
    default_font_family?: string;
    text_direction?: "horizontal" | "vertical";
}

export interface MarginSettings {
    top?: number;
    bottom?: number;
    left?: number;
    right?: number;
}

export interface ParsingStatus {
    pages_processed: number;
    status: string;
    errors?: ParseError[];
}

export interface ParseError {
    message: string;
    page?: number;
    code?: string;
}

/**
 * Convert PDF to DOCX
 * @param pdf_file Input PDF file path or Buffer
 * @param docx_file Output DOCX file path
 * @param options Conversion options
 * @returns Promise resolving to parsing status
 */
export function convert(
    pdf_file: string | Buffer,
    docx_file: string,
    options?: ConversionOptions,
): Promise<ParsingStatus>;

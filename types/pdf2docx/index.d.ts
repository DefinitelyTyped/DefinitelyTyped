// Type definitions for pdf2docx 0.0.0
// Project: https://www.npmjs.com/package/pdf2docx
// Definitions by: manuzcheruz <https://github.com/manuzcheruz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module 'pdf2docx' {
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
          options?: ConversionOptions
      ): Promise<ParsingStatus>;
  }

  export interface ConversionOptions {
      /**
       * Start page number for conversion (1-based)
       */
      start?: number;

      /**
       * End page number for conversion (1-based)
       */
      end?: number;

      /**
       * List of specific pages to convert
       */
      pages?: number[];

      /**
       * Password for encrypted PDF
       */
      password?: string;

      /**
       * Configuration for parsing tables
       */
      tables?: TableOptions;

      /**
       * Configuration for parsing images
       */
      images?: ImageOptions;

      /**
       * Configuration for font processing
       */
      font_settings?: FontSettings;

      /**
       * Page margin settings in inches
       */
      page_margin?: MarginSettings;
  }

  export interface TableOptions {
      /**
       * Whether to extract tables
       */
      extract_tables?: boolean;

      /**
       * Minimum border width to recognize as table cell
       */
      cell_border_width?: number;

      /**
       * Minimum space between cells
       */
      cell_margin?: number;
  }

  export interface ImageOptions {
      /**
       * Whether to extract images
       */
      extract_images?: boolean;

      /**
       * Maximum image width in pixels
       */
      max_width?: number;

      /**
       * Maximum image height in pixels
       */
      max_height?: number;
  }

  export interface FontSettings {
      /**
       * Default font size in points
       */
      default_font_size?: number;

      /**
       * Default font family
       */
      default_font_family?: string;

      /**
       * Text direction (horizontal or vertical)
       */
      text_direction?: 'horizontal' | 'vertical';
  }

  export interface MarginSettings {
      /**
       * Top margin in inches
       */
      top?: number;

      /**
       * Bottom margin in inches
       */
      bottom?: number;

      /**
       * Left margin in inches
       */
      left?: number;

      /**
       * Right margin in inches
       */
      right?: number;
  }

  export interface ParsingStatus {
      /**
       * Number of pages processed
       */
      pages_processed: number;

      /**
       * Processing status message
       */
      status: string;

      /**
       * Any errors encountered during processing
       */
      errors?: ParseError[];
  }

  export interface ParseError {
      /**
       * Error message
       */
      message: string;

      /**
       * Page number where error occurred
       */
      page?: number;

      /**
       * Error code
       */
      code?: string;
  }

  /**
   * Convenience function to convert PDF to DOCX
   * @param pdf_file Input PDF file path or Buffer
   * @param docx_file Output DOCX file path
   * @param options Conversion options
   * @returns Promise resolving to parsing status
   */
  export function convert(
      pdf_file: string | Buffer,
      docx_file: string,
      options?: ConversionOptions
  ): Promise<ParsingStatus>;
}

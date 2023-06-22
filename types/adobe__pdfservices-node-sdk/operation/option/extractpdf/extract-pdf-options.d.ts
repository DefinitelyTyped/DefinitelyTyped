/**
 * Parameters for extract PDF file using {@link ExtractPdfOperation}.
 */
export class ExtractPdfOptions {
    static get ExtractElementType(): ExtractElementType;
    static get TableStructureType(): TableStructureType;
    static get ExtractRenditionsElementType(): ExtractRenditionsElementType;
    /**
     * Returns a builder for {@link ExtractPdfOptions}.
     */
    static get Builder(): typeof ExtractPDFOptionsBuilder;
    constructor(builder: ExtractPdfOptions);
    renditionsToExtract: ExtractRenditionsElementType[];
    elementsToExtract: ExtractElementType[];
    getCharBounds: boolean;
    tableOutputFormat: TableStructureType;
    includeStyling: boolean;
    validate(): boolean;
}
export interface ExtractElementType {
    /**
     * Represents Text elements to extract in the JSON
     */
    TEXT: 'text';
    /**
     * Represents Table elements to extract in the JSON.
     */
    TABLES: 'tables';
}

/**
 * Supported Output formats for exporting Tables in {@link ExtractPdfOperation}
 */
export interface TableStructureType {
    /**
     * Represents CSV format for exporting extracted Table Data
     */
    CSV: 'csv';
    /**
     * Represents XLSX format for exporting extracted Table Data
     */
    XLSX: 'xlsx';
}
export interface ExtractRenditionsElementType {
    /**
     * Represents png renditions of Tables to generate from the PDF
     */
    TABLES: 'tables';
    /**
     * Represents png renditions of Figures to generate from the PDF
     */
    FIGURES: 'figures';
}
export class ExtractPDFOptionsBuilder {
    /**
     * Sets the elements to extract - like text and/or tables.
     */
    addElementsToExtract(elements: ExtractElementType[]): ExtractPDFOptionsBuilder;

    /**
     * Sets the renditions to extract - like tables and/or figures.
     */
    addElementsToExtractRenditions(elements: ExtractElementType[]): ExtractPDFOptionsBuilder;

    /**
     * Boolean specifying whether to add character level bounding boxes to output json
     */
    addCharInfo(element: boolean): ExtractPDFOptionsBuilder;

    /**
     * Adds the table structure format (currently csv only) for extracting structured information.
     */
    addTableStructureFormat(element: TableStructureType): ExtractPDFOptionsBuilder;

    /**
     * Boolean specifying whether to get styling info of text
     */
    getStylingInfo(element: boolean): ExtractPDFOptionsBuilder;

    /**
     * Returns a new {@link ExtractPdfOptions} instance built from the current state of this builder.
     */
    build(): ExtractPdfOptions;
}

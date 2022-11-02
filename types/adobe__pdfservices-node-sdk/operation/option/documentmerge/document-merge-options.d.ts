/**
 * Parameters for specifying the input JSON data and the desired output format for {@link DocumentMergeOperation}.
 */
export class DocumentMergeOptions {
    static get OutputFormat(): OutputFormat;
    /**
     * Creates a new {@link DocumentMergeOptions} instance
     */
    constructor(jsonDataForMerge: any, outputFormat: string, fragments?: any);
    outputFormat: string;
    jsonDataForMerge: any;
    fragments: any;
    validate(): any;
}
export interface OutputFormat {
    /**
     * Represents "application/vnd.openxmlformats-officedocument.wordprocessingml.document" media type
     */
    DOCX: 'docx';
    /**
     * Represents "application/pdf" media type
     */
    PDF: 'pdf';
}

/**
 * Parameters for converting HTML to PDF using {@link CreatePDFOperation}.
 */
export class CreatePDFFromHtmlOptions {
    /**
     * Returns a builder for {@link CreatePDFFromHtmlOptions}.
     */
    static get Builder(): any;
    constructor(builder: any);
    includeHeaderFooter: any;
    pageLayout: any;
    dataToMerge: any;
    validate(): any;
}

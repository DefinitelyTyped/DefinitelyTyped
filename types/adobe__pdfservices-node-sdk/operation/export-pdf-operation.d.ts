import { ExecutionContext, FileRef } from '../pdfservices-sdk';

/**
 * An operation which exports a source PDF file to a supported format specified by
 * {@link ExportPDFOperation.SupportedExportFormats}.
 * <p>
 * For the image target formats (JPEG and PNG), the resulting file is a ZIP archive containing one image per page of
 * the source PDF file. Each image file name ends with "_&lt;unpadded_page_index&gt;". For example, a PDF file with 15
 * pages will generate 15 image files. The first file's name ends with "_1" and the last file's name ends with "_15".
 *
 * Sample Usage:
 * <pre class="prettyprint">
 * <code>
 *  const credentials = PDFServicesSdk.Credentials.serviceAccountCredentialsBuilder()
 *            .fromFile("pdfservices-api-credentials.json")
 *            .build(),
 *        executionContext = PDFServicesSdk.ExecutionContext.create(credentials),
 *        ExportPDF = PDFServicesSdk.ExportPDF,
 *        exportPdfOperation = ExportPDF.Operation.createNew(ExportPDF.SupportedTargetFormats.DOCX),
 *        input = PDFServicesSdk.FileRef.createFromLocalFile('test/resources/PDF.pdf', ExportPDF.SupportedSourceFormat.pdf);
 *
 *  exportPdfOperation.setInput(input);
 *
 *  exportPdfOperation.execute(executionContext)
 *      .then(result => result.saveAsFile('output/exportPdf.docx'))
 *      .catch(err => console.log(err));
 *
 * </code>
 * </pre>
 *
 */
export class ExportPDFOperation {
    static get SupportedExportFormats(): {
        /**
         * Represents "application/msword" media type.
         */
        DOC: any;
        /**
         * Represents "application/vnd.openxmlformats-officedocument.wordprocessingml.document" media type
         */
        DOCX: any;
        /**
         * Represents "image/jpeg" media type.
         */
        JPEG: any;
        /**
         * Represents "image/png" media type.
         */
        PNG: any;
        /**
         * Represents "application/vnd.openxmlformats-officedocument.presentationml.presentation" media type
         */
        PPTX: any;
        /**
         * Represents "text/rtf" media type.
         */
        RTF: any;
        /**
         * Represents "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" media type
         */
        XLSX: any;
    };
    static get SupportedSourceFormat(): {
        /**
         * Represents "application/pdf" media type
         */
        pdf: string;
    };
    /**
     * Constructs an {@link ExportPDFOperation} instance.
     */
    static createNew(targetFormat: {
        /**
         * Represents "application/msword" media type.
         */
        DOC: any;
        /**
         * Represents "application/vnd.openxmlformats-officedocument.wordprocessingml.document" media type
         */
        DOCX: any;
        /**
         * Represents "image/jpeg" media type.
         */
        JPEG: any;
        /**
         * Represents "image/png" media type.
         */
        PNG: any;
        /**
         * Represents "application/vnd.openxmlformats-officedocument.presentationml.presentation" media type
         */
        PPTX: any;
        /**
         * Represents "text/rtf" media type.
         */
        RTF: any;
        /**
         * Represents "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" media type
         */
        XLSX: any;
    }): ExportPDFOperation;
    static getTargetFormats(): {
        /**
         * Represents "application/msword" media type.
         */
        DOC: any;
        /**
         * Represents "application/vnd.openxmlformats-officedocument.wordprocessingml.document" media type
         */
        DOCX: any;
        /**
         * Represents "image/jpeg" media type.
         */
        JPEG: any;
        /**
         * Represents "image/png" media type.
         */
        PNG: any;
        /**
         * Represents "application/vnd.openxmlformats-officedocument.presentationml.presentation" media type
         */
        PPTX: any;
        /**
         * Represents "text/rtf" media type.
         */
        RTF: any;
        /**
         * Represents "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" media type
         */
        XLSX: any;
    };
    constructor(targetFormat: any);
    targetFormat: any;
    sourceFileRef: any;
    /**
     * Sets an input PDF file (media type "application/pdf").
     */
    setInput(sourceFileRef: FileRef): void;
    /**
     * Executes this operation using the supplied context and returns a Promise which resolves to the operation result.
     *
     * The resulting file may be stored in the system temporary directory (per the os.tempdir(), symlinks are resolved
     * to the actual path).
     * See {@link FileRef} for how temporary resources are cleaned up.
     */
    execute(context: ExecutionContext): Promise<FileRef>;
    validate(context: any): void;
}

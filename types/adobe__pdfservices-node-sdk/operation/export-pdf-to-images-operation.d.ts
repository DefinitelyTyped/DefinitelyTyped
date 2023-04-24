import { ExecutionContext, FileRef } from '../pdfservices-sdk';

/**
 * An operation which exports a source PDF file to a supported format specified by
 * {@link ExportPDFToImagesOperation.SupportedExportFormats}.
 * <p>
 * The result is a list of images. For example, a PDF file with 15
 * pages will generate 15 image files. The first file's name ends with "_0" and the last file's name ends with "_14".
 *
 * Sample Usage:
 * <pre class="prettyprint">
 * <code>
 *  const credentials = PDFServicesSdk.Credentials.serviceAccountCredentialsBuilder()
 *            .fromFile("pdfservices-api-credentials.json")
 *            .build(),
 *        executionContext = PDFServicesSdk.ExecutionContext.create(credentials),
 *        ExportPDFToImages = PDFServicesSdk.ExportPDFToImages,
 *        exportPDFToImages = ExportPDFToImages.Operation.createNew(ExportPDFToImages.SupportedTargetFormats.JPEG),
 *        input = PDFServicesSdk.FileRef.createFromLocalFile('test/resources/PDF.pdf', ExportPDFToImages.SupportedSourceFormat.pdf);
 *
 *  exportPDFToImages.setInput(input);
 *
 *  exportPDFToImages.execute(executionContext)
 *      .then(result => {
 *           let saveFilesPromises = [];
 *           for(let i = 0; i < result.length; i++){
 *               saveFilesPromises.push(result[i].saveAsFile(`output/exportPDFToJPEGOutput_{i}.jpeg`));
 *           }
 *           return Promise.all(saveFilesPromises);
 *       })
 *      .catch(err => console.log(err));
 * </code>
 * </pre>
 *
 */
export class ExportPDFToImagesOperation {
    static get SupportedExportFormats(): {
        /**
         * Represents "image/jpeg" media type.
         */
        JPEG: any;
        /**
         * Represents "image/png" media type.
         */
        PNG: any;
    };
    static get SupportedSourceFormat(): {
        /**
         * Represents "application/pdf" media type
         */
        pdf: string;
    };
    /**
     * Constructs an {@link ExportPDFToImagesOperation} instance.
     */
    static createNew(targetFormat: {
        /**
         * Represents "image/jpeg" media type.
         */
        JPEG: any;
        /**
         * Represents "image/png" media type.
         */
        PNG: any;
    }): ExportPDFToImagesOperation;
    static getTargetFormats(): {
        /**
         * Represents "image/jpeg" media type.
         */
        JPEG: any;
        /**
         * Represents "image/png" media type.
         */
        PNG: any;
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
     * The resultant files may be stored in the system temporary directory (per the os.tempdir(), symlinks are resolved
     * to the actual path).
     * See {@link FileRef} for how temporary resources are cleaned up.
     */
    execute(context: ExecutionContext): Promise<FileRef[]>;
    validate(context: any): void;
}

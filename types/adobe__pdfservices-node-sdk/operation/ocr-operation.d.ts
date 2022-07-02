import { ExecutionContext, FileRef } from '../pdfservices-sdk';

/**
 * Convert a PDF file into a searchable PDF file. Allows specifying locale({OCROptions.OCRSupportedLocale}) and
 * OCR Type ({ OCROptions.OCRSupportedType}) for performing OCR (Optical Character Recognition)
 *
 * Sample Usage:
 * <pre class="prettyprint">
 * <code>
 *  const credentials = PDFServicesSdk.Credentials.serviceAccountCredentialsBuilder()
 *            .fromFile("pdfservices-api-credentials.json")
 *            .build(),
 *        executionContext = PDFServicesSdk.ExecutionContext.create(credentials),
 *        OCR = PDFServicesSdk.OCR,
 *        ocrOperation = OCR.Operation.createNew(),
 *        input = PDFServicesSdk.FileRef.createFromLocalFile('test/resources/ocrInput.pdf', OCR.SupportedSourceFormat.pdf);
 *
 *  ocrOperation.setInput(input);
 *
 *  ocrOperation.execute(executionContext)
 *      .then(result => result.saveAsFile('output/ocrOutput.pdf'))
 *      .catch(err => console.log(err));
 * </code>
 * </pre>
 *
 */
export class OCROperation {
    /**
     * Constructs a {@link OCROperation} instance.
     */
    static createNew(): OCROperation;
    static get SupportedSourceFormat(): {
        /**
         * Represents "application/pdf" media type
         */
        pdf: string;
    };
    sourceFileRef: any;
    options: any;
    /**
     * Sets an input file.
     */
    setInput(sourceFileRef: FileRef): void;
    /**
     * Sets the options for this operation. See {@link OCROptions} for how to specify the options for the different locales and
     * ocr types.
     */
    setOptions(options?: any): void;
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

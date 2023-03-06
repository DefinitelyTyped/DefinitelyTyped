import { ExecutionContext, FileRef, PdfFormat } from '../pdfservices-sdk';

/**
 * An operation that converts a PDF file into a linearized (also known as “web optimized”) PDF file.
 * Such PDF files are optimized for incremental access in network environments.
 *
 * Sample Usage:
 * <pre class="prettyprint">
 * <code>
 *  const credentials = PDFServicesSdk.Credentials.serviceAccountCredentialsBuilder()
 *            .fromFile("pdfservices-api-credentials.json")
 *            .build(),
 *        executionContext = PDFServicesSdk.ExecutionContext.create(credentials),
 *        LinearizePDF = PDFServicesSdk.LinearizePDF,
 *        linearizePdfOperation = LinearizePDF.Operation.createNew(),
 *        input = PDFServicesSdk.FileRef.createFromLocalFile('test/resources/linearizeInput.pdf', LinearizePDF.SupportedSourceFormat.pdf);
 *
 *  linearizePdfOperation.setInput(input);
 *
 *  linearizePdfOperation.execute(executionContext)
 *      .then(result => result.saveAsFile('output/linearizeOutput.pdf'))
 *      .catch(err => console.log(err));
 * </code>
 * </pre>
 *
 */
export class LinearizePDFOperation {
    /**
     * Constructs a {@link LinearizePDFOperation} instance.
     */
    static createNew(): LinearizePDFOperation;
    static get SupportedSourceFormat(): PdfFormat;
    sourceFileRef: any;
    /**
     * Sets an input file.
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

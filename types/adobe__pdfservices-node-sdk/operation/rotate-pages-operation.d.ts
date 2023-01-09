/**
 * An operation that allows rotation of specific pages in a PDF file.
 *
 * Sample Usage:
 * <pre class="prettyprint">
 * <code>
 *  const credentials = PDFServicesSdk.Credentials.serviceAccountCredentialsBuilder()
 *            .fromFile("pdfservices-api-credentials.json")
 *            .build(),
 *        executionContext = PDFServicesSdk.ExecutionContext.create(credentials),
 *        RotatePages = PDFServicesSdk.RotatePages,
 *        rotatePagesOperation = RotatePages.Operation.createNew();
 *
 *  rotatePagesOperation.setInput(PDFServicesSdk.FileRef.createFromLocalFile('~/Documents/rotatePagesOperationInput.pdf',
 *  	RotatePages.SupportedSourceFormat.pdf));
 *  rotatePagesOperation.setAngleToRotatePagesBy(PDFServicesSdk.RotatePages.Angle._90);
 *
 *  rotatePagesOperation.execute(executionContext)
 *      .then(result => result.saveAsFile('output/rotatePagesOperationOutput.pdf'))
 *      .catch(err => console.log(err));
 * </code>
 * </pre>
 *
 */
export class RotatePagesOperation {
    /**
     * Constructs a {@link RotatePagesOperation} instance.
     */
    static createNew(): RotatePagesOperation;
    static get SupportedSourceFormat(): {
        /**
         * Represents "application/pdf" media type
         */
        pdf: string;
    };
    static get Angle(): {
        /**
         * Represents 90 degrees clockwise rotation
         */
        _90: number;
        /**
         * Represents 180 degrees clockwise rotation
         */
        _180: number;
        /**
         * Represents 270 degrees clockwise rotation
         */
        _270: number;
    };
    sourceFileRef: any;
    pageActions: PageActions;
    /**
     * Sets an input file.
     */
    setInput(sourceFileRef: FileRef): void;
    /**
     * Sets angle (in clockwise direction) for rotating pages of the input PDF file; can be invoked
     * multiple times to set rotation angle for different set of pages.
     *
     * <p>
     * Multiple invocation of this method on the same set of pages can result in rotating pages multiple times.
     * <pre>
     * For e.g.:
     * PageRanges pageRanges = new PDFServicesSdk.PageRanges();
     * pageRanges.addSinglePage(1);
     * rotatePagesOperation.setAngleToRotatePagesBy(PDFServicesSdk.RotatePages.Angle._90, pageRanges);
     * rotatePagesOperation.setAngleToRotatePagesBy(PDFServicesSdk.RotatePages.Angle._180, pageRanges);
     * </pre>
     * Above invocations will effectively rotate pages (as specified by the page ranges) by 270 degrees.
     *
     * If <code>pageRanges</code> is not provided, all pages of the input PDF are rotated by the specified angle.
     */
    setAngleToRotatePagesBy(
        angle: {
            /**
             * Represents 90 degrees clockwise rotation
             */
            _90: number;
            /**
             * Represents 180 degrees clockwise rotation
             */
            _180: number;
            /**
             * Represents 270 degrees clockwise rotation
             */
            _270: number;
        },
        pageRanges?: PageRanges,
    ): void;
    /**
     * Executes this operation using the supplied context and returns a Promise which resolves to the operation result.
     *
     * The resulting file may be stored in the system temporary directory (per the os.tempdir(), symlinks are resolved
     * to the actual path).
     * See {@link FileRef} for how temporary resources are cleaned up.
     */
    execute(context: ExecutionContext): Promise<FileRef>;
    validate(context: any): void;
    validateAngleValue(angle: any): void;
}
import { ExecutionContext, FileRef, PageRanges } from '../pdfservices-sdk';
import { PageActions } from './delete-pages-operation';

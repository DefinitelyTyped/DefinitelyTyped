/**
 * An operation that allows specific pages in a PDF file to be replaced with pages from multiple PDF files.
 * <p>
 * For more complex use cases, refer the {@link CombineFilesOperation}
 *
 * Sample Usage:
 * <pre class="prettyprint">
 * <code>
 *  const credentials = PDFServicesSdk.Credentials.serviceAccountCredentialsBuilder()
 *            .fromFile("pdfservices-api-credentials.json")
 *            .build(),
 *        executionContext = PDFServicesSdk.ExecutionContext.create(credentials),
 *        ReplacePages = PDFServicesSdk.ReplacePages,
 *        replacePagesOperation = ReplacePages.Operation.createNew();
 *
 *  replacePagesOperation.setBaseInput(PDFServicesSdk.FileRef.createFromLocalFile('~/Documents/replacePagesOperationBaseInput.pdf',
 *  	ReplacePages.SupportedSourceFormat.pdf));
 *  replacePagesOperation.addPagesForReplace(1, PDFServicesSdk.FileRef.createFromLocalFile('~/Documents/replacePagesOperationFileToBeReplacedWithInput.pdf',
 *  	ReplacePages.SupportedSourceFormat.pdf));
 *
 *  replacePagesOperation.execute(executionContext)
 *      .then(result => result.saveAsFile('output/replacePagesOperationOutput.pdf'))
 *      .catch(err => console.log(err));
 * </code>
 * </pre>
 *
 */
export class ReplacePagesOperation {
    /**
     * Constructs a {@link ReplacePagesOperation} instance.
     */
    static createNew(): ReplacePagesOperation;
    static get SupportedSourceFormat(): {
        /**
         * Represents "application/pdf" media type
         */
        pdf: string;
    };
    filesToReplace: {};
    baseSourceFileRef: any;
    /**
     * Sets a base input file.
     */
    setBaseInput(baseSourceFileRef: FileRef): void;
    /**
     * Adds the pages of the input PDF file for replacing the page of the base PDF file.
     * <p>
     * This method can be invoked multiple times with the same or different input PDF files.
     * <p>
     * If <code>pageRanges</code> is not provided, the specified page of the base PDF file will be replaced
     * by all the pages of the input PDF file.
     */
    addPagesForReplace(basePageToReplace: number, inputFile: FileRef, pageRanges?: PageRanges): void;
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
import { ExecutionContext, FileRef, PageRanges } from '../pdfservices-sdk';

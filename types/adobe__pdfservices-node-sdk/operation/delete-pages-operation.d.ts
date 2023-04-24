import { ExecutionContext, FileRef, PageRanges } from '../pdfservices-sdk';

/**
 * An operation to delete pages in a PDF file.
 *
 * Sample Usage:
 * <pre class="prettyprint">
 * <code>
 *  const credentials = PDFServicesSdk.Credentials.serviceAccountCredentialsBuilder()
 *            .fromFile("pdfservices-api-credentials.json")
 *            .build(),
 *        executionContext = PDFServicesSdk.ExecutionContext.create(credentials),
 *        DeletePages = PDFServicesSdk.DeletePages,
 *        deletePagesOperation = DeletePages.Operation.createNew(),
 *        pageRanges = new PDFServicesSdk.PageRanges();
 *
 *  deletePagesOperation.setInput( PDFServicesSdk.FileRef.createFromLocalFile('~/Documents/deletePagesOperationInput.pdf',
 *  	DeletePages.SupportedSourceFormat.pdf));
 *  pageRanges.addSinglePage(1);
 *  deletePagesOperation.setPageRanges(pageRanges);
 *
 *  deletePagesOperation.execute(executionContext)
 *      .then(result => result.saveAsFile('output/deletePagesOperationOutput.pdf'))
 *      .catch(err => console.log(err));
 * </code>
 * </pre>
 *
 */
export class PageActions {
    pageActions: any[];
    withRotateAction(pageRanges: any, angle: any): PageActions;
    withDeleteAction(pageRanges: any): PageActions;
}

export class DeletePagesOperation {
    /**
     * Constructs a {@link DeletePagesOperation} instance.
     *
     */
    static createNew(): DeletePagesOperation;
    static get SupportedSourceFormat(): {
        /**
         * Represents "application/pdf" media type
         */
        pdf: string;
    };
    sourceFileRef: any;
    options: PageActions;
    /**
     * Sets an input file.
     */
    setInput(sourceFileRef: FileRef): void;
    /**
     * Specifies the pages to delete from the input PDF file.
     *
     */
    setPageRanges(pageRanges: PageRanges): void;
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

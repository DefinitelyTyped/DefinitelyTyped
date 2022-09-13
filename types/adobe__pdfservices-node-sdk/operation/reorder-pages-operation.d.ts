/**
 * An operation that allows to rearrange pages in a PDF file according to the specified order.
 *
 * Sample Usage:
 * <pre class="prettyprint">
 * <code>
 *  const credentials = PDFServicesSdk.Credentials.serviceAccountCredentialsBuilder()
 *            .fromFile("pdfservices-api-credentials.json")
 *            .build(),
 *        executionContext = PDFServicesSdk.ExecutionContext.create(credentials),
 *        ReorderPages = PDFServicesSdk.ReorderPages,
 *        reorderPagesOperation = ReorderPages.Operation.createNew(),
 *        pageRanges = new PDFServicesSdk.PageRanges();
 *
 *  reorderPagesOperation.setInput(PDFServicesSdk.FileRef.createFromLocalFile('~/Documents/reorderPagesOperationInput.pdf',
 *  	ReorderPages.SupportedSourceFormat.pdf));
 *  pageRanges.addSinglePage(3);
 *  pageRanges.addPageRange(1,2);
 *  reorderPagesOperation.setPagesOrder(pageRanges);
 *
 *  reorderPagesOperation.execute(executionContext)
 *      .then(result => result.saveAsFile('output/reorderPagesOperationOutput.pdf'))
 *      .catch(err => console.log(err));
 * </code>
 * </pre>
 *
 */
export class ReorderPagesOperation {
    /**
     *
     * Constructs a {@link ReorderPagesOperation} instance.
     */
    static createNew(): ReorderPagesOperation;
    static get SupportedSourceFormat(): PdfFormat;
    sourceFileRef: any;
    pageRanges: PageRanges;
    /**
     * Sets an input file.
     */
    setInput(sourceFileRef: FileRef): void;
    /**
     * Sets the order of the pages.
     */
    setPagesOrder(pageRanges: PageRanges): void;
    /**
     * Executes this operation using the supplied context and returns a Promise which resolves to the operation result.
     *
     * The resulting file may be stored in the system temporary directory (per the os.tempdir(), symlinks are resolved
     * to the actual path).
     * See {@link FileRef} for how temporary resources are cleaned up.
     */
    execute(context: ExecutionContext): Promise<FileRef>;
    validate(context: any): void;
    getIncludeRanges(): any[][];
    getSourceFileRefs(): any[];
}
import { ExecutionContext, FileRef, PageRanges, PdfFormat } from '../pdfservices-sdk';

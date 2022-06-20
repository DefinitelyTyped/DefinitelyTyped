/**
 * An operation that splits PDF document into multiple smaller documents by simply specifying either the number of files,
 * pages per file, or page ranges.
 *
 * Sample Usage:
 * <pre class="prettyprint">
 * <code>
 *  const credentials = PDFServicesSdk.Credentials.serviceAccountCredentialsBuilder()
 *            .fromFile("pdfservices-api-credentials.json")
 *            .build(),
 *        executionContext = PDFServicesSdk.ExecutionContext.create(credentials),
 *        SplitPDF = PDFServicesSdk.SplitPDF,
 *        splitPDFOperation = SplitPDF.Operation.createNew();
 *
 *  splitPDFOperation.setInput(PDFServicesSdk.FileRef.createFromLocalFile('~/Documents/splitPDFInput.pdf',
 *  	SplitPDF.SupportedSourceFormat.pdf));
 *  splitPDFOperation.setPageCount(2);
 *
 *  splitPDFOperation.execute(executionContext)
 *      .then(result => {
 *           let saveFilesPromises = [];
 *           for(let i = 0; i < result.length; i++){
 *               saveFilesPromises.push(result[i].saveAsFile(`output/splitPDFOutput_{i}.pdf`));
 *           }
 *           return Promise.all(saveFilesPromises);
 *       })
 *      .catch(err => console.log(err));
 * </code>
 * </pre>
 *
 */
export class SplitPDFOperation {
    /**
     * Constructs a {@link SplitPDFOperation} instance.
     */
    static createNew(): SplitPDFOperation;
    static get SupportedSourceFormat(): PdfFormat;
    sourceFileRef: any;
    pageRanges: PageRanges;
    pageCount: number;
    fileCount: number;
    /**
     * Sets an input file.
     */
    setInput(sourceFileRef: FileRef): void;
    /**
     * Sets the page ranges on the basis of which to split the input PDF file.
     * Each page range corresponds to a single output file having the pages specified in the page range.
     */
    setPageRanges(pageRanges: PageRanges): void;
    /**
     * Sets the number of documents to split the input PDF.
     */
    setFileCount(fileCount: number): void;
    /**
     * Sets the maximum number of pages each of the output files can have.
     */
    setPageCount(pageCount: number): void;
    /**
     * Executes this operation synchronously using the supplied context and returns a new list of FileRef instances for the resultant PDF files.
     *
     * The resultant files may be stored in the system temporary directory (per the os.tempdir(), symlinks are resolved
     * to the actual path).
     * See {@link FileRef} for how temporary resources are cleaned up.
     */
    execute(context: ExecutionContext): Promise<FileRef[]>;
    validate(context: any): void;
}
import { ExecutionContext, FileRef, PageRanges, PdfFormat } from '../pdfservices-sdk';

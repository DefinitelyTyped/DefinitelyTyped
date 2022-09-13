/**
 * An operation that can be used to insert pages of multiple PDF files into a base PDF file.
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
 *        InsertPages = PDFServicesSdk.InsertPages,
 *        insertPagesOperation = InsertPages.Operation.createNew();
 *
 *  insertPagesOperation.setBaseInput(PDFServicesSdk.FileRef.createFromLocalFile('~/Documents/insertPagesOperationBaseInput.pdf',
 *  	InsertPages.SupportedSourceFormat.pdf));
 *  insertPagesOperation.addPagesToInsertAt(1, PDFServicesSdk.FileRef.createFromLocalFile('~/Documents/insertPagesOperationFileToInsertInput.pdf',
 *  	InsertPages.SupportedSourceFormat.pdf));
 *
 *  insertPagesOperation.execute(executionContext)
 *      .then(result => result.saveAsFile('output/insertPagesOperationOutput.pdf'))
 *      .catch(err => console.log(err));
 * </code>
 * </pre>
 *
 */
export class InsertPagesOperation {
    /**
     *
     * Constructs a {@link InsertPagesOperation} instance.
     *
     */
    static createNew(): InsertPagesOperation;
    static get SupportedSourceFormat(): {
        /**
         * Represents "application/pdf" media type
         */
        pdf: string;
    };
    filesToInsert: {};
    baseSourceFileRef: any;
    /**
     * Sets a base input file.
     */
    setBaseInput(baseSourceFileRef: FileRef): void;
    /**
     * Adds the pages of the input PDF file to be inserted at the specified page of the base PDF file.
     * <p>
     * This method can be invoked multiple times with the same or different input PDF files.
     * <p>
     * If <code>pageRanges</code> is not provided, all the pages of the input PDF file will be inserted at the specified
     * page of the base PDF file.
     *
     */
    addPagesToInsertAt(basePage: number, inputFile: FileRef, pageRanges?: PageRanges): void;
    /**
     * Executes this operation using the supplied context and returns a Promise which resolves to the operation result.
     *
     * The resulting file may be stored in the system temporary directory (per the os.tempdir(), symlinks are resolved
     * to the actual path).
     * See {@link FileRef} for how temporary resources are cleaned up.
     *
     */
    execute(context: ExecutionContext): Promise<FileRef>;
    validate(context: any): void;
    updateFilesToInsert(basePage: any, combineOperationInput: any): void;
}
import { ExecutionContext, FileRef, PageRanges } from '../pdfservices-sdk';

/**
 * Combines multiple PDF files into a single PDF file. Allows specifying which pages of the source files to combine.
 *
 * Sample Usage:
 * <pre class="prettyprint">
 * <code>
 *
 *  const credentials = PDFServicesSdk.Credentials.serviceAccountCredentialsBuilder()
 *            .fromFile("pdfservices-api-credentials.json")
 *            .build(),
 *        executionContext = PDFServicesSdk.ExecutionContext.create(credentials),
 *        CombineFiles = PDFServicesSdk.CombineFiles,
 *        combineFilesOperation = CombineFiles.Operation.createNew(),
 *        input1 = PDFServicesSdk.FileRef.createFromLocalFile('test/resources/combinePagesInput1.pdf', CombineFiles.SupportedSourceFormat.pdf),
 *        input2 = PDFServicesSdk.FileRef.createFromLocalFile('test/resources/combinePagesInput1.pdf', CombineFiles.SupportedSourceFormat.pdf);
 *
 *  combineFilesOperation.addInput(input1);
 *  combineFilesOperation.addInput(input2);
 *
 *  combineFilesOperation.execute(executionContext)
 *      .then(result => result.saveAsFile('output/CombinedPDF.pdf'))
 *      .catch(err => console.log(err));
 * </code>
 * </pre>
 *
 */
export class CombineFilesOperation {
    /**
     *
     * Constructs a {@link CombineFilesOperation} instance.
     *
     */
    static createNew(): CombineFilesOperation;
    static get SupportedSourceFormat(): {
        /**
         * Represents "application/pdf" media type
         */
        pdf: string;
    };
    filesToCombine: any[];
    /**
     * Specifies particular pages of a PDF file (media type "application/pdf") to be combined with other files. The pages
     * will be added after the pages of any previously specified files. If the <code>pageRanges</code> argument is not
     * provided, all pages of the PDF will be added in the combined PDF.
     * <p>
     *
     */
    addInput(sourceFileRef: FileRef, pageRanges?: PageRanges): void;
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
    getIncludeRanges(): any[];
    getSourceFileRefs(): any[];
}
import { ExecutionContext, FileRef, PageRanges } from '../pdfservices-sdk';

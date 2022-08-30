import { ExecutionContext, FileRef } from '../pdfservices-sdk';
import { CompressPDFOptions } from './option/compresspdf/compress-pdf-options';

/**
 * An operation that reduces the size of a PDF file.
 *
 * Sample Usage:
 * <pre class="prettyprint">
 * <code>
 *  const credentials = PDFServicesSdk.Credentials.serviceAccountCredentialsBuilder()
 *            .fromFile("pdfservices-api-credentials.json")
 *            .build(),
 *        executionContext = PDFServicesSdk.ExecutionContext.create(credentials),
 *        CompressPDF = PDFServicesSdk.CompressPDF,
 *        compressPdfOperation = CompressPDF.Operation.createNew(),
 *        input = PDFServicesSdk.FileRef.createFromLocalFile('test/resources/compressInput.pdf', CompressPDF.SupportedSourceFormat.pdf);
 *
 *  compressPdfOperation.setInput(input);
 *
 *  compressPdfOperation.execute(executionContext)
 *      .then(result => result.saveAsFile('output/compressOutput.pdf'))
 *      .catch(err => console.log(err));
 * </code>
 * </pre>
 *
 */
export class CompressPDFOperation {
    /**
     * Constructs a {@link CompressPDFOperation} instance.
     */
    static createNew(): CompressPDFOperation;
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
     * Sets the options for this operation. See {@link CompressPDFOptions} for how to specify the
     * options for the different compression levels.
     */
    setOptions(options?: any): void;
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
}

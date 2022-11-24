import { ExecutionContext, FileRef, PdfFormat } from '../pdfservices-sdk';

/**
 * An operation that allows to remove password security from a PDF document.
 *
 * Sample Usage:
 * <pre class="prettyprint">
 * <code>
 *  const credentials = PDFServicesSdk.Credentials.serviceAccountCredentialsBuilder()
 *            .fromFile("pdfservices-api-credentials.json")
 *            .build(),
 *        executionContext = PDFServicesSdk.ExecutionContext.create(credentials),
 *        RemoveProtection = PDFServicesSdk.RemoveProtection,
 *        removeProtectionOperation = RemoveProtection.Operation.createNew(),
 *        input = PDFServicesSdk.FileRef.createFromLocalFile('~/Documents/removeProtectionInput.pdf', RemoveProtection.SupportedSourceFormat.pdf);
 *
 *  removeProtectionOperation.setInput(input);
 *  removeProtectionOperation.setPassword("password");
 *
 *  removeProtectionOperation.execute(executionContext)
 *      .then(result => result.saveAsFile('output/removeProtectionOutput.pdf'))
 *      .catch(err => console.log(err));
 * </code>
 * </pre>
 *
 */
export class RemoveProtectionOperation {
    /**
     * Constructs a {@link RemoveProtectionOperation} instance.
     *
     */
    static createNew(): RemoveProtectionOperation;
    static get SupportedSourceFormat(): PdfFormat;
    constructor(password: any);
    sourceFileRef: any;
    password: any;
    /**
     * Sets an input file.
     */
    setInput(sourceFileRef: FileRef): void;
    /**
     * Specifies the intended password depending on the type of password security attached to the input PDF document.
     */
    setPassword(password: string): void;
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

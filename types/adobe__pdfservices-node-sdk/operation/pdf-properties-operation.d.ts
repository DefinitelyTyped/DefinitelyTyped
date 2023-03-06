/**
 * An Operation that is used to fetch properties from an input PDF file. The properties are returned in a JSON file.
 *
 * Sample Usage:
 * <pre class="prettyprint">
 * <code>const credentials =  PDFServicesSdk.Credentials.serviceAccountCredentialsBuilder()
 *          .fromFile("pdfservices-api-credentials.json")
 *          .build(),
 *       clientContext = PDFServicesSdk.ExecutionContext.create(credentials),
 *       PDFProperties = PDFServicesSdk.PDFProperties,
 *       pdfPropertiesOperation = PDFProperties.Operation.createNew(),
 *       input = PDFServicesSdk.FileRef.createFromLocalFile('test/resources/PDFPropertiesOperationInput.pdf',PDFProperties.SupportedSourceFormat.pdf);
 *
 * pdfPropertiesOperation.setInput(input);
 *
 * pdfPropertiesOperation.execute(clientContext)
 * 	.then(result => console.log(result))
 * 	.catch(err => console.log(err));
 * </code>
 * </pre>
 *
 */
export class PDFPropertiesOperation {
    /**
     * Constructs a {@link PDFPropertiesOperation} instance.
     */
    static createNew(): PDFPropertiesOperation;
    static get SupportedSourceFormat(): {
        /**
         * Represents "application/pdf" media type
         */
        pdf: string;
    };
    sourceFileRef: any;
    isInvoked: boolean;
    options: PDFPropertiesOptions;
    /**
     * Sets an input file.
     */
    setInput(sourceFileRef: FileRef): void;
    /**
     * Sets the options for this operation. See {@link PDFPropertiesOptions} for how to specify options for PDF Properties.
     *
     */
    setOptions(options?: PDFPropertiesOptions): void;
    /**
     * Executes this operation using the supplied context and returns a Promise which resolves to the operation result.
     * The resulting file may be stored in the system temporary directory (per the os.tempdir(), symlinks are resolved
     * to the actual path).
     * See {@link FileRef} for how temporary resources are cleaned up.
     */
    executeAndReturnFileRef(context: ExecutionContext): Promise<FileRef>;
    /**
     * Executes this operation using the supplied context and returns a Promise which resolves to the operation result.
     */
    execute(context: ExecutionContext): Promise<any>;
    validate(): void;
}
import { ExecutionContext, FileRef } from '../pdfservices-sdk';
import { PDFPropertiesOptions } from './option/pdfproperties/pdf-properties-options';

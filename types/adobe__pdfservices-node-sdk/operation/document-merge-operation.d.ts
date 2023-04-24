/**
 * An operation that enables the clients to produce high fidelity PDF and Word documents with dynamic data inputs.
 * This operation merges the JSON data with the Word template to create dynamic documents for contracts and agreements,
 * invoices, proposals, reports, forms, branded marketing documents and more.
 *
 * To know more about document generation and document templates, please see the <a href="http://www.adobe.com/go/dcdocgen_overview_doc">documentation</a>
 *
 * Sample Usage:
 * <pre class="prettyprint">
 * <code>
 *  const credentials = PDFServicesSdk.Credentials.serviceAccountCredentialsBuilder()
 *            .fromFile("pdfservices-api-credentials.json")
 *            .build(),
 *        executionContext = PDFServicesSdk.ExecutionContext.create(credentials),
 *        DocumentMerge = PDFServicesSdk.DocumentMerge,
 *        documentMergeOptions = DocumentMerge.options,
 *        jsonDataForMerge = JSON.parse("{\"customerName\": \"James\", \"customerVisits\": 100}");
 *        options = new documentMergeOptions.DocumentMergeOptions(jsonDataForMerge, documentMergeOptions.OutputFormat.PDF),
 *        documentMergeOperation = DocumentMerge.Operation.createNew(options),
 *        input = PDFServicesSdk.FileRef.createFromLocalFile('~/Documents/DocumentMergeOperationInput.docx', DocumentMerge.SupportedSourceFormat.docx);
 *
 *  documentMergeOperation.setInput(input);
 *
 *  documentMergeOperation.execute(executionContext)
 *      .then(result => result.saveAsFile('output/DocumentMergeOperationOutput.pdf'))
 *      .catch(err => console.log(err));
 * </code>
 * </pre>
 */
export class DocumentMergeOperation {
    /**
     * Constructs a {@link DocumentMergeOperation} instance.
     *
     */
    static createNew(options: DocumentMergeOptions): DocumentMergeOperation;
    static get SupportedSourceFormat(): {
        /**
         * Represents "application/vnd.openxmlformats-officedocument.wordprocessingml.document" media type
         */
        docx: string;
    };
    constructor(options: DocumentMergeOptions);
    documentTemplate: any;
    options: any;
    /**
     * Sets the input DOCX based document template.
     */
    setInput(documentTemplate: FileRef): void;
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
import { ExecutionContext, FileRef } from '../pdfservices-sdk';
import { DocumentMergeOptions } from './option/documentmerge/document-merge-options';

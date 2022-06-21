import { Credentials } from './auth/credentials';
import { ClientConfig } from './client-config';

/**
 *
 * Represents the execution context of an Operation. An execution context typically consists of the desired
 * authentication credentials and client configurations such as timeouts.
 * <p>
 * For each set of credentials, a ExecutionContext instance can be reused across operations.
 *
 * Sample Usage:
 * <pre class="prettyprint">
 * <code>
 * const credentials = PDFServicesSdk.Credentials.serviceAccountCredentialsBuilder()
 *            .fromFile("pdfservices-api-credentials.json")
 *            .build();
 * const executionContext = PDFServicesSdk.ExecutionContext.create(credentials),
 *        createPDFOperation = PDFServicesSdk.CreatePDF.Operation.createNew(),
 *        input = PDFServicesSdk.FileRef.createFromLocalFile('files/resources/createPDFInput.docx');
 *
 * createPDFOperation.setInput(input);
 *
 * createPDFOperation.execute(executionContext)
 *     .then(result => result.saveAsFile('output/createPDFFromZip.pdf'))
 *     .catch(err => console.log(err));
 * </code>
 * </pre>
 */
/* tslint:disable-next-line:no-unnecessary-class */
export class ExecutionContext {
    /**
     *
     * Creates a context instance using the provided {@link Credentials} and {@link ClientConfig}.
     *
     */
    static create(credentials: Credentials, clientConfig?: ClientConfig): ExecutionContext;
}

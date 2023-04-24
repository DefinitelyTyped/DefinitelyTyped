/**
 * An operation that is used for securing PDF document with password(s).
 * The password(s) is used for encrypting the PDF document and setting the restriction on certain features
 * like printing, editing and copying in the PDF document.
 *
 * The supported algorithm for encrypting the PDF contents are listed here. The {@link PasswordProtectOptions.EncryptionAlgorithm} object can be used to set the
 * encryption algorithm.
 * <ul>
 * <li>AES-128</li>
 * <li>AES-256</li>
 * </ul>
 * For AES-128 encryption the password supports LATIN-I characters only.
 * For AES-256 encryption the password supports Unicode character set.
 *
 * Sample Usage:
 * <pre class="prettyprint">
 * <code>
 *  const credentials = PDFServicesSdk.Credentials.serviceAccountCredentialsBuilder()
 *            .fromFile("pdfservices-api-credentials.json")
 *            .build(),
 *        executionContext = PDFServicesSdk.ExecutionContext.create(credentials),
 *        ProtectPDF = PDFServicesSdk.ProtectPDF,
 *        protectPDFOptions = ProtectPDF.options,
 *        permissions = protectPDFOptions.Permissions.createNew();
 *
 *  permissions.addPermission(protectPDFOptions.Permission.PRINT_LOW_QUALITY);
 *  permissions.addPermission(protectPDFOptions.Permission.EDIT_DOCUMENT_ASSEMBLY);
 *  permissions.addPermission(protectPDFOptions.Permission.COPY_CONTENT);
 *
 *  const options = new protectPDFOptions.PasswordProtectOptions.Builder()
 *  		.setUserPassword("openpassword")
 *  		.setOwnerPassword("permissionspassword")
 *  		.setPermissions(permissions)
 *  		.setEncryptionAlgorithm(protectPDFOptions.EncryptionAlgorithm.AES_256)
 *  		.setContentEncryption(protectPDFOptions.ContentEncryption.ALL_CONTENT_EXCEPT_METADATA)
 *  		.build(),
 *        protectPDFOperation = ProtectPDF.Operation.createNew(options),
 *        input = PDFServicesSdk.FileRef.createFromLocalFile('~/Documents/protectPDFInput.pdf', ProtectPDF.SupportedSourceFormat.pdf);
 *
 *  protectPDFOperation.setInput(input);
 *
 *  protectPDFOperation.execute(executionContext)
 *      .then(result => result.saveAsFile('output/protectPDFOutput.pdf'))
 *      .catch(err => console.log(err));
 * </code>
 * </pre>
 *
 */
export class ProtectPDFOperation {
    /**
     * Constructs a {@link ProtectPDFOperation} instance.
     */
    static createNew(options: PasswordProtectOptions): ProtectPDFOperation;
    static get SupportedSourceFormat(): {
        /**
         * Represents "application/pdf" media type
         */
        pdf: string;
    };
    constructor(options: any);
    sourceFileRef: any;
    options: any;
    /**
     * Sets an input file.
     */
    setInput(sourceFileRef: FileRef): void;
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
import { PasswordProtectOptions } from './option/protectpdf/password-protect-options';

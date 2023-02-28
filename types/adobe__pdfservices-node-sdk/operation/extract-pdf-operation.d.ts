/**
 * An Operation that extracts pdf elements such as text, images, tables in a structured format from a PDF.
 *
 * Sample Usage:
 * <pre class="prettyprint">
 * <code>
 *   try {
 *      const credentials = Credentials.serviceAccountCredentialsBuilder()
 *          .fromFile('pdfservices-api-credentials.json')
 *          .build();
 *      const clientConfig = ClientConfig.clientConfigBuilder().fromFile('pdfservices-api-client-config.json').build();
 *      const clientContext = ExecutionContext.create(credentials, clientConfig);
 *      const options = new ExtractPDF.options.ExtractPdfOptions.Builder()
 *          .addElementsToExtract(ExtractPDF.options.ExtractElementType.TEXT)
 *          .addElementsToExtractRenditions(ExtractPDF.options.ExtractRenditionsElementType.TABLES)
 *          .addCharInfo(true)
 *          .addTableStructureFormat(ExtractPDF.options.TableStructureType.CSV)
 *          .build();
 *      const extractPDFOperation = ExtractPDF.Operation.createNew();
 *      const input = FileRef.createFromLocalFile(
 *          'test/resources/extractPDFInput',
 *          ExtractPDF.SupportedSourceFormat.pdf,
 *      );
 *      extractPDFOperation.setInput(input);
 *      extractPDFOperation.setOptions(options);
 *      extractPDFOperation
 *          .execute(clientContext)
 *          .then(result => result.saveAsFile('output/extractPdf.zip'))
 *          .catch(err => {});
 *  } catch (err) {
 *      throw err;
 *  }
 * </code>
 * </pre>
 *
 */
export class ExtractPdfOperation {
    /**
     * Constructs a {@link ExtractPdfOperation} instance.
     */
    static createNew(): ExtractPdfOperation;
    static get SupportedSourceFormat(): PdfFormat;
    sourceFileRef: any;
    isInvoked: boolean;
    options: ExtractPdfOptions;
    /**
     * Sets an input file.
     */
    setInput(sourceFileRef: FileRef): void;
    /**
     * Sets the options for Extract PDF operation
     */
    setOptions(options: ExtractPdfOptions): void;
    /**
     * Executes this operation using the supplied context and returns a Promise which resolves to the operation result.
     *
     * The resulting file may be stored in the system temporary directory (per the os.tempdir(), symlinks are resolved
     * to the actual path).
     * See {@link FileRef} for how temporary resources are cleaned up.
     */
    execute(context: ExecutionContext): Promise<any>;
    validate(): void;
}
import { ExecutionContext, FileRef, PdfFormat } from '../pdfservices-sdk';
import { ExtractPdfOptions } from './option/extractpdf/extract-pdf-options';

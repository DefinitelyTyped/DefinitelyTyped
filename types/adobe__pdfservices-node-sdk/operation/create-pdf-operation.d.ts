import { ExecutionContext, FileRef } from '../pdfservices-sdk';
import { CreatePDFFromExcelOptions } from './option/createpdf/create-pdf-from-excel-options';
import { CreatePDFFromHtmlOptions } from './option/createpdf/create-pdf-from-html-options';
import { CreatePDFFromPPTOptions } from './option/createpdf/create-pdf-from-ppt-options';
import { CreatePDFFromWordOptions } from './option/createpdf/create-pdf-from-word-options';

/**
 * An operation that converts a non-PDF file to a PDF file. Some source formats may have associated conversion parameters
 * which can be set in the {@link CreatePDFOperation#setOptions} method.
 * <p>
 * The supported source media types are listed here. The object can be used to map file
 * extensions to their corresponding media types when creating FileRef instances for the source files.
 * <ul>
 * <li>application/msword</li>
 * <li>application/vnd.ms-excel</li>
 * <li>application/vnd.ms-powerpoint</li>
 * <li>application/vnd.openxmlformats-officedocument.presentationml.presentation</li>
 * <li>application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</li>
 * <li>application/vnd.openxmlformats-officedocument.wordprocessingml.document</li>
 * <li>application/zip (see "Special handling for HTML inputs" below) </li>
 * <li>image/bmp</li>
 * <li>image/gif</li>
 * <li>image/jpeg</li>
 * <li>image/png</li>
 * <li>image/tiff</li>
 * <li>text/html</li>
 * <li>text/plain</li>
 * <li>text/rtf</li>
 * </ul>
 *
 * <p>
 * <b>Special handling for HTML inputs:</b>
 * <p>
 * An HTML input can be provided either as a local zip archive or as a static HTML file with inline CSS. Alternatively, an HTML can also be specified via URL using {@link FileRef.createFromURL}.
 * <br>
 * While creating the corresponding FileRef instance, the media type must be:
 * <ul>
 * <li>"application/zip", if the input is a local zip archive.</li>
 * <li>"text/html", if the input is a static HTML file with inline CSS</li>
 * </ul>
 * <br>
 * In case the input is a local zip archive, it must have the following structure:
 * <ul>
 *
 * Sample layout:<br>
 *  <pre>
 *  &nbsp html_files.zip
 *  &nbsp |__index.html
 *  &nbsp |__referenced_file_1.css
 *  &nbsp |__referenced_file_2.jpeg
 *  &nbsp |__subfolder_1
 *  &nbsp |_____referenced_file_3.jpeg
 *  </pre>
 *
 * Sample Usage:
 * <pre class="prettyprint">
 * <code>
 *  const credentials = PDFServicesSdk.Credentials.serviceAccountCredentialsBuilder()
 *            .fromFile("pdfservices-api-credentials.json")
 *            .build(),
 *        executionContext = PDFServicesSdk.ExecutionContext.create(credentials),
 *        CreatePDF = PDFServicesSdk.CreatePDF,
 *        createPDFOperation = CreatePDF.Operation.createNew(),
 *        input = PDFServicesSdk.FileRef.createFromLocalFile('test/resources/createPDFInput.docx', CreatePDF.SupportedSourceFormat.docx);
 *
 *  createPDFOperation.setInput(input);
 *
 *  createPDFOperation.execute(executionContext)
 *      .then(result => result.saveAsFile('output/createPDF.pdf'))
 *      .catch(err => console.log(err));
 * </code>
 * </pre>
 *
 */
export class CreatePDFOperation {
    /**
     * Constructs a CreatePDFOperation instance.
     *
     */
    static createNew(): CreatePDFOperation;
    static get SupportedMediaTypes(): {
        /**
         * Represents "image/bmp" media type
         */
        bmp: string;
        /**
         * Represents "application/msword" media type
         */
        doc: string;
        /**
         * Represents "application/vnd.openxmlformats-officedocument.wordprocessingml.document" media type
         */
        docx: string;
        /**
         * Represents "image/gif" media type
         */
        gif: string;
        /**
         * Represents "text/html" media type
         */
        html: string;
        /**
         * Represents "image/jpeg" media type
         */
        jpeg: string;
        /**
         * Represents "image/jpeg" media type
         */
        jpg: string;
        /**
         * Represents "image/png" media type
         */
        png: string;
        /**
         * Represents "application/vnd.ms-powerpoint" media type
         */
        ppt: string;
        /**
         * Represents "application/vnd.openxmlformats-officedocument.presentationml.presentation" media type
         */
        pptx: string;
        /**
         * Represents "text/rtf" media type
         */
        rtf: string;
        /**
         * Represents "image/tiff" media type
         */
        tif: string;
        /**
         * Represents "image/tiff" media type
         */
        tiff: string;
        /**
         * Represents "text/plain" media type
         */
        txt: string;
        /**
         * Represents "application/vnd.ms-excel" media type
         */
        xls: string;
        /**
         * Represents "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" media type
         */
        xlsx: string;
        /**
         * Represents "application/zip" media type
         */
        zip: string;
    };
    static get SupportedSourceFormat(): {
        /**
         * Represents "image/bmp" media type
         */
        bmp: string;
        /**
         * Represents "application/msword" media type
         */
        doc: string;
        /**
         * Represents "application/vnd.openxmlformats-officedocument.wordprocessingml.document" media type
         */
        docx: string;
        /**
         * Represents "image/gif" media type
         */
        gif: string;
        /**
         * Represents "text/html" media type
         */
        html: string;
        /**
         * Represents "image/jpeg" media type
         */
        jpeg: string;
        /**
         * Represents "image/jpeg" media type
         */
        jpg: string;
        /**
         * Represents "image/png" media type
         */
        png: string;
        /**
         * Represents "application/vnd.ms-powerpoint" media type
         */
        ppt: string;
        /**
         * Represents "application/vnd.openxmlformats-officedocument.presentationml.presentation" media type
         */
        pptx: string;
        /**
         * Represents "text/rtf" media type
         */
        rtf: string;
        /**
         * Represents "image/tiff" media type
         */
        tif: string;
        /**
         * Represents "image/tiff" media type
         */
        tiff: string;
        /**
         * Represents "text/plain" media type
         */
        txt: string;
        /**
         * Represents "application/vnd.ms-excel" media type
         */
        xls: string;
        /**
         * Represents "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" media type
         */
        xlsx: string;
        /**
         * Represents "application/zip" media type
         */
        zip: string;
    };
    sourceFileRef: any;
    options: any;
    /**
     * Sets an input file.
     */
    setInput(sourceFileRef: FileRef): void;
    /**
     * Sets the conversion parameters for this operation.
     * on the source format of the file which is being converted to PDF. For example, for HTML to PDF conversions,
     * the type will be {@link CreatePDFFromHtmlOptions}. For other supported options, refer the <code>options</code> key.
     * in {@link module:PDFServicesSDK#CreatePDF}.
     */
    setOptions(
        options:
            | CreatePDFFromHtmlOptions
            | CreatePDFFromExcelOptions
            | CreatePDFFromPPTOptions
            | CreatePDFFromWordOptions,
    ): void;
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

import {
    Error,
    Credentials,
    ExecutionContext,
    ExportPDF,
    FileRef,
    CombineFiles,
    CompressPDF,
    CreatePDF,
    DeletePages,
    DocumentMerge,
    ExportPDFToImages,
    ProtectPDF,
    PageRanges,
    ClientConfig,
    ExtractPDF,
    InsertPages,
    LinearizePDF,
    OCR,
    PDFProperties,
    RemoveProtection,
    ReorderPages,
    ReplacePages,
    RotatePages,
    SplitPDF,
} from '@adobe/pdfservices-node-sdk';
import { DocumentMergeOptions } from '@adobe/pdfservices-node-sdk/operation/option/documentmerge/document-merge-options';

function combineFiles() {
    const credentials = Credentials.serviceAccountCredentialsBuilder()
        .fromFile('pdfservices-api-credentials.json')
        .build();
    const executionContext = ExecutionContext.create(credentials);
    const combineFilesOperation = CombineFiles.Operation.createNew();
    const input1 = FileRef.createFromLocalFile(
        'test/resources/combinePagesInput1.pdf',
        CombineFiles.SupportedSourceFormat.pdf,
    );
    const input2 = FileRef.createFromLocalFile(
        'test/resources/combinePagesInput1.pdf',
        CombineFiles.SupportedSourceFormat.pdf,
    );

    combineFilesOperation.addInput(input1);
    combineFilesOperation.addInput(input2);

    combineFilesOperation
        .execute(executionContext)
        .then(result => result.saveAsFile('output/CombinedPDF.pdf'))
        .catch(err => {});
}
function compressPDF() {
    const credentials = Credentials.serviceAccountCredentialsBuilder()
        .fromFile('pdfservices-api-credentials.json')
        .build();
    const executionContext = ExecutionContext.create(credentials);
    const compressPdfOperation = CompressPDF.Operation.createNew();
    const input = FileRef.createFromLocalFile(
        'test/resources/compressInput.pdf',
        CompressPDF.SupportedSourceFormat.pdf,
    );

    compressPdfOperation.setInput(input);

    compressPdfOperation
        .execute(executionContext)
        .then(result => result.saveAsFile('output/compressOutput.pdf'))
        .catch(err => {});
}
function createPDF() {
    const credentials = Credentials.serviceAccountCredentialsBuilder()
        .fromFile('pdfservices-api-credentials.json')
        .build();
    const executionContext = ExecutionContext.create(credentials);
    const createPDFOperation = CreatePDF.Operation.createNew();
    const input = FileRef.createFromLocalFile(
        'test/resources/createPDFInput.docx',
        CreatePDF.SupportedSourceFormat.docx,
    );

    createPDFOperation.setInput(input);

    createPDFOperation
        .execute(executionContext)
        .then(result => result.saveAsFile('output/createPDF.pdf'))
        .catch(err => {
            if (err instanceof Error.ServiceApiError || err instanceof Error.ServiceUsageError) {
            } else {
            }
        });
}

function deletePages() {
    const credentials = Credentials.serviceAccountCredentialsBuilder()
        .fromFile('pdfservices-api-credentials.json')
        .build();
    const executionContext = ExecutionContext.create(credentials);
    const deletePagesOperation = DeletePages.Operation.createNew();
    const pageRanges = new PageRanges();

    deletePagesOperation.setInput(
        FileRef.createFromLocalFile('~/Documents/deletePagesOperationInput.pdf', DeletePages.SupportedSourceFormat.pdf),
    );
    pageRanges.addSinglePage(1);
    deletePagesOperation.setPageRanges(pageRanges);

    deletePagesOperation
        .execute(executionContext)
        .then(result => result.saveAsFile('output/deletePagesOperationOutput.pdf'))
        .catch(err => {});
}

function documentMerge() {
    const credentials = Credentials.serviceAccountCredentialsBuilder()
        .fromFile('pdfservices-api-credentials.json')
        .build();
    const executionContext = ExecutionContext.create(credentials);
    const documentMergeOptions = DocumentMerge.options;
    const jsonDataForMerge = JSON.parse('{"customerName": "James", "customerVisits": 100}');
    const options = new DocumentMergeOptions(jsonDataForMerge, documentMergeOptions.OutputFormat.PDF);
    const documentMergeOperation = DocumentMerge.Operation.createNew(options);
    const input = FileRef.createFromLocalFile(
        '~/Documents/DocumentMergeOperationInput.docx',
        DocumentMerge.SupportedSourceFormat.docx,
    );

    documentMergeOperation.setInput(input);

    documentMergeOperation
        .execute(executionContext)
        .then(result => result.saveAsFile('output/DocumentMergeOperationOutput.pdf'))
        .catch(err => {});
}

function exportPDF() {
    const credentials = Credentials.serviceAccountCredentialsBuilder()
        .fromFile('pdfservices-api-credentials.json')
        .build();
    const executionContext = ExecutionContext.create(credentials);
    const exportPdfOperation = ExportPDF.Operation.createNew(ExportPDF.SupportedTargetFormats.DOCX);
    const input = FileRef.createFromLocalFile('test/resources/PDF.pdf', ExportPDF.SupportedSourceFormat.pdf);

    exportPdfOperation.setInput(input);

    exportPdfOperation
        .execute(executionContext)
        .then(result => result.saveAsFile('output/exportPdf.docx'))
        .catch(err => {});
}

function exportPdfToImages() {
    const credentials = Credentials.serviceAccountCredentialsBuilder()
        .fromFile('pdfservices-api-credentials.json')
        .build();
    const executionContext = ExecutionContext.create(credentials);
    const exportPDFToImages = ExportPDFToImages.Operation.createNew(ExportPDFToImages.SupportedTargetFormats.JPEG);
    const input = FileRef.createFromLocalFile('test/resources/PDF.pdf', ExportPDFToImages.SupportedSourceFormat.pdf);

    exportPDFToImages.setInput(input);

    exportPDFToImages
        .execute(executionContext)
        .then(result => {
            const saveFilesPromises = [];
            for (let i = 0; i < result.length; i++) {
                saveFilesPromises.push(result[i].saveAsFile(`output/exportPDFToJPEGOutput_${i}.jpeg`));
            }
            return Promise.all(saveFilesPromises);
        })
        .catch(err => {});
}

function extractPdf() {
    try {
        const credentials = Credentials.serviceAccountCredentialsBuilder()
            .fromFile('pdfservices-api-credentials.json')
            .build();

        const clientConfig = ClientConfig.clientConfigBuilder().fromFile('pdfservices-api-client-config.json').build();

        const clientContext = ExecutionContext.create(credentials, clientConfig);

        const options = new ExtractPDF.options.ExtractPdfOptions.Builder()
            .addElementsToExtract(ExtractPDF.options.ExtractElementType.TEXT)
            .addElementsToExtractRenditions(ExtractPDF.options.ExtractRenditionsElementType.TABLES)
            .addCharInfo(true)
            .addTableStructureFormat(ExtractPDF.options.TableStructureType.CSV)
            .build();

        const extractPDFOperation = ExtractPDF.Operation.createNew();
        const input = FileRef.createFromLocalFile(
            'test/resources/extractPDFInput',
            ExtractPDF.SupportedSourceFormat.pdf,
        );

        extractPDFOperation.setInput(input);
        extractPDFOperation.setOptions(options);

        extractPDFOperation
            .execute(clientContext)
            .then(result => result.saveAsFile('output/extractPdf.zip'))
            .catch(err => {});
    } catch (err) {
        throw err;
    }
}

function insertPages() {
    const credentials = Credentials.serviceAccountCredentialsBuilder()
        .fromFile('pdfservices-api-credentials.json')
        .build();
    const executionContext = ExecutionContext.create(credentials);
    const insertPagesOperation = InsertPages.Operation.createNew();

    insertPagesOperation.setBaseInput(
        FileRef.createFromLocalFile(
            '~/Documents/insertPagesOperationBaseInput.pdf',
            InsertPages.SupportedSourceFormat.pdf,
        ),
    );
    insertPagesOperation.addPagesToInsertAt(
        1,
        FileRef.createFromLocalFile(
            '~/Documents/insertPagesOperationFileToInsertInput.pdf',
            InsertPages.SupportedSourceFormat.pdf,
        ),
    );

    insertPagesOperation
        .execute(executionContext)
        .then(result => result.saveAsFile('output/insertPagesOperationOutput.pdf'))
        .catch(err => {});
}

function linearizePdf() {
    const credentials = Credentials.serviceAccountCredentialsBuilder()
        .fromFile('pdfservices-api-credentials.json')
        .build();
    const executionContext = ExecutionContext.create(credentials);
    const linearizePdfOperation = LinearizePDF.Operation.createNew();
    const input = FileRef.createFromLocalFile(
        'test/resources/linearizeInput.pdf',
        LinearizePDF.SupportedSourceFormat.pdf,
    );

    linearizePdfOperation.setInput(input);

    linearizePdfOperation
        .execute(executionContext)
        .then(result => result.saveAsFile('output/linearizeOutput.pdf'))
        .catch(err => {});
}
function ocr() {
    const credentials = Credentials.serviceAccountCredentialsBuilder()
        .fromFile('pdfservices-api-credentials.json')
        .build();
    const executionContext = ExecutionContext.create(credentials);
    const ocrOperation = OCR.Operation.createNew();
    const input = FileRef.createFromLocalFile('test/resources/ocrInput.pdf', OCR.SupportedSourceFormat.pdf);

    ocrOperation.setInput(input);

    ocrOperation
        .execute(executionContext)
        .then(result => result.saveAsFile('output/ocrOutput.pdf'))
        .catch(err => {});
}

function pdfProperties() {
    const credentials = Credentials.serviceAccountCredentialsBuilder()
        .fromFile('pdfservices-api-credentials.json')
        .build();
    const clientContext = ExecutionContext.create(credentials);
    const pdfPropertiesOperation = PDFProperties.Operation.createNew();
    const input = FileRef.createFromLocalFile(
        'test/resources/PDFPropertiesOperationInput.pdf',
        PDFProperties.SupportedSourceFormat.pdf,
    );

    pdfPropertiesOperation.setInput(input);

    pdfPropertiesOperation
        .execute(clientContext)
        .then(result => {})
        .catch(err => {});
}

async function protectPDF() {
    const credentials = Credentials.serviceAccountCredentialsBuilder()
        .fromFile('pdfservices-api-credentials.json')
        .build();
    const executionContext = ExecutionContext.create(credentials);
    const protectPDFOptions = ProtectPDF.options;
    const permissions = protectPDFOptions.Permissions.createNew();

    permissions.addPermission(protectPDFOptions.Permission.PRINT_LOW_QUALITY);
    permissions.addPermission(protectPDFOptions.Permission.EDIT_DOCUMENT_ASSEMBLY);
    permissions.addPermission(protectPDFOptions.Permission.COPY_CONTENT);

    const options = new protectPDFOptions.PasswordProtectOptions.Builder()
        .setUserPassword('openpassword')
        .setOwnerPassword('permissionspassword')
        .setPermissions(permissions)
        .setEncryptionAlgorithm(protectPDFOptions.EncryptionAlgorithm.AES_256)
        .setContentEncryption(protectPDFOptions.ContentEncryption.ALL_CONTENT_EXCEPT_METADATA)
        .build();
    const protectPDFOperation = ProtectPDF.Operation.createNew(options);
    const input = FileRef.createFromLocalFile('~/Documents/protectPDFInput.pdf', ProtectPDF.SupportedSourceFormat.pdf);

    protectPDFOperation.setInput(input);

    protectPDFOperation
        .execute(executionContext)
        .then(result => result.saveAsFile('output/protectPDFOutput.pdf'))
        .catch(err => {});
}

function removeProtection() {
    const credentials = Credentials.serviceAccountCredentialsBuilder()
        .fromFile('pdfservices-api-credentials.json')
        .build();
    const executionContext = ExecutionContext.create(credentials);
    const removeProtectionOperation = RemoveProtection.Operation.createNew();
    const input = FileRef.createFromLocalFile(
        '~/Documents/removeProtectionInput.pdf',
        RemoveProtection.SupportedSourceFormat.pdf,
    );

    removeProtectionOperation.setInput(input);
    removeProtectionOperation.setPassword('password');

    removeProtectionOperation
        .execute(executionContext)
        .then(result => result.saveAsFile('output/removeProtectionOutput.pdf'))
        .catch(err => {});
}

function reorderPage() {
    const credentials = Credentials.serviceAccountCredentialsBuilder()
        .fromFile('pdfservices-api-credentials.json')
        .build();
    const executionContext = ExecutionContext.create(credentials);
    const reorderPagesOperation = ReorderPages.Operation.createNew();
    const pageRanges = new PageRanges();

    reorderPagesOperation.setInput(
        FileRef.createFromLocalFile(
            '~/Documents/reorderPagesOperationInput.pdf',
            ReorderPages.SupportedSourceFormat.pdf,
        ),
    );
    pageRanges.addSinglePage(3);
    pageRanges.addPageRange(1, 2);
    reorderPagesOperation.setPagesOrder(pageRanges);

    reorderPagesOperation
        .execute(executionContext)
        .then(result => result.saveAsFile('output/reorderPagesOperationOutput.pdf'))
        .catch(err => {});
}

function replacePages() {
    const credentials = Credentials.serviceAccountCredentialsBuilder()
        .fromFile('pdfservices-api-credentials.json')
        .build();
    const executionContext = ExecutionContext.create(credentials);
    const replacePagesOperation = ReplacePages.Operation.createNew();

    replacePagesOperation.setBaseInput(
        FileRef.createFromLocalFile(
            '~/Documents/replacePagesOperationBaseInput.pdf',
            ReplacePages.SupportedSourceFormat.pdf,
        ),
    );
    replacePagesOperation.addPagesForReplace(
        1,
        FileRef.createFromLocalFile(
            '~/Documents/replacePagesOperationFileToBeReplacedWithInput.pdf',
            ReplacePages.SupportedSourceFormat.pdf,
        ),
    );

    replacePagesOperation
        .execute(executionContext)
        .then(result => result.saveAsFile('output/replacePagesOperationOutput.pdf'))
        .catch(err => {});
}

function rotatePages() {
    const credentials = Credentials.serviceAccountCredentialsBuilder()
        .fromFile('pdfservices-api-credentials.json')
        .build();
    const executionContext = ExecutionContext.create(credentials);
    const rotatePagesOperation = RotatePages.Operation.createNew();

    rotatePagesOperation.setInput(
        FileRef.createFromLocalFile('~/Documents/rotatePagesOperationInput.pdf', RotatePages.SupportedSourceFormat.pdf),
    );
    rotatePagesOperation.setAngleToRotatePagesBy(RotatePages.Angle._90);

    rotatePagesOperation
        .execute(executionContext)
        .then(result => result.saveAsFile('output/rotatePagesOperationOutput.pdf'))
        .catch(err => {});
}

function spitPages() {
    const credentials = Credentials.serviceAccountCredentialsBuilder()
        .fromFile('pdfservices-api-credentials.json')
        .build();
    const executionContext = ExecutionContext.create(credentials);
    const splitPDFOperation = SplitPDF.Operation.createNew();

    splitPDFOperation.setInput(
        FileRef.createFromLocalFile('~/Documents/splitPDFInput.pdf', SplitPDF.SupportedSourceFormat.pdf),
    );
    splitPDFOperation.setPageCount(2);

    splitPDFOperation
        .execute(executionContext)
        .then(result => {
            const saveFilesPromises = [];
            for (let i = 0; i < result.length; i++) {
                saveFilesPromises.push(result[i].saveAsFile(`output/splitPDFOutput_${i}.pdf`));
            }
            return Promise.all(saveFilesPromises);
        })
        .catch(err => {});
}

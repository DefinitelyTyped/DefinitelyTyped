/*!
* Product: Dynamsoft Web Twain
* Web Site: http://www.dynamsoft.com
*
* Copyright 2019, Dynamsoft Corporation
* Author: Dynamsoft Support Team
*/

interface Redaction {
    FindText: string;
    FindTextFlags: EnumDWT_OCRFindTextFlags.OCRFT_WHOLEWORD;
    FindTextAction: EnumDWT_OCRFindTextAction.OCRFT_MARKFORREDACT;
}

interface OCRZone {
    left: number;
    top: number;
    right: number;
    bottom: number;
}

interface OCRReadPara {
    STWAIN: WebTwain;
    AjaxFunctionUrl: string;
    FunctionName: string;
    ImageIndex: number;
    FileNames: string;
    Type: string;
    AryZone: number[];
    JsonString: string;
    OnSuccess(): void;
    OnFailure(): void;
}

interface OCRError {
    responseText: string;
    errorString: string;
}

interface Settings {
    RecognitionModule: string;
    Languages: string;
    OutputFormat: EnumDWT_OCRProOutputFormat;
    PDFVersion: EnumDWT_OCRProPDFVersion;
    PDFAVersion: EnumDWT_OCRProPDFAVersion;
    LicenseChecker: string;
    Redaction: Redaction;
}

interface DynamsoftLib {
    NewRedaction(): Redaction;
    NewOCRReadPara(): OCRReadPara;
    NewOCRZone(): OCRZone;
}

declare enum EnumDWT_OCRFindTextFlags {
    OCRFT_WHOLEWORD = 1,
    OCRFT_MATCHCASE = 2,
    OCRFT_FUZZYMATCH = 4
}
declare enum EnumDWT_OCRFindTextAction {
    OCRFT_HIGHLIGHT = 0,
    OCRFT_STRIKEOUT = 1,
    OCRFT_MARKFORREDACT = 2
}

declare enum EnumDWT_OCRProOutputFormat {
    OCRPFT_IOTPDF = "IOTPDF",
    OCRPFT_IOTPDF_MRC = "IOTPDF_MRC",
    OCRPFT_TXTCSV = "TXTCSV",
    OCRPFT_TXTF = "TXTF",
    OCRPFT_TXTS = "TXTS",
    OCRPFT_XML = "XML"
}

declare enum EnumDWT_OCRProPDFAVersion {
    OCRPPDFAV_1A = "pdf/a-1a",
    OCRPPDFAV_1B = "pdf/a-1b",
    OCRPPDFAV_2A = "pdf/a-2a",
    OCRPPDFAV_2B = "pdf/a-2b",
    OCRPPDFAV_2U = "pdf/a-2u",
    OCRPPDFAV_3A = "pdf/a-3a",
    OCRPPDFAV_3B = "pdf/a-3b",
    OCRPPDFAV_3U = "pdf/a-3u"
}

declare enum EnumDWT_OCRProPDFVersion {
    OCRPPDFV_0 = "1.0",
    OCRPPDFV_1 = "1.1",
    OCRPPDFV_2 = "1.2",
    OCRPPDFV_3 = "1.3",
    OCRPPDFV_4 = "1.4",
    OCRPPDFV_5 = "1.5",
    OCRPPDFV_6 = "1.6",
    OCRPPDFV_7 = "1.7"
}

declare enum EnumDWT_OCRProRecognitionModule {
    OCRPM_AUTO = "AUTO",
    OCRPM_MOSTACCURATE = "MOSTACCURATE",
    OCRPM_BALANCED = "BALANCED",
    OCRPM_FASTEST = "FASTEST"
}

declare enum EnumDWT_OCRProType {
    OCRDT_File = 0,
    OCRDT_Index = 1
}

interface OCRPro {
    /**
     * Returns whether OCR Pro addon is installed
     * @return {boolean}
     */
    IsModuleInstalled(): boolean;

    /**
     *  Downloads and installs the ocr add-on on the local system. 
     * @param {string} remoteFile specifies the URL to download a ZIP which contains the OCR Pro addon
     * @param {function} optionalAsyncSuccessFunc optional. The function to call when the download succeeds. Please refer to the function prototype OnSuccess.
     * @param {function} optionalAsyncFailureFunc optional. The function to call when the download fails. Please refer to the function prototype OnFailure.
     * @return {void}
     */
    Download(remoteFile: string, optionalAsyncSuccessFunc?: () => void, optionalAsyncFailureFunc?: () => void): void;

    /**
     *  Performs OCR on a given image. 
     * @param {number} sImageIndex Specifies the index of the image.
     * @param {function} AsyncSuccessFunc  The function to call when OCR operation succeeds. Please refer to the function prototype OnOCRSuccess.
     * @param {function} AsyncFailureFunc  The function to call when OCR operation fails. Please refer to the function prototype OnOCRFailure.
     * @return {void}
     */
    Recognize(sImageIndex: number, optionalAsyncSuccessFunc?: () => void, optionalAsyncFailureFunc?: () => void): void;

    /**
     *   Performs OCR on one or multiple specified local file(s) directly.
     * @param {string} fileNames Specifies the local paths of the target files. If multiple files are given, they should be separated by the '|' character.
     * @param {function} AsyncSuccessFunc  The function to call when OCR operation succeeds. Please refer to the function prototype OnOCRSuccess.
     * @param {function} AsyncFailureFunc  The function to call when OCR operation fails. Please refer to the function prototype OnOCRFailure.
     * @return {void}
     */
    RecognizeFile(fileNames: string, optionalAsyncSuccessFunc?: () => void, optionalAsyncFailureFunc?: () => void): void;

    /**
     *  Peforms OCR on the given rectangle on a specified image. 
     * @param {number} sImageIndex Specifies the index of the image.
     * @param {number[]} aryZone specifies the coordinates of the rectangle.
     * @param {function} AsyncSuccessFunc  The function to call when OCR operation succeeds. Please refer to the function prototype OnOCRSuccess.
     * @param {function} AsyncFailureFunc  The function to call when OCR operation fails. Please refer to the function prototype OnOCRFailure.
     * @return {void}
     */
    RecognizeRect(sImageIndex: number, aryZone: number[], optionalAsyncSuccessFunc?: () => void, optionalAsyncFailureFunc?: () => void): void;

    /**
     *   Performs OCR on the currently selected images in the buffer.
     * @param {function} AsyncSuccessFunc  The function to call when OCR operation succeeds. Please refer to the function prototype OnOCRSuccess.
     * @param {function} AsyncFailureFunc  The function to call when OCR operation fails. Please refer to the function prototype OnOCRFailure.
     * @return {void}
     */
    RecognizeSelectedImages(optionalAsyncSuccessFunc?: () => void, optionalAsyncFailureFunc?: () => void): void;
    
    NewOCRError(): OCRError;
    NewOCRReadPara(): OCRReadPara;
    NewOCRZone(): OCRZone;
    NewSettings(): Settings;
}

interface DynamsoftWebTwainAddon {
    OCRPro: OCRPro;
}

import { DynamsoftEnums as Dynamsoft } from "./Dynamsoft.Enum";

export interface OCRPro {
    /**
     * Download and install the OCR Professional add-on on the local system.
     * @param path The URL to download the add-on (typically a ZIP file).
     * @param successCallback A callback function that is executed if the request succeeds.
     * @param failureCallback A callback function that is executed if the request fails.
     * @argument errorCode The error code.
     * @argument errorString The error string.
     */
    Download(
        path: string,
        successCallback: () => void,
        failureCallback: (
            errorCode: number,
            errorString: string
        ) => void
    ): void;
    /**
     * Return whether the OCR Professional engine has been installed.
     */
    IsModuleInstalled(): boolean;
    /**
     * Perform OCR on the specified image in the buffer.
     * @param index Specify the image.
     * @param successCallback A callback function that is executed if the request succeeds.
     * @param failureCallback A callback function that is executed if the request fails.
     * @argument imageId The imageId of the image which can be used to find the index.
     * @argument result The OCR result.
     * @argument errorCode The error code.
     * @argument errorString The error string.
     */
    Recognize(
        index: number,
        successCallback: (
            imageId: number,
            result: OCRProResult
        ) => void,
        failureCallback: (
            errorCode: number,
            errorString: string
        ) => void
    ): void;
    /**
     * Perform OCR on the specified local file.
     * @param path Specify a local file.
     * @param successCallback A callback function that is executed if the request succeeds.
     * @param failureCallback A callback function that is executed if the request fails.
     * @argument path The file path.
     * @argument result The OCR result.
     * @argument errorCode The error code.
     * @argument errorString The error string.
     */
    RecognizeFile(path: string,
        successCallback: (
            path: string,
            result: OCRProResult
        ) => void,
        failureCallback: (
            errorCode: number,
            errorString: string
        ) => void
    ): void;
    /**
     * Perform OCR on the specified rectangular area(s) on the image.
     * @param index Specify the image.
     * @param aryRects Specify the rectangle(s).
     * @param successCallback A callback function that is executed if the request succeeds.
     * @param failureCallback A callback function that is executed if the request fails.
     * @argument imageId The imageId of the image which can be used to find the index.
     * @argument result The OCR result.
     * @argument errorCode The error code.
     * @argument errorString The error string.
     */
    RecognizeRect(
        index: number,
        aryRects: Rect[],
        successCallback: (
            imageId: number,
            aryRects: Rect[],
            result: OCRProResult
        ) => void,
        failureCallback: (
            errorCode: number,
            errorString: string
        ) => void
    ): void;
    /**
     * Perform OCR on the selected images in the buffer.
     * @param index Specify the image.
     * @param successCallback A callback function that is executed if the request succeeds.
     * @param failureCallback A callback function that is executed if the request fails.
     * @argument result The OCR result.
     * @argument errorCode The error code.
     * @argument errorString The error string.
     */
    RecognizeSelectedImages(
        successCallback: (
            result: OCRProResult
        ) => void,
        failureCallback: (
            errorCode: number,
            errorString: string
        ) => void
    ): void;
    /**
     * Return or set the current settings of the OCR engine.
     */
    Settings: Settings | boolean | null;
}
export interface Rect {
    left: number;
    right: number;
    top: number;
    bottom: number;
}
export interface OCRProResult {
    /**
     * Return a base64 string that contains the result of the OCR.
     */
    Get(): string;
    /**
     * Return the error code.
     */
    GetErrorCode(): number;
    /**
     * Return an array which contains detailed error information for each page that was OCR'd
     */
    GetErrorDetailList(): Error[];
    /**
     * Return the error string.
     */
    GetErrorString(): string;
    /**
     * Return the source information. It could be the index of the OCR'd image or the path of the OCR'd file.
     */
    GetInput(): number | string;
    /**
     * Return the number of pages already OCR'd on the machine.
     */
    GetAlreadyOCRCount(): string;
    /**
     * Return the number of pages allowed by the current license.
     */
    GetOCRTotalCount(): string;
    /**
     * Return the number of pages in the OCR result.
     */
    GetPageCount(): string;
    /**
     * Return the content of a page.
     * @param index Specify the page
     */
    GetPageContent(index: number): Page;
    /**
     * Save the OCR result as a file.
     * @param path The path to save the file.
     */
    Save(path: string): boolean;
}
export interface Error {
    /**
     * Return the index of the image or path of the file.
     */
    GetInput(): number | string;
    /**
     * Return the error message.
     */
    GetMessage(): string;
    /**
     * Return the number of the page on which the error was thrown.
     * If the input is a file, this returns the index of the page in that file.
     * If the input is an image in the buffer, this always returns 0.
     */
    GetPage(): number;
}
export interface Page {
    /**
     * Return the number of letters in the page.
     */
    GetLetterCount(): number;
    /**
     * Return the content of the specified letter.
     * @index Specify the letter.
     */
    GetLetterContent(index: number): Letter;
    /**
     * Return the number of recognized rectangles in the page.
     */
    GetZoneCount(): number;
    /**
     * Return the base64-encoded content of the specified rectangle.
     * @index Specify the line.
     */
    GetZoneContent(index: number): string;
}
export interface Letter {
    /**
     * Return the text of the letter.
     */
    GetText(): number;
    /**
     * Return the coordinates for the rectangle that contains the specified letter. The coordinates are in the sequence of "left,top,right,bottom" like "121,125,123,143".
     */
    GetLetterRect(): string;
}
export interface Settings {
    /**
     * Specify the target language.
     */
    Languages: string;
    /**
     * Specify the URL for the license checker.
     */
    LicenseChecker: string;
    /**
     * Specify the output format.
     */
    OutputFormat: Dynamsoft.EnumDWT_OCRProOutputFormat | string;
    /**
     * Specify the PDF/A version.
     */
    PDFAVersion: Dynamsoft.EnumDWT_OCRProPDFAVersion | string;
    /**
     * Specify the PDF version.
     */
    PDFVersion: Dynamsoft.EnumDWT_OCRProPDFVersion | string;
    /**
     * Specify the recognition module.
     */
    RecognitionModule: Dynamsoft.EnumDWT_OCRProRecognitionModule | string;
    /**
     * Configure the redaction.
     */
    Redaction: Redaction;
}
export interface Redaction {
    /**
     * Specify the text to redact.
     */
    FindText: string;
    /**
     * Specify how the text is found.
     */
    FindTextFlags: Dynamsoft.EnumDWT_OCRFindTextFlags | number;
    /**
     * Specify how redaction is done.
     */
    FindTextAction: Dynamsoft.EnumDWT_OCRFindTextAction | number;
}

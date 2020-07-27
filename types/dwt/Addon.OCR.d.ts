import { DynamsoftEnums as Dynamsoft } from "./Dynamsoft.Enum";

export interface OCR {
    /**
     * Download and install the OCR add-on on the local system.
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
     * Return whether the OCR engine has been installed.
     */
    IsModuleInstalled(): boolean;
    /**
     * Download and install an OCR language package.
     * @param path The URL to download the package (typically a ZIP file).
     * @param successCallback A callback function that is executed if the request succeeds.
     * @param failureCallback A callback function that is executed if the request fails.
     * @argument errorCode The error code.
     * @argument errorString The error string.
     */
    DownloadLangData(
        path: string,
        successCallback: () => void,
        failureCallback: (
            errorCode: number,
            errorString: string
        ) => void
    ): void;
    /**
     * Return whether the output uses the fonts detected by the OCR system or the default/provided ones. Only valid when the result format is PDF.
     */
    GetIfUseDetectedFont(): boolean;
    /**
     * Set whether the output uses the fonts detected by the OCR system or the default/provided ones. Only valid when the result format is PDF.
     * @param value Whether to use or not the detected font.
     */
    SetIfUseDetectedFont(value: boolean): boolean;
    /**
     * Return the font size base to apply higher-level regional accurate OCR.
     */
    GetMinFontSizeforMoreAccurateResult(): number;
    /**
     * Set the font size base to apply higher-level regional accurate OCR.
     * @param size Specify the size.
     */
    SetMinFontSizeforMoreAccurateResult(size: number): number;
    /**
     * Return the font name for OCR. Only valid when the output format is PDF.
     */
    GetUnicodeFontName(): string;
    /**
     * Set the font name for OCR. Only valid when the output format is PDF.
     * @param name Specify a font to be used for the OCR.
     */
    SetUnicodeFontName(name: string): boolean;
    /**
     * Configure the OCR operation.
     * @param language Specify the target language.
     */
    SetLanguage(language: Dynamsoft.EnumDWT_OCRLanguage | string): boolean;
    /**
     * Configure the OCR operation.
     * @param format Specify the output format.
     */
    SetOutputFormat(format: Dynamsoft.EnumDWT_OCROutputFormat | number): boolean;
    /**
     * Configure the OCR operation.
     * @param mode Specify the OCR page layout analysis mode.
     */
    SetPageSetMode(mode: Dynamsoft.EnumDWT_OCRPageSetMode | number): boolean;
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
            result: OCRResult
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
            result: OCRResult
        ) => void,
        failureCallback: (
            errorCode: number,
            errorString: string
        ) => void
    ): void;
    /**
     * Perform OCR on the specified rectangular area on the image.
     * @param index Specify the image.
     * @param left Specify the rectangle (leftmost coordinate).
     * @param top Specify the rectangle (topmost coordinate).
     * @param right Specify the rectangle (rightmost coordinate).
     * @param bottom Specify the rectangle (bottommost coordinate).
     * @param successCallback A callback function that is executed if the request succeeds.
     * @param failureCallback A callback function that is executed if the request fails.
     * @argument imageId The imageId of the image which can be used to find the index.
     * @argument result The OCR result.
     * @argument errorCode The error code.
     * @argument errorString The error string.
     */
    RecognizeRect(
        index: number,
        left: number,
        top: number,
        right: number,
        bottom: number,
        successCallback: (
            imageId: number,
            left: number,
            top: number,
            right: number,
            bottom: number,
            result: OCRResult
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
            result: OCRResult
        ) => void,
        failureCallback: (
            errorCode: number,
            errorString: string
        ) => void
    ): void;
}
export interface OCRResult {
    /**
     * Return a base64 string that contains the result of the OCR.
     * Newlines are represented by the newline character: '\n'.
     */
    Get(): string;
    /**
     * Return the error code.
     */
    GetErrorCode(): number;
    /**
     * Return the error string.
     */
    GetErrorString(): string;
    /**
     * Return the output format.
     */
    GetFormat(): number;
    /**
     * Return the source information. It could be the index of the OCR'd image or the path of the OCR'd file.
     */
    GetInput(): number | string;
    /**
     * Save the OCR result as a file.
     * @param path The path to save the file.
     */
    Save(path: string): boolean;
    /**
     * Return the number of pagesets in the OCR result.
     */
    GetPageSetCount(): number;
    /**
     * Return the content of a pageset.
     * @param index Specify the pageset
     */
    GetPageSetContent(index: number): PageSet;
}
export interface PageSet {
    /**
     * Return the number of pages in the pageset.
     */
    GetPageCount(): number;
    /**
     * Return the content of the specified page.
     * @index Specify the page.
     */
    GetPageContent(index: number): Page;
}
export interface Page {
    /**
     * Return the number of lines in the page.
     */
    GetLineCount(): number;
    /**
     * Return the content of the specified line.
     * @index Specify the line.
     */
    GetLineContent(index: number): Line;
}
export interface Line {
    /**
     * Return the number of words in the line.
     */
    GetWordCount(): number;
    /**
     * Return the coordinates for the rectangle that contains the specified line. The coordinates are in the sequence of "left,top,right,bottom" like "121,125,892,143".
     */
    GetLineRect(): string;
    /**
     * Return the content of the specified word.
     * @index Specify the word.
     */
    GetWordContent(index: number): Word;
}
export interface Word {
    /**
     * Return the font name/size of the word.
     */
    GetFontName(): string;
    GetFontSize(): number;
    /**
     * Return the text of the word.
     */
    GetText(): string;
    /**
     * Return the coordinates for the rectangle that contains the specified word. The coordinates are in the sequence of "left,top,right,bottom" like "121,126,157,139".
     * @index Specify the word.
     */
    GetWordRect(index: number): string;
}

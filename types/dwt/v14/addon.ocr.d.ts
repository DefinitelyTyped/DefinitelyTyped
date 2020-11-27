/*!
* Product: Dynamsoft Web Twain
* Web Site: http://www.dynamsoft.com
*
* Copyright 2019, Dynamsoft Corporation
* Author: Dynamsoft Support Team
*/

declare enum EnumDWT_OCRLanguage {
    OCRL_ENG = "eng",
    OCRL_ARA = "ara",
    OCRL_CHI_SIM = "chi_sim",
    OCRL_CHI_TRA = "chi_tra",
    OCRL_HIN = "hin",
    OCRL_URD = "urd",
    OCRL_SPA = "spa",
    OCRL_FRA = "fra",
    OCRL_MSA = "msa",
    OCRL_IND = "ind",
    OCRL_RUS = "rus",
    OCRL_BEN = "ben",
    OCRL_POR = "por",
    OCRL_PAN = "pan",
    OCRL_DEU = "deu",
    OCRL_JPN = "jpn",
    OCRL_FAS = "fas",
    OCRL_SWA = "swa",
    OCRL_JAV = "jav",
    OCRL_TEL = "tel",
    OCRL_TUR = "tur",
    OCRL_KOR = "kor",
    OCRL_MAR = "mar",
    OCRL_TAM = "tam",
    OCRL_VIE = "vie",
    OCRL_ITA = "ita",
    OCRL_THA = "tha"
}

declare enum EnumDWT_OCRPageSetMode {
    OCRPSM_OSD_ONLY = 0,
    PSM_AUTO_OSD = 1,
    PSM_AUTO_ONLY = 2,
    PSM_AUTO = 3,
    PSM_SINGLE_COLUMN = 4,
    PSM_SINGLE_BLOCK_VERT_TEXT = 5,
    PSM_SINGLE_BLOCK = 6,
    PSM_SINGLE_LINE = 7,
    PSM_SINGLE_WORD = 8,
    PSM_CIRCLE_WORD = 9,
    PSM_SINGLE_CHAR = 10
}

declare enum EnumDWT_OCROutputFormat {
    OCROF_TEXT = 0,
    OCROF_PDFPLAINTEXT = 1,
    OCROF_PDFIMAGEOVERTEXT = 2,
    OCROF_PDFPLAINTEXT_PDFX = 3,
    OCROF_PDFIMAGEOVERTEXT_PDFX = 4
}

/**
 * @class
 */
interface OCR {
    /**
     *  Downloads and installs the ocr add-on on the local system. 
     * @method Dynamsoft.WebTwain#Download 
     * @param {string} remoteFile specifies the value of which frame to get.
     * @param {function} optionalAsyncSuccessFunc optional. The function to call when the download succeeds. Please refer to the function prototype OnSuccess.
     * @param {function} optionalAsyncFailureFunc optional. The function to call when the download fails. Please refer to the function prototype OnFailure.
     * @return {boolean}
     */
    Download(remoteFile: string, optionalAsyncSuccessFunc?: () => void, optionalAsyncFailureFunc?: () => void): void;

    /**
     *  Downloads and deploys the OCR language package on the local system. 
     * @method Dynamsoft.WebTwain#DownloadLangData 
     * @param {string} remoteFile specifies the value of which frame to get.
     * @param {function} optionalAsyncSuccessFunc optional. The function to call when the download succeeds. Please refer to the function prototype OnSuccess.
     * @param {function} optionalAsyncFailureFunc optional. The function to call when the download fails. Please refer to the function prototype OnFailure.
     * @return {boolean}
     */
    DownloadLangData(remoteFile: string, optionalAsyncSuccessFunc?: () => void, optionalAsyncFailureFunc?: () => void): void;

    /**
     *  Performs OCR on a given image. 
     * @method Dynamsoft.WebTwain#Read 
     * @param {number} sImageIndex Specifies the index of the image.
     * @param {function} AsyncSuccessFunc  The function to call when OCR operation succeeds. Please refer to the function prototype OnOCRSuccess.
     * @param {function} AsyncFailureFunc  The function to call when OCR operation fails. Please refer to the function prototype OnOCRFailure.
     * @return {boolean}
     */
    Recognize(sImageIndex: number, optionalAsyncSuccessFunc?: () => void, optionalAsyncFailureFunc?: () => void): void;

    /**
     *  Peforms OCR on the given rectangle on a specified image. 
     * @method Dynamsoft.WebTwain#ReadRect 
     * @param {number} sImageIndex Specifies the index of the image.
     * @param {number} left specifies the x-coordinate of the upper-left corner of the rectangle.
     * @param {number} top specifies the y-coordinate of the upper-left corner of the rectangle.
     * @param {number} right specifies the x-coordinate of the lower-right corner of the rectangle.
     * @param {number} bottom specifies the y-coordinate of the lower-right corner of the rectangle.
     * @param {function} AsyncSuccessFunc  The function to call when OCR operation succeeds. Please refer to the function prototype OnOCRSuccess.
     * @param {function} AsyncFailureFunc  The function to call when OCR operation fails. Please refer to the function prototype OnOCRFailure.
     * @return {boolean}
     */
    RecognizeRect(sImageIndex: number, left: number, top: number, right: number, bottom: number, optionalAsyncSuccessFunc?: () => void, optionalAsyncFailureFunc?: () => void): void;

    /**
     *   Performs OCR on one or multiple specified local file(s) directly.
     * @method Dynamsoft.WebTwain#Read 
     * @param {string} fileNames Specifies the local paths of the target files. If multiple files are given, they should be separated by the '|' character.
     * @param {function} AsyncSuccessFunc  The function to call when OCR operation succeeds. Please refer to the function prototype OnOCRSuccess.
     * @param {function} AsyncFailureFunc  The function to call when OCR operation fails. Please refer to the function prototype OnOCRFailure.
     * @return {boolean}
     */
    RecognizeFile(fileNames: string, optionalAsyncSuccessFunc?: () => void, optionalAsyncFailureFunc?: () => void): void;

    /**
     *   Performs OCR on the currently selected images in the buffer.
     * @method Dynamsoft.WebTwain#Read 
     * @param {function} AsyncSuccessFunc  The function to call when OCR operation succeeds. Please refer to the function prototype OnOCRSuccess.
     * @param {function} AsyncFailureFunc  The function to call when OCR operation fails. Please refer to the function prototype OnOCRFailure.
     * @return {boolean}
     */
    RecognizeSelectedImages(optionalAsyncSuccessFunc?: () => void, optionalAsyncFailureFunc?: () => void): void;

    /**
     *  Specifies a font to be used by OCR when Addon.OCR.SetIfUseDetectedFont is set to false.  
     * @method Dynamsoft.WebTwain#SetUnicodeFontName 
     * @param {string} name Specifies a font to be used by 
     * @return {boolean}
     */
    SetUnicodeFontName(name: string): void;

    /**
     *  Returns the detected OCR font name. 
     * @method Dynamsoft.WebTwain#GetUnicodeFontName 
     * @return {string} Returns the detected OCR font name.
     */
    GetUnicodeFontName(): void;

    /**
     *  Determines whether PDF output should use the fonts detected by the OCR system, or the default/provided fonts instead.
     * @method Dynamsoft.WebTwain#SetIfUseDetectedFont 
     * @param {boolean} bValue By default this is true, indicating detected fonts should be used. The detected fonts must exist on the user's system for this to be successful.
     * @return {boolean}
     */
    SetIfUseDetectedFont(bValue: boolean): void;

    /**
     *  Returns whether PDF output should use the fonts detected by the OCR system, or the default/provided fonts instead.
     * @method Dynamsoft.WebTwain#GetIfUseDetectedFont 
     * @return {boolean} Returns whether PDF output should use the fonts detected by the OCR system, or the default/provided fonts instead.
     */
    GetIfUseDetectedFont(): void;

    /**
     *  Applies higher-level accuracy of OCR to the area of the image where the font size is bigger than the value set here.
     * @method Dynamsoft.WebTwain#SetIfUseDetectedFont 
     * @param {number} nValue Specifies the font size base to apply the higher-level accracy OCR. The default value is 0 which means no regional accurate OCR is performed.
     * @return {boolean}
     */
    SetMinFontSizeforMoreAccurateResult(nValue: number): void;

    /**
     *  Returns the font size base to apply higher-level regional accarate OCR which is set through Addon.OCR.SetMinFontSizeforMoreAccurateResult.
     * @method Dynamsoft.WebTwain#GetMinFontSizeforMoreAccurateResult 
     * @return {boolean} Returns the font size base to apply higher-level regional accarate OCR. If the return value is 0, it indicates no regional accurate OCR is performed.
     */
    GetMinFontSizeforMoreAccurateResult(): void;

    /**
     *  Sets the target language for OCR operations.
     * @method Dynamsoft.WebTwain#SetLanguage 
     * @param {string} value Specifies the target language for OCR operation.
     * @return {boolean}
     */
    SetLanguage(value: string): void;

    /**
     *  Sets the mode for OCR page layout analysis. Determines how pages are determined when processing OCR.
     * @method Dynamsoft.WebTwain#SetPageSetMode 
     * @param {EnumDWT_OCRPageSetMode} value Specifies the OCR Page layout analysis mode. 
     * @return {boolean}
     */
    SetPageSetMode(value: EnumDWT_OCRPageSetMode): void;

    /**
     * Sets the OCR result format. Determines whether the OCR output is in text or PDF format.
     * @method Dynamsoft.WebTwain#SetOutputFormat 
     * @param {EnumDWT_OCROutputFormat} value Specifies the OCR result format.
     * @return {boolean}
     */
    SetOutputFormat(value: EnumDWT_OCROutputFormat): void;
}

interface DynamsoftWebTwainAddon {
    OCR: OCR;
}

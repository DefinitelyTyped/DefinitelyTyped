/*!
* Dynamsoft WebTwain PDF Addon
* Product: Dynamsoft Web Twain
* Web Site: http://www.dynamsoft.com
*
* Copyright 2018, Dynamsoft Corporation
* Author: Dynamsoft Support Team
* Version: 13.4
*/

declare enum EnumDWT_ConverMode {
    CM_DEFAULT = 0,
    TWPT_CM_RENDERALLGRAY = 1
}

/**
 * @class
 */
interface PDF {
    /**
     * Download and install pdf rasterizer add-on on the local system.
     * @method Dynamsoft.WebTwain#Download
     * @param {string} remoteFile specifies the value of which frame to get.
     * @param {function} optionalAsyncSuccessFunc optional.
     * The function to call when the download succeeds. Please refer to the function prototype OnSuccess.
     * @param {function} optionalAsyncFailureFunc optional.
     * The function to call when the download fails. Please refer to the function prototype OnFailure.
     * @return {bool}
     */
    Download(remoteFile: string,
        optionalAsyncSuccessFunc?: () => void,
        optionalAsyncFailureFunc?: (errorCode: number, errorString: string) => void): boolean;

    /**
     *  Input the password to decrypt PDF files using PDF Rasterizer add-on.
     * @method Dynamsoft.WebTwain#SetPassword
     * @param {string} password Specifies the PDF password.
     * @return {bool}
     */
    SetPassword(password: string): boolean;

    /**
     *  Set the image convert mode for PDF Rasterizer in Dynamic Web TWAIN.
     * @method Dynamsoft.WebTwain#SetConvertMode
     * @param {EnumDWT_ConverMode} convertMode Specifies the image convert mode.
     * @return {bool}
     */
    SetConvertMode(convertMode: EnumDWT_ConverMode): boolean;

    /**
     *  Set the output resolution for the PDF Rasterizer in Dynamic Web TWAIN.
     * @method Dynamsoft.WebTwain#ReadRect
     * @param {float} fResolution Specifies the resolution for convert image from PDF file.
     * @return {bool}
     */
    SetResolution(fResolution: number): boolean;

    /**
     * Judges whether the local PDF is text-based or not.
     * @method Dynamsoft.WebTwain#ReadRect
     * @param {string} localFile specifies the local path of the target PDF.
     * @return {bool}
     */
    IsTextBasedPDF(localFile: string): boolean;
}

interface WebTwainAddon {
    PDF: PDF;
}

interface WebTwain {
	Addon: WebTwainAddon;
}

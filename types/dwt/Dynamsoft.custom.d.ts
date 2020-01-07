// tslint:disable:jsdoc-format
// tslint:disable:max-line-length
// tslint:disable:no-irregular-whitespace

/*!
* Product: Dynamsoft Web Twain
* Web Site: http://www.dynamsoft.com
*
* Copyright 2020, Dynamsoft Corporation
* Author: Dynamsoft Support Team
*/

/**
 * @class
 */
interface WebTwain {
	
    /**
     * Check whether a certain file exists on the local disk.
     * @method WebTwain#FileExists
     * @param {string} localFile specifies the absolute path of the local file.
     * @return {boolean}
     */
    FileExists(localFile: string): boolean;
	

    /**
     * Directly download a file from the FTP server to local disk without loading it into Dynamic Web TWAIN.
     * @method WebTwain#FTPDownloadDirectly
     * @param {string} FTPServer the name of the FTP server.
     * @param {string} FTPRemoteFile the name of the file to be downloaded. It should be the relative path of the file on the FTP server.
     * @param {string} localFile specify a full path to store the file.
     * @param {function} optionalAsyncSuccessFunc optional. The function to call when the download succeeds. Please refer to the function prototype OnSuccess.
     * @param {function} optionalAsyncFailureFunc optional. The function to call when the download fails. Please refer to the function prototype OnFailure.
     * @return {boolean}
     */
    FTPDownloadDirectly(FTPServer: string, FTPRemoteFile: string, localFile: string, optionalAsyncSuccessFunc?: () => void, optionalAsyncFailureFunc?: (errorCode: number, errorString: string) => void): boolean;

    /**
     * Directly upload a specific file to the FTP server without loading it into Dynamic Web TWAIN.
     * @method WebTwain#FTPUploadDirectly
     * @param {string} FTPServer the name of the FTP server.
     * @param {string} localFile specify the the full path of a local file.
     * @param {string} FTPRemoteFile the name of the file to be created on the FTP server. It should be a relative path on the FTP server.
     * @param {function} optionalAsyncSuccessFunc optional. The function to call when the upload succeeds. Please refer to the function prototype OnSuccess.
     * @param {function} optionalAsyncFailureFunc optional. The function to call when the upload fails. Please refer to the function prototype OnFailure.
     * @return {boolean}
     */
    FTPUploadDirectly(FTPServer: string, localFile: string, FTPRemoteFile: string, optionalAsyncSuccessFunc?: () => void, optionalAsyncFailureFunc?: (errorCode: number, errorString: string) => void): boolean;
	
}

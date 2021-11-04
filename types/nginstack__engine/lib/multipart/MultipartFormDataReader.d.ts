export = MultipartFormDataReader;
declare function MultipartFormDataReader(
    content: Request | File | string,
    options?: {
        boundary?: string;
        charset?: string;
    }
): void;
declare class MultipartFormDataReader {
    constructor(
        content: Request | File | string,
        options?: {
            boundary?: string;
            charset?: string;
        }
    );
    private content_;
    private options_;
    private newLine_;
    private currentPart_;
    private boundary_;
    private charset_;
    private contentLength_;
    private remain_;
    private buffer_;
    private partsRead_;
    private expectNewPart_;
    private newLineDashBoundary_;
    private dashBoundaryDash_;
    private dashBoundary_;
    private initializeBoundaryParams_;
    private initializeContentLengthAndUpdateRemainBuffer_;
    private loadBuffer_;
    private removeSpacesAndTabs_;
    private isBoundaryDelimiterLine_;
    private isFinalBoundary_;
    private jumpBufferToDashBoundary_;
    private readNewLineBuffer_;
    private populateHeader_;
    private newPart_;
    nextPart(): MultipartFormDataPart;
    private setParamCharsetFromPart_;
    private setCharsetIfSupported_;
    private read_;
    readForm(opt_options?: MultipartFormDataOptions | Record<any, any>): MultipartFormData;
}
import Request = require('../http/Request.js');
import File = require('../io/File.js');
import MultipartFormDataPart = require('./MultipartFormDataPart.js');
import MultipartFormDataOptions = require('./MultipartFormDataOptions.js');
import MultipartFormData = require('./MultipartFormData.js');

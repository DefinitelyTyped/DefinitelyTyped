import { DynamsoftEnums as Dynamsoft } from "./Dynamsoft.Enum";
import { WebTwainUtil } from "./WebTwain.Util";

export interface WebTwainIO extends WebTwainUtil {
    /**
     * The password to connect to the FTP.
     */
    FTPPassword: string;
    /**
     * The port to connect to the FTP.
     */
    FTPPort: number;
    /**
     * The password to connect to the FTP.
     */
    FTPUserName: string;
    /**
     * Return or set whether to use passive mode when connect to the FTP.
     */
    IfPASVMode: boolean;
    /**
     * Return or set the field name for the uploaded file.
     * By default, it's "RemoteFile".
     */
    HttpFieldNameOfUploadedImage: string;
    /**
     * [Deprecation] Return or set the password used to log into the HTTP server.
     */
    HTTPPassword: string;
    /**
     * [Deprecation] Return or set the user name used to log into the HTTP server.
     */
    HTTPUserName: string;
    /**
     * Return or set the HTTP Port.
     */
    HTTPPort: number;
    /**
     * Return or set whether to use SSL in HTTP requests.
     */
    IfSSL: boolean;
    /**
     * Return the response string of the latest HTTP Post request.
     */
    readonly HTTPPostResponseString: string;
    /**
     * Return or set whether to show open/save file dialog when saving images in the buffer or loading images from a local directory.
     */
    IfShowFileDialog: boolean;
    /**
     * Return or set whether to show the progress of an operation with a button to cancel it.
     */
    IfShowCancelDialogWhenImageTransfer: boolean;
    /**
     * Return or set whether to show the progressbar.
     */
    IfShowProgressBar: boolean;
    /**
     * Return or set the quality for JPEG compression.
     * The values range from 0 to 100.
     */
    JPEGQuality: number;
    /**
     * Return or set whether to insert or append images when they are scanned/loaded.
     */
    IfAppendImage: boolean;
    /**
     * Return or set whether to append to or replace an existing TIFF file with the same name.
     */
    IfTiffMultiPage: boolean;
    /**
     * Return or set the compression type for TIFF files.
     */
    TIFFCompressionType: Dynamsoft.EnumDWT_TIFFCompressionType | number;
    /**
     * Return or set the name of the person who creates the PDF document.
     */
    PDFAuthor: string;
    /**
     * Return or set the compression type of PDF files. This is a runtime property.
     */
    PDFCompressionType: Dynamsoft.EnumDWT_PDFCompressionType;
    /**
     * Return or set the date when the PDF document is created.
     */
    PDFCreationDate: string;
    /**
     * Return or set the name of the application that created the original document, if the PDF document is converted from another form.
     */
    PDFCreator: string;
    /**
     * Return or set the keywords associated with the PDF document.
     */
    PDFKeywords: string;
    /**
     * Return or set the date when the PDF document is last modified.
     */
    PDFModifiedDate: string;
    /**
     * Return or set the name of the application that converted the PDF document from its native.
     */
    PDFProducer: string;
    /**
     * Return or set the subject of the PDF document.
     */
    PDFSubject: string;
    /**
     * Return or set the title of the PDF document.
     */
    PDFTitle: string;
    /**
     * Return or set the value of the PDF version.
     */
    PDFVersion: string;
    /**
     * Clear all the custom fields from the HTTP Post Form.
     */
    ClearAllHTTPFormField(): boolean;
    /**
     * Clear the content of all custom tiff tags.
     */
    ClearTiffCustomTag(): boolean;
    /**
     * Convert the specified images to a base64 string.
     * @param indices Specify one or multiple images.
     * @param type The file type.
     * @param successCallback A callback function that is executed if the request succeeds.
     * @param failureCallback A callback function that is executed if the request fails.
     * @argument result The resulting base64 string.
     * @argument indices The indices of the converted images.
     * @argument type The file type.
     * @argument errorCode The error code.
     * @argument errorString The error string.
     */
    ConvertToBase64(
        indices: number[],
        type: Dynamsoft.EnumDWT_ImageType | number,
        successCallback: (
            result: Base64Result,
            indices: number[],
            type: number) => void,
        failureCallBack: (
            errorCode: number,
            errorString: string) => void
    ): void;
    /**
     * Convert the specified images to a blob.
     * @param indices Specify one or multiple images.
     * @param type The file type.
     * @param successCallback A callback function that is executed if the request succeeds.
     * @param failureCallback A callback function that is executed if the request fails.
     * @argument result The resulting blob.
     * @argument indices The indices of the converted images.
     * @argument type The file type.
     * @argument errorCode The error code.
     * @argument errorString The error string.
     */
    ConvertToBlob(
        indices: number[],
        type: Dynamsoft.EnumDWT_ImageType | number,
        successCallback: (
            result: Blob,
            indices: number[],
            type: number) => void,
        failureCallBack: (
            errorCode: number,
            errorString: string) => void
    ): void;
    /**
     * Download the specified file via FTP
     * @param host The FTP Host.
     * @param path Specify the file to download.
     * @param successCallback A callback function that is executed if the request succeeds.
     * @param failureCallback A callback function that is executed if the request fails.
     * @argument errorCode The error code.
     * @argument errorString The error string.
     */
    FTPDownload(
        host: string,
        path: string,
        successCallback: () => void,
        failureCallBack: (
            errorCode: number,
            errorString: string) => void
    ): void;
    /**
     * Download the specified file via FTP.
     * @param host The FTP Host.
     * @param path Specify the file to download.
     * @param type The format of the file.
     * @param successCallback A callback function that is executed if the request succeeds.
     * @param failureCallback A callback function that is executed if the request fails.
     * @argument errorCode The error code.
     * @argument errorString The error string.
     */
    FTPDownloadEx(
        host: string,
        path: string,
        type: Dynamsoft.EnumDWT_ImageType | number,
        successCallback: () => void,
        failureCallBack: (
            errorCode: number,
            errorString: string) => void
    ): void;
    /**
     * Upload the specified image via FTP.
     * @param host The FTP Host.
     * @param index Specify the image.
     * @param path The path to save the file.
     * @param successCallback A callback function that is executed if the request succeeds.
     * @param failureCallback A callback function that is executed if the request fails.
     * @argument errorCode The error code.
     * @argument errorString The error string.
     */
    FTPUpload(
        host: string,
        index: number,
        path: string,
        successCallback: () => void,
        failureCallback: (
            errorCode: number,
            errorString: string) => void
    ): void;
    /**
     * Upload the specified image via FTP.
     * @param host The FTP Host.
     * @param index Specify the image.
     * @param path The path to save the file.
     * @param type The format of the file.
     * @param successCallback A callback function that is executed if the request succeeds.
     * @param failureCallback A callback function that is executed if the request fails.
     * @argument errorCode The error code.
     * @argument errorString The error string.
     */
    FTPUploadEx(
        host: string,
        index: number,
        path: string,
        type: Dynamsoft.EnumDWT_ImageType | number,
        successCallback: () => void,
        failureCallback: (
            errorCode: number,
            errorString: string) => void
    ): void;
    /**
     * Upload all images as a multi-page TIFF via FTP.
     * @param host The FTP Host.
     * @param path Specify the path to save the file.
     * @param successCallback A callback function that is executed if the request succeeds.
     * @param failureCallback A callback function that is executed if the request fails.
     * @argument errorCode The error code.
     * @argument errorString The error string.
     */
    FTPUploadAllAsMultiPageTIFF(
        host: string,
        path: string,
        successCallback: () => void,
        failureCallback: (
            errorCode: number,
            errorString: string) => void
    ): void;
    /**
     * Upload all images as a multi-page PDF via FTP.
     * @param host The FTP Host.
     * @param path Specify the path to save the file.
     * @param successCallback A callback function that is executed if the request succeeds.
     * @param failureCallback A callback function that is executed if the request fails.
     * @argument errorCode The error code.
     * @argument errorString The error string.
     */
    FTPUploadAllAsPDF(
        host: string,
        path: string,
        successCallback: () => void,
        failureCallback: (
            errorCode: number,
            errorString: string) => void
    ): void;
    /**
     * Upload selected images as a multi-page PDF via FTP.
     * @param host The FTP Host.
     * @param path Specify the path to save the file.
     * @param successCallback A callback function that is executed if the request succeeds.
     * @param failureCallback A callback function that is executed if the request fails.
     * @argument errorCode The error code.
     * @argument errorString The error string.
     */
    FTPUploadAsMultiPagePDF(
        host: string,
        path: string,
        successCallback: () => void,
        failureCallback: (
            errorCode: number,
            errorString: string) => void
    ): void;
    /**
     * Upload selected images as a multi-page TIFF via FTP.
     * @param host The FTP Host.
     * @param path Specify the path to save the file.
     * @param successCallback A callback function that is executed if the request succeeds.
     * @param failureCallback A callback function that is executed if the request fails.
     * @argument errorCode The error code.
     * @argument errorString The error string.
     */
    FTPUploadAsMultiPageTIFF(
        host: string,
        path: string,
        type: Dynamsoft.EnumDWT_ImageType | number,
        successCallback: () => void,
        failureCallback: (
            errorCode: number,
            errorString: string) => void
    ): void;
    /**
     * Download the specified file via a HTTP Get request.
     * @param host The HTTP Host.
     * @param path Specify the path of the file to download.
     * @param successCallback A callback function that is executed if the request succeeds.
     * @param failureCallback A callback function that is executed if the request fails.
     * @argument errorCode The error code.
     * @argument errorString The error string.
     */
    HTTPDownload(
        host: string,
        path: string,
        successCallback: () => void,
        failureCallback: (
            errorCode: number,
            errorString: string) => void
    ): void;
    /**
     * Download the specified file via a HTTP Get request.
     * @param host The HTTP Host.
     * @param path Specify the path of the file to download.
     * @param type The format of the file.
     * @param successCallback A callback function that is executed if the request succeeds.
     * @param failureCallback A callback function that is executed if the request fails.
     * @argument errorCode The error code.
     * @argument errorString The error string.
     */
    HTTPDownloadEx(
        host: string,
        path: string,
        type: Dynamsoft.EnumDWT_ImageType | number,
        successCallback: () => void,
        failureCallback: (
            errorCode: number,
            errorString: string) => void
    ): void;
    /**
     * Download the specified file via a HTTP Post request.
     * @param host The HTTP Host.
     * @param path Specify the path of the file to download.
     * @param type The format of the file.
     * @param onEmptyResponse A callback function that is executed if the response is empty.
     * @param onServerReturnedSomething A callback function that is executed if the response is not empty.
     * @argument errorCode The error code.
     * @argument errorString The error string.
     * @argument response The response string.
     */
    HTTPDownloadThroughPost(
        host: string,
        path: string,
        type: Dynamsoft.EnumDWT_ImageType | number,
        onEmptyResponse: () => void,
        onServerReturnedSomething: (
            errorCode: number,
            errorString: string,
            response: string) => void
    ): void;
    /**
     * Download the specified file via a HTTP Get request.
     * @param host The HTTP Host.
     * @param path Specify the path of the file to download.
     * @param localPath Specify where to save the file.
     * @param successCallback A callback function that is executed if the request succeeds.
     * @param failureCallback A callback function that is executed if the request fails.
     * @argument errorCode The error code.
     * @argument errorString The error string.
     */
    HTTPDownloadDirectly(
        host: string,
        path: string,
        localPath: string,
        successCallback: () => void,
        failureCallback: (
            errorCode: number,
            errorString: string) => void
    ): void;
    /**
     * Upload the specified image(s) via a HTTP Post.
     * @param URL The server-side script to receive the post.
     * @param indices Specify the image(s).
     * @param type The format of the file.
     * @param dataFormat Whether to upload the file as binary or a base64 string.
     * @param fileName The file name.
     * @param onEmptyResponse A callback function that is executed if the response is empty.
     * @param onServerReturnedSomething A callback function that is executed if the response is not empty.
     * @argument errorCode The error code.
     * @argument errorString The error string.
     * @argument response The response string.
     */
    HTTPUpload(
        URL: string,
        indices: number[],
        type: Dynamsoft.EnumDWT_ImageType | number,
        dataFormat: Dynamsoft.EnumDWT_UploadDataFormat | number,
        fileName: string,
        onEmptyResponse: () => void,
        onServerReturnedSomething: (
            errorCode: number,
            errorString: string,
            response: string) => void
    ): void;
    HTTPUpload(
        URL: string,
        indices: number[],
        type: Dynamsoft.EnumDWT_ImageType | number,
        dataFormat: Dynamsoft.EnumDWT_UploadDataFormat | number,
        onEmptyResponse: () => void,
        onServerReturnedSomething: (
            errorCode: number,
            errorString: string,
            response: string) => void
    ): void;
    HTTPUpload(
        URL: string,
        onEmptyResponse: () => void,
        onServerReturnedSomething: (
            errorCode: number,
            errorString: string,
            response: string) => void
    ): void;
    /**
     * Upload the specified image via a HTTP Put request.
     * @param host The HTTP Host.
     * @param index Specify the image.
     * @param path Specify the path to put the file.
     * @param type The format of the file.
     * @param successCallback A callback function that is executed if the request succeeds.
     * @param failureCallback A callback function that is executed if the request fails.
     * @argument errorCode The error code.
     * @argument errorString The error string.
     */
    HTTPUploadThroughPutEx(
        host: string,
        index: number,
        path: string,
        type: Dynamsoft.EnumDWT_ImageType | number,
        successCallback: () => void,
        failureCallback: (
            errorCode: number,
            errorString: string) => void
    ): void;
    /**
     * Upload the specified image via a HTTP Post request.
     * @param host The HTTP Host.
     * @param index Specify the image.
     * @param target The target wherethe request is sent.
     * @param type The format of the file.
     * @param fileName The file name.
     * @param onEmptyResponse A callback function that is executed if the response is empty.
     * @param onServerReturnedSomething A callback function that is executed if the response is not empty.
     * @argument errorCode The error code.
     * @argument errorString The error string.
     * @argument response The response string.
     */
    HTTPUploadThroughPost(
        host: string,
        index: number,
        target: string,
        fileName: string,
        onEmptyResponse: () => void,
        onServerReturnedSomething: (
            errorCode: number,
            errorString: string,
            response: string) => void
    ): void;
    /**
     * Upload the specified image via a HTTP Post request.
     * @param host The HTTP Host.
     * @param index Specify the image.
     * @param target The target wherethe request is sent.
     * @param fileName The file name.
     * @param type The format of the file.
     * @param onEmptyResponse A callback function that is executed if the response is empty.
     * @param onServerReturnedSomething A callback function that is executed if the response is not empty.
     * @argument errorCode The error code.
     * @argument errorString The error string.
     * @argument response The response string.
     */
    HTTPUploadThroughPostEx(
        host: string,
        index: number,
        target: string,
        fileName: string,
        type: Dynamsoft.EnumDWT_ImageType | number,
        onEmptyResponse: () => void,
        onServerReturnedSomething: (
            errorCode: number,
            errorString: string,
            response: string) => void
    ): void;
    /**
     * Upload all images in the buffer as a TIFF file via a HTTP Post request.
     * @param host The HTTP Host.
     * @param target The target wherethe request is sent.
     * @param fileName The file name.
     * @param onEmptyResponse A callback function that is executed if the response is empty.
     * @param onServerReturnedSomething A callback function that is executed if the response is not empty.
     * @argument errorCode The error code.
     * @argument errorString The error string.
     * @argument response The response string.
     */
    HTTPUploadAllThroughPostAsMultiPageTIFF(
        host: string,
        target: string,
        fileName: string,
        onEmptyResponse: () => void,
        onServerReturnedSomething: (
            errorCode: number,
            errorString: string,
            response: string) => void
    ): void;
    /**
     * Upload all images in the buffer as a PDF file via a HTTP Post request.
     * @param host The HTTP Host.
     * @param target The target wherethe request is sent.
     * @param fileName The file name.
     * @param onEmptyResponse A callback function that is executed if the response is empty.
     * @param onServerReturnedSomething A callback function that is executed if the response is not empty.
     * @argument errorCode The error code.
     * @argument errorString The error string.
     * @argument response The response string.
     */
    HTTPUploadAllThroughPostAsPDF(
        host: string,
        target: string,
        fileName: string,
        onEmptyResponse: () => void,
        onServerReturnedSomething: (
            errorCode: number,
            errorString: string,
            response: string) => void
    ): void;
    /**
     * Upload all selected images in the buffer as a PDF file via a HTTP Post request.
     * @param host The HTTP Host.
     * @param target The target wherethe request is sent.
     * @param fileName The file name.
     * @param onEmptyResponse A callback function that is executed if the response is empty.
     * @param onServerReturnedSomething A callback function that is executed if the response is not empty.
     * @argument errorCode The error code.
     * @argument errorString The error string.
     * @argument response The response string.
     */
    HTTPUploadThroughPostAsMultiPagePDF(
        host: string,
        target: string,
        fileName: string,
        onEmptyResponse: () => void,
        onServerReturnedSomething: (
            errorCode: number,
            errorString: string,
            response: string) => void
    ): void;
    /**
     * Upload all selected images in the buffer as a TIFF file via a HTTP Post request.
     * @param host The HTTP Host.
     * @param target The target wherethe request is sent.
     * @param fileName The file name.
     * @param onEmptyResponse A callback function that is executed if the response is empty.
     * @param onServerReturnedSomething A callback function that is executed if the response is not empty.
     * @argument errorCode The error code.
     * @argument errorString The error string.
     * @argument response The response string.
     */
    HTTPUploadThroughPostAsMultiPageTIFF(
        host: string,
        target: string,
        fileName: string,
        onEmptyResponse: () => void,
        onServerReturnedSomething: (
            errorCode: number,
            errorString: string,
            response: string) => void
    ): void;
    /**
     * Upload the specified file via a HTTP Post request.
     * @param host The HTTP Host.
     * @param path Specify the file to upload.
     * @param target The target wherethe request is sent.
     * @param fileName The file name.
     * @param onEmptyResponse A callback function that is executed if the response is empty.
     * @param onServerReturnedSomething A callback function that is executed if the response is not empty.
     * @argument errorCode The error code.
     * @argument errorString The error string.
     * @argument response The response string.
     */
    HTTPUploadThroughPostDirectly(
        host: string,
        path: string,
        target: string,
        fileName: string,
        onEmptyResponse: () => void,
        onServerReturnedSomething: (
            errorCode: number,
            errorString: string,
            response: string) => void
    ): void;
    /**
     * Load image(s) specified by its absolute path.
     * @param fileName The path of the image to load.
     * @param successCallback A callback function that is executed if the request succeeds.
     * @param failureCallback A callback function that is executed if the request fails.
     * @argument errorCode The error code.
     * @argument errorString The error string.
     */
    LoadImage(
        fileName: string,
        successCallback?: () => void,
        failureCallback?: (
            errorCode: number,
            errorString: string) => void
    ): void | boolean;
    /**
     * Load image(s) specified by its absolute path.
     * @param fileName The path of the image to load.
     * @param type The format of the image.
     * @param successCallback A callback function that is executed if the request succeeds.
     * @param failureCallback A callback function that is executed if the request fails.
     * @argument errorCode The error code.
     * @argument errorString The error string.
     */
    LoadImageEx(
        fileName: string,
        type: Dynamsoft.EnumDWT_ImageType | number,
        successCallback?: () => void,
        failureCallback?: (
            errorCode: number,
            errorString: string) => void
    ): void | boolean;
    /**
     * Load image(s) from a base64 string.
     * @param imageData The image data which is a base64 string without the data URI scheme.
     * @param successCallback A callback function that is executed if the request succeeds.
     * @param failureCallback A callback function that is executed if the request fails.
     * @argument errorCode The error code.
     * @argument errorString The error string.
     */
    LoadImageFromBase64Binary(
        imageData: string,
        imageType: Dynamsoft.EnumDWT_ImageType,
        successCallback?: () => void,
        failureCallback?: (
            errorCode: number,
            errorString: string) => void
    ): void | boolean;
    /**
     * Load image(s) from a binary object (Blob | ArrayBuffer).
     * @param imageData The image data.
     * @param successCallback A callback function that is executed if the request succeeds.
     * @param failureCallback A callback function that is executed if the request fails.
     * @argument errorCode The error code.
     * @argument errorString The error string.
     */
    LoadImageFromBinary(
        imageData: Blob | ArrayBuffer,
        successCallback: () => void,
        failureCallback: (
            errorCode: number,
            errorString: string) => void
    ): void;
    /**
     * Load an image from the system clipboard. The image must be in DIB format.
     * @param successCallback A callback function that is executed if the request succeeds.
     * @param failureCallback A callback function that is executed if the request fails.
     * @argument errorCode The error code.
     * @argument errorString The error string.
     */
    LoadDibFromClipboard(
        successCallback?: () => void,
        failureCallback?: (
            errorCode: number,
            errorString: string) => void
    ): void | boolean;
    /**
     * [Deprecation] Return or set how many threads can be used when you upload files through POST.
     */
    MaxInternetTransferThreads: number;
    /**
     * Return or set the maximum allowed size of a file to upload (in bytes).
     */
    MaxUploadImageSize: number;
    /**
     * Export all image data in the buffer to a new browser window and use the browser's built-in print feature to print the image(s).
     * @param useOSPrintWindow Whether to use the print feature of the operating system instead.
     */
    Print(useOSPrintWindow?: boolean): boolean;
    /**
     * Save the specified image as a BMP file.
     * @param fileName The name to save to.
     * @param index The index which specifies the image to save.
     * @param successCallback A callback function that is executed if the request succeeds.
     * @param failureCallback A callback function that is executed if the request fails.
     * @argument errorCode The error code.
     * @argument errorString The error string.
     */
    SaveAsBMP(
        fileName: string,
        index: number,
        successCallback?: () => void,
        failureCallback?: (errorCode: number, errorString: string) => void
    ): void | boolean;
    /**
     * Save the specified image as a JPEG file.
     * @param fileName The name to save to.
     * @param index The index which specifies the image to save.
     * @param successCallback A callback function that is executed if the request succeeds.
     * @param failureCallback A callback function that is executed if the request fails.
     * @argument errorCode The error code.
     * @argument errorString The error string.
     */
    SaveAsJPEG(
        fileName: string,
        index: number,
        successCallback?: () => void,
        failureCallback?: (errorCode: number, errorString: string) => void
    ): void | boolean;
    /**
     * Save the specified image as a PDF file.
     * @param fileName The name to save to.
     * @param index The index which specifies the image to save.
     * @param successCallback A callback function that is executed if the request succeeds.
     * @param failureCallback A callback function that is executed if the request fails.
     * @argument errorCode The error code.
     * @argument errorString The error string.
     */
    SaveAsPDF(
        fileName: string,
        index: number,
        successCallback?: () => void,
        failureCallback?: (errorCode: number, errorString: string) => void
    ): void | boolean;
    /**
     * Save the specified image as a PNG file.
     * @param fileName The name to save to.
     * @param index The index which specifies the image to save.
     * @param successCallback A callback function that is executed if the request succeeds.
     * @param failureCallback A callback function that is executed if the request fails.
     * @argument errorCode The error code.
     * @argument errorString The error string.
     */
    SaveAsPNG(
        fileName: string,
        index: number,
        successCallback?: () => void,
        failureCallback?: (errorCode: number, errorString: string) => void
    ): void | boolean;
    /**
     * Save the specified image as a TIFF file.
     * @param fileName The name to save to.
     * @param index The index which specifies the image to save.
     * @param successCallback A callback function that is executed if the request succeeds.
     * @param failureCallback A callback function that is executed if the request fails.
     * @argument errorCode The error code.
     * @argument errorString The error string.
     */
    SaveAsTIFF(
        fileName: string,
        index: number,
        successCallback?: () => void,
        failureCallback?: (errorCode: number, errorString: string) => void
    ): void | boolean;
    /**
     * Saves all the images in buffer as a multi-page TIFF file.
     * @param fileName The name to save to.
     * @param successCallback A callback function that is executed if the request succeeds.
     * @param failureCallback A callback function that is executed if the request fails.
     * @argument errorCode The error code.
     * @argument errorString The error string.
     */
    SaveAllAsMultiPageTIFF(
        fileName: string,
        successCallback?: () => void,
        failureCallback?: (errorCode: number, errorString: string) => void
    ): void | boolean;
    /**
     * Saves all the images in buffer as a multi-page PDF file.
     * @param fileName The name to save to.
     * @param successCallback A callback function that is executed if the request succeeds.
     * @param failureCallback A callback function that is executed if the request fails.
     * @argument errorCode The error code.
     * @argument errorString The error string.
     */
    SaveAllAsPDF(
        fileName: string,
        successCallback?: () => void,
        failureCallback?: (errorCode: number, errorString: string) => void
    ): void | boolean;
    /**
     * Saves all selected images in buffer as a multi-page PDF file.
     * @param fileName The name to save to.
     * @param successCallback A callback function that is executed if the request succeeds.
     * @param failureCallback A callback function that is executed if the request fails.
     * @argument errorCode The error code.
     * @argument errorString The error string.
     */
    SaveSelectedImagesAsMultiPagePDF(
        fileName: string,
        successCallback?: () => void,
        failureCallback?: (errorCode: number, errorString: string) => void
    ): void | boolean;
    /**
     * Saves all selected images in buffer as a multi-page TIFF file.
     * @param fileName The name to save to.
     * @param successCallback A callback function that is executed if the request succeeds.
     * @param failureCallback A callback function that is executed if the request fails.
     * @argument errorCode The error code.
     * @argument errorString The error string.
     */
    SaveSelectedImagesAsMultiPageTIFF(
        fileName: string,
        successCallback?: () => void,
        failureCallback?: (
            errorCode: number,
            errorString: string) => void
    ): void | boolean;
    /**
     * [Deprecation] Return an index from the selected indices array. Read SelectedImagesIndices instead.
     * [Alternative] Read SelectedImagesIndices instead.
     * @param indexOfIndices Specify the index of the specified image.
     */
    SaveSelectedImagesToBase64Binary(indexOfIndices: number): number;
    /**
     * [Deprecation] Saves the selected images in the buffer to a base64 string.
     * [Alternative] Use ConvertToBase64 instead.
     * @param successCallback A callback function that is executed if the request succeeds.
     * @param failureCallback A callback function that is executed if the request fails.
     * @argument result The resulting array of strings.
     * @argument errorCode The error code.
     * @argument errorString The error string.
     */
    SaveSelectedImagesToBase64Binary(
        successCallback?: (result: string[]) => void,
        failureCallback?: (errorCode: number, errorString: string) => void
    ): string | boolean;
    /**
     * Add a custom field to the HTTP Post Form.
     * @param name The name of the field.
     * @param value The value of the field.
     */
    SetHTTPFormField(
        name: string,
        value: string
    ): boolean;
    /**
     * Add a binary file to the HTTP Post Form.
     * @param name The name of the field.
     * @param content The content of the file.
     * @param fileName The name of the file.
     */
    SetHTTPFormField(
        name: string,
        content: Blob,
        fileName?: string
    ): boolean;
    /**
     * Add a custom header to the HTTP Post Form.
     * @param name The name of the field.
     * @param value The value of the field.
     */
    SetHTTPHeader(
        name: string,
        value: string
    ): boolean;
    /**
     * Clear the content of all custom tiff tags.
     * @param id The id of the custom tag.
     * @param content The content of the tag.
     * @param useBase64Encoding Whether the content is encoded.
     */
    SetTiffCustomTag(
        id: number,
        content: string,
        useBase64Encoding: boolean
    ): boolean;
    /**
     * Set the segmentation threshold and segment size.
     * @param threshold Specify the threshold (in MB).
     * @param size Specify the segment size (in KB).
     */
    SetUploadSegment(
        threshold: number,
        size: number
    ): boolean;
    /**
     * Show the system's save-file dialog or open-file dialog.
     * @param isSave Whether to show a save-file dialog or an open-file dialog
     * @param filter The filter pattern like "JPG | *.jpg".
     * @param filterIndex The order of the filter. Normally, just put 0.
     * @param defaultExtension Extension to be appended to the file name. Only valid in a save-file dialog
     * @param initialDirectory The initial directory that the dialog opens.
     * @param allowMultiSelect Whether or not multiple files can be selected at the same time. Only valid in an open-file dialog.
     * @param showOverwritePrompt Whether or not a prompt shows up when saving a file may overwrite an existing file.
     * @param flag If set to 0, bAllowMultiSelect and bShowOverwritePrompt will be effective. Otherwise, these two parameters are ignored.
     */
    ShowFileDialog(
        isSave: boolean,
        filter: string,
        filterIndex: number,
        defaultExtension: string,
        initialDirectory: string,
        allowMultiSelect: boolean,
        showOverwritePrompt: boolean,
        flag: number
    ): boolean;
    /**
     * [Deprecation] Set a cookie string into the Http Header to be used when uploading scanned images through POST.
     * @param cookie The cookie.
     */
    SetCookie(cookie: string): boolean;
}
export interface Base64Result {
    /**
     * Return the length of the result string.
     */
    getLength(): number;
    /**
     * Return part of the string.
     * @param offset The starting position.
     * @param length The length of the expected string.
     */
    getData(offset: number, length: number): string;
    /**
     * Return the MD5 value of the result.
     */
    getMD5(): string;
}
/**
 * Details for each license
 */
export interface LicenseDetailItem {
    readonly Browser: string;
    readonly EnumLicenseType: string;
    readonly ExpireDate: string;
    readonly LicenseType: string;
    readonly OS: string;
    readonly Trial: string;
    readonly Version: string;
}

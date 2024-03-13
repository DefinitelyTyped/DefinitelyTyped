/// <reference types="node" />

export = ImageKit;

declare global {
    namespace ImageKit {
        type TransformationPosition = "path" | "query";
        /**
         * Type of files to include in result set. Accepts three values:
         * all - include all types of files in result set
         * image - only search in image type files
         * non-image - only search in files which are not image, e.g., JS or CSS or video files.
         *
         * @see {@link https://docs.imagekit.io/api-reference/media-api/list-and-search-files}
         */
        type FileType = "all" | "image" | "non-image";
        /**
         * Type of returned item. It can be either file or folder.
         */
        type Item = "file" | "folder";

        /**
         * @see {@link https://help.imagekit.io/en/articles/2434102-image-format-support-in-imagekit-for-resizing-compression-and-static-file-delivery}
         */
        type FileFormat =
            | "jpg"
            | "png"
            | "gif"
            | "svg"
            | "webp"
            | "pdf"
            | "js"
            | "css"
            | "txt"
            | "mp4"
            | "webm"
            | "mov"
            | "swf"
            | "ts"
            | "m3u8"
            | string;

        /**
         * @see {@link https://docs.imagekit.io/features/image-transformations}
         */
        interface Transformation {
            /**
             * @see {@link https://docs.imagekit.io/features/image-transformations/resize-crop-and-other-transformations#width-w}
             */
            height?: string | undefined;
            /**
             * @see {@link https://docs.imagekit.io/features/image-transformations/resize-crop-and-other-transformations#height-h}
             */
            width?: string | undefined;
            /**
             * @see {@link https://docs.imagekit.io/features/image-transformations/resize-crop-and-other-transformations#aspect-ratio-ar}
             */
            aspectRatio?: string | undefined;
            /**
             * @see {@link https://docs.imagekit.io/features/image-transformations/resize-crop-and-other-transformations#quality-q}
             */
            quality?: string | undefined;
            /**
             * @see {@link https://docs.imagekit.io/features/image-transformations/resize-crop-and-other-transformations#crop-crop-modes-and-focus}
             */
            crop?: string | undefined;
            /**
             * @see {@link https://docs.imagekit.io/features/image-transformations/resize-crop-and-other-transformations#crop-crop-modes-and-focus}
             */
            cropMode?: string | undefined;
            /**
             * @see {@link https://docs.imagekit.io/features/image-transformations/resize-crop-and-other-transformations#focus-fo}
             */
            focus?: string | undefined;
            /**
             * @see {@link https://docs.imagekit.io/features/image-transformations/resize-crop-and-other-transformations#examples-focus-using-cropped-image-coordinates}
             */
            x?: string | undefined;
            /**
             * @see {@link https://docs.imagekit.io/features/image-transformations/resize-crop-and-other-transformations#examples-focus-using-cropped-image-coordinates}
             */
            y?: string | undefined;
            /**
             * @see {@link https://docs.imagekit.io/features/image-transformations/resize-crop-and-other-transformations#format-f}
             */
            format?: string | undefined;
            /**
             * @see {@link https://docs.imagekit.io/features/image-transformations/resize-crop-and-other-transformations#radius-r}
             */
            radius?: string | undefined;
            /**
             * @see {@link https://docs.imagekit.io/features/image-transformations/resize-crop-and-other-transformations#background-color-bg}
             */
            background?: string | undefined;
            /**
             * @see {@link https://docs.imagekit.io/features/image-transformations/resize-crop-and-other-transformations#border-b}
             */
            border?: string | undefined;
            /**
             * @see {@link https://docs.imagekit.io/features/image-transformations/resize-crop-and-other-transformations#rotate-rt}
             */
            rotation?: number | undefined;
            /**
             * @see {@link https://docs.imagekit.io/features/image-transformations/resize-crop-and-other-transformations#blur-bl}
             */
            blur?: string | undefined;
            /**
             * @see {@link https://docs.imagekit.io/features/image-transformations/resize-crop-and-other-transformations#named-transformation-n}
             */
            named?: string | undefined;
            /**
             * @see {@link https://docs.imagekit.io/features/image-transformations/overlay#overlay-image-oi}
             */
            overlayImage?: string | undefined;
            /**
             * @see {@link https://docs.imagekit.io/features/image-transformations/overlay#overlay-x-position-ox}
             */
            overlayX?: string | undefined;
            /**
             * @see {@link https://docs.imagekit.io/features/image-transformations/overlay#overlay-y-position-oy}
             */
            overlayY?: string | undefined;
            /**
             * @see {@link https://docs.imagekit.io/features/image-transformations/overlay#overlay-focus-ofo}
             */
            overlayFocus?: string | undefined;
            /**
             * @see {@link https://docs.imagekit.io/features/image-transformations/overlay#overlay-height-oh}
             */
            overlayHeight?: string | undefined;
            /**
             * @see {@link https://docs.imagekit.io/features/image-transformations/overlay#overlay-width-ow}
             */
            overlayWidth?: string | undefined;
            /**
             * @see {@link https://docs.imagekit.io/features/image-transformations/overlay#overlay-text-ot}
             */
            overlayText?: string | undefined;
            /**
             * @see {@link https://docs.imagekit.io/features/image-transformations/overlay#overlay-text-size-ots}
             */
            overlayTextFontSize?: string | undefined;
            /**
             * @see {@link https://docs.imagekit.io/features/image-transformations/overlay#overlay-text-color-otc}
             */
            overlayTextColor?: string | undefined;
            /**
             * @see {@link https://docs.imagekit.io/features/image-transformations/overlay#overlay-transparency-oa}
             */
            overlayAlpha?: string | undefined;
            /**
             * @see {@link https://docs.imagekit.io/features/image-transformations/overlay#overlay-text-typography-ott}
             */
            overlayTextTypography?: string | undefined;
            /**
             * @see {@link https://docs.imagekit.io/features/image-transformations/overlay#overlay-background-obg}
             */
            overlayBackground?: string | undefined;
            /**
             * @see {@link https://docs.imagekit.io/features/image-transformations/overlay#trimming-of-the-overlay-image}
             */
            overlayImageTrim?: string | undefined;
            /**
             * @see {@link https://docs.imagekit.io/features/image-transformations/resize-crop-and-other-transformations#progressive-image-pr}
             */
            progressive?: string | undefined;
            /**
             * @see {@link https://docs.imagekit.io/features/image-transformations/resize-crop-and-other-transformations#lossless-webp-and-png-lo}
             */
            lossless?: string | undefined;
            /**
             * @see {@link https://docs.imagekit.io/features/image-transformations/resize-crop-and-other-transformations#trim-edges-t}
             */
            trim?: string | undefined;
            /**
             * @see {@link https://docs.imagekit.io/features/image-transformations/resize-crop-and-other-transformations#image-metadata-md}
             */
            metadata?: string | undefined;
            /**
             * @see {@link https://docs.imagekit.io/features/image-transformations/resize-crop-and-other-transformations#color-profile-cp}
             */
            colorProfile?: string | undefined;
            /**
             * @see {@link https://docs.imagekit.io/features/image-transformations/resize-crop-and-other-transformations#default-image-di}
             */
            defaultImage?: string | undefined;
            /**
             * @see {@link https://docs.imagekit.io/features/image-transformations/resize-crop-and-other-transformations#dpr-dpr}
             */
            dpr?: string | undefined;
            /**
             * @see {@link https://docs.imagekit.io/features/image-transformations/image-enhancement-and-color-manipulation#sharpen-e-sharpen}
             */
            effectSharpen?: string | undefined;
            /**
             * @see {@link https://docs.imagekit.io/features/image-transformations/image-enhancement-and-color-manipulation#unsharp-mask-e-usm}
             */
            effectUSM?: string | undefined;
            /**
             * @see {@link https://docs.imagekit.io/features/image-transformations/image-enhancement-and-color-manipulation#contrast-stretch-e-contrast}
             */
            effectContrast?: string | undefined;
            /**
             * @see {@link https://docs.imagekit.io/features/image-transformations/resize-crop-and-other-transformations#grayscale-e-grayscale}
             */
            effectGray?: string | undefined;
            /**
             * @see {@link https://docs.imagekit.io/features/image-transformations/resize-crop-and-other-transformations#original-image-orig}
             */
            original?: string | undefined;
        }

        interface UrlOptionsBase {
            /**
             * An array of objects specifying the transformations to be applied in the URL.
             * The transformation name and the value should be specified as a key-value pair in each object.
             * @see {@link https://docs.imagekit.io/features/image-transformations/chained-transformations}
             */
            transformation?: Transformation[] | undefined;
            /**
             * Default value is path that places the transformation string as a path parameter in the URL.
             * Can also be specified as query which adds the transformation string as the query parameter tr in the URL.
             * If you use src parameter to create the URL, then the transformation string is always added as a query parameter.
             */
            transformationPosition?: TransformationPosition | undefined;
            /**
             * These are the other query parameters that you want to add to the final URL.
             * These can be any query parameters and not necessarily related to ImageKit.
             * Especially useful, if you want to add some versioning parameter to your URLs.
             */
            queryParameters?: { [key: string]: string | number } | undefined;
            /**
             * The base URL to be appended before the path of the image.
             * If not specified, the URL Endpoint specified at the time of SDK initialization is used.
             */
            urlEndpoint?: string | undefined;
            /**
             * Default is false. If set to true, the SDK generates a signed image URL adding the image signature to the image URL.
             * If you are creating URL using src parameter instead of path then do correct urlEndpoint for this to work.
             * Otherwise returned URL will have wrong signature.
             */
            signed?: boolean | undefined;
            /**
             * Meant to be used along with the signed parameter to specify the time in seconds from now when the URL should expire.
             * If specified, the URL contains the expiry timestamp in the URL and the image signature is modified accordingly.
             */
            expireSeconds?: number | undefined;
        }

        interface UrlOptionsSrc extends UrlOptionsBase {
            /**
             * Conditional. This is the complete URL of an image already mapped to ImageKit.
             * For example, https://ik.imagekit.io/your_imagekit_id/endpoint/path/to/image.jpg.
             * Either the path or src parameter need to be specified for URL generation.
             */
            src: string;
            path?: never | undefined;
        }

        interface UrlOptionsPath extends UrlOptionsBase {
            /**
             * Conditional. This is the path at which the image exists.
             * For example, /path/to/image.jpg. Either the path or src parameter need to be specified for URL generation.
             */
            path: string;
            src?: never | undefined;
        }

        /**
         * Options for generating an URL
         *
         * @see {@link https://github.com/imagekit-developer/imagekit-nodejs#url-generation}
         */
        type UrlOptions = UrlOptionsSrc | UrlOptionsPath;

        /**
         * Options used when uploading a file
         *
         * @see {@link https://docs.imagekit.io/api-reference/upload-file-api/server-side-file-upload#request-structure-multipart-form-data}
         */
        interface UploadOptions {
            /**
             * This field accepts three kinds of values:
             * - binary - You can send the content of the file as binary. This is used when a file is being uploaded from the browser.
             * - base64 - Base64 encoded string of file content.
             * - url - URL of the file from where to download the content before uploading.
             *      Downloading file from URL might take longer, so it is recommended that you pass the binary or base64 content of the file.
             *      Pass the full URL, for example - https://www.example.com/rest-of-the-image-path.jpg.
             */
            file: string | Buffer;
            /**
             * The name with which the file has to be uploaded.
             * The file name can contain:
             * - Alphanumeric Characters: a-z , A-Z , 0-9
             * - Special Characters: . _ and -
             * Any other character including space will be replaced by _
             */
            fileName: string;
            /**
             * Whether to use a unique filename for this file or not.
             * - Accepts true or false.
             * - If set true, ImageKit.io will add a unique suffix to the filename parameter to get a unique filename.
             * - If set false, then the image is uploaded with the provided filename parameter and any existing file with the same name is replaced.
             * Default value - true
             */
            useUniqueFileName?: boolean | undefined;
            /**
             * Set the tags while uploading the file.
             * - Comma-separated value of tags in format tag1,tag2,tag3. For example - t-shirt,round-neck,men
             * - The maximum length of all characters should not exceed 500.
             * - % is not allowed.
             * - If this field is not specified and the file is overwritten then the tags will be removed.
             */
            tags?: string | undefined;
            /**
             * The folder path (e.g. /images/folder/) in which the image has to be uploaded. If the folder(s) didn't exist before, a new folder(s) is created.
             * The folder name can contain:
             * - Alphanumeric Characters: a-z , A-Z , 0-9
             * - Special Characters: / _ and -
             * - Using multiple / creates a nested folder.
             * Default value - /
             */
            folder?: string | undefined;
            /**
             * Whether to mark the file as private or not. This is only relevant for image type files.
             * - Accepts true or false.
             * - If set true, the file is marked as private which restricts access to the original image URL and unnamed image transformations without signed URLs.
             *      Without the signed URL, only named transformations work on private images
             * Default value - false
             */
            isPrivateFile?: boolean | undefined;
            /**
             * Define an important area in the image. This is only relevant for image type files.
             * To be passed as a string with the x and y coordinates of the top-left corner, and width and height of the area of interest in format x,y,width,height. For example - 10,10,100,100
             * Can be used with fo-customtransformation.
             * If this field is not specified and the file is overwritten, then customCoordinates will be removed.
             */
            customCoordinates?: string | undefined;
            /**
             * Comma-separated values of the fields that you want ImageKit.io to return in response.
             *
             * For example, set the value of this field to tags,customCoordinates,isPrivateFile,metadata to get value of tags, customCoordinates, isPrivateFile , and metadata in the response.
             */
            responseFields?: string | undefined;
        }

        /**
         * Response from uploading a file
         *
         * @see {@link https://docs.imagekit.io/api-reference/upload-file-api/server-side-file-upload#response-code-and-structure-json}
         */
        interface UploadResponse {
            /**
             * Unique fileId. Store this fileld in your database, as this will be used to perform update action on this file.
             */
            fileId: string;
            /**
             * The name of the uploaded file.
             */
            name: string;
            /**
             * The URL of the file.
             */
            url: string;
            /**
             * In case of an image, a small thumbnail URL.
             */
            thumbnailUrl: string;
            /**
             * Height of the uploaded image file. Only applicable when file type is image.
             */
            height: number;
            /**
             * Width of the uploaded image file. Only applicable when file type is image.
             */
            width: number;
            /**
             * Size of the uploaded file in bytes.
             */
            size: number;
            /**
             * Type of file. It can either be image or non-image.
             */
            fileType: FileType;
            /**
             * The path of the file uploaded. It includes any folder that you specified while uploading.
             */
            filePath: string;
            /**
             * Array of tags associated with the image.
             */
            tags?: string[] | undefined;
            /**
             * Is the file marked as private. It can be either true or false.
             */
            isPrivateFile: boolean;
            /**
             * Value of custom coordinates associated with the image in format x,y,width,height.
             */
            customCoordinates: string | null;
            /**
             * The metadata of the upload file. Use responseFields property in request to get the metadata returned in response of upload API.
             */
            metadata?: string | undefined;
        }

        /**
         * List and search files options
         *
         * @see {@link https://docs.imagekit.io/api-reference/media-api/list-and-search-files}
         */
        interface ListFileOptions {
            /**
             * Folder path if you want to limit the search within a specific folder. For example, /sales-banner/ will only search in folder sales-banner.
             */
            path?: string | undefined;
            /**
             * Type of files to include in result set. Accepts three values:
             * all - include all types of files in result set
             * image - only search in image type files
             * non-image - only search in files which are not image, e.g., JS or CSS or video files.
             */
            fileType?: FileType | undefined;
            /**
             * Comma-separated list of tags. Files matching any of the tags are included in result response. If no tag is matched, the file is not included in result set.
             */
            tags?: string | undefined;
            /**
             * Whether to include folders in search results or not. By default only files are searched.
             * Accepts true and false. If this is set to true then tags and fileType parameters are ignored.
             */
            includeFolder?: boolean | undefined;
            /**
             * The name of the file or folder.
             */
            name?: string | undefined;
            /**
             * The maximum number of results to return in response:
             * Minimum value - 1
             * Maximum value - 1000
             * Default value - 1000
             */
            limit?: number | undefined;
            /**
             * The number of results to skip before returning results.
             * Minimum value - 0
             * Default value - 0
             */
            skip?: number | undefined;
        }

        /**
         * List and search response
         *
         * @see {@link https://docs.imagekit.io/api-reference/media-api/list-and-search-files#response-structure-and-status-code-application-json}
         */
        interface ListFileResponse {
            /**
             * The unique fileId of the uploaded file.
             */
            fileId: string;
            /**
             * Type of item. It can be either file or folder.
             */
            type: Item;
            /**
             * Name of the file or folder.
             */
            name: string;
            /**
             * The date and time when the file was first uploaded. The format is `YYYY-MM-DDTHH:mm:ss.sssZ`.
             */
            createdAt: string;
            /**
             * The relative path of the file. In the case of an image, you can use this
             * path to construct different transformations.
             */
            filePath: string;
            /**
             * Array of tags associated with the image. If no tags are set, it will be null.
             */
            tags: string[] | null;
            /**
             * Is the file marked as private. It can be either true or false.
             */
            isPrivateFile: boolean;
            /**
             * Value of custom coordinates associated with the image in format x,y,width,height. If customCoordinates are not defined then it is null.
             */
            customCoordinates: string | null;
            /**
             * A publicly accessible URL of the file.
             */
            url: string;
            /**
             * In case of an image, a small thumbnail URL.
             */
            thumbnail: string;
            /**
             * The type of file, it could be either image or non-image.
             */
            fileType: FileType;
        }

        /**
         * File details such as tags, customCoordinates, and isPrivate properties using get file detail API.
         *
         * @see {@link https://docs.imagekit.io/api-reference/media-api/get-file-details}
         * @see {@link https://docs.imagekit.io/api-reference/media-api/update-file-details#understanding-response}
         */
        interface FileDetailsResponse {
            /**
             * The unique fileId of the uploaded file.
             */
            fileId: string;
            /**
             * Type of item. It can be either file or folder.
             */
            type: Item;
            /**
             * Name of the file or folder.
             */
            name: string;
            /**
             * The relative path of the file. In case of image, you can use this
             * path to construct different transformations.
             */
            filePath: string;
            /**
             * Array of tags associated with the image. If no tags are set, it will be null.
             */
            tags: string[] | null;
            /**
             * Is the file marked as private. It can be either true or false.
             */
            isPrivateFile: boolean;
            /**
             * Value of custom coordinates associated with the image in format x,y,width,height.
             * If customCoordinates are not defined then it is null.
             */
            customCoordinates: string | null;
            /**
             * A publicly accessible URL of the file.
             */
            url: string;
            /**
             * In case of an image, a small thumbnail URL.
             */
            thumbnail: string;
            /**
             * The type of file, it could be either image or non-image.
             */
            fileType: FileType;
        }

        /**
         * Response when getting image exif, pHash and other metadata for uploaded files in ImageKit.io media library using this API.
         *
         * @see {@link https://docs.imagekit.io/api-reference/metadata-api/get-image-metadata-for-uploaded-media-files}
         */
        interface FileMetadataResponse {
            height: number;
            width: number;
            size: number;
            format: FileFormat;
            hasColorProfile: boolean;
            quality: number;
            density: number;
            hasTransparency: boolean;
            /**
             * @see {@link https://docs.imagekit.io/api-reference/metadata-api#perceptual-hash-phash}
             */
            pHash: string;
            /**
             * @see {@link https://docs.imagekit.io/api-reference/metadata-api#exif}
             */
            exif: {
                image: {
                    Make: string;
                    Model: string;
                    Orientation: number;
                    XResolution: number;
                    YResolution: number;
                    ResolutionUnit: number;
                    Software: string;
                    ModifyDate: string;
                    YCbCrPositioning: number;
                    ExifOffset: number;
                    GPSInfo: number;
                };
                thumbnail: {
                    Compression: number;
                    XResolution: number;
                    YResolution: number;
                    ResolutionUnit: number;
                    ThumbnailOffset: number;
                    ThumbnailLength: number;
                };
                exif: {
                    ExposureTime: number;
                    FNumber: number;
                    ExposureProgram: number;
                    ISO: number;
                    ExifVersion: string;
                    DateTimeOriginal: string;
                    CreateDate: string;
                    ShutterSpeedValue: number;
                    ApertureValue: number;
                    ExposureCompensation: number;
                    MeteringMode: number;
                    Flash: number;
                    FocalLength: number;
                    SubSecTime: string;
                    SubSecTimeOriginal: string;
                    SubSecTimeDigitized: string;
                    FlashpixVersion: string;
                    ColorSpace: number;
                    ExifImageWidth: number;
                    ExifImageHeight: number;
                    InteropOffset: number;
                    FocalPlaneXResolution: number;
                    FocalPlaneYResolution: number;
                    FocalPlaneResolutionUnit: number;
                    CustomRendered: number;
                    ExposureMode: number;
                    WhiteBalance: number;
                    SceneCaptureType: number;
                };
                gps: {
                    GPSVersionID: number[];
                };
                interoperability: {
                    InteropIndex: string;
                    InteropVersion: string;
                };
                makernote: { [key: string]: string };
            };
        }

        /**
         * Options when updating file details such as tags and customCoordinates attribute using update file detail API.
         *
         * @see {@link https://docs.imagekit.io/api-reference/media-api/update-file-details}
         */
        interface FileDetailsOptions {
            /**
             * Array of tags associated with the file.
             */
            tags?: string[] | undefined;
            /**
             * Define an important area in the image.
             * Example - 50,50,500,500
             */
            customCoordinates?: string | undefined;
        }

        /**
         * Response when deleting multiple files from the media library.
         *
         * @see {@link https://docs.imagekit.io/api-reference/media-api/delete-files-bulk}
         */
        interface BulkDeleteFilesResponse {
            /**
             * List of file ids of successfully deleted files
             */
            successfullyDeletedFileIds: string[];
        }

        interface BulkDeleteFilesError extends Error {
            help: string;
            missingFileIds: string[];
        }

        /**
         * Response when purging CDN and ImageKit.io internal cache
         *
         * @see {@link https://docs.imagekit.io/api-reference/media-api/purge-cache#response-structure-and-status-code}
         */
        interface PurgeCacheResponse {
            /**
             * requestId can be used to fetch the status of submitted purge request.
             */
            requestId: string;
        }

        /**
         * Response when getting the status of submitted purge request.
         *
         * @see {@link https://docs.imagekit.io/api-reference/media-api/purge-cache-status#understanding-response}
         */
        interface PurgeCacheStatusResponse {
            /**
             * Pending - The request has been successfully submitted, and purging is in progress.
             * Complete - The purge request has been successfully completed. And now you should get a fresh object.
             * Check the Age header in response to confirm this.
             */
            status: "Pending" | "Completed";
        }

        interface Callback<T, E extends Error = Error> {
            (error?: E, response?: T): void;
        }
    }

    class ImageKit {
        constructor(options: {
            publicKey: string;
            privateKey: string;
            urlEndpoint: string;
            transformationPosition?: ImageKit.TransformationPosition | undefined;
        });

        /**
         * You can add multiple origins in the same ImageKit.io account.
         * URL endpoints allow you to configure which origins are accessible through your account and set their preference order as well.
         *
         * @see {@link https://github.com/imagekit-developer/imagekit-nodejs#url-generation}
         * @see {@link https://docs.imagekit.io/integration/url-endpoints}
         *
         * @param urlOptions
         */
        url(urlOptions: ImageKit.UrlOptions): string;

        /**
         * This API can list all the uploaded files in your ImageKit.io media library.
         * For searching and filtering, you can use query parameters as described below.
         *
         * @see {@link https://docs.imagekit.io/api-reference/media-api/list-and-search-files}
         *
         * @param listFilesOptions
         * @param callback
         */
        listFiles(
            listFilesOptions: ImageKit.ListFileOptions,
            callback: ImageKit.Callback<ImageKit.ListFileResponse>,
        ): void;

        /**
         * This API can list all the uploaded files in your ImageKit.io media library.
         * For searching and filtering, you can use query parameters as described below.
         *
         * @see {@link https://docs.imagekit.io/api-reference/media-api/list-and-search-files}
         *
         * @param listFilesOptions
         */
        listFiles(listFilesOptions: ImageKit.ListFileOptions): Promise<ImageKit.ListFileResponse>;

        /**
         * You can upload files to ImageKit.io media library from your server-side using private API key authentication.
         *
         * File size limit
         * The maximum upload file size is limited to 25MB.
         *
         * @see {@link https://docs.imagekit.io/api-reference/upload-file-api/server-side-file-upload}
         *
         * @param uploadOptions
         * @param callback
         */
        upload(uploadOptions: ImageKit.UploadOptions, callback: ImageKit.Callback<ImageKit.UploadResponse>): void;

        /**
         * You can upload files to ImageKit.io media library from your server-side using private API key authentication.
         *
         * File size limit
         * The maximum upload file size is limited to 25MB.
         *
         * @see {@link https://docs.imagekit.io/api-reference/upload-file-api/server-side-file-upload}
         *
         * @param uploadOptions
         */
        upload(uploadOptions: ImageKit.UploadOptions): Promise<ImageKit.UploadResponse>;

        /**
         * Get the file details such as tags, customCoordinates, and isPrivate properties using get file detail API.
         *
         * @see {@link https://docs.imagekit.io/api-reference/media-api/get-file-details}
         *
         * @param fileId
         * @param callback
         */
        getFileDetails(fileId: string, callback: ImageKit.Callback<ImageKit.FileDetailsResponse>): void;

        /**
         * Get the file details such as tags, customCoordinates, and isPrivate properties using get file detail API.
         *
         * @see {@link https://docs.imagekit.io/api-reference/media-api/get-file-details}
         *
         * @param fileId
         */
        getFileDetails(fileId: string): Promise<ImageKit.FileDetailsResponse>;

        /**
         * Get image exif, pHash and other metadata for uploaded files in ImageKit.io media library using this API.
         *
         * @see {@link https://docs.imagekit.io/api-reference/metadata-api/get-image-metadata-for-uploaded-media-files}
         *
         * @param fileId The unique fileId of the uploaded file. fileId is returned in list files API and upload API.
         * @param callback
         */
        getFileMetadata(fileId: string, callback: ImageKit.Callback<ImageKit.FileMetadataResponse>): void;

        /**
         * Get image exif, pHash and other metadata for uploaded files in ImageKit.io media library using this API.
         *
         * @see {@link https://docs.imagekit.io/api-reference/metadata-api/get-image-metadata-for-uploaded-media-files}
         *
         * @param fileId The unique fileId of the uploaded file. fileId is returned in list files API and upload API.
         */
        getFileMetadata(fileId: string): Promise<ImageKit.FileMetadataResponse>;

        /**
         * Update file details such as tags and customCoordinates attribute using update file detail API.
         *
         * @see {@link https://docs.imagekit.io/api-reference/media-api/update-file-details}
         *
         * @param fileId The unique fileId of the uploaded file. fileId is returned in list files API and upload API.
         * @param optionsFileDetails
         * @param callback
         */
        updateFileDetails(
            fileId: string,
            optionsFileDetails: ImageKit.FileDetailsOptions,
            callback: ImageKit.Callback<ImageKit.FileDetailsResponse>,
        ): void;

        /**
         * Update file details such as tags and customCoordinates attribute using update file detail API.
         *
         * @see {@link https://docs.imagekit.io/api-reference/media-api/update-file-details}
         *
         * @param fileId The unique fileId of the uploaded file. fileId is returned in list files API and upload API.
         * @param optionsFileDetails
         */
        updateFileDetails(
            fileId: string,
            optionsFileDetails: ImageKit.FileDetailsOptions,
        ): Promise<ImageKit.FileDetailsResponse>;

        /**
         * You can programmatically delete uploaded files in media library using delete file API.
         *
         * @see {@link https://docs.imagekit.io/api-reference/media-api/delete-file}
         *
         * @param fileId The unique fileId of the uploaded file. fileId is returned in list files API and upload API
         * @param callback
         */
        deleteFile(fileId: string, callback: ImageKit.Callback<void>): void;

        /**
         * You can programmatically delete uploaded files in media library using delete file API.
         *
         * @see {@link https://docs.imagekit.io/api-reference/media-api/delete-file}
         *
         * @param fileId The unique fileId of the uploaded file. fileId is returned in list files API and upload API
         */
        deleteFile(fileId: string): Promise<void>;

        /**
         * Deletes multiple files from the media library.
         *
         * @see {@link https://docs.imagekit.io/api-reference/media-api/delete-files-bulk}
         *
         * @param fileIds Each value should be a unique fileId of the uploaded file. fileId is returned in list files API and upload API
         * @param callback
         */
        bulkDeleteFiles(
            fileIds: string[],
            callback: ImageKit.Callback<ImageKit.BulkDeleteFilesResponse, ImageKit.BulkDeleteFilesError>,
        ): void;

        /**
         * Deletes multiple files from the media library.
         *
         * @see {@link https://docs.imagekit.io/api-reference/media-api/delete-files-bulk}
         *
         * @param fileIds Each value should be a unique fileId of the uploaded file. fileId is returned in list files API and upload API
         */
        bulkDeleteFiles(fileIds: string[]): Promise<ImageKit.BulkDeleteFilesResponse>;

        /**
         * This will purge CDN and ImageKit.io internal cache.
         *
         * @see {@link https://docs.imagekit.io/api-reference/media-api/purge-cache}
         *
         * @param fullUrl The exact URL of the file to be purged. For example - https://ik.imageki.io/your_imagekit_id/rest-of-the-file-path.jpg
         * @param callback
         */
        purgeCache(fullUrl: string, callback: ImageKit.Callback<ImageKit.PurgeCacheResponse>): void;

        /**
         * This will purge CDN and ImageKit.io internal cache.
         *
         * @see {@link https://docs.imagekit.io/api-reference/media-api/purge-cache}
         *
         * @param fullUrl The exact URL of the file to be purged. For example - https://ik.imageki.io/your_imagekit_id/rest-of-the-file-path.jpg
         */
        purgeCache(fullUrl: string): Promise<ImageKit.PurgeCacheResponse>;

        /**
         * Get the status of submitted purge request.
         *
         * @see {@link https://docs.imagekit.io/api-reference/media-api/purge-cache-status}
         *
         * @param cacheRequestId The requestId returned in response of purge cache API.
         * @param callback
         */
        getPurgeCacheStatus(
            cacheRequestId: string,
            callback: ImageKit.Callback<ImageKit.PurgeCacheStatusResponse>,
        ): void;

        /**
         * Get the status of submitted purge request.
         *
         * @see {@link https://docs.imagekit.io/api-reference/media-api/purge-cache-status}
         *
         * @param cacheRequestId The requestId returned in response of purge cache API.
         */
        getPurgeCacheStatus(cacheRequestId: string): Promise<ImageKit.PurgeCacheStatusResponse>;

        /**
         * Authentication parameter generation
         *
         * @see {@link https://github.com/imagekit-developer/imagekit-nodejs#authentication-parameter-generation}
         *
         * @param token
         * @param expire
         */
        getAuthenticationParameters(
            token?: string,
            expire?: number,
        ): { token: string; expire: number; signature: string };

        /**
         * Perceptual Hash (pHash)
         * Distance between two pHash values can be calculated using utility function
         *
         * @see {@link https://docs.imagekit.io/api-reference/metadata-api#perceptual-hash-phash}
         *
         * @param hashA
         * @param hashB
         */
        pHashDistance(hashA: string, hashB: string): number;
    }
}

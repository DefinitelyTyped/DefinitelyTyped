// Type definitions for imagekit 3.1
// Project: https://github.com/imagekit-developer/imagekit-nodejs
// Definitions by: Kevin Faulhaber <https://github.com/kemicofa>
//                 Romanos Tsouroplis <https://github.com/romdim>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

type TransformationPosition = 'path' | 'query';
type FileType = 'all' | 'image' | 'non-image';
type Item = 'file' | 'folder';
type CustomCoordinatesResponse = string | null;
// Taken from this help post: https://help.imagekit.io/en/articles/2434102-image-format-support-in-imagekit-for-resizing-compression-and-static-file-delivery
type FileFormat =
    | 'jpg'
    | 'png'
    | 'gif'
    | 'svg'
    | 'webp'
    | 'pdf'
    | 'js'
    | 'css'
    | 'txt'
    | 'mp4'
    | 'webm'
    | 'mov'
    | 'swf'
    | 'ts'
    | 'm3u8'
    | string;

interface Transformation {
    height?: string;
    width?: string;
    aspectRatio?: string;
    quality?: string;
    crop?: string;
    cropMode?: string;
    x?: string;
    y?: string;
    focus?: string;
    format?: string;
    radius?: string;
    background?: string;
    border?: string;
    rotation?: number;
    blur?: string;
    named?: string;
    overlayImage?: string;
    overlayX?: string;
    overlayY?: string;
    overlayFocus?: string;
    overlayHeight?: string;
    overlayWidth?: string;
    overlayText?: string;
    overlayTextFontSize?: string;
    overlayTextColor?: string;
    overlayAlpha?: string;
    overlayTextTypography?: string;
    overlayBackground?: string;
    overlayImageTrim?: string;
    progressive?: string;
    lossless?: string;
    trim?: string;
    metadata?: string;
    colorProfile?: string;
    defaultImage?: string;
    dpr?: string;
    effectSharpen?: string;
    effectUSM?: string;
    effectContrast?: string;
    effectGray?: string;
    original?: string;
}

interface UrlOptionsBase {
    transformation?: Transformation[];
    transformationPosition?: TransformationPosition;
    queryParameters?: { [key: string]: string | number };
    urlEndpoint?: string;
    signed?: boolean;
    expireSeconds?: number;
}

type UrlOptions = ({ src: string; path?: never } | { path: string; src?: never }) & UrlOptionsBase;

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
    useUniqueFileName?: boolean;
    /**
     * Set the tags while uploading the file.
     * - Comma-separated value of tags in format tag1,tag2,tag3. For example - t-shirt,round-neck,men
     * - The maximum length of all characters should not exceed 500.
     * - % is not allowed.
     * - If this field is not specified and the file is overwritten then the tags will be removed.
     */
    tags?: string;
    /**
     * The folder path (e.g. /images/folder/) in which the image has to be uploaded. If the folder(s) didn't exist before, a new folder(s) is created.
     * The folder name can contain:
     * - Alphanumeric Characters: a-z , A-Z , 0-9
     * - Special Characters: / _ and -
     * - Using multiple / creates a nested folder.
     * Default value - /
     */
    folder?: string;
    /**
     * Whether to mark the file as private or not. This is only relevant for image type files.
     * - Accepts true or false.
     * - If set true, the file is marked as private which restricts access to the original image URL and unnamed image transformations without signed URLs.
     *      Without the signed URL, only named transformations work on private images
     * Default value - false
     */
    isPrivateFile?: boolean;
    /**
     * Define an important area in the image. This is only relevant for image type files.
     * To be passed as a string with the x and y coordinates of the top-left corner, and width and height of the area of interest in format x,y,width,height. For example - 10,10,100,100
     * Can be used with fo-customtransformation.
     * If this field is not specified and the file is overwritten, then customCoordinates will be removed.
     */
    customCoordinates?: string;
    /**
     * Comma-separated values of the fields that you want ImageKit.io to return in response.
     *
     * For example, set the value of this field to tags,customCoordinates,isPrivateFile,metadata to get value of tags, customCoordinates, isPrivateFile , and metadata in the response.
     */
    responseFields?: string;
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
    tags?: string[];
    /**
     * Is the file marked as private. It can be either true or false.
     */
    isPrivateFile: boolean;
    /**
     * Value of custom coordinates associated with the image in format x,y,width,height.
     */
    customCoordinates: CustomCoordinatesResponse;
    /**
     * The metadata of the upload file. Use responseFields property in request to get the metadata returned in response of upload API.
     */
    metadata?: string;
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
    path?: string;
    /**
     * Type of files to include in result set. Accepts three values:
     * all - include all types of files in result set
     * image - only search in image type files
     * non-image - only search in files which are not image, e.g., JS or CSS or video files.
     */
    fileType?: FileType;
    /**
     * Comma-separated list of tags. Files matching any of the tags are included in result response. If no tag is matched, the file is not included in result set.
     */
    tags?: string;
    /**
     * Whether to include folders in search results or not. By default only files are searched.
     * Accepts true and false. If this is set to true then tags and fileType parameters are ignored.
     */
    includeFolder?: boolean;
    /**
     * The name of the file or folder.
     */
    name?: string;
    /**
     * The maximum number of results to return in response:
     * Minimum value - 1
     * Maximum value - 1000
     * Default value - 1000
     */
    limit?: number;
    /**
     * The number of results to skip before returning results.
     * Minimum value - 0
     * Default value - 0
     */
    skip?: number;
}

/**
 *
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
     * Type of item. It can be either file or folder.
     */
    type: Item;
    /**
     * Name of the file or folder.
     */
    name: string;

    createdAt: string;
    /**
     * The relative path of the file. In the case of an image, you can use this
     * path to construct different transformations.
     */
    filePath: string;
    /**
     * Array of tags associated with the image. If no tags are set, it will be null.
     */
    tags: string[] | null;
    /**
     * Is the file marked as private. It can be either true or false.
     */
    isPrivateFile: boolean;
    /**
     * Value of custom coordinates associated with the image in format x,y,width,height. If customCoordinates are not defined then it is null.
     */
    customCoordinates: CustomCoordinatesResponse;
    /**
     * A publicly accessible URL of the file.
     */
    url: string;
    /**
     * In case of an image, a small thumbnail URL.
     */
    thumbnail: string;
    /**
     * The type of file, it could be either image or non-image.
     */
    fileType: FileType;
}

interface FileDetailsResponse {
    fileId: string;
    type: Item;
    name: string;
    filePath: string;
    tags: string[] | null;
    isPrivateFile: boolean;
    customCoordinates: CustomCoordinatesResponse;
    url: string;
    thumbnail: string;
    fileType: FileType;
}

interface FileMetadataResponse {
    height: number;
    width: number;
    size: number;
    format: FileFormat;
    hasColorProfile: boolean;
    quality: number;
    density: number;
    hasTransparency: boolean;
    pHash: string;
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

interface FileDetailsOptions {
    tags?: string[];
    customCoordinates?: string;
}

interface BulkDeleteFilesResponse {
    successfullyDeletedFileIds: string[];
}

interface BulkDeleteFilesError extends Error {
    help: string;
    missingFileIds: string[];
}

interface PurgeCacheResponse {
    requestId: string;
}

interface PurgeCacheStatusResponse {
    status: 'Pending' | 'Completed';
}

interface Callback<T, E extends Error = Error> {
    (error?: E, response?: T): void;
}

declare class ImageKit {
    constructor(options: {
        publicKey: string;
        privateKey: string;
        urlEndpoint: string;
        transformationPosition?: TransformationPosition;
    });

    url(urlOptions: UrlOptions): string;

    listFiles(listFilesOptions: ListFileOptions, callback: Callback<ListFileResponse>): void;
    listFiles(listFilesOptions: ListFileOptions): Promise<ListFileResponse>;

    /**
     *
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
    upload(uploadOptions: UploadOptions, callback: Callback<UploadResponse>): void;

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
    upload(uploadOptions: UploadOptions): Promise<UploadResponse>;

    getFileDetails(fileId: string, callback: Callback<FileDetailsResponse>): void;
    getFileDetails(fileId: string): Promise<FileDetailsResponse>;

    getFileMetadata(fileId: string, callback: Callback<FileMetadataResponse>): void;
    getFileMetadata(fileId: string): Promise<FileMetadataResponse>;

    updateFileDetails(
        fileId: string,
        optionsFileDetails: FileDetailsOptions,
        callback: Callback<FileDetailsResponse>,
    ): void;
    updateFileDetails(fileId: string, optionsFileDetails: FileDetailsOptions): Promise<FileDetailsResponse>;

    deleteFile(fileId: string, callback: Callback<void>): void;
    deleteFile(fileId: string): Promise<void>;

    bulkDeleteFiles(fileIds: string[], callback: Callback<BulkDeleteFilesResponse, BulkDeleteFilesError>): void;
    bulkDeleteFiles(fileIds: string[]): Promise<BulkDeleteFilesResponse>;

    purgeCache(fullUrl: string, callback: Callback<PurgeCacheResponse>): void;
    purgeCache(fullUrl: string): Promise<PurgeCacheResponse>;

    getPurgeCacheStatus(cacheRequestId: string, callback: Callback<PurgeCacheStatusResponse>): void;
    getPurgeCacheStatus(cacheRequestId: string): Promise<PurgeCacheStatusResponse>;

    getAuthenticationParameters(token?: string, expire?: number): { token: string; expire: number; signature: string };

    pHashDistance(hashA: string, hashB: string): number;
}

export = ImageKit;

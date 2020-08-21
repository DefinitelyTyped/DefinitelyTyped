// Type definitions for imagekit 3.1
// Project: https://github.com/imagekit-developer/imagekit-nodejs
// Definitions by: Kevin Faulhaber <https://github.com/kemicofa>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

type TransformationPosition = 'path' | 'query';
type FileType = 'image' | 'non-image';
type Item = 'file' | 'folder';

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

/**
 * base response type
 *
 * primarily used to ensure compatibility amongst the inherited
 * response types when Callback is used.
 */
interface ImagekitResponse {}

interface UrlOptionsBase {
    transformation?: Transformation[];
    transformationPosition: TransformationPosition;
    queryParameters?: {[key: string]: string|number};
    urlEndpoint?: string;
    signed?: boolean;
    expireSeconds?: number;
}

interface UrlOptionsSrc extends UrlOptionsBase {
    src: string;
}

interface UrlOptionsPath extends UrlOptionsBase {
    path: string;
}

interface UploadOptions {
    file: number | string;
    fileName: string;
    useUniqueFileName?: boolean;
    tags?: string[];
    folder?: string;
    isPrivateFile?: boolean;
    customCoordinates?: string;
    responseFields: string;
}

interface UploadResponse extends ImagekitResponse {
    fileId: string;
    name: string;
    url: string;
    thumbnailUrl: string;
    height: number;
    width: number;
    size: number,
    filePath: string;
    fileType: FileType;
    tags?: string[];
    isPrivateFile?: boolean;
    customCoordinates?: string|null;
    metadata?: string;
}

interface ListFileOptions {
    path?: string;
    fileType?: FileType;
    tags?: string[];
    includeFolder?: boolean;
    name?: string;
    limit?: number;
    skip?: number;
}

interface ListFileResponse extends ImagekitResponse {
    fileId: string;
    type: Item;
    name: string;
    filePath: string;
    tags: string[] | null;
    isPrivateFile: boolean;
    customCoordinates: string;
    url: string;
    thumbnail: string;
    fileType: FileType;
}

interface FileDetailsResponse extends ImagekitResponse {
    fileId: string;
    type: Item;
    name: string;
    filePath: string;
    tags: string[] | null;
    isPrivateFile: boolean;
    customCoordinates: string | null;
    url: string;
    thumbnail: string;
    fileType: FileType;
}

interface FileMetadataResponse extends ImagekitResponse {
    height: number;
    width: number;
    size: number;
    // TODO: specify majority of returned formats
    format: 'jpg' | string;
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
        },
        thumbnail: {
            Compression: number;
            XResolution: number;
            YResolution: number;
            ResolutionUnit: number;
            ThumbnailOffset: number;
            ThumbnailLength: number;
        },
        exif: {
            ExposureTime: number;
            FNumber: number;
            ExposureProgram: number;
            ISO: number;
            ExifVersion: number;
            DateTimeOriginal: string;
            CreateDate: string;
            ShutterSpeedValue: number;
            ApertureValue: number;
            ExposureCompensation: number;
            MeteringMode: number;
            Flash: number;
            FocalLength: number;
            SubSecTime: number;
            SubSecTimeOriginal: number;
            SubSecTimeDigitized: number;
            FlashpixVersion: number;
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
            SceneCaptureType: number
        },
        gps: {
            GPSVersionID: number[];
        },
        interoperability: {
            InteropIndex: string;
            InteropVersion: string;
        },
        // TODO: determine structure of this object
        makernote: {[key: string]: string}
    }
}

interface FileDetailsOptions {
    tags?: string[];
    customCoordinates?: string
}

interface BulkDeleteFilesResponse extends ImagekitResponse{
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

// TODO: should possibly not force the ImagekitResponse extends
// TODO: check if error/response return objects can be optional
interface Callback<T extends ImagekitResponse, E extends Error = Error> {
    (error: E, response: T): void;
}

declare class ImageKit {

    constructor(options: {
        publicKey: string;
        privateKey: string;
        urlEndpoint: string;
        transformationPosition?: TransformationPosition;
    });

    url(urlOptions: UrlOptionsPath | UrlOptionsSrc): string;

    listFiles(listFilesOptions: ListFileOptions, callback: Callback<ListFileResponse>): void;
    listFiles(listFilesOptions: ListFileOptions): Promise<ListFileResponse>;

    upload(uploadOptions: UploadOptions, callback: Callback<UploadResponse>): void;
    upload(uploadOptions: UploadOptions): Promise<UploadResponse>;

    getFileDetails(fileId: string, callback: Callback<FileDetailsResponse>): void;
    getFileDetails(fileId: string): Promise<FileDetailsResponse>;

    getFileMetadata(fileId: string, callback: Callback<FileMetadataResponse>): void;
    getFileMetadata(fileId: string): Promise<FileMetadataResponse>;

    updateFileDetails(fileId: string, optionsFileDetails: FileDetailsOptions, callback: Callback<FileDetailsResponse>): void;
    updateFileDetails(fileId: string, optionsFileDetails: FileDetailsOptions): Promise<FileDetailsResponse>;

    // TODO: should probably pass 'void' instead of {}
    deleteFile(fileId: string, callback: Callback<{}>): void;
    deleteFile(fileId: string): Promise<void>;

    bulkDeleteFiles(fileIds: string[], callback: Callback<BulkDeleteFilesResponse, BulkDeleteFilesError>): void;
    bulkDeleteFiles(fileIds: string[]): Promise<BulkDeleteFilesResponse>;

    purgeCache(fullUrl: string, callback: Callback<PurgeCacheResponse>): void;
    purgeCache(fullUrl: string): Promise<PurgeCacheResponse>;

    getPurgeCacheStatus(cacheRequestId: string, caellback: Callback<PurgeCacheStatusResponse>): void;
    getPurgeCacheStatus(cacheRequestId: string): Promise<PurgeCacheStatusResponse>;

    getAuthenticationParameters(token?: string, expire?: number): {token: string; expire: number; signature: string};

    pHashDistance(hashA: string, hashB: string): number;
}

export = ImageKit;

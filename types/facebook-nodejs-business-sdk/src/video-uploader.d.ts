import AdVideo from "./objects/ad-video";
import FacebookAdsApi from "./api";
/**
 * Video uploader that can upload videos to adaccount
 **/
declare class VideoUploader {
    _session: VideoUploadSession | null | undefined;
    constructor();
    /**
     * Upload the given video file.
     * @param {AdVideo} video The AdVideo object that will be uploaded
     * @param {Boolean} [waitForEncoding] Whether to wait until encoding
     *   is finished
     **/
    upload(video: AdVideo, waitForEncoding: boolean): Record<string, any>;
}
interface SlideshowSpec {
    images_urls: string[];
    duration_ms: number;
    transition_ms: number;
}
declare class VideoUploadSession {
    _accountId: string;
    _api: FacebookAdsApi;
    _endOffset: number;
    _filePath: string | null | undefined;
    _sessionId: string;
    _slideshowSpec: SlideshowSpec | null | undefined;
    _startOffset: number;
    _startRequestManager: VideoUploadStartRequestManager;
    _transferRequestManager: VideoUploadTransferRequestManager;
    _finishRequestManager: VideoUploadFinishRequestManager;
    _video: AdVideo;
    _waitForEncoding: boolean;
    constructor(video: AdVideo, waitForEncoding?: boolean);
    start(): Record<string, any>;
    getStartRequestContext(): VideoUploadRequestContext;
    getTransferRequestContext(): VideoUploadRequestContext;
    getFinishRequestContext(): VideoUploadRequestContext;
}
/**
 * Abstract class for request managers
 **/
declare class VideoUploadRequestManager {
    _api: FacebookAdsApi;
    constructor(api: FacebookAdsApi);
    sendRequest(context: VideoUploadRequestContext): Record<string, any>;
    getParamsFromContext(context: VideoUploadRequestContext): Record<string, any>;
}
declare class VideoUploadStartRequestManager extends VideoUploadRequestManager {
    /**
     * Send start request with the given context
     **/
    sendRequest(context: VideoUploadRequestContext): Record<string, any>;
    getParamsFromContext(context: VideoUploadRequestContext): Record<string, any>;
}
declare class VideoUploadTransferRequestManager extends VideoUploadRequestManager {
    _startOffset: number;
    _endOffset: number;
    /**
     * Send transfer request with the given context
     **/
    sendRequest(context: VideoUploadRequestContext): Record<string, any>;
}
declare class VideoUploadFinishRequestManager extends VideoUploadRequestManager {
    /**
     * Send transfer request with the given context
     **/
    sendRequest(context: VideoUploadRequestContext): Record<string, any>;
    getParamsFromContext(context: VideoUploadRequestContext): Record<string, any>;
}
/**
 * Upload request context that contains the param data
 **/
declare class VideoUploadRequestContext {
    _accountId: string;
    _fileName: string;
    _filePath: string;
    _fileSize: number;
    _name: string;
    _sessionId: string;
    _startOffset: number;
    _endOffset: number;
    _slideshowSpec: SlideshowSpec;
    _videoFileChunk: string;
    get accountId(): string;
    set accountId(accountId: string);
    get fileName(): string;
    set fileName(fileName: string);
    get filePath(): string;
    set filePath(filePath: string);
    get fileSize(): number;
    set fileSize(fileSize: number);
    get name(): string;
    set name(name: string);
    get sessionId(): string;
    set sessionId(sessionId: string);
    get startOffset(): number;
    set startOffset(startOffset: number);
    get endOffset(): number;
    set endOffset(endOffset: number);
    get slideshowSpec(): SlideshowSpec;
    set slideshowSpec(slideshowSpec: SlideshowSpec);
    get videoFileChunk(): string;
    set videoFileChunk(videoFileChunk: string);
}
declare class VideoUploadRequest {
    _params: Record<string, any>;
    _files: Record<string, any>;
    _api: FacebookAdsApi;
    constructor(api: FacebookAdsApi);
    /**
     * Send the current request
     **/
    send(path: string | string[]): Record<string, any>;
    setParams(params: Record<string, any>, files?: Record<string, any>): void;
}
declare class VideoEncodingStatusChecker {
    static waitUntilReady(api: FacebookAdsApi, videoId: number, interval: number, timeout: number): Promise<void>;
    static getStatus(api: FacebookAdsApi, videoId: number): any;
}
export { VideoUploader, VideoUploadRequest, VideoEncodingStatusChecker };
export type { SlideshowSpec };

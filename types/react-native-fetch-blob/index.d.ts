export const RNFetchBlob: RNFetchBlobStatic;
export type RNFetchBlob = RNFetchBlobStatic;
export default RNFetchBlob;

interface RNFetchBlobStatic {
    fetch(
        method: Methods,
        url: string,
        headers?: { [key: string]: string },
        body?:
            | any
            | null,
    ): StatefulPromise<FetchBlobResponse>;
    base64: { encode(input: string): string; decode(input: string): string };
    android: AndroidApi;
    ios: IOSApi;
    config(options: RNFetchBlobConfig): RNFetchBlobStatic;
    session(name: string): RNFetchBlobSession;
    fs: FS;
    wrap(path: string): string;
    net: Net;
    polyfill: Polyfill;
    // this require external module https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/oboe
    JSONStream: any;
}

export interface Polyfill {
    Blob: PolyfillBlob;
    File: PolyfillFile;
    XMLHttpRequest: PolyfillXMLHttpRequest;
    ProgressEvent: PolyfillProgressEvent;
    Event: PolyfillEvent;
    FileReader: PolyfillFileReader;
    Fetch: PolyfillFetch;
}

export class PolyfillFetch extends RNFetchBlobFetchPolyfill {
    constructor(config: RNFetchBlobConfig);
}

export class RNFetchBlobFetchPolyfill {
    constructor(config: RNFetchBlobConfig);

    build(): (url: string, options: RNFetchBlobConfig) => StatefulPromise<RNFetchBlobFetchRepsonse>;
}

export interface RNFetchBlobFetchRepsonse {
    arrayBuffer(): Promise<any[]>;
    blob(): Promise<PolyfillBlob>;
    json(): Promise<any>;
    rawResp(): Promise<FetchBlobResponse>;
    text(): Promise<string>;
    bodyUsed: boolean;
    headers: any;
    ok: boolean;
    resp: FetchBlobResponse;
    rnfbResp: FetchBlobResponse;
    rnfbRespInfo: RNFetchBlobResponseInfo;
    status: number;
    type: string;
}

/**
 * RNFetchBlob response object class.
 */
export interface FetchBlobResponse {
    taskId: string;
    /**
     * get path of response temp file
     * @return File path of temp file.
     */
    path(): string;
    type: "base64" | "path" | "utf8";
    data: any;
    /**
     * Convert result to javascript RNFetchBlob object.
     * @return Return a promise resolves Blob object.
     */
    blob(contentType: string, sliceSize: number): Promise<PolyfillBlob>;
    /**
     * Convert result to text.
     * @return Decoded base64 string.
     */
    text(): string | Promise<any>;
    /**
     * Convert result to JSON object.
     * @return Parsed javascript object.
     */
    json(): any;
    /**
     * Return BASE64 string directly.
     * @return BASE64 string of response body.
     */
    base64(): any;
    /**
     * Remove cahced file
     */
    flush(): void;
    respInfo: RNFetchBlobResponseInfo;
    session(name: string): RNFetchBlobSession | null;
    /**
     * Read file content with given encoding, if the response does not contains
     * a file path, show warning message
     * @param  encode Encode type, should be one of `base64`, `ascrii`, `utf8`.
     */
    readFile(encode: Encoding): Promise<any> | null;
    /**
     * Start read stream from cached file
     * @param  encode Encode type, should be one of `base64`, `ascrii`, `utf8`.
     */
    readStream(encode: Encoding): RNFetchBlobStream | null;
}

export interface PolyfillFileReader extends EventTarget {
    isRNFBPolyFill: boolean;
    onloadstart(e: Event): void;
    onprogress(e: Event): void;
    onload(e: Event): void;
    onabort(e: Event): void;
    onerror(e: Event): void;
    onloadend(e: Event): void;

    abort(): void;
    readAsArrayBuffer(b: PolyfillBlob): void;
    readAsBinaryString(b: PolyfillBlob): void;
    readAsText(b: PolyfillBlob, label?: string): void;
    readAsDataURL(b: PolyfillBlob): void;

    readyState: number;
    result: number;
}

export namespace PolyfillFileReader {
    const EMPTY: number;
    const LOADING: number;
    const DONE: number;
}

export class PolyfillEvent {
}

export interface PolyfillProgressEvent extends EventTarget {
    lengthComputable: boolean;
    loaded: number;
    total: number;
}

export class PolyfillBlob extends EventTarget {
    /**
     * RNFetchBlob Blob polyfill, create a Blob directly from file path, BASE64
     * encoded data, and string. The conversion is done implicitly according to
     * given `mime`. However, the blob creation is asynchronously, to register
     * event `onCreated` is need to ensure the Blob is creadted.
     *
     * @param data Content of Blob object
     * @param cType Content type settings of Blob object, `text/plain` by default
     * @param defer When this argument set to `true`, blob constructor will not invoke blob created event automatically.
     */
    constructor(data: any, cType: any, defer: boolean);

    /**
     * Since Blob content will asynchronously write to a file during creation,
     * use this method to register an event handler for Blob initialized event.
     * @param  fn An event handler invoked when Blob created
     * @return The Blob object instance itself
     */
    onCreated(fn: () => void): PolyfillBlob;

    markAsDerived(): void;

    /**
     * Get file reference of the Blob object.
     * @return Blob file reference which can be consumed by RNFetchBlob fs
     */
    getRNFetchBlobRef(): string;

    /**
     * Create a Blob object which is sliced from current object
     * @param  start    Start byte number
     * @param  end      End byte number
     * @param  contentType Optional, content type of new Blob object
     */
    slice(start?: number, end?: number, contentType?: string): PolyfillBlob;

    /**
     * Read data of the Blob object, this is not standard method.
     * @param  encoding Read data with encoding
     */
    readBlob(encoding: string): Promise<any>;

    /**
     * Release the resource of the Blob object.
     * @nonstandard
     */
    close(): Promise<void>;
}

export namespace PolyfillBlob {
    function clearCache(): void;

    function build(data: any, cType: any): Promise<PolyfillBlob>;

    function setLog(level: number): void;
}

export class PolyfillFile extends PolyfillBlob {
}

export interface PolyfillXMLHttpRequest extends PolyfillXMLHttpRequestEventTarget {
    upload: PolyfillXMLHttpRequestEventTarget;
    readonly UNSENT: number;
    readonly OPENED: number;
    readonly HEADERS_RECEIVED: number;
    readonly LOADING: number;
    readonly DONE: number;

    /**
     * XMLHttpRequest.open, always async, user and password not supported. When
     * this method invoked, headers should becomes empty again.
     * @param  method Request method
     * @param  url Request URL
     * @param  async Always async
     * @param  user NOT SUPPORTED
     * @param  password NOT SUPPORTED
     */
    open(method: string, url: string, async: true, user: any, password: any): void;

    /**
     * Invoke this function to send HTTP request, and set body.
     * @param body Body in RNfetchblob flavor
     */
    send(body: any): void;

    overrideMimeType(mime: string): void;

    setRequestHeader(name: string, value: string): void;

    abort(): void;

    getResponseHeader(field: string): string | null;

    getAllResponseHeaders(): string | null;

    onreadystatechange(e: Event): void;
    readyState: number;
    status: number;
    statusText: string;
    response: any;
    responseText: any;
    responseURL: string;
    responseHeaders: any;
    timeout: number;
    responseType: string;
}

export namespace PolyfillXMLHttpRequest {
    const binaryContentTypes: string[];
    const UNSENT: number;
    const OPENED: number;
    const HEADERS_RECEIVED: number;
    const LOADING: number;
    const DONE: number;

    function setLog(level: number): void;

    function addBinaryContentType(substr: string): void;

    function removeBinaryContentType(): void;
}

export interface PolyfillXMLHttpRequestEventTarget extends EventTarget {
    onabort(e: Event): void;
    onerror(e: Event): void;
    onload(e: Event): void;
    onloadstart(e: Event): void;
    onprogress(e: Event): void;
    ontimeout(e: Event): void;
    onloadend(e: Event): void;
}

export interface Net {
    /**
     * Get cookie according to the given url.
     * @param  domain Domain of the cookies to be removed, remove all
     * @return     Cookies of a specific domain.
     */
    getCookies(domain: string): Promise<string[]>;

    /**
     * Remove cookies for a specific domain
     * @param  domain Domain of the cookies to be removed, remove all
     * cookies when this is null.
     */
    removeCookies(domain?: string): Promise<null>;
}

export interface FS {
    RNFetchBlobSession: RNFetchBlobSession;

    /**
     * Remove file at path.
     * @param    path:string Path of target file.
     */
    unlink(path: string): Promise<void>;

    /**
     * Create a directory.
     * @param  path Path of directory to be created
     */
    mkdir(path: string): Promise<void>;

    /**
     * Get a file cache session
     * @param  name Stream ID
     */
    session(name: string): RNFetchBlobSession;

    ls(path: string): Promise<string[]>;

    /**
     * Create file stream from file at `path`.
     * @param  path   The file path.
     * @param  encoding Data encoding, should be one of `base64`, `utf8`, `ascii`
     * @param  bufferSize Size of stream buffer.
     * @return RNFetchBlobStream stream instance.
     */
    readStream(path: string, encoding: Encoding, bufferSize?: number, tick?: number): Promise<RNFetchBlobReadStream>;

    mv(path: string, dest: string): Promise<boolean>;

    cp(path: string, dest: string): Promise<boolean>;

    /**
     * Create write stream to a file.
     * @param  path Target path of file stream.
     * @param  encoding Encoding of input data.
     * @param  append  A flag represent if data append to existing ones.
     * @return A promise resolves a `WriteStream` object.
     */
    writeStream(path: string, encoding: Encoding, append?: boolean): Promise<RNFetchBlobWriteStream>;

    /**
     * Write data to file.
     * @param  path  Path of the file.
     * @param  data Data to write to the file.
     * @param  encoding Encoding of data (Optional).
     */
    writeFile(path: string, data: string | number[], encoding?: Encoding): Promise<void>;

    appendFile(path: string, data: string | number[], encoding?: Encoding): Promise<void>;

    /**
     * Wrapper method of readStream.
     * @param  path Path of the file.
     * @param  encoding Encoding of read stream.
     */
    readFile(path: string, encoding: Encoding, bufferSize?: number): Promise<any>;
    /**
     * Check if file exists and if it is a folder.
     * @param  path Path to check
     */
    exists(path: string): Promise<boolean>;

    createFile(path: string, data: string, encoding: Encoding): Promise<void>;

    isDir(path: string): Promise<boolean>;

    /**
     * Show statistic data of a path.
     * @param  path Target path
     */
    stat(path: string): Promise<RNFetchBlobStat>;

    lstat(path: string): Promise<RNFetchBlobStat[]>;

    /**
     * Android only method, request media scanner to scan the file.
     * @param  pairs Array contains Key value pairs with key `path` and `mime`.
     */
    scanFile(pairs: Array<{ [key: string]: string }>): Promise<void>;

    dirs: Dirs;

    slice(src: string, dest: string, start: number, end: number): Promise<void>;
    asset(path: string): string;
    df(): Promise<RNFetchBlobDf>;
}

export interface RNFetchBlobDfIOS {
    free?: number;
    total?: number;
}

export interface RNFetchBlobDfAndroid {
    external_free?: string;
    external_total?: string;
    internal_free?: string;
    internal_total?: string;
}

export type RNFetchBlobDf = RNFetchBlobDfIOS & RNFetchBlobDfAndroid;

export interface Dirs {
    DocumentDir: string;
    CacheDir: string;
    PictureDir: string;
    MusicDir: string;
    MovieDir: string;
    DownloadDir: string;
    DCIMDir: string;
    SDCardDir: string;
    MainBundleDir: string;
}

export interface RNFetchBlobWriteStream {
    id: string;
    encoding: string;
    append: boolean;

    write(data: string): Promise<void>;
    close(): void;
}

export interface RNFetchBlobReadStream {
    path: string;
    encoding: Encoding;
    bufferSize?: number | undefined;
    closed: boolean;
    tick: number;

    open(): void;

    onData(fn: (chunk: string | number[]) => void): void;

    onError(fn: (err: any) => void): void;

    onEnd(fn: () => void): void;
}

type Encoding = "utf8" | "ascii" | "base64";

/* tslint:disable-next-line interface-name*/
export interface IOSApi {
    /**
     * Open a file in {@link https://developer.apple.com/reference/uikit/uidocumentinteractioncontroller UIDocumentInteractionController},
     * this is the default document viewer of iOS, supports several kinds of files. On Android, there's an similar method {@link android.actionViewIntent}.
     * @param path This is a required field, the path to the document. The path should NOT contains any scheme prefix.
     */
    previewDocument(path: string): void;

    /**
     * Show options menu for interact with the file.
     * @param path This is a required field, the path to the document. The path should NOT contains any scheme prefix.
     */
    openDocument(path: string): void;
}

export interface AndroidApi {
    /**
     * When sending an ACTION_VIEW intent with given file path and MIME type, system will try to open an
     * App to handle the file. For example, open Gallery app to view an image, or install APK.
     * @param path Path of the file to be opened.
     * @param mime Basically system will open an app according to this MIME type.
     */
    actionViewIntent(path: string, mime: string): Promise<any>;
}

type Methods = "POST" | "GET" | "DELETE" | "PUT" | "post" | "get" | "delete" | "put";

/**
 * A declare class inherits Promise, it has extra method like progress, uploadProgress,
 * and cancel which can help managing an asynchronous task's state.
 */
export interface StatefulPromise<T> extends Promise<T> {
    /**
     * Cancel the request when invoke this method.
     */
    cancel(cb?: (reason: any) => void): StatefulPromise<FetchBlobResponse>;

    /**
     * Add an event listener which triggers when data receiving from server.
     */
    progress(callback: (received: number, total: number) => void): StatefulPromise<FetchBlobResponse>;

    /**
     * Add an event listener with custom configuration
     */
    progress(
        config: { count?: number | undefined; interval?: number | undefined },
        callback: (received: number, total: number) => void,
    ): StatefulPromise<FetchBlobResponse>;

    /**
     * Add an event listener with custom configuration.
     */
    uploadProgress(callback: (sent: number, total: number) => void): StatefulPromise<FetchBlobResponse>;

    /**
     * Add an event listener with custom configuration
     */
    uploadProgress(
        config: { count?: number | undefined; interval?: number | undefined },
        callback: (sent: number, total: number) => void,
    ): StatefulPromise<FetchBlobResponse>;

    /**
     * An IOS only API, when IOS app turns into background network tasks will be terminated after ~180 seconds,
     * in order to handle these expired tasks, you can register an event handler, which will be called after the
     * app become active.
     */
    expire(callback: () => void): StatefulPromise<void>;
}

export class RNFetchBlobSession {
    constructor(name: string, list: string[]);

    add(path: string): RNFetchBlobSession;

    remove(path: string): RNFetchBlobSession;

    dispose(): Promise<void>;

    list(): string[];

    name: string;

    static getSession(name: string): any;

    static setSession(name: string): void;

    static removeSession(name: string): void;
}

/**
 * A set of configurations that will be injected into a fetch method, with the following properties.
 */
export interface RNFetchBlobConfig {
    /**
     * When this property is true, the downloaded data will overwrite the existing file. (true by default)
     */
    overwrite?: boolean | undefined;

    /**
     * Set timeout of the request (in milliseconds).
     */
    timeout?: number | undefined;

    /**
     * Set this property to true to display a network indicator on status bar, this feature is only supported on IOS.
     */
    indicator?: boolean | undefined;

    /**
     * Set this property to true will allow the request create connection with server have self-signed SSL
     * certification. This is not recommended to use in production.
     */
    trusty?: boolean | undefined;

    /**
     * Set this property to true will makes response data of the fetch stored in a temp file, by default the temp
     * file will stored in App's own root folder with file name template RNFetchBlob_tmp${timestamp}.
     */
    fileCache?: boolean | undefined;

    /**
     * Set this property to change temp file extension that created by fetch response data.
     */
    appendExt?: string | undefined;

    /**
     * When this property has value, fetch API will try to store response data in the path ignoring fileCache and
     * appendExt property.
     */
    path?: string | undefined;

    session?: string | undefined;

    addAndroidDownloads?: AddAndroidDownloads | undefined;

    /**
     * Fix IOS request timeout issue #368 by change default request setting to defaultSessionConfiguration, and make backgroundSessionConfigurationWithIdentifier optional
     */
    IOSBackgroundTask?: boolean | undefined;
}

export interface AddAndroidDownloads {
    /**
     * download file using Android download manager or not.
     */
    useDownloadManager?: boolean | undefined;
    /**
     * title of the file
     */
    title?: string | undefined;
    /**
     * File description of the file.
     */
    description?: string | undefined;
    /**
     * The destination which the file will be downloaded, it SHOULD be a location on external storage (DCIMDir).
     */
    path?: string | undefined;
    /**
     * MIME type of the file. By default is text/plain
     */
    mime?: string | undefined;
    /**
     * A boolean value, see Officail Document
     * (https://developer.android.com/reference/android/app/DownloadManager.html#addCompletedDownload(java.lang.String, java.lang.String, boolean, java.lang.String, java.lang.String, long, boolean))
     */
    mediaScannable?: boolean | undefined;
    /**
     * A boolean value decide whether show a notification when download complete.
     */
    notification?: boolean | undefined;
}

export interface RNFetchBlobResponseInfo {
    taskId: string;
    state: number;
    headers: any;
    status: number;
    respType: "text" | "blob" | "" | "json";
    rnfbEncode: "path" | "base64" | "ascii" | "utf8";
}

export interface RNFetchBlobStream {
    onData(): void;
    onError(): void;
    onEnd(): void;
}

export class RNFetchBlobFile {
}

export class RNFetchBlobStat {
    lastModified: string;
    size: string;
    type: "directory" | "file";
    path: string;
    filename: string;
}

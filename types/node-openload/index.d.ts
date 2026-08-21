/**
 * The model for the base config object needed for the Openload constructor
 */
interface OpenloadConfig {
    /* the api_key, available directly from the WebUI after successful login */
    api_key: string;
    /* the api_login, a string available from the WebUI, NOT the user's e-mail */
    api_login: string;
    /* the api_version to target, needed for forming the URL, by default 1 */
    api_version?: number | undefined;
}

/**
 * The account info response
 */
interface AccountInfo {
    extid: string;
    email: string;
    signup_at: string;
    storage_left: number;
    storage_used: string;
    traffic: {
        left: number;
        used_24h: number;
    };
    balance: number;
}

interface DownloadTicket {
    ticket: string;
    captcha_url: string;
    captcha_w: number;
    captcha_h: number;
    wait_time: number;
    valid_until: string;
}

interface DownloadLink {
    name: string;
    size: number;
    sha1: string;
    content_type: string;
    upload_at: string;
    url: string;
    token: string;
}

interface DownloadLinkParam {
    file: string;
    ticket: string;
    captcha_response: string;
}

interface FileInfo {
    [key: string]: {
        id: string;
        status: number;
        name: string;
        size: number;
        sha1: string;
        content_type: string;
    };
}

interface Upload {
    url: string;
    valid_until: string;
}

interface UploadParam {
    file: string | ArrayBuffer;
    folder?: string | undefined;
    filename?: string | undefined;
    contentType?: string | undefined;
}

interface RemoteUpload {
    id: string;
    folderid: string;
}

interface RemoteUploadParam {
    url: string;
    folder?: string | undefined;
    headers?: string | undefined;
}

interface RemoteUploadStatus {
    [key: number]: {
        id: number;
        remoteurl: string;
        status: string;
        bytes_loaded: string;
        bytes_total: string;
        folderid: string;
        added: string;
        last_update: string;
        extid: string | boolean;
        url: string | boolean;
    };
}

interface RemoteUploadStatusParam {
    limit?: number | undefined;
    id?: string | undefined;
}

interface ListFolder {
    folders: [
        {
            id: string;
            name: string;
        },
    ];
    files: [
        {
            name: string;
            sha1: string;
            folderid: string;
            upload_at: string;
            status: string;
            size: string;
            content_type: string;
            download_count: string;
            cstatus: string;
            link: string;
            linkextid: string;
        },
    ];
}

interface RunningFileConverts {
    name: string;
    id: string;
    status: string;
    last_update: string;
    progress: number;
    retries: string;
    link: string;
    linkextid: string;
}

interface UploadProgress {
    percent: number;
    transferred: number;
    total: number;
}

/**
 * The Openload base class, contains all the supported endpoints as member functions
 */
declare class Openload {
    private _version: number;
    private _locationPrefix: string;
    private _config: OpenloadConfig;

    constructor(config: OpenloadConfig);

    // TypeScript Version: 3.6
    get config(): OpenloadConfig;

    // TypeScript Version: 3.6
    set config(object: OpenloadConfig);

    // TypeScript Version: 3.6
    get locationPrefix(): string;

    getAccountInfo(): Promise<AccountInfo>;

    getDownloadTicket(file: string): Promise<DownloadTicket>;

    getDownloadLink(obj: DownloadLinkParam): Promise<DownloadLink>;

    getDownload(file: string): Promise<DownloadLink>;

    getFileInfo(file: string): Promise<FileInfo>;

    deleteFile(file: string | string[]): Promise<[boolean]>;

    listFolder(folder: string): Promise<ListFolder>;

    getFolder(folder: string): Promise<ListFolder>;

    remoteUpload(obj: RemoteUploadParam): Promise<RemoteUpload>;

    remoteUploadStatus(obj: RemoteUploadStatusParam): Promise<RemoteUploadStatus>;

    upload(obj: UploadParam, cb: (progress: UploadProgress) => void): Promise<Upload>;

    getSplashImage(file: string): Promise<string>;
}

/**
 * Exports a Singleton of the Openload class by default
 * @param config The base config containing the user credentials
 * @returns An Openload singleton
 */
declare function openload(config: OpenloadConfig): Openload;
export = openload;

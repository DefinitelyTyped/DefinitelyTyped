// Type definitions for node-openload 2.2
// Project: https://github.com/saschazar21/node-openload#readme
// Definitions by: Sascha Zarhuber <https://github.com/saschazar21>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * The model for the base config object needed for the Openload constructor
 */
export interface OpenloadConfig {
    /* the api_key, available directly from the WebUI after successful login */
    api_key: string;
    /* the api_login, a string available from the WebUI, NOT the user's e-mail */
    api_login: string;
    /* the api_version to target, needed for forming the URL, by default 1 */
    api_version?: number;
}

/**
 * The account info response
 */
export interface AccountInfo {
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

export interface DownloadTicket {
    ticket: string;
    captcha_url: string;
    captcha_w: number;
    captcha_h: number;
    wait_time: number;
    valid_until: string;
}

export interface DownloadLink {
    name: string;
    size: number;
    sha1: string;
    content_type: string;
    upload_at: string;
    url: string;
    token: string;
}

export interface DownloadLinkParam {
    file: string;
    ticket: string;
    captcha_response: string;
}

export interface FileInfo {
    [key: string]: {
        id: string;
        status: number;
        name: string;
        size: number;
        sha1: string;
        content_type: string;
    };
}

export interface Upload {
    url: string;
    valid_until: string;
}

export interface UploadParam {
    file: string | ArrayBuffer;
    folder?: string;
    filename?: string;
    contentType?: string;
}

export interface RemoteUpload {
    id: string;
    folderid: string;
}

export interface RemoteUploadParam {
    url: string;
    folder?: string;
    headers?: string;
}

export interface RemoteUploadStatus {
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

export interface RemoteUploadStatusParam {
    limit?: number;
    id?: string;
}

export interface ListFolder {
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

export interface RunningFileConverts {
    name: string;
    id: string;
    status: string;
    last_update: string;
    progress: number;
    retries: string;
    link: string;
    linkextid: string;
}

export interface UploadProgress {
    percent: number;
    transferred: number;
    total: number;
}

/**
 * The Openload base class, contains all the supported endpoints as member functions
 */
export class Openload {
    private _version: number;
    private _locationPrefix: string;
    private _config: OpenloadConfig;

    constructor(config: OpenloadConfig);

    get config(): OpenloadConfig;
    set config(object: OpenloadConfig);
    get locationPrefix(): string;

    public getAccountInfo(): Promise<AccountInfo>;

    public getDownloadTicket(file: string): Promise<DownloadTicket>;

    public getDownloadLink(obj: DownloadLinkParam): Promise<DownloadLink>;

    public getDownload(file: string): Promise<DownloadLink>;

    public getFileInfo(file: string): Promise<FileInfo>;

    public deleteFile(file: string | string[]): Promise<[boolean]>;

    public listFolder(folder: string): Promise<ListFolder>;

    public getFolder(folder: string): Promise<ListFolder>;

    public remoteUpload(obj: RemoteUploadParam): Promise<RemoteUpload>;

    public remoteUploadStatus(obj: RemoteUploadStatusParam): Promise<RemoteUploadStatus>;

    public upload(obj: UploadParam, cb: (progress: UploadProgress) => void): Promise<Upload>;

    public getSplashImage(file: string): Promise<string>;
}

/**
 * Exports a Singleton of the Openload class by default
 * @param config {OpenloadConfig} The base config containing the user credentials
 * @returns {Openload} An Openload singleton
 */
export default function openload(config: OpenloadConfig): Openload;

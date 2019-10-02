// Type definitions for node-openload 2.2
// Project: https://github.com/saschazar21/node-openload#readme
// Definitions by: Sascha Zarhuber <https://github.com/saschazar21>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * The model for the base config object needed for the Openload constructor
 */
interface IOpenloadConfig {
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
interface IAccountInfo {
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

interface IDownloadTicket {
    ticket: string;
    captcha_url: string;
    captcha_w: number;
    captcha_h: number;
    wait_time: number;
    valid_until: string;
}

interface IDownloadLink {
    name: string;
    size: number;
    sha1: string;
    content_type: string;
    upload_at: string;
    url: string;
    token: string;
}

interface IDownloadLinkParam {
    file: string;
    ticket: string;
    captcha_response: string;
}

interface IFileInfo {
    [key: string]: {
        id: string;
        status: number;
        name: string;
        size: number;
        sha1: string;
        content_type: string;
    };
}

interface IUpload {
    url: string;
    valid_until: string;
}

interface IUploadParam {
    file: string | ArrayBuffer;
    folder?: string;
    filename?: string;
    contentType?: string;
}

interface IRemoteUpload {
    id: string;
    folderid: string;
}

interface IRemoteUploadParam {
    url: string;
    folder?: string;
    headers?: string;
}

interface IRemoteUploadStatus {
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

interface IRemoteUploadStatusParam {
    limit?: number;
    id?: string;
}

interface IListFolder {
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

interface IRunningFileConverts {
    name: string;
    id: string;
    status: string;
    last_update: string;
    progress: number;
    retries: string;
    link: string;
    linkextid: string;
}

interface IUploadProgress {
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
    private _config: IOpenloadConfig;

    constructor(config: IOpenloadConfig);

    get config(): IOpenloadConfig;
    set config(object: IOpenloadConfig);
    get locationPrefix(): string;

    public getAccountInfo(): Promise<{
        status: number;
        msg: string;
        result: IAccountInfo;
    }>;

    public getDownloadTicket(
        file: string,
    ): Promise<{
        status: number;
        msg: string;
        result: IDownloadTicket;
    }>;

    public getDownloadLink(
        obj: IDownloadLinkParam,
    ): Promise<{
        status: number;
        msg: string;
        result: IDownloadLink;
    }>;

    public getDownload(
        file: string,
    ): Promise<{
        status: number;
        msg: string;
        result: IDownloadTicket;
    }>;

    public getFileInfo(
        file: string,
    ): Promise<{
        status: number;
        msg: string;
        result: IFileInfo;
    }>;

    public deleteFile(
        file: string | string[],
    ): Promise<
        [
            {
                status: number;
                msg: string;
                result: boolean;
            },
        ]
    >;

    public listFolder(
        folder: string,
    ): Promise<{
        status: number;
        msg: string;
        result: IListFolder;
    }>;

    public getFolder(
        folder: string,
    ): Promise<{
        status: number;
        msg: string;
        result: IListFolder;
    }>;

    public remoteUpload(
        obj: IRemoteUploadParam,
    ): Promise<{
        status: number;
        msg: string;
        result: IRemoteUpload;
    }>;

    public remoteUploadStatus(
        obj: IRemoteUploadStatusParam,
    ): Promise<{
        status: number;
        msg: string;
        result: IRemoteUploadStatus;
    }>;

    public upload(
        obj: IUploadParam,
        cb: (progress: IUploadProgress) => void,
    ): Promise<{
        status: number;
        msg: string;
        result: IUpload;
    }>;

    public getSplashImage(
        file: string,
    ): Promise<{
        status: number;
        msg: string;
        result: string;
    }>;
}

/**
 * Exports a Singleton of the Openload class by default
 * @param config {OpenloadConfig} The base config containing the user credentials
 * @returns {Openload} An Openload singleton
 */
export default function openload(config: IOpenloadConfig): Openload;

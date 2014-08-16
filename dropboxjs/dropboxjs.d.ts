// Type definitions for dropbox-js
// Project: https://github.com/dropbox/dropbox-js
// Definitions by: Steve Fenton <https://github.com/Steve-Fenton>, Pedro Casaubon <https://github.com/xperiments>
// Definitions: https://github.com/borisyankov/DefinitelyTyped


declare module Dropbox {


    interface QueryParams {
        [key: string]: any;
    }
    interface Credentials {
        key: string;
        secret?: string;
        token?: string;
        uid?: string;
    }


    /* Callbacks */

    interface AuthenticateCallback {
        (err: ApiError, client: Client): void;
        (err: AuthError, client: Client): void;
    }

    interface QueryParamsCallback {
        (queryParams: QueryParams): void;
    }

    interface ClientFileReadCallback {

        (err: ApiError, fileContents: string, stat: File.Stat, rangeInfo: Http.RangeInfo): void;
    }

    interface ClientFileWriteCallback {

        (err: ApiError, stat: File.Stat): void;
    }

    interface ResumableUploadStepCallback {
        (err: ApiError, uploadCursor: Http.UploadCursor): void;
    }

    interface ReadThumbnailCallback {
        (err: ApiError, imageData: string, stat: File.Stat): void;
        (err: ApiError, imageData: Blob, stat: File.Stat): void;
    }

    interface FileStatCallback {
        (err: ApiError, stat: File.Stat): void;
    }

    /* Options */

    interface AuthenticateOptions {
        interactive: boolean;
    }

    interface SingOutOptions {
        mustInvalidate: boolean;
    }

    interface AccountInfoOptions {
        httpCache: boolean;
    }

    interface ClientFileReadOptions {

        versionTag?: string;
        rev?: string;
        arrayBuffer?: boolean;
        blob?: boolean;
        buffer?: boolean;
        binary?: boolean;
        length?: number;
        start?: number;
        httpCache?: boolean;
    }

    interface ClientFileWriteOptions {
        lastVersionTag?: string;
        parentRev?: string;
        noOverwrite?: boolean;
    }

    interface ReadDirOptions {
        removed?: boolean;
        deleted?: boolean;
        limit?: any;
        versionTag?: string;
        contentHash?: string;
        httpCache?: boolean;
    }

    interface MakeURLOptions {
        download?: boolean;
        downloadHack?: boolean;
        long?: boolean;
        longUrl?: boolean;
    }

    interface HistoryOptions {
        limit?: number;
        httpCache?: boolean;

    }

    interface ThumbnailUrlOptions {
        png?: boolean;
        format?: string;
        size?: string;
    }

    interface ReadThumbnailOptions extends ThumbnailUrlOptions {
        arrayBuffer?: boolean;
        blob?: boolean;
        buffer?: boolean;
    }

    interface FindByNameOptions {
        limit?: number;
        removed?: boolean;
        deleted?: boolean;
        httpCache?: boolean;

    }

    interface RedirectOptions {
        redirectUrl?: string;
        redirectFile?: string;
        scope?: string;
        rememberUser?: boolean;
    }

    module Util {

        class EventSource {
            constructor(options: { cancelable: boolean });
            addListener(listener: (event: any) => void): EventSource;
            removeListener(listener: (event: any) => void): EventSource;
            dispatch(event: {}): boolean;
        }

        class Oauth {
            static queryParamsFromUrl(url: string): QueryParams;
            static randomAuthStateParam(): string;
            checkAuthStateParam(stateParam: string): boolean;
        }

        class Xhr {
            xhr: XMLHttpRequest;
            onError: (error: ApiError, callBack: (error: ApiError) => void) => void;

            constructor(method: string, baseUrl: string);
            static urlEncode(obj: {}): string;
            static urlEncodeValue(obj: {}): string;
            static urlDecode(string: {}): QueryParams;


            setParams(params: QueryParams): Xhr;
            setCallback(callback: (err: ApiError, responseType: string, metadataHeader: {}, headers: {}) => void): Xhr;
            signWithOauth(oauth: Oauth, cacheFriendly: boolean): Xhr;
            addOauthParams(oauth: Oauth): Xhr;
            addOauthHeader(oauth: Oauth): Xhr;

            setBody(body: string): Xhr;
            setBody(body: Blob): Xhr;
            setBody(body: ArrayBuffer): Xhr;

            setResponseType(responseType: string): Xhr;
            setHeader(headerName: string, value: string): Xhr;
            reportResponseHeaders(): Xhr;
            setFileField(fieldName: string, fileName: string, fileData: string, contentType?: string): void;
            setFileField(fieldName: string, fileName: string, fileData: Blob, contentType?: string): void;
            setFileField(fieldName: string, fileName: string, fileData: File, contentType?: string): void;
            prepare(): Xhr;
            send(callback: (err: ApiError, responseType: string, metadataHeader: {}) => void): Xhr;
            onReadyStateChange(): void;
            onXdrLoad(): void;
            onXdrError(): void;
        }
    }
    module Http {
        class AppInfo {
            static ICON_SMALL: number;
            static ICON_LARGE: number;
            static parse(appInfo: {}, appKey?: string): AppInfo;
            name: string;
            key: string;
            canUseDatastores: boolean;
            canUseFiles: boolean;
            hasAppFolder: boolean;
            canUseFullDropbox: boolean;
            icon(width: number, height?: number): void;
        }

        class PollResult {
            static parse(response: {}): PollResult;
            hasChanges: boolean;
            retryAfter: number;
        }

        class PulledChanges {
            static parse(deltaInfo: {}): PulledChanges;
            blankSlate: boolean;
            cursorTag: string;
            shouldPullAgain: boolean;
            shouldBackOff: boolean;
            cursor(): string;
        }

        class PulledChange {
            static parse(entry: {}): PulledChange;
            path: string;
            wasRemoved: boolean;
            stat: File.Stat;
        }

        class RangeInfo {
            static parse(headerValue: string): RangeInfo;
            start: number;
            size: number;
            end: number;
        }

        class UploadCursor {
            static parse(cursorData: string): UploadCursor;
            static parse(cursorData: {}): UploadCursor;
            constructor(cursorData: string);
            constructor(cursorData: {});
            tag: string;
            offset: number;
            expiresAt: Date;
            toJSON(): {};
        }
    }
    module File {

        interface StatOptions {
            version: number;
            removed: boolean;
            deleted: boolean;
            readDir: boolean;
            versionTag: string;
            rev: string;
            contentHash: string;
            hash: string;
            httpCache: boolean;
        }

        class ShareUrl {
            static parse(urlData: string, isDirect: boolean): ShareUrl;
            static parse(urlData: {}, isDirect: boolean): ShareUrl;
            url: string;
            expiresAt: Date;
            isDirect: boolean;
            isPreview: boolean;
            toJSON(): {};
        }

        class CopyReference {
            static parse(refData: string): CopyReference;
            static parse(refData: {}): CopyReference;
            tag: string;
            expiresAt: Date;
            toJSON(): {};
        }

        class Stat {
            static parse(metadata: {}): Stat;
            path: string;
            name: string;
            inAppFolder: boolean;
            isFolder: boolean;
            isFile: boolean;
            isRemoved: boolean;
            typeIcon: string;
            versionTag: string;
            contentHash: string;
            mimeType: string;
            size: number;
            humanSize: string;
            hasThumbnail: boolean;
            modifiedAt: Date;
            clientModifiedAt: Date;
            toJSON(): {};
        }
    }
    module AuthDriver {

        /** Do not use class! TypeScript definition implementation detail : https://github.com/Microsoft/TypeScript/issues/371 */
        class IAuthDriver {
            doAuthorize(authUrl: string, stateParam: string, client: Client, callback?: QueryParamsCallback): void;
        }

        class BrowserBase {
            static localStorage(): Storage;
            static currentLocation(): string;
            static cleanupLocation(): void;

            constructor(options: { scope: string; rememberUser: boolean });
            authType(): string;
            onAuthStepChange(client: Client, callback: () => void): void;
            locationStateParam(url: string): string;
        }

        class Redirect {
            constructor(options?: { redirectUrl: string; redirectFile: string; scope: string; rememberUser: boolean });
            url(): string;
            doAuthorize(authUrl: string, stateParam: string, client: Client): void;
            resumeAuthorize(stateParam: string, client: Client, callback: QueryParamsCallback): void;

        }

        class Popup extends IAuthDriver {
            static locationOrigin(location: string): string;
            static oauthReceiver(): void;
            constructor(options?: RedirectOptions);
            url(): string;

        }

        class ChromeApp extends IAuthDriver {
            constructor(options?: { scope: string });
        }

        class ChromeExtension extends IAuthDriver {
            static oauthReceiver(): void;
            constructor(options?: { scope: string; receiverPath: string });
        }

        class Cordova extends IAuthDriver {
            static oauthReceiver(): void;
            constructor(options?: { scope: string; receiverPath: string });
            url(): string;
        }

        class NodeServer extends IAuthDriver {
            constructor(options?: { port: number; tls?: {} });
            authType(): string;
            url(): string;
            openBrowser(url: string): void;
            createApp(): void;
            closeServer(): void;

            // TODO check request response types
            doRequest(request:any, response:any): void;
            closeBrowser(response:any): void;
        }
    }


    class AuthDriver {
        authType(): string;
        url(): string;
        doAuthorize(authUrl: string, stateParam: string, client: Client, callback: QueryParamsCallback): void;
        getStateParam(client: Client, callback: (state: string) => void): void;
        resumeAuthorize(stateParam: string, client: Client, callback: QueryParamsCallback): void;
        onAuthStepChange(client: Client, callback: () => void): void;
    }

    class AccountInfo {
        static parse(acountInfo: {}): AccountInfo;
        name: string;
        email: string;
        countryCode: string;
        uid: string;
        referralUrl: string;
        publicAppUrl: string;
        quota: number;
        usedQuota: number;
        privateBytes: number;
        sharedBytes: number;
        json(): {};
    }

    class ApiError {
        status: number;
        method: string;
        url: string;
        responseText: string;
        response: {};

        constructor(xhr: XMLHttpRequest, method: string, url: string);

        static NETWORK_ERROR: number;
        static NO_CONTENT: number;
        static INVALID_PARAM: number;
        static INVALID_TOKEN: number;
        static OAUTH_ERROR: number;
        static NOT_FOUND: number;
        static INVALID_METHOD: number;
        static NOT_ACCEPTABLE: number;
        static CONFLICT: number;
        static RATE_LIMITED: number;
        static SERVER_ERROR: number;
        static OVER_QUOTA: number;
    }

    class AuthError {

        code: string;
        description: string;
        uri: string;
        constructor(queryString: QueryParams);

        static ACCESS_DENIED: string;
        static INVALID_REQUEST: string;
        static UNAUTHORIZED_CLIENT: string;
        static INVALID_GRANT: string;
        static INVALID_SCOPE: string;
        static UNSUPPORTED_GRANT_TYPE: string;
        static UNSUPPORTED_RESPONSE_TYPE: string;
        static SERVER_ERROR: string;
        static TEMPORARILY_UNAVAILABLE: string;
    }

    class Client {
        static ERROR: number;
        static RESET: number;
        static PARAM_SET: number;
        static PARAM_LOADED: number;
        static AUTHORIZED: number;
        static DONE: number;
        static SIGNED_OUT: number;

        onXhr: Util.EventSource;
        onError: Util.EventSource;
        onAuthStepChange: Util.EventSource;
        authStep: number;

        constructor(options: Credentials);
        authDriver(driver: AuthDriver.IAuthDriver): Client;
        dropboxUid(): string;
        credentials(): Credentials;

        // TODO check the error interface
        authenticate(): Client;
        authenticate(callback: AuthenticateCallback): Client;
        authenticate(options: AuthenticateOptions): Client;
        authenticate(options: AuthenticateOptions, callback: AuthenticateCallback): Client;
        isAuthenticated(): boolean;
        signOut(callback: (err: ApiError) => void): XMLHttpRequest;
        signOut(options: SingOutOptions, callback: (err: ApiError) => void): XMLHttpRequest;
        signOff(callback: (err: ApiError) => void): void;
        signOff(options: SingOutOptions, callback: (err: ApiError) => void): void;
        getAccountInfo(callback: (err: ApiError, accountInfo: AccountInfo, AccountInfo: AccountInfo) => void): XMLHttpRequest;
        getAccountInfo(options: AccountInfoOptions, callback: (err: ApiError, accountInfo: AccountInfo, AccountInfo: AccountInfo) => void): XMLHttpRequest;
        readFile(path: string, callback: ClientFileReadCallback): XMLHttpRequest;
        readFile(path: string, options: ClientFileReadOptions, callback: ClientFileReadCallback): XMLHttpRequest;
        writeFile(path: string, data: any, callback: ClientFileWriteCallback): XMLHttpRequest;
        writeFile(path: string, data: any, options: ClientFileWriteOptions, callback: ClientFileWriteCallback): XMLHttpRequest;
        resumableUploadStep(data: any, callback: ResumableUploadStepCallback): XMLHttpRequest;
        resumableUploadStep(data: any, cursor: Http.UploadCursor, callback: ResumableUploadStepCallback): XMLHttpRequest;
        resumableUploadFinish(path: string, cursor: Http.UploadCursor, callback: ClientFileWriteCallback): XMLHttpRequest;
        resumableUploadFinish(path: string, cursor: Http.UploadCursor, options: ClientFileWriteOptions, callback: ClientFileWriteCallback): XMLHttpRequest;
        stat(path: string, callback: (err: ApiError, stat: File.Stat, folderEntries: File.Stat[]) => void): XMLHttpRequest;
        stat(path: string, options: File.StatOptions, callback: (err: ApiError, stat: File.Stat, folderEntries: File.Stat[]) => void): XMLHttpRequest;
        readdir(path: string, callback: (err: ApiError, filenames: string[], stat: File.Stat, folderEntries: File.Stat[]) => void): XMLHttpRequest;
        readdir(path: string, options: ReadDirOptions, callback: (err: ApiError, filenames: string[], stat: File.Stat, folderEntries: File.Stat[]) => void): XMLHttpRequest;
        metadata(path: string, callback: (err: ApiError, stat: File.Stat, folderEntries: File.Stat[]) => void): void;
        metadata(path: string, options: File.StatOptions, callback: (err: ApiError, stat: File.Stat, folderEntries: File.Stat[]) => void): void;
        makeUrl(path: string, callback: (err: ApiError, shareUrl: File.ShareUrl) => void): XMLHttpRequest;
        makeUrl(path: string, options: MakeURLOptions, callback: (err: ApiError, shareUrl: File.ShareUrl) => void): XMLHttpRequest;
        history(path: string, callback: (err: ApiError, fileVersions: File.Stat[]) => void): XMLHttpRequest;
        history(path: string, options: HistoryOptions, callback: (err: ApiError, fileVersions: File.Stat[]) => void): XMLHttpRequest;
        revisions(path: string, options: HistoryOptions, callback: (err: ApiError, fileVersions: File.Stat[]) => void): void;
        thumbnailUrl(path: string, options?: ThumbnailUrlOptions): string;
        readThumbnail(path: string, callback: ReadThumbnailCallback): XMLHttpRequest;
        readThumbnail(path: string, options: ReadThumbnailOptions, callback: ReadThumbnailCallback): XMLHttpRequest;
        revertFile(path: string, versionTag: string, callback: FileStatCallback): XMLHttpRequest;
        restore(path: string, versionTag: string, callback: FileStatCallback): void;
        findByName(path: string, namePattern: string, callback: (err: ApiError, resultStats: File.Stat[]) => void): XMLHttpRequest;
        findByName(path: string, namePattern: string, options: FindByNameOptions, callback: (err: ApiError, resultStats: File.Stat[]) => void): XMLHttpRequest;
        search(path: string, namePattern: string, options: FindByNameOptions, callback: (err: ApiError, resultStats: File.Stat[]) => void): void;
        makeCopyReference(path: string, callback: (err: ApiError, copyReference: File.CopyReference) => void): XMLHttpRequest;
        copyRef(path: string, callback: (err: ApiError, copyReference: File.CopyReference) => void): XMLHttpRequest;
        pullChanges(callback: (err: ApiError, changes: Http.PulledChanges) => void): XMLHttpRequest;
        pullChanges(cursor: string, callback: (err: ApiError, changes: Http.PulledChanges) => void): XMLHttpRequest;
        pullChanges(cursor: Http.PulledChanges, callback: (err: ApiError, changes: Http.PulledChanges) => void): XMLHttpRequest;
        delta(cursor: string, callback: (err: ApiError, changes: Http.PulledChanges) => void): void;
        delta(cursor: Http.PulledChanges, callback: (err: ApiError, changes: Http.PulledChanges) => void): void;
        pollForChanges(cursor: string, options: {}, callback: (err: ApiError, changes: Http.PollResult) => void): void;
        pollForChanges(cursor: Http.PulledChanges, options: {}, callback: (err: ApiError, changes: Http.PollResult) => void): void;
        mkdir(path: string, callback: FileStatCallback): XMLHttpRequest;
        remove(path: string, callback: FileStatCallback): XMLHttpRequest;
        unlink(path: string, callback: FileStatCallback): void;
        delete(path: string, callback: FileStatCallback): void;
        copy(from: string, toPath: string, callback: FileStatCallback): XMLHttpRequest;
        copy(from: File.CopyReference, toPath: string, callback: FileStatCallback): XMLHttpRequest;
        move(fromPath: string, toPath: string, callback: FileStatCallback): XMLHttpRequest;
        appInfo(callback: (err: ApiError, changes: Http.AppInfo) => void): XMLHttpRequest;
        appInfo(appKey: string, callback: (err: ApiError, changes: Http.AppInfo) => void): XMLHttpRequest;

        // TODO check if this can better be described
        isAppDeveloper(userId:any, callbackcallback: (err: ApiError, isAppDeveloper: boolean) => void): XMLHttpRequest;
        isAppDeveloper(userId:any, appKey:any, callbackcallback: (err: ApiError, isAppDeveloper: boolean) => void): XMLHttpRequest;
        hasOauthRedirectUri(redirectUri: string, callback: (err: ApiError, hasOauthRedirectUri: boolean) => void): XMLHttpRequest;
        hasOauthRedirectUri(redirectUri: string, appKey: string, callback: (err: ApiError, hasOauthRedirectUri: boolean) => void): XMLHttpRequest;
        hasOauthRedirectUri(redirectUri: string, appKey: Http.AppInfo, callback: (err: ApiError, hasOauthRedirectUri: boolean) => void): XMLHttpRequest;
        reset(): Client;
        setCredentials(credentials: Credentials): Client;
        appHash(): string;

    }
}

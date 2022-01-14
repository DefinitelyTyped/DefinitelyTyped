/**
 * Namespace: browser.downloads
 * Generated from Mozilla sources. Do not manually edit!
 *
 * Permissions: "downloads"
 */
import { ExtensionTypes } from "./extensionTypes";
import { Events } from "./events";

export namespace Downloads {
    type FilenameConflictAction = "uniquify" | "overwrite" | "prompt";

    type InterruptReason =
        | "FILE_FAILED"
        | "FILE_ACCESS_DENIED"
        | "FILE_NO_SPACE"
        | "FILE_NAME_TOO_LONG"
        | "FILE_TOO_LARGE"
        | "FILE_VIRUS_INFECTED"
        | "FILE_TRANSIENT_ERROR"
        | "FILE_BLOCKED"
        | "FILE_SECURITY_CHECK_FAILED"
        | "FILE_TOO_SHORT"
        | "NETWORK_FAILED"
        | "NETWORK_TIMEOUT"
        | "NETWORK_DISCONNECTED"
        | "NETWORK_SERVER_DOWN"
        | "NETWORK_INVALID_REQUEST"
        | "SERVER_FAILED"
        | "SERVER_NO_RANGE"
        | "SERVER_BAD_CONTENT"
        | "SERVER_UNAUTHORIZED"
        | "SERVER_CERT_PROBLEM"
        | "SERVER_FORBIDDEN"
        | "USER_CANCELED"
        | "USER_SHUTDOWN"
        | "CRASH";

    /**
     * <dl><dt>file</dt><dd>The download's filename is suspicious.</dd><dt>url</dt><dd>The download's URL is known to be
     * malicious.</dd><dt>content</dt><dd>The downloaded file is known to be malicious.</dd><dt>uncommon</dt><dd>
     * The download's URL is not commonly downloaded and could be dangerous.</dd><dt>safe</dt><dd>
     * The download presents no known danger to the user's computer.</dd></dl>These string constants will never change,
     * however the set of DangerTypes may change.
     */
    type DangerType = "file" | "url" | "content" | "uncommon" | "host" | "unwanted" | "safe" | "accepted";

    /**
     * <dl><dt>in_progress</dt><dd>The download is currently receiving data from the server.</dd><dt>interrupted</dt><dd>
     * An error broke the connection with the file host.</dd><dt>complete</dt><dd>The download completed successfully.</dd></dl>
     * These string constants will never change, however the set of States may change.
     */
    type State = "in_progress" | "interrupted" | "complete";

    interface DownloadItem {
        /**
         * An identifier that is persistent across browser sessions.
         */
        id: number;

        /**
         * Absolute URL.
         */
        url: string;

        /**
         * Optional.
         */
        referrer?: string;

        /**
         * Absolute local path.
         */
        filename: string;

        /**
         * False if this download is recorded in the history, true if it is not recorded.
         */
        incognito: boolean;

        /**
         * The cookie store ID of the contextual identity.
         * Optional.
         */
        cookieStoreId?: string;

        /**
         * Indication of whether this download is thought to be safe or known to be suspicious.
         */
        danger: DangerType;

        /**
         * The file's MIME type.
         * Optional.
         */
        mime?: string;

        /**
         * Number of milliseconds between the unix epoch and when this download began.
         */
        startTime: string;

        /**
         * Number of milliseconds between the unix epoch and when this download ended.
         * Optional.
         */
        endTime?: string;

        /**
         * Optional.
         */
        estimatedEndTime?: string;

        /**
         * Indicates whether the download is progressing, interrupted, or complete.
         */
        state: State;

        /**
         * True if the download has stopped reading data from the host, but kept the connection open.
         */
        paused: boolean;

        canResume: boolean;

        /**
         * Number indicating why a download was interrupted.
         * Optional.
         */
        error?: InterruptReason;

        /**
         * Number of bytes received so far from the host, without considering file compression.
         */
        bytesReceived: number;

        /**
         * Number of bytes in the whole file, without considering file compression, or -1 if unknown.
         */
        totalBytes: number;

        /**
         * Number of bytes in the whole file post-decompression, or -1 if unknown.
         */
        fileSize: number;

        exists: boolean;

        /**
         * Optional.
         */
        byExtensionId?: string;

        /**
         * Optional.
         */
        byExtensionName?: string;
    }

    interface StringDelta {
        /**
         * Optional.
         */
        current?: string;

        /**
         * Optional.
         */
        previous?: string;
    }

    interface DoubleDelta {
        /**
         * Optional.
         */
        current?: number;

        /**
         * Optional.
         */
        previous?: number;
    }

    interface BooleanDelta {
        /**
         * Optional.
         */
        current?: boolean;

        /**
         * Optional.
         */
        previous?: boolean;
    }

    /**
     * A time specified as a Date object, a number or string representing milliseconds since the epoch, or an ISO 8601 string
     */
    type DownloadTime = string | ExtensionTypes.DateType;

    /**
     * Parameters that combine to specify a predicate that can be used to select a set of downloads.
     * Used for example in search() and erase()
     */
    interface DownloadQuery {
        /**
         * This array of search terms limits results to <a href='#type-DownloadItem'>DownloadItems</a> whose <code>filename</code>
         * or <code>url</code> contain all of the search terms that do not begin with a dash '-' and none of the search terms that
         * do begin with a dash.
         * Optional.
         */
        query?: string[];

        /**
         * Limits results to downloads that started before the given ms since the epoch.
         * Optional.
         */
        startedBefore?: DownloadTime;

        /**
         * Limits results to downloads that started after the given ms since the epoch.
         * Optional.
         */
        startedAfter?: DownloadTime;

        /**
         * Limits results to downloads that ended before the given ms since the epoch.
         * Optional.
         */
        endedBefore?: DownloadTime;

        /**
         * Limits results to downloads that ended after the given ms since the epoch.
         * Optional.
         */
        endedAfter?: DownloadTime;

        /**
         * Limits results to downloads whose totalBytes is greater than the given integer.
         * Optional.
         */
        totalBytesGreater?: number;

        /**
         * Limits results to downloads whose totalBytes is less than the given integer.
         * Optional.
         */
        totalBytesLess?: number;

        /**
         * Limits results to <a href='#type-DownloadItem'>DownloadItems</a> whose <code>filename</code>
         * matches the given regular expression.
         * Optional.
         */
        filenameRegex?: string;

        /**
         * Limits results to <a href='#type-DownloadItem'>DownloadItems</a> whose <code>url</code>
         * matches the given regular expression.
         * Optional.
         */
        urlRegex?: string;

        /**
         * Setting this integer limits the number of results. Otherwise, all matching <a href='#type-DownloadItem'>DownloadItems</a>
         * will be returned.
         * Optional.
         */
        limit?: number;

        /**
         * Setting elements of this array to <a href='#type-DownloadItem'>DownloadItem</a> properties in order to sort the search
         * results. For example, setting <code>orderBy='startTime'</code> sorts the <a href='#type-DownloadItem'>DownloadItems</a>
         * by their start time in ascending order. To specify descending order, prefix <code>orderBy</code>
         * with a hyphen: '-startTime'.
         * Optional.
         */
        orderBy?: string[];

        /**
         * Optional.
         */
        id?: number;

        /**
         * Absolute URL.
         * Optional.
         */
        url?: string;

        /**
         * Absolute local path.
         * Optional.
         */
        filename?: string;

        /**
         * The cookie store ID of the contextual identity.
         * Optional.
         */
        cookieStoreId?: string;

        /**
         * Indication of whether this download is thought to be safe or known to be suspicious.
         * Optional.
         */
        danger?: DangerType;

        /**
         * The file's MIME type.
         * Optional.
         */
        mime?: string;

        /**
         * Optional.
         */
        startTime?: string;

        /**
         * Optional.
         */
        endTime?: string;

        /**
         * Indicates whether the download is progressing, interrupted, or complete.
         * Optional.
         */
        state?: State;

        /**
         * True if the download has stopped reading data from the host, but kept the connection open.
         * Optional.
         */
        paused?: boolean;

        /**
         * Why a download was interrupted.
         * Optional.
         */
        error?: InterruptReason;

        /**
         * Number of bytes received so far from the host, without considering file compression.
         * Optional.
         */
        bytesReceived?: number;

        /**
         * Number of bytes in the whole file, without considering file compression, or -1 if unknown.
         * Optional.
         */
        totalBytes?: number;

        /**
         * Number of bytes in the whole file post-decompression, or -1 if unknown.
         * Optional.
         */
        fileSize?: number;

        /**
         * Optional.
         */
        exists?: boolean;
    }

    /**
     * What to download and how.
     */
    interface DownloadOptionsType {
        /**
         * The URL to download.
         */
        url: string;

        /**
         * A file path relative to the Downloads directory to contain the downloaded file.
         * Optional.
         */
        filename?: string;

        /**
         * Whether to associate the download with a private browsing session.
         * Optional.
         */
        incognito?: boolean;

        /**
         * The cookie store ID of the contextual identity; requires "cookies" permission.
         * Optional.
         */
        cookieStoreId?: string;

        /**
         * Optional.
         */
        conflictAction?: FilenameConflictAction;

        /**
         * Use a file-chooser to allow the user to select a filename. If the option is not specified,
         * the file chooser will be shown only if the Firefox "Always ask you where to save files" option is enabled (i.e.
         * the pref <code>browser.download.useDownloadDir</code> is set to <code>false</code>).
         * Optional.
         */
        saveAs?: boolean;

        /**
         * The HTTP method to use if the URL uses the HTTP[S] protocol.
         * Optional.
         */
        method?: DownloadOptionsTypeMethodEnum;

        /**
         * Extra HTTP headers to send with the request if the URL uses the HTTP[s] protocol. Each header is represented as a
         * dictionary containing the keys <code>name</code> and either <code>value</code> or <code>binaryValue</code>,
         * restricted to those allowed by XMLHttpRequest.
         * Optional.
         */
        headers?: DownloadOptionsTypeHeadersItemType[];

        /**
         * Post body.
         * Optional.
         */
        body?: string;

        /**
         * When this flag is set to <code>true</code>, then the browser will allow downloads to proceed after encountering HTTP
         * errors such as <code>404 Not Found</code>.
         * Optional.
         */
        allowHttpErrors?: boolean;
    }

    interface GetFileIconOptionsType {
        /**
         * The size of the icon.  The returned icon will be square with dimensions size * size pixels.
         * The default size for the icon is 32x32 pixels.
         * Optional.
         */
        size?: number;
    }

    interface OnChangedDownloadDeltaType {
        /**
         * The <code>id</code> of the <a href='#type-DownloadItem'>DownloadItem</a> that changed.
         */
        id: number;

        /**
         * Describes a change in a <a href='#type-DownloadItem'>DownloadItem</a>'s <code>url</code>.
         * Optional.
         */
        url?: StringDelta;

        /**
         * Describes a change in a <a href='#type-DownloadItem'>DownloadItem</a>'s <code>filename</code>.
         * Optional.
         */
        filename?: StringDelta;

        /**
         * Describes a change in a <a href='#type-DownloadItem'>DownloadItem</a>'s <code>danger</code>.
         * Optional.
         */
        danger?: StringDelta;

        /**
         * Describes a change in a <a href='#type-DownloadItem'>DownloadItem</a>'s <code>mime</code>.
         * Optional.
         */
        mime?: StringDelta;

        /**
         * Describes a change in a <a href='#type-DownloadItem'>DownloadItem</a>'s <code>startTime</code>.
         * Optional.
         */
        startTime?: StringDelta;

        /**
         * Describes a change in a <a href='#type-DownloadItem'>DownloadItem</a>'s <code>endTime</code>.
         * Optional.
         */
        endTime?: StringDelta;

        /**
         * Describes a change in a <a href='#type-DownloadItem'>DownloadItem</a>'s <code>state</code>.
         * Optional.
         */
        state?: StringDelta;

        /**
         * Optional.
         */
        canResume?: BooleanDelta;

        /**
         * Describes a change in a <a href='#type-DownloadItem'>DownloadItem</a>'s <code>paused</code>.
         * Optional.
         */
        paused?: BooleanDelta;

        /**
         * Describes a change in a <a href='#type-DownloadItem'>DownloadItem</a>'s <code>error</code>.
         * Optional.
         */
        error?: StringDelta;

        /**
         * Describes a change in a <a href='#type-DownloadItem'>DownloadItem</a>'s <code>totalBytes</code>.
         * Optional.
         */
        totalBytes?: DoubleDelta;

        /**
         * Describes a change in a <a href='#type-DownloadItem'>DownloadItem</a>'s <code>fileSize</code>.
         * Optional.
         */
        fileSize?: DoubleDelta;

        /**
         * Optional.
         */
        exists?: BooleanDelta;
    }

    /**
     * The HTTP method to use if the URL uses the HTTP[S] protocol.
     */
    type DownloadOptionsTypeMethodEnum = "GET" | "POST";

    interface DownloadOptionsTypeHeadersItemType {
        /**
         * Name of the HTTP header.
         */
        name: string;

        /**
         * Value of the HTTP header.
         */
        value: string;
    }

    interface Static {
        /**
         * Download a URL. If the URL uses the HTTP[S] protocol, then the request will include all cookies currently set for its
         * hostname. If both <code>filename</code> and <code>saveAs</code> are specified, then the Save As dialog will be displayed,
         * pre-populated with the specified <code>filename</code>. If the download started successfully, <code>callback</code>
         * will be called with the new <a href='#type-DownloadItem'>DownloadItem</a>'s <code>downloadId</code>.
         * If there was an error starting the download, then <code>callback</code> will be called with <code>
         * downloadId=undefined</code> and <a href='extension.html#property-lastError'>chrome.extension.lastError</a>
         * will contain a descriptive string. The error strings are not guaranteed to remain backwards compatible between releases.
         * You must not parse it.
         *
         * @param options What to download and how.
         */
        download(options: DownloadOptionsType): Promise<number>;

        /**
         * Find <a href='#type-DownloadItem'>DownloadItems</a>. Set <code>query</code> to the empty object to get all <a
         * href='#type-DownloadItem'>DownloadItems</a>. To get a specific <a href='#type-DownloadItem'>DownloadItem</a>,
         * set only the <code>id</code> field.
         *
         * @param query
         */
        search(query: DownloadQuery): Promise<DownloadItem[]>;

        /**
         * Pause the download. If the request was successful the download is in a paused state. Otherwise <a href='extension.
         * html#property-lastError'>chrome.extension.lastError</a> contains an error message.
         * The request will fail if the download is not active.
         *
         * @param downloadId The id of the download to pause.
         */
        pause(downloadId: number): Promise<void>;

        /**
         * Resume a paused download. If the request was successful the download is in progress and unpaused.
         * Otherwise <a href='extension.html#property-lastError'>chrome.extension.lastError</a> contains an error message.
         * The request will fail if the download is not active.
         *
         * @param downloadId The id of the download to resume.
         */
        resume(downloadId: number): Promise<void>;

        /**
         * Cancel a download. When <code>callback</code> is run, the download is cancelled, completed,
         * interrupted or doesn't exist anymore.
         *
         * @param downloadId The id of the download to cancel.
         */
        cancel(downloadId: number): Promise<void>;

        /**
         * Retrieve an icon for the specified download. For new downloads, file icons are available after the <a
         * href='#event-onCreated'>onCreated</a> event has been received. The image returned by this function while a download is
         * in progress may be different from the image returned after the download is complete.
         * Icon retrieval is done by querying the underlying operating system or toolkit depending on the platform.
         * The icon that is returned will therefore depend on a number of factors including state of the download, platform,
         * registered file types and visual theme. If a file icon cannot be determined, <a href='extension.
         * html#property-lastError'>chrome.extension.lastError</a> will contain an error message.
         *
         * @param downloadId The identifier for the download.
         * @param options Optional.
         */
        getFileIcon(downloadId: number, options?: GetFileIconOptionsType): Promise<string>;

        /**
         * Open the downloaded file.
         *
         * @param downloadId
         */
        open(downloadId: number): Promise<void>;

        /**
         * Show the downloaded file in its folder in a file manager.
         *
         * @param downloadId
         */
        show(downloadId: number): Promise<boolean>;

        showDefaultFolder(): void;

        /**
         * Erase matching <a href='#type-DownloadItem'>DownloadItems</a> from history
         *
         * @param query
         */
        erase(query: DownloadQuery): Promise<number[]>;

        /**
         * @param downloadId
         */
        removeFile(downloadId: number): Promise<void>;

        /**
         * This event fires with the <a href='#type-DownloadItem'>DownloadItem</a> object when a download begins.
         *
         * @param downloadItem
         */
        onCreated: Events.Event<(downloadItem: DownloadItem) => void>;

        /**
         * Fires with the <code>downloadId</code> when a download is erased from history.
         *
         * @param downloadId The <code>id</code> of the <a href='#type-DownloadItem'>DownloadItem</a> that was erased.
         */
        onErased: Events.Event<(downloadId: number) => void>;

        /**
         * When any of a <a href='#type-DownloadItem'>DownloadItem</a>'s properties except <code>bytesReceived</code> changes,
         * this event fires with the <code>downloadId</code> and an object containing the properties that changed.
         *
         * @param downloadDelta
         */
        onChanged: Events.Event<(downloadDelta: OnChangedDownloadDeltaType) => void>;
    }
}

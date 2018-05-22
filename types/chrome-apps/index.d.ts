// Type definitions for Chrome packaged application development
// Project: http://developer.chrome.com/apps/
// Definitions by: Nikolai Ommundsen <https://github.com/niikoo>, Adam Lay <https://github.com/AdamLay>, MIZUNE Pine <https://github.com/pine613>, MIZUSHIMA Junki <https://github.com/mzsm>, Ingvar Stepanyan <https://github.com/RReverser>, Adam Pyle <https://github.com/pyle>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// WebView ref: https://chromium.googlesource.com/chromium/src/+/68.0.3432.1/chrome/common/extensions/api/webview_tag.json
// TypeScript Version: 2.4

/// <reference types="filesystem"/>

////////////////////
// Global object
////////////////////
interface Window {
    chrome: typeof chrome;
}
declare module chrome { }

////////////////////
// App
////////////////////
declare namespace chrome.app {
    export interface AppDetails extends chrome.runtime.Manifest {
        id: string;
    }

    export function getDetails(): AppDetails;
}

export type GenericEvent = Event;

////////////////////
// App Runtime
////////////////////
declare namespace chrome.app.runtime {
    type LaunchSource = 'untracked' | 'app_launcher' | 'new_tab_page' | 'reload' | 'restart' |
        'load_and_launch' | 'command_line' | 'file_handler' | 'url_handler' | 'system_tray' |
        'about_page' | 'keyboard' | 'extensions_page' | 'management_api' | 'ephemeral_app' |
        'background' | 'kiosk' | 'chrome_internal' | 'test' | 'installed_notification' | 'context_menu';

    interface LaunchData {
        id?: string;
        items?: LaunchDataItem[];
        url?: string;
        referrerUrl?: string;
        isKioskSession?: boolean;
        isPublicSession?: boolean;
        source?: LaunchSource;
        actionData?: {};
    }

    export interface LaunchDataItem {
        entry: FileEntry;
        type: string;
    }

    export interface LaunchedEvent extends chrome.events.Event<(launchData: LaunchData) => void> { }

    export interface RestartedEvent extends chrome.events.Event<() => void> { }

    export var onLaunched: LaunchedEvent;
    export var onRestarted: RestartedEvent;
}

////////////////////
// App Window
////////////////////
declare namespace chrome.app.window {
    export interface ContentBounds {
        left?: number;
        top?: number;
        width?: number;
        height?: number;
    }

    export interface BoundsSpecification {
        left?: number;
        top?: number;
        width?: number;
        height?: number;
        minWidth?: number;
        minHeight?: number;
        maxWidth?: number;
        maxHeight?: number;
    }

    export interface Bounds {
        left: number;
        top: number;
        width: number;
        height: number;
        minWidth?: number;
        minHeight?: number;
        maxWidth?: number;
        maxHeight?: number;
        setPosition(left: number, top: number): void;
        setSize(width: number, height: number): void;
        setMinimumSize(minWidth: number, minHeight: number): void;
        setMaximumSize(maxWidth: number, maxHeight: number): void;
    }
    export interface FrameOptions {
        type?: string;
        color?: string;
        activeColor?: string;
        inactiveColor?: string;
    }

    export interface CreateWindowOptions {
        id?: string;
        innerBounds?: BoundsSpecification;
        outerBounds?: BoundsSpecification;
        minWidth?: number;
        minHeight?: number;
        maxWidth?: number;
        maxHeight?: number;
        /**
         * @description
         * @type {(string | FrameOptions)} string ("none", "chrome") or FrameOptions
         * @memberof CreateWindowOptions
         */
        frame?: string | FrameOptions;
        bounds?: ContentBounds;
        alphaEnabled?: boolean;
        /**
         * @description
         * @type {string} "normal", "fullscreen", "maximized", "minimized"
         * @memberof CreateWindowOptions
         */
        state?: string;
        hidden?: boolean;
        resizable?: boolean;
        singleton?: boolean;
        alwaysOnTop?: boolean;
        focused?: boolean;
        visibleOnAllWorkspaces?: boolean;
    }

    export interface AppWindow {
        focus: () => void;
        fullscreen: () => void;
        isFullscreen: () => boolean;
        minimize: () => void;
        isMinimized: () => boolean;
        maximize: () => void;
        isMaximized: () => boolean;
        restore: () => void;
        moveTo: (left: number, top: number) => void;
        resizeTo: (width: number, height: number) => void;
        drawAttention: () => void;
        clearAttention: () => void;
        close: () => void;
        show: () => void;
        hide: () => void;
        getBounds: () => ContentBounds;
        setBounds: (bounds: ContentBounds) => void;
        isAlwaysOnTop: () => boolean;
        setAlwaysOnTop: (alwaysOnTop: boolean) => void;
        setVisibleOnAllWorkspaces: (alwaysVisible: boolean) => void;
        contentWindow: Window;
        id: string;
        innerBounds: Bounds;
        outerBounds: Bounds;
        onBoundsChanged: WindowEvent;
        onClosed: WindowEvent;
        onFullscreened: WindowEvent;
        onMaximized: WindowEvent;
        onMinimized: WindowEvent;
        onRestored: WindowEvent;
    }

    export function create(url: string, options?: CreateWindowOptions, callback?: (created_window: AppWindow) => void): void;
    export function current(): AppWindow;
    export function get(id: string): AppWindow;
    export function getAll(): AppWindow[];
    export function canSetVisibleOnAllWorkspaces(): boolean;

    export interface WindowEvent extends chrome.events.Event<() => void> { }

    export var onBoundsChanged: WindowEvent;
    export var onClosed: WindowEvent;
    export var onFullscreened: WindowEvent;
    export var onMaximized: WindowEvent;
    export var onMinimized: WindowEvent;
    export var onRestored: WindowEvent;
}


////////////////////
// Context Menus
////////////////////

declare namespace chrome.contextMenus {
    /**
    * The different contexts a menu can appear in. Specifying 'all' is equivalent to the combination of all other contexts except for 'launcher'. The 'launcher' context is only supported by apps and is used to add menu items to the context menu that appears when clicking on the app icon in the launcher/taskbar/dock/etc. Different platforms might put limitations on what is actually supported in a launcher context menu.
    **/
    export type ContextType = "all" | "page" | "frame" | "selection" | "link" | "editable" | "image" | "video" | "audio" | "launcher" | "browser_action" | "page_action";
    /**
    * The type of menu item.
    **/
    export type ItemType = "normal" | "checkbox" | "radio" | "separator";

    /**
    * @description Creates a new context menu item. Note that if an error occurs during creation, you may not find out until the creation callback fires (the details will be in chrome.runtime.lastError).
    * @param {any} [object Object]
     */
    export function create(createProperties: object, callback?: () => void): void;

    /**
    * @description Updates a previously created context menu item.
    * @param {any} id The ID of the item to update.
    * @param {object} updateProperties The properties to update. Accepts the same values as the create function.
    * @param {any} [object Object]
     */
    export function update(id: number | string, updateProperties: object, callback?: () => void): void;

    /**
    * @description Removes a context menu item.
    * @param {any} menuItemId The ID of the context menu item to remove.
    * @param {any} [object Object]
     */
    export function remove(menuItemId: number | string, callback?: () => void): void;

    /**
    * @description Removes all context menu items added by this extension.
    * @param {any} [object Object]
     */
    export function removeAll(callback?: () => void): void;

}


////////////////////
// Events
////////////////////
/**
 * The chrome.events namespace contains common types used by APIs dispatching events to notify you when something interesting happens.
 * Availability: Since Chrome 21.
 */
declare namespace chrome.events {
    /** Filters URLs for various criteria. See event filtering. All criteria are case sensitive. */
    export interface UrlFilter {
        /** Optional. Matches if the scheme of the URL is equal to any of the schemes specified in the array.  */
        schemes?: string[];
        /**
         * Optional.
          * Since Chrome 23.
         * Matches if the URL (without fragment identifier) matches a specified regular expression. Port numbers are stripped from the URL if they match the default port number. The regular expressions use the RE2 syntax.
         */
        urlMatches?: string;
        /** Optional. Matches if the path segment of the URL contains a specified string.  */
        pathContains?: string;
        /** Optional. Matches if the host name of the URL ends with a specified string.  */
        hostSuffix?: string;
        /** Optional. Matches if the host name of the URL starts with a specified string.  */
        hostPrefix?: string;
        /** Optional. Matches if the host name of the URL contains a specified string. To test whether a host name component has a prefix 'foo', use hostContains: '.foo'. This matches 'www.foobar.com' and 'foo.com', because an implicit dot is added at the beginning of the host name. Similarly, hostContains can be used to match against component suffix ('foo.') and to exactly match against components ('.foo.'). Suffix- and exact-matching for the last components need to be done separately using hostSuffix, because no implicit dot is added at the end of the host name.  */
        hostContains?: string;
        /** Optional. Matches if the URL (without fragment identifier) contains a specified string. Port numbers are stripped from the URL if they match the default port number.  */
        urlContains?: string;
        /** Optional. Matches if the query segment of the URL ends with a specified string.  */
        querySuffix?: string;
        /** Optional. Matches if the URL (without fragment identifier) starts with a specified string. Port numbers are stripped from the URL if they match the default port number.  */
        urlPrefix?: string;
        /** Optional. Matches if the host name of the URL is equal to a specified string.  */
        hostEquals?: string;
        /** Optional. Matches if the URL (without fragment identifier) is equal to a specified string. Port numbers are stripped from the URL if they match the default port number.  */
        urlEquals?: string;
        /** Optional. Matches if the query segment of the URL contains a specified string.  */
        queryContains?: string;
        /** Optional. Matches if the path segment of the URL starts with a specified string.  */
        pathPrefix?: string;
        /** Optional. Matches if the path segment of the URL is equal to a specified string.  */
        pathEquals?: string;
        /** Optional. Matches if the path segment of the URL ends with a specified string.  */
        pathSuffix?: string;
        /** Optional. Matches if the query segment of the URL is equal to a specified string.  */
        queryEquals?: string;
        /** Optional. Matches if the query segment of the URL starts with a specified string.  */
        queryPrefix?: string;
        /** Optional. Matches if the URL (without fragment identifier) ends with a specified string. Port numbers are stripped from the URL if they match the default port number.  */
        urlSuffix?: string;
        /** Optional. Matches if the port of the URL is contained in any of the specified port lists. For example [80, 443, [1000, 1200]] matches all requests on port 80, 443 and in the range 1000-1200.  */
        ports?: any[];
        /**
         * Optional.
          * Since Chrome 28.
         * Matches if the URL without query segment and fragment identifier matches a specified regular expression. Port numbers are stripped from the URL if they match the default port number. The regular expressions use the RE2 syntax.
         */
        originAndPathMatches?: string;
    }

    /** An object which allows the addition and removal of listeners for a Chrome event. */
    export interface Event<T> {
        /**
         * Registers an event listener callback to an event.
         * @param callback Called when an event occurs. The parameters of this function depend on the type of event.
         * The callback parameter should be a function that looks like this:
         * function() {...};
         */
        addListener(callback: T): void;
        /**
         * Returns currently registered rules.
         * @param callback Called with registered rules.
         * The callback parameter should be a function that looks like this:
         * function(array of Rule rules) {...};
         * Parameter rules: Rules that were registered, the optional parameters are filled with values.
         */
        getRules(callback: (rules: Rule[]) => void): void;
        /**
         * Returns currently registered rules.
         * @param ruleIdentifiers If an array is passed, only rules with identifiers contained in this array are returned.
         * @param callback Called with registered rules.
         * The callback parameter should be a function that looks like this:
         * function(array of Rule rules) {...};
         * Parameter rules: Rules that were registered, the optional parameters are filled with values.
         */
        getRules(ruleIdentifiers: string[], callback: (rules: Rule[]) => void): void;
        /**
         * @param callback Listener whose registration status shall be tested.
         */
        hasListener(callback: T): boolean;
        /**
         * Unregisters currently registered rules.
         * @param ruleIdentifiers If an array is passed, only rules with identifiers contained in this array are unregistered.
         * @param callback Called when rules were unregistered.
         * If you specify the callback parameter, it should be a function that looks like this:
         * function() {...};
         */
        removeRules(ruleIdentifiers?: string[], callback?: () => void): void;
        /**
         * Unregisters currently registered rules.
         * @param callback Called when rules were unregistered.
         * If you specify the callback parameter, it should be a function that looks like this:
         * function() {...};
         */
        removeRules(callback?: () => void): void;
        /**
         * Registers rules to handle events.
         * @param rules Rules to be registered. These do not replace previously registered rules.
         * @param callback Called with registered rules.
         * If you specify the callback parameter, it should be a function that looks like this:
         * function(array of Rule rules) {...};
         * Parameter rules: Rules that were registered, the optional parameters are filled with values.
         */
        addRules(rules: Rule[], callback?: (rules: Rule[]) => void): void;
        /**
         * Deregisters an event listener callback from an event.
         * @param callback Listener that shall be unregistered.
         * The callback parameter should be a function that looks like this:
         * function() {...};
         */
        removeListener(callback: T): void;
        hasListeners(): boolean;
    }

    /** Description of a declarative rule for handling events. */
    export interface Rule {
        /** Optional. Optional priority of this rule. Defaults to 100.  */
        priority?: number;
        /** List of conditions that can trigger the actions. */
        conditions: any[];
        /** Optional. Optional identifier that allows referencing this rule.  */
        id?: string;
        /** List of actions that are triggered if one of the condtions is fulfilled. */
        actions: any[];
        /**
         * Optional.
          * Since Chrome 28.
         * Tags can be used to annotate rules and perform operations on sets of rules.
         */
        tags?: string[];
    }
}

////////////////////
// Extension Types
////////////////////

/**
 * Primary for extensions, but also used in apps.
 * https://developer.chrome.com/extensions/extensionTypes#type-ImageDetails
 **/
declare namespace chrome.extensionTypes {
    /**
     * The format of an image.
     **/
    export type ImageFormat = 'jpeg' | 'png';
    /**
     * Details about the format and quality of an image.
     */
    export interface ImageDetails {
        /**
         * @description The format of the resulting image. Default is "jpeg".
         * @type {ImageFormat}
         * @memberof ImageDetails
         */
        format?: ImageFormat;
        /**
         * @description When format is "jpeg", controls the quality of the resulting image. This value is ignored for PNG images. As quality is decreased, the resulting image will have more visual artifacts, and the number of bytes needed to store it will decrease.
         * @type {number}
         * @memberof ImageDetails
         */
        quality?: number;
    }
    /**
     * The soonest that the JavaScript or CSS will be injected into the tab.
     **/
    export type RunAt = 'document_start' | 'document_end' | 'document_idle';
    /**
     * The origin of injected CSS.
     **/
    export type CSSOrigin = 'author' | 'user';
    /**
     * @description Details of the script or CSS to inject. Either the code or the file property must be set, but both may not be set at the same time.
     * @interface InjectDetails
     */
    export interface InjectDetails {
        /**
         * JavaScript or CSS code to inject.
         * Warning:
         * Be careful using the code parameter. Incorrect use of it may open your extension to cross site scripting attacks.
         * @type {string}
         * @memberof InjectDetails
         */
        code?: string;
        /**
         * @description JavaScript or CSS file to inject.
         * @type {string}
         * @memberof InjectDetails
         */
        file?: string;
        /**
         * @description If allFrames is true, implies that the JavaScript or CSS should be injected into all frames of current page. By default, it's false and is only injected into the top frame. If true and frameId is set, then the code is inserted in the selected frame and all of its child frames.
         * @type {boolean}
         * @memberof InjectDetails
         */
        allFrames?: boolean;
        /**
         * @description The frame where the script or CSS should be injected. Defaults to 0 (the top-level frame).
         * @since Since Chrome 50.
         * @type {number}
         * @memberof InjectDetails
         */
        frameId?: number;
        /**
         * @description If matchAboutBlank is true, then the code is also injected in about:blank and about:srcdoc frames if your extension has access to its parent document. Code cannot be inserted in top-level about:-frames. By default it is false.
         * @type {boolean}
         * @memberof InjectDetails
         */
        matchAboutBlank?: boolean;
        /**
         * @description The soonest that the JavaScript or CSS will be injected into the tab. Defaults to "document_idle".
         * @type {RunAt}
         * @memberof InjectDetails
         */
        runAt: RunAt;
        /**
         * @description The origin of the CSS to inject. This may only be specified for CSS, not JavaScript. Defaults to "author".
         * @since Since Chrome 66.
         * @type {CSSOrigin}
         * @memberof InjectDetails
         */
        cssOrigin: CSSOrigin;
    }
}

////////////////////
// FileSystem
////////////////////
declare namespace chrome.fileSystem {

    export interface AcceptOptions {
        description?: string;
        mimeTypes?: string[];
        extensions?: string[];
    }

    export interface ChooseEntryOptions {
        type?: string;
        suggestedName?: string;
        accepts?: AcceptOptions[];
        acceptsAllTypes?: boolean;
        acceptsMultiple?: boolean;
    }

    export function getDisplayPath(entry: Entry, callback: (displayPath: string) => void): void;
    export function getWritableEntry(entry: Entry, callback: (entry: Entry) => void): void;
    export function isWritableEntry(entry: Entry, callback: (isWritable: boolean) => void): void;
    export function chooseEntry(callback: (entry: Entry) => void): void;
    export function chooseEntry(callback: (fileEntries: FileEntry[]) => void): void;
    export function chooseEntry(options: ChooseEntryOptions, callback: (entry: Entry) => void): void;
    export function chooseEntry(options: ChooseEntryOptions, callback: (fileEntries: FileEntry[]) => void): void;
    export function restoreEntry(id: string, callback: (entry: Entry) => void): void;
    export function isRestorable(id: string, callback: (isRestorable: boolean) => void): void;
    export function retainEntry(entry: Entry): string;
}

////////////////////
// Media Galleries
////////////////////
declare namespace chrome.mediaGalleries {
    export interface MediaFileSystemsOptions {
        interactive?: 'no' | 'yes' | 'if_needed';
    }

    export interface MediaFileSystemMetadata {
        name: string;
        galleryId: string;
        deviceId?: string;
        isRemovable: boolean;
        isMediaDevice: boolean;
        isAvailable: boolean;
    }

    export interface MetadataOptions {
        metadataType: 'all' | 'mimeTypeAndTags' | 'mimeTypeOnly';
    }

    export interface RawTag {
        type: string;
        tags: { [name: string]: string; };
    }

    export interface Metadata {
        // The browser sniffed mime type.
        mimeType: string;
        // Defined for images and video. In pixels.
        height?: number;
        width?: number;
        // Defined for images only.
        xResolution?: number;
        yResolution?: number;
        // Defined for audio and video. In seconds.
        duration?: number;
        // Defined for images and video. In degrees.
        rotation?: number;
        // Defined for images only.
        cameraMake?: string;
        cameraModel?: string;
        exposureTimeSeconds?: number;
        flashFired?: boolean;
        fNumber?: number;
        focalLengthMm?: number;
        isoEquivalent?: number;
        // Defined for audio and video only.
        album?: string;
        artist?: string;
        comment?: string;
        copyright?: string;
        disc?: number;
        genre?: string;
        language?: string;
        title?: string;
        track?: number;
        // All the metadata in the media file. For formats with multiple streams, stream order will be preserved. Container metadata is the first element.
        rawTags: RawTag[];
        // The images embedded in the media file's metadata. This is most often used for album art or video thumbnails.
        attachedImages: Blob[];
    }

    export interface GalleryWatchResult {
        galleryId: string;
        success: boolean;
    }

    export interface GalleryChangedEventArgs {
        type: 'contents_changed' | 'watch_dropped';
        galleryId: string;
    }

    export interface ScanProgressEventArgs {
        // The type of progress event, i.e. start, finish, etc.
        type: 'start' | 'cancel' | 'finish' | 'error';
        // The number of Galleries found.
        galleryCount?: number;
        // Appoximate number of media files found; some file types can be either audio or video and are included in both counts.
        audioCount?: number;
        imageCount?: number;
        videoCount?: number;
    }

    export function getMediaFileSystems(callback: (mediaFileSystems: FileSystem[]) => void): void;
    export function getMediaFileSystems(options: MediaFileSystemsOptions, callback: (mediaFileSystems: FileSystem[]) => void): void;
    export function addUserSelectedFolder(callback: (mediaFileSystems: FileSystem[], selectedFileSystemName: string) => void): void;
    export function dropPermissionForMediaFileSystem(galleryId: string, callback?: () => void): void;
    export function startMediaScan(): void;
    export function cancelMediaScan(): void;
    export function addScanResults(callback: (mediaFileSystems: FileSystem[]) => void): void;
    export function getMediaFileSystemMetadata(mediaFileSystem: FileSystem): MediaFileSystemMetadata;
    export function getAllMediaFileSystemMetadata(callback: (metadatas: MediaFileSystemMetadata[]) => void): void;
    export function getMetadata(mediaFile: Blob, callback: (metadata: Metadata) => void): void;
    export function getMetadata(mediaFile: Blob, options: MetadataOptions, callback: (metadata: Metadata) => void): void;
    export function addGalleryWatch(galleryId: string, callback: (result: GalleryWatchResult) => void): void;
    export function removeGalleryWatch(galleryId: string): void;
    export function getAllGalleryWatch(callback: (galleryIds: string[]) => void): void;
    export function removeAllGalleryWatch(): void;

    export var onGalleryChanged: chrome.events.Event<(args: GalleryChangedEventArgs) => void>;
    export var onScanProgress: chrome.events.Event<(args: ScanProgressEventArgs) => void>;
}

////////////////////
// Socket
////////////////////
declare namespace chrome.socket {
    export interface CreateInfo {
        socketId: number;
    }

    export interface AcceptInfo {
        resultCode: number;
        socketId?: number;
    }

    export interface ReadInfo {
        resultCode: number;
        data: ArrayBuffer;
    }

    export interface WriteInfo {
        bytesWritten: number;
    }

    export interface RecvFromInfo {
        resultCode: number;
        data: ArrayBuffer;
        port: number;
        address: string;
    }

    export interface SocketInfo {
        socketType: string;
        localPort?: number;
        peerAddress?: string;
        peerPort?: number;
        localAddress?: string;
        connected: boolean;
    }

    export interface NetworkInterface {
        name: string;
        address: string;
    }

    export function create(type: string, options?: Object, callback?: (createInfo: CreateInfo) => void): void;
    export function destroy(socketId: number): void;
    export function connect(socketId: number, hostname: string, port: number, callback: (result: number) => void): void;
    export function bind(socketId: number, address: string, port: number, callback: (result: number) => void): void;
    export function disconnect(socketId: number): void;
    export function read(socketId: number, bufferSize?: number, callback?: (readInfo: ReadInfo) => void): void;
    export function write(socketId: number, data: ArrayBuffer, callback?: (writeInfo: WriteInfo) => void): void;
    export function recvFrom(socketId: number, bufferSize?: number, callback?: (recvFromInfo: RecvFromInfo) => void): void;
    export function sendTo(socketId: number, data: ArrayBuffer, address: string, port: number, callback?: (writeInfo: WriteInfo) => void): void;
    export function listen(socketId: number, address: string, port: number, backlog?: number, callback?: (result: number) => void): void;
    export function accept(socketId: number, callback?: (acceptInfo: AcceptInfo) => void): void;
    export function setKeepAlive(socketId: number, enable: boolean, delay?: number, callback?: (result: boolean) => void): void;
    export function setNoDelay(socketId: number, noDelay: boolean, callback?: (result: boolean) => void): void;
    export function getInfo(socketId: number, callback: (result: SocketInfo) => void): void;
    export function getNetworkList(callback: (result: NetworkInterface[]) => void): void;
}

declare namespace chrome.sockets.tcp {
    export interface CreateInfo {
        socketId: number;
    }

    export interface SendInfo {
        resultCode: number;
        bytesSent?: number;
    }

    export interface ReceiveEventArgs {
        socketId: number;
        data: ArrayBuffer;
    }

    export interface ReceiveErrorEventArgs {
        socketId: number;
        resultCode: number;
    }

    export interface SocketProperties {
        persistent?: boolean;
        name?: string;
        bufferSize?: number;
    }

    export interface SocketInfo {
        socketId: number;
        persistent: boolean;
        name?: string;
        bufferSize?: number;
        paused: boolean;
        connected: boolean;
        localAddress?: string;
        localPort?: number;
        peerAddress?: string;
        peerPort?: number;
    }

    export function create(callback: (createInfo: CreateInfo) => void): void;
    export function create(properties: SocketProperties, callback: (createInfo: CreateInfo) => void): void;

    export function update(socketId: number, properties: SocketProperties, callback?: () => void): void;
    export function setPaused(socketId: number, paused: boolean, callback?: () => void): void;

    export function setKeepAlive(socketId: number,
        enable: boolean, callback: (result: number) => void): void;
    export function setKeepAlive(socketId: number,
        enable: boolean, delay: number, callback: (result: number) => void): void;

    export function setNoDelay(socketId: number, noDelay: boolean, callback: (result: number) => void): void;
    export function connect(socketId: number,
        peerAddress: string, peerPort: number, callback: (result: number) => void): void;
    export function disconnect(socketId: number, callback?: () => void): void;
    export function send(socketId: number, data: ArrayBuffer, callback: (sendInfo: SendInfo) => void): void;
    export function close(socketId: number, callback?: () => void): void;
    export function getInfo(socketId: number, callback: (socketInfo: SocketInfo) => void): void;
    export function getSockets(callback: (socketInfos: SocketInfo[]) => void): void;

    export var onReceive: chrome.events.Event<(args: ReceiveEventArgs) => void>;
    export var onReceiveError: chrome.events.Event<(args: ReceiveErrorEventArgs) => void>;
}

/**
 * Use the chrome.sockets.udp API to send and receive data over the network
 * using UDP connections. This API supersedes the UDP functionality previously
 * found in the "socket" API.
 *
 * @since Chrome 33
 * @see https://developer.chrome.com/apps/sockets_udp
 */
declare namespace chrome.sockets.udp {
    export interface CreateInfo {
        socketId: number;
    }

    export interface SendInfo {
        resultCode: number;
        bytesSent?: number;
    }

    export interface ReceiveEventArgs {
        socketId: number;
        data: ArrayBuffer;
        remoteAddress: string;
        remotePort: number;
    }

    export interface ReceiveErrorEventArgs {
        socketId: number;
        resultCode: number;
    }

    /**
     * @see https://developer.chrome.com/apps/sockets_udp#type-SocketProperties
     */
    export interface SocketProperties {
        /**
         * Flag indicating if the socket is left open when the event page of the
         * application is unloaded. The default value is "false." When the
         * application is loaded, any sockets previously opened with
         * persistent=true can be fetched with getSockets.
         * @see http://developer.chrome.com/apps/app_lifecycle.html
         */
        persistent?: boolean;

        /** An application-defined string associated with the socket. */
        name?: string;

        /**
         * The size of the buffer used to receive data. If the buffer is too
         * small to receive the UDP packet, data is lost. The default value is
         * 4096.
         */
        bufferSize?: number;
    }

    /**
     * @see https://developer.chrome.com/apps/sockets_udp#type-SocketInfo
     */
    export interface SocketInfo {
        /** The socket identifier. */
        socketId: number;

        /**
         * Flag indicating whether the socket is left open when the application
         * is suspended (see SocketProperties.persistent).
         */
        persistent: boolean;

        /** Application-defined string associated with the socket. */
        name?: string;

        /**
         * The size of the buffer used to receive data. If no buffer size ha
         * been specified explictly, the value is not provided.
         */
        bufferSize?: number;

        /**
         * Flag indicating whether the socket is blocked from firing onReceive
         * events.
         */
        paused: boolean;

        /**
         * If the underlying socket is bound, contains its local IPv4/6 address.
         */
        localAddress?: string;

        /**
         * If the underlying socket is bound, contains its local port.
         */
        localPort?: number;
    }

    /**
     * Creates a UDP socket with default properties.
     *
     * @see https://developer.chrome.com/apps/sockets_udp#method-create
     * @param createInfo.socketId The ID of the newly created socket.
     */
    export function create(callback: (createInfo: CreateInfo) => void): void;

    /**
     * Creates a UDP socket with the given properties.
     *
     * @see https://developer.chrome.com/apps/sockets_udp#method-create
     * @param properties          The socket properties.
     * @param createInfo.socketId The ID of the newly created socket.
     */
    export function create(properties: SocketProperties, callback: (createInfo: CreateInfo) => void): void;

    /**
     * Updates the socket properties.
     *
     * @see https://developer.chrome.com/apps/sockets_udp#method-update
     * @param socketId   The socket ID.
     * @param properties The properties to update.
     * @param callback   Called when the properties are updated.
     */
    export function update(socketId: number, properties: SocketProperties, callback?: () => void): void;

    /**
     * Pauses or unpauses a socket. A paused socket is blocked from firing
     * onReceive events.
     *
     * @see https://developer.chrome.com/apps/sockets_udp#method-setPaused
     * @param socketId The socket ID.
     * @param paused   Flag to indicate whether to pause or unpause.
     * @param callback Called when the socket has been successfully paused or
     *                 unpaused.
     */
    export function setPaused(socketId: number, paused: boolean, callback?: () => void): void;

    /**
     * Binds the local address and port for the socket. For a client socket, it
     * is recommended to use port 0 to let the platform pick a free port.
     *
     * Once the bind operation completes successfully, onReceive events are
     * raised when UDP packets arrive on the address/port specified -- unless
     * the socket is paused.
     *
     * @see https://developer.chrome.com/apps/sockets_udp#method-bind
     * @param socketId The socket ID.
     * @param address  The address of the local machine. DNS name, IPv4 and IPv6
     *                 formats are supported. Use "0.0.0.0" to accept packets
     *                 from all local available network interfaces.
     * @param port     The port of the local machine. Use "0" to bind to a free
     *                 port.
     * @param callback Called when the bind operation completes.
     */
    export function bind(socketId: number, address: string, port: number, callback: (result: number) => void): void;

    /**
     * Sends data on the given socket to the given address and port. The socket
     * must be bound to a local port before calling this method.
     *
     * @see https://developer.chrome.com/apps/sockets_udp#method-send
     * @param socketId The socket ID.
     * @param data     The data to send.
     * @param address  The address of the remote machine.
     * @param port     The port of the remote machine.
     * @param callback Called when the send operation completes.
     */
    export function send(socketId: number, data: ArrayBuffer, address: string, port: number, callback: (sendInfo: SendInfo) => void): void;

    /**
     * Closes the socket and releases the address/port the socket is bound to.
     * Each socket created should be closed after use. The socket id is no
     * longer valid as soon at the function is called. However, the socket is
     * guaranteed to be closed only when the callback is invoked.
     *
     * @see https://developer.chrome.com/apps/sockets_udp#method-close
     * @param socketId The socket ID.
     * @param callback Called when the close operation completes.
     */
    export function close(socketId: number, callback?: () => void): void;

    /**
     * Retrieves the state of the given socket.
     *
     * @see https://developer.chrome.com/apps/sockets_udp#method-getInfo
     * @param socketId The socket ID.
     * @param callback Called when the socket state is available.
     */
    export function getInfo(socketId: number, callback: (socketInfo: SocketInfo) => void): void;

    /**
     * Retrieves the list of currently opened sockets owned by the application.
     *
     * @see https://developer.chrome.com/apps/sockets_udp#method-getSockets
     * @param callback Called when the list of sockets is available.
     */
    export function getSockets(callback: (socketInfos: SocketInfo[]) => void): void;

    /**
     * Joins the multicast group and starts to receive packets from that group.
     * The socket must be bound to a local port before calling this method.
     *
     * @see https://developer.chrome.com/apps/sockets_udp#method-joinGroup
     * @param socketId The socket ID.
     * @param address  The group address to join. Domain names are not supported.
     * @param callback Called when the joinGroup operation completes.
     */
    export function joinGroup(socketId: number, address: string, callback: (result: number) => void): void;

    /**
     * Leaves the multicast group previously joined using joinGroup. This is
     * only necessary to call if you plan to keep using the socket afterwards,
     * since it will be done automatically by the OS when the socket is closed.
     *
     * Leaving the group will prevent the router from sending multicast
     * datagrams to the local host, presuming no other process on the host is
     * still joined to the group.
     *
     * @see https://developer.chrome.com/apps/sockets_udp#method-leaveGroup
     * @param socketId The socket ID.
     * @param address  The group address to leave. Domain names are not
     *                 supported.
     * @param callback Called when the leaveGroup operation completes.
     */
    export function leaveGroup(socketId: number, address: string, callback: (result: number) => void): void;

    /**
     * Sets the time-to-live of multicast packets sent to the multicast group.
     *
     * Calling this method does not require multicast permissions.
     *
     * @see https://developer.chrome.com/apps/sockets_udp#method-setMulticastTimeToLive
     * @param socketId The socket ID.
     * @param ttl      The time-to-live value.
     * @param callback Called when the configuration operation completes.
     */
    export function setMulticastTimeToLive(socketId: number, ttl: number, callback: (result: number) => void): void;

    /**
     * Sets whether multicast packets sent from the host to the multicast group
     * will be looped back to the host.
     *
     * Note: the behavior of setMulticastLoopbackMode is slightly different
     * between Windows and Unix-like systems. The inconsistency happens only
     * when there is more than one application on the same host joined to the
     * same multicast group while having different settings on multicast
     * loopback mode. On Windows, the applications with loopback off will not
     * RECEIVE the loopback packets; while on Unix-like systems, the
     * applications with loopback off will not SEND the loopback packets to
     * other applications on the same host.
     * @see MSDN: http://goo.gl/6vqbj
     *
     * Calling this method does not require multicast permissions.
     *
     * @see https://developer.chrome.com/apps/sockets_udp#method-setMulticastLoopbackMode
     * @param socketId The socket ID.
     * @param enabled  Indicate whether to enable loopback mode.
     * @param callback Called when the configuration operation completes.
     */
    export function setMulticastLoopbackMode(socketId: number, enabled: boolean, callback: (result: number) => void): void;

    /**
     * Gets the multicast group addresses the socket is currently joined to.
     *
     * @see https://developer.chrome.com/apps/sockets_udp#method-getJoinedGroups
     * @param socketId The socket ID.
     * @param callback Called with an array of strings of the result.
     */
    export function getJoinedGroups(socketId: number, callback: (groups: string[]) => void): void;

    /**
     * Enables or disables broadcast packets on this socket.
     *
     * @since Chrome 44
     * @see https://developer.chrome.com/apps/sockets_udp#method-setBroadcast
     * @param socketId The socket ID.
     * @param enabled  true to enable broadcast packets, false to disable them.
     * @param callback Callback from the setBroadcast method.
     */
    export function setBroadcast(socketId: number, enabled: boolean, callback?: (result: number) => void): void;

    /**
     * Event raised when a UDP packet has been received for the given socket.
     *
     * @see https://developer.chrome.com/apps/sockets_udp#event-onReceive
     */
    export var onReceive: chrome.events.Event<(args: ReceiveEventArgs) => void>;

    /**
     * Event raised when a network error occured while the runtime was waiting
     * for data on the socket address and port. Once this event is raised, the
     * socket is paused and no more onReceive events will be raised for this
     * socket until the socket is resumed.
     *
     * @see https://developer.chrome.com/apps/sockets_udp#event-onReceiveError
     */
    export var onReceiveError: chrome.events.Event<(args: ReceiveErrorEventArgs) => void>;
}

/**
 * Use the chrome.sockets.tcpServer API to create server applications using TCP
 * connections. This API supersedes the TCP functionality previously found in
 * the chrome.socket API.
 *
 * @since Chrome 33
 * @see https://developer.chrome.com/apps/sockets_tcpServer
 */
declare namespace chrome.sockets.tcpServer {
    export interface CreateInfo {
        socketId: number;
    }

    export interface AcceptEventArgs {
        socketId: number;
        clientSocketId: number;
    }

    export interface AcceptErrorEventArgs {
        socketId: number;
        resultCode: number;
    }

    /**
     * @see https://developer.chrome.com/apps/sockets_tcpServer#type-SocketProperties
     */
    export interface SocketProperties {
        /**
         * Flag indicating if the socket remains open when the event page of the
         * application is unloaded. The default value is "false." When the
         * application is loaded, any sockets previously opened with
         * persistent=true can be fetched with getSockets.
         *
         * @see http://developer.chrome.com/apps/app_lifecycle.html
         */
        persistent?: boolean;

        /** An application-defined string associated with the socket. */
        name?: string;
    }

    /**
     * @see https://developer.chrome.com/apps/sockets_tcpServer#type-SocketInfo
     */
    export interface SocketInfo {
        /** The socket identifier. */
        socketId: number;

        /**
         * Flag indicating if the socket remains open when the event page of the
         * application is unloaded (see SocketProperties.persistent). The
         * default value is "false".
         */
        persistent: boolean;

        /** Application-defined string associated with the socket. */
        name?: string;

        /**
         * Flag indicating whether connection requests on a listening socket are
         * dispatched through the onAccept event or queued up in the listen
         * queue backlog. See setPaused. The default value is "false"
         */
        paused: boolean;

        /** If the socket is listening, contains its local IPv4/6 address. */
        localAddress?: string;

        /** If the socket is listening, contains its local port. */
        localPort?: number;
    }

    /**
     * Creates a TCP server socket.
     *
     * @see https://developer.chrome.com/apps/sockets_tcpServer#method-create
     * @param callback Called when the socket has been created.
     */
    export function create(callback: (createInfo: CreateInfo) => void): void;

    /**
     * Creates a TCP server socket.
     *
     * @see https://developer.chrome.com/apps/sockets_tcpServer#method-create
     * @param properties The socket properties.
     * @param callback   Called when the socket has been created.
     */
    export function create(properties: SocketProperties, callback: (createInfo: CreateInfo) => void): void;

    /**
     * Updates the socket properties.
     *
     * @see https://developer.chrome.com/apps/sockets_tcpServer#method-update
     * @param socketId   The socket identifier.
     * @param properties The properties to update.
     * @param callback   Called when the properties are updated.
     */
    export function update(socketId: number, properties: SocketProperties, callback?: () => void): void;

    /**
     * Enables or disables a listening socket from accepting new connections.
     * When paused, a listening socket accepts new connections until its backlog
     * (see listen function) is full then refuses additional connection
     * requests. onAccept events are raised only when the socket is un-paused.
     *
     * @see https://developer.chrome.com/apps/sockets_tcpServer#method-setPaused
     * @param callback Callback from the setPaused method.
     */
    export function setPaused(socketId: number, paused: boolean, callback?: () => void): void;

    /**
     * Listens for connections on the specified port and address. If the
     * port/address is in use, the callback indicates a failure.
     *
     * @see https://developer.chrome.com/apps/sockets_tcpServer#method-listen
     * @param socketId The socket identifier.
     * @param address  The address of the local machine.
     * @param port     The port of the local machine. When set to 0, a free port
     *                 is chosen dynamically. The dynamically allocated port can
     *                 be found by calling getInfo.
     * @param backlog  Length of the socket's listen queue. The default value
     *                 depends on the Operating System (SOMAXCONN), which
     *                 ensures a reasonable queue length for most applications.
     * @param callback Called when listen operation completes.
     */
    export function listen(socketId: number, address: string, port: number, backlog: number, callback: (result: number) => void): void;

    /**
     * Listens for connections on the specified port and address. If the
     * port/address is in use, the callback indicates a failure.
     *
     * @see https://developer.chrome.com/apps/sockets_tcpServer#method-listen
     * @param socketId The socket identifier.
     * @param address  The address of the local machine.
     * @param port     The port of the local machine. When set to 0, a free port
     *                 is chosen dynamically. The dynamically allocated port can
     *                 be found by calling getInfo.
     * @param callback Called when listen operation completes.
     */
    export function listen(socketId: number, address: string, port: number, callback: (result: number) => void): void;

    /**
     * Disconnects the listening socket, i.e. stops accepting new connections
     * and releases the address/port the socket is bound to. The socket
     * identifier remains valid, e.g. it can be used with listen to accept
     * connections on a new port and address.
     *
     * @see https://developer.chrome.com/apps/sockets_tcpServer#method-disconnect
     * @param socketId The socket identifier.
     * @param callback Called when the disconnect attempt is complete.
     */
    export function disconnect(socketId: number, callback?: () => void): void;

    /**
     * Disconnects and destroys the socket. Each socket created should be closed
     * after use. The socket id is no longer valid as soon at the function is
     * called. However, the socket is guaranteed to be closed only when the
     * callback is invoked.
     *
     * @see https://developer.chrome.com/apps/sockets_tcpServer#method-close
     * @param socketId The socket identifier.
     * @param callback Called when the close operation completes.
     */
    export function close(socketId: number, callback?: () => void): void;

    /**
     * Retrieves the state of the given socket.
     *
     * @see https://developer.chrome.com/apps/sockets_tcpServer#method-getInfo
     * @param socketId The socket identifier.
     * @param callback Called when the socket state is available.
     */
    export function getInfo(socketId: number, callback: (socketInfo: SocketInfo) => void): void;

    /**
     * Retrieves the list of currently opened sockets owned by the application.
     *
     * @see https://developer.chrome.com/apps/sockets_tcpServer#method-getSockets
     * @param callback Called when the list of sockets is available.
     */
    export function getSockets(callback: (socketInfos: SocketInfo[]) => void): void;

    /**
     * Event raised when a connection has been made to the server socket.
     *
     * @see https://developer.chrome.com/apps/sockets_tcpServer#event-onAccept
     */
    export var onAccept: chrome.events.Event<(args: AcceptEventArgs) => void>;

    /**
     * Event raised when a network error occured while the runtime was waiting
     * for new connections on the socket address and port. Once this event is
     * raised, the socket is set to paused and no more onAccept events are
     * raised for this socket until the socket is resumed.
     *
     * @see https://developer.chrome.com/apps/sockets_tcpServer#event-onAcceptError
     */
    export var onAcceptError: chrome.events.Event<(args: AcceptErrorEventArgs) => void>;
}

////////////////////
// System Display
////////////////////
/**
 * Use the system.display API to query display metadata.
 * Permissions: "system.display"
 * @since Chrome 30.
 */
declare namespace chrome.system.display {
    export interface Bounds {
        /**  The x-coordinate of the upper-left corner. */
        left: number;
        /**  The y-coordinate of the upper-left corner. */
        top: number;
        /** The width of the display in pixels. */
        width: number;
        /** The height of the display in pixels. */
        height: number;
    }

    export interface Insets {
        /** The x-axis distance from the left bound. */
        left: number;
        /** The y-axis distance from the top bound. */
        top: number;
        /** The x-axis distance from the right bound. */
        right: number;
        /** The y-axis distance from the bottom bound. */
        bottom: number;
    }

    /**
     * @since Chrome 57
     */
    export interface Point {
        /** The x-coordinate of the point. */
        x: number;
        /** The y-coordinate of the point. */
        y: number;
    }

    /**
     * @since Chrome 57
     */
    export interface TouchCalibrationPair {
        /**	The coordinates of the display point. */
        displayPoint: Point;
        /** The coordinates of the touch point corresponding to the display point. */
        touchPoint: Point;
    }

    /**
     * @since Chrome 52
     */
    export interface DisplayMode {
        /** The display mode width in device independent (user visible) pixels. */
        width: number;

        /** The display mode height in device independent (user visible) pixels. */
        height: number;

        /** The display mode width in native pixels. */
        widthInNativePixels: number;

        /** The display mode height in native pixels. */
        heightInNativePixels: number;

        /** The display mode UI scale factor. */
        uiScale: number;

        /** The display mode device scale factor. */
        deviceScaleFactor: number;

        /** True if the mode is the display's native mode. */
        isNative: boolean;

        /** True if the display mode is currently selected. */
        isSelected: boolean;
    }

    /**
     * @since Chrome 53
     */
    export interface DisplayLayout {
        /** The unique identifier of the display. */
        id: string;
        /** The unique identifier of the parent display. Empty if this is the root. */
        parentId: string;
        /** The layout position of this display relative to the parent. This will be ignored for the root. */
        position: 'top' | 'right' | 'bottom' | 'left';
        /** The offset of the display along the connected edge. 0 indicates that the topmost or leftmost corners are aligned. */
        offset: number;
    }

    /**
     * @description The pairs of point used to calibrate the display.
     * @export
     * @interface TouchCalibrationPairs
     */
    export interface TouchCalibrationPairs {
        /** First pair of touch and display point required for touch calibration. */
        pair1: TouchCalibrationPair,
        /** Second pair of touch and display point required for touch calibration. */
        pair2: TouchCalibrationPair,
        /** Third pair of touch and display point required for touch calibration. */
        pair3: TouchCalibrationPair,
        /** Fourth pair of touch and display point required for touch calibration. */
        pair4: TouchCalibrationPair
    }

    /**
     * @description Representation of info data to be used in chrome.system.display.setDisplayProperties()
     * @export
     * @interface DisplayPropertiesInfo
     */
    export interface DisplayPropertiesInfo {
        /**
         * @description Chrome OS only. If set to true, changes the display mode to unified desktop (see enableUnifiedDesktop for details). If set to false, unified desktop mode will be disabled. This is only valid for the primary display. If provided, mirroringSourceId must not be provided and other properties may not apply. This is has no effect if not provided.
         * @since Chrome 59
         * */
        isUnified?: boolean;

        /**
         * Chrome OS only. If set and not empty, enables mirroring for this display. Otherwise disables mirroring for this display. This value should indicate the id of the source display to mirror, which must not be the same as the id passed to setDisplayProperties. If set, no other property may be set.
         */
        mirroringSourceId?: string;

        /** If set to true, makes the display primary. No-op if set to false. */
        isPrimary?: boolean;

        /** If set, sets the display's overscan insets to the provided values. Note that overscan values may not be negative or larger than a half of the screen's size. Overscan cannot be changed on the internal monitor. It's applied after isPrimary parameter. */
        overscan?: Insets;

        /** If set, updates the display's rotation. Legal values are [0, 90, 180, 270]. The rotation is set clockwise, relative to the display's vertical position. It's applied after overscan paramter. */
        rotation?: 0 | 90 | 180 | 270;

        /** If set, updates the display's logical bounds origin along x-axis. Applied together with boundsOriginY, if boundsOriginY is set. Note that, when updating the display origin, some constraints will be applied, so the final bounds origin may be different than the one set. The final bounds can be retrieved using getInfo. The bounds origin is applied after rotation. The bounds origin cannot be changed on the primary display. Note that is also invalid to set bounds origin values if isPrimary is also set (as isPrimary parameter is applied first). */
        boundsOriginX?: number;

        /** If set, updates the display's logical bounds origin along y-axis. See documentation for boundsOriginX parameter. */
        boundsOriginY: number;

        /**
         * @since Chrome 52
         * @description If set, updates the display mode to the mode matching this value.
         */
        displayMode?: DisplayMode;
    }

    /**
     * @description Options affecting how the information is returned.
     * @since Chrome 59
     * @export
     * @interface DisplayInfoFlags
     */
    export interface DisplayInfoFlags {
        /**
         * @description If set to true, only a single DisplayUnitInfo will be returned by getInfo when in unified desktop mode (see enableUnifiedDesktop). Defaults to false.
         * @type {boolean}
         * @memberof DisplayInfoFlags
         */
        singleUnified?: boolean;
    }

    /** Information about display properties. */
    export interface DisplayInfo {
        /** The unique identifier of the display. */
        id: string;
        /** The user-friendly name (e.g. "HP LCD monitor"). */
        name: string;
        /** Identifier of the display that is being mirrored on the display unit. If mirroring is not in progress, set to an empty string. Currently exposed only on ChromeOS. Will be empty string on other platforms. */
        mirroringSourceId: string;
        /** True if this is the primary display. */
        isPrimary: boolean;
        /** True if this is an internal display. */
        isInternal: boolean;
        /** True if this display is enabled. */
        isEnabled: boolean;
        /** The number of pixels per inch along the x-axis. */
        dpiX: number;
        /** The number of pixels per inch along the y-axis. */
        dpiY: number;
        /** The display's clockwise rotation in degrees relative to the vertical position. Currently exposed only on ChromeOS. Will be set to 0 on other platforms. */
        rotation: number;
        /** The display's logical bounds. */
        bounds: Bounds;
        /** The display's insets within its screen's bounds. Currently exposed only on ChromeOS. Will be set to empty insets on other platforms. */
        overscan: Insets;
        /** The usable work area of the display within the display bounds. The work area excludes areas of the display reserved for OS, for example taskbar and launcher. */
        workArea: Bounds;
    }

    /** The information about display properties that should be changed. A property will be changed only if a new value for it is specified in |info|. */
    export interface DisplayProps {
        /** If set and not empty, starts mirroring between this and the display with the provided id (the system will determine which of the displays is actually mirrored). If set and not empty, stops mirroring between this and the display with the specified id (if mirroring is in progress). If set, no other parameter may be set. */
        mirroringSourceId?: string;
        /** If set to true, makes the display primary. No-op if set to false. */
        isPrimary?: boolean;
        /** If set, sets the display's overscan insets to the provided values. Note that overscan values may not be negative or larger than a half of the screen's size. Overscan cannot be changed on the internal monitor. It's applied after isPrimary parameter. */
        overscan?: Insets;
        /** If set, updates the display's rotation. Legal values are [0, 90, 180, 270]. The rotation is set clockwise, relative to the display's vertical position. It's applied after overscan paramter. */
        rotation?: number;
        /** If set, updates the display's logical bounds origin along x-axis. Applied together with boundsOriginY, if boundsOriginY is set. Note that, when updating the display origin, some constraints will be applied, so the final bounds origin may be different than the one set. The final bounds can be retrieved using getInfo. The bounds origin is applied after rotation. The bounds origin cannot be changed on the primary display. Note that is also invalid to set bounds origin values if isPrimary is also set (as isPrimary parameter is applied first). */
        boundsOriginX?: number;
        /** If set, updates the display's logical bounds origin along y-axis. See documentation for boundsOriginX parameter. */
        boundsOriginY?: number;
    }

    /**
     * @description Fired when anything changes to the display configuration.
     * @export
     * @interface DisplayChangedEvent
     * @extends {chrome.events.Event<() => void>}
     */
    export interface DisplayChangedEvent extends chrome.events.Event<() => void> { }

    /**
     * @description Requests the information for all attached display devices.
     * @export
     * @param {(info: DisplayInfo[]) => void} callback The callback to invoke with the results.
     */
    export function getInfo(callback: (info: DisplayInfo[]) => void): void;
    /**
     * @description Requests the information for all attached display devices.
     * @export
     * @since Chrome 59
     * @param {DisplayInfoFlags} [flags] Options affecting how the information is returned.
     * @param {(info: DisplayInfo[]) => void} callback The callback to invoke with the results.
     */
    export function getInfo(flags: DisplayInfoFlags, callback: (info: DisplayInfo[]) => void): void;

    /**
     * @description Requests the layout info for all displays. NOTE: This is only available to Chrome OS Kiosk apps and Web UI.
     * @since Chrome 53
     * @export
     * @param {(layouts: DisplayLayout[]) => void} callback The callback to invoke with the results.
     */
    export function getDisplayLayout(callback: (layouts: DisplayLayout[]) => void): void;

    /**
     * @description Updates the properties for the display specified by |id|, according to the information provided in |info|. On failure, runtime.lastError will be set. NOTE: This is only available to Chrome OS Kiosk apps and Web UI.
     * @export
     * @param {string} id The display's unique identifier.
     * @param {DisplayPropertiesInfo} info The information about display properties that should be changed. A property will be changed only if a new value for it is specified in |info|.
     * @param {() => void} [callback] Empty function called when the function finishes. To find out whether the function succeeded, runtime.lastError should be queried.
     */
    export function setDisplayProperties(id: string, info: DisplayPropertiesInfo, callback?: () => void): void;

    /**
     * @description Set the layout for all displays. Any display not included will use the default layout. If a layout would overlap or be otherwise invalid it will be adjusted to a valid layout. After layout is resolved, an onDisplayChanged event will be triggered. NOTE: This is only available to Chrome OS Kiosk apps and Web UI.
     * @since Chrome 53
     * @export
     * @param {DisplayLayout[]} layouts The layout information, required for all displays except the primary display.
     * @param {() => void} callback Empty function called when the function finishes. To find out whether the function succeeded, runtime.lastError should be queried.
     */
    export function setDisplayLayout(layouts: DisplayLayout[], callback?: () => void): void;

    /**
     * @description Enables/disables the unified desktop feature. Note that this simply enables the feature, but will not change the actual desktop mode. (That is, if the desktop is in mirror mode, it will stay in mirror mode) NOTE: This is only available to Chrome OS Kiosk apps and Web UI.
     * @since Chrome 46
     * @export
     * @param {boolean} enabled True if unified desktop should be enabled.
     */
    export function enableUnifiedDesktop(enabled: boolean): void;
    /**
     * @description Starts overscan calibration for a display. This will show an overlay on the screen indicating the current overscan insets. If overscan calibration for display |id| is in progress this will reset calibration.
     * @since Chrome 53
     * @export
     * @param {string} id The display's unique identifier.
     */
    export function overscanCalibrationStart(id: string): void;
    /**
     * @description Adjusts the current overscan insets for a display. Typically this should etiher move the display along an axis (e.g. left+right have the same value) or scale it along an axis (e.g. top+bottom have opposite values). Each Adjust call is cumulative with previous calls since Start.
     * @since Chrome 53
     * @export
     * @param {string} id The display's unique identifier.
     * @param {Insets} delta The amount to change the overscan insets.
     */
    export function overscanCalibrationAdjust(id: string, delta: Insets): void;

    /**
     * @description Resets the overscan insets for a display to the last saved value (i.e before Start was called).
     * @since Chrome 53
     * @export
     * @param {string} id The display's unique identifier.
     */
    export function overscanCalibrationReset(id: string): void;

    /**
     * @description Complete overscan adjustments for a display by saving the current values and hiding the overlay.
     * @since Chrome 53
     * @export
     * @param {string} id The display's unique identifier.
     */
    export function overscanCalibrationComplete(id: string): void;

    /**
     * @description Displays the native touch calibration UX for the display with |id| as display id. This will show an overlay on the screen with required instructions on how to proceed. The callback will be invoked in case of successful calibraion only. If the calibration fails, this will throw an error.
     * @since Chrome 57
     * @export
     * @param {string} id The display's unique identifier.
     * @param {(success) => void} callback Optional callback to inform the caller that the touch calibration has ended. The argument of the callback informs if the calibration was a success or not.
     */
    export function showNativeTouchCalibration(id: string, callback: (success: boolean) => void): void;

    /**
     * @description Starts custom touch calibration for a display. This should be called when using a custom UX for collecting calibration data. If another touch calibration is already in progress this will throw an error.
     * @since Chrome 57
     * @export
     * @param {string} id The display's unique identifier.
     */
    export function startCustomTouchCalibration(id: string): void;

    /**
     * @description Sets the touch calibration pairs for a display. These |pairs| would be used to calibrate the touch screen for display with |id| called in startCustomTouchCalibration(). Always call |startCustomTouchCalibration| before calling this method. If another touch calibration is already in progress this will throw an error.
     * @since Chrome 57
     * @export
     * @param {TouchCalibrationPairs} pairs The pairs of point used to calibrate the display.
     * @param {Bounds} bounds Bounds of the display when the touch calibration was performed. |bounds.left| and |bounds.top| values are ignored.
     */
    export function completeCustomTouchCalibration(pairs: TouchCalibrationPairs, bounds: Bounds): void;
    /**
     * @description Resets the touch calibration for the display and brings it back to its default state by clearing any touch calibration data associated with the display.
     * @since Chrome 57
     * @export
     * @param {string} id The display's unique identifier.
     */
    export function clearTouchCalibration(id: string): void;

    /**
     * @description Fired when anything changes to the display configuration.
     * @export
     */
    export var onDisplayChanged: DisplayChangedEvent;
}

////////////////////
// System - Network
////////////////////
declare namespace chrome.system.network {
    export interface NetworkInterface {
        name: string;
        address: string;
        prefixLength: number;
    }

    export function getNetworkInterfaces(callback: (networkInterfaces: NetworkInterface[]) => void): void;
}

declare namespace chrome.runtime {
    export interface Manifest {
        app?: {
            background?: {
                scripts?: string[];
            }
        },
        bluetooth?: {
            uuids?: string[];
            socket?: boolean;
            low_energy?: boolean;
            peripheral?: boolean;
        },
        file_handlers?: {
            [name: string]: {
                types?: string[];
                extensions?: string[];
                title?: string;
            }
        },
        kiosk_enabled?: boolean,
        kiosk_only?: boolean,
        url_handlers?: {
            [name: string]: {
                matches: string[];
                title?: string;
            }
        },
        usb_printers?: {
            filters: {
                vendorId?: number;
                productId?: number;
                interfaceClass?: number;
                interfaceSubclass?: number;
                interfaceProtocol?: number;
            }[]
        },
        webview?: {
            partitions?: {
                name: string;
                accessible_resources: string[];
            }[]
        }
    }
}

////////////////////
// USB
////////////////////
declare namespace chrome.usb {
    type Direction = 'in' | 'out';

    export interface Device {
        device: number,
        vendorId: number,
        productId: number,
        productName: string,
        manufacturerName: string,
        serialNumber: string
    }

    export interface ConnectionHandle {
        handle: number,
        vendorId: number,
        productId: number
    }

    export interface EndpointDescriptor {
        address: number,
        type: 'control' | 'interrupt' | 'isochronous' | 'bulk',
        direction: Direction,
        maximumPacketSize: number,
        synchronization?: 'asynchronous' | 'adaptive' | 'synchronous',
        usage?: 'data' | 'feedback' | 'explicitFeedback',
        pollingInterval?: number,
        extra_data: ArrayBuffer
    }

    export interface InterfaceDescriptor {
        interfaceNumber: number,
        alternateSetting: number,
        interfaceClass: number,
        interfaceSubclass: number,
        interfaceProtocol: number,
        description?: string,
        endpoints: EndpointDescriptor[],
        extra_data: ArrayBuffer
    }

    export interface ConfigDescriptor {
        active: boolean,
        configurationValue: number,
        description?: string,
        selfPowered: boolean,
        remoteWakeup: boolean,
        maxPower: number,
        interfaces: InterfaceDescriptor[],
        extra_data: ArrayBuffer
    }

    export interface GenericTransferInfo {
        direction: Direction,
        endpoint: number,
        length?: number,
        data?: ArrayBuffer,
        timeout?: number
    }

    export interface TransferResultInfo {
        resultCode: number,
        data?: ArrayBuffer
    }

    export interface DeviceFilter {
        vendorId?: number,
        productId?: number,
        interfaceClass?: number,
        interfaceSubclass?: number,
        interfaceProtocol?: number
    }

    export interface TransferInfo {
        direction: Direction;
        recipient: 'device' | 'interface' | 'endpoint' | 'other';
        requestType: 'standard' | 'class' | 'vendor' | 'reserved';
        request: number;
        value: number;
        index: number;
        length?: number;
        data?: ArrayBuffer;
        timeout?: number;
    }

    export interface DeviceEvent extends chrome.events.Event<(device: Device) => void> { }

    export var onDeviceAdded: DeviceEvent;
    export var onDeviceRemoved: DeviceEvent;

    export function getDevices(options: { vendorId?: number, productId?: number, filters?: DeviceFilter[] }, callback: (devices: Device[]) => void): void;
    export function getUserSelectedDevices(options: { multiple?: boolean, filters?: DeviceFilter[] }, callback: (devices: Device[]) => void): void;
    export function getConfigurations(device: Device, callback: (configs: ConfigDescriptor[]) => void): void;
    export function requestAccess(device: Device, interfaceId: number, callback: (success: boolean) => void): void;
    export function openDevice(device: Device, callback: (handle: ConnectionHandle) => void): void;
    export function findDevices(options: { vendorId: number, productId: number, interfaceId?: number }, callback: (handles: ConnectionHandle[]) => void): void;
    export function closeDevice(handle: ConnectionHandle, callback?: () => void): void;
    export function setConfiguration(handle: ConnectionHandle, configurationValue: number, callback: () => void): void;
    export function getConfiguration(handle: ConnectionHandle, callback: (config: ConfigDescriptor) => void): void;
    export function listInterfaces(handle: ConnectionHandle, callback: (descriptors: InterfaceDescriptor[]) => void): void;
    export function claimInterface(handle: ConnectionHandle, interfaceNumber: number, callback: () => void): void;
    export function releaseInterface(handle: ConnectionHandle, interfaceNumber: number, callback: () => void): void;
    export function setInterfaceAlternateSetting(handle: ConnectionHandle, interfaceNumber: number, alternateSetting: number, callback: () => void): void;
    export function controlTransfer(handle: ConnectionHandle, transferInfo: TransferInfo, callback: (info: TransferResultInfo) => void): void;
    export function bulkTransfer(handle: ConnectionHandle, transferInfo: GenericTransferInfo, callback: (info: TransferResultInfo) => void): void;
    export function interruptTransfer(handle: ConnectionHandle, transferInfo: GenericTransferInfo, callback: (info: TransferResultInfo) => void): void;
    export function isochronousTransfer(handle: ConnectionHandle, transferInfo: { transferInfo: GenericTransferInfo, packets: number, packetLength: number }, callback: (info: TransferResultInfo) => void): void;
    export function resetDevice(handle: ConnectionHandle, callback: (success: boolean) => void): void;
}

declare namespace chrome.networking.onc {
    export type ActivationStateType = 'Activated' | 'Activating' | 'NotActivated' | 'PartiallyActivated';
    export type CaptivePortalStatus = 'Unknown' | 'Offline' | 'Online' | 'Portal' | 'ProxyAuthRequired';
    export type ConnectionStateType = 'Connected' | 'Connecting' | 'NotConnected';
    export type IPConfigType = 'DHCP' | 'Static';
    export type NetworkType = 'All' | 'Cellular' | 'Ethernet' | 'VPN' | 'Wireless' | 'WiFi' | 'WiMAX';
    export type ProxySettingsType = 'Direct' | 'Manual' | 'PAC' | 'WPAD';
    export interface ManagedBoolean {
        /**
         * @description The active value currently used by the network configuration manager (e.g. Shill).
         * @type {boolean}
         * @memberof ManagedBoolean
         */
        Active?: boolean,
        /**
         * @description The source from which the effective property value was determined.
         * @type {string}
         * @memberof ManagedBoolean
         */
        Effective?: string,
        /**
         * @description The property value provided by the user policy.
         * @type {boolean}
         * @memberof ManagedBoolean
         */
        UserPolicy?: boolean,
        /**
         * @description The property value provided by the device policy.
         * @type {boolean}
         * @memberof ManagedBoolean
         */
        DevicePolicy?: boolean,
        /**
         * @description The property value set by the logged in user. Only provided if |UserEditable| is true.
         * @type {boolean}
         * @memberof ManagedBoolean
         */
        UserSettings?: boolean,
        /**
         * @description The value set for all users of the device. Only provided if |DeviceEditiable| is true.
         * @type {boolean}
         * @memberof ManagedBoolean
         */
        SharedSettings?: boolean,
        /**
         * @description Whether a UserPolicy for the property exists and allows the property to be edited (i.e. the policy set recommended property value). Defaults to false.
         * @type {boolean}
         * @memberof ManagedBoolean
         */
        UserEditable?: boolean,
        /**
         * @description Whether a DevicePolicy for the property exists and allows the property to be edited (i.e. the policy set recommended property value). Defaults to false.
         * @type {boolean}
         * @memberof ManagedBoolean
         */
        DeviceEditable?: boolean
    }
    export interface ManagedLong {
        /**
         * @description The active value currently used by the network configuration manager (e.g. Shill).
         * @type {number}
         * @memberof ManagedLong
         */
        Active?: number,
        /**
         * @description The source from which the effective property value was determined.
         * @type {string}
         * @memberof ManagedLong
         */
        Effective?: string,
        /**
         * @description The property value provided by the user policy.
         * @type {number}
         * @memberof ManagedLong
         */
        UserPolicy?: number,
        /**
         * @description The property value provided by the device policy.
         * @type {number}
         * @memberof ManagedLong
         */
        DevicePolicy?: number,
        /**
         * @description The property value set by the logged in user. Only provided if |UserEditable| is true.
         * @type {number}
         * @memberof ManagedLong
         */
        UserSettings?: number,
        /**
         * @description The value set for all users of the device. Only provided if |DeviceEditiable| is true.
         * @type {number}
         * @memberof ManagedLong
         */
        SharedSettings?: number,
        /**
         * @description Whether a UserPolicy for the property exists and allows the property to be edited (i.e. the policy set recommended property value). Defaults to false.
         * @type {boolean}
         * @memberof ManagedLong
         */
        UserEditable?: boolean,
        /**
         * @description Whether a DevicePolicy for the property exists and allows the property to be edited (i.e. the policy set recommended property value). Defaults to false.
         * @type {boolean}
         * @memberof ManagedLong
         */
        DeviceEditable?: boolean
    }
}

///////////////////
// Webview Tag
///////////////////
/**
 * Use the webview tag to actively load live content from the web over the network and embed it in your Chrome App. Your app can control the appearance of the <code>webview</code> and interact with the web content, initiate navigations in an embedded web page, react to error events that happen within it, and more (see <a href=\"#usage\">Usage</a>).
 */
declare namespace chrome.webview {
    /** Options that determine what data should be cleared by `clearData`. */
    export interface ClearDataOptions {
        /** Clear data accumulated on or after this date, represented in milliseconds since the epoch (accessible via the getTime method of the JavaScript <code>Date</code> object). If absent, defaults to <code>0</code> (which would remove all browsing data). */
        since?: number;
    }
    export interface WindowEvent extends chrome.events.Event<() => void> { }

    export interface ConsoleEvent extends Event {
        /**
         * @description The severity level of the log message. Ranges from 0 to 4.
         * @type {number}
         * @memberof ConsoleEvent
         */
        level: number;
        /**
         * @description The logged message contents.
         * @type {string}
         * @memberof ConsoleEvent
         */
        message: string;
        /**
         * @description The line number of the message source.
         * @type {number}
         * @memberof ConsoleEvent
         */
        line: number;
        /**
         * @description A string identifying the resource which logged the message.
         * @type {string}
         * @memberof ConsoleEvent
         */
        sourceId: string;
    }

    export interface ExitEvent extends Event {
        /**
         * @description Chrome's internal ID of the process that exited.
         * @type {number}
         * @memberof ExitEvent
         */
        processID: number;
        /**
         * @description String indicating the reason for the exit.
         * @type {string}
         * @memberof ExitEvent
         */
        reason: 'normal' | 'abnormal' | 'crash' | 'kill';
    }

    /** Description of a declarative rule for handling events. */
    export interface Rule {
        /** Optional priority of this rule. Defaults to 100.  */
        priority?: number;
        /** List of conditions that can trigger the actions. */
        conditions: any[];
        /** Optional. Optional identifier that allows referencing this rule.  */
        id?: string;
        /** List of actions that are triggered if one of the condtions is fulfilled. */
        actions: any[];
        /**
         * @description Tags can be used to annotate rules and perform operations on sets of rules.¨
         * @since Chrome 28
         * @type {string[]}
         * @memberof Rule
         */
        tags?: string[];
    }

    /**
     * @description Details of the script or CSS to inject. Either the code or the file property must be set, but both may not be set at the same time.
     * @export
     * @interface InjectDetails
     */
    export interface InjectDetails {
        /**
         * @description JavaScript or CSS code to inject.<br><br><b>Warning:</b><br>Be careful using the <code>code</code> parameter. Incorrect use of it may open your app to <a href=\"https://en.wikipedia.org/wiki/Cross-site_scripting\">cross site scripting</a> attacks.
         * @type {string}
         * @memberof InjectDetails
         */
        code?: string,
        /**
         * @description JavaScript or CSS file to inject.
         * @type {string}
         * @memberof InjectDetails
         */
        file?: string
    }

    export interface WebViewElementEventMap extends ElementEventMap {
        'message': ConsoleEvent,
        'exit': ExitEvent
    }

    /**
     * @description
     * @export
     * @interface HTMLWebViewElement
     * @extends {Element}
     */
    export interface HTMLWebViewElement extends Element {
        executeScript?: (details: InjectDetails, callback?: (result: any) => void) => void;
        src: string;
        contentWindow: Window;
        addEventListener<K extends keyof WebViewElementEventMap>(type: K, listener: (this: HTMLWebViewElement, ev: WebViewElementEventMap[K]) => any, useCapture?: boolean): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    }

    /**Options that determine what data should be cleared by clearData. */
    export interface ClearDataOptions {

        /**
        * @description Clear data accumulated on or after this date, represented in milliseconds since the epoch (accessible via the getTime method of the JavaScript Date object). If absent, defaults to 0 (which would remove all browsing data).
         */
        since?: number;
    }
    /**A set of data types. Missing properties are interpreted as false. */
    export interface ClearDataTypeSet {

        /**
        * @description Websites' appcaches.
         */
        appcache?: boolean

        /**
        * @description Since Chrome 43. The browser's cache. Note: when removing data, this clears the entire cache; it is not limited to the range you specify.
         */
        cache?: boolean

        /**
        * @description The partition's cookies.
         */
        cookies?: boolean

        /**
        * @description The partition's session cookies.
         */
        sessionCookies?: boolean

        /**
        * @description The partition's persistent cookies.
         */
        persistentCookies?: boolean

        /**
        * @description Websites' filesystems.
         */
        fileSystems?: boolean

        /**
        * @description Websites' IndexedDB data.
         */
        indexedDB?: boolean

        /**
        * @description Websites' local storage data.
         */
        localStorage?: boolean

        /**
        * @description Websites' WebSQL data.
         */
        webSQL?: boolean
    }
    /**
    * The different contexts a menu can appear in. Specifying 'all' is equivalent to the combination of all other contexts.
    * Enum values:
    * "all"
    * "page"
    * "frame"
    * "selection"
    * "link"
    * "editable"
    * "image"
    * "video"
    * "audio" */
    export type ContextType = "all" | "page" | "frame" | "selection" | "link" | "editable" | "image" | "video" | "audio";
    /**Details of the script or CSS to inject. Either the code or the file property must be set, but both may not be set at the same time. */
    export interface InjectDetails {

        /**
        * @description JavaScript or CSS code to inject.   Warning:  Be careful using the code parameter. Incorrect use of it may open your app to <a href="https://en.wikipedia.org/wiki/Cross-site_scripting">cross site scripting</a> attacks.
         */
        code?: string

        /**
        * @description JavaScript or CSS file to inject.
         */
        file?: string
    }
    /**The type of injection item: code or a set of files. */
    export interface InjectionItems {

        /**
        * @description JavaScript code or CSS to be injected into matching pages.
         */
        code?: string

        /**
        * @description The list of JavaScript or CSS files to be injected into matching pages. These are injected in the order they appear in this array.
         */
        files?: any[]
    }
    /**Details of the content script to inject. Refer to the <a href='/extensions/content_scripts'>content scripts</a> documentation for more details. */
    export interface ContentScriptDetails {

        /**
        * @description The name of the content script to inject.
         */
        name: string

        /**
        * @description Specifies which pages this content script will be injected into.
         */
        matches: any[]

        /**
        * @description Excludes pages that this content script would otherwise be injected into.
         */
        exclude_matches?: any[]

        /**
        * @description Whether to insert the content script on about:blank and about:srcdoc. Content scripts will only be injected on pages when their inherit URL is matched by one of the declared patterns in the matches field. The inherit URL is the URL of the document that created the frame or window. Content scripts cannot be inserted in sandboxed frames.
         */
        match_about_blank?: boolean

        /**
        * @description The CSS code or a list of CSS files to be injected into matching pages. These are injected in the order they appear, before any DOM is constructed or displayed for the page.
         */
        css?: InjectionItems

        /**
        * @description The JavaScript code or a list of JavaScript files to be injected into matching pages. These are injected in the order they appear.
         */
        js?: InjectionItems

        /**
        * @description The soonest that the JavaScript or CSS will be injected into the tab. Defaults to "document_idle".
         */
        run_at?: chrome.extensionTypes.RunAt;

        /**
        * @description If all_frames is true, this implies that the JavaScript or CSS should be injected into all frames of current page. By default, all_frames is false and the JavaScript or CSS is only injected into the top frame.
         */
        all_frames?: boolean;

        /**
        * @description Applied after matches to include only those URLs that also match this glob. Intended to emulate the @include Greasemonkey keyword.
         */
        include_globs?: string[];

        /**
        * @description Applied after matches to exclude URLs that match this glob. Intended to emulate the @exclude Greasemonkey keyword.
         */
        exclude_globs?: string[];
    }
    /**@todo Add documentation */
    export interface ContextMenuCreateProperties {

        /**
        * @description The type of menu item. Defaults to 'normal' if not specified.
         */
        type?: chrome.contextMenus.ItemType

        /**
        * @description The unique ID to assign to this item. Mandatory for event pages. Cannot be the same as another ID for this extension.
         */
        id?: string

        /**
        * @description The text to be displayed in the item; this is <em>required</em> unless type is 'separator'. When the context is 'selection', you can use %s within the string to show the selected text. For example, if this parameter's value is "Translate '%s' to Pig Latin" and the user selects the word "cool", the context menu item for the selection is "Translate 'cool' to Pig Latin".
         */
        title?: string

        /**
        * @description The initial state of a checkbox or radio item: true for selected and false for unselected. Only one radio item can be selected at a time in a given group of radio items.
         */
        checked?: boolean

        /**
        * @description List of contexts this menu item will appear in. Defaults to ['page'] if not specified.
         */
        contexts?: any[]

        /**
        * @description A function that will be called back when the menu item is clicked.
        * @param {any} [object Object]
         */
        onclick?: (info: any) => void

        /**
        * @description The ID of a parent menu item; this makes the item a child of a previously added item.
         */
        parentId?: number | string

        /**
        * @description Lets you restrict the item to apply only to documents whose URL matches one of the given patterns. (This applies to frames as well.) For details on the format of a pattern, see <a href='match_patterns'>Match Patterns</a>.
         */
        documentUrlPatterns?: any[]

        /**
        * @description Similar to documentUrlPatterns, but lets you filter based on the src attribute of img/audio/video tags and the href of anchor tags.
         */
        targetUrlPatterns?: any[]

        /**
        * @description Whether this context menu item is enabled or disabled. Defaults to true.
         */
        enabled?: boolean
    }
    /**@todo Add documentation */
    export interface ContextMenuUpdateProperties {

        /**
        * @description The type of menu item.
         */
        type?: chrome.webview.ContextType;

        /**
        * @description The text to be displayed in the item
         */
        title?: string

        /**
        * @description The state of a checkbox or radio item: true for selected and false for unselected. Only one radio item can be selected at a time in a given group of radio items.
         */
        checked?: boolean

        /**
        * @description List of contexts this menu item will appear in.
         */
        contexts?: any[]

        /**
        * @description A function that will be called back when the menu item is clicked.
        * @param {any} [object Object]
         */
        onclick?: (info: any) => void

        /**
        * @description The ID of a parent menu item; this makes the item a child of a previously added item. <em>Note:</em> You cannot change an item to be a child of one of its own descendants.
         */
        parentId?: number | string

        /**
        * @description Lets you restrict the item to apply only to documents whose URL matches one of the given patterns. (This applies to frames as well.) For details on the format of a pattern, see <a href='match_patterns'>Match Patterns</a>.
         */
        documentUrlPatterns?: any[]

        /**
        * @description Similar to documentUrlPatterns, but lets you filter based on the src attribute of img/audio/video tags and the href of anchor tags.
         */
        targetUrlPatterns?: any[]

        /**
        * @description Whether this context menu item is enabled or disabled.
         */
        enabled?: boolean
    }
    export interface ContextMenus {

        /**
        * @description Creates a new context menu item. Note that if an error occurs during creation, you may not find out until the creation callback fires (the details will be in chrome.runtime.lastError).
        * @param {object} createProperties The properties used to create the item
        * @param {any} [object Object]
         */
        create(createProperties: object, callback?: () => void): void;

        /**
        * @description Updates a previously created context menu item.
        * @param {any} id The ID of the item to update.
        * @param {object} updateProperties The properties to update. Accepts the same values as the create function.
        * @param {any} [object Object]
         */
        update(id: number | string, updateProperties: object, callback?: () => void): void;

        /**
        * @description Removes a context menu item.
        * @param {any} menuItemId The ID of the context menu item to remove.
        * @param {any} [object Object]
         */
        remove(menuItemId: number | string, callback?: () => void): void;

        /**
        * @description Removes all context menu items added to this webview.
        * @param {any} [object Object]
         */
        removeAll(callback?: () => void): void;


        /**
        * @description Fired before showing a context menu on this webview. Can be used to disable this context menu by calling event.preventDefault().
         */
        onShow: chrome.events.Event<chrome.webview.IOnShowEvent>;

    }
    export interface IOnShowEvent {
        /**
         * @description Call this to prevent showing the context menu.
         * @memberof IOnShowEvent
         */
        preventDefault: () => void;
    }
    export interface ContentWindow {

        /**
        * @description <p>Posts a message to the embedded web content as long as the embedded content is displaying a page from the target origin. This method is available once the page has completed loading. Listen for the <a href="#event-contentload">contentload</a> event and then call the method.</p><p>The guest will be able to send replies to the embedder by posting message to event.source on the message event it receives.</p><p>This API is identical to the <a href="https://developer.mozilla.org/en-US/docs/DOM/window.postMessage">HTML5 postMessage API</a> for communication between web pages. The embedder may listen for replies by adding a message event listener to its own frame.</p>
        * @param {any} message Message object to send to the guest.
        * @param {string} targetOrigin Specifies what the origin of the guest window must be for the event to be dispatched.
         */
        postMessage(message: any, targetOrigin: string): void;

    }
    export interface DialogController {

        /**
        * @description Accept the dialog. Equivalent to clicking OK in an alert, confirm, or prompt dialog.
        * @param {string} response The response string to provide to the guest when accepting a prompt dialog.
         */
        ok(response?: string): void;

        /**
        * @description Reject the dialog. Equivalent to clicking Cancel in a confirm or prompt dialog.
         */
        cancel(): void;

    }
    /**Contains all of the results of the find request. */
    export interface FindCallbackResults {

        /**
        * @description The number of times searchText was matched on the page.
         */
        numberOfMatches: number

        /**
        * @description The ordinal number of the current match.
         */
        activeMatchOrdinal: number

        /**
        * @description Describes a rectangle around the active match in screen coordinates.
         */
        selectionRect: SelectionRect

        /**
        * @description Indicates whether this find request was canceled.
         */
        canceled: boolean
    }
    /**Options for the find request. */
    export interface FindOptions {

        /**
        * @description Flag to find matches in reverse order. The default value is false.
         */
        backward?: boolean

        /**
        * @description Flag to match with case-sensitivity. The default value is false.
         */
        matchCase?: boolean
    }
    export interface NewWindow {

        /**
        * @description Attach the requested target page to an existing webview element.
        * @param {object} webview The webview element to which the target page should be attached.
         */
        attach(webview: object): void;

        /**
        * @description Cancel the new window request.
         */
        discard(): void;

    }
    export interface MediaPermissionRequest {

        /**
        * @description Allow the permission request.
         */
        allow(): void;

        /**
        * @description Deny the permission request. This is the default behavior if allow is not called.
         */
        deny(): void;

    }
    export interface GeolocationPermissionRequest {

        /**
        * @description Allow the permission request.
         */
        allow(): void;

        /**
        * @description Deny the permission request. This is the default behavior if allow is not called.
         */
        deny(): void;

    }
    export interface PointerLockPermissionRequest {

        /**
        * @description Allow the permission request.
         */
        allow(): void;

        /**
        * @description Deny the permission request. This is the default behavior if allow is not called.
         */
        deny(): void;

    }
    export interface DownloadPermissionRequest {

        /**
        * @description Allow the permission request.
         */
        allow(): void;

        /**
        * @description Deny the permission request. This is the default behavior if allow is not called.
         */
        deny(): void;

    }
    export interface FileSystemPermissionRequest {

        /**
        * @description Allow the permission request.
         */
        allow(): void;

        /**
        * @description Deny the permission request.
         */
        deny(): void;

    }
    export interface FullscreenPermissionRequest {

        /**
        * @description Allow the permission request.
         */
        allow(): void;

        /**
        * @description Deny the permission request.
         */
        deny(): void;

    }
    export interface LoadPluginPermissionRequest {

        /**
        * @description Allow the permission request. This is the default behavior if deny is not called..
         */
        allow(): void;

        /**
        * @description Deny the permission request.
         */
        deny(): void;

    }
    /**<p>Describes a rectangle in screen coordinates.</p><p>The containment semantics are array-like; that is, the coordinate (left, top) is considered to be contained by the rectangle, but the coordinate (left + width, top) is not.</p> */
    export interface SelectionRect {

        /**
        * @description Distance from the left edge of the screen to the left edge of the rectangle.
         */
        left: number

        /**
        * @description Distance from the top edge of the screen to the top edge of the rectangle.
         */
        top: number

        /**
        * @description Width of the rectangle.
         */
        width: number

        /**
        * @description Height of the rectangle.
         */
        height: number
    }
    /**Interface which provides access to webRequest events on the guest page. See the <a href="http://developer.chrome.com/extensions/webRequest">chrome.webRequest</a> extensions API for details on webRequest life cycle and related concepts.<p>To illustrate how usage differs from the extensions webRequest API, consider the following example code which blocks any guest requests for URLs which match *://www.evil.com/*:</p><pre>webview.request.onBeforeRequest.addListener(
      function(details) { return {cancel: true}; },
      {urls: ["*://www.evil.com/*"]},
      ["blocking"]);</pre><p>Additionally, this interface supports declarative webRequest rules through onRequest and onMessage events. See <a href="http://developer.chrome.com/extensions/declarativeWebRequest.html">declarativeWebRequest</a> for API details.</p>Note that conditions and actions for declarative webview webRequests should be instantiated from their chrome.webViewRequest.* counterparts. The following example code declaratively blocks all requests to "example.com" on the webview myWebview:</p><pre>var rule = {
      conditions: [
        new chrome.webViewRequest.RequestMatcher({ url: { hostSuffix: 'example.com' } })
      ],
      actions: [ new chrome.webViewRequest.CancelRequest() ]
    };
    myWebview.request.onRequest.addRules([rule]);</pre> */
    export interface WebRequestEventInterface {
    }
    /**
    * Defines the how zooming is handled in the webview.
    * Enum values:
    * "per-origin"
    * * Zoom changes will persist in the zoomed page's origin, i.e. all other webviews in the same partition that are navigated to that same origin will be zoomed as well. Moreover, per-origin zoom changes are saved with the origin, meaning that when navigating to other pages in the same origin, they will all be zoomed to the same zoom factor.
    * "per-view"
    * * Zoom changes only take effect in this webview, and zoom changes in other webviews will not affect the zooming of this webview. Also, per-view zoom changes are reset on navigation; navigating a webview will always load pages with their per-origin zoom factors (within the scope of the partition).
    * "disabled"
    * * Disables all zooming in the webview. The content will revert to the default zoom level, and all attempted zoom changes will be ignored. */
    export type ZoomMode = "per-origin" | "per-view" | "disabled";

    /**
    * @description Queries audio state.
    * @param {any} [object Object]
     */
    export function getAudioState(callback: (audible: boolean) => void): void;

    /**
    * @description Sets audio mute state of the webview.
    * @param {boolean} mute Mute audio value
     */
    export function setAudioMuted(mute: boolean): void;

    /**
    * @description Queries whether audio is muted.
    * @param {any} [object Object]
     */
    export function isAudioMuted(callback: (muted: boolean) => void): void;

    /**
     * @description Captures the visible region of the webview.
     * @param {(dataUrl: string) => void} callback A data URL which encodes an image of the visible area of the captured tab. May be assigned to the 'src' property of an HTML Image element for display.
     */
    export function captureVisibleRegion(callback: (dataUrl: string) => void): void;
    /**
     * @description Captures the visible region of the webview.
     * @param {*} options
     * @param {(dataUrl: string) => void} callback
     */
    export function captureVisibleRegion(options: chrome.extensionTypes.ImageDetails, callback: (dataUrl: string) => void): void;

    /**
    * @description <p>Adds content script injection rules to the webview. When the webview navigates to a page matching one or more rules, the associated scripts will be injected. You can programmatically add rules or update existing rules.</p><p>The following example adds two rules to the webview: 'myRule' and 'anotherRule'.</p><pre>webview.addContentScripts([
      {
        name: 'myRule',
        matches: ['http://www.foo.com/*'],
        css: { files: ['mystyles.css'] },
        js: { files: ['jquery.js', 'myscript.js'] },
        run_at: 'document_start'
      },
      {
        name: 'anotherRule',
        matches: ['http://www.bar.com/*'],
        js: { code: "document.body.style.backgroundColor = 'red';" },
        run_at: 'document_end'
      }]);
     ...

    // Navigates webview.
    webview.src = 'http://www.foo.com';</pre><p>You can defer addContentScripts call until you needs to inject scripts.</p><p>The following example shows how to overwrite an existing rule.</p><pre>webview.addContentScripts([{
        name: 'rule',
        matches: ['http://www.foo.com/*'],
        js: { files: ['scriptA.js'] },
        run_at: 'document_start'}]);

    // Do something.
    webview.src = 'http://www.foo.com/*';
     ...
    // Overwrite 'rule' defined before.
    webview.addContentScripts([{
        name: 'rule',
        matches: ['http://www.bar.com/*'],
        js: { files: ['scriptB.js'] },
        run_at: 'document_end'}]);</pre><p>If webview has been naviagted to the origin (e.g., foo.com) and calls webview.addContentScripts to add 'myRule', you need to wait for next navigation to make the scripts injected. If you want immediate injection, executeScript will do the right thing.</p><p>Rules are preserved even if the guest process crashes or is killed or even if the webview is reparented.</p><p>Refer to the <a href='/extensions/content_scripts'>content scripts</a> documentation for more details.</p>
    * @param {ContentScriptDetails[]} contentScriptList Details of the content scripts to add.
     */
    export function addContentScripts(contentScriptList: ContentScriptDetails[]): void;

    /**
    * @description Navigates backward one history entry if possible. Equivalent to go(-1).
    * @param {(success: boolean) => void} [callback] Called after the navigation has either failed or completed successfully. Success parameter indicates whether the navigation was successful.
     */
    export function back(callback?: (success: boolean) => void): void;

    /**
    * @description Indicates whether or not it is possible to navigate backward through history. The state of this function is cached, and updated before each loadcommit, so the best place to call it is on loadcommit.
     */
    export function canGoBack(): void;

    /**
    * @description Indicates whether or not it is possible to navigate forward through history. The state of this function is cached, and updated before each loadcommit, so the best place to call it is on loadcommit.
     */
    export function canGoForward(): void;

    /**
    * @description <p>Clears browsing data for the webview partition.</p>
    * @param {any} options Options determining which data to clear.
    * @param {any} types The types of data to be cleared.
    * @param {any} [object Object]
     */
    export function clearData(options: ClearDataOptions, types: ClearDataTypeSet, callback?: () => void): void;

    /**
    * @description <p>Injects JavaScript code into the guest page.</p><p>The following sample code uses script injection to set the guest page's background color to red:</p><pre>webview.executeScript({ code: "document.body.style.backgroundColor = 'red'" });</pre>
    * @param {any} details Details of the script to run.
    * @param {any} [object Object]
     */
    export function executeScript(details: InjectDetails, callback?: (result?: any[]) => void): void;

    /**
    * @description Initiates a find-in-page request.
    * @param {string} searchText The string to find in the page.
    * @param {any} options Options for the find request.
    * @param {any} [object Object]
     */
    export function find(searchText: string, options?: FindOptions, callback?: (results?: any) => void): void;

    /**
    * @description Navigates forward one history entry if possible. Equivalent to go(1).
    * @param {any} [object Object]
     */
    export function forward(callback?: (success: boolean) => void): void;

    /**
    * @description Returns Chrome's internal process ID for the guest web page's current process, allowing embedders to know how many guests would be affected by terminating the process. Two guests will share a process only if they belong to the same app and have the same <a href="#partition">storage partition ID</a>. The call is synchronous and returns the embedder's cached notion of the current process ID. The process ID isn't the same as the operating system's process ID.
     */
    export function getProcessId(): void;

    /**
    * @description Returns the user agent string used by the webview for guest page requests.
     */
    export function getUserAgent(): void;

    /**
    * @description Gets the current zoom factor.
    * @param {any} [object Object]
     */
    export function getZoom(callback: (zoomFactor: number) => void): void;

    /**
    * @description Gets the current zoom mode.
    * @param {any} [object Object]
     */
    export function getZoomMode(callback: (ZoomMode: any) => void): void;

    /**
    * @description Navigates to a history entry using a history index relative to the current navigation. If the requested navigation is impossible, this method has no effect.
    * @param {number} relativeIndex Relative history index to which the webview should be navigated. For example, a value of 2 will navigate forward 2 history entries if possible; a value of -3 will navigate backward 3 entries.
    * @param {any} [object Object]
     */
    export function go(relativeIndex: number, callback?: (success: boolean) => void): void;

    /**
    * @description Injects CSS into the guest page.
    * @param {any} details Details of the CSS to insert.
    * @param {any} [object Object]
     */
    export function insertCSS(details: InjectDetails, callback?: () => void): void;

    /**
    * @description Indicates whether or not the webview's user agent string has been overridden by $(ref:webviewTag.setUserAgentOverride).
     */
    export function isUserAgentOverridden(): void;

    /**
    * @description Prints the contents of the webview. This is equivalent to calling scripted print function from the webview itself.
     */
    export function print(): void;

    /**
    * @description Reloads the current top-level page.
     */
    export function reload(): void;

    /**
    * @description <p>Removes content scripts from a webview.</p><p>The following example removes "myRule" which was added before.</p><pre>webview.removeContentScripts(['myRule']);</pre><p>You can remove all the rules by calling:</p><pre>webview.removeContentScripts();</pre>
    * @param {any[]} scriptNameList A list of names of content scripts that will be removed. If the list is empty, all the content scripts added to the webview will be removed.
     */
    export function removeContentScripts(scriptNameList?: any[]): void;

    /**
    * @description Override the user agent string used by the webview for guest page requests.
    * @param {string} userAgent The user agent string to use.
     */
    export function setUserAgentOverride(userAgent: string): void;

    /**
    * @description Changes the zoom factor of the page. The scope and persistence of this change are determined by the webview's current zoom mode (see $(ref:webviewTag.ZoomMode)).
    * @param {number} zoomFactor The new zoom factor.
    * @param {any} [object Object]
     */
    export function setZoom(zoomFactor: number, callback?: () => void): void;

    /**
    * @description Sets the zoom mode of the webview.
    * @param {any} ZoomMode Defines how zooming is handled in the webview.
    * @param {any} [object Object]
     */
    export function setZoomMode(ZoomMode: ZoomMode, callback?: () => void): void;

    /**
    * @description Stops loading the current webview navigation if in progress.
     */
    export function stop(): void;

    /**
    * @description Ends the current find session (clearing all highlighting) and cancels all find requests in progress.
    * @param {string} action Determines what to do with the active match after the find session has ended. clear will clear the highlighting over the active match; keep will keep the active match highlighted; activate will keep the active match highlighted and simulate a user click on that match. The default action is keep.
     */
    export function stopFinding(action?: string): void;

    /**
    * @description Loads a data URL with a specified base URL used for relative links. Optionally, a virtual URL can be provided to be shown to the user instead of the data URL.
    * @param {string} dataUrl The data URL to load.
    * @param {string} baseUrl The base URL that will be used for relative links.
    * @param {string} virtualUrl The URL that will be displayed to the user (in the address bar).
     */
    export function loadDataWithBaseUrl(dataUrl: string, baseUrl: string, virtualUrl?: string): void;

    /**
    * @description Forcibly kills the guest web page's renderer process. This may affect multiple webview tags in the current app if they share the same process, but it will not affect webview tags in other apps.
     */
    export function terminate(): void;

    /**
    * @description Fired when the guest window attempts to close itself.<p>The following example code navigates the webview to about:blank when the guest attempts to close itself.</p><pre>webview.addEventListener('close', function() {
      webview.src = 'about:blank';
    });</pre>
     */

    export function close(event: chrome.events.Event<GenericEvent>): void;

    /**
    * @description Fired when the guest window logs a console message.<p>The following example code forwards all log messages to the embedder's console without regard for log level or other properties.</p><pre>webview.addEventListener('consolemessage', function(e) {
      console.log('Guest page logged a message: ', e.message);
    });</pre>
    * @param {any} [object Object]
     */

    export var consolemessage: chrome.events.Event<IConsolemessage>;

    /**
    * @description Fired when the guest window fires a load event, i.e., when a new document is loaded. This does <em>not</em> include page navigation within the current document or asynchronous resource loads. <p>The following example code modifies the default font size of the guest's body element after the page loads:</p><pre>webview.addEventListener('contentload', function() {
      webview.executeScript({ code: 'document.body.style.fontSize = "42px"' });
    });</pre>
     */

    export var contentload: (event: chrome.events.Event<GenericEvent>) => void;

    /**
    * @description Fired when the guest window attempts to open a modal dialog via window.alert, window.confirm, or window.prompt.<p>Handling this event will block the guest process until each event listener returns or the dialog object becomes unreachable (if preventDefault() was called.)</p><p>The default behavior is to cancel the dialog.</p>
    * @param {any} [object Object]
     */

    export var dialog: chrome.events.Event<IDialog>;

    /**
    * @description Fired when the process rendering the guest web content has exited.<p>The following example code will show a farewell message whenever the guest page crashes:</p><pre>webview.addEventListener('exit', function(e) {
      if (e.reason === 'crash') {
        webview.src = 'data:text/plain,Goodbye, world!';
      }
    });</pre>
    * @param {any} [object Object]
     */

    export var exit: chrome.events.Event<IExit>;

    /**
    * @description Fired when new find results are available for an active find request. This might happen multiple times for a single find request as matches are found.
    * @param {any} [object Object]
     */

    export var findupdate: chrome.events.Event<IFindupdate>;

    /**
    * @description Fired when a top-level load has aborted without committing. An error message will be printed to the console unless the event is default-prevented. <p class="note"><strong>Note:</strong> When a resource load is aborted, a loadabort event will eventually be followed by a loadstop event, even if all committed loads since the last loadstop event (if any) were aborted.</p><p class="note"><strong>Note:</strong> When the load of either an about URL or a JavaScript URL is aborted, loadabort will be fired and then the webview will be navigated to 'about:blank'.</p>
    * @param {any} [object Object]
     */

    export var loadabort: chrome.events.Event<ILoadabort>;

    /**
    * @description Fired when a load has committed. This includes navigation within the current document as well as subframe document-level loads, but does <em>not</em> include asynchronous resource loads.
    * @param {any} [object Object]
     */

    export var loadcommit: chrome.events.Event<chrome.webview.ILoadcommit>;

    /**
    * @description Fired when a top-level load request has redirected to a different URL.
    * @param {any} [object Object]
     */

    export var loadredirect: chrome.events.Event<chrome.webview.ILoadredirect>;

    /**
    * @description Fired when a load has begun.
    * @param {any} [object Object]
     */

    export var loadstart: chrome.events.Event<chrome.webview.ILoadstart>;

    /**
    * @description Fired when all frame-level loads in a guest page (including all its subframes) have completed. This includes navigation within the current document as well as subframe document-level loads, but does <em>not</em> include asynchronous resource loads. This event fires every time the number of document-level loads transitions from one (or more) to zero. For example, if a page that has already finished loading (i.e., loadstop already fired once) creates a new iframe which loads a page, then a second loadstop will fire when the iframe page load completes. This pattern is commonly observed on pages that load ads. <p class="note"><strong>Note:</strong> When a committed load is aborted, a loadstop event will eventually follow a loadabort event, even if all committed loads since the last loadstop event (if any) were aborted.</p>
     */

    export function loadstop(event: chrome.events.Event<GenericEvent>): void;

    /**
    * @description Fired when the guest page attempts to open a new browser window.<p>The following example code will create and navigate a new webview in the embedder for each requested new window:</p><pre>webview.addEventListener('newwindow', function(e) {
      var newWebview = document.createElement('webview');
      document.body.appendChild(newWebview);
      e.window.attach(newWebview);
    });</pre>
    * @param {any} [object Object]
     */

    export var newwindow: chrome.events.Event<INewwindow>;

    /**
    * @description Fired when the guest page needs to request special permission from the embedder.<p>The following example code will grant the guest page access to the webkitGetUserMedia API. Note that an app using this example code must itself specify audioCapture and/or videoCapture manifest permissions:</p><pre>webview.addEventListener('permissionrequest', function(e) {
      if (e.permission === 'media') {
        e.request.allow();
      }
    });</pre>
    * @param {any} [object Object]
     */

    export var permissionrequest: chrome.events.Event<IPermissionrequest>;

    /**
    * @description Fired when the process rendering the guest web content has become responsive again after being unresponsive.<p>The following example code will fade the webview element in or out as it becomes responsive or unresponsive:</p><pre>webview.style.webkitTransition = 'opacity 250ms';
    webview.addEventListener('unresponsive', function() {
      webview.style.opacity = '0.5';
    });
    webview.addEventListener('responsive', function() {
      webview.style.opacity = '1';
    });</pre>
    * @param {any} [object Object]
     */

    export var responsive: chrome.events.Event<chrome.webview.IResponsive>;

    /**
    * @description Fired when the embedded web content has been resized via autosize. Only fires if autosize is enabled.
    * @param {any} [object Object]
     */

    export var sizechanged: chrome.events.Event<chrome.webview.ISizechanged>;

    /**
    * @description Fired when the process rendering the guest web content has become unresponsive. This event will be generated once with a matching responsive event if the guest begins to respond again.
    * @param {any} [object Object]
     */

    export var unresponsive: chrome.events.Event<chrome.webview.IUnresponsive>;

    /**
    * @description Fired when the page's zoom changes.
    * @param {any} [object Object]
     */

    export var zoomchange: chrome.events.Event<chrome.webview.IZoomchange>;
    /**IConsolemessage (Auto generated interface) */
    export interface IConsolemessage {

        /**
        * @description The severity level of the log message. Ranges from -1 to 2. LOG_VERBOSE (console.debug) = -1, LOG_INFO (console.log, console.info) = 0, LOG_WARNING (console.warn) = 1, LOG_ERROR (console.error) = 2.
         */
        level: number

        /**
        * @description The logged message contents.
         */
        message: string

        /**
        * @description The line number of the message source.
         */
        line: number

        /**
        * @description A string identifying the resource which logged the message.
         */
        sourceId: string
    }
    /**IDialog (Auto generated interface) */
    export interface IDialog {

        /**
        * @description The type of modal dialog requested by the guest.
         */
        messageType: 'alert' | 'confirm' | 'prompt'

        /**
        * @description The text the guest attempted to display in the modal dialog.
         */
        messageText: string

        /**
        * @description An interface that can be used to respond to the guest's modal request.
         */
        dialog: DialogController
    }
    /**IExit (Auto generated interface) */
    export interface IExit {

        /**
        * @description Chrome's internal ID of the process that exited.
         */
        processID: number

        /**
        * @description String indicating the reason for the exit.
         */
        reason: 'normal' | 'abnormal' | 'crash' | 'kill'
    }
    /**IFindupdate (Auto generated interface) */
    export interface IFindupdate {

        /**
        * @description The string that is being searched for in the page.
         */
        searchText: string

        /**
        * @description The number of matches found for searchText on the page so far.
         */
        numberOfMatches: number

        /**
        * @description The ordinal number of the current active match, if it has been found. This will be 0 until then.
         */
        activeMatchOrdinal: number

        /**
        * @description Describes a rectangle around the active match, if it has been found, in screen coordinates.
         */
        selectionRect: SelectionRect

        /**
        * @description Indicates whether the find request was canceled.
         */
        canceled: boolean

        /**
        * @description Indicates that all find requests have completed and that no more findupdate events will be fired until more find requests are made.
         */
        finalUpdate: string
    }
    /**ILoadabort (Auto generated interface) */
    export interface ILoadabort {

        /**
        * @description Requested URL.
         */
        url: string

        /**
        * @description Whether the load was top-level or in a subframe.
         */
        isTopLevel: boolean

        /**
        * @description Unique integer ID for the type of abort. Note that this ID is <em>not</em> guaranteed to remain backwards compatible between releases. You must not act based upon this specific integer.
         */
        code: number

        /**
        * @description String indicating what type of abort occurred. This string is <em>not</em> guaranteed to remain backwards compatible between releases. You must not parse and act based upon its content. It is also possible that, in some cases, an error not listed here could be reported.
         */
        reason: 'ERR_ABORTED' | 'ERR_INVALID_URL' | 'ERR_DISALLOWED_URL_SCHEME' | 'ERR_BLOCKED_BY_CLIENT' | 'ERR_ADDRESS_UNREACHABLE' | 'ERR_EMPTY_RESPONSE' | 'ERR_FILE_NOT_FOUND' | 'ERR_UNKNOWN_URL_SCHEME'
    }
    /**ILoadcommit (Auto generated interface) */
    export interface ILoadcommit {

        /**
        * @description The URL that committed.
         */
        url: string

        /**
        * @description Whether the load is top-level or in a subframe.
         */
        isTopLevel: boolean
    }
    /**ILoadredirect (Auto generated interface) */
    export interface ILoadredirect {

        /**
        * @description The requested URL before the redirect.
         */
        oldUrl: string

        /**
        * @description The new URL after the redirect.
         */
        newUrl: string

        /**
        * @description Whether or not the redirect happened at top-level or in a subframe.
         */
        isTopLevel: boolean
    }
    /**ILoadstart (Auto generated interface) */
    export interface ILoadstart {

        /**
        * @description Requested URL.
         */
        url: string

        /**
        * @description Whether the load is top-level or in a subframe.
         */
        isTopLevel: boolean
    }
    /**INewwindow (Auto generated interface) */
    export interface INewwindow {

        /**
        * @description An interface that can be used to either attach the requested target page to an existing webview element or explicitly discard the request.
         */
        window: NewWindow

        /**
        * @description The target URL requested for the new window.
         */
        targetUrl: string

        /**
        * @description The initial width requested for the new window.
         */
        initialWidth: number

        /**
        * @description The initial height requested for the new window.
         */
        initialHeight: number

        /**
        * @description The requested name of the new window.
         */
        name: string

        /**
        * @description The requested disposition of the new window.
         */
        windowOpenDisposition: 'ignore' | 'save_to_disk' | 'current_tab' | 'new_background_tab' | 'new_foreground_tab' | 'new_window' | 'new_popup'
    }
    /**IPermissionrequest (Auto generated interface) */
    export interface IPermissionrequest {

        /**
        * @description The type of permission being requested.
         */
        permission: 'media' | 'geolocation' | 'pointerLock' | 'download' | 'loadplugin' | 'filesystem' | 'fullscreen'

        /**
        * @description An object which holds details of the requested permission. Depending on the type of permission requested, this may be a $(ref:webviewTag.MediaPermissionRequest), $(ref:webviewTag.GeolocationPermissionRequest), $(ref:webviewTag.PointerLockPermissionRequest), $(ref:webviewTag.DownloadPermissionRequest), $(ref:webviewTag.LoadPluginPermissionRequest), or $(ref:webviewTag.FullscreenPermissionRequest).
         */
        request: object
    }
    /**IResponsive (Auto generated interface) */
    export interface IResponsive {

        /**
        * @description Chrome's internal ID of the process that became responsive.
         */
        processID: number
    }
    /**ISizechanged (Auto generated interface) */
    export interface ISizechanged {

        /**
        * @description Old width of embedded web content.
         */
        oldWidth: number

        /**
        * @description Old height of embedded web content.
         */
        oldHeight: number

        /**
        * @description New width of embedded web content.
         */
        newWidth: number

        /**
        * @description New height of embedded web content.
         */
        newHeight: number
    }
    /**IUnresponsive (Auto generated interface) */
    export interface IUnresponsive {

        /**
        * @description Chrome's internal ID of the process that has become unresponsive.
         */
        processID: number
    }
    /**IZoomchange (Auto generated interface) */
    export interface IZoomchange {

        /**
        * @description The page's previous zoom factor.
         */
        oldZoomFactor: number

        /**
        * @description The new zoom factor that the page was zoomed to.
         */
        newZoomFactor: number
    }

}

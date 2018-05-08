// Type definitions for Chrome packaged application development
// Project: http://developer.chrome.com/apps/
// Definitions by: Adam Lay <https://github.com/AdamLay>, MIZUNE Pine <https://github.com/pine613>, MIZUSHIMA Junki <https://github.com/mzsm>, Ingvar Stepanyan <https://github.com/RReverser>, Adam Pyle <https://github.com/pyle>, Nikolai Ommundsen <https://github.com/niikoo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="chrome"/>
/// <reference types="filesystem"/>

////////////////////
// App
////////////////////
declare namespace chrome.app {
    export interface AppDetails extends chrome.runtime.Manifest {
        id: string;
    }

    export function getDetails(): AppDetails;
}

////////////////////
// App Runtime
////////////////////
declare namespace chrome.app.runtime {
    enum LaunchSource {
        "untracked" = "untracked",
        "app_launcher" = "app_launcher",
        "new_tab_page" = "new_tab_page",
        "reload" = "reload",
        "restart" = "restart",
        "load_and_launch" = "load_and_launch",
        "command_line" = "command_line",
        "file_handler" = "file_handler",
        "url_handler" = "url_handler",
        "system_tray" = "system_tray",
        "about_page" = "about_page",
        "keyboard" = "keyboard",
        "extensions_page" = "extensions_page",
        "management_api" = "management_api",
        "ephemeral_app" = "ephemeral_app",
        "background" = "background",
        "kiosk" = "kiosk",
        "chrome_internal" = "chrome_internal",
        "test" = "test",
        "installed_notification" = "installed_notification",
        "context_menu" = "context_menu",
    }

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
// fileSystem
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
// Sockets
////////////////////
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

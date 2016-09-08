// Type definitions for Chrome packaged application development
// Project: http://developer.chrome.com/apps/
// Definitions by: Adam Lay <https://github.com/AdamLay>, MIZUNE Pine <https://github.com/pine613>, MIZUSHIMA Junki <https://github.com/mzsm>, Ingvar Stepanyan <https://github.com/RReverser>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="chrome.d.ts"/>
/// <reference path='../filesystem/filesystem.d.ts'/>

////////////////////
// App
////////////////////
declare namespace chrome.app {
	interface AppDetails extends chrome.runtime.Manifest {
		id: string;
	}

	export function getDetails(): AppDetails;
}

////////////////////
// App Runtime
////////////////////
declare namespace chrome.app.runtime {
    interface LaunchData {
        id?: string;
        items?: LaunchDataItem[];
        url?: string;
        referrerUrl?: string;
        isKioskSession?: boolean;
    }

    interface LaunchDataItem {
        entry: FileEntry;
        type: string;
    }

    interface LaunchedEvent extends chrome.events.Event<(launchData: LaunchData) => void> {}

    interface RestartedEvent extends chrome.events.Event<() => void> {}

    var onLaunched: LaunchedEvent;
    var onRestarted: RestartedEvent;
}

////////////////////
// App Window
////////////////////
declare namespace chrome.app.window {
    interface ContentBounds {
        left?: number;
        top?: number;
        width?: number;
        height?: number;
    }

    interface BoundsSpecification {
        left?: number;
        top?: number;
        width?: number;
        height?: number;
        minWidth?: number;
        minHeight?: number;
        maxWidth?: number;
        maxHeight?: number;
    }

    interface Bounds {
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
    interface FrameOptions {
        type?: string;
        color?: string;
        activeColor?: string;
        inactiveColor?: string;
    }

    interface CreateWindowOptions {
        id?: string;
        innerBounds?: BoundsSpecification;
        outerBounds?: BoundsSpecification;
        minWidth?: number;
        minHeight?: number;
        maxWidth?: number;
        maxHeight?: number;
        frame?: any; // string ("none", "chrome") or FrameOptions
        bounds?: ContentBounds;
        alphaEnabled?: boolean;
        state?: string; // "normal", "fullscreen", "maximized", "minimized"
        hidden?: boolean;
        resizable?: boolean;
        singleton?: boolean;
        alwaysOnTop?: boolean;
        focused?: boolean;
        visibleOnAllWorkspaces?: boolean;
    }

    interface AppWindow {
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

    interface WindowEvent extends chrome.events.Event<() => void> {}

    var onBoundsChanged: WindowEvent;
    var onClosed: WindowEvent;
    var onFullscreened: WindowEvent;
    var onMaximized: WindowEvent;
    var onMinimized: WindowEvent;
    var onRestored: WindowEvent;
}

////////////////////
// fileSystem
////////////////////
declare namespace chrome.fileSystem {

    interface AcceptOptions {
        description?: string;
        mimeTypes?: string[];
        extensions?: string[];
    }

    interface ChooseEntryOptions {
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
    interface MediaFileSystemsOptions {
        interactive?: 'no' | 'yes' | 'if_needed';
    }

    interface MediaFileSystemMetadata {
        name: string;
        galleryId: string;
        deviceId?: string;
        isRemovable: boolean;
        isMediaDevice: boolean;
        isAvailable: boolean;
    }

    interface MetadataOptions {
        metadataType: 'all' | 'mimeTypeAndTags' | 'mimeTypeOnly';
    }

    interface RawTag {
        type: string;
        tags: { [name: string]: string; };
    }

    interface Metadata {
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

    interface GalleryWatchResult {
        galleryId: string;
        success: boolean;
    }

    interface GalleryChangedEventArgs {
        type: 'contents_changed' | 'watch_dropped';
        galleryId: string;
    }

    interface ScanProgressEventArgs {
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

    var onGalleryChanged: chrome.events.Event<(args: GalleryChangedEventArgs) => void>;
    var onScanProgress: chrome.events.Event<(args: ScanProgressEventArgs) => void>;
}

////////////////////
// Sockets
////////////////////
declare namespace chrome.sockets.tcp {
    interface CreateInfo {
        socketId: number;
    }

    interface SendInfo {
        resultCode: number;
        bytesSent?: number;
    }

    interface ReceiveEventArgs {
        socketId: number;
        data: ArrayBuffer;
    }

    interface ReceiveErrorEventArgs {
        socketId: number;
        resultCode: number;
    }

    interface SocketProperties {
        persistent?: boolean;
        name?: string;
        bufferSize?: number;
    }

    interface SocketInfo {
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

    var onReceive: chrome.events.Event<(args: ReceiveEventArgs) => void>;
    var onReceiveError: chrome.events.Event<(args: ReceiveErrorEventArgs) => void>;
}

declare namespace chrome.sockets.udp {
    interface CreateInfo {
        socketId: number;
    }

    interface SendInfo {
        resultCode: number;
        bytesSent?: number;
    }

    interface ReceiveEventArgs {
        socketId: number;
        data: ArrayBuffer;
        remoteAddress: string;
        remotePort: number;
    }

    interface ReceiveErrorEventArgs {
        socketId: number;
        resultCode: number;
    }

    interface SocketProperties {
        persistent?: boolean;
        name?: string;
        bufferSize?: number;
    }

    interface SocketInfo {
        socketId: number;
        persistent: boolean;
        name?: string;
        bufferSize?: number;
        paused: boolean;
        localAddress?: string;
        localPort?: number;
    }

    export function create(callback: (createInfo: CreateInfo) => void): void;
    export function create(properties: SocketProperties,
        callback: (createInfo: CreateInfo) => void): void;

    export function update(socketId: number, properties: SocketProperties, callback?: () => void): void;
    export function setPaused(socketId: number, paused: boolean, callback?: () => void): void;
    export function bind(socketId: number, address: string, port: number, callback: (result: number) => void): void;
    export function send(socketId: number, data: ArrayBuffer, address: string, port: number, callback: (sendInfo: SendInfo) => void): void;
    export function close(socketId: number, callback?: () => void): void;
    export function getInfo(socketId: number, callback: (socketInfo: SocketInfo) => void): void;
    export function getSockets(callback: (socketInfos: SocketInfo[]) => void): void;
    export function joinGroup(socketId: number, address: string, callback: (result: number) => void): void;
    export function leaveGroup(socketId: number, address: string, callback: (result: number) => void): void;
    export function setMulticastTimeToLive(socketId: number, ttl: number, callback: (result: number) => void): void;
    export function setMulticastLoopbackMode(socketId: number, enabled: boolean, callback: (result: number) => void): void;
    export function getJoinedGroups(socketId: number, callback: (groups: string[]) => void): void;

    var onReceive: chrome.events.Event<(args: ReceiveEventArgs) => void>;
    var onReceiveError: chrome.events.Event<(args: ReceiveErrorEventArgs) => void>;
}

declare namespace chrome.sockets.tcpServer {
    interface CreateInfo {
        socketId: number;
    }

    interface AcceptEventArgs {
        socketId: number;
        clientSocketId: number;
    }

    interface AcceptErrorEventArgs {
        socketId: number;
        resultCode: number;
    }

    interface SocketProperties {
        persistent?: boolean;
        name?: string;
    }

    interface SocketInfo {
        socketId: number;
        persistent: boolean;
        name?: string;
        paused: boolean;
        localAddress?: string;
        localPort?: number;
    }

    export function create(callback: (createInfo: CreateInfo) => void): void;
    export function create(properties: SocketProperties, callback: (createInfo: CreateInfo) => void): void;

    export function update(socketId: number, properties: SocketProperties, callback?: () => void): void;
    export function setPaused(socketId: number, paused: boolean, callback?: () => void): void;

    export function listen(socketId: number, address: string,
        port: number, backlog: number, callback: (result: number) => void): void;
    export function listen(socketId: number, address: string,
        port: number, callback: (result: number) => void): void;

    export function disconnect(socketId: number, callback?: () => void): void;
    export function close(socketId: number, callback?: () => void): void;
    export function getInfo(socketId: number, callback: (socketInfos: SocketInfo[]) => void): void;

    var onAccept: chrome.events.Event<(args: AcceptEventArgs) => void>;
    var onAcceptError: chrome.events.Event<(args: AcceptErrorEventArgs) => void>;
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
    interface Bounds {
        /**  The x-coordinate of the upper-left corner. */
        left: number;
        /**  The y-coordinate of the upper-left corner. */
        top: number;
        /** The width of the display in pixels. */
        width: number;
        /** The height of the display in pixels. */
        height: number;
    }

    interface Insets {
        /** The x-axis distance from the left bound. */
        left: number;
        /** The y-axis distance from the top bound. */
        top: number;
        /** The x-axis distance from the right bound. */
        right: number;
        /** The y-axis distance from the bottom bound. */
        bottom: number;
    }

    interface DisplayInfo {
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
    interface DisplayProps {
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

    interface DisplayChangedEvent extends chrome.events.Event<() => void> { }

    /** Queries basic CPU information of the system. */
    export function getInfo(callback: (info: DisplayInfo[]) => void): void;

    /** Updates the properties for the display specified by |id|, according to the information provided in |info|. On failure, runtime.lastError will be set. */
    export function setDisplayProperties(id: string, info: DisplayInfo, callback?: () => void): void;

    export var onDisplayChanged: DisplayChangedEvent;
}

////////////////////
// System - Network
////////////////////
declare namespace chrome.system.network {
    interface NetworkInterface {
        name: string;
        address: string;
        prefixLength: number;
    }

    export function getNetworkInterfaces(callback: (networkInterfaces: NetworkInterface[]) => void): void;
}

declare namespace chrome.runtime {
	interface Manifest {
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

	interface Device {
		device: number,
		vendorId: number,
		productId: number,
		productName: string,
		manufacturerName: string,
		serialNumber: string
	}

	interface ConnectionHandle {
		handle: number,
		vendorId: number,
		productId: number
	}

	interface EndpointDescriptor {
		address: number,
		type: 'control' | 'interrupt' | 'isochronous' | 'bulk',
		direction: Direction,
		maximumPacketSize: number,
		synchronization?: 'asynchronous' | 'adaptive' | 'synchronous',
		usage?: 'data' | 'feedback' | 'explicitFeedback',
		pollingInterval?: number,
		extra_data: ArrayBuffer
	}

	interface InterfaceDescriptor {
		interfaceNumber: number,
		alternateSetting: number,
		interfaceClass: number,
		interfaceSubclass: number,
		interfaceProtocol: number,
		description?: string,
		endpoints: EndpointDescriptor[],
		extra_data: ArrayBuffer
	}

	interface ConfigDescriptor {
		active: boolean,
		configurationValue: number,
		description?: string,
		selfPowered: boolean,
		remoteWakeup: boolean,
		maxPower: number,
		interfaces: InterfaceDescriptor[],
		extra_data: ArrayBuffer
	}

	interface GenericTransferInfo {
		direction: Direction,
		endpoint: number,
		length?: number,
		data?: ArrayBuffer,
		timeout?: number
	}

	interface TransferResultInfo {
		resultCode: number,
		data?: ArrayBuffer
	}

	interface DeviceFilter {
		vendorId?: number,
		productId?: number,
		interfaceClass?: number,
		interfaceSubclass?: number,
		interfaceProtocol?: number
	}

	interface TransferInfo {
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

	interface DeviceEvent extends chrome.events.Event<(device: Device) => void> {}

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

// Type definitions for Chrome packaged application development
// Project: http://developer.chrome.com/apps/
// Definitions by: Adam Lay <https://github.com/AdamLay>, MIZUNE Pine <https://github.com/pine613>, MIZUSHIMA Junki <https://github.com/mzsm>, João Correia <https://github.com/joaope>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../filesystem/filesystem.d.ts"/>
/// <reference path="chrome.d.ts"/>

/**
 * Use the chrome.app.runtime API to manage the app lifecycle. The app runtime manages app installation, controls
 * the event page, and can shut down the app at anytime.
 */
declare module chrome.app.runtime {

    interface Request {
        embedderId: string;
        data?: any;
        allow: (url: string) => void;
        deny: Function;
    }

    interface FileItem {
        entry: FileEntry;
        type: string;
    }

    interface LaunchData {
        id?: string;
        items: FileItem[];
        url?: string;
        referrerUrl?: string;
        isKioskSession?: boolean;
        source?: string;
    }

    interface EmbededRequestedEvent extends events.Event {
        addListener(callback: (request: Request) => void): void;
    }

    interface LaunchedEvent extends events.Event {
        addListener(callback: (launchData?: LaunchData) => void): void;
    }

    interface RestartedEvent extends events.Event {
        addListener(callback: Function): void;
    }

    export const onEmbedRequested: EmbededRequestedEvent;
    export const onLaunched: LaunchedEvent;
    export const onRestarted: RestartedEvent;
}

/**
 * Use the chrome.app.window API to create windows. Windows have an optional frame with title bar and size controls.
 * They are not associated with any Chrome browser windows. See the
 * {@link https://github.com/GoogleChrome/chrome-app-samples/tree/master/samples/window-state|Window State Sample} for
 * a demonstration of these options.
 */
declare module chrome.app.window {

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
        maxWidth?: number;
        minHeight?: number;
        maxHeight?: number;
    }

    interface Bounds {
        left: number;
        top: number;
        width: number;
        height: number;
        minWidth?: number;
        maxWidth?: number;
        minHeight?: number;
        maxHeight?: number;
        position: (left: number, top: number) => void;
        setSize: (width: number, height: number) => void;
        setMinimumSize: (minWidth: number, minHeight: number) => void;
        setMaximumSize: (maxWidth: number, maxHeight: number) => void;
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
        /** @deprecated since Chrome 36. Use innerBounds or outerBounds. */
        minWidth?: number;
        /** @deprecated since Chrome 36. Use innerBounds or outerBounds. */
        maxWidth?: number;
        /** @deprecated since Chrome 36. Use innerBounds or outerBounds. */
        minHeight?: number;
        /** @deprecated since Chrome 36. Use innerBounds or outerBounds. */
        maxHeight?: number;
        frame?: string | FrameOptions;
        /** @deprecated since Chrome 36. Use innerBounds or outerBounds. */
        bounds?: ContentBounds;
        state?: string;
        hidden?: boolean;
        resizable?: boolean;
        /** @deprecated since Chrome 34. Multiple windows with the same id is no longer supported. */
        singleton?: boolean;
        alwaysOnTop?: boolean;
        focused?: boolean;
        visibleOnAllWorkspaces?: boolean;
    }

    interface AppWindow {
        focus: Function;
        fullscreen: Function;
        isFullscreen: () => boolean;
        minimize: Function;
        isMinimized: () => boolean;
        maximize: Function;
        isMaximized: () => boolean;
        restore: Function;
        /** @deprecated since Chrome 43. Use outerBounds. */
        moveTo: (left: number, top: number) => void;
        /** @deprecated since Chrome 43. Use outerBounds. */
        resizeTo: (width: number, height: number) => void;
        drawAttention: Function;
        close: Function;
        show: (focused?: boolean) => void;
        hide: Function;
        /** @deprecated  since Chrome 36. Use innerBounds or outerBounds. */
        getBounds: () => ContentBounds;
        /** @deprecated  since Chrome 36. Use innerBounds or outerBounds. */
        setBounds: (bounds: ContentBounds) => void;
        isAlwaysOnTop: () => boolean;
        setAlwaysOnTop: (alwaysOnTop: boolean) => void;
        setVisibleOnAllWorkspaces: (alwaysVisible: boolean) => void;
        setInterceptAllKeys: (wantAllKeys: boolean) => void;
        contentWindow: Window;
        id: string;
        innerBounds: Bounds;
        outerBounds: Bounds;

        onBoundsChanged: BoundsChangedEvent;
        onClosed: ClosedEvent;
        onFullscreened: FullscreenedEvent;
        onMaximized: MaximizedEvent;
        onMinimized: MinimizedEvent;
        onRestored: RestoredEvent;
    }

    export function create(url: string, options: CreateWindowOptions, callback: (createdWindow: AppWindow) => void): void;
    export function current(): AppWindow;
    export function getAll(): AppWindow[];
    export function get(id: string): AppWindow;
    export function canSetVisibleOnAllWorkspaces(): boolean;

    interface BoundsChangedEvent extends events.Event {
        addListener(callback: Function): void;
    }

    interface ClosedEvent extends events.Event {
        addListener(callback: Function): void;
    }

    interface FullscreenedEvent extends events.Event {
        addListener(callback: Function): void;
    }

    interface MaximizedEvent extends events.Event {
        addListener(callback: Function): void;
    }

    interface MinimizedEvent extends events.Event {
        addListener(callback: Function): void;
    }

    interface RestoredEvent extends events.Event {
        addListener(callback: Function): void;
    }
}

/**
 * Use the chrome.bluetooth API to connect to a Bluetooth device. All functions report failures via chrome.runtime.lastError.
 */
declare module chrome.bluetooth {

    interface AdapterState {
        address: string;
        name: string;
        powered: boolean;
        available: boolean;
        discovering: boolean;
    }

    interface Device {
        address: string;
        name?: string;
        deviceClass?: number;
        vendorIdSource?: string;
        vendorId?: number;
        productId?: number;
        deviceId?: number;
        type?: string
        paired?: boolean;
        connected?: boolean;
        uuids?: string[];
        inquiryRssi?: number;
        inquiryTxPower?: number;
    }

    interface AdapterStateChangedEvent extends events.Event {
        addListener(callback: (state: AdapterState) => void): void;
    }

    interface DeviceAddedEvent extends events.Event {
        addListener(callback: (device: Device) => void): void;
    }

    interface DeviceChangedEvent extends events.Event {
        addListener(callback: (device: Device) => void): void;
    }

    interface DeviceRemovedEvent extends events.Event {
        addListener(callback: (device: Device) => void): void;
    }

    export function getAdapterState(callback: (adapterInfo: AdapterState) => void): void;
    export function getDevice(deviceAddress: string, callback: (deviceInfo: Device) => void): void;
    export function getDevices(callback: (deviceInfos: Device[]) => void): void;
    export function startDiscovery(callback: Function): void;
    export function stopDiscovery(callback: Function): void;

    export const onAdapterStateChanged: AdapterStateChangedEvent;
    export const onDeviceAdded: DeviceAddedEvent;
    export const onDeviceChanged: DeviceChangedEvent;
    export const onDeviceRemoved: DeviceRemovedEvent;
}

/**
 * The chrome.bluetoothLowEnergy API is used to communicate with Bluetooth Smart (Low Energy) devices using the
 * {@link https://developer.bluetooth.org/TechnologyOverview/Pages/GATT.aspx|Generic Attribute Profile (GATT)}.
 */
declare module chrome.bluetoothLowEnergy {

    interface Service {
        uuid: string;
        isPrimary: boolean;
        instanceId?: string;
        deviceAddress?: string;
    }

    interface Characteristic {
        uuid: string;
        service: Service;
        properties: string[];
        instanceId?: string;
        value?: ArrayBuffer;
    }

    interface Descriptor {
        uuid: string;
        characteristic: Characteristic;
        instanceId?: string;
        value?: ArrayBuffer;
    }

    interface ConnectOptions {
        persistent: boolean;
    }

    interface NotificationSessionProperty {
        persistent: boolean;
    }

    interface ServiceAddedEvent extends events.Event {
        addListener(callback: (service: Service) => void): void;
    }

    interface ServiceChangedEvent extends events.Event {
        addListener(callback: (service: Service) => void): void;
    }

    interface ServiceRemovedEvent extends events.Event {
        addListener(callback: (service: Service) => void): void;
    }

    interface CharacteristicValueChangedEvent extends events.Event {
        addListener(callback: (characteristic: Characteristic) => void): void;
    }

    interface DescriptorValueChangedEvent extends events.Event {
        addListener(callback: (descriptor: Descriptor) => void): void;
    }

    export function connect(deviceAddress: string, properties: ConnectOptions, callback: Function): void;
    export function connect(deviceAddress: string, callback: Function): void;
    export function disconnect(deviceAddress: string, callback?: Function): void;
    export function getService(serviceId: string, callback: (result: Service) => void): void;
    export function getServices(deviceAddress: string, callback: (result: Service[]) => void): void;
    export function getCharacteristic(characteristicId: string, callback: (result: Characteristic) => void): void;
    export function getCharacteristics(serviceId: string, callback: (result: Characteristic[]) => void): void;
    export function getIncludedServices(serviceId: string, callback: (result: Service[]) => void): void;
    export function getDescriptor(descriptorId: string, callback: (result: Descriptor) => void): void;
    export function getDescriptors(characteristicId: string, callback: (result: Descriptor[]) => void): void;
    export function readCharacteristicValue(characteristicId: string, callback: (result: Characteristic) => void): void;
    export function writeCharacteristicValue(characteristicId: string, value: ArrayBuffer, callback: Function): void;
    export function startCharacteristicNotifications(characteristicId: string, properties: NotificationSessionProperty, callback: Function): void;
    export function startCharacteristicNotifications(characteristicId: string, callback: Function): void;
    export function stopCharacteristicNotifications(characteristicId: string, callback?: Function): void;
    export function readDescriptorValue(descriptorId: string, callback: (result: Descriptor) => void): void;
    export function writeDescriptorValue(descriptorId: string, value: ArrayBuffer, callback: Function): void;

    export const onServiceAdded: ServiceAddedEvent;
    export const onServiceChanged: ServiceChangedEvent;
    export const onServiceRemoved: ServiceRemovedEvent;
    export const onCharacteristicValueChanged: CharacteristicValueChangedEvent;
    export const onDescriptorValueChanged: DescriptorValueChangedEvent;
}

/**
 * Use the chrome.bluetoothSocket API to send and receive data to Bluetooth devices using RFCOMM and L2CAP connections.
 */
declare module chrome.bluetoothSocket {

    interface SocketProperties {
        persistent?: boolean;
        name?: string;
        bufferSize?: number;
    }

    interface ListenOptions {
        channel?: number;
        psm?: number;
        backlog?: number;
    }

    interface CreateInfo {
        socketId: number;
    }

    interface SocketInfo {
        socketId: number;
        persistent: boolean;
        name?: string;
        bufferSize?: number;
        paused: boolean;
        connected: boolean;
        address?: string;
        uuid?: string;
    }

    interface AcceptEvent extends events.Event {
        addListener(callback: (info: AcceptInfo) => void): void;
    }

    interface AcceptInfo {
        socketId: number;
        clientSocketId: number;
    }

    interface AcceptErrorEvent extends events.Event {
        addListener(callback: (info: AcceptErrorInfo) => void): void;
    }

    interface AcceptErrorInfo {
        socketId: number;
        errorMessage: string;
        error: string;
    }

    interface ReceivedEvent extends events.Event {
        addListener(callback: (info: ReceivedInfo) => void): void;
    }

    interface ReceivedInfo {
        socketId: number;
        data: ArrayBuffer;
    }

    interface ReceiveErrorEvent extends events.Event {
        addListener(callback: (info: ReceiveErrorInfo) => void): void;
    }

    interface ReceiveErrorInfo {
        socketId: number;
        errorMessage: string;
        error: string;
    }

    export function create(properties: SocketProperties, callback: (createInfo: CreateInfo) => void): void;
    export function create(callback: (createInfo: CreateInfo) => void): void;
    export function update(socketId: number, properties: SocketProperties, callback?: Function): void;
    export function setPaused(socketId: number, paused: boolean, callback?: Function): void;
    export function listenUsingRfcomm(socketId: number, uuid: string, options: ListenOptions, callback: Function): void;
    export function listenUsingRfcomm(socketId: number, uuid: string, callback: Function): void;
    export function listenUsingL2cap(socketId: number, uuid: string, options: ListenOptions, callback: Function): void;
    export function listenUsingL2cap(socketId: number, uuid: string, callback: Function): void;
    export function connect(socketId: number, address: string, uuid: string, callback: Function): void;
    export function disconnect(socketId: number, callback?: Function): void;
    export function close(socketId: number, callback?: Function): void;
    export function send(socketId: number, data: ArrayBuffer, callback?: (bytesSent: number) => void): void;
    export function getInfo(socketId: number, callback: (socketInfo: SocketInfo) => void): void;
    export function getSockets(callback: (sockets: SocketInfo[]) => void): void;

    export const onAccept: AcceptEvent;
    export const onAcceptError: AcceptErrorEvent;
    export const onReceive: ReceivedEvent;
    export const onReceiveError: ReceiveErrorEvent;
}

/**
 * Use the chrome.browser API to interact with the Chrome browser associated with the current application and Chrome profile.
 */
declare module chrome.browser {

    interface TabOpenOptions {
        url: string;
    }

    export function openTab(options: TabOpenOptions, callback?: Function): void;
}

/**
 * Use the chrome.fileSystem API to create, read, navigate, and write to the user's local file system. With this API, Chrome Apps
 * can read and write to a user-selected location. For example, a text editor app can use the API to read and write local documents.
 * All failures are notified via chrome.runtime.lastError.
 */
declare module chrome.fileSystem {

    interface Volume {
        volumeId: string;
        writable: boolean;
    }

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

    interface RequestFileSystemOptions {
        volumeId: string;
        writable?: boolean;
    }

    interface VolumeListChangedEvent extends events.Event {
        addListener(callback: (event: VolumeListResult) => void): void;
    }

    interface VolumeListResult {
        volumes: Volume[];
    }

    export function getDisplayPath(entry: Entry, callback: (displayPath: string) => void): void;
    export function getWritableEntry(entry: Entry, callback: (entry: Entry) => void): void;
    export function isWritableEntry(entry: Entry, callback: (isWritable: boolean) => void): void;
    export function chooseEntry(options: ChooseEntryOptions, callback: (entry: Entry, fileEntries: FileEntry[]) => void): void;
    export function chooseEntry(callback: (entry: Entry, fileEntries: FileEntry[]) => void): void;
    export function restoreEntry(id: string, callback: (entry: Entry) => void): void;
    export function isRestorable(id: string, callback: (isRestorable: boolean) => void): void;
    export function retainEntry(entry: Entry): string;
    export function requestFileSystem(options: RequestFileSystemOptions, callback: (fileSystem: FileSystem) => void): void;
    export function getVolumeList(callback: (volumes: Volume[]) => void): void;

    export const onVolumeListChanged: VolumeListChangedEvent;
}

/**
 * Use the chrome.hid API to interact with connected HID devices. This API provides access to HID operations from within
 * the context of an app. Using this API, apps can function as drivers for hardware devices. Errors generated by this API
 * are reported by setting runtime.lastError and executing the function's regular callback. The callback's regular parameters
 * will be undefined in this case.
 */
declare module chrome.hid {

    interface HidDeviceInfo {
        deviceId: number;
        vendorId: number;
        productId: number;
        productName: string;
        serialNumber: string;
        collections: ReportDescriptorCollection[];
        maxInputReportSize: number;
        maxOutputReportSize: number;
        maxFeatureReportSize: number;
        reportDescriptor: ArrayBuffer;
    }

    interface ReportDescriptorCollection {
        usagePage: number;
        usage: number;
        reportIds: number[];
    }

    interface DeviceFilter {
        vendorId?: number;
        productId?: number;
        usagePage?: number;
        usage?: number;
    }

    interface GetDevicesOptions {
        /** @deprecated since Chrome 39. Equivalent to setting DeviceFilter.vendorId. */
        vendorId?: number;
        /** @deprecated since Chrome 39. Equivalent to setting DeviceFilter.productId. */
        productId?: number;
        filters?: DeviceFilter[];
    }

    interface GetUserSelectedDevicesOptions {
        multiple?: boolean;
        filters?: DeviceFilter[];
    }

    interface DeviceAddedEvent extends events.Event {
        addListener(callback: (device: HidDeviceInfo) => void): void;
    }

    interface DeviceRemovedEvent extends events.Event {
        addListener(callback: (deviceId: number) => void): void;
    }

    export function getDevices(options: GetDevicesOptions, callback: (devices: HidDeviceInfo[]) => void): void;
    export function getUserSelectedDevices(options: GetUserSelectedDevicesOptions, callback: (devices: HidDeviceInfo[]) => void): void;
    export function getUserSelectedDevices(callback: (devices: HidDeviceInfo[]) => void): void;
    export function connect(deviceId: number, callback: (connectionId: number) => void): void;
    export function disconnect(connectionId: number, callback: Function): void;
    export function receive(connectionId: number, callback: (reportId: number, data: ArrayBuffer) => void): void;
    export function send(connectionId: number, reportId: number, data: ArrayBuffer, callback: Function): void;
    export function receiveFeatureReport(connectionId: number, reportId: number, callback: (data: ArrayBuffer) => void): void;
    export function sendFeatureReport(connectionId: number, reportId: number, data: ArrayBuffer, callback: Function): void;

    export const onDeviceAdded: DeviceAddedEvent;
    export const onDeviceRemoved: DeviceRemovedEvent;
}

/**
 * Use the chrome.mediaGalleries API to access media files (audio, images, video) from the user's local disks (with the user's consent).
 */
declare module chrome.mediaGalleries {

    interface GetMediaFileSystemsDetails {
        interactive?: boolean;
    }

    interface MediaFileSystemMetadata {
        name: string;
        galleryId: string;
        deviceId?: string;
        isRemovable: boolean;
        isMediaDevice: boolean;
        isAvailable: boolean;
    }

    interface GetMetadataOptions {
        metadataType?: string;
    }

    interface RawTag {
        type: string;
        tags: Object;
    }

    interface Metadata {
        mimeType: string;
        height?: number;
        width?: number;
        xResolution?: number;
        yResolution?: number;
        duration?: number;
        rotation?: number;
        cameraMake?: string;
        cameraModel?: string;
        exposureTimeSeconds?: number;
        flashFired?: boolean;
        fNumber?: number;
        focalLengthMm?: number;
        isoEquivalent?: number;
        album?: string;
        artist?: string;
        comment?: string;
        copyright?: string;
        disc?: number;
        genre?: string;
        language?: string;
        title?: string;
        track?: string;
        rawTags: RawTag[];
        attachedImages: Blob[];
    }

    interface GalleryWatch {
        galleryId: string;
        success: boolean;
    }

    interface GalleryDetails {
        type: string;
        galleryId: string;
    }

    interface ScanProgressDetails {
        type: string;
        galleryCount?: number;
        audioCount?: number;
        imageCount?: number;
        videoCount?: number;
    }

    interface GalleryChangedEvent extends events.Event {
        addListener(callback: (details: GalleryDetails) => void): void;
    }

    interface ScanProgressEvent extends events.Event {
        addListener(callback: (details: ScanProgressDetails) => void): void;
    }

    export function getMediaFileSystems(details: GetMediaFileSystemsDetails, callback: (mediaFileSystems: FileSystem[]) => void): void;
    export function getMediaFileSystems(callback: (mediaFileSystems: FileSystem[]) => void): void;
    export function addUserSelectedFolder(callback: (mediaFileSystems: FileSystem[], selectedFileSystemName: string) => void): void;
    export function dropPermissionForMediaFileSystem(galleryId: string, callback?: Function): void;
    export function startMediaScan(): void;
    export function cancelMediaScan(): void;
    export function addScanResults(callback: (mediaFileSystems: FileSystem[]) => void): void;
    export function getMediaFileSystemMetadata(mediaFileSystem: FileSystem): MediaFileSystemMetadata;
    export function getAllMediaFileSystemMetadata(callback: (metadata: MediaFileSystemMetadata[]) => void): void;
    export function getMetadata(mediaFile: Blob, options: GetMetadataOptions, callback: (metadata: Metadata) => void): void;
    export function getMetadata(mediaFile: Blob, callback: (metadata: Metadata) => void): void;
    export function addGalleryWatch(galleryId: string, callback: (result: GalleryWatch) => void): void;
    export function removeGalleryWatch(galleryId: string): void;
    export function getAllGalleryWatch(callback: (galleryIds: string[]) => void): void;
    export function removeAllGalleryWatch(): void;

    export const onGalleryChanged: GalleryChangedEvent;
    export const onScanProgress: ScanProgressEvent;
}

/**
 * Use the chrome.mdns API to discover services over mDNS. This comprises a subset of the features of the NSD spec: http://www.w3.org/TR/discovery-api/
 */
declare module chrome.mdns {

    interface Service {
        serviceName: string;
        serviceHostPort: string;
        ipAddress: string;
        serviceData: string[];
    }

    interface ServiceListEvent extends events.Event {
        addListener(callback: (services: Service[]) => void): void;
    }

    export const MAX_SERVICE_INSTANCES_PER_EVENT: number;
    export function forceDiscovery(callback: Function): void;

    export const onServiceList: ServiceListEvent;
}

/**
 * Use the chrome.serial API to read from and write to a device connected to a serial port.
 */
declare module chrome.serial {

    interface ConnectionOptions {
        persistent?: boolean;
        name?: string;
        bufferSize?: number;
        bitrate?: number;
        dataBits?: string;
        parityBit?: string;
        stopBits?: string;
        ctsFlowControl?: boolean;
        receiveTimeout?: number;
        sendTimeout?: number;
    }

    interface ConnectionInfo {
        connectionId: number;
        paused: boolean;
        persistent: boolean;
        name: string;
        bufferSize: number;
        receivedTimeout: number;
        sendTimeout: number;
        bitrate?: number;
        dataBits?: string;
        parityBit?: string;
        stopBits?: string;
        ctsFlowControl?: boolean;
    }

    interface Port {
        path: string;
        vendorId?: number;
        productId?: number;
        displayName?: string;
    }

    interface SendInfo {
        bytesSent: number;
        error?: string;
    }

    interface ControlSignal {
        dcd: boolean;
        cts: boolean;
        ri: boolean;
        dsr: boolean;
    }

    interface SignalChanges {
        dtr?: boolean;
        rts?: boolean;
    }

    interface ReceiveInfo {
        connectionId: number;
        data: ArrayBuffer;
    }

    interface ReceiveErrorInfo {
        connectionId: number;
        error: string;
    }

    interface ReceiveEvent extends events.Event {
        addListener(callback: (info: ReceiveInfo) => void): void;
    }

    interface ReceiveErrorEvent extends events.Event {
        addListener(callback: (info: ReceiveErrorInfo) => void): void;
    }

    export function getDevices(callback: (ports: Port[]) => void): void;
    export function connect(path: string, options: ConnectionOptions, callback: (connectionInfo: ConnectionInfo) => void): void;
    export function update(connectionId: number, options: ConnectionOptions, callback: (result: boolean) => void): void;
    export function disconnect(connectionId: number, callback: (result: boolean) => void): void;
    export function setPaused(connectionId: number, paused: boolean, callback: Function): void;
    export function getInfo(connectionId: number, callback: (connectionInfo: ConnectionInfo) => void): void;
    export function getConnections(callback: (connectionInfos: ConnectionInfo[]) => void): void;
    export function send(connectionId: number, data: ArrayBuffer, callback: (sendInfo: SendInfo) => void): void;
    export function flush(connectionId: number, callback: (result: boolean) => void): void;
    export function getControlSignals(connectionId: number, callback: (signals: ControlSignal[]) => void): void;
    export function setControlSignals(connectionId: number, signals: SignalChanges, callback: (result: boolean) => void): void;
    export function setBreak(connectionId: number, callback: (result: boolean) => void): void;
    export function clearBreak(connectionId: number, callback: (result: boolean) => void): void;

    export const onReceive: ReceiveEvent;
    export const onReceiveError: ReceiveErrorEvent;
}

/**
 * Use the chrome.socket API to send and receive data over the network using TCP and UDP connections.
 *
 * @deprecated with Chrome 33, this API is deprecated in favor of the sockets.udp, sockets.tcp and sockets.tcpServer APIs.
 */
declare module chrome.socket {

    interface WriteInfo {
        bytesWritten: number;
    }

    interface CreateInfo {
        socketId: number;
    }

    interface ReadInfo {
        resultCode: number;
        data: ArrayBuffer;
    }

    interface RecvFromInfo {
        resultCode: number;
        data: ArrayBuffer;
        address: string;
        port: number;
    }

    interface AcceptInfo {
        resultCode: number;
        socketId?: number;
    }

    interface SocketInfo {
        socketType: string;
        connected: boolean;
        peerAddress?: string;
        peerPort?: number;
        localAddress?: string;
        localPort?: number;
    }

    interface LocalAdapterInfo {
        name: string;
        address: string;
        prefixLength: number;
    }

    interface SecureOptions {
        tlsVersion?: TlsVersion;
    }

    interface TlsVersion {
        min?: string;
        max?: string;
    }

    export function create(type: string, options: Object, callback: (createInfo: CreateInfo) => void): void;
    export function create(type: string, callback: (createInfo: CreateInfo) => void): void;
    export function destroy(socketId: number): void;
    export function connect(socketId: number, hostname: string, port: number, callback: (result: number) => void): void;
    export function bind(socketId: number, address: string, port: number, callback: (result: number) => void): void;
    export function disconnect(socketId: number): void;
    export function read(socketId: number, bufferSize: number, callback: (readInfo: ReadInfo) => void): void;
    export function read(socketId: number, callback: (readInfo: ReadInfo) => void): void;
    export function write(socketId: number, data: ArrayBuffer, callback: (writeInfo: WriteInfo) => void): void;
    export function recvFrom(socketId: number, bufferSize: number, callback: (recvFromInfo: RecvFromInfo) => void): void;
    export function recvFrom(socketId: number, callback: (recvFromInfo: RecvFromInfo) => void): void;
    export function sendTo(socketId: number, data: ArrayBuffer, address: string, port: number, callback: (writeInfo: WriteInfo) => void): void;
    export function listen(socketId: number, address: string, port: number, backlog: number, callback: (result: number) => void): void;
    export function listen(socketId: number, address: string, port: number, callback: (result: number) => void): void;
    export function accept(socketId: number, callback: (acceptInfo: AcceptInfo) => void): void;
    export function setKeepAlive(socketId: number, enable: boolean, delay: number, callback: (result: boolean) => void): void;
    export function setKeepAlive(socketId: number, enable: boolean, callback: (result: boolean) => void): void;
    export function setNoDelay(socketId: number, noDelay: boolean, callback: (result: boolean) => void): void;
    export function getInfo(socketId: number, callback: (result: SocketInfo) => void): void;
    export function getNetworkList(callback: (result: LocalAdapterInfo[]) => void): void;
    export function joinGroup(socketId: number, address: string, callback: (result: number) => void): void;
    export function leaveGroup(socketId: number, address: string, callback: (result: number) => void): void;
    export function setMulticastTimeToLive(socketId: number, ttl: number, callback: (result: number) => void): void;
    export function setMulticastLoopbackMode(socketId: number, enabled: boolean, callback: (result: number) => void): void;
    export function getJoinedGroups(socketId: number, callback: (groups: string[]) => void): void;
    export function secure(socketId: number, options: SecureOptions, callback: (result: number) => void): void;
    export function secure(socketId: number, callback: (result: number) => void): void;
}

/**
 * Use the chrome.sockets.tcp API to send and receive data over the network using TCP connections. This API supersedes
 * the TCP functionality previously found in the chrome.socket API.
 */
declare module chrome.sockets.tcp {

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

    interface CreateInfo {
        socketId: number;
    }

    interface TlsOptions {
        min?: string;
        max?: string;
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

    interface ReceiveEvent extends events.Event {
        addListener(callback: (info: ReceiveEventArgs) => void): void;
    }

    interface ReceiveErrorEvent extends events.Event {
        addListener(callback: (info: ReceiveErrorEventArgs) => void): void;
    }

    export function create(properties: SocketProperties, callback: (createInfo: CreateInfo) => void): void;
    export function create(callback: (createInfo: CreateInfo) => void): void;
    export function update(socketId: number, properties: SocketProperties, callback?: Function): void;
    export function setPaused(socketId: number, paused: boolean, callback?: Function): void;
    export function setKeepAlive(socketId: number, enable: boolean, delay: number, callback: (result: number) => void): void;
    export function setKeepAlive(socketId: number, enable: boolean, callback: (result: number) => void): void;
    export function setNoDelay(socketId: number, noDelay: boolean, callback: (result: number) => void): void;
    export function connect(socketId: number, peerAddress: string, peerPort: number, callback: (result: number) => void): void;
    export function disconnect(socketId: number, callback?: Function): void;
    export function secure(socketId: number, options: TlsOptions, callback: (result: number) => void): void;
    export function secure(socketId: number, callback: (result: number) => void): void;
    export function send(socketId: number, data: ArrayBuffer, callback: (sendInfo: SendInfo) => void): void;
    export function close(socketId: number, callback?: Function): void;
    export function getInfo(socketId: number, callback: (socketInfo: SocketInfo) => void): void;
    export function getSockets(callback: (socketInfos: SocketInfo[]) => void): void;

    export const onReceive: ReceiveEvent;
    export const onReceiveError: ReceiveErrorEvent;
}

/**
 * Use the chrome.sockets.tcpServer API to create server applications using TCP connections. This API supersedes
 * the TCP functionality previously found in the chrome.socket API.
 */
declare module chrome.sockets.tcpServer {

    interface SocketProperties {
        persistent?: boolean;
        name?: string;
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

    interface AcceptEvent extends events.Event {
        addListener(callback: (info: AcceptEventArgs) => void): void;
    }

    interface AcceptErrorEvent extends events.Event {
        addListener(callback: (info: AcceptErrorEventArgs) => void): void;
    }

    export function create(properties: SocketProperties, callback: (createInfo: CreateInfo) => void): void;
    export function create(callback: (createInfo: CreateInfo) => void): void;
    export function update(socketId: number, properties: SocketProperties, callback?: Function): void;
    export function setPaused(socketId: number, paused: boolean, callback?: Function): void;
    export function listen(socketId: number, address: string, port: number, backlog: number, callback: (result: number) => void): void;
    export function listen(socketId: number, address: string, port: number, callback: (result: number) => void): void;
    export function disconnect(socketId: number, callback?: Function): void;
    export function close(socketId: number, callback?: Function): void;
    export function getInfo(socketId: number, callback: (socketInfo: SocketInfo) => void): void;
    export function getSockets(callback: (socketInfos: SocketInfo[]) => void): void;

    export const onAccept: AcceptEvent;
    export const onAcceptError: AcceptErrorEvent;
}

/**
 * Use the chrome.sockets.udp API to send and receive data over the network using UDP connections. This API supersedes
 * the UDP functionality previously found in the "socket" API.
 */
declare module chrome.sockets.udp {

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

    interface ReceiveEvent extends events.Event {
        addListener(callback: (info: ReceiveEventArgs) => void): void;
    }

    interface ReceiveErrorEvent extends events.Event {
        addListener(callback: (info: ReceiveErrorEventArgs) => void): void;
    }

    export function create(properties: SocketProperties, callback: (createInfo: CreateInfo) => void): void;
    export function create(callback: (createInfo: CreateInfo) => void): void;
    export function update(socketId: number, properties: SocketProperties, callback?: Function): void;
    export function setPaused(socketId: number, paused: boolean, callback?: Function): void;
    export function bind(socketId: number, address: string, port: number, callback: (result: number) => void): void;
    export function send(socketId: number, data: ArrayBuffer, address: string, port: number, callback: (sendInfo: SendInfo) => void): void;
    export function close(socketId: number, callback?: Function): void;
    export function getInfo(socketId: number, callback: (socketInfo: SocketInfo) => void): void;
    export function getSockets(callback: (socketInfos: SocketInfo[]) => void): void;
    export function joinGroup(socketId: number, address: string, callback: (result: number) => void): void;
    export function leaveGroup(socketId: number, address: string, callback: (result: number) => void): void;
    export function setMulticastTimeToLive(socketId: number, ttl: number, callback: (result: number) => void): void;
    export function setMulticastLoopbackMode(socketId: number, enabled: boolean, callback: (result: number) => void): void;
    export function getJoinedGroups(socketId: number, callback: (groups: string[]) => void): void;
    export function setBroadcast(socketId: number, enabled: boolean, callback: (result: number) => void): void;

    export const onReceive: ReceiveEvent;
    export const onReceiveError: ReceiveErrorEvent;
}

/**
 * Use the chrome.syncFileSystem API to save and synchronize data on Google Drive. This API is NOT for accessing
 * arbitrary user docs stored in Google Drive. It provides app-specific syncable storage for offline and caching usage
 * so that the same data can be available across different clients. Read Manage Data for more on using this API.
 */
declare module chrome.syncFileSystem {

    interface UsageAndQuotaInfo {
        usageBytes: number;
        quotaBytes: number;
    }

    interface FileStatusInfo {
        fileEntry: FileEntry;
        status: string;
        error?: string;
    }

    interface ServiceStatusDetails {
        state: string;
        description: string;
    }

    interface FileStatusDetails {
        fileEntry: FileEntry;
        status: string;
        action?: string;
        direction?: string;
    }

    interface ServiceStatusChangedEvent extends events.Event {
        addListener(callback: (detail: ServiceStatusDetails) => void): void;
    }

    interface FileStatusChangedEvent extends events.Event {
        addListener(callback: (detail: FileStatusDetails) => void): void;
    }

    export function requestFileSystem(callback: (fileSystem: FileSystem) => void): void;
    export function setConflictResolutionPolicy(policy: string, callback?: Function): void;
    export function getConflictResolutionPolicy(callback: (policy: string) => void): void;
    export function getUsageAndQuota(fileSystem: FileSystem, callback: (info: UsageAndQuotaInfo) => void): void;
    export function getFileStatus(entry: FileEntry, callback: (status: string) => void): void;
    export function getFileStatuses(fileEntries: FileEntry[], callback: (status: FileStatusInfo[]) => void): void;
    export function getServiceStatus(callback: (status: string) => void): void;

    export const onServiceStatusChanged: ServiceStatusChangedEvent;
    export const onFileStatusChanged: FileStatusChangedEvent;
}

/**
 * Use the system.display API to query display metadata.
 */
declare module chrome.system.display {

    interface Bounds {
        left: number;
        top: number;
        width: number;
        height: number;
    }

    interface Insets {
        left: number;
        top: number;
        right: number;
        bottom: number;
    }

    interface DisplayInfo {
        id: string;
        name: string;
        mirroringSourceId: string;
        isPrimary: boolean;
        isEnabled: boolean;
        dpiX: number;
        dpiY: number;
        rotation: number;
        bounds: Bounds;
        overscan: Insets;
        workArea: Bounds;
    }

    interface DisplayProperties {
        mirroringSourceId?: string;
        isPrimary?: boolean;
        overscan?: Insets;
        rotation?: number;
        boundsOriginX?: number;
        boundsOriginY?: number;
    }

    interface DisplayChangedEvent extends events.Event {
        addListener(callback: Function): void;
    }

    export function getInfo(callback: (displayInfo: DisplayInfo[]) => void): void;
    export function setDisplayProperties(id: string, info: DisplayProperties, callback: Function): void;

    export const onDisplayChanged: DisplayChangedEvent;
}

/**
 * Use the chrome.system.network API.
 */
declare module chrome.system.network {

    interface NetworkInterface {
        name: string;
        address: string;
        prefixLength: number;
    }

    export function getNetworkInterfaces(callback: (networkInterfaces: NetworkInterface[]) => void): void;
}

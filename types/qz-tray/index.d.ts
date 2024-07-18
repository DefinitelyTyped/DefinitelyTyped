export type UnknownObject = { [key: string | number]: any } | Array<{ [key: string | number]: any }>;
export type Event = UnknownObject;
export type EventData = UnknownObject;
export type EventCallback = (event: Event) => void;
export type EventDataCallback = (eventData: EventData) => void;
export type Promiser = (resolver: (value?: any) => void) => void;
export type Hasher = (message: (value?: any) => void) => void;
export type Ws = (webSocket: (value?: any) => void) => void;
export type Resolve = (value?: string) => void;
export type Reject = (value?: string) => void;
export type ColorType = "color" | "grayscale" | "blackwhite";

export interface Density {
    cross?: number;
    feed?: number;
}

export type Interpolation = "bicubic" | "bilinear" | "nearest-neighbor";

export interface Margins {
    top?: number;
    right?: number;
    bottom?: number;
    left?: number;
}

export type Orientation = "portrait" | "landscape" | "reverse-landscape";

export interface Size {
    width?: number | null;
    height?: number | null;
}

export type Units = "in" | "cm" | "mm";

export interface Encoding {
    from?: string;
    to?: string;
}

export interface Spool {
    size?: number | null;
    end?: string | null;
}

export type Flavor = "base64" | "hex" | "plain";

export interface Listener {
    bytes?: number;
    lines?: number;
    reverse?: boolean;
}

export type PromiseHandler = (resolve: Resolve, reject: Reject) => void;
export type PromiseFactory = (
    dataToSign: string,
) => (resolve: Resolve, reject: Reject) => void;
export type Algorithm = "SHA1" | "SHA256" | "SHA512";
export type Parity = "NONE" | "EVEN" | "ODD" | "MARK" | "SPACE" | "AUTO";
export type FlowControl =
    | "NONE"
    | "XONXOFF"
    | "XONXOFF_OUT"
    | "XONXOFF_IN"
    | "RTSCTS"
    | "RTSCTS_OUT"
    | "RTSCTS_IN"
    | "AUTO";

export interface LengthBytes {
    index?: number;
    length?: number;
    endian?: "BIG" | "LITTLE";
}

export interface CrcBytes {
    index?: number;
    length?: number;
}

export interface Rx {
    start?: string | string[];
    end?: string;
    width?: number;
    untilNewline?: boolean;
    lengthBytes?: number | LengthBytes;
    crcBytes?: number | CrcBytes;
    includeHeader?: boolean;
    encoding?: string;
}

export type Type = "FILE" | "PLAIN" | "HEX" | "BASE64";

export interface SerialCallbackData {
    portName: string;
    type: "RECEIVE" | "ERROR" | string;
    output: string;
    exception?: string;
}

export type SerialCallback = (data: SerialCallbackData) => void;
export type SocketCallbackEventData = (host: string, port: number) => void;
export type SocketCallback = (eventData: SocketCallbackEventData) => void;
export type UsbCallbackEventData = (vendorId: string, productId: string) => void;
export type UsbCallback = (eventData: UsbCallbackEventData) => void;

export interface DeviceInfo {
    vendorId: string;
    productId: string;
    interface: string;
}

export type Pixel = "html" | "image" | "pdf";
export type Raw = "command" | "html" | "image" | "pdf";
export type PrintFlavor = "base64" | "file" | "hex" | "plain" | "xml";

export interface PrintOptions {
    language?: string;
    x?: number;
    y?: number;
    dotDensity?: string | number;
    overlay?: boolean | string | string[];
    xmlTag?: string;
    pageWidth?: number;
    pageHeight?: number;
    pageRanges?: string;
    ignoreTransparency?: boolean;
    altFontRendering?: boolean;
}

export interface ConnectOptions {
    host?: string | string[];
    port?: {
        secure?: number[];
        insecure?: number[];
    };
    usingSecure?: boolean;
    keepAlive?: number;
    retries?: number;
    delay?: number;
}

export interface GetConnectionInfoResponse {
    socket: string;
    host: string;
    port: number;
}

export interface VersionOptions {
    major: string;
    minor?: string;
    patch?: string;
    build?: string;
}

export interface CreatePrinterInput {
    name?: string;
    file?: string;
    host?: string;
    port?: string;
}

export interface PrinterOptions {
    bounds?: {
        x?: number;
        y?: number;
        width?: number;
        height?: number;
    };
    colorType?: ColorType;
    copies?: number;
    density?: number | number[] | Density | Density[] | string[];
    duplex?: boolean | string;
    fallbackDensity?: number | null;
    interpolation?: Interpolation;
    jobName?: string | null;
    legacy?: boolean;
    margins?: number | Margins;
    orientation?: Orientation | null;
    paperThickness?: number | null;
    printerTray?: string | number | null;
    rasterize?: boolean;
    rotation?: number;
    scaleContent?: boolean;
    size?: Size | null;
    units?: Units;
    forceRaw?: boolean;
    encoding?: string | Encoding;
    endOfDoc?: string | null;
    perSpool?: number;
    retainTemp?: boolean;
    spool?: Spool | null;
}

export interface FileListParams {
    sandbox?: boolean;
    shared?: boolean;
}

export type FileReadParams = FileListParams & {
    flavor?: Flavor;
};
export type FileRemoveParams = FileListParams;

export interface FileStartListeningParams {
    sandbox?: boolean;
    shared?: boolean;
    listener?: Listener;
    include?: string | string[];
    exclude?: string | string[];
    ignoreCase?: boolean;
}

export type FileStopListeningParams = Pick<
    FileStartListeningParams,
    "sandbox" | "shared"
>;
export type FileWriteParams = FileReadParams & {
    data?: string;
    append?: boolean;
};

export interface HidDeviceInfoInput {
    vendorId: string;
    productId: string;
    usagePage: string;
    serial: string;
}

export type HidGetFeatureReportsDeviceInfoInput = HidDeviceInfoInput & {
    responseSize: string;
};
export type HidOpenStreamDeviceInfoInput = HidDeviceInfoInput & {
    interval?: number;
};
export type HidReadDataDeviceInfoInput = HidDeviceInfoInput & {
    responseSize: string;
};
export type HidReleaseDeviceDeviceInfoInput = HidDeviceInfoInput;
export type HidSendDataDeviceInfoInput = HidDeviceInfoInput & {
    data: string;
    endpoint?: string;
    reportId?: string;
    type?: Type;
};
export type HidSendFeatureReportDeviceInfoInput = HidDeviceInfoInput & {
    data: string;
    endpoint?: string;
    reportId?: string;
    type?: Type;
};

export interface ClearQueueOptions {
    printerName?: string;
    jobId?: number;
}

export interface PrintersStartListeningOptions {
    jobData?: null | boolean;
    maxJobData?: null | number;
    flavor?: Flavor;
}

export interface SetCertificatePromiseOptions {
    rejectOnFailure?: boolean;
}

export interface OpenPortOptions {
    baudRate?: number;
    dataBits?: number;
    stopBits?: number;
    parity?: Parity;
    flowControl?: FlowControl;
    encoding?: string;
    /**
     * @deprecated Legacy character denoting start of serial response. Use options.rx.start instead.
     */
    start?: string;
    /**
     * @deprecated Legacy character denoting end of serial response. Use options.rx.end instead.
     */
    end?: string;
    /**
     * @deprecated Legacy use for fixed-width response serial communication. Use options.rx.width instead.
     */
    width?: number;
    rx?: Rx;
}

export interface SendDataData {
    type?: Type;
    data: string | string[];
}

export interface SocketSendDataData {
    type?: "PLAIN";
    data: string;
}

export type UsbClaimDeviceDeviceInfoInput = DeviceInfo;
export type UsbCloseStreamDeviceInfoInput =
    & Pick<
        DeviceInfo,
        "vendorId" | "productId"
    >
    & {
        endpoint: string;
    };
export type UsbIsClaimedDeviceInfoInput = Pick<DeviceInfo, "vendorId" | "productId">;
export type ListEndpointsDeviceInfoInput =
    & Pick<
        DeviceInfo,
        "vendorId" | "productId"
    >
    & {
        iface: string;
    };
export type ListInterfacesDeviceInfoInput = Pick<
    DeviceInfo,
    "vendorId" | "productId"
>;
export type UsbOpenStreamDeviceInfoInput =
    & Pick<
        DeviceInfo,
        "vendorId" | "productId"
    >
    & {
        endpoint: string;
        responseSize: string;
        interval?: number;
    };
export type UsbReadDataDeviceInfoInput = Omit<UsbOpenStreamDeviceInfoInput, "interval">;
export type UsbReleaseDeviceDeviceInfoInput = Pick<
    DeviceInfo,
    "vendorId" | "productId"
>;
export type UsbSendDataDeviceInfoInput =
    & Pick<
        DeviceInfo,
        "vendorId" | "productId"
    >
    & {
        endpoint: string;
        productId: string;
        data: string;
        type?: Type;
    };
export type PrintConfig = PrinterOptions;
export type PrintData =
    & {
        data: string | Uint8Array;
        flavor: PrintFlavor;
        options?: PrintOptions;
        precision?: number;
    }
    & (
        | {
            type: "pixel";
            format: Pixel;
        }
        | {
            type: "raw";
            format: Raw;
        }
    );

export interface PrintArguments {
    resumeOnError?: boolean;
    signature?: string[];
    signingTimeStamps?: number[];
}

export interface WebSocket {
    connect: (options?: ConnectOptions) => Promise<void>;
    disconnect: () => Promise<void>;
    isActive: () => boolean;
    getConnectionInfo: () => Promise<GetConnectionInfoResponse>;
    setClosedCallbacks: (calls: EventCallback | EventCallback[]) => void;
    setErrorCallbacks: (calls: EventCallback | EventCallback[]) => void;
    /**
     * @deprecated since 2.1.0. Please use qz.networking.device() instead
     */
    getNetworkInfo: () => UnknownObject;
}

export interface Api {
    isVersion: (options: VersionOptions) => boolean;
    getVersion: () => Promise<string>;
    isVersionGreater: (options: VersionOptions) => boolean;
    isVersionLess: (options: VersionOptions) => boolean;
    setPromiseType: (promiser: Promiser) => void;
    setSha256Type: (hasher: Hasher) => void;
    setWebSocketType: (ws: Ws) => void;
    showDebug: (show: boolean) => boolean;
}

export interface Configs {
    create: (
        printer: string | CreatePrinterInput,
        options?: PrinterOptions,
    ) => PrinterOptions;
    setDefaults: (options: PrinterOptions) => void;
}

export interface File {
    list: (path: string, params?: FileListParams) => Promise<string[]>;
    read: (path: string, params?: FileReadParams) => Promise<string>;
    remove: (path: string, params?: FileRemoveParams) => Promise<void>;
    setFileCallbacks: (calls: EventDataCallback | EventDataCallback[]) => void;
    startListening: (
        path: string,
        params: FileStartListeningParams,
    ) => Promise<void>;
    stopListening: (
        path?: string,
        params?: FileStopListeningParams,
    ) => Promise<void>;
    write: (path: string, params: FileWriteParams) => Promise<void>;
}

export interface Hid {
    claimDevice: (deviceInfo: HidDeviceInfoInput) => Promise<void>;
    closeStream: (deviceInfo: HidDeviceInfoInput) => Promise<void>;
    getFeatureReport: (
        deviceInfo: HidGetFeatureReportsDeviceInfoInput,
    ) => Promise<string[]>;
    isClaimed: (deviceInfo: HidDeviceInfoInput) => Promise<boolean>;
    listDevices: () => Promise<UnknownObject>;
    openStream: (deviceInfo: HidOpenStreamDeviceInfoInput) => Promise<void>;
    readData: (deviceInfo: HidReadDataDeviceInfoInput) => Promise<string[]>;
    releaseDevice: (
        deviceInfo: HidReleaseDeviceDeviceInfoInput,
    ) => Promise<void>;
    sendData: (deviceInfo: HidSendDataDeviceInfoInput) => Promise<void>;
    sendFeatureReport: (
        deviceInfo: HidSendFeatureReportDeviceInfoInput,
    ) => Promise<void>;
    setHidCallbacks: (calls: EventDataCallback | EventDataCallback[]) => void;
    startListening: () => Promise<void>;
    stopListening: () => Promise<void>;
}

export interface Networking {
    device: (hostname?: string, port?: number) => Promise<UnknownObject>;
    devices: (hostname?: string, port?: number) => Promise<UnknownObject[]>;
    hostname: (hostname?: string, port?: string) => Promise<string>;
}

export interface Printers {
    clearQueue: (options?: ClearQueueOptions) => Promise<void>;
    details: () => Promise<UnknownObject[] | UnknownObject>;
    find: (
        query?: string,
        signature?: string,
        signingTimestamp?: number,
    ) => Promise<string[] | string>;
    getDefault: (
        signature?: string,
        signingTimestamp?: number,
    ) => Promise<string>;
    getStatus: () => Promise<void>;
    setPrinterCallbacks: (
        calls: EventDataCallback | EventDataCallback[],
    ) => void;
    startListening: (
        printers: null | string | string[],
        options?: PrintersStartListeningOptions,
    ) => Promise<void>;
    stopListening: () => Promise<void>;
}

export interface Security {
    getSignatureAlgorithm: () => string;
    setCertificatePromise: (
        promiseHandler: PromiseHandler,
        options?: SetCertificatePromiseOptions,
    ) => void;
    setSignatureAlgorithm: (algorithm: Algorithm) => void;
    setSignaturePromise: (promiseFactory: PromiseFactory | ((dataToSign: string) => Promise<string>)) => void;
}

export interface Serial {
    closePort: (port: string) => Promise<void>;
    findPorts: () => Promise<string[]>;
    openPort: (port: string, options?: OpenPortOptions) => Promise<void>;
    sendData: (
        port: string,
        data: string | string[] | SendDataData,
        options?: UnknownObject,
    ) => Promise<void>;
    setSerialCallbacks: (calls: SerialCallback | SerialCallback[]) => void;
}

export interface Socket {
    close: (host: string, port: number) => void;
    open: (host: string, port: number, options?: { encoding?: string }) => void;
    sendData: (
        host: string,
        port: number,
        data: string | SocketSendDataData,
    ) => void;
    setSocketCallbacks: (calls: SocketCallback | SocketCallback[]) => void;
}

export interface Usb {
    claimDevice: (deviceInfo: UsbClaimDeviceDeviceInfoInput) => Promise<void>;
    closeStream: (deviceInfo: UsbCloseStreamDeviceInfoInput) => Promise<void>;
    isClaimed: (deviceInfo: UsbIsClaimedDeviceInfoInput) => Promise<boolean>;
    listDevices: (includeHubs?: boolean) => Promise<UnknownObject[]>;
    listEndpoints: (
        deviceInfo: ListEndpointsDeviceInfoInput,
    ) => Promise<string[]>;
    listInterfaces: (
        deviceInfo: ListInterfacesDeviceInfoInput,
    ) => Promise<string[]>;
    openStream: (deviceInfo: UsbOpenStreamDeviceInfoInput) => Promise<void>;
    readData: (deviceInfo: UsbReadDataDeviceInfoInput) => Promise<string[]>;
    releaseDevice: (
        deviceInfo: UsbReleaseDeviceDeviceInfoInput,
    ) => Promise<void>;
    sendData: (deviceInfo: UsbSendDataDeviceInfoInput) => Promise<void>;
    setUsbCallbacks: (calls: UsbCallback | UsbCallback[]) => void;
}

export function print(
    configs: PrintConfig | PrintConfig[],
    data: PrintData[] | string[],
    arguments?: PrintArguments,
): Promise<void>;

export const api: Api;
export const configs: Configs;
export const file: File;
export const hid: Hid;
export const networking: Networking;
export const printers: Printers;
export const security: Security;
export const serial: Serial;
export const socket: Socket;
export const usb: Usb;
export const websocket: WebSocket;

export as namespace qz;

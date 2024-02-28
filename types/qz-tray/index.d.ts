declare namespace qz {
    type UnknownObject = { [key: string | number]: any } | Array<{ [key: string | number]: any }>;
    type Event = UnknownObject;
    type EventData = UnknownObject;
    type EventCallback = (event: Event) => void;
    type EventDataCallback = (eventData: EventData) => void;
    type Promiser = (resolver: (value?: any) => void) => void;
    type Hasher = (message: (value?: any) => void) => void;
    type Ws = (webSocket: (value?: any) => void) => void;
    type Resolve = (value?: string) => void;
    type Reject = (value?: string) => void;
    type ColorType = "color" | "grayscale" | "blackwhite";

    interface Density {
        cross?: number;
        feed?: number;
    }

    type Interpolation = "bicubic" | "bilinear" | "nearest-neighbor";

    interface Margins {
        top?: number;
        right?: number;
        bottom?: number;
        left?: number;
    }

    type Orientation = "portrait" | "landscape" | "reverse-landscape";

    interface Size {
        width?: number | null;
        height?: number | null;
    }

    type Units = "in" | "cm" | "mm";

    interface Encoding {
        from?: string;
        to?: string;
    }

    interface Spool {
        size?: number | null;
        end?: string | null;
    }

    type Flavor = "base64" | "hex" | "plain";

    interface Listener {
        bytes?: number;
        lines?: number;
        reverse?: boolean;
    }

    type PromiseHandler = (resolve: Resolve, reject: Reject) => void;
    type PromiseFactory = (
        dataToSign: string,
    ) => (resolve: Resolve, reject: Reject) => void;
    type Algorithm = "SHA1" | "SHA256" | "SHA512";
    type Parity = "NONE" | "EVEN" | "ODD" | "MARK" | "SPACE" | "AUTO";
    type FlowControl =
        | "NONE"
        | "XONXOFF"
        | "XONXOFF_OUT"
        | "XONXOFF_IN"
        | "RTSCTS"
        | "RTSCTS_OUT"
        | "RTSCTS_IN"
        | "AUTO";

    interface LengthBytes {
        index?: number;
        length?: number;
        endian?: "BIG" | "LITTLE";
    }

    interface CrcBytes {
        index?: number;
        length?: number;
    }

    interface Rx {
        start?: string | string[];
        end?: string;
        width?: number;
        untilNewline?: boolean;
        lengthBytes?: number | LengthBytes;
        crcBytes?: number | CrcBytes;
        includeHeader?: boolean;
        encoding?: string;
    }

    type Type = "FILE" | "PLAIN" | "HEX" | "BASE64";

    interface SerialCallbackData {
        portName: string;
        type: "RECEIVE" | "ERROR" | string;
        output: string;
        exception?: string;
    }

    type SerialCallback = (data: SerialCallbackData) => void;
    type SocketCallbackEventData = (host: string, port: number) => void;
    type SocketCallback = (eventData: SocketCallbackEventData) => void;
    type UsbCallbackEventData = (vendorId: string, productId: string) => void;
    type UsbCallback = (eventData: UsbCallbackEventData) => void;

    interface DeviceInfo {
        vendorId: string;
        productId: string;
        interface: string;
    }

    type Pixel = "html" | "image" | "pdf";
    type Raw = "command" | "html" | "image" | "pdf";
    type PrintFlavor = "base64" | "file" | "hex" | "plain" | "xml";

    interface PrintOptions {
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

    interface ConnectOptions {
        host?: string | string[];
        port?: {
            secure?: number[];
            insecure?: number[];
        };
        usingSecure?: boolean;
        keepAlive?: number;
    }

    interface GetConnectionInfoResponse {
        socket: string;
        host: string;
        port: number;
    }

    interface VersionOptions {
        major: string;
        minor?: string;
        patch?: string;
        build?: string;
    }

    interface CreatePrinterInput {
        name?: string;
        file?: string;
        host?: string;
        port?: string;
    }

    interface PrinterOptions {
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

    interface FileListParams {
        sandbox?: boolean;
        shared?: boolean;
    }

    type FileReadParams = FileListParams & {
        flavor?: Flavor;
    };
    type FileRemoveParams = FileListParams;

    interface FileStartListeningParams {
        sandbox?: boolean;
        shared?: boolean;
        listener?: Listener;
        include?: string | string[];
        exclude?: string | string[];
        ignoreCase?: boolean;
    }

    type FileStopListeningParams = Pick<
        FileStartListeningParams,
        "sandbox" | "shared"
    >;
    type FileWriteParams = FileReadParams & {
        data?: string;
        append?: boolean;
    };

    interface HidDeviceInfoInput {
        vendorId: string;
        productId: string;
        usagePage: string;
        serial: string;
    }

    type HidGetFeatureReportsDeviceInfoInput = HidDeviceInfoInput & {
        responseSize: string;
    };
    type HidOpenStreamDeviceInfoInput = HidDeviceInfoInput & {
        interval?: number;
    };
    type HidReadDataDeviceInfoInput = HidDeviceInfoInput & {
        responseSize: string;
    };
    type HidReleaseDeviceDeviceInfoInput = HidDeviceInfoInput;
    type HidSendDataDeviceInfoInput = HidDeviceInfoInput & {
        data: string;
        endpoint?: string;
        reportId?: string;
        type?: Type;
    };
    type HidSendFeatureReportDeviceInfoInput = HidDeviceInfoInput & {
        data: string;
        endpoint?: string;
        reportId?: string;
        type?: Type;
    };

    interface ClearQueueOptions {
        printerName?: string;
        jobId?: number;
    }

    interface PrintersStartListeningOptions {
        jobData?: null | boolean;
        maxJobData?: null | number;
        flavor?: Flavor;
    }

    interface SetCertificatePromiseOptions {
        rejectOnFailure?: boolean;
    }

    interface OpenPortOptions {
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

    interface SendDataData {
        type?: Type;
        data: string | string[];
    }

    interface SocketSendDataData {
        type?: "PLAIN";
        data: string;
    }

    type UsbClaimDeviceDeviceInfoInput = DeviceInfo;
    type UsbCloseStreamDeviceInfoInput =
        & Pick<
            DeviceInfo,
            "vendorId" | "productId"
        >
        & {
        endpoint: string;
    };
    type UsbIsClaimedDeviceInfoInput = Pick<DeviceInfo, "vendorId" | "productId">;
    type ListEndpointsDeviceInfoInput =
        & Pick<
            DeviceInfo,
            "vendorId" | "productId"
        >
        & {
        iface: string;
    };
    type ListInterfacesDeviceInfoInput = Pick<
        DeviceInfo,
        "vendorId" | "productId"
    >;
    type UsbOpenStreamDeviceInfoInput =
        & Pick<
            DeviceInfo,
            "vendorId" | "productId"
        >
        & {
        endpoint: string;
        responseSize: string;
        interval?: number;
    };
    type UsbReadDataDeviceInfoInput = Omit<UsbOpenStreamDeviceInfoInput, "interval">;
    type UsbReleaseDeviceDeviceInfoInput = Pick<
        DeviceInfo,
        "vendorId" | "productId"
    >;
    type UsbSendDataDeviceInfoInput =
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
    type PrintConfig = PrinterOptions;
    type PrintData =
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

    interface PrintArguments {
        resumeOnError?: boolean;
        signature?: string[];
        signingTimeStamps?: number[];
    }

    interface WebSocket {
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

    interface Api {
        isVersion: (options: VersionOptions) => boolean;
        getVersion: () => Promise<string>;
        isVersionGreater: (options: VersionOptions) => boolean;
        isVersionLess: (options: VersionOptions) => boolean;
        setPromiseType: (promiser: Promiser) => void;
        setSha256Type: (hasher: Hasher) => void;
        setWebSocketType: (ws: Ws) => void;
        showDebug: (show: boolean) => boolean;
    }

    interface Configs {
        create: (
            printer: string | CreatePrinterInput,
            options?: PrinterOptions,
        ) => PrinterOptions;
        setDefaults: (options: PrinterOptions) => void;
    }

    interface File {
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

    interface Hid {
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

    interface Networking {
        device: (hostname?: string, port?: number) => Promise<UnknownObject>;
        devices: (hostname?: string, port?: number) => Promise<UnknownObject[]>;
        hostname: (hostname?: string, port?: string) => Promise<string>;
    }

    interface Printers {
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

    interface Security {
        getSignatureAlgorithm: () => string;
        setCertificatePromise: (
            promiseHandler: PromiseHandler,
            options?: SetCertificatePromiseOptions,
        ) => void;
        setSignatureAlgorithm: (algorithm: Algorithm) => void;
        setSignaturePromise: (promiseFactory: PromiseFactory) => void;
    }

    interface Serial {
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

    interface Socket {
        close: (host: string, port: number) => void;
        open: (host: string, port: number, options?: { encoding?: string }) => void;
        sendData: (
            host: string,
            port: number,
            data: string | SocketSendDataData,
        ) => void;
        setSocketCallbacks: (calls: SocketCallback | SocketCallback[]) => void;
    }

    interface Usb {
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

    function print(
        configs: PrintConfig | PrintConfig[],
        data: PrintData[] | string[],
        arguments?: PrintArguments,
    ): Promise<void>;

    const api: Api;
    const configs: Configs;
    const file: File;
    const hid: Hid;
    const networking: Networking;
    const printers: Printers;
    const security: Security;
    const serial: Serial;
    const socket: Socket;
    const usb: Usb;
    const websocket: WebSocket;

}

export = qz
export as namespace qz

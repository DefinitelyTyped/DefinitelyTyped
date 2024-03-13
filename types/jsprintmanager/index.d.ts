export namespace JSPM {
    interface IClientPrinter {
        Id: any;
        serialize(): any;
    }

    class ClientPrintJob {
        private _clientPrinter;
        clientPrinter: IClientPrinter;
        private _printerCommandsCopies;
        printerCommandsCopies: number;
        private _printerCommands;
        printerCommands: string;
        private _binaryPrinterCommands;
        binaryPrinterCommands: Uint8Array;
        private _printFileGroup;
        readonly files: PrintFile[];
        sendToClient(): Promise<{}>;
        _intToByteArray(number: number): Uint8Array;
        _genPFGArrayAsync(printFileGroup: PrintFile[]): Promise<Blob>;
        _genPCArrayAsync(printerCommands: string, binPrinterCommands: Uint8Array, printerCopies: number): Promise<Blob>;
        _str2UTF8Array(str: string): number[];
        _genPrinterArrayAsync(clientPrinter: IClientPrinter): Promise<Uint8Array>;
        _generateDataAsync(): Promise<Blob>;
    }

    class ClientPrintJobGroup {
        _jobs: ClientPrintJob[];
        readonly jobs: ClientPrintJob[];
        sendToClient(): Promise<{}>;
        private _generateMiniJob(cj);
        private _generateDataAsync();
        private _intToArray(number);
    }

    interface IClientPrinter {
        Id: any;
        serialize(): any;
    }
    class DefaultPrinter implements IClientPrinter {
        Id: string;
        serialize(): string;
    }
    class InstalledPrinter implements IClientPrinter {
        Id: string;
        private _name;
        private _printDefault;
        private _tray;
        private _paper;
        private bool2str(value, true_val?, false_val?);
        printerName: string;
        printToDefaultIfNotFound: boolean;
        trayName: string;
        paperName: string;
        constructor(printerName: string, printToDefaultIfNotFound?: boolean, trayName?: string, paperName?: string);
        serialize(): string;
    }
    class ParallelPortPrinter implements IClientPrinter {
        Id: string;
        private _parallelPortName;
        portName: string;
        constructor(portName: string);
        serialize(): string;
    }
    class SerialPortPrinter implements IClientPrinter {
        Id: string;
        private _serialPortName;
        private _serialPortBaudRate;
        private _serialPortParity;
        private _serialPortStopBits;
        private _serialPortDataBits;
        private _serialPortFlowControl;
        portName: string;
        baudRate: number;
        parity: Serial.Parity;
        stopBits: Serial.StopBits;
        dataBits: number;
        flowControl: Serial.Handshake;

        constructor(
            portName: string,
            baudRate: number,
            parity: Serial.Parity,
            stopBits: Serial.StopBits,
            dataBits: number,
            flowControl: Serial.Handshake,
        );

        serialize(): string;
    }
    class NetworkPrinter implements IClientPrinter {
        Id: number;
        private _networkIPAddress;
        private _networkPort;
        private _dnsName;
        dnsName: string;
        ipAddress: string;
        port: number;
        constructor(port: number, ipAddress?: string, dnsName?: string);
        serialize(): string;
    }
    class UserSelectedPrinter implements IClientPrinter {
        Id: string;
        serialize(): string;
    }
    enum FileSourceType {
        Base64 = 0,
        Text = 1,
        BLOB = 2,
        URL = 3,
    }
    enum WSStatus {
        Open = 0,
        Closed = 1,
        BlackListed = 2,
        WaitingForUserResponse = 3,
    }
    enum PrintRotation {
        None = 3,
        Rot90 = 5,
        Rot180 = 6,
        Rot270 = 4,
    }
    enum TextAlignment {
        Left = 0,
        Center = 1,
        Right = 2,
        Justify = 3,
    }
    enum PrintOrientation {
        Portrait = 0,
        Landscape = 1,
    }

    class JSPMWebSocket {
        private _ws;
        private _addr;
        private _port;
        private _secure;
        private _status;
        private _job_list;
        readonly address: string;
        readonly port: number;
        readonly isSecure: boolean;
        readonly status: WSStatus;
        autoReconnect: boolean;
        onClose: (e: any) => void;
        onOpen: (e: any) => void;
        onStatusChanged: () => void;
        constructor(addr?: string, port?: number, secure?: boolean, auto_reconnect?: boolean);
        private _onOpen(e, __this);
        private _onMessage(e, job_list);
        private _onError(e);
        private _pingPong();
        private _onClose(e, __this);
        private _genID();
        private _send(data, ok, err);
        start(): Promise<void>;
        send(data: any): Promise<any>;
        stop(): void;
    }

    namespace JSPrintManager {
        let WS: JSPMWebSocket;
        let auto_reconnect: boolean;
        function start(secure?: boolean, host?: string, port?: number): Promise<void>;
        function getPrinters(): Promise<{}>;
        function getPrintersInfo(): Promise<{}>;
        const websocket_status: WSStatus;
        function showAbout(): Promise<any>;
        function updateClient(): Promise<any>;
        function stop(): void;
    }

    class PrintFile {
        fileContentType: FileSourceType;
        fileContent: any;
        fileName: string;
        private _copies;
        copies: number;
        private escapeInvalidFileNameChars();
        constructor(fileContent: any, fileContentType: FileSourceType, fileName: string, copies?: number);
        protected bool2str(value: any, true_val?: string, false_val?: string): string;
        serialize(): Promise<zip.Reader>;
    }

    class PrintFilePDF extends PrintFile {
        printAsGrayscale: boolean;
        printAnnotations: boolean;
        printRange: string;
        printInReverseOrder: boolean;
        printRotation: PrintRotation;
        constructor(fileContent: any, fileContentType: FileSourceType, fileName: string, copies?: number);
        isValidRange(range: string): boolean;
        private getBLOBContent();
        serialize(): Promise<zip.Reader>;
    }

    class PrintFileTXT extends PrintFile {
        textContent: string;
        textAligment: TextAlignment;
        fontName: string;
        fontBold: boolean;
        fontItalic: boolean;
        fontUnderline: boolean;
        fontStrikethrough: boolean;
        fontSize: number;
        fontColor: string;
        printOrientation: PrintOrientation;
        marginLeft: number;
        marginRight: number;
        marginTop: number;
        marginBottom: number;
        constructor(fileContent: string, fileName: string, copies?: number);
        serialize(): Promise<zip.Reader>;
    }

    namespace Serial {
        enum Parity {
            None = 0,
            Odd = 1,
            Even = 2,
            Mark = 3,
            Space = 4,
        }
        enum StopBits {
            None = 0,
            One = 1,
            Two = 2,
            OnePointFive = 3,
        }
        enum Handshake {
            None = 0,
            RequestToSend = 1,
            RequestToSendXOnXOff = 2,
            XOnXOff = 3,
        }
    }
}

export namespace zip {
    class Reader {
        size: number;
        init(callback: () => void, onerror: (error: any) => void): void;

        readUint8Array(
            index: number,
            length: number,
            callback: (result: Uint8Array) => void,
            onerror?: (error: any) => void,
        ): void;
    }
}

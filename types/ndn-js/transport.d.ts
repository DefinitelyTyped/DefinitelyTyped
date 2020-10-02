export abstract class TransportConnectionInfo {
}

export abstract class Transport {
    static ConnectionInfo: TransportConnectionInfo;
    isLocal(): boolean;
}

export class TcpTransport extends Transport {
}

export namespace TcpTransport {
    class ConnectionInfo extends TransportConnectionInfo {
        constructor(host: string, port: number);
        equals(other: ConnectionInfo): boolean;
        toString(): string;
    }
}

export class UnixTransport extends Transport {
}

export namespace UnixTransport {
    class ConnectionInfo extends TransportConnectionInfo {
        constructor(filePath: string);
        equals(other: ConnectionInfo): boolean;
        toString(): string;
    }
}

export class WebSocketTransport extends Transport {
}

export namespace WebSocketTransport {
    class ConnectionInfo extends TransportConnectionInfo {
        constructor(hostOrUri: string, port?: number);
        equals(other: ConnectionInfo): boolean;
        toString(): string;
    }
}

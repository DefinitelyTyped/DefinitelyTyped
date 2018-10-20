export interface Transport {
}

export namespace Transport {
    interface ConnectionInfo {
    }
}

export class TcpTransport implements Transport {
}

export namespace TcpTransport {
    class ConnectionInfo implements Transport.ConnectionInfo {
        constructor(host: string, port: number);
        equals(other: ConnectionInfo): boolean;
        toString(): string;
    }
}

export class UnixTransport implements Transport {
}

export namespace UnixTransport {
    class ConnectionInfo implements Transport.ConnectionInfo {
        constructor(filePath: string);
        equals(other: ConnectionInfo): boolean;
        toString(): string;
    }
}

export class WebSocketTransport implements Transport {
    isLocal(): boolean;
}

export namespace WebSocketTransport {
    class ConnectionInfo implements Transport.ConnectionInfo {
        constructor(host: string, port: number);
        constructor(uri: string);
        equals(other: ConnectionInfo): boolean;
        toString(): string;
    }
}

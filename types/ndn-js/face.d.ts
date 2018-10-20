import { Transport } from "./transport";

export interface FaceCtorOptions {
    getTransport?: () => Transport;
    getConnectionInfo?: () => Transport.ConnectionInfo;
    connectionInfo?: Transport.ConnectionInfo|null;
    host?: string|null;
    port?: number|null;
    onopen?: () => any;
    onclose?: () => any;
}

export class Face {
    constructor();
    constructor(settings: FaceCtorOptions);
    constructor(transport: Transport, connectionInfo: Transport.ConnectionInfo);
}

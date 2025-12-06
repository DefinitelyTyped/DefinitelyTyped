import Connection from "@xmpp/connection";
import ConnectionTCP, { SocketConstructor as ConnectionTCPSocketConstructor } from "@xmpp/connection-tcp";
import Socket from "./Socket.js";

export default ConnectionTLS;

declare class ConnectionTLS extends ConnectionTCP {
    Socket: ConnectionTCPSocketConstructor;
    socketParameters(service: string): SocketParameters | undefined;
}

export interface SocketParameters {
    port: number;
    host: string;
}

export interface SocketConstructor extends ConnectionTCPSocketConstructor {
    new(): Socket;
}

import Connection, { SocketConstructor as ConnectionSocketConstructor } from "@xmpp/connection";
import { Element } from "@xmpp/xml";
import { URL } from "url";
import Socket from "./Socket.js";

export default ConnectionTCP;

declare class ConnectionTCP extends Connection {
    sendMany(elements: Iterable<Element>): Promise<void>;
    socketParameters(service: string | URL): SocketParameters | undefined;
    headerElement(): Element;

    Socket: SocketConstructor;
}

export interface SocketParameters {
    port: number | null;
    host: string;
}

export interface SocketConstructor extends ConnectionSocketConstructor {
    new(): Socket;
}

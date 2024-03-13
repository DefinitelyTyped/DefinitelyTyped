import Connection = require("@xmpp/connection");
import { Element } from "@xmpp/xml";
import { Socket } from "net";
import { URL } from "url";

export = ConnectionTCP;

declare class ConnectionTCP extends Connection {
    sendMany(elements: Iterable<Element>): Promise<void>;
    socketParameters(service: string | URL): ConnectionTCP.SocketParameters | undefined;
    headerElement(): Element;

    Socket: ConnectionTCP.SocketConstructor;
}

declare namespace ConnectionTCP {
    interface SocketParameters {
        port: number | null;
        host: string;
    }

    interface SocketConstructor extends Connection.SocketConstructor {
        new(): Socket;
    }
}

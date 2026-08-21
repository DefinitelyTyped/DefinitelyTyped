import Connection from "@xmpp/connection";
import { Element } from "@xmpp/xml";
import FramedParser from "./FramedParser.js";
import Socket from "./Socket.js";

export default ConnectionWebSocket;

declare class ConnectionWebSocket extends Connection {
    sendMany(elements: Iterable<Element>): Promise<void>;
    headerElement(): Element;
    socketParameters(service: string): string | undefined;

    Socket: typeof Socket;
    Parser: typeof FramedParser;
}

import Connection = require('@xmpp/connection');
import { Element } from '@xmpp/xml';
import FramedParser = require('./FramedParser');
import Socket = require('./Socket');

export = ConnectionWebSocket;

declare class ConnectionWebSocket extends Connection {
    sendMany(elements: Iterable<Element>): Promise<void>;
    headerElement(): Element;
    socketParameters(service: string): string | undefined;

    Socket: typeof Socket;
    Parser: typeof FramedParser;
}

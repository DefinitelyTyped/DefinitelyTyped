import Connection = require('@xmpp/connection');
import { Element } from '@xmpp/xml';

export = Client;

declare class Client extends Connection {
    transports: Array<typeof Connection>;

    Transport?: typeof Connection;
    send(element: Element, ...args: unknown[]): Promise<void>;
    sendMany(elements: Iterable<Element>, ...args: unknown[]): Promise<void>;
    header(el: Element, ...args: unknown[]): string;
    headerElement(...args: unknown[]): Element;
    footer(el: Element, ...args: unknown[]): string;
    footerElement(...args: unknown[]): Element;
    socketParameters(service: string, ...args: unknown[]): unknown | undefined;
}

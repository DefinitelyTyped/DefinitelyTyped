// Type definitions for node-xmpp-core 5.0
// Project: http://github.com/node-xmpp/node-xmpp
// Definitions by: PJakcson <https://github.com/PJakcson>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1
/// <reference types="node" />
import { Element } from 'ltx';
import { EventEmitter } from 'events';

// fixme: not ideal
export { createElement, Element, escapeXML, escapeXMLText } from 'ltx';

export class Connection extends EventEmitter {
    constructor(opts?: any);
}

export namespace SRV {
    /**
     * returns a lazy iterator which can be restarted via connection.connect()
     */
    function connect(opts?: any): any;
}

export class Stanza extends Element {
    from: string;
    to: string;
    id: string;
    type: string;

    constructor(name: string, attrs?: any);
}

/**
 * JSX compatible API, use this function as pragma
 * https://facebook.github.io/jsx/
 * Returns a Stanza if name is presence, message or iq an ltx Element otherwise.
 *
 * @param name  name of the element
 * @param attrs attribute key/value pairs
 */
export function createStanza(name: string, attrs?: any): Element;

export class IQ extends Stanza {
    constructor(attrs?: any);
}

export class Message extends Stanza {
    constructor(attrs?: any);
}

export class Presence extends Stanza {
    constructor(attrs?: any);
}

export class JID {
    local: string;
    domain: string;
    resource: string;

    constructor(local: string, domain?: string, resource?: string);

    parseJID(jid: string): void;

    toString(unescape?: any): string;

    /**
     * Convenience method to distinguish users
     */
    bare(): JID;

    /**
     * Comparison function
     */
    equals(other: JID): boolean;

    /**
     * http://xmpp.org/rfcs/rfc6122.html#addressing-localpart
     */
    setLocal(local: string, escape?: any): void;

    getLocal(unescape?: any): string;

    /**
     * http://xmpp.org/rfcs/rfc6122.html#addressing-domain
     */
    setDomain(value: string): void;

    getDomain(): string;

    /**
     * http://xmpp.org/rfcs/rfc6122.html#addressing-resourcepart
     */
    setResource(value: string): void;

    getResource(): string;
}

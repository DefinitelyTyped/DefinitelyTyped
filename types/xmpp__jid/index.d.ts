// Type definitions for @xmpp/jid 0.0
// Project: https://github.com/node-xmpp/node-xmpp/
// Definitions by: PJakcson <https://github.com/PJakcson>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

export function createJID(local: string, domain: string, resource: string): JID;
export function equal(a: JID, b: JID): boolean;
export function is(a: any): boolean;

/**
 * Created by marcneumann on 17.02.17.
 */
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

/**
 * Created by marcneumann on 17.02.17.
 */

export declare class JID {
    local: string;
    domain: string;
    resource: string;

    constructor(local: string, domain?: string, resource?: string);

    parseJID(jid: string): void;

    toString(unescape?: any): string;

    /**
     * Convenience method to distinguish users
     **/
    bare(): JID;

    /**
     * Comparison function
     **/
    equals(other: JID): boolean;

    /**
     * http://xmpp.org/rfcs/rfc6122.html#addressing-localpart
     **/
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

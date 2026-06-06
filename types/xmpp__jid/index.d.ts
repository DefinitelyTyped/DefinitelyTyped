declare function jid(address: string): JID;
declare function jid(...args: ConstructorParameters<typeof JID>): JID;

export { detectEscape, escapeLocal, JID, jid, parse, unescapeLocal };

declare const j: typeof jid & {
    jid: typeof jid;
    JID: typeof JID;
    parse: typeof parse;
    equal: typeof equal;
    detectEscape: typeof detectEscape;
    escapeLocal: typeof escapeLocal;
    unescapeLocal: typeof unescapeLocal;
};

export default j;

type JidFn = typeof jid;

declare function equal(a: JID, b: JID): boolean;
declare function detectEscape(local?: string): boolean;
declare function escapeLocal(local: string): string;
declare function unescapeLocal(local: string): string;
declare function parse(s: string): JID;

declare class JID {
    local: string;
    domain: string;
    resource: string;

    constructor(local: string | null | undefined, domain: string, resource?: string | null);

    toString(unescape?: boolean): string;

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
    setLocal(local: string, escape?: boolean): void;

    getLocal(unescape?: boolean): string;

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

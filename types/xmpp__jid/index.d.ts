// Type definitions for @xmpp/jid 1.3
// Project: https://github.com/xmppjs/xmpp.js/tree/main/packages/jid
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = jid;

declare function jid(address: string): jid.JID;
declare function jid(...args: ConstructorParameters<typeof jid.JID>): jid.JID;

type JidFn = typeof jid;

declare namespace jid {
    const jid: JidFn;

    function equal(a: JID, b: JID): boolean;
    function detectEscape(local?: string): boolean;
    function escapeLocal(local: string): string;
    function unescapeLocal(local: string): string;
    function parse(s: string): JID;

    class JID {
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
}

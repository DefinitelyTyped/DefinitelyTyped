// Type definitions for @xmpp/jid 0.0
// Project: https://github.com/node-xmpp/node-xmpp/
// Definitions by: PJakcson <https://github.com/PJakcson>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

// TODO: Once TS2.3 is released,
// https://github.com/Microsoft/TypeScript/issues/14819 should be fixed.
// Then, upgrade this package's typescript version to 2.3 and
// Remove the `declare module` wrapper.
// tslint:disable-next-line no-single-declare-module
declare module "@xmpp/jid" {
    function createJID(local: string, domain: string, resource: string): JID;
    function equal(a: JID, b: JID): boolean;
    function is(a: any): boolean;

    /**
     * Created by marcneumann on 17.02.17.
     */
    class JID {
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
}

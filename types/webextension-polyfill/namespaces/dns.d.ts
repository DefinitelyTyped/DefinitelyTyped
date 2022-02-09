/**
 * Namespace: browser.dns
 * Generated from Mozilla sources. Do not manually edit!
 *
 * Asynchronous DNS API
 * Permissions: "dns"
 */
export namespace Dns {
    /**
     * An object encapsulating a DNS Record.
     */
    interface DNSRecord {
        /**
         * The canonical hostname for this record.  this value is empty if the record was not fetched with the 'canonical_name'
         * flag.
         * Optional.
         */
        canonicalName?: string;

        /**
         * Record retreived with TRR.
         */
        isTRR: string;

        addresses: string[];
    }

    type ResolveFlags = ResolveFlagsItemEnum[];

    type ResolveFlagsItemEnum =
        | "allow_name_collisions"
        | "bypass_cache"
        | "canonical_name"
        | "disable_ipv4"
        | "disable_ipv6"
        | "disable_trr"
        | "offline"
        | "priority_low"
        | "priority_medium"
        | "speculate";

    interface Static {
        /**
         * Resolves a hostname to a DNS record.
         *
         * @param hostname
         * @param flags Optional.
         */
        resolve(hostname: string, flags?: ResolveFlags): Promise<DNSRecord>;
    }
}

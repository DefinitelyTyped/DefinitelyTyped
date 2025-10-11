/// <reference types="node" />
import * as dns from 'node:dns';
import * as ipaddr from 'ipaddr.js';

export as namespace SPFCheck;
export = spfCheck;

declare namespace spfCheck {
    /** Result messages (human-readable) */
    const messages: {
        None: string;
        Neutral: string;
        Pass: string;
        Fail: string;
        SoftFail: string;
        TempError: string;
        PermError: string;
    }

    /** Result values (ex. {None: 'None', Neutral: 'Neutral', ...}) */
    const results: {
        None: 'None';
        Neutral: 'Neutral';
        Pass: 'Pass';
        Fail: 'Fail';
        SoftFail: 'SoftFail';
        TempError: 'TempError';
        PermError: 'PermError';
    }

    /** Possible SPF result string values */
    type SPFResultType =
        | typeof results.None
        | typeof results.Neutral
        | typeof results.Pass
        | typeof results.Fail
        | typeof results.SoftFail
        | typeof results.TempError
        | typeof results.PermError;
    
    /**
     * Result object returned from SPF checks
     */
    class SPFResult {
        /** A string value of results constant */
        result: SPFResultType;

        /** Description text */
        message: string;

        /** Last matched mechanism, or "default" if none */
        mechanism: string;

        /** List of all matched mechanisms (order from last to first) */
        matched: string[];

        constructor(result: SPFResultType, message?: string);
    }

    /** Options used when creating SPF instances */
    interface SPFOptions {
        /** Conforms to https://tools.ietf.org/html/rfc4408 */
        version?: number;

        /** Resolve all mechanisms before evaluating them */
        prefetch?: boolean;

        /** Hard limit on the number of DNS lookups */
        maxDNS?: number;

        /** Optional sender address */
        sender?: string;

        /** Optional domain */
        domain?: string;

        [key: string]: any;
    }

    /** Represents a single SPF mechanism in a parsed SPF record */
    interface Mechanism {
        /** The type of the mechanism (e.g., 'a', 'mx', 'ip4', 'ip6', 'include', 'all') */
        type: string;

        /** Optional value associated with the mechanism (e.g., domain, IP/CIDR) */
        value?: string;

        /** Optional prefix modifier (e.g., '+', '-', '~', '?') that affects result evaluation */
        prefix?: string;

        /** Optional human-readable description of the prefix, used in resutls */
        prefixdesc?: string;

        /**
         * Optional asynchronous function that resolves additional information for this mechanism.
         * Returns one of:
         * - `{ records: string[] }` for A/AAAA record lookups
         * - `{ exchanges: (dns.MxRecord & { records: string[] })[] }` for MX lookups
         * - `{ includes: Mechanism[] }` for include mechanisms
         */
        resolve?: () => Promise<
            { records: string[] } |
            { exchanges: (dns.MxRecord & { records: string[] })[] } |
            { includes: Mechanism[] }
        >;

        /** Parsed IP address and CIDR length for ip4/ip6 mechanisms */
        address?: [ipaddr.IPv4 | ipaddr.IPv6, number];

        /** Resolved A/AAAA records for this mechanism */
        records?: string[];

        /** Resolved MX records with their corresponding addresses */
        exchanges?: (dns.MxRecord & { records: string[] })[];

        /** Nested mechanisms for include statements */
        includes?: Mechanism[];

        /** Evaluation result of this mechanism after SPF check */
        evaluated?: SPFResult;
    }

    /**
     * SPF class for programmatic SPF checks
     */
    class SPF {
        domain: string;
        sender: string;
        warnings: string[];
        queryDNSCount: number;
        options: Required<SPFOptions>;

        constructor(domain?: string, sender?: string, options?: SPFOptions);

        /** Resolve MX records */
        resolveMX(hostname: string, rrtype: 'MX'): Promise<(dns.MxRecord & { records: string[] })[]>;

        /** Resolve DNS records */
        resolveDNS(hostname: string, rrtype: 'TXT' | 'A' | 'AAAA', lookupLimit?: boolean): Promise<string[]>;
        resolveDNS(hostname: string, rrtype: 'MX', lookupLimit?: boolean): Promise<(dns.MxRecord & { records: string[] })[]>;

        /** Resolve SPF records */
        resolveSPF(hostname: string, rrtype: string): Promise<Mechanism[]>;

        /** Check an IP against SPF */
        check(ip: string): Promise<SPFResult>;

        /** Evaluate SPF mechanisms manually */
        evaluate(mechanisms: Mechanism[], addr: ipaddr.IPv4 | ipaddr.IPv6): Promise<SPFResult>;

        /** Match a single mechanism */
        match(mechanism: Mechanism, addr: ipaddr.IPv4 | ipaddr.IPv6): boolean;
    }
}

/**
 * Run SPF validation check.
 * @param ip IP address of the client
 * @param domain Mail domain
 * @param sender Optional sender address
 * @param options SPF options
 * @returns SPF result string (e.g. 'Pass', 'Fail')
 */
declare function spfCheck(
    ip: string,
    domain?: string,
    sender?: string,
    options?: spfCheck.SPFOptions
): Promise<spfCheck.SPFResultType>;
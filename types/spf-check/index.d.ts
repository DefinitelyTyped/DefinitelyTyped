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
        resolveMX(hostname: string, rrtype: string): Promise<any[]>;

        /** Resolve DNS records */
        resolveDNS(hostname: string, rrtype: string, lookupLimit?: boolean): Promise<any[]>;

        /** Resolve SPF records */
        resolveSPF(hostname: string, rrtype: string): Promise<any[]>;

        /** Check an IP against SPF */
        check(ip: string): Promise<SPFResult>;

        /** Evaluate SPF mechanisms manually */
        evaluate(mechanisms: any[], addr: any): Promise<SPFResult>;

        /** Match a single mechanism */
        match(mechanism: any, addr: any): boolean;
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
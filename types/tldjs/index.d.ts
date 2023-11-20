export declare function tldExists(host: string): boolean;

export declare function getDomain(host: string): string | null;

export declare function getSubdomain(host: string): string | null;

export declare function getPublicSuffix(host: string): string | null;

/**
 * @deprecated "isValid" is deprecated, please use "isValidHostname" instead.
 */
export declare function isValid(host: string): boolean;

export declare function isValidHostname(host: string): boolean;

export declare function extractHostname(host: string): string | null;

export declare function parse(host: string): {
    hostname: ReturnType<typeof extractHostname>;
    isValid: ReturnType<typeof isValid>;
    isIp: boolean;
    tldExists: ReturnType<typeof tldExists>;
    publicSuffix: ReturnType<typeof getPublicSuffix>;
    domain: ReturnType<typeof getDomain>;
    subdomain: ReturnType<typeof getSubdomain>;
};

export declare function fromUserSettings(options: {
    rules?: any;
    validHosts?: string[] | undefined;
    extractHostname?: ReturnType<typeof extractHostname> | undefined;
}): {
    extractHostname: typeof extractHostname;
    isValidHostname: typeof isValidHostname;
    isValid: typeof isValid;
    parse: typeof parse;
    tldExists: typeof tldExists;
    getPublicSuffix: typeof getPublicSuffix;
    getDomain: typeof getDomain;
    getSubdomain: typeof getSubdomain;
    fromUserSettings: typeof fromUserSettings;
};

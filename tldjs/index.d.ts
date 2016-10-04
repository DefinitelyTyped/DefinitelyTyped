// Type definitions for tldjs v1.7
// Project: https://github.com/oncletom/tld.js
// Definitions by: Joshua DeVinney <https://github.com/geoffreak>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare interface tldjs {
    /**
     * tld.js methods getDomain and getSubdomain are designed to work only with valid TLDs.
     * This way, you can trust what a domain is. Unfortunately, localhost is a valid hostname but it is not a TLD.
     * Optionally use validHosts to add it. `tld.validHosts = ['localhost'];`
     */
    validHosts: string[];

    /**
     * Checks if the TLD is valid for a given host.
     * @param host The TLD/host/url to check
     * @return {boolean}
     */
    tldExists(host: string): boolean;

    /**
     * Returns the fully qualified domain from a host string.
     * @param host The host/url to check
     * @return {string|null} a domain string if any, otherwise null
     */
    getDomain(host: string): string | null;

    /**
     * Returns the complete subdomain for a given host.
     * @param host The host/url to check
     * @return {string|null} a subdomain string if any, blank string if subdomain is empty, otherwise null
     */
    getSubdomain(host: string): string | null;

    /**
     * Returns the public suffix (including exact matches)
     * @param host The host/url to check
     * @return {string|null} a public suffix string if any, otherwise null
     */
    getPublicSuffix(host: string): string | null;

    /**
     * Checking if a host string is valid
     * It's usually a preliminary check before trying to use getDomain or anything else
     * Beware: it does not check if the TLD exists.
     * @param host The host/url to check
     * @return {boolean}
     */
    isValid(host: string): string | null;
}

declare var tldjs: tldjs;
export = tldjs;

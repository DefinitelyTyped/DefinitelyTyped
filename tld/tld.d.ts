// Type definitions for tld v1.6.2
// Project: https://github.com/oncletom/tld.js
// Definitions by: Syu Kato <https://github.com/ukyo>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

interface TldStatic {
    /**
     * Checks if the TLD exists for a given host
     *
     * @param host
     */
    tldExists(host: string): boolean;
    
    /**
     * Returns the public suffix (including exact matches)
     *
     * @param host
     */
    getPublicSuffix(host: string): string;
    
    /**
     * Detects the domain based on rules and upon and a host string
     * 
     * @param host
     */
    getDomain(host: string): string;
    
    /**
     * Returns the subdomain of a host string
     * 
     * @param host
     */
    getSubdomain(host: string): string;
    
    /**
     * Checking if a host string is valid
     * It's usually a preliminary check before trying to use getDomain or anything else
     *
     * Beware: it does not check if the TLD exists.
     * 
     * @param host
     */
    isValid(host: string): boolean;
    
    validHosts: Array<string>;
}

declare module 'tldjs' {
  export = tldjs;
}
declare var tldjs: TldStatic;
export as namespace woothee;

/**
 * The Woothee parse result object.
 */
interface WootheeParseResult {
    /**
     * labels of user terminal type, one of 'pc', 'smartphone', 'mobilephone', 'appliance', 'crawler' or 'misc' (or 'UNKNOWN').
     */
    category: string;
    /**
     * the name of browser, like 'Internet Explorer', 'Firefox', 'GoogleBot'.
     */
    name: string;
    /**
     * version string, like '8.0' for IE, '9.0.1' for Firefix, '0.2.149.27' for Chrome, and so on.
     */
    version: string;
    /**
     * ex: 'Windows 7', 'Mac OSX', 'iPhone', 'iPad', 'Android'.
     * This field used to indicate cellar phone carrier for category 'mobilephone'.
     */
    os: string;
    /**
     * optional field, shows browser vendor
     */
    vendor: string;
    /**
     * optional field, shows version of operating systems
     */
    os_version: string;
}

/**
 * The Woothee object.
 */
interface Woothee {
    /**
     * Parsing user-agent.
     */
    parse(uaString: string): WootheeParseResult;
    /**
     * Finding crawler.
     */
    isCrawler(ua: string): boolean;
    /**
     * Package version.
     */
    VERSION: string;
}

declare const woothee: Woothee;

export = woothee;

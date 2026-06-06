declare class Matcher {
    /**
     * Constructs a matcher for a list of CIDR ranges
     *
     * @param cidrRanges - list of IPv4 & IPv6 CIDR ranges
     */
    constructor(cidrRanges?: readonly string[]);

    /**
     * Does the CIDR ranges include the IP address
     *
     * @param ipAddress - ip address to check
     * @returns whether the IP address is in the range
     */
    contains(ipAddress: string): boolean;

    /**
     * Does the CIDR ranges includes any of the IP addresses
     *
     * @param ipAddresses - ip addresses to check
     * @returns whether any of the IP addresses are in the range
     */
    containsAny(ipAddresses: string[]): boolean;

    /**
     * Adds a CIDR range to the matcher
     *
     * @param cidr - CIDR range to add
     */
    addNetworkClass(cidr: string): void;
}

export = Matcher;

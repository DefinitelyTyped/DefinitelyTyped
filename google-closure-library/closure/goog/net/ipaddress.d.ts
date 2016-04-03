declare module goog {
    function require(name: 'goog.net.IpAddress'): typeof goog.net.IpAddress;
    function require(name: 'goog.net.Ipv4Address'): typeof goog.net.Ipv4Address;
    function require(name: 'goog.net.Ipv6Address'): typeof goog.net.Ipv6Address;
}

declare module goog.net {

    /**
     * Abstract class defining an IP Address.
     *
     * Please use goog.net.IpAddress static methods or
     * goog.net.Ipv4Address/Ipv6Address classes.
     *
     * @param {!goog.math.Integer} address The Ip Address.
     * @param {number} version The version number (4, 6).
     * @constructor
     */
    class IpAddress {
        constructor(address: goog.math.Integer, version: number);
        
        /**
         * @return {number} The IP Address version.
         */
        getVersion(): number;
        
        /**
         * @param {!goog.net.IpAddress} other The other IP Address.
         * @return {boolean} true if the IP Addresses are equal.
         */
        equals(other: goog.net.IpAddress): boolean;
        
        /**
         * @return {!goog.math.Integer} The IP Address, as an Integer.
         */
        toInteger(): goog.math.Integer;
        
        /**
         * @return {string} The IP Address, as an URI string following RFC 3986.
         */
        toUriString(): string;
        
        /**
         * @return {string} The IP Address, as a string.
         * @override
         */
        toString(): string;
        
        /**
         * Parses an IP Address in a string.
         * If the string is malformed, the function will simply return null
         * instead of raising an exception.
         *
         * @param {string} address The IP Address.
         * @see {goog.net.Ipv4Address}
         * @see {goog.net.Ipv6Address}
         * @return {goog.net.IpAddress} The IP Address or null.
         */
        static fromString(address: string): goog.net.IpAddress;
        
        /**
         * Tries to parse a string represented as a host portion of an URI.
         * See RFC 3986 for more details on IPv6 addresses inside URI.
         * If the string is malformed, the function will simply return null
         * instead of raising an exception.
         *
         * @param {string} address A RFC 3986 encoded IP address.
         * @see {goog.net.Ipv4Address}
         * @see {goog.net.Ipv6Address}
         * @return {goog.net.IpAddress} The IP Address.
         */
        static fromUriString(address: string): goog.net.IpAddress;
    }

    /**
     * Takes a string or a number and returns a IPv4 Address.
     *
     * This constructor accepts strings and instance of goog.math.Integer.
     * If you pass a goog.math.Integer, make sure that its sign is set to positive.
     * @param {(string|!goog.math.Integer)} address The address to store.
     * @extends {goog.net.IpAddress}
     * @constructor
     * @final
     */
    class Ipv4Address extends goog.net.IpAddress {
        constructor(address: string|goog.math.Integer);
        
        /**
         * The Maximum length for a netmask (aka, the number of bits for IPv4).
         * @type {number}
         * @const
         */
        static MAX_NETMASK_LENGTH: number;
    }

    /**
     * Takes a string or a number and returns an IPv6 Address.
     *
     * This constructor accepts strings and instance of goog.math.Integer.
     * If you pass a goog.math.Integer, make sure that its sign is set to positive.
     * @param {(string|!goog.math.Integer)} address The address to store.
     * @constructor
     * @extends {goog.net.IpAddress}
     * @final
     */
    class Ipv6Address extends goog.net.IpAddress {
        constructor(address: string|goog.math.Integer);
        
        /**
         * The Maximum length for a netmask (aka, the number of bits for IPv6).
         * @type {number}
         * @const
         */
        static MAX_NETMASK_LENGTH: number;
        
        /**
         * @return {boolean} true if the IPv6 contains a mapped IPv4.
         */
        isMappedIpv4Address(): boolean;
        
        /**
         * Will return the mapped IPv4 address in this IPv6 address.
         * @return {goog.net.Ipv4Address} an IPv4 or null.
         */
        getMappedIpv4Address(): goog.net.Ipv4Address;
    }
}

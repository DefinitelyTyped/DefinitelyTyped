// Type definitions for bogon 1.0
// Project: https://github.com/mafintosh/bogon
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = bogon;

/**
 * Check if an IP is a bogon.
 *
 * @param ip The IP to check
 *
 * @example
 * import bogon = require('bogon');
 *
 * console.log(bogon('192.168.0.1')); // true
 * console.log(bogon('8.8.8.8')); // false
 */
declare function bogon(ip: string): boolean;

declare namespace bogon {
    /**
     * Check if an IP is a bogon.
     *
     * @param ip The IP to check
     *
     * @example
     * import bogon = require('bogon');
     *
     * console.log(bogon.isBogon('192.168.0.1')); // true
     * console.log(bogon.isBogon('8.8.8.8')); // false
     */
    const isBogon: typeof bogon;

    /**
     * Detect if a bogon IP is a private IP address on a local network.
     *
     * @param ip The IP to check
     *
     * @example
     * import bogon = require('bogon');
     *
     * console.log(bogon.isPrivate('192.168.0.1')) // true
     * console.log(bogon('224.0.1.1')) // true
     * console.log(bogon.isPrivate('224.0.1.1')) // false
     */
    function isPrivate(ip: string): boolean;
}

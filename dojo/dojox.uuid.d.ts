// Type definitions for Dojo v1.9
// Project: http://dojotoolkit.org
// Definitions by: Michael Van Sickle <https://github.com/vansimke>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module dojox {

    /**
     * Permalink: http://dojotoolkit.org/api/1.9/dojox/uuid.html
     *
     * Deprecated.  Should require dojox/uuid modules directly rather than trying to access them through
     * this module.
     * 
     */
    interface uuid {
    }
    module uuid {
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/uuid/generateRandomUuid.html
         *
         * This function generates random UUIDs, meaning "version 4" UUIDs.
         * A typical generated value would be something like this:
         * "3b12f1df-5232-4804-897e-917bf397618a"
         * 
         * For more information about random UUIDs, see sections 4.4 and
         * 4.5 of RFC 4122: http://tools.ietf.org/html/rfc4122#section-4.4
         * 
         * This generator function is designed to be small and fast,
         * but not necessarily good.
         * 
         * Small: This generator has a small footprint. Once comments are
         * stripped, it's only about 25 lines of code, and it doesn't
         * dojo.require() any other modules.
         * 
         * Fast: This generator can generate lots of new UUIDs fairly quickly
         * (at least, more quickly than the other dojo UUID generators).
         * 
         * Not necessarily good: We use Math.random() as our source
         * of randomness, which may or may not provide much randomness.
         * 
         */
        interface generateRandomUuid { (): void }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/uuid/generateTimeBasedUuid.html
         *
         * This function generates time-based UUIDs, meaning "version 1" UUIDs.
         * For more info, see
         * http://www.webdav.org/specs/draft-leach-uuids-guids-01.txt
         * http://www.infonuovo.com/dma/csdocs/sketch/instidid.htm
         * http://kruithof.xs4all.nl/uuid/uuidgen
         * http://www.opengroup.org/onlinepubs/009629399/apdxa.htm#tagcjh_20
         * http://jakarta.apache.org/commons/sandbox/id/apidocs/org/apache/commons/id/uuid/clock/Clock.html
         * 
         * @param node       OptionalA 12-character hex string representing either a pseudo-node orhardware-node (an IEEE 802.3 network node).  A hardware-nodewill be something like "017bf397618a", always with the first bitbeing 0.  A pseudo-node will be something like "f17bf397618a",always with the first bit being 1.     
         */
        interface generateTimeBasedUuid { (node?: String): void }
        module generateTimeBasedUuid {
            /**
             * Returns the 'node' value that will be included in generated UUIDs.
             * 
             */
            interface getNode { (): void }
            /**
             * 
             * @param node               Optional            
             */
            interface isValidNode { (node: String): void }
            /**
             * Sets the 'node' value that will be included in generated UUIDs.
             * 
             * @param node               Optional            
             */
            interface setNode { (node: String): void }
        }

        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/uuid/Uuid.html
         *
         * This is the constructor for the Uuid class.  The Uuid class offers
         * methods for inspecting existing UUIDs.
         * 
         * @param input       Optional    
         */
        interface Uuid { (input?: String): void }
        module Uuid {
            /**
             * Compares this UUID to another UUID, and returns 0, 1, or -1.
             * This implementation is intended to match the sample implementation
             * in IETF RFC 4122: http://www.ietf.org/rfc/rfc4122.txt
             * 
             * @param otherUuid             
             */
            interface compare { (otherUuid: dojox.uuid.Uuid): void }
            /**
             * Given two UUIDs to compare, this method returns 0, 1, or -1.
             * This method is designed to be used by sorting routines, like the
             * JavaScript built-in Array sort() method. This implementation is
             * intended to match the sample implementation in IETF RFC 4122:
             * http://www.ietf.org/rfc/rfc4122.txt
             * 
             * @param uuidOne             
             * @param uuidTwo             
             */
            interface compare { (uuidOne: dojox.uuid.Uuid, uuidTwo: dojox.uuid.Uuid): void }
            /**
             * Returns the default generator.  See setGenerator().
             * 
             */
            interface getGenerator { (): void }
            /**
             * If this is a version 1 UUID (a time-based UUID), getNode() returns a
             * 12-character string with the "node" or "pseudonode" portion of the UUID,
             * which is the rightmost 12 characters.
             * 
             */
            interface getNode { (): void }
            /**
             * If this is a version 1 UUID (a time-based UUID), this method returns
             * the timestamp value encoded in the UUID.  The caller can ask for the
             * timestamp to be returned either as a JavaScript Date object or as a
             * 15-character string of hex digits.
             * 
             * @param returnType               Optional            
             */
            interface getTimestamp { (returnType: String): any }
            /**
             * Returns a variant code that indicates what type of UUID this is.
             * Returns one of the enumerated dojox.uuid.variant values.
             * 
             */
            interface getVariant { (): void }
            /**
             * Returns a version number that indicates what type of UUID this is.
             * Returns one of the enumerated dojox.uuid.version values.
             * 
             */
            interface getVersion { (): void }
            /**
             * Returns true if this UUID is equal to the otherUuid, or false otherwise.
             * 
             * @param otherUuid             
             */
            interface isEqual { (otherUuid: dojox.uuid.Uuid): void }
            /**
             * Returns true if the UUID was initialized with a valid value.
             * 
             */
            interface isValid { (): void }
            /**
             * Sets the default generator, which will be used by the
             * "new dojox.uuid.Uuid()" constructor if no parameters
             * are passed in.
             * 
             * @param generator               Optional            
             */
            interface setGenerator { (generator: Function): void }
            /**
             * This method returns a standard 36-character string representing
             * the UUID, such as "3b12f1df-5232-4804-897e-917bf397618a".
             * 
             */
            interface toString { (): void }
        }

        module _base {
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/uuid/_base.variant.html
             *
             * 
             */
            interface variant {
                /**
                 * 
                 */
                DCE: string;
                /**
                 * 
                 */
                MICROSOFT: string;
                /**
                 * 
                 */
                NCS: string;
                /**
                 * 
                 */
                UNKNOWN: string;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/uuid/_base.version.html
             *
             * 
             */
            interface version {
                /**
                 * 
                 */
                DCE_SECURITY: number;
                /**
                 * 
                 */
                NAME_BASED_MD5: number;
                /**
                 * 
                 */
                NAME_BASED_SHA1: number;
                /**
                 * 
                 */
                RANDOM: number;
                /**
                 * 
                 */
                TIME_BASED: number;
                /**
                 * 
                 */
                UNKNOWN: number;
            }
        }

    }

}

declare module "dojox/uuid" {
    var exp: dojox.uuid
    export=exp;
}
declare module "dojox/uuid/generateRandomUuid" {
    var exp: dojox.uuid.generateRandomUuid
    export=exp;
}
declare module "dojox/uuid/generateTimeBasedUuid" {
    var exp: dojox.uuid.generateTimeBasedUuid
    export=exp;
}
declare module "dojox/uuid/Uuid" {
    var exp: dojox.uuid.Uuid
    export=exp;
}
declare module "dojox/uuid/_base.variant" {
    var exp: dojox.uuid._base.variant
    export=exp;
}
declare module "dojox/uuid/_base.version" {
    var exp: dojox.uuid._base.version
    export=exp;
}

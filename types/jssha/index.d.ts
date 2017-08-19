// Type definitions for jsSHA
// Project: https://github.com/Caligatio/jsSHA
// Definitions by: David Li <https://github.com/randombk>, Tobias Kahlert <https://github.com/SrTobi>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


declare namespace jsSHA {

    export interface EncodingOptions {
        encoding? : string;
    }

    export interface Options extends EncodingOptions {
        numRounds? : number;
    }

    export interface OutputFormatOptions {
        outputUpper? : boolean;
        b64Pad? : string;
    }

    export interface jsSHA {
        /**
         * jsSHA is the workhorse of the library.  Instantiate it with the string to
         * be hashed as the parameter
         *
         * @param {string} variant The desired SHA variant (SHA-1, SHA-224, SHA-256,
         *   SHA-384, or SHA-512)
         * @param {string} inputFormat The format of srcString: HEX, TEXT, B64, or BYTES
         * @param {{encoding: (string|undefined), numRounds: (string|undefined)}=}
         *   options Optional values
         */
        new (variant:string, inputFormat:string, options?:Options):jsSHA;

        /**
		 * Sets the HMAC key for an eventual getHMAC call.  Must be called
		 * immediately after jsSHA object instantiation
		 *
		 * @param {string} key The key used to calculate the HMAC
		 * @param {string} inputFormat The format of key, HEX, TEXT, B64, or BYTES
		 * @param {{encoding : (string|undefined)}=} encodingOpts Associative array
		 *   of input format options
		 */
        setHMACKey(key:string, inputFormat:string, encodingOpts?:EncodingOptions):void;

        /**
		 * Takes strString and hashes as many blocks as possible.  Stores the
		 * rest for either a future update or getHash call.
		 *
		 * @param {string} srcString The string to be hashed
		 */
        update(srcString:string):void;


        /**
		 * Returns the desired SHA hash of the string specified at instantiation
		 * using the specified parameters
		 *
		 * @param {string} format The desired output formatting (B64, HEX, or BYTES)
		 * @param {{outputUpper : (boolean|undefined), b64Pad : (string|undefined)}=}
		 *   outputFormatOpts Hash list of output formatting options
		 * @return {string} The string representation of the hash in the format
		 *   specified
		 */
        getHash(format:string, outputFormatOpts?:OutputFormatOptions):string;

        /**
		 * Returns the the HMAC in the specified format using the key given by
		 * a previous setHMACKey call.
		 *
		 * @param {string} format The desired output formatting
		 *   (B64, HEX, or BYTES)
		 * @param {{outputUpper : (boolean|undefined), b64Pad : (string|undefined)}=}
		 *   outputFormatOpts associative array of output formatting options
		 * @return {string} The string representation of the hash in the format
		 *   specified
		 */
        getHMAC(format:string, outputFormatOpts?:OutputFormatOptions):string;
    }
}

declare var jsSHA: jsSHA.jsSHA;
export = jsSHA;
export as namespace jsSHA;

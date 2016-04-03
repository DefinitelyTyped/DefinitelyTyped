declare module goog {
    function require(name: 'goog.format.InternationalizedEmailAddress'): typeof goog.format.InternationalizedEmailAddress;
}

declare module goog.format {

    /**
     * Formats an email address string for display, and allows for extraction of
     * the individual components of the address.
     * @param {string=} opt_address The email address.
     * @param {string=} opt_name The name associated with the email address.
     * @constructor
     * @extends {goog.format.EmailAddress}
     */
    class InternationalizedEmailAddress extends goog.format.EmailAddress {
        constructor(opt_address?: string, opt_name?: string);
        
        /**
         * Checks if the provided string is a valid local part (part before the '@') of
         * an EAI email address.
         * @param {string} str The local part to check.
         * @return {boolean} Whether the provided string is a valid local part.
         */
        static isValidLocalPartSpec(str: string): boolean;
        
        /**
         * Checks if the provided string is a valid domain part (part after the '@') of
         * an EAI email address.
         * @param {string} str The domain part to check.
         * @return {boolean} Whether the provided string is a valid domain part.
         */
        static isValidDomainPartSpec(str: string): boolean;
        
        /**
         * Checks if the provided string is a valid email address. Supports both
         * simple email addresses (address specs) and addresses that contain display
         * names.
         * @param {string} str The email address to check.
         * @return {boolean} Whether the provided string is a valid address.
         */
        static isValidAddress(str: string): boolean;
        
        /**
         * Checks if the provided string is a valid address spec (local@domain.com).
         * @param {string} str The email address to check.
         * @return {boolean} Whether the provided string is a valid address spec.
         */
        static isValidAddrSpec(str: string): boolean;
        
        /**
         * Parses a string containing email addresses of the form
         * "name" &lt;address&gt; into an array of email addresses.
         * @param {string} str The address list.
         * @return {!Array<!goog.format.EmailAddress>} The parsed emails.
         */
        static parseList(str: string): Array<goog.format.EmailAddress>;
        
        /**
         * Parses an email address of the form "name" &lt;address&gt; into
         * an email address.
         * @param {string} addr The address string.
         * @return {!goog.format.EmailAddress} The parsed address.
         */
        static parse(addr: string): goog.format.EmailAddress;
        
        /**
         * @param {string} ch The character to test.
         * @return {boolean} Whether the provided character is an address separator.
         */
        static isAddressSeparator(ch: string): boolean;
        
        /**
         * Return the address in a standard format:
         *  - remove extra spaces.
         *  - Surround name with quotes if it contains special characters.
         * @return {string} The cleaned address.
         * @override
         */
        toString(): string;
    }
}

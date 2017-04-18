declare module goog {
    function require(name: 'goog.format.EmailAddress'): typeof goog.format.EmailAddress;
}

declare module goog.format {

    /**
     * Formats an email address string for display, and allows for extraction of
     * the individual components of the address.
     * @param {string=} opt_address The email address.
     * @param {string=} opt_name The name associated with the email address.
     * @constructor
     */
    class EmailAddress {
        constructor(opt_address?: string, opt_name?: string);
        
        /**
         * Match string for characters that require display names to be quoted and are
         * not address separators.
         * @type {string}
         * @const
         * @package
         */
        static SPECIAL_CHARS: string;
        
        /**
         * Get the name associated with the email address.
         * @return {string} The name or personal portion of the address.
         * @final
         */
        getName(): string;
        
        /**
         * Get the email address.
         * @return {string} The email address.
         * @final
         */
        getAddress(): string;
        
        /**
         * Set the name associated with the email address.
         * @param {string} name The name to associate.
         * @final
         */
        setName(name: string): void;
        
        /**
         * Set the email address.
         * @param {string} address The email address.
         * @final
         */
        setAddress(address: string): void;
        
        /**
         * Return the address in a standard format:
         *  - remove extra spaces.
         *  - Surround name with quotes if it contains special characters.
         * @return {string} The cleaned address.
         * @override
         */
        toString(): string;
        
        /**
         * Return the address in a standard format:
         *  - remove extra spaces.
         *  - Surround name with quotes if it contains special characters.
         * @param {string} specialChars String that contains the characters that require
         *  the display name to be quoted.
         * @return {string} The cleaned address.
         * @protected
         */
        toStringInternal(specialChars: string): string;
        
        /**
         * Determines is the current object is a valid email address.
         * @return {boolean} Whether the email address is valid.
         */
        isValid(): boolean;
        
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
         * Checks if the provided string is a valid local part (part before the '@') of
         * an email address.
         * @param {string} str The local part to check.
         * @return {boolean} Whether the provided string is a valid local part.
         */
        static isValidLocalPartSpec(str: string): boolean;
        
        /**
         * Checks if the provided string is a valid domain part (part after the '@') of
         * an email address.
         * @param {string} str The domain part to check.
         * @return {boolean} Whether the provided string is a valid domain part.
         */
        static isValidDomainPartSpec(str: string): boolean;
        
        /**
         * Parses an email address of the form "name" &lt;address&gt; ("name" is
         * optional) into an email address.
         * @param {string} addr The address string.
         * @param {function(new: goog.format.EmailAddress, string=,string=)} ctor
         *     EmailAddress constructor to instantiate the output address.
         * @return {!goog.format.EmailAddress} The parsed address.
         * @protected
         */
        static parseInternal(addr: string, ctor: (arg0?: string, arg1?: string) => any): goog.format.EmailAddress;
        
        /**
         * Parses an email address of the form "name" &lt;address&gt; into
         * an email address.
         * @param {string} addr The address string.
         * @return {!goog.format.EmailAddress} The parsed address.
         */
        static parse(addr: string): goog.format.EmailAddress;
        
        /**
         * Parse a string containing email addresses of the form
         * "name" &lt;address&gt; into an array of email addresses.
         * @param {string} str The address list.
         * @param {function(string)} parser The parser to employ.
         * @param {function(string):boolean} separatorChecker Accepts a character and
         *    returns whether it should be considered an address separator.
         * @return {!Array<!goog.format.EmailAddress>} The parsed emails.
         * @protected
         */
        static parseListInternal(str: string, parser: (arg0: string) => any, separatorChecker: (arg0: string) => boolean): Array<goog.format.EmailAddress>;
        
        /**
         * Parses a string containing email addresses of the form
         * "name" &lt;address&gt; into an array of email addresses.
         * @param {string} str The address list.
         * @return {!Array<!goog.format.EmailAddress>} The parsed emails.
         */
        static parseList(str: string): Array<goog.format.EmailAddress>;
        
        /**
         * @param {string} ch The character to test.
         * @return {boolean} Whether the provided character is an address separator.
         */
        static isAddressSeparator(ch: string): boolean;
    }
}

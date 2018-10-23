declare namespace pc {

    /**
     * @namespace
     * @name pc.string
     * @description Extended String API
     */
    namespace string {

        /**
         * @name pc.string.ASCII_LOWERCASE
         * @description All lowercase letters
         * @type String
         */
        const ASCII_LOWERCASE = "abcdefghijklmnopqrstuvwxyz";

        /**
         * @name pc.string.ASCII_UPPERCASE
         * @description All uppercase letters
         * @type String
         */
        const ASCII_UPPERCASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

        /**
         * @name pc.string.ASCII_LETTERS
         * @description All ASCII letters
         * @type String
         */
        const ASCII_LETTERS = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

        /**
         * @function
         * @name pc.string.format
         * @description Return a string with {n} replaced with the n-th argument
         * @param {String} s The string to format
         * @param {Object} [arguments] All other arguments are substituted into the string
         * @returns {String} The formatted string
         * @example
         * var s = pc.string.format("Hello {0}", "world");
         * console.log(s); // Prints "Hello world"
         */
        function format(s: string, arguments?: any): string;

        /**
        * @function
        * @name pc.string.toBool
        * @description Convert a string value to a boolean. In non-strict mode (the default), 'true' is converted to true, all other values
        * are converted to false. In strict mode, 'true' is converted to true, 'false' is converted to false, all other values will throw
        * an Exception.
        * @param {String} s The string to convert
        * @param {Boolean} [strict] In strict mode an Exception is thrown if s is not an accepted string value. Defaults to false
        * @returns {Boolean} The converted value
        */
        function toBool(s: string, strict?: boolean): boolean;
    }
}

declare namespace lang {
    /**
     * String and its utility class
     * This class provides some static utility methods for string.
     *
     * __STRING TYPE CHECKERS__
     *
     * - `KJUR.lang.String.isInteger` - check whether argument is an integer
     * - `KJUR.lang.String.isHex` - check whether argument is a hexadecimal string
     * - `KJUR.lang.String.isBase64` - check whether argument is a Base64 encoded string
     * - `KJUR.lang.String.isBase64URL` - check whether argument is a Base64URL encoded string
     * - `KJUR.lang.String.isIntegerArray` - check whether argument is an array of integers
     */
    namespace String {
        /**
         * check whether a string is an integer string or not
         * @param s input string
         * @return true if a string "s" is an integer string otherwise false
         * @example
         * KJUR.lang.String.isInteger("12345") → true
         * KJUR.lang.String.isInteger("123ab") → false
         */
        function isInteger(s: string): boolean;

        /**
         * check whether a string is an hexadecimal string or not
         * @param s input string
         * @return true if a string "s" is an hexadecimal string otherwise false
         * @example
         * KJUR.lang.String.isHex("1234") → true
         * KJUR.lang.String.isHex("12ab") → true
         * KJUR.lang.String.isHex("12AB") → true
         * KJUR.lang.String.isHex("12ZY") → false
         * KJUR.lang.String.isHex("121") → false -- odd length
         */
        function isHex(s: string): boolean;

        /**
         * check whether a string is a base64 encoded string or not
         * Input string can conclude new lines or space characters.
         * @param s input string
         * @return true if a string "s" is a base64 encoded string otherwise false
         * @example
         * KJUR.lang.String.isBase64("YWE=") → true
         * KJUR.lang.String.isBase64("YW_=") → false
         * KJUR.lang.String.isBase64("YWE") → false -- length shall be multiples of 4
         */
        function isBase64(s: string): boolean;

        /**
         * check whether a string is a base64url encoded string or not
         * Input string can conclude new lines or space characters.
         * @param s input string
         * @return true if a string "s" is a base64url encoded string otherwise false
         * @example
         * KJUR.lang.String.isBase64URL("YWE") → true
         * KJUR.lang.String.isBase64URL("YW-") → true
         * KJUR.lang.String.isBase64URL("YW+") → false
         */
        function isBase64URL(s: string): boolean;

        /**
         * check whether a string is a string of integer array or not
         * Input string can conclude new lines or space characters.
         * @param s input string
         * @return true if a string "s" is a string of integer array otherwise false
         * @example
         * KJUR.lang.String.isIntegerArray("[1,2,3]") → true
         * KJUR.lang.String.isIntegerArray("  [1, 2, 3  ] ") → true
         * KJUR.lang.String.isIntegerArray("[a,2]") → false
         */
        function isIntegerArray(s: string): boolean;
    }
}

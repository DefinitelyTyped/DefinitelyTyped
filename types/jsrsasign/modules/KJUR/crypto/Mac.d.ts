declare namespace jsrsasign.KJUR.crypto {
    /**
     * Mac(Message Authentication Code) class which is very similar to java.security.Mac class
     * @param params parameters for constructor
     * @description
     *
     * Currently this supports following algorithm and providers combination:
     * - hmacmd5 - cryptojs
     * - hmacsha1 - cryptojs
     * - hmacsha224 - cryptojs
     * - hmacsha256 - cryptojs
     * - hmacsha384 - cryptojs
     * - hmacsha512 - cryptojs
     * NOTE: HmacSHA224 and HmacSHA384 issue was fixed since jsrsasign 4.1.4.
     * Please use 'ext/cryptojs-312-core-fix*.js' instead of 'core.js' of original CryptoJS
     * to avoid those issue.
     *
     * NOTE2: Hmac signature bug was fixed in jsrsasign 4.9.0 by providing CryptoJS
     * bug workaround.
     *
     * Please see `KJUR.crypto.Mac.setPassword` how to provide password
     * in various ways in detail.
     * @example
     * var mac = new KJUR.crypto.Mac({alg: "HmacSHA1", "pass": "pass"});
     * mac.updateString('aaa')
     * var macHex = mac.doFinal()
     *
     * // other password representation
     * var mac = new KJUR.crypto.Mac({alg: "HmacSHA256", "pass": {"hex":  "6161"}});
     * var mac = new KJUR.crypto.Mac({alg: "HmacSHA256", "pass": {"utf8": "aa"}});
     * var mac = new KJUR.crypto.Mac({alg: "HmacSHA256", "pass": {"rstr": "\x61\x61"}});
     * var mac = new KJUR.crypto.Mac({alg: "HmacSHA256", "pass": {"b64":  "Mi02/+...a=="}});
     * var mac = new KJUR.crypto.Mac({alg: "HmacSHA256", "pass": {"b64u": "Mi02_-...a"}});
     */
    class Mac {
        constructor(params: { alg: string; pass: { [type: string]: string } });

        setAlgAndProvider(alg: string, prov: string): void;

        /**
         * update digest by specified string
         * @param str string to update
         * @example
         * mac.updateString('New York');
         */
        updateString(str: string): void;

        /**
         * update digest by specified hexadecimal string
         * @param hex hexadecimal string to update
         * @example
         * mac.updateHex('0afe36');
         */
        updateHex(hex: string): void;

        /**
         * completes hash calculation and returns hash result
         * @example
         * var mac = new KJUR.crypto.Mac({alg: "HmacSHA256", "pass": "pass"});
         * mac.updateString('aaa')
         * mac.doFinal() → "5737da..."
         */
        doFinal(): string;

        /**
         * performs final update on the digest using string, then completes the digest computation
         * @param str string to final update
         * @example
         * var mac = new KJUR.crypto.Mac({alg: "HmacSHA256", "pass": "pass"});
         * mac.doFinalString("aaa") → "5737da..."
         */
        doFinalString(str: string): string;

        /**
         * performs final update on the digest using hexadecimal string, then completes the digest computation
         * @param hex hexadecimal string to final update
         * @example
         * var mac = new KJUR.crypto.Mac({alg: "HmacSHA256", "pass": "pass"});
         * mac.doFinalHex("616161") → "5737da..."
         */
        doFinalHex(hex: string): string;

        /**
         * set password for Mac
         * @param pass password for Mac
         * @description
         * This method will set password for (H)Mac internally.
         * Argument 'pass' can be specified as following:
         * - even length string of 0..9, a..f or A-F: implicitly specified as hexadecimal string
         * - not above string: implicitly specified as raw string
         * - {rstr: "\x65\x70"}: explicitly specified as raw string
         * - {hex: "6570"}: explicitly specified as hexacedimal string
         * - {utf8: "秘密"}: explicitly specified as UTF8 string
         * - {b64: "Mi78..=="}: explicitly specified as Base64 string
         * - {b64u: "Mi7-_"}: explicitly specified as Base64URL string
         * It is *STRONGLY RECOMMENDED* that explicit representation of password argument
         * to avoid ambiguity. For example string  "6161" can mean a string "6161" or
         * a hexadecimal string of "aa" (i.e. \x61\x61).
         * @example
         * mac = KJUR.crypto.Mac({'alg': 'hmacsha256'});
         * // set password by implicit raw string
         * mac.setPassword("\x65\x70\xb9\x0b");
         * mac.setPassword("password");
         * // set password by implicit hexadecimal string
         * mac.setPassword("6570b90b");
         * mac.setPassword("6570B90B");
         * // set password by explicit raw string
         * mac.setPassword({"rstr": "\x65\x70\xb9\x0b"});
         * // set password by explicit hexadecimal string
         * mac.setPassword({"hex": "6570b90b"});
         * // set password by explicit utf8 string
         * mac.setPassword({"utf8": "passwordパスワード");
         * // set password by explicit Base64 string
         * mac.setPassword({"b64": "Mb+c3f/=="});
         * // set password by explicit Base64URL string
         * mac.setPassword({"b64u": "Mb-c3f_"});
         */
        setPassword(pass: string | { [type: string]: string }): void;
    }
}

declare namespace jsrsasign {
    type EncryptionAlgorithms = 'DES-CBC' | 'DES-EDE3-CBC' | 'AES-128-CBC' | 'AES-192-CBC' | 'AES-256-CBC';
    type PrivateKeyOutputFormatType = 'PKCS1PRV' | 'PKCS5PRV' | 'PKCS8PRV';

    /**
     * convert an ArrayBuffer to a hexadecimal string
     * @param buffer ArrayBuffer
     * @return hexadecimal string
     * @description
     * This function converts from an ArrayBuffer to a hexadecimal string.
     * @example
     * var buffer = new ArrayBuffer(3);
     * var view = new DataView(buffer);
     * view.setUint8(0, 0xfa);
     * view.setUint8(1, 0xfb);
     * view.setUint8(2, 0x01);
     * ArrayBuffertohex(buffer) → "fafb01"
     */
    function ArrayBuffertohex(buffer: ArrayBuffer): string;

    /**
     * convert a Base64 encoded string with new lines to a hexadecimal string
     * @param s Base64 encoded string with new lines
     * @return hexadecimal string
     * @description
     * This function converts from a Base64 encoded
     * string with new lines to a hexadecimal string.
     * This is useful to handle PEM encoded file.
     * This function removes any non-Base64 characters (i.e. not 0-9,A-Z,a-z,\,+,=)
     * including new line.
     * @example
     * hextob64nl(
     * "MTIzNDU2Nzg5MDEyMzQ1Njc4OTAxMjM0NTY3ODkwMTIzNDU2Nzg5MDEyMzQ1Njc4\r\n" +
     * "OTAxMjM0NTY3ODkwCg==\r\n")
     * →
     * "123456789012345678901234567890123456789012345678901234567890"
     */
    function b64nltohex(s: string): string;

    /**
     * convert a Base64 encoded string to a Base64URL encoded string.
     * @param s Base64 encoded string
     * @return Base64URL encoded string
     * @example
     * b64tob64u("ab+c3f/==") → "ab-c3f_"
     */
    function b64tob64u(s: string): string;

    /**
     * convert a Base64 encoded string to a UTF-8 encoded string including CJK or Latin.
     * @param s Base64 encoded string
     * @return UTF-8 encoded string
     */
    function b64toutf8(s: string): string;

    /**
     * convert a Base64URL encoded string to a Base64 encoded string.
     * @param s Base64URL encoded string
     * @return Base64 encoded string
     * @example
     * b64utob64("ab-c3f_") → "ab+c3f/=="
     */
    function b64utob64(s: string): string;

    /**
     * convert a Base64URL encoded string to a hexadecimal string.
     * @param s Base64URL encoded string
     * @return hexadecimal string
     */
    function b64utohex(s: string): string;

    /**
     * convert a Base64URL encoded string to a ASCII string.
     * NOTE: This can't be used for Base64URL encoded non ASCII characters.
     * @param s Base64URL encoded string
     * @return ASCII string
     */
    function b64utos(s: string): string;

    /**
     * convert a Base64URL encoded string to a UTF-8 encoded string including CJK or Latin.
     * @param s Base64URL encoded string
     * @return UTF-8 encoded string
     */
    function b64utoutf8(s: string): string;

    /**
     * convert a Base64URL encoded string to a hexadecimal string.
     * @param s Base64URL encoded string
     * @return hexadecimal string
     */
    function b64tohex(s: string): string;

    /**
     * convert a base64 string to a byte/number array.
     * @param s Base64URL encoded string
     * @return byte/number array
     */
    function b64toBA(s: string): number[];

    /**
     * convert an array of bytes(Number) to hexadecimal string.
     * @param a array of bytes
     * @return hexadecimal string
     */
    function BAtohex(a: number[]): string;

    /**
     * convert an array of character codes to a string
     * @param a array of character codes
     * @return s
     */
    function BAtos(a: number[]): string;

    /**
     * Date object to zulu time string
     * @param d Date object for specified time
     * @param flagUTCTime if this is true year will be YY otherwise YYYY
     * @param flagMilli if this is true result concludes milliseconds
     * @return GeneralizedTime or UTCTime string (ex. 20170412235959.384Z)
     * @description
     * This function converts from Date object to GeneralizedTime string (i.e. YYYYMMDDHHmmSSZ) or
     * UTCTime string (i.e. YYMMDDHHmmSSZ).
     * As for UTCTime, if year "YY" is equal or less than 49 then it is 20YY.
     * If year "YY" is equal or greater than 50 then it is 19YY.
     * If flagMilli is true its result concludes milliseconds such like
     * "20170520235959.42Z".
     * @example
     * d = new Date(Date.UTC(2017,4,20,23,59,59,670));
     * datetozulu(d) → "20170520235959Z"
     * datetozulu(d, true) → "170520235959Z"
     * datetozulu(d, false, true) → "20170520235959.67Z"
     */
    function datetozulu(d: Date, flagUTCTime: boolean, flagMilli: boolean): string;

    /**
     * convert UTFa hexadecimal string to a URLComponent string such like "%67%68".
     * Note that these "<code>0-9A-Za-z!'()*-._~</code>" characters will not
     * converted to "%xx" format by builtin 'encodeURIComponent()' function.
     * However this 'encodeURIComponentAll()' function will convert
     * all of characters into "%xx" format.
     * @param s hexadecimal string
     * @return URIComponent string such like "%67%68"
     */
    function encodeURIComponentAll(s: string): string;

    /**
     * convert a hexadecimal string to an ArrayBuffer
     * @param hex hexadecimal string
     * @return ArrayBuffer
     * @description
     * This function converts from a hexadecimal string to an ArrayBuffer.
     * @example
     * hextoArrayBuffer("fffa01") → ArrayBuffer of [255, 250, 1]
     */
    function hextoArrayBuffer(hex: string): ArrayBuffer;

    /**
     * convert a hexadecimal string to a Base64URL encoded string.
     * @param s hexadecimal string
     * @return Base64URL encoded string
     * @description
     * convert a hexadecimal string to a Base64URL encoded string.
     * NOTE: If leading "0" is omitted and odd number length for
     * hexadecimal leading "0" is automatically added.
     */
    function hextob64(s: string): string;

    /**
     * convert a hexadecimal string to Base64 encoded string with new lines
     * @param s hexadecimal string
     * @return resulted Base64 encoded string with new lines
     * @description
     * This function converts from a hexadecimal string to Base64 encoded
     * string with new lines for each 64 characters. This is useful for
     * PEM encoded file.
     * @example
     * hextob64nl("123456789012345678901234567890123456789012345678901234567890")
     * →
     * MTIzNDU2Nzg5MDEyMzQ1Njc4OTAxMjM0NTY3ODkwMTIzNDU2Nzg5MDEyMzQ1Njc4 // new line
     * OTAxMjM0NTY3ODkwCg==
     */
    function hextob64nl(s: string): string;

    /**
     * convert a hexadecimal string to a Base64URL encoded string.
     * @param s hexadecimal string
     * @return Base64URL encoded string
     * @description
     * convert a hexadecimal string to a Base64URL encoded string.
     * NOTE: If leading "0" is omitted and odd number length for
     * hexadecimal leading "0" is automatically added.
     */
    function hextob64u(s: string): string;

    /**
     * get PEM string from hexadecimal data and header string
     * @param dataHex hexadecimal string of PEM body
     * @param pemHeader PEM header string (ex. 'RSA PRIVATE KEY')
     * @return PEM formatted string of input data
     * @description
     * This function converts a hexadecimal string to a PEM string with
     * a specified header. Its line break will be CRLF("\r\n").
     * @example
     * hextopem('616161', 'RSA PRIVATE KEY') →
     * -----BEGIN PRIVATE KEY-----
     * YWFh
     * -----END PRIVATE KEY-----
     */
    function hextopem(dataHex: string, pemHeader: string): string;

    /**
     * canonicalize hexadecimal string of positive integer
     * @param s hexadecimal string
     * @return canonicalized hexadecimal string of positive integer
     * @description
     * This method canonicalize a hexadecimal string of positive integer
     * for two's complement representation.
     * Canonicalized hexadecimal string of positive integer will be:
     * - Its length is always even.
     * - If odd length it will be padded with leading zero.
     * - If it is even length and its first character is "8" or greater,
     * it will be padded with "00" to make it positive integer.
     * @example
     * hextoposhex("abcd") → "00abcd"
     * hextoposhex("1234") → "1234"
     * hextoposhex("12345") → "012345"
     */
    function hextoposhex(s: string): string;

    /**
     * convert a hexadecimal encoded string to raw string including non printable characters.
     * @param s hexadecimal encoded string
     * @return raw string
     * @example
     * hextorstr("610061") → "a\x00a"
     */
    function hextorstr(s: string): string;

    /**
     * convert a hexadecimal string to a URLComponent string such like "%67%68".
     * @param s hexadecimal string
     * @return URIComponent string such like "%67%68"
     */
    function hextouricmp(s: string): string;

    /**
     * convert a hexadecimal encoded string to a UTF-8 encoded string including CJK or Latin.
     * Note that when input is improper hexadecimal string as UTF-8 string, this function returns
     * 'null'.
     * @param s hexadecimal encoded string
     * @return UTF-8 encoded string or null
     */
    function hextoutf8(s: string): string;

    /**
     * convert string of integer array to hexadecimal string.
     * @param s string of integer array
     * @return hexadecimal string
     * @throws "malformed integer array string: *" for wrong input
     * @description
     * This function converts a string of JavaScript integer array to
     * a hexadecimal string. Each integer value shall be in a range
     * from 0 to 255 otherwise it raise exception. Input string can
     * have extra space or newline string so that they will be ignored.
     *
     * @example
     * intarystrtohex(" [123, 34, 101, 34, 58] ")
     * → 7b2265223a (i.e. '{"e":' as string)
     */
    function intarystrtohex(s: string): string;

    /**
     * convert all UNIX new line("\r\n") to DOS new line("\n") in
     * a String "s".
     * @param s string
     * @return converted string
     */
    function newline_toDos(s: string): string;

    /**
     * convert all DOS new line("\r\n") to UNIX new line("\n") in
     * a String "s".
     * @param s string
     * @return converted string
     */
    function newline_toUnix(s: string): string;

    /**
     * get hexadecimal string from PEM format data
     * @param s PEM formatted string
     * @param sHead PEM header string without BEGIN/END(OPTION)
     * @return hexadecimal string data of PEM contents
     * @description
     * This static method gets a hexacedimal string of contents
     * from PEM format data. You can explicitly specify PEM header
     * by sHead argument.
     * Any space characters such as white space or new line
     * will be omitted.
     * NOTE: Now `KEYUTIL.getHexFromPEM` and `X509.pemToHex`
     * have been deprecated since jsrsasign 7.2.1.
     * Please use this method instead.
     * @example
     * pemtohex("-----BEGIN PUBLIC KEY...") → "3082..."
     * pemtohex("-----BEGIN CERTIFICATE...", "CERTIFICATE") → "3082..."
     * pemtohex(" \r\n-----BEGIN DSA PRIVATE KEY...") → "3082..."
     */
    function pemtohex(s: string, sHead?: string): string;

    /**
     * read file and return file contents
     * @param binFile file name to be read
     * @return raw string of file contents
     * @description
     * This function only works in Node.js.
     */
    function readFile(binFile: string): string;

    /**
     * read binary file and return file contents as hexadecimal string
     * @param binFile file name to be read
     * @return hexadecimal string of file contents
     * @description
     * This function only works in Node.js.
     */
    function readFileHexByBin(binFile: string): string;

    /**
     * read file and return file contents as utf-8 string
     * @param utf8File file name to be read
     * @return utf-8 string of file contents
     * @description
     * This function only works in Node.js.
     */
    function readFileUTF8(utf8File: string): string;

    /**
     * convert a raw string including non printable characters to hexadecimal encoded string.
     * @param s raw string
     * @return hexadecimal encoded string
     * @example
     * rstrtohex("a\x00a") → "610061"
     */
    function rstrtohex(s: string): string;

    /**
     * save raw string to file
     * @param binFile file name to save contents.
     * @param rawString string contents to be saved.
     * @description
     * This function only works in Node.js.
     */
    function saveFile(binFile: string, rawString: string): void;

    /**
     * save data represented by hexadecimal string to file
     * @param binFile file name to save contents.
     * @param hexString hexadecimal string to be saved.
     * @description
     * This function only works in Node.js.
     */
    function saveFileBinByHex(binFile: string, hexString: string): void;

    /**
     * convert a ASCII string to a Base64 encoded string.
     * NOTE: This can't be used for non ASCII characters.
     * @param s ASCII string
     * @return Base64 encoded string
     */
    function stob64(s: string): string;

    /**
     * convert a ASCII string to a Base64URL encoded string.
     * NOTE: This can't be used for non ASCII characters.
     * @param s ASCII string
     * @return Base64URL encoded string
     */
    function stob64u(s: string): string;

    /**
     * convert a string to an array of character codes
     */
    function stoBA(s: string): number[];

    /**
     * convert a ASCII string to a hexadecimal string of ASCII codes.
     * NOTE: This can't be used for non ASCII characters.
     * @param s ASCII string
     * @return hexadecimal string
     */
    function stohex(s: string): string;

    /**
     * find index of string where two string differs
     * @param s1 string to compare
     * @param s2 string to compare
     * @return string index of where character differs. Return -1 if same.
     * @example
     * strdiffidx("abcdefg", "abcd4fg") -> 4
     * strdiffidx("abcdefg", "abcdefg") -> -1
     * strdiffidx("abcdefg", "abcdef") -> 6
     * strdiffidx("abcdefgh", "abcdef") -> 6
     */
    function strdiffidx(s1: string, s2: string): number;

    /**
     * convert a URLComponent string such like "%67%68" to a hexadecimal string.
     * @param s URIComponent string such like "%67%68"
     * @return hexadecimal string
     */
    function uricmptohex(s: string): string;

    /**
     * convert a UTF-8 encoded string including CJK or Latin to a Base64 encoded string.
     * @param s UTF-8 encoded string
     * @return Base64 encoded string
     */
    function utf8tob64(s: string): string;

    /**
     * convert a UTF-8 encoded string including CJK or Latin to a Base64URL encoded string.
     * @param s UTF-8 encoded string
     * @return Base64URL encoded string
     */
    function utf8tob64u(s: string): string;

    /**
     * convert a UTF-8 encoded string including CJK or Latin to a hexadecimal encoded string.
     * @param s UTF-8 encoded string
     * @return hexadecimal encoded string
     */
    function utf8tohex(s: string): string;

    /**
     * GeneralizedTime or UTCTime string to Date object
     * @param s GeneralizedTime or UTCTime string (ex. 20170412235959.384Z)
     * @return Date object for specified time
     * @description
     * This function converts from GeneralizedTime string (i.e. YYYYMMDDHHmmSSZ) or
     * UTCTime string (i.e. YYMMDDHHmmSSZ) to Date object.
     * Argument string may have fraction of seconds and
     * its length is one or more digits such as "20170410235959.1234567Z".
     * As for UTCTime, if year "YY" is equal or less than 49 then it is 20YY.
     * If year "YY" is equal or greater than 50 then it is 19YY.
     * @example
     * zulutodate(  "071231235959Z").toUTCString()   → "Mon, 31 Dec 2007 23:59:59 GMT"
     * zulutodate(  "071231235959.1Z").toUTCString() → "Mon, 31 Dec 2007 23:59:59 GMT"
     * zulutodate("20071231235959Z").toUTCString()   → "Mon, 31 Dec 2007 23:59:59 GMT"
     * zulutodate(  "071231235959.34").getMilliseconds() → 340
     */
    function zulutodate(s: string): Date;

    /**
     * GeneralizedTime or UTCTime string to milliseconds from Unix origin
     * @param s GeneralizedTime or UTCTime string (ex. 20170412235959.384Z)
     * @return milliseconds from Unix origin time (i.e. Jan 1, 1970 0:00:00 UTC)
     * @description
     * This function converts from GeneralizedTime string (i.e. YYYYMMDDHHmmSSZ) or
     * UTCTime string (i.e. YYMMDDHHmmSSZ) to milliseconds from Unix origin time
     * (i.e. Jan 1 1970 0:00:00 UTC).
     * Argument string may have fraction of seconds and
     * its length is one or more digits such as "20170410235959.1234567Z".
     * As for UTCTime, if year "YY" is equal or less than 49 then it is 20YY.
     * If year "YY" is equal or greater than 50 then it is 19YY.
     * @example
     * zulutomsec("071231235959Z")       → 1199145599000 #Mon, 31 Dec 2007 23:59:59 GMT
     * zulutomsec("071231235959.1Z")     → 1199145599100 #Mon, 31 Dec 2007 23:59:59 GMT
     * zulutomsec("071231235959.12345Z") → 1199145599123 #Mon, 31 Dec 2007 23:59:59 GMT
     * zulutomsec("20071231235959Z")     → 1199145599000 #Mon, 31 Dec 2007 23:59:59 GMT
     * zulutomsec("931231235959Z")       → -410227201000 #Mon, 31 Dec 1956 23:59:59 GMT
     */
    function zulutomsec(s: string): number;

    /**
     * GeneralizedTime or UTCTime string to seconds from Unix origin
     * @param s GeneralizedTime or UTCTime string (ex. 20170412235959.384Z)
     * @return seconds from Unix origin time (i.e. Jan 1, 1970 0:00:00 UTC)
     * @description
     * This function converts from GeneralizedTime string (i.e. YYYYMMDDHHmmSSZ) or
     * UTCTime string (i.e. YYMMDDHHmmSSZ) to seconds from Unix origin time
     * (i.e. Jan 1 1970 0:00:00 UTC). Argument string may have fraction of seconds
     * however result value will be omitted.
     * As for UTCTime, if year "YY" is equal or less than 49 then it is 20YY.
     * If year "YY" is equal or greater than 50 then it is 19YY.
     * @example
     * zulutosec("071231235959Z")   → 1199145599 #Mon, 31 Dec 2007 23:59:59 GMT
     * zulutosec("071231235959.1Z") → 1199145599 #Mon, 31 Dec 2007 23:59:59 GMT
     * zulutosec("20071231235959Z") → 1199145599 #Mon, 31 Dec 2007 23:59:59 GMT
     */
    function zulutosec(s: string): number;
}

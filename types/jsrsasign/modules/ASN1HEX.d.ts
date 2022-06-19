declare namespace jsrsasign {
    type hTag = string;
    type sTag = string;

    type ASN1HEXParseResult =
        | {
              bool: boolean;
          }
        | {
              int: {
                  hex: string;
              };
          }
        | {
              bitstr: {
                  obj: ASN1HEXParseResult;
              };
          }
        | {
              bitstr: {
                  hex: string;
              };
          }
        | {
              bitstr: {
                  bin: string;
              };
          }
        | {
              octstr: {
                  obj: ASN1HEXParseResult;
              };
          }
        | {
              octstr: {
                  hex: string;
              };
          }
        | {
              null: '';
          }
        | {
              oid: string;
          }
        | {
              oid: string;
          }
        | {
              enum: {
                  hex: string;
              };
          }
        | {
              enum: number;
          }
        | {
              [tagName: string]: ASN1HEXParseResult[];
          }
        | {
              [tagName: string]: {
                  str: string;
              };
          }
        | {
              tag: {
                  tag: string;
                  explicit: boolean;
                  hex: string;
              };
          }
        | {
              tag: {
                  tag: string;
                  explicit: false;
                  str: string;
              };
          }
        | {
              tag: {
                  tag: string;
                  explicit: true;
                  obj: ASN1HEXParseResult;
              };
          }
        | {
              asn1: {
                  tlv: string;
              };
          }
        | ASN1HEXParseResult[];

    type ErrorReturn = any;

    /**
     * ASN.1 DER encoded hexadecimal string utility class
     * @since jsrsasign 1.1
     * @description
     * This class provides a parser for hexadecimal string of
     * DER encoded ASN.1 binary data.
     * Here are major methods of this class.
     * <ul>
     * <li><b>ACCESS BY POSITION</b>
     *   <ul>
     *   <li>{@link ASN1HEX.getTLV} - get ASN.1 TLV at specified position</li>
     *   <li>{@link ASN1HEX.getTLVblen} - get byte length of ASN.1 TLV at specified position</li>
     *   <li>{@link ASN1HEX.getV} - get ASN.1 V at specified position</li>
     *   <li>{@link ASN1HEX.getVblen} - get integer ASN.1 L at specified position</li>
     *   <li>{@link ASN1HEX.getVidx} - get ASN.1 V position from its ASN.1 TLV position</li>
     *   <li>{@link ASN1HEX.getL} - get hexadecimal ASN.1 L at specified position</li>
     *   <li>{@link ASN1HEX.getLblen} - get byte length for ASN.1 L(length) bytes</li>
     *   </ul>
     * </li>
     * <li><b>ACCESS FOR CHILD ITEM</b>
     *   <ul>
     *   <li>{@link ASN1HEX.getNthChildIdx} - get nth child index at specified position</li>
     *   <li>{@link ASN1HEX.getChildIdx} - get indexes of children</li>
     *   <li>{@link ASN1HEX.getNextSiblingIdx} - get position of next sibling (DEPRECATED)</li>
     *   </ul>
     * </li>
     * <li><b>ACCESS NESTED ASN.1 STRUCTURE</b>
     *   <ul>
     *   <li>{@link ASN1HEX.getTLVbyList} - get ASN.1 TLV at specified list index</li>
     *   <li>{@link ASN1HEX.getVbyList} - get ASN.1 V at specified nth list index with checking expected tag</li>
     *   <li>{@link ASN1HEX.getIdxbyList} - get index at specified list index</li>
     *   </ul>
     * </li>
     * <li><b>(NEW)ACCESS NESTED ASN.1 STRUCTURE</b>
     *   <ul>
     *   <li>{@link ASN1HEX.getTLVbyListEx} - get ASN.1 TLV at specified list index</li>
     *   <li>{@link ASN1HEX.getVbyListEx} - get ASN.1 V at specified nth list index with checking expected tag</li>
     *   <li>{@link ASN1HEX.getIdxbyListEx} - get index at specified list index</li>
     *   </ul>
     * </li>
     * <li><b>UTILITIES</b>
     *   <ul>
     *   <li>{@link ASN1HEX.dump} - dump ASN.1 structure</li>
     *   <li>{@link ASN1HEX.isContextTag} - check if a hexadecimal tag is a specified ASN.1 context specific tag</li>
     *   <li>{@link ASN1HEX.isASN1HEX} - simple ASN.1 DER hexadecimal string checker</li>
     *   <li>{@link ASN1HEX.checkStrictDER} - strict ASN.1 DER hexadecimal string checker</li>
     *   <li>{@link ASN1HEX.hextooidstr} - convert hexadecimal string of OID to dotted integer list</li>
     *   </ul>
     * </li>
     * </ul>
     */
    namespace ASN1HEX {
        /**
         * strict ASN.1 DER hexadecimal string checker
         * @param hex string to check whether it is hexadecmal string for ASN.1 DER or not
         * @return unspecified
         * @since jsrsasign 8.0.19 asn1hex 1.2.1
         * @throws Error when malformed ASN.1 DER hexadecimal string
         * @description
         * This method checks wheather the argument 'hex' is a hexadecimal string of
         * ASN.1 data or not. If the argument is not DER string, this
         * raise an exception.
         * @example
         * ASN1HEX.checkStrictDER('0203012345') &rarr; NO EXCEPTION FOR PROPER ASN.1 INTEGER
         * ASN1HEX.checkStrictDER('0203012345ff') &rarr; RAISE EXCEPTION FOR TOO LONG VALUE
         * ASN1HEX.checkStrictDER('02030123') &rarr; false RAISE EXCEPITON FOR TOO SHORT VALUE
         * ASN1HEX.checkStrictDER('fa3bcd') &rarr; false RAISE EXCEPTION FOR WRONG ASN.1
         */
        function checkStrictDER(hex: string): void;

        /**
         * get string of simple ASN.1 dump from hexadecimal ASN.1 data<br/>
         * @param hexOrObj hexadecmal string of ASN.1 data or ASN1Object object
         * @param flags associative array of flags for dump (OPTION)
         * @param idx string index for starting dump (OPTION)
         * @param indent indent string (OPTION)
         * @return String string of simple ASN.1 dump
         * @since jsrsasign 4.8.3 asn1hex 1.1.6
         * @description
         * This method will get an ASN.1 dump from
         * hexadecmal string of ASN.1 DER encoded data.
         * Here are features:
         * <ul>
         * <li>ommit long hexadecimal string</li>
         * <li>dump encapsulated OCTET STRING (good for X.509v3 extensions)</li>
         * <li>structured/primitive context specific tag support (i.e. [0], [3] ...)</li>
         * <li>automatic decode for implicit primitive context specific tag
         * (good for X.509v3 extension value)
         *   <ul>
         *   <li>if hex starts '68747470'(i.e. http) it is decoded as utf8 encoded string.</li>
         *   <li>if it is in 'subjectAltName' extension value and is '[2]'(dNSName) tag
         *   value will be encoded as utf8 string</li>
         *   <li>otherwise it shows as hexadecimal string</li>
         *   </ul>
         * </li>
         * </ul>
         * NOTE1: Argument {@link KJUR.asn1.ASN1Object} object is supported since
         * jsrsasign 6.2.4 asn1hex 1.0.8
         * @example
         * // 1) ASN.1 INTEGER
         * ASN1HEX.dump('0203012345')
         * &darr;
         * INTEGER 012345
         *
         * // 2) ASN.1 Object Identifier
         * ASN1HEX.dump('06052b0e03021a')
         * &darr;
         * ObjectIdentifier sha1 (1 3 14 3 2 26)
         *
         * // 3) ASN.1 SEQUENCE
         * ASN1HEX.dump('3006020101020102')
         * &darr;
         * SEQUENCE
         *   INTEGER 01
         *   INTEGER 02
         *
         * // 4) ASN.1 SEQUENCE since jsrsasign 6.2.4
         * o = KJUR.asn1.ASN1Util.newObject({seq: [{int: 1}, {int: 2}]});
         * ASN1HEX.dump(o)
         * &darr;
         * SEQUENCE
         *   INTEGER 01
         *   INTEGER 02
         * // 5) ASN.1 DUMP FOR X.509 CERTIFICATE
         * ASN1HEX.dump(pemtohex(certPEM))
         * &darr;
         * SEQUENCE
         *   SEQUENCE
         *     [0]
         *       INTEGER 02
         *     INTEGER 0c009310d206dbe337553580118ddc87
         *     SEQUENCE
         *       ObjectIdentifier SHA256withRSA (1 2 840 113549 1 1 11)
         *       NULL
         *     SEQUENCE
         *       SET
         *         SEQUENCE
         *           ObjectIdentifier countryName (2 5 4 6)
         *           PrintableString 'US'
         *             :
         */
        function dump(
            hexOrObj: KJUR.asn1.ASN1Object | string,
            flags?: { [key: string]: string },
            idx?: number,
            indent?: string,
        ): string;

        /**
         * get array of string indexes of child ASN.1 objects<br/>
         * @param h hexadecimal string of ASN.1 DER encoded data
         * @param idx start string index of ASN.1 object
         * @return Array of Number array of indexes for childen of ASN.1 objects
         * @since jsrsasign 7.2.0 asn1hex 1.1.11
         * @description
         * This method returns array of integers for a concatination of ASN.1 objects
         * in a ASN.1 value. As for BITSTRING, one byte of unusedbits is skipped.
         * As for other ASN.1 simple types such as INTEGER, OCTET STRING or PRINTABLE STRING,
         * it returns a array of a string index of its ASN.1 value.<br/>
         * NOTE: Since asn1hex 1.1.7 of jsrsasign 6.1.2, Encapsulated BitString is supported.
         * @example
         * ASN1HEX.getChildIdx("0203012345", 0) &rArr; [4] // INTEGER 012345
         * ASN1HEX.getChildIdx("1303616161", 0) &rArr; [4] // PrintableString aaa
         * ASN1HEX.getChildIdx("030300ffff", 0) &rArr; [6] // BITSTRING ffff (unusedbits=00a)
         * ASN1HEX.getChildIdx("3006020104020105", 0) &rArr; [4, 10] // SEQUENCE(INT4,INT5)
         */
        function getChildIdx(h: string, idx: number): number[];

        /**
         * get string index of nth child object of ASN.1 object refered by h, idx<br/>
         * @param h hexadecimal string of ASN.1 DER encoded data
         * @param currentIndex start string index of ASN.1 object
         * @param of Number nthList array list of nth
         * @param checkingTag (OPTIONAL) string of expected ASN.1 tag for nthList
         * @return Number string index refered by nthList
         * @since jsrsasign 7.1.4 asn1hex 1.1.10.
         * @description
         * @example
         * The "nthList" is a index list of structured ASN.1 object
         * reference. Here is a sample structure and "nthList"s which
         * refers each objects.
         *
         * SQUENCE               -
         *   SEQUENCE            - [0]
         *     IA5STRING 000     - [0, 0]
         *     UTF8STRING 001    - [0, 1]
         *   SET                 - [1]
         *     IA5STRING 010     - [1, 0]
         *     UTF8STRING 011    - [1, 1]
         */
        function getIdxbyList(h: string, currentIndex: number, nthList: number[], checkingTag: string): number;

        /**
         * get string index of nth child object of ASN.1 object refered by h, idx<br/>
         * @param h hexadecimal string of ASN.1 DER encoded data
         * @param currentIndex start string index of ASN.1 object
         * @param nthList array list of nth index value or context specific tag string (ex. "[0]")
         * @param checkingTag (OPTIONAL) string of expected ASN.1 tag for nthList
         * @return Number string index refered by nthList. return -1 if not found
         * @since jsrsasign 8.0.21 asn1hex 1.2.2
         * @see <a href="https://github.com/kjur/jsrsasign/wiki/Tutorial-for-accessing-deep-inside-of-ASN.1-structure-by-using-new-ASN1HEX.getIdxbyListEx">ASN1HEX.getIdxbyListEx tutorial wiki page</a>
         *
         * @description
         * This method returns the string index in h specified by currentIndex and
         * nthList. This is useful to dig into a deep structured ASN.1 object
         * by indexes called nthList.
         * <br/>
         * A nthList consists of a position number in children of ASN.1
         * structured data or a context specific tag string (ex. "[1]").
         * Here is a sample deep structured ASN.1 data and
         * nthLists referring decendent objects.
         * <blockquote><pre>
         * SQUENCE               - referring nthList is below:
         *   SEQUENCE            - [0]
         *     IA5STRING "a1"    - [0, 0]
         *     UTF8STRING "a2"   - [0, 1]
         *   SET                 - [1]
         *     IA5STRING "b1"    - [1, 0]
         *     UTF8STRING "b2"   - [1, 1]
         *     [0] "b3"          - [1, "[0]"] // optional since context tag
         *     [1] "b4"          - [1, "[1]"] // optional since context tag
         *     IA5STRING "b5"    - [1, 2] // context is skipped. next is 2
         *     UTF8STRING "b6"   - [1, 3]
         * </pre></blockquote>
         *
         * <br/>
         * This method can dig into ASN.1 object encapsulated by
         * OctetString or BitString with unused bits.
         *
         * @example
         * 3014 seq idx=0
         *   3012 seq idx=4
         *     020101 int:1 idx=8
         *     020102 int:2 idx=14
         *     800103 [0]:3 idx=20
         *     810104 [1]:4 idx=26
         *     020105 int:5 idx=32
         *     020106 int:6 idx=38
         * h = "30140412020101020102800103810104020105020106";
         * ASN1HEX.getIdxbyListEx(h, 0, [0, "[0]"]) &rarr; 16
         * ASN1HEX.getIdxbyListEx(h, 0, [0, 2]) &rarr; 28
         * ASN1HEX.getIdxbyListEx(h, 0, [0, 2], "0c") &rarr; -1 //not UTF8String(0c)
         */
        function getIdxbyListEx(
            h: string,
            currentIndex: number,
            nthList: Array<number | string>,
            checkingTag?: string,
        ): number;

        /**
         * get integer value from ASN.1 V(value) of Integer or BitString<br/>
         * @param h hexadecimal string
         * @param idx string index in h to get ASN.1 DER Integer or BitString
         * @param errorReturn (OPTION) error return value (DEFAULT: -1)
         * @return Number ASN.1 DER Integer or BitString value
         * @since jsrsasign 10.1.0 asn1hex 1.2.7
         * @see bitstrtoint
         *
         * @example
         * ASN1HEX.getInt("xxxx020103xxxxxx", 4) &rarr 3 // DER Integer
         * ASN1HEX.getInt("xxxx03020780xxxxxx", 4) &rarr 1 // DER BitStringx
         * ASN1HEX.getInt("xxxx030203c8xxxxxx", 4) &rarr 25 // DER BitStringx
         */
        function getInt(h: string, idx: number, errorReturn?: ErrorReturn): number | ErrorReturn;

        /**
         * get hexadecimal string for ASN.1 L(length) bytes<br/>
         * @param s hexadecimal string of ASN.1 DER encoded data
         * @param idx string index to get L of ASN.1 object
         * @return String hexadecimal string for ASN.1 L(length) bytes
         * @since jsrsasign 7.2.0 asn1hex 1.1.11
         */
        function getL(s: string, idx: number): string;

        /**
         * get byte length for ASN.1 L(length) bytes<br/>
         * @param s hexadecimal string of ASN.1 DER encoded data
         * @param idx string index
         * @return byte length for ASN.1 L(length) bytes
         * @since jsrsasign 7.2.0 asn1hex 1.1.11
         * @example
         * ASN1HEX.getLblen('020100', 0) &rarr; 1 for '01'
         * ASN1HEX.getLblen('020200', 0) &rarr; 1 for '02'
         * ASN1HEX.getLblen('02818003...', 0) &rarr; 2 for '8180'
         * ASN1HEX.getLblen('0282025b03...', 0) &rarr; 3 for '82025b'
         * ASN1HEX.getLblen('0280020100...', 0) &rarr; -1 for '80' BER indefinite length
         * ASN1HEX.getLblen('02ffab...', 0) &rarr; -2 for malformed ASN.1 length
         */
        function getLblen(s: string, idx: number): number;

        /**
         * get next sibling starting index for ASN.1 object string (DEPRECATED)<br/>
         * @param s hexadecimal string of ASN.1 DER encoded data
         * @param idx string index
         * @return Number next sibling starting index for ASN.1 object string
         * @since jsrsasign 7.2.0 asn1hex 1.1.11
         * @deprecated jsrsasign 9.1.5 asn1hex 1.2.5 Please use {@link ASN1HEX.getTLVblen}
         *
         * @example
         * SEQUENCE { INTEGER 3, INTEGER 4 }
         * 3006
         *     020103 :idx=4
         *           020104 :next sibling idx=10
         * getNextSiblingIdx("3006020103020104", 4) & rarr 10
         */
        function getNextSiblingIdx(s: string, idx: number): number;

        /**
         * get string index of nth child object of ASN.1 object refered by h, idx<br/>
         * @param h hexadecimal string of ASN.1 DER encoded data
         * @param idx start string index of ASN.1 object
         * @param nth for child
         * @return Number string index of nth child.
         * @since jsrsasign 7.2.0 asn1hex 1.1.11
         */
        function getNthChildIdx(h: string, idx: number, nth: number): number;

        /**
         * get object identifier string from ASN.1 V(value)<br/>
         * @param h hexadecimal string
         * @param idx string index in h to get ASN.1 DER ObjectIdentifier
         * @param errorReturn (OPTION) error return value (DEFAULT: null)
         * @return String object identifier string (ex. "1.2.3.4")
         * @since jsrsasign 10.1.0 asn1hex 1.2.7
         *
         * @example
         * ASN1HEX.getInt("xxxx06032a0304xxxxxx", 4) &rarr "1.2.3.4"
         */
        function getOID(h: string, idx: number, errorReturn?: ErrorReturn): string | ErrorReturn;

        /**
         * get object identifier name from ASN.1 V(value)<br/>
         * @param h hexadecimal string
         * @param idx string index in h to get ASN.1 DER ObjectIdentifier
         * @param errorReturn (OPTION) error return value (DEFAULT: null)
         * @return String object identifier name (ex. "sha256") oir OID string
         * @since jsrsasign 10.1.0 asn1hex 1.2.7
         *
         * @description
         * This static method returns object identifier name such as "sha256"
         * if registered. If not registered, it returns OID string.
         * (ex. "1.2.3.4")
         *
         * @example
         * ASN1HEX.getOIDName("xxxx0609608648016503040201xxxxxx", 4) &rarr "sha256"
         * ASN1HEX.getOIDName("xxxx06032a0304xxxxxx", 4) &rarr "1.2.3.4"
         */
        function getOIDName(h: string, idx: number, errorReturn?: ErrorReturn): string | ErrorReturn;

        /**
         * get raw string from ASN.1 V(value)<br/>
         * @param h hexadecimal string
         * @param idx string index in h to get any ASN.1 DER String
         * @param errorReturn (OPTION) error return value (DEFAULT: null)
         * @return String raw string
         * @since jsrsasign 10.1.3 asn1hex 1.2.8
         *
         * @description
         * This static method returns a raw string from
         * any ASN.1 DER primitives.
         *
         * @example
         * ASN1HEX.getString("xxxx1303616161xxxxxx", 4) &rarr "aaa"
         * ASN1HEX.getString("xxxx0c03616161xxxxxx", 4) &rarr "aaa"
         */
        function getString(h: string, idx: number, errorReturn: ErrorReturn): string | ErrorReturn;

        /**
         * get hexadecimal string of ASN.1 TLV at<br/>
         * @param s hexadecimal string of ASN.1 DER encoded data
         * @param idx string index
         * @return String hexadecimal string of ASN.1 TLV.
         * @since jsrsasign 7.2.0 asn1hex 1.1.11
         */
        function getTLV(s: string, idx: number): string;

        /**
         * get byte length of ASN.1 TLV at specified string index<br/>
         * @param h hexadecimal string of ASN.1 DER encoded data
         * @param idx string index to get ASN.1 TLV byte length
         * @return Number byte length of ASN.1 TLV
         * @since jsrsasign 9.1.5 asn1hex 1.1.11
         *
         * @description
         * This method returns a byte length of ASN.1 TLV at
         * specified string index.
         *
         * @example
         *                        v string indx=42
         * ASN1HEX.getTLVblen("...1303616161...", 42) &rarr; 10 (PrintableString 'aaa')
         */
        function getTLVblen(h: string, idx: number): number;

        /**
         * get ASN.1 TLV by nthList<br/>
         * @param h hexadecimal string of ASN.1 structure
         * @param currentIndex string index to start searching in hexadecimal string "h"
         * @param nthList array of nth list index
         * @param checkingTag (OPTIONAL) string of expected ASN.1 tag for nthList
         * @return String referred hexadecimal string of ASN.1 TLV or null
         * @since jsrsasign 7.1.4 asn1hex 1.1.10
         *
         * @description
         * This static method is to get a ASN.1 value which specified "nthList" position
         * with checking expected tag "checkingTag".
         * <br/>
         * When referring value can't be found, this returns null.
         */
        function getTLVbyList(h: string, currentIndex: number, nthList: number[], checkingTag?: string): string | null;

        /**
         * get ASN.1 TLV by nthList<br/>
         * @param h hexadecimal string of ASN.1 structure
         * @param currentIndex string index to start searching in hexadecimal string "h"
         * @param nthList array list of nth index value or context specific tag string (ex. "[0]")
         * @param checkingTag (OPTIONAL) string of expected ASN.1 tag for nthList
         * @return String hexadecimal ASN.1 TLV string refered by nthList. return null if not found
         * @since jsrsasign 8.0.21 asn1hex 1.2.2
         * @see <a href="https://github.com/kjur/jsrsasign/wiki/Tutorial-for-accessing-deep-inside-of-ASN.1-structure-by-using-new-ASN1HEX.getIdxbyListEx">ASN1HEX.getIdxbyListEx tutorial wiki page</a>
         * @see {@link ASN1HEX.getIdxbyListEx}
         * @description
         * This static method is to get a ASN.1 value which specified "nthList" position
         * with checking expected tag "checkingTag".
         * This method can dig into ASN.1 object encapsulated by
         * OctetString or BitString with unused bits.
         * @example
         * 3014 seq idx=0
         *   0312 seq idx=4
         *     020101 int:1 idx=8
         *     020102 int:2 idx=14
         *     800103 [0]:3 idx=20
         *     810104 [1]:4 idx=26
         *     020105 int:5 idx=32
         *     020106 int:6 idx=38
         * h = "30140412020101020102800103810104020105020106";
         * ASN1HEX.getTLVbyList(h, 0, [0, "[0]"]) &rarr; 800103
         * ASN1HEX.getTLVbyList(h, 0, [0, 2]) &rarr; 020105
         * ASN1HEX.getTLVbyList(h, 0, [0, 2], "0c") &rarr; null //not UTF8String(0c)
         */
        function getTLVbyListEx(
            h: string,
            currentIndex: number,
            nthList: Array<string | number>,
            checkingTag?: string,
        ): string | null;

        /**
         * get hexadecimal string of ASN.1 V(value)<br/>
         * @param s hexadecimal string of ASN.1 DER encoded data
         * @param idx string index
         * @return String hexadecimal string of ASN.1 value.
         * @since jsrsasign 7.2.0 asn1hex 1.1.11
         */
        function getV(s: string, idx: number): string;

        /**
         * get integer value of ASN.1 length for ASN.1 data<br/>
         * @param s hexadecimal string of ASN.1 DER encoded data
         * @param idx string index
         * @return Number ASN.1 L(length) integer value
         * @since jsrsasign 7.2.0 asn1hex 1.1.11
         */
        /*
        getting ASN.1 length value at the position 'idx' of
        hexa decimal string 's'.
        f('3082025b02...', 0) ... 82025b ... ???
        f('020100', 0) ... 01 ... 1
        f('0203001...', 0) ... 03 ... 3
        f('02818003...', 0) ... 8180 ... 128
        */
        function getVblen(s: string, idx: number): number;

        /**
         * get ASN.1 value by nthList<br/>
         * @param h hexadecimal string of ASN.1 structure
         * @param currentIndex string index to start searching in hexadecimal string "h"
         * @param nthList array of nth list index
         * @param checkingTag (OPTIONAL) string of expected ASN.1 tag for nthList
         * @param Boolean removeUnusedbits (OPTIONAL) flag for remove first byte for value (DEFAULT false)
         * @return String referred hexadecimal string of ASN.1 value(V) or null
         * @since asn1hex 1.1.4
         * @see ASN1HEX.getIdxbyList
         * @see ASN1HEX.getVbyListEx
         *
         * @description
         * This static method is to get a ASN.1 value which specified "nthList" position
         * with checking expected tag "checkingTag".
         * <br/>
         * When referring value can't be found, this returns null.
         * <br/>
         * NOTE: 'removeUnusedbits' flag has been supported since
         * jsrsasign 7.1.14 asn1hex 1.1.10.
         */
        function getVbyList(
            h: string,
            currentIndex: number,
            nthList: number[],
            checkingTag?: string,
            removeUnusedbits?: boolean,
        ): string | null;

        /**
         * get ASN.1 V by nthList<br/>
         * @param h hexadecimal string of ASN.1 structure
         * @param currentIndex string index to start searching in hexadecimal string "h"
         * @param nthList array list of nth index value or context specific tag string (ex. "[0]")
         * @param checkingTag (OPTIONAL) string of expected ASN.1 tag for nthList (default is undefined)
         * @param Boolean removeUnusedbits (OPTIONAL) flag for trim unused bit from result value (default is undefined)
         * @return String hexadecimal ASN.1 V string refered by nthList. return null if not found
         * @since jsrsasign 8.0.21 asn1hex 1.2.2
         * @see <a href="https://github.com/kjur/jsrsasign/wiki/Tutorial-for-accessing-deep-inside-of-ASN.1-structure-by-using-new-ASN1HEX.getIdxbyListEx">ASN1HEX.getIdxbyListEx tutorial wiki page</a>
         * @see {@link ASN1HEX.getIdxbyListEx}
         *
         * @description
         * This static method is to get a ASN.1 value which specified "nthList" position
         * with checking expected tag "checkingTag".
         * This method can dig into ASN.1 object encapsulated by
         * OctetString or BitString with unused bits.
         *
         * @example
         * 3014 seq idx=0
         *   3012 seq idx=4
         *     020101 int:1 idx=8
         *     020102 int:2 idx=14
         *     800103 [0]:3 idx=20
         *     810104 [1]:4 idx=26
         *     020105 int:5 idx=32
         *     020106 int:6 idx=38
         * h = "30140412020101020102800103810104020105020106";
         * ASN1HEX.getTLVbyList(h, 0, [0, "[0]"]) &rarr; 03
         * ASN1HEX.getTLVbyList(h, 0, [0, 2]) &rarr; 05
         * ASN1HEX.getTLVbyList(h, 0, [0, 2], "0c") &rarr; null //not UTF8String(0c)
         */
        function getVbyListEx(
            h: string,
            currentIndex: number,
            nthList: Array<string | number>,
            checkingTag?: string,
            removeUnusedbits?: boolean,
        ): string | null;

        /**
         * get ASN.1 value starting string position for ASN.1 object refered by index 'idx'.
         * @param s hexadecimal string of ASN.1 DER encoded data
         * @param idx string index
         * @since jsrsasign 7.2.0 asn1hex 1.1.11
         */
        function getVidx(s: string, idx: number): number;

        /**
         * get OID string from hexadecimal encoded value<br/>
         * @param hex hexadecmal string of ASN.1 DER encoded OID value
         * @return String OID string (ex. '1.2.3.4.567')
         * @since asn1hex 1.1.5
         * @see {@link KJUR.asn1.ASN1Util.oidIntToHex}
         * @description
         * This static method converts from ASN.1 DER encoded
         * hexadecimal object identifier value to dot concatinated OID value.
         * {@link KJUR.asn1.ASN1Util.oidIntToHex} is a reverse function of this.
         * @example
         * ASN1HEX.hextooidstr("550406") &rarr; "2.5.4.6"
         */
        function hextooidstr(hex: string): string;

        /**
         * simple ASN.1 DER hexadecimal string checker<br/>
         * @param hex string to check whether it is hexadecmal string for ASN.1 DER or not
         * @return Boolean true if it is hexadecimal string of ASN.1 data otherwise false
         * @since jsrsasign 4.8.3 asn1hex 1.1.6
         * @description
         * This method checks wheather the argument 'hex' is a hexadecimal string of
         * ASN.1 data or not.
         * @example
         * ASN1HEX.isASN1HEX('0203012345') &rarr; true // PROPER ASN.1 INTEGER
         * ASN1HEX.isASN1HEX('0203012345ff') &rarr; false // TOO LONG VALUE
         * ASN1HEX.isASN1HEX('02030123') &rarr; false // TOO SHORT VALUE
         * ASN1HEX.isASN1HEX('fa3bcd') &rarr; false // WRONG FOR ASN.1
         */
        function isASN1HEX(hex: string): boolean;

        /**
         * check if a hexadecimal tag is a specified ASN.1 context specific tag
         * @param hTag hex string of a hexadecimal ASN.1 tag consists by two characters (e.x. "a0")
         * @param sTag context specific tag in string represention (OPTION) (e.x. "[0]")
         * @return Boolean true if hTag is a ASN.1 context specific tag specified by sTag value.
         * @since jsrsasign 8.0.21 asn1hex 1.2.2
         * @description
         * This method checks if a hexadecimal tag is a specified ASN.1 context specific tag.
         * Structured and non-structured type of tag have the same string representation
         * of context specific tag. For example tag "a0" and "80" have the same string
         * representation "[0]".
         * The sTag has a range from from "[0]" to "[31]".
         * @example
         * ASN1HEX.isContextTag('a0', '[0]') &rarr; true // structured
         * ASN1HEX.isContextTag('a1', '[1]') &rarr; true // structured
         * ASN1HEX.isContextTag('a2', '[2]') &rarr; true // structured
         * ASN1HEX.isContextTag('80', '[0]') &rarr; true // non structured
         * ASN1HEX.isContextTag('81', '[1]') &rarr; true // non structured
         * ASN1HEX.isContextTag('82', '[2]') &rarr; true // non structured
         * ASN1HEX.isContextTag('a0', '[3]') &rarr; false
         * ASN1HEX.isContextTag('80', '[15]') &rarr; false
         *
         * ASN.1 tag bits
         * 12345679
         * ++        tag class(universal:00, context specific:10)
         *   +       structured:1, primitive:0
         *    +++++  tag number (0 - 31)
         */
        function isContextTag(hex: hTag, context: sTag): boolean;

        /**
         * get hexacedimal string from PEM format data<br/>
         * @param oidDotOrHex number dot notation(i.e. 1.2.3) or hexadecimal string for OID
         * @return String name for OID
         * @since jsrsasign 7.2.0 asn1hex 1.1.11
         * @description
         * This static method gets a OID name for
         * a specified string of number dot notation (i.e. 1.2.3) or
         * hexadecimal string.
         * @example
         * ASN1HEX.oidname("2.5.29.37") &rarr; extKeyUsage
         * ASN1HEX.oidname("551d25") &rarr; extKeyUsage
         * ASN1HEX.oidname("0.1.2.3") &rarr; 0.1.2.3 // unknown
         */
        function oidname(oidDotOrHex: string): string;

        /**
         * parse ASN.1 DER hexadecimal string<br/>
         * @param h hexadecimal string of ASN1. DER
         * @return Object associative array of ASN.1 parsed result
         * @since jsrsasign 10.5.3 asn1hex 1.1.x
         * @see KJUR.asn1.ASN1Util.newOjbect
         *
         * @description
         * This method parses ASN.1 DER hexadecimal string.
         * Its result can be applied to {@link KJUR.asn1.ASN1Util.newOjbect}.
         *
         * @example
         * ASN1HEX.parse("31193017...") &rarr; // RDN
         * {set: [{seq: [{oid: "localityName"}, {utf8str: {str: "Test"}}] }]}
         */
        function parse(h: string): ASN1HEXParseResult;
    }
}

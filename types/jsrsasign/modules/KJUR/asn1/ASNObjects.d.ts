declare namespace jsrsasign.KJUR.asn1 {
    interface ASN1ObjectParam {
        obj: ASN1Object;
    }

    interface BigIntegerParam {
        bigint: BigInteger;
    }

    interface ArrayParam<T> {
        array: T[];
    }

    interface BinParam {
        bin: string;
    }

    interface DateParam {
        date: Date;
        withMillis?: boolean;
    }

    interface ExplicitParam {
        explicit: boolean;
    }

    interface HexParam {
        hex: string;
    }

    interface IntegerParam {
        int: number;
    }

    interface NameParam {
        name: string;
    }

    interface ObjectIdentifierParam {
        oid: string;
    }

    interface StringParam {
        str: string;
    }

    interface TagParam {
        str: string;
    }

    interface TypeParam {
        type: string;
    }

    class DERBoolean extends ASN1Object {
        constructor();
    }

    /**
     * class for ASN.1 DER Integer
     * @description
     * As for argument 'params' for constructor, you can specify one of
     * following properties:
     *
     * - int - specify initial ASN.1 value(V) by integer value
     * - bigint - specify initial ASN.1 value(V) by BigInteger object
     * - hex - specify initial ASN.1 value(V) by a hexadecimal string
     *
     * NOTE: 'params' can be omitted.
     */
    class DERInteger extends ASN1Object {
        constructor(params?: IntegerParam | BigIntegerParam | HexParam | number);

        /**
         * set value by Tom Wu's BigInteger object
         * @param bigIntegerValue to set
         */
        setByBigInteger(bigIntegerValue: BigInteger): void;

        /**
         * set value by integer value
         * @param integer value to set
         */
        setByInteger(intValue: number): void;

        /**
         * set value by hex string
         * @param newHexString hexadecimal string of integer value
         * @description
         * NOTE: Value shall be represented by minimum octet length of
         * two's complement representation.
         * @example
         * new KJUR.asn1.DERInteger(123);
         * new KJUR.asn1.DERInteger({'int': 123});
         * new KJUR.asn1.DERInteger({'hex': '1fad'});
         */
        setValueHex(newHexString: string): void;

        getFreshValueHex(): string;
    }

    /**
     * class for ASN.1 DER encoded BitString primitive
     * @description
     * As for argument 'params' for constructor, you can specify one of
     * following properties:
     *
     * - bin - specify binary string (ex. '10111')
     * - array - specify array of boolean (ex. [true,false,true,true])
     * - hex - specify hexadecimal string of ASN.1 value(V) including unused bits
     * - obj - specify `KJUR.asn1.ASN1Util.newObject`
     *   argument for "BitString encapsulates" structure.
     *
     * NOTE1: 'params' can be omitted.
     * NOTE2: 'obj' parameter have been supported since
     * asn1 1.0.11, jsrsasign 6.1.1 (2016-Sep-25).
     *
     * @example
     * // default constructor
     * o = new KJUR.asn1.DERBitString();
     * // initialize with binary string
     * o = new KJUR.asn1.DERBitString({bin: "1011"});
     * // initialize with boolean array
     * o = new KJUR.asn1.DERBitString({array: [true,false,true,true]});
     * // initialize with hexadecimal string (04 is unused bits)
     * o = new KJUR.asn1.DEROctetString({hex: "04bac0"});
     * // initialize with ASN1Util.newObject argument for encapsulated
     * o = new KJUR.asn1.DERBitString({obj: {seq: [{int: 3}, {prnstr: 'aaa'}]}});
     * // above generates a ASN.1 data like this:
     * // BIT STRING, encapsulates {
     * //   SEQUENCE {
     * //     INTEGER 3
     * //     PrintableString 'aaa'
     * //     }
     * //   }
     */
    class DERBitString extends ASN1Object {
        constructor(params?: BinParam | ArrayParam<boolean> | HexParam | ASN1ObjectParam);

        /**
         * set ASN.1 value(V) by a hexadecimal string including unused bits
         */
        setHexValueIncludingUnusedBits(newHexStringIncludingUnusedBits: string): void;

        /**
         * set ASN.1 value(V) by unused bit and hexadecimal string of value
         */
        setUnusedBitsAndHexValue(unusedBits: number, hValue: string): void;

        /**
         * set ASN.1 DER BitString by binary string
         * @param binaryString binary value string (i.e. '10111')
         * @description
         * Its unused bits will be calculated automatically by length of
         * 'binaryValue'.
         *
         * NOTE: Trailing zeros '0' will be ignored.
         * @example
         * o = new KJUR.asn1.DERBitString();
         * o.setByBooleanArray("01011");
         */
        setByBinaryString(binaryString: string): void;

        /**
         * set ASN.1 TLV value(V) by an array of boolean
         * @param booleanArray array of boolean (ex. [true, false, true])
         * @description
         * NOTE: Trailing falses will be ignored in the ASN.1 DER Object.
         * @example
         * o = new KJUR.asn1.DERBitString();
         * o.setByBooleanArray([false, true, false, true, true]);
         */
        setByBooleanArray(booleanArray: boolean[]): void;

        /**
         * generate an array of falses with specified length
         * @param nLength length of array to generate
         * @return array of boolean falses
         * @description
         * This static method may be useful to initialize boolean array.
         * @example
         * o = new KJUR.asn1.DERBitString();
         * o.newFalseArray(3) → [false, false, false]
         */
        static newFalseArray(nLength: number): Array<false>;

        getFreshValueHex(): string;
    }

    /**
     * class for ASN.1 DER OctetString
     * @param params associative array of parameters (ex. {'str': 'aaa'})
     * @description
     * This class provides ASN.1 OctetString simple type.
     * Supported "params" attributes are:
     *
     * - str - to set a string as a value
     * - hex - to set a hexadecimal string as a value
     * - obj - to set a encapsulated ASN.1 value by JSON object
     *    which is defined in `KJUR.asn1.ASN1Util.newObject`
     *
     * NOTE: A parameter 'obj' have been supported
     * for "OCTET STRING, encapsulates" structure.
     * since asn1 1.0.11, jsrsasign 6.1.1 (2016-Sep-25).
     * @see KJUR.asn1.DERAbstractString - superclass
     * @example
     * // default constructor
     * o = new KJUR.asn1.DEROctetString();
     * // initialize with string
     * o = new KJUR.asn1.DEROctetString({str: "aaa"});
     * // initialize with hexadecimal string
     * o = new KJUR.asn1.DEROctetString({hex: "616161"});
     * // initialize with ASN1Util.newObject argument
     * o = new KJUR.asn1.DEROctetString({obj: {seq: [{int: 3}, {prnstr: 'aaa'}]}});
     * // above generates a ASN.1 data like this:
     * // OCTET STRING, encapsulates {
     * //   SEQUENCE {
     * //     INTEGER 3
     * //     PrintableString 'aaa'
     * //     }
     * //   }
     */
    class DEROctetString extends DERAbstractString {
        constructor(params?: StringParam | HexParam | ASN1ObjectParam);
    }

    /** class for ASN.1 DER Null */
    class DERNull extends ASN1Object {
        constructor();
    }

    /**
     * class for ASN.1 DER ObjectIdentifier
     * @param params associative array of parameters (ex. {'oid': '2.5.4.5'})
     * @description
     * As for argument 'params' for constructor, you can specify one of
     * following properties:
     *
     * - oid - specify initial ASN.1 value(V) by a oid string (ex. 2.5.4.13)
     * - hex - specify initial ASN.1 value(V) by a hexadecimal string
     *
     * NOTE: 'params' can be omitted.
     */
    class DERObjectIdentifier extends ASN1Object {
        constructor(params?: ObjectIdentifierParam | HexParam | NameParam);

        /**
         * set value by a hexadecimal string
         * @param newHexString hexadecimal value of OID bytes
         */
        setValueHex(newHexString: string): void;

        /**
         * set value by a OID string
         * @param oidString OID string (ex. 2.5.4.13)
         * @example
         * o = new KJUR.asn1.DERObjectIdentifier();
         * o.setValueOidString("2.5.4.13");
         */
        setValueOidString(oidString: string): void;

        /**
         * set value by a OID name
         * @param oidName OID name (ex. 'serverAuth')
         * @description
         * OID name shall be defined in 'KJUR.asn1.x509.OID.name2oidList'.
         * Otherwise raise error.
         * @example
         * o = new KJUR.asn1.DERObjectIdentifier();
         * o.setValueName("serverAuth");
         */
        setValueName(oidName: string): void;

        getFreshValueHex(): string;
    }

    /**
     * class for ASN.1 DER Enumerated
     * @description
     * As for argument 'params' for constructor, you can specify one of
     * following properties:
     *
     * - int - specify initial ASN.1 value(V) by integer value
     * - hex - specify initial ASN.1 value(V) by a hexadecimal string
     *
     * NOTE: 'params' can be omitted.
     * @example
     * new KJUR.asn1.DEREnumerated(123);
     * new KJUR.asn1.DEREnumerated({int: 123});
     * new KJUR.asn1.DEREnumerated({hex: '1fad'});
     */
    class DEREnumerated extends ASN1Object {
        constructor(params?: IntegerParam | HexParam | number);

        /**
         * set value by Tom Wu's BigInteger object
         * @param bigIntegerValue value to set
         */
        setByBigInteger(bigIntegerValue: BigInteger): void;

        /**
         * set value by integer value
         * @param intValue integer value to set
         */
        setByInteger(intValue: number): void;

        /**
         * set value by integer value
         * @param newHexString hexadecimal string of integer value
         * @description
         * NOTE: Value shall be represented by minimum octet length of
         * two's complement representation.
         */
        setValueHex(newHexString: string): void;

        getFreshValueHex(): string;
    }

    /**
     * class for ASN.1 DER UTF8String
     * @param params associative array of parameters (ex. {'str': 'aaa'})
     */
    class DERUTF8String extends DERAbstractString {
        constructor(params: StringParam);
    }

    /**
     * class for ASN.1 DER NumericString
     * @param params associative array of parameters (ex. {'str': 'aaa'})
     */
    class DERNumericString extends DERAbstractString {
        constructor(params: StringParam);
    }

    /**
     * class for ASN.1 DER PrintableString
     * @param params associative array of parameters (ex. {'str': 'aaa'})
     */
    class DERPrintableString extends DERAbstractString {
        constructor(params: StringParam);
    }

    /**
     * class for ASN.1 DER TeletexString
     * @param params associative array of parameters (ex. {'str': 'aaa'})
     */
    class DERTeletexString extends DERAbstractString {
        constructor(params: StringParam);
    }

    /**
     * class for ASN.1 DER IA5String
     * @param params associative array of parameters (ex. {'str': 'aaa'})
     */
    class DERIA5String extends DERAbstractString {
        constructor(params: StringParam);
    }

    /**
     * class for ASN.1 DER UTCTime
     * @param params associative array of parameters (ex. {'str': '130430235959Z'})
     * @description
     * As for argument 'params' for constructor, you can specify one of
     * following properties:
     *
     * - str - specify initial ASN.1 value(V) by a string (ex.'130430235959Z')
     * - hex - specify initial ASN.1 value(V) by a hexadecimal string
     * - date - specify Date object.
     *
     * NOTE: 'params' can be omitted.
     * @example
     * d1 = new KJUR.asn1.DERUTCTime();
     * d1.setString('130430125959Z');
     *
     * d2 = new KJUR.asn1.DERUTCTime({'str': '130430125959Z'});
     * d3 = new KJUR.asn1.DERUTCTime({'date': new Date(Date.UTC(2015, 0, 31, 0, 0, 0, 0))});
     * d4 = new KJUR.asn1.DERUTCTime('130430125959Z');
     */
    class DERUTCTime extends DERAbstractTime {
        constructor(params?: StringParam | HexParam | DateParam | string);

        /**
         * set value by a Date object
         * @param dateObject Date object to set ASN.1 value(V)
         * @example
         * o = new KJUR.asn1.DERUTCTime();
         * o.setByDate(new Date("2016/12/31"));
         */
        setByDate(dateObject: Date): void;

        getFreshValueHex(): string;
    }

    /**
     * class for ASN.1 DER GeneralizedTime
     * @param params associative array of parameters (ex. {'str': '20130430235959Z'})
     * @description
     * As for argument 'params' for constructor, you can specify one of
     * following properties:
     *
     * - str - specify initial ASN.1 value(V) by a string (ex.'20130430235959Z')
     * - hex - specify initial ASN.1 value(V) by a hexadecimal string
     * - date - specify Date object.
     * - millis - specify flag to show milliseconds (from 1.0.6)
     *
     * NOTE1: 'params' can be omitted.
     * NOTE2: 'withMillis' property is supported from asn1 1.0.6.
     */
    class DERGeneralizedTime extends DERAbstractTime {
        withMillis: boolean;

        constructor(params: StringParam | HexParam | DateParam | string);

        /**
         * set value by a Date object
         * @param dateObject Date object to set ASN.1 value(V)
         * @example
         * When you specify UTC time, use 'Date.UTC' method like this:
         * o1 = new DERUTCTime();
         * o1.setByDate(date);
         *
         * date = new Date(Date.UTC(2015, 0, 31, 23, 59, 59, 0)); #2015JAN31 23:59:59
         */
        setByDate(dateObject: Date): void;

        getFreshValueHex(): string;
    }

    /**
     * class for ASN.1 DER Sequence
     *
     * @description
     * As for argument 'params' for constructor, you can specify one of
     * following properties:
     *
     * - array - specify array of ASN1Object to set elements of content
     *
     * NOTE: 'params' can be omitted.
     */
    class DERSequence extends DERAbstractStructured {
        constructor(params?: ArrayParam<ASN1Object>);
        getFreshValueHex(): string;
    }

    /**
     * class for ASN.1 DER Set
     *
     * @description
     * As for argument 'params' for constructor, you can specify one of
     * following properties:
     *
     * - array - specify array of ASN1Object to set elements of content
     * - sortflag - flag for sort (default: true). ASN.1 BER is not sorted in 'SET OF'.
     *
     * NOTE1: 'params' can be omitted.
     * NOTE2: sortflag is supported since 1.0.5.
     */
    class DERSet extends DERAbstractStructured {
        constructor(params?: ArrayParam<ASN1Object>);
    }

    /**
     * class for ASN.1 DER TaggedObject
     *
     * @description
     * Parameter 'tagNoNex' is ASN.1 tag(T) value for this object.
     * For example, if you find '[1]' tag in a ASN.1 dump,
     * 'tagNoHex' will be 'a1'.
     *
     * As for optional argument 'params' for constructor, you can specify *ANY* of
     * following properties:
     *
     * - explicit - specify true if this is explicit tag otherwise false
     *   (default is 'true').
     * - tag - specify tag (default is 'a0' which means [0])
     * - obj - specify ASN1Object which is tagged
     *
     * @example
     * d1 = new KJUR.asn1.DERUTF8String({'str':'a'});
     * d2 = new KJUR.asn1.DERTaggedObject({'obj': d1});
     * hex = d2.getEncodedHex();
     */
    class DERTaggedObject extends ASN1Object {
        constructor(params?: TagParam | ExplicitParam | ASN1ObjectParam);

        /**
         * set value by an ASN1Object
         * @param isExplicitFlag flag for explicit/implicit tag
         * @param tagNoHex hexadecimal string of ASN.1 tag
         * @param asn1Object ASN.1 to encapsulate
         */
        setASN1Object(isExplicitFlag: boolean, tagNoHex: string, asn1Object: ASN1Object): void;

        getFreshValueHex(): string;
    }

    /**
     * base class for ASN.1 DER string classes
     * @param params associative array of parameters (ex. {'str': 'aaa'})
     * @description
     *
     * As for argument 'params' for constructor, you can specify one of
     * following properties:
     *
     * - str - specify initial ASN.1 value(V) by a string
     * - hex - specify initial ASN.1 value(V) by a hexadecimal string
     *
     * NOTE: 'params' can be omitted.
     */
    class DERAbstractString {
        s: string;

        constructor(params?: StringParam | HexParam);

        /**
         * get string value of this string object
         * @return string value of this string object
         */
        getString(): string;

        /**
         * set value by a string
         * @param newS value by a string to set
         */
        setString(newS: string): void;

        /**
         * set value by a hexadecimal string
         * @param newHexString value by a hexadecimal string to set
         */
        setStringHex(newHexString: string): void;

        getFreshValueHex(): string;
    }

    /**
     * base class for ASN.1 DER Generalized/UTCTime class
     * @param params associative array of parameters (ex. {'str': '130430235959Z'})
     */
    class DERAbstractTime extends ASN1Object {
        constructor(params: StringParam);

        /**
         * format date string by Data object
         * @param type 'utc' or 'gen'
         * @param withMillis flag for with millisections or not
         * @description
         * 'withMillis' flag is supported from asn1 1.0.6.
         */
        private formatDate(dateObject: Date, type: 'utc' | 'gen', withMillis: boolean): string;
        private zeroPadding(s: string, len: number): string;

        /**
         * get string value of this string object
         * @return string value of this time object
         */
        getString(): string;

        /**
         * set value by a string
         * @param newS value by a string to set such like "130430235959Z"
         */
        setString(newS: string): void;

        /**
         * set value by a Date object
         * @param year year of date (ex. 2013)
         * @param month month of date between 1 and 12 (ex. 12)
         * @param day day of month
         * @param hour hours of date
         * @param min minutes of date
         * @param sec seconds of date
         */
        setByDateValue(year: number, month: number, day: number, hour: number, min: number, sec: number): void;

        getFreshValueHex(): string;
    }

    /** base class for ASN.1 DER structured class */
    class DERAbstractStructured {
        asn1Array: ASN1Object[];

        constructor(asn1Array?: ArrayParam<ASN1Object>);

        /**
         * set value by array of ASN1Object
         * @param asn1ObjectArray array of ASN1Object to set
         */
        setByASN1ObjectArray(asn1ObjectArray: ASN1Object[]): string;

        /**
         * append an ASN1Object to internal array
         * @param asn1Object object to add
         */
        appendASN1Object(asn1Object: ASN1Object): void;
    }
}

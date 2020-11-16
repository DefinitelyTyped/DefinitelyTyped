declare namespace jsrsasign.KJUR.asn1 {
    interface ASNObject {
        bool: DERBoolean;
    }

    interface ASNObject {
        int: DERInteger;
    }

    interface ASNObject {
        bitstr: DERBitString;
    }

    interface ASNObject {
        octstr: DEROctetString;
    }

    interface ASNObject {
        null: DERNull;
    }

    interface ASNObject {
        oid: DERObjectIdentifier;
    }

    interface ASNObject {
        enum: DEREnumerated;
    }

    interface ASNObject {
        utf8str: DERUTF8String;
    }

    interface ASNObject {
        numstr: DERNumericString;
    }

    interface ASNObject {
        prnstr: DERPrintableString;
    }

    interface ASNObject {
        telstr: DERTeletexString;
    }

    interface ASNObject {
        ia5str: DERIA5String;
    }

    interface ASNObject {
        utctime: DERUTCTime;
    }

    interface ASNObject {
        gentime: DERGeneralizedTime;
    }

    interface ASNObject {
        seq: DERSequence;
    }

    interface ASNObject {
        set: DERSet;
    }

    interface ASNObject {
        tag: DERTaggedObject;
    }

    /** ASN1 utilities class */
    class ASN1Util {
        integerToByteHex(i: number): string;

        bigIntToMinTwosComplementsHex(bigIntegerValue: BigInteger): string;

        /**
         * get PEM string from hexadecimal data and header string
         * @param dataHex hexadecimal string of PEM body
         * @param pemHeader PEM header string (ex. 'RSA PRIVATE KEY')
         * @return PEM formatted string of input data
         * @description
         * This method converts a hexadecimal string to a PEM string with
         * a specified header. Its line break will be CRLF("\r\n").
         * @example
         * var pem = KJUR.asn1.ASN1Util.getPEMStringFromHex('616161', 'RSA PRIVATE KEY');
         * // value of pem will be:
         * -----BEGIN PRIVATE KEY-----
         * YWFh
         * -----END PRIVATE KEY-----
         */
        static getPEMStringFromHex(dataHex: string, pemHeader: string): string;

        /**
         * generate ASN1Object specifed by JSON parameters
         * @param param JSON parameter to generate ASN1Object
         * @description
         * generate any ASN1Object specified by JSON param
         * including ASN.1 primitive or structured.
         * Generally 'param' can be described as follows:
         * ```
         * {TYPE-OF-ASNOBJ: ASN1OBJ-PARAMETER}
         * ```
         * 'TYPE-OF-ASN1OBJ' can be one of following symbols:
         *
         * - 'bool' - DERBoolean
         * - 'int' - DERInteger
         * - 'bitstr' - DERBitString
         * - 'octstr' - DEROctetString
         * - 'null' - DERNull
         * - 'oid' - DERObjectIdentifier
         * - 'enum' - DEREnumerated
         * - 'utf8str' - DERUTF8String
         * - 'numstr' - DERNumericString
         * - 'prnstr' - DERPrintableString
         * - 'telstr' - DERTeletexString
         * - 'ia5str' - DERIA5String
         * - 'utctime' - DERUTCTime
         * - 'gentime' - DERGeneralizedTime
         * - 'seq' - DERSequence
         * - 'set' - DERSet
         * - 'tag' - DERTaggedObject
         *
         * @example
         * newObject({'prnstr': 'aaa'});
         * newObject({'seq': [{'int': 3}, {'prnstr': 'aaa'}]})
         * // ASN.1 Tagged Object
         * newObject({'tag': {'tag': 'a1',
         *                    'explicit': true,
         *                    'obj': {'seq': [{'int': 3}, {'prnstr': 'aaa'}]}}});
         * // more simple representation of ASN.1 Tagged Object
         * newObject({'tag': ['a1',
         *                    true,
         *                    {'seq': [
         *                      {'int': 3},
         *                      {'prnstr': 'aaa'}]}
         *                   ]});
         */
        newObject(param: ASNObject): ASN1Object;

        /**
         * get encoded hexadecimal string of ASN1Object specifed by JSON parameters
         *
         * @param param JSON parameter to generate ASN1Object
         * @return hexadecimal string of ASN1Object
         * @description
         * As for ASN.1 object representation of JSON object,
         * please see `newObject`.
         * @example
         * jsonToASN1HEX({'prnstr': 'aaa'});
         */
        jsonToASN1HEX(param: ASNObject): string;

        /**
         * get dot noted oid number string from hexadecimal value of OID
         *
         * @param hex hexadecimal value of object identifier
         * @return dot noted string of object identifier
         * @description
         * This static method converts from hexadecimal string representation of
         * ASN.1 value of object identifier to oid number string.
         * @example
         * KJUR.asn1.ASN1Util.oidHexToInt('550406') → "2.5.4.6"
         */
        static oidHexToInt(hex: string): string;
    }
}

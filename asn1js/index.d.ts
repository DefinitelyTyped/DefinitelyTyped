declare namespace asn1js {
    namespace org {
        namespace pkijs {
            namespace asn1 {
                class ANY {
                    constructor(...args: any[]);
                }
                class ASN1_CONSTRUCTED {
                    constructor(...args: any[]);
                }
                class ASN1_PRIMITIVE {
                    constructor(...args: any[]);
                }
                class ASN1_block {
                    constructor(...args: any[]);
                }
                class BITSTRING {
                    constructor(...args: any[]);
                }
                class BMPSTRING {
                    constructor(...args: any[]);
                }
                class BOOLEAN {
                    constructor(...args: any[]);
                }
                class CHARACTERSTRING {
                    constructor(...args: any[]);
                }
                class CHOICE {
                    constructor(...args: any[]);
                }
                class DATE {
                    constructor(...args: any[]);
                }
                class DATETIME {
                    constructor(...args: any[]);
                }
                class DURATION {
                    constructor(...args: any[]);
                }
                class ENUMERATED {
                    constructor(...args: any[]);
                }
                class EOC {
                    constructor(...args: any[]);
                }
                class GENERALIZEDTIME {
                    constructor(...args: any[]);
                }
                class GENERALSTRING {
                    constructor(...args: any[]);
                }
                class GRAPHICSTRING {
                    constructor(...args: any[]);
                }
                class IA5STRING {
                    constructor(...args: any[]);
                }
                class INTEGER {
                    constructor(...args: any[]);
                }
                class NULL {
                    constructor(...args: any[]);
                }
                class NUMERICSTRING {
                    constructor(...args: any[]);
                }
                class OCTETSTRING {
                    constructor(...args: any[]);
                }
                class OID {
                    constructor(...args: any[]);
                }
                class PRINTABLESTRING {
                    constructor(...args: any[]);
                }
                class REPEATED {
                    constructor(...args: any[]);
                }
                class SEQUENCE {
                    constructor(...args: any[]);
                }
                class SET {
                    constructor(...args: any[]);
                }
                class TELETEXSTRING {
                    constructor(...args: any[]);
                }
                class TIME {
                    constructor(...args: any[]);
                }
                class TIMEOFDAY {
                    constructor(...args: any[]);
                }
                class UNIVERSALSTRING {
                    constructor(...args: any[]);
                }
                class UTCTIME {
                    constructor(...args: any[]);
                }
                class UTF8STRING {
                    constructor(...args: any[]);
                }
                class VIDEOTEXSTRING {
                    constructor(...args: any[]);
                }
                class VISIBLESTRING {
                    constructor(...args: any[]);
                }
            }
            function compareSchema(...args: any[]): any;
            function fromBER(...args: any[]): any;
            function fromJSON(...args: any[]): any;
            function verifySchema(...args: any[]): any;
            function bufferToHexCodes(...args: any[]): any;
        }
    }
}
declare module "asn1js" {
    abstract class Asn1Object {
        constructor(params: any);
        readonly valueBlock: {
            valueHex: ArrayBuffer;
        }
        toBER(param: boolean): ArrayBuffer;
    }
    class BitString extends Asn1Object { }
    class BmpString extends Asn1Object { }
    class Boolean extends Asn1Object { }
    class CharacterString extends Asn1Object { }
    class Choice extends Asn1Object { }
    class Date extends Asn1Object { }
    class DateTime extends Asn1Object { }
    class Duration extends Asn1Object { }
    class Enumerated extends Asn1Object { }
    class Eoc extends Asn1Object { }
    class GeneralizedTime extends Asn1Object { }
    class GeneralString extends Asn1Object { }
    class GraphicString extends Asn1Object { }
    class Ia5String extends Asn1Object { }
    class Integer extends Asn1Object { }
    class Null extends Asn1Object { }
    class NumericString extends Asn1Object { }
    class OctetString extends Asn1Object { }
    class ObjectIdentifier extends Asn1Object { }
    class PrintableString extends Asn1Object { }
    class Repeated extends Asn1Object { }
    class Sequence extends Asn1Object { }
    class Set extends Asn1Object { }
    class TeletexString extends Asn1Object { }
    class Time extends Asn1Object { }
    class TimeOfDay extends Asn1Object { }
    class UniversalString extends Asn1Object { }
    class UTCTime extends Asn1Object { }
    class Utf8String extends Asn1Object { }
    class VideotexSTRING extends Asn1Object { }
    class VisibleString extends Asn1Object { }

    function compareSchema(...args: any[]): any;
    function fromBER(data: ArrayBuffer): any;
    function fromJSON(...args: any[]): any;
    function verifySchema(...args: any[]): any;
    function bufferToHexCodes(...args: any[]): any;
}
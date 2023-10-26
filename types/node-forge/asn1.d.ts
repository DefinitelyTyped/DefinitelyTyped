declare module "node-forge" {
    namespace asn1 {
        enum Class {
            UNIVERSAL = 0x00,
            APPLICATION = 0x40,
            CONTEXT_SPECIFIC = 0x80,
            PRIVATE = 0xc0,
        }

        enum Type {
            NONE = 0,
            BOOLEAN = 1,
            INTEGER = 2,
            BITSTRING = 3,
            OCTETSTRING = 4,
            NULL = 5,
            OID = 6,
            ODESC = 7,
            EXTERNAL = 8,
            REAL = 9,
            ENUMERATED = 10,
            EMBEDDED = 11,
            UTF8 = 12,
            ROID = 13,
            SEQUENCE = 16,
            SET = 17,
            PRINTABLESTRING = 19,
            IA5STRING = 22,
            UTCTIME = 23,
            GENERALIZEDTIME = 24,
            BMPSTRING = 30,
        }

        interface Asn1 {
            tagClass: Class;
            type: Type;
            constructed: boolean;
            composed: boolean;
            value: Bytes | Asn1[];
        }

        function create(tagClass: Class, type: Type, constructed: boolean, value: Bytes | Asn1[]): Asn1;
        function fromDer(bytes: Bytes | util.ByteBuffer, strict?: boolean): Asn1;
        function toDer(obj: Asn1): util.ByteBuffer;

        /**
         * Converts an OID dot-separated string to a byte buffer. The byte buffer
         * contains only the DER-encoded value, not any tag or length bytes.
         *
         * @param oid the OID dot-separated string.
         *
         * @return the byte buffer.
         */
        function oidToDer(oid: OID): util.ByteBuffer;

        /**
         * Converts a DER-encoded byte buffer to an OID dot-separated string. The
         * byte buffer should contain only the DER-encoded value, not any tag or
         * length bytes.
         *
         * @param bytes the byte buffer.
         *
         * @return the OID dot-separated string.
         */
        function derToOid(bytes: Bytes | util.ByteBuffer): OID;

        function integerToDer(int: number): util.ByteBuffer;
        function derToInteger(bytes: Bytes | util.ByteBuffer): number;

        function dateToUtcTime(date: Date | string): Bytes;
        function utcTimeToDate(bytes: Bytes): Date;

        function dateToGeneralizedTime(date: Date | string): Bytes;
        function generalizedTimeToDate(bytes: Bytes): Date;
    }
}

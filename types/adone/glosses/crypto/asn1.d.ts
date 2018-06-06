declare namespace adone.crypto {
    namespace asn1 {
        namespace I {
            interface LocalBaseBlockParams {
                blockLength?: number;
                error?: string;
                warnings?: string[];
                valueBeforeDecode?: ArrayBuffer;
            }

            interface JsonLocalBaseBlock {
                blockName: string;
                blockLength: number;
                error: string;
                warnings: string[];
                valueBeforeDecode: ArrayBuffer;
            }

            class LocalBaseBlock {
                blockLength: number;
                error: string;
                warnings: string[];
                valueBeforeDecode: ArrayBuffer;

                constructor(params?: LocalBaseBlockParams);
                /**
                 * Aux function, need to get a block name. Need to have it here for inhiritence
                 */
                static blockName(): string;
                /**
                 * Convertion for the block to JSON object
                 */
                toJSON(): JsonLocalBaseBlock;
            }

            interface LocalHexBlockParams extends LocalBaseBlockParams {
                isHexOnly?: boolean;
                valueHex?: ArrayBuffer;
            }

            class LocalHexBlock {
                isHexOnly: boolean;

                valueHex: ArrayBuffer;

                constructor(params: any);

                /**
                 * Aux function, need to get a block name. Need to have it here for inhiritence
                 */
                static blockName(): string;

                /**
                 * Base function for converting block from BER encoded array of bytes
                 *
                 * @param inputBuffer ASN.1 BER encoded array
                 * @param inputOffset Offset in ASN.1 BER encoded array where decoding should be started
                 * @param inputLength Maximum length of array of bytes which can be using in this function
                 */
                fromBER(inputBuffer: ArrayBuffer, inputOffset: number, inputLength: number): number;

                /**
                 * Encoding of current ASN.1 block into ASN.1 encoded array (BER rules)
                 *
                 * @param sizeOnly Flag that we need only a size of encoding, not a real array of bytes
                 */
                toBER(sizeOnly?: boolean): ArrayBuffer;

                /**
                 * Convertion for the block to JSON object
                 */
                toJSON(): any;
            }

            interface LocalIdentificationBlockParams {
                idBlock?: LocalHexBlockParams & {
                    isConstructed?: boolean;
                    tagClass?: number;
                    tagNumber?: number;
                };
            }

            class LocalIdentificationBlock extends LocalBaseBlock {
                isConstructed: boolean;

                tagClass: number;

                tagNumber: number;

                constructor(params?: LocalIdentificationBlockParams);

                // ILocalHexBlock implementation
                isHexOnly: boolean;
                valueHex: ArrayBuffer;
                fromBER(inputBuffer: ArrayBuffer, inputOffset: number, inputLength: number): number;
                toBER(sizeOnly?: boolean): ArrayBuffer;
            }

            interface LocalLengthBlockParams {
                lenBlock?: {
                    isIndefiniteForm?: boolean;
                    longFormUsed?: boolean;
                    length: number;
                };
            }

            class LocalLengthBlock extends LocalBaseBlock {
                isIndefiniteForm: boolean;
                longFormUsed: boolean;
                length: number;
                constructor(params?: LocalLengthBlockParams);
                fromBER(inputBuffer: ArrayBuffer, inputOffset: number, inputLength: number): void;
                toBER(sizeOnly?: boolean): ArrayBuffer;
            }

            class LocalValueBlock extends LocalBaseBlock {
                fromBER(inputBuffer: ArrayBuffer, inputOffset: number, inputLength: number): void;
                toBER(sizeOnly?: boolean): ArrayBuffer;
            }

            interface BaseBlockParams extends LocalBaseBlockParams {
                name?: string;
                optional?: boolean;
                primitiveSchema?: object;
            }

            interface LocalPrimitiveValueBlockParams extends LocalBaseBlockParams {
                valueHex?: ArrayBuffer;
                isHexOnly?: boolean;
            }

            class LocalPrimitiveValueBlock extends LocalValueBlock {
                valueHex: ArrayBuffer;
                isHexOnly: boolean;
                fromBER(inputBuffer: ArrayBuffer, inputOffset: number, inputLength: number): number;
                toBER(sizeOnly?: boolean): ArrayBuffer;
            }

            interface LocalConstructedValueBlockParams extends LocalBaseBlockParams {
                value?: LocalValueBlock;
                isIndefiniteForm?: boolean;
            }

            class LocalConstructedValueBlock extends LocalValueBlock {
                value: LocalValueBlock[];
                isIndefiniteForm: boolean;
                fromBER(inputBuffer: ArrayBuffer, inputOffset: number, inputLength: number): number;
                toBER(sizeOnly?: boolean): ArrayBuffer;
            }

            class LocalEndOfContentValueBlock extends LocalValueBlock {
                constructor(params?: LocalBaseBlockParams);
                fromBER(inputBuffer: ArrayBuffer, inputOffset: number, inputLength: number): number;
                toBER(sizeOnly?: boolean): ArrayBuffer;
            }

            interface LocalBooleanValueBlockParams extends LocalBaseBlockParams {
                value?: boolean;
                isHexOnly?: boolean;
                valueHex?: ArrayBuffer;
            }

            class LocalBooleanValueBlock extends LocalValueBlock {
                value: boolean;
                isHexOnly: boolean;
                valueHex: ArrayBuffer;
                fromBER(inputBuffer: ArrayBuffer, inputOffset: number, inputLength: number): number;
                toBER(sizeOnly?: boolean): ArrayBuffer;
            }

            interface LocalOctetStringValueBlockParams extends LocalConstructedValueBlockParams, LocalHexBlockParams {
                isConstructed?: boolean;
            }

            class LocalOctetStringValueBlock extends LocalConstructedValueBlock {
                isConstructed: boolean;
                isHexOnly: boolean;
                valueHex: ArrayBuffer;

                constructor(params?: LocalOctetStringValueBlockParams);
            }

            interface LocalBitStringValueBlockParams extends LocalConstructedValueBlockParams, LocalHexBlockParams {
                unusedBits?: number;
                isConstructed?: boolean;
                blockLength?: number;
            }

            class LocalBitStringValueBlock extends LocalConstructedValueBlock implements LocalHexBlock {
                unusedBits: number;
                isConstructed: boolean;
                blockLength: number;
                isHexOnly: boolean;
                valueHex: ArrayBuffer;
                constructor(params?: LocalBitStringValueBlockParams);
            }

            interface LocalIntegerValueBlockParams extends LocalBaseBlockParams, LocalHexBlockParams {
            }

            class LocalIntegerValueBlock extends LocalValueBlock implements LocalHexBlock {
                valueDec: number;
                isHexOnly: boolean;
                valueHex: ArrayBuffer;
                constructor(params?: LocalIntegerValueBlockParams);
                fromBER(inputBuffer: ArrayBuffer, inputOffset: number, inputLength: number): number;
                toBER(sizeOnly?: boolean): ArrayBuffer;
                /**
                 * Base function for converting block from DER encoded array of bytes
                 *
                 * @param inputBuffer ASN.1 DER encoded array
                 * @param inputOffset Offset in ASN.1 DER encoded array where decoding should be started
                 * @param inputLength Maximum length of array of bytes which can be using in this function
                 * @param expectedLength Expected length of converted "valueHex" buffer
                 */
                fromDER(inputBuffer: ArrayBuffer, inputOffset: number, inputLength: number, expectedLength?: number): number;
                /**
                 * Encoding of current ASN.1 block into ASN.1 encoded array (DER rules)
                 *
                 * @param sizeOnly Flag that we need only a size of encoding, not a real array of bytes
                 */
                toDER(sizeOnly?: boolean): ArrayBuffer;
            }

            interface IntegerParams {
                value?: number;
            }

            interface LocalSidValueBlockParams extends LocalBaseBlockParams, LocalHexBlockParams {
                valueDec?: number;
                isFirstSid?: boolean;
            }

            class LocalSidValueBlock extends LocalBaseBlock implements LocalHexBlock {
                valueDec: number;
                isFirstSid: boolean;
                isHexOnly: boolean;
                valueHex: ArrayBuffer;
                constructor(params?: LocalSidValueBlockParams);
                fromBER(inputBuffer: ArrayBuffer, inputOffset: number, inputLength: number): number;
                toBER(sizeOnly?: boolean): ArrayBuffer;
                toString(): string;
            }

            interface LocalObjectIdentifierValueBlockParams extends LocalBaseBlockParams {
                value?: string;
            }

            class LocalObjectIdentifierValueBlock extends LocalValueBlock {
                constructor(params?: LocalObjectIdentifierValueBlockParams);

                /**
                 * Create "LocalObjectIdentifierValueBlock" class from string
                 *
                 * @param string Input string to convert from
                 */
                fromString(data: string): boolean;
                /**
                 * Converts "LocalObjectIdentifierValueBlock" class to string
                 */
                toString(): string;
            }

            interface LocalUtf8StringValueBlockParams extends LocalBaseBlockParams, LocalHexBlock {
            }

            class LocalUtf8StringValueBlock extends LocalBaseBlock implements LocalHexBlock {
                isHexOnly: boolean;
                valueHex: ArrayBuffer;
                constructor(params?: LocalSidValueBlockParams);
                fromBER(inputBuffer: ArrayBuffer, inputOffset: number, inputLength: number): number;
                toBER(sizeOnly?: boolean): ArrayBuffer;
                toString(): string;
            }

            interface Utf8StringParams {
                value?: string;
            }

            interface LocalBmpStringValueBlockParams extends LocalHexBlockParams, LocalBaseBlockParams {
            }

            class LocalBmpStringValueBlock extends LocalBaseBlock implements LocalHexBlock {
                value: string;
                isHexOnly: boolean;
                valueHex: ArrayBuffer;

                constructor(params?: LocalBmpStringValueBlockParams);

                fromBER(inputBuffer: ArrayBuffer, inputOffset: number, inputLength: number): number;
                toBER(sizeOnly?: boolean): ArrayBuffer;
            }

            interface LocalUniversalStringValueParams extends LocalHexBlockParams, LocalBaseBlockParams {
            }

            class LocalUniversalStringValueBlock extends LocalBaseBlock implements LocalHexBlock {
                value: string;
                isHexOnly: boolean;
                valueHex: ArrayBuffer;

                constructor(params?: LocalUniversalStringValueParams);

                fromBER(inputBuffer: ArrayBuffer, inputOffset: number, inputLength: number): number;
                toBER(sizeOnly?: boolean): ArrayBuffer;
            }

            interface LocalSimpleLocalSimpleStringValueBlockParams extends LocalHexBlockParams, LocalBaseBlockParams {
            }

            class LocalSimpleLocalSimpleStringValueBlock extends LocalBaseBlock implements LocalHexBlock {
                value: string;
                isHexOnly: boolean;
                valueHex: ArrayBuffer;

                constructor(params?: LocalSimpleLocalSimpleStringValueBlockParams);

                fromBER(inputBuffer: ArrayBuffer, inputOffset: number, inputLength: number): number;
                toBER(sizeOnly?: boolean): ArrayBuffer;
            }

            interface LocalSimpleStringBlockParams {
                value?: string;
            }

            class LocalSimpleStringBlock extends BaseBlock<LocalSimpleLocalSimpleStringValueBlock> {
                constructor(params?: LocalSimpleStringBlockParams);
                /**
                 * Function converting ArrayBuffer into ASN.1 internal string
                 *
                 * @param inputBuffer ASN.1 BER encoded array
                 */
                fromBuffer(inputBuffer: ArrayBuffer): void;
                /**
                 * Function converting JavaScript string into ASN.1 internal class
                 *
                 * @param inputString ASN.1 BER encoded array
                 */
                fromString(inputString: string): void;
            }

            interface BmpStringParams {
                value?: string;
            }

            interface UniversalStringParams {
                value?: string;
            }

            interface UTCTimeParams extends LocalSimpleLocalSimpleStringValueBlockParams {
                value?: string;
                valueDate?: Date;
            }

            interface ChoiceParams {
                value?: LocalValueBlock[];
                optional?: boolean;
            }

            interface AnyParams {
                name?: string;
                optional?: boolean;
            }

            interface RepeatedParams {
                name?: string;
                optional?: boolean;
                value?: Any;
                local?: boolean;
            }

            interface RawDataParams {
                data?: ArrayBuffer;
            }
        }

        class BaseBlock<T extends I.LocalValueBlock> extends I.LocalBaseBlock {
            constructor(parameters?: I.BaseBlockParams, valueBlockType?: typeof I.LocalValueBlock);
            idBlock: I.LocalIdentificationBlock;
            lenBlock: I.LocalLengthBlock;
            valueBlock: T;
            fromBER(inputBuffer: ArrayBuffer, inputOffset: number, inputLength: number): number;
            toBER(sizeOnly?: boolean): ArrayBuffer;
        }

        class Primitive extends BaseBlock<I.LocalPrimitiveValueBlock> {
        }

        class Constructed extends BaseBlock<I.LocalConstructedValueBlock> { }

        class EndOfContent extends BaseBlock<I.LocalEndOfContentValueBlock> { }

        class Boolean extends BaseBlock<I.LocalBooleanValueBlock> { }

        class Sequence extends Constructed { }

        class Set extends Constructed { }

        class Null extends BaseBlock<I.LocalValueBlock> { }

        class OctetString extends BaseBlock<I.LocalOctetStringValueBlock> {
            constructor(params?: I.LocalOctetStringValueBlockParams);
            /**
             * Checking that two OCTETSTRINGs are equal
             */
            isEqual(octetString: OctetString): boolean;
        }

        class BitString extends BaseBlock<I.LocalBitStringValueBlock> {
            constructor(params?: I.LocalBitStringValueBlockParams);
            /**
             * Checking that two BITSTRINGs are equal
             * @param bitString
             */
            isEqual(bitString: BitString): boolean;
        }

        class Integer extends BaseBlock<I.LocalIntegerValueBlock> {
            constructor(params?: I.IntegerParams)
            /**
             * Compare two Integer object, or Integer and ArrayBuffer objects
             */
            isEqual(otherValue: Integer | ArrayBuffer): boolean;
            /**
             * Convert current Integer value from BER into DER format
             */
            convertToDER(): Integer;
            /**
             * Convert current Integer value from DER to BER format
             */
            convertFromDER(): Integer;
        }

        class Enumerated extends Integer { }

        class ObjectIdentifier extends BaseBlock<I.LocalObjectIdentifierValueBlock> {
            constructor(params?: I.LocalObjectIdentifierValueBlockParams);
        }

        class Utf8String extends BaseBlock<I.LocalUtf8StringValueBlock> {
            constructor(params?: I.Utf8StringParams);
            /**
             * Function converting ArrayBuffer into ASN.1 internal string
             *
             * @param inputBuffer ASN.1 BER encoded array
             */
            fromBuffer(inputBuffer: ArrayBuffer): void;
            /**
             * Function converting JavaScript string into ASN.1 internal class
             *
             * @param inputString ASN.1 BER encoded array
             */
            fromString(inputString: string): void;
        }

        class BmpString extends BaseBlock<I.LocalBmpStringValueBlock> {
            constructor(params?: I.BmpStringParams);
            /**
             * Function converting ArrayBuffer into ASN.1 internal string
             *
             * @param inputBuffer ASN.1 BER encoded array
             */
            fromBuffer(inputBuffer: ArrayBuffer): void;
            /**
             * Function converting JavaScript string into ASN.1 internal class
             *
             * @param inputString ASN.1 BER encoded array
             */
            fromString(inputString: string): void;
        }

        class UniversalString extends BaseBlock<I.LocalUniversalStringValueBlock> {
            constructor(params?: I.UniversalStringParams);
            /**
             * Function converting ArrayBuffer into ASN.1 internal string
             *
             * @param inputBuffer ASN.1 BER encoded array
             */
            fromBuffer(inputBuffer: ArrayBuffer): void;
            /**
             * Function converting JavaScript string into ASN.1 internal class
             *
             * @param inputString ASN.1 BER encoded array
             */
            fromString(inputString: string): void;
        }

        class NumericString extends I.LocalSimpleStringBlock { }

        class PrintableString extends I.LocalSimpleStringBlock { }

        class TeletexString extends I.LocalSimpleStringBlock { }

        class VideotexString extends I.LocalSimpleStringBlock { }

        class IA5String extends I.LocalSimpleStringBlock { }

        class GraphicString extends I.LocalSimpleStringBlock { }

        class VisibleString extends I.LocalSimpleStringBlock { }

        class GeneralString extends I.LocalSimpleStringBlock { }

        class CharacterString extends I.LocalSimpleStringBlock { }

        class UTCTime extends VisibleString {
            year: number;
            month: number;
            day: number;
            hour: number;
            minute: number;
            second: number;
            constructor(params?: I.UTCTimeParams);
            /**
             * Function converting ASN.1 internal string into ArrayBuffer
             */
            toBuffer(): ArrayBuffer;
            /**
             * Function converting "Date" object into ASN.1 internal string
             *
             * @param inputDate JavaScript "Date" object
             */
            fromDate(inputDate: Date): void;
            /**
             * Function converting ASN.1 internal string into "Date" object
             */
            toDate(): Date;
        }

        class GeneralizedTime extends UTCTime {
            millisecond: number;
        }

        class DATE extends Utf8String { }

        class TimeOfDay extends Utf8String { }

        class DateTime extends Utf8String { }

        class Duration extends Utf8String { }

        class TIME extends Utf8String { }

        class Choice {
            value: I.LocalValueBlock[];
            optional: boolean;
            constructor(params?: I.ChoiceParams);
        }

        class Any {
            name: string;
            optional: boolean;
            constructor(params?: I.AnyParams);
        }

        class Repeated {
            name: string;
            optional: boolean;
            value: Any;
            local: boolean;
            constructor(params?: I.RepeatedParams);
        }

        class RawData {
            data: ArrayBuffer;

            constructor(params?: I.RawDataParams);

            fromBER(inputBuffer: ArrayBuffer, inputOffset: number, inputLength: number): number;
            toBER(sizeOnly?: boolean): ArrayBuffer;
        }

        /**
         * Major function for decoding ASN.1 BER array into internal library structuries
         *
         * @param inputBuffer ASN.1 BER encoded array of bytes
         */
        function fromBER(inputBuffer: ArrayBuffer): { offset: number; result: I.LocalBaseBlock };

        /**
         * Compare of two ASN.1 object trees
         *
         * @param root Root of input ASN.1 object tree
         * @param inputData Input ASN.1 object tree
         * @param inputSchema Input ASN.1 schema to compare with
         */
        function compareSchema(root: any, inputData: any, inputSchema: any): { verified: boolean, result?: any };

        /**
         * ASN.1 schema verification for ArrayBuffer data
         *
         * @param inputBuffer Input BER-encoded ASN.1 data
         * @param inputSchema Input ASN.1 schema to verify against to
         */
        function verifySchema(inputBuffer: ArrayBuffer, inputSchema: any): { verified: boolean, result?: any };
    }
}

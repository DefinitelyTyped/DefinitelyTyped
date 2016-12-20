// Type definitions for asn1js
// Project: https://github.com/PeculiarVentures/ASN1.js
// Definitions by: Stepan Miroshin <https://github.com/microshine>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

import { getParametersValue, padNumber, isEqualBuffer, bufferToHexCodes, checkBufferParams, utilToBase, utilFromBase, utilEncodeTC, utilDecodeTC, utilConcatBuf, nearestPowerOf2 } from "pvutils";

export = Asn1js;

declare namespace Asn1js {

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
         * 
         * @static
         * @returns {string}
         * 
         * @memberOf LocalBaseBlock
         */
        static blockName(): string;
        /**
         * Convertion for the block to JSON object
         * 
         * @returns {JsonLocalBaseBlock}
         * 
         * @memberOf LocalBaseBlock
         */
        toJSON(): JsonLocalBaseBlock;
    }

    interface LocalHexBlockParams extends LocalBaseBlockParams {
        isHexOnly?: boolean;
        valueHex?: ArrayBuffer;
    }

    interface ILocalHexBlock {
        isHexOnly: boolean;
        valueHex: ArrayBuffer;
        /**
         * Base function for converting block from BER encoded array of bytes
         * 
         * @param {ArrayBuffer} inputBuffer ASN.1 BER encoded array
         * @param {number} inputOffset Offset in ASN.1 BER encoded array where decoding should be started
         * @param {number} inputLength Maximum length of array of bytes which can be using in this function
         * @returns {number} Offset after least decoded byte
         * 
         * @memberOf LocalHexBlockMixin
         */
        fromBER(inputBuffer: ArrayBuffer, inputOffset: number, inputLength: number): number;
        /**
         * Encoding of current ASN.1 block into ASN.1 encoded array (BER rules)
         * 
         * @param {boolean} [sizeOnly=false] Flag that we need only a size of encoding, not a real array of bytes
         * @returns {ArrayBuffer}
         * 
         * @memberOf LocalHexBlockMixin
         */
        toBER(sizeOnly?: boolean): ArrayBuffer;
        /**
         * Convertion for the block to JSON object
         * @returns {*}
	     */
        toJSON(): any;
    }

    class LocalHexBlock implements ILocalHexBlock {
        isHexOnly: boolean;
        valueHex: ArrayBuffer;
        constructor(params: any);
        /**
         * Aux function, need to get a block name. Need to have it here for inhiritence
         * 
         * @static
         * @returns {string}
         * 
         * @memberOf LocalHexBlockMixin
         */
        static blockName(): string;
        /**
         * Base function for converting block from BER encoded array of bytes
         * 
         * @param {ArrayBuffer} inputBuffer ASN.1 BER encoded array
         * @param {number} inputOffset Offset in ASN.1 BER encoded array where decoding should be started
         * @param {number} inputLength Maximum length of array of bytes which can be using in this function
         * @returns {number} Offset after least decoded byte
         * 
         * @memberOf LocalHexBlockMixin
         */
        fromBER(inputBuffer: ArrayBuffer, inputOffset: number, inputLength: number): number;
        /**
         * Encoding of current ASN.1 block into ASN.1 encoded array (BER rules)
         * 
         * @param {boolean} [sizeOnly=false] Flag that we need only a size of encoding, not a real array of bytes
         * @returns {ArrayBuffer}
         * 
         * @memberOf LocalHexBlockMixin
         */
        toBER(sizeOnly?: boolean): ArrayBuffer;
        /**
         * Convertion for the block to JSON object
         * @returns {*}
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

    class LocalIdentificationBlock extends LocalBaseBlock implements ILocalHexBlock {
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
        }
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
        primitiveSchema?: Object;
    }

    class BaseBlock<T extends LocalValueBlock> extends LocalBaseBlock {
        constructor(parameters?: BaseBlockParams, valueBlockType?: typeof LocalValueBlock);
        idBlock: LocalIdentificationBlock;
        lenBlock: LocalLengthBlock;
        valueBlock: T;
        fromBER(inputBuffer: ArrayBuffer, inputOffset: number, inputLength: number): number;
        toBER(sizeOnly?: boolean): ArrayBuffer;
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

    class Primitive extends BaseBlock<LocalPrimitiveValueBlock> {
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

    class Constructed extends BaseBlock<LocalConstructedValueBlock> { }

    interface LocalEndOfContentValueBlockParams extends LocalBaseBlockParams { }

    class LocalEndOfContentValueBlock extends LocalValueBlock {
        constructor(params?: LocalEndOfContentValueBlockParams);
        fromBER(inputBuffer: ArrayBuffer, inputOffset: number, inputLength: number): number;
        toBER(sizeOnly?: boolean): ArrayBuffer;
    }

    export class EndOfContent extends BaseBlock<LocalEndOfContentValueBlock> { }

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

    class Boolean extends BaseBlock<LocalBooleanValueBlock> { }

    class Sequence extends Constructed { }
    class Set extends Constructed { }
    class Null extends BaseBlock<LocalValueBlock> { }

    interface LocalOctetStringValueBlockParams extends LocalConstructedValueBlockParams, LocalHexBlockParams {
        isConstructed?: boolean;
    }

    class LocalOctetStringValueBlock extends LocalConstructedValueBlock implements ILocalHexBlock {
        isConstructed: boolean;
        isHexOnly: boolean;
        valueHex: ArrayBuffer;

        constructor(params?: LocalOctetStringValueBlockParams);
    }

    export class OctetString extends BaseBlock<LocalOctetStringValueBlock> {
        constructor(params?: LocalOctetStringValueBlockParams);
        /**
         * Checking that two OCTETSTRINGs are equal
         * 
         * @param {OctetString} octetString
         * @returns {boolean}
         * 
         * @memberOf OctetString
         */
        isEqual(octetString: OctetString): boolean;
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

    class BitString extends BaseBlock<LocalBitStringValueBlock> {
        constructor(params?: LocalBitStringValueBlockParams);
        /**
         * Checking that two BITSTRINGs are equal
         * @param {BitString} bitString
         */
        isEqual(bitString: BitString): boolean;
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
         * @param {ArrayBuffer} inputBuffer ASN.1 DER encoded array
         * @param {number} inputOffset Offset in ASN.1 DER encoded array where decoding should be started
         * @param {number} inputLength Maximum length of array of bytes which can be using in this function
         * @param {number} [expectedLength=0] Expected length of converted "valueHex" buffer
         * @returns {number} Offset after least decoded byte
         */
        fromDER(inputBuffer: ArrayBuffer, inputOffset: number, inputLength: number, expectedLength?: number): number;
        /**
         * Encoding of current ASN.1 block into ASN.1 encoded array (DER rules)
         * 
         * @param {boolean} [sizeOnly=false] Flag that we need only a size of encoding, not a real array of bytes
         * @returns {ArrayBuffer}
         */
        toDER(sizeOnly?: boolean): ArrayBuffer;
    }

    interface IntegerParams {
        value?: number;
    }
    export class Integer extends BaseBlock<LocalIntegerValueBlock> {
        constructor(params?: IntegerParams)
        /**
         * Compare two Integer object, or Integer and ArrayBuffer objects
         * 
         * @param {(Integer | ArrayBuffer)} otherValue
         * @returns {boolean}
         * 
         * @memberOf Integer
         */
        isEqual(otherValue: Integer | ArrayBuffer): boolean;
        /**
         * Convert current Integer value from BER into DER format
         * 
         * @returns {Integer}
         */
        convertToDER(): Integer;
        /**
         * Convert current Integer value from DER to BER format
         * @returns {Integer}
         */
        convertFromDER(): Integer;
    }

    class Enumerated extends Integer { }

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
         * @param {string} string Input string to convert from
         * @returns {boolean}
         */
        fromString(data: string): boolean;
        /**
         * Converts "LocalObjectIdentifierValueBlock" class to string
         * 
         * @returns {string}
         * 
         * @memberOf LocalObjectIdentifierValueBlock
         */
        toString(): string;
    }

    export class ObjectIdentifier extends BaseBlock<LocalObjectIdentifierValueBlock> {
        constructor(params?: LocalObjectIdentifierValueBlockParams);
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

    class Utf8String extends BaseBlock<LocalUtf8StringValueBlock> {
        constructor(params?: Utf8StringParams);
        /**
         * Function converting ArrayBuffer into ASN.1 internal string
         * 
         * @param {ArrayBuffer} inputBuffer ASN.1 BER encoded array
         * 
         * @memberOf Utf8String
         */
        fromBuffer(inputBuffer: ArrayBuffer): void;
        /**
         * Function converting JavaScript string into ASN.1 internal class
         * 
         * @param {string} inputString ASN.1 BER encoded array
         * 
         * @memberOf Utf8String
         */
        fromString(inputString: string): void;
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

    interface BmpStringParams {
        value?: string;
    }

    export class BmpString extends BaseBlock<LocalBmpStringValueBlock> {
        constructor(params?: BmpStringParams);
        /**
         * Function converting ArrayBuffer into ASN.1 internal string
         * 
         * @param {ArrayBuffer} inputBuffer ASN.1 BER encoded array
         * 
         * @memberOf BmpString
         */
        fromBuffer(inputBuffer: ArrayBuffer): void;
        /**
         * Function converting JavaScript string into ASN.1 internal class
         * 
         * @param {string} inputString ASN.1 BER encoded array
         * 
         * @memberOf BmpString
         */
        fromString(inputString: string): void;
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

    interface UniversalStringParams {
        value?: string;
    }

    export class UniversalString extends BaseBlock<LocalUniversalStringValueBlock> {
        constructor(params?: UniversalStringParams);
        /**
         * Function converting ArrayBuffer into ASN.1 internal string
         * 
         * @param {ArrayBuffer} inputBuffer ASN.1 BER encoded array
         * 
         * @memberOf UniversalString
         */
        fromBuffer(inputBuffer: ArrayBuffer): void;
        /**
         * Function converting JavaScript string into ASN.1 internal class
         * 
         * @param {string} inputString ASN.1 BER encoded array
         * 
         * @memberOf UniversalString
         */
        fromString(inputString: string): void;
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
    export class LocalSimpleStringBlock extends BaseBlock<LocalSimpleLocalSimpleStringValueBlock> {
        constructor(params?: LocalSimpleStringBlockParams);
        /**
         * Function converting ArrayBuffer into ASN.1 internal string
         * 
         * @param {ArrayBuffer} inputBuffer ASN.1 BER encoded array
         * 
         * @memberOf LocalSimpleStringBlock
         */
        fromBuffer(inputBuffer: ArrayBuffer): void;
        /**
         * Function converting JavaScript string into ASN.1 internal class
         * 
         * @param {string} inputString ASN.1 BER encoded array
         * 
         * @memberOf LocalSimpleStringBlock
         */
        fromString(inputString: string): void;
    }

    export class NumericString extends LocalSimpleStringBlock { }
    export class PrintableString extends LocalSimpleStringBlock { }
    export class TeletexString extends LocalSimpleStringBlock { }
    export class VideotexString extends LocalSimpleStringBlock { }
    export class IA5String extends LocalSimpleStringBlock { }
    export class GraphicString extends LocalSimpleStringBlock { }
    export class VisibleString extends LocalSimpleStringBlock { }
    export class GeneralString extends LocalSimpleStringBlock { }
    export class CharacterString extends LocalSimpleStringBlock { }

    interface UTCTimeParams extends LocalSimpleLocalSimpleStringValueBlockParams {
        value?: string;
        valueDate?: Date;
    }

    export class UTCTime extends VisibleString {
        year: number;
        month: number;
        day: number;
        hour: number;
        minute: number;
        second: number;
        constructor(params?: UTCTimeParams);
        /**
         * Function converting ASN.1 internal string into ArrayBuffer
         * 
         * @returns {ArrayBuffer}
         * 
         * @memberOf UTCTime
         */
        toBuffer(): ArrayBuffer;
        /**
         * Function converting "Date" object into ASN.1 internal string
         * 
         * @param {Date} inputDate JavaScript "Date" object
         * 
         * @memberOf UTCTime
         */
        fromDate(inputDate: Date): void;
        /**
         * Function converting ASN.1 internal string into "Date" object
         * 
         * @returns {Date}
         * 
         * @memberOf UTCTime
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

    interface ChoiceParams {
        value?: LocalValueBlock[];
        optional?: boolean;
    }

    class Choice {
        value: LocalValueBlock[];
        optional: boolean;
        constructor(params?: ChoiceParams);
    }

    interface AnyParams {
        name?: string;
        optional?: boolean;
    }
    class Any {
        name: string;
        optional: boolean;
        constructor(params?: AnyParams);
    }

    interface RepeatedParams {
        name?: string;
        optional?: boolean;
        value?: Any;
        local?: boolean;
    }
    class Repeated {
        name: string;
        optional: boolean;
        value: Any;
        local: boolean;
        constructor(params?: RepeatedParams);
    }
    interface RawDataParams {
        data?: ArrayBuffer;
    }
    class RawData {
        data: ArrayBuffer;

        constructor(params?: RawDataParams);

        fromBER(inputBuffer: ArrayBuffer, inputOffset: number, inputLength: number): number;
        toBER(sizeOnly?: boolean): ArrayBuffer;
    }

    /**
     * Major function for decoding ASN.1 BER array into internal library structuries
     * 
     * @param {ArrayBuffer} inputBuffer ASN.1 BER encoded array of bytes
     * @returns {{ offset: number; result: LocalBaseBlock }}
     */
    function fromBER(inputBuffer: ArrayBuffer): { offset: number; result: LocalBaseBlock };

    /**
     * Compare of two ASN.1 object trees
     * 
     * @param {*} root Root of input ASN.1 object tree
     * @param {*} inputData Input ASN.1 object tree
     * @param {*} inputSchema Input ASN.1 schema to compare with
     * @returns {{ verified: boolean, result?: any }}
     */
    function compareSchema(root: any, inputData: any, inputSchema: any): { verified: boolean, result?: any };

    /**
     * ASN.1 schema verification for ArrayBuffer data
     * 
     * @param {ArrayBuffer} inputBuffer Input BER-encoded ASN.1 data
     * @param {*} inputSchema Input ASN.1 schema to verify against to
     * @returns {{ verified: boolean, result?: any }}
     */
    function verifySchema(inputBuffer: ArrayBuffer, inputSchema: any): { verified: boolean, result?: any };

}
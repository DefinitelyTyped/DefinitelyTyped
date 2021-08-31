// Type definitions for google-protobuf 3.15
// Project: https://github.com/google/google-protobuf
// Definitions by: Marcus Longmuir <https://github.com/marcuslongmuir>
//                 Chaitanya Kamatham <https://github.com/kamthamc>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

type ByteSource = ArrayBuffer | Uint8Array | number[] | string;
type ScalarFieldType = boolean | number | string;
type RepeatedFieldType = ScalarFieldType[] | Uint8Array[];
type AnyFieldType = ScalarFieldType | RepeatedFieldType | Uint8Array;
type FieldValue = string | number | boolean | Uint8Array | FieldValueArray | undefined;
interface FieldValueArray extends Array<FieldValue> {}

export abstract class Message {
  getJsPbMessageId(): (string | undefined);
  static initialize(
    msg: Message,
    data: Message.MessageArray,
    messageId: (string | number),
    suggestedPivot: number,
    repeatedFields?: number[] | null,
    oneofFields?: number[][] | null): void;
  static toObjectList<T extends Message>(
    field: T[],
    toObjectFn: (includeInstance: boolean, data: T) => {},
    includeInstance?: boolean): Array<{}>;
  static toObjectExtension(
    msg: Message,
    obj: {},
    extensions: {[key: number]: ExtensionFieldInfo<Message>},
    getExtensionFn: (fieldInfo: ExtensionFieldInfo<Message>) => Message,
    includeInstance?: boolean): void;
  serializeBinaryExtensions(
    proto: Message,
    writer: BinaryWriter,
    extensions: { [key: number]: ExtensionFieldBinaryInfo<Message> },
    getExtensionFn: <T>(fieldInfo: ExtensionFieldInfo<T>) => T): void
  readBinaryExtension(
    proto: Message,
    reader: BinaryReader,
    extensions: {[key: number]: ExtensionFieldBinaryInfo<Message>},
    setExtensionFn: <T>(fieldInfo: ExtensionFieldInfo<T>,
    val: T) => void): void
  static getField(msg: Message, fieldNumber: number): FieldValue|null;
  static getOptionalFloatingPointField(msg: Message, fieldNumber: number): number | undefined;
  static getRepeatedFloatingPointField(msg: Message, fieldNumber: number): number[];
  static bytesAsB64(bytes: Uint8Array): string;
  static bytesAsU8(str: string): Uint8Array;
  static bytesListAsB64(bytesList: Uint8Array[]): string[];
  static bytesListAsU8(strList: string[]): Uint8Array[];
  static getFieldWithDefault<T>(msg: Message, fieldNumber: number, defaultValue: T): T;
  static getMapField(
    msg: Message,
    fieldNumber: number,
    noLazyCreate: boolean,
    valueCtor?: typeof Message): Map<any, any>;
  static setField(
    msg: Message,
    fieldNumber: number,
    value: FieldValue): void;
  static addToRepeatedField(
    msg: Message,
    fieldNumber: number,
    value: any,
    index?: number): void;
  static setOneofField(
    msg: Message,
    fieldNumber: number,
    oneof: number[],
    value: FieldValue): void;
  static computeOneofCase(msg: Message, oneof: number[]): number;
  static getWrapperField<T extends Message>(
    msg: Message,
    ctor: { new(): T },
    fieldNumber: number,
    required?: number): T;
  static getRepeatedWrapperField<T extends Message>(
    msg: Message,
    ctor: { new(): T },
    fieldNumber: number): T[];
  static setWrapperField<T extends Message>(
    msg: Message,
    fieldNumber: number,
    value?: (T|Map<any, any>)): void;
  static setOneofWrapperField(
    msg: Message,
    fieldNumber: number,
    oneof: number[],
    value: any): void;
  static setRepeatedWrapperField<T extends Message>(
    msg: Message,
    fieldNumber: number,
    value?: T[]): void;
  static addToRepeatedWrapperField<T extends Message>(
    msg: Message,
    fieldNumber: number,
    value: T | undefined,
    ctor: { new(): T },
    index?: number): T;
  static toMap(
    field: any[],
    mapKeyGetterFn: (field: any) => string,
    toObjectFn?: Message.StaticToObject,
    includeInstance?: boolean): void;
  toArray(): Message.MessageArray;
  toString(): string;
  getExtension<T>(fieldInfo: ExtensionFieldInfo<T>): T;
  setExtension<T>(fieldInfo: ExtensionFieldInfo<T>, value: T): void;
  static difference<T extends Message>(m1: T, m2: T): T;
  static equals(m1: Message, m2: Message): boolean;
  static compareExtensions(extension1: {}, extension2: {}): boolean;
  static compareFields(field1: any, field2: any): boolean;
  cloneMessage(): this;
  clone(): this;
  static clone<T extends Message>(msg: T): T;
  static cloneMessage<T extends Message>(msg: T): T;
  static copyInto(fromMessage: Message, toMessage: Message): void;
  static registerMessageType(id: number, constructor: typeof Message): void;

  abstract serializeBinary(): Uint8Array;
  abstract toObject(includeInstance?: boolean): {};

  // These are `abstract static`, but that isn't allowed. Subclasses of Message will have these methods and properties
  // and not having them on Message makes using this class for its intended purpose quite difficult.
  static deserializeBinary(bytes: Uint8Array): Message;
  static deserializeBinaryFromReader(message: Message, reader: BinaryReader): Message;
  static serializeBinaryToWriter(message: Message, writer: BinaryWriter): void;
  static toObject(includeInstance: boolean, msg: Message): {};
  static extensions: { [key: number]: ExtensionFieldInfo<Message> };
  static extensionsBinary: { [key: number]: ExtensionFieldBinaryInfo<Message> };
}

export namespace Message {
  type MessageArray = any[]; // This type needs to reference itself
  type StaticToObject = (includeInstance: boolean, msg: Message) => {};
}

export class ExtensionFieldInfo<T> {
  fieldIndex: number;
  fieldName: number;
  ctor: typeof Message;
  toObjectFn: Message.StaticToObject;
  isRepeated: number;
  constructor(
    fieldIndex: number,
    fieldName: {[key: string]: number},
    ctor: typeof Message,
    toObjectFn: Message.StaticToObject,
    isRepeated: number);
  isMessageType(): boolean;
}

export class ExtensionFieldBinaryInfo<T> {
  fieldInfo: ExtensionFieldInfo<T>;
  binaryReaderFn: BinaryRead;
  binaryWriterFn: BinaryWrite;
  opt_binaryMessageSerializeFn: (msg: Message, writer: BinaryWriter) => void;
  opt_binaryMessageDeserializeFn: (msg: Message, reader: BinaryReader) => Message;
  opt_isPacked: boolean;
  constructor(
    fieldInfo: ExtensionFieldInfo<T>,
    binaryReaderFn: BinaryRead,
    binaryWriterFn: BinaryWrite,
    opt_binaryMessageSerializeFn: (msg: Message, writer: BinaryWriter) => void,
    opt_binaryMessageDeserializeFn: (msg: Message, reader: BinaryReader) => Message,
    opt_isPacked: boolean);
}

export class Map<K, V> {
  constructor(
    arr: Array<[K, V]>,
    valueCtor?: {new(init: any): V});
  toArray(): Array<[K, V]>;
  toObject(includeInstance?: boolean): Array<[K, V]>;
  toObject<VO>(
    includeInstance: boolean,
    valueToObject: (includeInstance: boolean, valueWrapper: V) => VO): Array<[K, VO]>;
  static fromObject<TK, TV>(
    entries: Array<[TK, TV]>,
    valueCtor: any,
    valueFromObject: any): Map<TK, TV>;
  getLength(): number;
  clear(): void;
  del(key: K): boolean;
  getEntryList(): Array<[K, V]>;
  entries(): Map.Iterator<[K, V]>;
  keys(): Map.Iterator<K>;
  values(): Map.Iterator<V>;
  forEach(
    callback: (entry: V, key: K) => void,
    thisArg?: {}): void;
  set(key: K, value: V): this;
  get(key: K): (V | undefined);
  has(key: K): boolean;
  serializeBinary(
    fieldNumber: number,
    writer: BinaryWriter,
    keyWriterFn: (field: number, key: K) => void,
    valueWriterFn: (field: number, value: V, writerCallback: BinaryWriteCallback) => void,
    writeCallback?: BinaryWriteCallback
  ): void;
  static deserializeBinary<K, V>(
    map: Map<K, V>,
    reader: BinaryReader,
    keyReaderFn: (reader: BinaryReader) => K,
    valueReaderFn: (reader: BinaryReader, value: any, readerCallback: BinaryReadCallback) => V,
    readCallback?: BinaryReadCallback,
    defaultKey?: K,
    defaultValue?: V
  ): void;
}

export namespace Map {
  // This is implemented by jspb.Map.ArrayIteratorIterable_, but that class shouldn't be exported
  interface Iterator<T> {
    [Symbol.iterator](): Iterator<T>;
    next(): IteratorResult<T>;
  }
  interface IteratorResult<T> {
    done: boolean;
    value: T;
  }
}

type BinaryReadReader = (msg: any, binaryReader: BinaryReader) => void;

type BinaryRead = (msg: any, reader: BinaryReadReader) => any;

type BinaryReadCallback = (value: any, binaryReader: BinaryReader) => void;

type BinaryWriteCallback = (value: any, binaryWriter: BinaryWriter) => void;

type BinaryWrite = (fieldNumber: number, value: any, writerCallback: BinaryWriteCallback) => void;

export class BinaryReader {
  constructor(bytes?: ByteSource, start?: number, length?: number);
  static alloc(bytes?: ByteSource, start?: number, length?: number): BinaryReader;
  alloc(bytes?: ByteSource, start?: number, length?: number): BinaryReader;
  free(): void;
  getFieldCursor(): number;
  getCursor(): number;
  getBuffer(): Uint8Array;
  getFieldNumber(): number;
  getWireType(): BinaryConstants.WireType;
  isEndGroup(): boolean;
  getError(): boolean;
  setBlock(bytes?: ByteSource, start?: number, length?: number): void;
  reset(): void;
  advance(count: number): void;
  nextField(): boolean;
  unskipHeader(): void;
  skipMatchingFields(): void;
  skipVarintField(): void;
  skipDelimitedField(): void;
  skipFixed32Field(): void;
  skipFixed64Field(): void;
  skipGroup(): void;
  skipField(): void;
  registerReadCallback(callbackName: string, callback: (binaryReader: BinaryReader) => any): void;
  runReadCallback(callbackName: string): any;
  readAny(fieldType: BinaryConstants.FieldType): AnyFieldType;
  readMessage: BinaryRead;
  readGroup(field: number, message: Message, reader: BinaryReadReader): void;
  getFieldDecoder(): BinaryDecoder;
  readInt32(): number;
  readInt32String(): string;
  readInt64(): number;
  readInt64String(): string;
  readUint32(): number;
  readUint32String(): string;
  readUint64(): number;
  readUint64String(): string;
  readSint32(): number;
  readSint64(): number;
  readSint64String(): string;
  readFixed32(): number;
  readFixed64(): number;
  readFixed64String(): string;
  readSfixed32(): number;
  readSfixed32String(): string;
  readSfixed64(): number;
  readSfixed64String(): string;
  readFloat(): number;
  readDouble(): number;
  readBool(): boolean;
  readEnum(): number;
  readString(): string;
  readBytes(): Uint8Array;
  readVarintHash64(): string;
  readFixedHash64(): string;
  readPackedInt32(): number[];
  readPackedInt32String(): string[];
  readPackedInt64(): number[];
  readPackedInt64String(): string[];
  readPackedUint32(): number[];
  readPackedUint32String(): string[];
  readPackedUint64(): number[];
  readPackedUint64String(): string[];
  readPackedSint32(): number[];
  readPackedSint64(): number[];
  readPackedSint64String(): string[];
  readPackedFixed32(): number[];
  readPackedFixed64(): number[];
  readPackedFixed64String(): string[];
  readPackedSfixed32(): number[];
  readPackedSfixed64(): number[];
  readPackedSfixed64String(): string[];
  readPackedFloat(): number[];
  readPackedDouble(): number[];
  readPackedBool(): boolean[];
  readPackedEnum(): number[];
  readPackedVarintHash64(): string[];
  readPackedFixedHash64(): string[];
}

export class BinaryWriter {
  constructor();
  writeSerializedMessage(bytes: Uint8Array, start: number, end: number): void;
  maybeWriteSerializedMessage(bytes?: Uint8Array, start?: number, end?: number): void;
  reset(): void;
  getResultBuffer(): Uint8Array;
  getResultBase64String(): string;
  beginSubMessage(field: number): void;
  endSubMessage(field: number): void;
  writeAny(fieldType: BinaryConstants.FieldType, field: number, value: AnyFieldType): void;
  writeInt32(field: number, value?: number): void;
  writeInt32String(field: number, value?: string): void;
  writeInt64(field: number, value?: number): void;
  writeInt64String(field: number, value?: string): void;
  writeUint32(field: number, value?: number): void;
  writeUint32String(field: number, value?: string): void;
  writeUint64(field: number, value?: number): void;
  writeUint64String(field: number, value?: string): void;
  writeSint32(field: number, value?: number): void;
  writeSint64(field: number, value?: number): void;
  writeSint64String(field: number, value?: string): void;
  writeFixed32(field: number, value?: number): void;
  writeFixed64(field: number, value?: number): void;
  writeFixed64String(field: number, value?: string): void;
  writeSfixed32(field: number, value?: number): void;
  writeSfixed64(field: number, value?: number): void;
  writeSfixed64String(field: number, value?: string): void;
  writeFloat(field: number, value?: number): void;
  writeDouble(field: number, value?: number): void;
  writeBool(field: number, value?: boolean): void;
  writeEnum(field: number, value?: number): void;
  writeString(field: number, value?: string): void;
  writeBytes(field: number, value?: ByteSource): void;
  writeMessage: BinaryWrite;
  writeGroup(field: number, value: any, writeCallback: BinaryWriteCallback): void;
  writeFixedHash64(field: number, value?: string): void;
  writeVarintHash64(field: number, value?: string): void;
  writeRepeatedInt32(field: number, value?: number[]): void;
  writeRepeatedInt32String(field: number, value?: string[]): void;
  writeRepeatedInt64(field: number, value?: number[]): void;
  writeRepeatedInt64String(field: number, value?: string[]): void;
  writeRepeatedUint32(field: number, value?: number[]): void;
  writeRepeatedUint32String(field: number, value?: string[]): void;
  writeRepeatedUint64(field: number, value?: number[]): void;
  writeRepeatedUint64String(field: number, value?: string[]): void;
  writeRepeatedSint32(field: number, value?: number[]): void;
  writeRepeatedSint64(field: number, value?: number[]): void;
  writeRepeatedSint64String(field: number, value?: string[]): void;
  writeRepeatedFixed32(field: number, value?: number[]): void;
  writeRepeatedFixed64(field: number, value?: number[]): void;
  writeRepeatedFixed64String(field: number, value?: string[]): void;
  writeRepeatedSfixed32(field: number, value?: number[]): void;
  writeRepeatedSfixed64(field: number, value?: number[]): void;
  writeRepeatedSfixed64String(field: number, value?: string[]): void;
  writeRepeatedFloat(field: number, value?: number[]): void;
  writeRepeatedDouble(field: number, value?: number[]): void;
  writeRepeatedBool(field: number, value?: boolean[]): void;
  writeRepeatedEnum(field: number, value?: number[]): void;
  writeRepeatedString(field: number, value?: string[]): void;
  writeRepeatedBytes(field: number, value?: ByteSource[]): void;
  writeRepeatedMessage(field: number, value: Message[],  writerCallback: BinaryWriteCallback): void;
  writeRepeatedGroup(field: number, value: Message[], writerCallback: BinaryWriteCallback): void;
  writeRepeatedFixedHash64(field: number, value?: string[]): void;
  writeRepeatedVarintHash64(field: number, value?: string[]): void;
  writePackedInt32(field: number, value?: number[]): void;
  writePackedInt32String(field: number, value?: string[]): void;
  writePackedInt64(field: number, value?: number[]): void;
  writePackedInt64String(field: number, value?: string[]): void;
  writePackedUint32(field: number, value?: number[]): void;
  writePackedUint32String(field: number, value?: string[]): void;
  writePackedUint64(field: number, value?: number[]): void;
  writePackedUint64String(field: number, value?: string[]): void;
  writePackedSint32(field: number, value?: number[]): void;
  writePackedSint64(field: number, value?: number[]): void;
  writePackedSint64String(field: number, value?: string[]): void;
  writePackedFixed32(field: number, value?: number[]): void;
  writePackedFixed64(field: number, value?: number[]): void;
  writePackedFixed64String(field: number, value?: string[]): void;
  writePackedSfixed32(field: number, value?: number[]): void;
  writePackedSfixed64(field: number, value?: number[]): void;
  writePackedSfixed64String(field: number, value?: string[]): void;
  writePackedFloat(field: number, value?: number[]): void;
  writePackedDouble(field: number, value?: number[]): void;
  writePackedBool(field: number, value?: boolean[]): void;
  writePackedEnum(field: number, value?: number[]): void;
  writePackedFixedHash64(field: number, value?: string[]): void;
  writePackedVarintHash64(field: number, value?: string[]): void;
}

export class BinaryEncoder {
  constructor();
  length(): number;
  end(): number[];
  writeSplitVarint64(lowBits: number, highBits: number): void;
  writeSplitFixed64(lowBits: number, highBits: number): void;
  writeUnsignedVarint32(value: number): void;
  writeSignedVarint32(value: number): void;
  writeUnsignedVarint64(value: number): void;
  writeSignedVarint64(value: number): void;
  writeZigzagVarint32(value: number): void;
  writeZigzagVarint64(value: number): void;
  writeZigzagVarint64String(value: string): void;
  writeUint8(value: number): void;
  writeUint16(value: number): void;
  writeUint32(value: number): void;
  writeUint64(value: number): void;
  writeInt8(value: number): void;
  writeInt16(value: number): void;
  writeInt32(value: number): void;
  writeInt64(value: number): void;
  writeInt64String(value: string): void;
  writeFloat(value: number): void;
  writeDouble(value: number): void;
  writeBool(value: boolean): void;
  writeEnum(value: number): void;
  writeBytes(bytes: Uint8Array): void;
  writeVarintHash64(hash: string): void;
  writeFixedHash64(hash: string): void;
  writeString(value: string): number;
}

export class BinaryDecoder {
  constructor(bytes?: ByteSource, start?: number, length?: number)
  static alloc(bytes?: ByteSource, start?: number, length?: number): BinaryDecoder;
  free(): void;
  clone(): BinaryDecoder;
  clear(): void;
  getBuffer(): Uint8Array;
  setBlock(data: ByteSource, start?: number, length?: number): void;
  getEnd(): number;
  setEnd(end: number): void;
  reset(): void;
  getCursor(): number;
  setCursor(cursor: number): void;
  advance(count: number): void;
  atEnd(): boolean;
  pastEnd(): boolean;
  getError(): boolean;
  skipVarint(): void;
  unskipVarint(value: number): void;
  readUnsignedVarint32(): number;
  readSignedVarint32(): number;
  readUnsignedVarint32String(): number;
  readSignedVarint32String(): number;
  readZigzagVarint32(): number;
  readUnsignedVarint64(): number;
  readUnsignedVarint64String(): number;
  readSignedVarint64(): number;
  readSignedVarint64String(): number;
  readZigzagVarint64(): number;
  readZigzagVarint64String(): number;
  readUint8(): number;
  readUint16(): number;
  readUint32(): number;
  readUint64(): number;
  readUint64String(): string;
  readInt8(): number;
  readInt16(): number;
  readInt32(): number;
  readInt64(): number;
  readInt64String(): string;
  readFloat(): number;
  readDouble(): number;
  readBool(): boolean;
  readEnum(): number;
  readString(length: number): string;
  readStringWithLength(): string;
  readBytes(length: number): Uint8Array;
  readVarintHash64(): string;
  readFixedHash64(): string;
}

export class BinaryIterator {
  constructor(
    decoder?: BinaryDecoder, next?: () => number | boolean | string | null,
    elements?: Array<number | boolean | string>)
  static alloc(
    decoder?: BinaryDecoder,
    next?: () => number | boolean | string | null,
    elements?: Array<number | boolean | string>): BinaryIterator;
  free(): void;
  clear(): void;
  get(): ScalarFieldType | null;
  atEnd(): boolean;
  next(): ScalarFieldType | null;
}

export namespace BinaryConstants {
  enum FieldType {
    INVALID = -1,
    DOUBLE = 1,
    FLOAT = 2,
    INT64 = 3,
    UINT64 = 4,
    INT32 = 5,
    FIXED64 = 6,
    FIXED32 = 7,
    BOOL = 8,
    STRING = 9,
    GROUP = 10,
    MESSAGE = 11,
    BYTES = 12,
    UINT32 = 13,
    ENUM = 14,
    SFIXED32 = 15,
    SFIXED64 = 16,
    SINT32 = 17,
    SINT64 = 18,
    FHASH64 = 30,
    VHASH64 = 31,
  }

  enum WireType {
    INVALID = -1,
    VARINT = 0,
    FIXED64 = 1,
    DELIMITED = 2,
    START_GROUP = 3,
    END_GROUP = 4,
    FIXED32 = 5,
  }

  const FieldTypeToWireType: (fieldType: FieldType) => WireType;

  const INVALID_FIELD_NUMBER: number;
  const FLOAT32_EPS: number;
  const FLOAT32_MIN: number;
  const FLOAT32_MAX: number;
  const FLOAT64_EPS: number;
  const FLOAT64_MIN: number;
  const FLOAT64_MAX: number;
  const TWO_TO_20: number;
  const TWO_TO_23: number;
  const TWO_TO_31: number;
  const TWO_TO_32: number;
  const TWO_TO_52: number;
  const TWO_TO_63: number;
  const TWO_TO_64: number;
  const ZERO_HASH: string;
}

export namespace arith {
  class UInt64 {
    lo: number;
    hi: number;
    constructor(lo: number, hi: number);
    cmp(other: UInt64): number;
    rightShift(): UInt64;
    leftShift(): UInt64;
    msb(): boolean;
    lsb(): boolean;
    zero(): boolean;
    add(other: UInt64): UInt64;
    sub(other: UInt64): UInt64;
    static mul32x32(a: number, b: number): UInt64;
    mul(a: number): UInt64;
    div(divisor: number): [UInt64, UInt64];
    toString(): string;
    static fromString(str: string): UInt64;
    clone(): UInt64;
  }

  class Int64 {
    lo: number;
    hi: number;
    constructor(lo: number, hi: number);
    add(other: Int64): Int64;
    sub(other: Int64): Int64;
    clone(): Int64;
    toString(): string;
    static fromString(str: string): Int64;
  }
}

// jspb.utils package excluded as it likely shouldn't be called by user code

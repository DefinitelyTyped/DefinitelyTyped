import * as jspb from "../../index";

export class DoubleValue extends jspb.Message {
  getValue(): number;
  setValue(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): {};
  static toObject(includeInstance: boolean, msg: DoubleValue): {};
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DoubleValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DoubleValue;
  static deserializeBinaryFromReader(message: DoubleValue, reader: jspb.BinaryReader): DoubleValue;
}

export class FloatValue extends jspb.Message {
  getValue(): number;
  setValue(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): {};
  static toObject(includeInstance: boolean, msg: FloatValue): {};
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FloatValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FloatValue;
  static deserializeBinaryFromReader(message: FloatValue, reader: jspb.BinaryReader): FloatValue;
}

export class Int64Value extends jspb.Message {
  getValue(): number;
  setValue(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): {};
  static toObject(includeInstance: boolean, msg: Int64Value): {};
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Int64Value, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Int64Value;
  static deserializeBinaryFromReader(message: Int64Value, reader: jspb.BinaryReader): Int64Value;
}

export class UInt64Value extends jspb.Message {
  getValue(): number;
  setValue(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): {};
  static toObject(includeInstance: boolean, msg: UInt64Value): {};
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UInt64Value, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UInt64Value;
  static deserializeBinaryFromReader(message: UInt64Value, reader: jspb.BinaryReader): UInt64Value;
}

export class Int32Value extends jspb.Message {
  getValue(): number;
  setValue(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): {};
  static toObject(includeInstance: boolean, msg: Int32Value): {};
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Int32Value, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Int32Value;
  static deserializeBinaryFromReader(message: Int32Value, reader: jspb.BinaryReader): Int32Value;
}

export class UInt32Value extends jspb.Message {
  getValue(): number;
  setValue(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): {};
  static toObject(includeInstance: boolean, msg: UInt32Value): {};
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UInt32Value, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UInt32Value;
  static deserializeBinaryFromReader(message: UInt32Value, reader: jspb.BinaryReader): UInt32Value;
}

export class BoolValue extends jspb.Message {
  getValue(): boolean;
  setValue(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): {};
  static toObject(includeInstance: boolean, msg: BoolValue): {};
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BoolValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BoolValue;
  static deserializeBinaryFromReader(message: BoolValue, reader: jspb.BinaryReader): BoolValue;
}

export class StringValue extends jspb.Message {
  getValue(): string;
  setValue(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): {};
  static toObject(includeInstance: boolean, msg: StringValue): {};
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StringValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StringValue;
  static deserializeBinaryFromReader(message: StringValue, reader: jspb.BinaryReader): StringValue;
}

export class BytesValue extends jspb.Message {
  getValue(): Uint8Array | string;
  getValue_asU8(): Uint8Array;
  getValue_asB64(): string;
  setValue(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): {};
  static toObject(includeInstance: boolean, msg: BytesValue): {};
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BytesValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BytesValue;
  static deserializeBinaryFromReader(message: BytesValue, reader: jspb.BinaryReader): BytesValue;
}

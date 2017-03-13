import * as jspb from "../../index";

export class Struct extends jspb.Message {
  getFieldsMap(): jspb.Map<string, Value>;
  clearFieldsMap(): void;

  toJavaScript(): {[key: string]: JavaScriptValue};
  static fromJavaScript(value: {[key: string]: JavaScriptValue}): Struct;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): {};
  static toObject(includeInstance: boolean, msg: Struct): {};
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Struct, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Struct;
  static deserializeBinaryFromReader(message: Struct, reader: jspb.BinaryReader): Struct;
}

export class Value extends jspb.Message {
  hasNullValue(): boolean;
  clearNullValue(): void;
  getNullValue(): NullValue;
  setNullValue(value: NullValue): void;

  hasNumberValue(): boolean;
  clearNumberValue(): void;
  getNumberValue(): number;
  setNumberValue(value: number): void;

  hasStringValue(): boolean;
  clearStringValue(): void;
  getStringValue(): string;
  setStringValue(value: string): void;

  hasBoolValue(): boolean;
  clearBoolValue(): void;
  getBoolValue(): boolean;
  setBoolValue(value: boolean): void;

  hasStructValue(): boolean;
  clearStructValue(): void;
  getStructValue(): Struct;
  setStructValue(value: Struct): void;

  hasListValue(): boolean;
  clearListValue(): void;
  getListValue(): ListValue;
  setListValue(value: ListValue): void;

  getKindCase(): Value.KindCase;

  toJavaScript(): JavaScriptValue;
  static fromJavaScript(value: JavaScriptValue): Value;

  static deserializeBinary(bytes: Uint8Array): Value;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): {};
  static toObject(includeInstance: boolean, msg: Value): {};
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Value, writer: jspb.BinaryWriter): void;
  static deserializeBinaryFromReader(message: Value, reader: jspb.BinaryReader): Value;
}

export namespace Value {
  export enum KindCase {
    KIND_NOT_SET = 0,
    NULL_VALUE = 1,
    NUMBER_VALUE = 2,
    STRING_VALUE = 3,
    BOOL_VALUE = 4,
    STRUCT_VALUE = 5,
    LIST_VALUE = 6,
  }
}

export class ListValue extends jspb.Message {
  clearValuesList(): void;
  getValuesList(): Array<Value>;
  setValuesList(value: Array<Value>): void;
  addValues(value?: Value, index?: number): void;

  toJavaScript(): Array<JavaScriptValue>;
  static fromJavaScript(value: Array<JavaScriptValue>): ListValue;

  static deserializeBinary(bytes: Uint8Array): ListValue;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): {};
  static toObject(includeInstance: boolean, msg: ListValue): {};
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListValue, writer: jspb.BinaryWriter): void;
  static deserializeBinaryFromReader(message: ListValue, reader: jspb.BinaryReader): ListValue;
}

export enum NullValue {
  NULL_VALUE = 0,
}

export type JavaScriptValue = null | number | string | boolean | Array<any> | {};

// package: google.protobuf
// file: struct.proto

import * as jspb from "../../index";

export class Struct extends jspb.Message {
    getFieldsMap(): jspb.Map<string, Value>;
    clearFieldsMap(): Struct;

    toJavaScript(): { [key: string]: JavaScriptValue };
    static fromJavaScript(value: { [key: string]: JavaScriptValue }): Struct;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Struct.AsObject;
    static toObject(includeInstance: boolean, msg: Struct): Struct.AsObject;
    static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
    static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
    static serializeBinaryToWriter(message: Struct, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Struct;
    static deserializeBinaryFromReader(message: Struct, reader: jspb.BinaryReader): Struct;
}

export namespace Struct {
    export type AsObject = {
        fieldsMap: Array<[string, Value.AsObject]>;
    };
}

export class Value extends jspb.Message {
    hasNullValue(): boolean;
    clearNullValue(): Value;
    getNullValue(): NullValue;
    setNullValue(value: NullValue): Value;

    hasNumberValue(): boolean;
    clearNumberValue(): Value;
    getNumberValue(): number;
    setNumberValue(value: number): Value;

    hasStringValue(): boolean;
    clearStringValue(): Value;
    getStringValue(): string;
    setStringValue(value: string): Value;

    hasBoolValue(): boolean;
    clearBoolValue(): Value;
    getBoolValue(): boolean;
    setBoolValue(value: boolean): Value;

    hasStructValue(): boolean;
    clearStructValue(): Value;
    getStructValue(): Struct | undefined;
    setStructValue(value?: Struct): Value;

    hasListValue(): boolean;
    clearListValue(): Value;
    getListValue(): ListValue | undefined;
    setListValue(value?: ListValue): Value;

    getKindCase(): Value.KindCase;

    toJavaScript(): JavaScriptValue;
    static fromJavaScript(value: JavaScriptValue): Value;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Value.AsObject;
    static toObject(includeInstance: boolean, msg: Value): Value.AsObject;
    static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
    static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
    static serializeBinaryToWriter(message: Value, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Value;
    static deserializeBinaryFromReader(message: Value, reader: jspb.BinaryReader): Value;
}

export namespace Value {
    export type AsObject = {
        nullValue: NullValue;
        numberValue: number;
        stringValue: string;
        boolValue: boolean;
        structValue?: Struct.AsObject | undefined;
        listValue?: ListValue.AsObject | undefined;
    };

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
    clearValuesList(): ListValue;
    getValuesList(): Array<Value>;
    setValuesList(value: Array<Value>): ListValue;
    addValues(value?: Value, index?: number): Value;

    toJavaScript(): Array<JavaScriptValue>;
    static fromJavaScript(value: Array<JavaScriptValue>): ListValue;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListValue.AsObject;
    static toObject(includeInstance: boolean, msg: ListValue): ListValue.AsObject;
    static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
    static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
    static serializeBinaryToWriter(message: ListValue, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListValue;
    static deserializeBinaryFromReader(message: ListValue, reader: jspb.BinaryReader): ListValue;
}

export namespace ListValue {
    export type AsObject = {
        valuesList: Array<Value.AsObject>;
    };
}

export enum NullValue {
    NULL_VALUE = 0,
}

export type JavaScriptValue = null | number | string | boolean | Array<any> | {};

// Type definitions for ProtoBuf.js 5.0.1
// Project: https://github.com/dcodeIO/ProtoBuf.js
// Definitions by: Panu Horsmalahti <https://github.com/panuhorsmalahti>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="bytebuffer" />
/// <reference types="node" />

declare namespace ProtoBuf {
    // ==========
    // protobufjs/src/ProtoBuf.js

    var Builder: Builder;
    var Long: LongStatic;
    var DotProto: DotProto;
    var Reflect: Reflect;
    var Util: Util;
    var convertFieldsToCamelCase: boolean;

    // var Lang: Lang; TODO: implement interface Lang

    export function loadJson(json: string, builder?: ProtoBuilder | string | {},
        filename?: string | {}): ProtoBuilder;

    export function loadJsonFile(filename: string | {},
        callback?: (error: any, builder: ProtoBuilder) => void,
        builder?: ProtoBuilder): ProtoBuilder;

    export function loadProto(proto: string, builder?: ProtoBuilder | string | {},
        filename?: string | {}): ProtoBuilder;

    export function loadProtoFile(filePath: string | {},
        callback?: (error: any, builder: ProtoBuilder) => void,
        builder?: ProtoBuilder): ProtoBuilder;

    export function newBuilder(options?: {[key: string]: any}): ProtoBuilder;

    export interface LongStatic {
      new(low?: number, high?: number, unsigned?:boolean): Long;

      MAX_UNSIGNED_VALUE: Long;
      MAX_VALUE: Long;
      MIN_VALUE: Long;
      NEG_ONE: Long;
      ONE: Long;
      UONE: Long;
      UZERO: Long;
      ZERO: Long;

      fromBits(lowBits: number, highBits: number, unsigned?: boolean): Long;
      fromInt(value: number, unsigned?: boolean): Long;
      fromNumber(value: number, unsigned?: boolean): Long;
      fromString(str: string, unsigned?: boolean | number, radix?: number): Long;
      fromValue(val: Long | number | string): Long;

      isLong(obj: any): boolean;
    }

    // Based on https://github.com/dcodeIO/Long.js and https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/long/long.d.ts
    export interface Long {
      high: number;
      low: number;
      unsigned :boolean;

      add(other: Long | number | string): Long;
      and(other: Long | number | string): Long;
      compare(other: Long | number | string): number;
      div(divisor: Long | number | string): Long;
      equals(other: Long | number | string): boolean;
      getHighBits(): number;
      getHighBitsUnsigned(): number;
      getLowBits(): number;
      getLowBitsUnsigned(): number;
      getNumBitsAbs(): number;
      greaterThan(other: Long | number | string): boolean;
      greaterThanOrEqual(other: Long | number | string): boolean;
      isEven(): boolean;
      isNegative(): boolean;
      isOdd(): boolean;
      isPositive(): boolean;
      isZero(): boolean;
      lessThan(other: Long | number | string): boolean;
      lessThanOrEqual(other: Long | number | string): boolean;
      modulo(divisor: Long | number | string): Long;
      multiply(multiplier: Long | number | string): Long;
      negate(): Long;
      not(): Long;
      notEquals(other: Long | number | string): boolean;
      or(other: Long | number | string): Long;
      shiftLeft(numBits: number | Long): Long;
      shiftRight(numBits: number | Long): Long;
      shiftRightUnsigned(numBits: number | Long): Long;
      subtract(other: Long | number | string): Long;
      toInt(): number;
      toNumber(): number;
      toSigned(): Long;
      toString(radix?: number): string;
      toUnsigned(): Long;
      xor(other: Long | number | string): Long;
    }

    // ==========
    // protobufjs/src/ProtoBuf/Builder.js

    export interface Builder {
        new(options?: {[key: string]: any}): ProtoBuilder;
        Message: Message;
        Service: Service;
        isValidMessage(def: {[key: string]: any}): boolean;
        isValidMessageField(def: {[key: string]: any}): boolean;
        isValidEnum(def: {[key: string]: any}): boolean;
        isValidService(def: {[key: string]: any}): boolean;
        isValidExtend(def: {[key: string]: any}): boolean;
    }

    /**
     * TODO: Confirm that message needs no further implementation
     */
    export interface Message {
        new(values?: {[key: string]: any}, var_args?: string[]): Message;
        $add(key: string, value: any, noAssert?: boolean): Message;
        $get<T>(key: string): T;
        $set(key: string | {[key: string]: any}, value?: any | boolean, noAssert?: boolean): void;
        add(key: string, value: any, noAssert?: boolean): Message;
        calculate(): number;
        encode(buffer?: ByteBuffer | boolean, noVerify?: boolean): ByteBuffer;
        encode64(): string;
        encodeAB(): ArrayBuffer;
        encodeNB(): Buffer;
        encodeHex(): string;
        encodeJSON(): string;
        encodeDelimited(buffer?: ByteBuffer | boolean, noVerify?: boolean): ByteBuffer;
        get<T>(key: string, noAssert?: boolean): T;
        set(key: string | {[key: string]: any}, value?: any | boolean, noAssert?: boolean): void;
        toArrayBuffer(): ArrayBuffer;
        toBase64(): string;
        toBuffer(): Buffer;
        toHex(): string;
        toRaw(binaryAsBase64?: boolean, longsAsStrings?: boolean): {[key: string]: any};
        toString(): string;
        [field: string]: any;
  	}

    /**
     * TODO: Implement service interface
     */
    export interface Service {
        new(rpcImpl?: Function): Service;
    }


    // ==========
    // meta objects for constructing protobufs

    export interface ProtoBuilder {
        ns: ReflectNamespace;
        ptr: ReflectNamespace;
        resolved: boolean;
        result: ProtoBuf;
        files: string[];
        importRoot: string;
        options: {[key: string]: any};
        syntax: string;
        reset(): void;
        define(pkg: string, options?: {[key: string]: any}): ProtoBuilder;
        create(defs?: {[key: string]: any}[]): ProtoBuilder;
        resolveAll(): void;
        build(path?: string | [string]): MetaMessage<Message>;
   	    build<T>(path?: string | [string]): MetaMessage<T>;
        lookup(path?: string): ReflectT;
  	}

    export interface ProtoBuf {
        [package: string]: {[key: string]: MetaMessage<Message> | any};
    }

    export interface MetaMessage<T> {
        new(values?: {[key: string]: any}, var_args?: string[]): T & Message;
        decode(buffer: ArrayBuffer | ByteBuffer | Buffer | string, length?: number | string, enc?: string): T & Message;
        decodeDelimited(buffer: ByteBuffer | ArrayBuffer | Buffer | string, enc?: string): T & Message;
        decode64(str: string): T & Message;
        decodeHex(str: string): T & Message;
        decodeJSON(str: string): T & Message;
    }

    // ==========
    // protobufjs/src/ProtoBuf/DotProto.js

    export interface DotProto {
        Parser: Parser;
        Tokenizer: Tokenizer;
    }

    export interface Parser {
        new(proto: string): Parser;
        tn: Tokenizer;
        parse(): MetaProto;
        toString(): string;
    }

    export interface Tokenizer {
        new(proto: string): Tokenizer;
        source: string;
        index: number;
        line: number;
        stack: string[];
        readingString: boolean;
        stringEndsWith: string;
        next(): string;
        peek(): string;
        toString(): string;
    }

    // ==========
    // proto meta information returned by the Parser

    export interface MetaProto {
        package: string;
        messages: ProtoMessage[];
        enums: ProtoEnum[];
        imports: string[];
        options: {[key: string]: any};
        services: ProtoService[];
    }

    export interface ProtoEnum {
        name: string;
        values: ProtoEnumValue[];
        options: {[key: string]: any};
    }

    export interface ProtoEnumValue {
        name: string;
        id: string;
    }

    export interface ProtoField {
        rule: string;
        options: {[key: string]: any};
        type: string;
        name: string;
        id: number;
        oneof?: string;
    }

    export interface ProtoMessage {
        name: string;
        isGroup?: boolean;
        fields: ProtoField[];
        enums: ProtoEnum[];
        messages: ProtoMessage[];
        options: {[key: string]: any};
        oneofs: {[key: string]:number[]};
    }

    export interface ProtoRpcService {
        request: string;
        response: string;
        options: {[key: string]: any};
    }

    export interface ProtoService {
        name: string;
        rpc: {[key: string]:ProtoRpcService};
        options: {[key: string]: any};
    }

    // ==========
    // protobufjs/src/ProtoBuf/Util.js

    export interface Util {
        IS_NODE: boolean
        fetch(path: string, callback?: (data: string) => any): string;
        toCamelCase(str: string): string;
        XHR(): XMLHttpRequest;
    }

    // ==========
    // protobufjs/src/ProtoBuf/Reflect.js

    export interface Reflect {
        T: ReflectT;
        Namespace: ReflectNamespace;
        Message: ReflectMessage;
        Enum: ReflectEnum;
        Extension: ReflectExtension;
        Service: ReflectService;
    }

    export interface ReflectT {
        new(builder?: ProtoBuilder, parent?: ReflectT, name?: string): ReflectT;
        builder: ProtoBuilder;
        parent: ReflectT;
        name: string;
        fqn(): string;
        toString(includeClass?: boolean): string;
    }

    export interface ReflectNamespace extends ReflectT {
        new(builder?: ProtoBuilder, parent?: ReflectNamespace, name?: string,
            options?: {[key: string]: any}): ReflectNamespace;
        className: string;
        children: ReflectT[];
        options: {[key: string]: any};
        syntax: string;
        getChildren(type?: ReflectT): ReflectT[];
        addChild(child: ReflectT): void;
        getChild(nameOrId?: string | number): ReflectT;
        resolve(qn: string, excludeFields?: boolean): ReflectNamespace;
        build(): ProtoBuf;
        buildOpt(): {[key: string]: any};
        getOption(name?: string): any;
    }

    export interface ReflectMessage extends ReflectNamespace {
        new(builder?: ProtoBuilder, parent?: ReflectNamespace, name?: string,
            options?: {[key: string]: any}, isGroup?: boolean): ReflectMessage;
        Field: ReflectField; // NOTE: only for new ProtoBuf.Reflect.Message.Field();
        ExtensionField: ReflectExtensionField; // NOTE: only for
                                          // new ProtoBuf.Reflect.Message.ExtensionField();
        OneOf: ReflectOneOf; // NOTE: only for new ProtoBuf.Reflect.Message.OneOf();
        extensions: number[];
        clazz(): MetaMessage<Message>;
        isGroup: boolean;
        build(rebuild?: boolean): MetaMessage<Message>|any;
        build<T>(rebuild?: boolean): MetaMessage<T>|any;
        encode(message: Message, buffer: Buffer, noVerify?: boolean): Buffer;
        calculate(message: Message): number;
        decode(buffer: Buffer, length?: number, expectedGroupEndId?: number): Message;
    }

    export interface ReflectEnum extends ReflectNamespace {
        new(builder?: ProtoBuilder, parent?: ReflectT, name?: string,
            options?: {[key: string]: any}): ReflectEnum;
        Value: ReflectValue; // NOTE: only for new ProtoBuf.Reflect.Enum.Value();
        object: {[key: string]:number};
        build(): {[key: string]: any};
    }

    export interface ReflectExtension extends ReflectT {
        new(builder?: ProtoBuilder, parent?: ReflectT, name?: string,
            field?: ReflectField): ReflectExtension;
        field: ReflectField;
    }

    export interface ReflectService extends ReflectNamespace {
        new(): ReflectService;
        Method: ReflectMethod; // NOTE: only for new ProtoBuf.Reflect.Service.Method();
        RPCMethod: ReflectRPCMethod; // NOTE: only for new ProtoBuf.Reflect.Service.RPCMethod();
        clazz(): Function;
        build(rebuild?: boolean): Function|any;
    }

    // TODO: check that the runtime instance of this type reflects this definition
    export interface ReflectField extends ReflectT {
        new(builder: ProtoBuilder, message: ReflectMessage, rule: string, type: string,
            name: string, id: number, options: {[key: string]: any}, oneof: ReflectOneOf): ReflectField;
        className: string;
        required: boolean;
        repeated: boolean;
        type: string | WireTuple;
        resolvedType: ReflectT;
        id: number;
        options: {[key: string]: any};
        defaultValue: any;
        oneof: ReflectOneOf;
        originalName: string;
        build(): {[key: string]: any};
        mkLong(value: any, unsigned?: boolean): number;
        verifyValue(value: any, skipRepeated?: boolean): any;
        encode(value: any, buffer: Buffer): Buffer;
        encodeValue(value: any, buffer: Buffer): Buffer;
        calculate(value: any): number;
        calculateValue(value: any): number;
        decode(wireType: number, buffer: Buffer, skipRepeated?: boolean): any;
    }

    export interface WireTuple {
      name: string;
      wireType: number;
    }

    // TODO: check that the runtime instance of this type reflects this definition
    export interface ReflectExtensionField extends ReflectField {
        new(builder: ProtoBuilder, message: ReflectMessage, rule: string, type: string,
            name: string, id: number, options: {[key: string]: any}): ReflectExtensionField;
        extension: ReflectExtension;
    }

    export interface ReflectOneOf extends ReflectT {
        new(builder?: ProtoBuilder, message?: ReflectMessage, name?: string): ReflectOneOf;
        fields: ReflectField[];
    }

    export interface ReflectValue extends ReflectT {
        new(builder?: ProtoBuilder, enm?: ReflectEnum, name?: string, id?: number): ReflectValue;
        className: string;
        id: number;
    }

    export interface ReflectMethod extends ReflectT {
        new(builder?: ProtoBuilder, svc?: ReflectService, name?: string,
            options?: {[key: string]: any}): ReflectMethod;
        className: string;
        options: {[key: string]: any};
        buildOpt(): {[key: string]: any};
    }

    export interface ReflectRPCMethod extends ReflectMethod {
        new(builder?: ProtoBuilder, svc?: ReflectService, name?: string, request?: string,
            response?: string, options?: {[key: string]: any}): ReflectRPCMethod;
        requestName: string;
        responseName: string;
        resolvedRequestType: ReflectMessage;
        resolvedResponseType: ReflectMessage;
    }

}

declare module "protobufjs" {
    export = ProtoBuf;
}

declare module "protobufjs/dist/protobuf-light" {
    export = ProtoBuf;
}

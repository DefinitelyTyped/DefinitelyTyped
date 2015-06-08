// Type definitions for ProtoBuf.js
// Project: https://github.com/dcodeIO/ProtoBuf.js
// Definitions by: Panu Horsmalahti <https://github.com/panuhorsmalahti>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../node/node.d.ts" />

declare module ProtoBuf {
    // ==========
    // protobufjs/src/ProtoBuf.js
    
    var Builder: Builder;
    var ByteBuffer: Buffer;
    var DotProto: DotProto;
    var Reflect: Reflect;

    // var Lang: Lang; TODO: implement interface Lang
    // var Util: Util; TODO: implement interface Util
    
    export function loadJson(json: string, builder?: ProtoBuilder,
        filename?: string): ProtoBuilder;
    
    export function loadJsonFile(filename: string,
        callback?: (error: any, builder: ProtoBuilder) => void,
        builder?: ProtoBuilder): ProtoBuilder;
  
    export function loadProto(proto: string, builder?: ProtoBuilder,
        filename?: string): ProtoBuilder;
  	
    export function loadProtoFile(filePath: string,
        callback?: (error: any, builder: ProtoBuilder) => void,
        builder?: ProtoBuilder): ProtoBuilder;
    
    export function newBuilder(options?: {[key: string]: any}): ProtoBuilder;
  
    
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
    		build(path?: string): ProtoBuf;
        lookup(path?: string): ReflectT;
  	}
    
    export interface ProtoBuf {
        [package: string]: {[key: string]: MetaMessage | any};
    }
    
    export interface MetaMessage {
        new(values?: {[key: string]: any}, var_args?: string[]): Message;
        decode(buffer?: Buffer, enc?: string): Message;
        decodeDelimited(buffer?: Buffer, enc?: string): Message;
        decode64(str: string): Message;
        decodeHex(str: string): Message;
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
        values: ProtoEnumValue;
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
        clazz(): MetaMessage;
        isGroup: boolean;
        build(rebuild?: boolean): MetaMessage|any;
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
        resolveResponseType: ReflectMessage;
    }

}

declare module "protobufjs" {
    export = ProtoBuf;
}

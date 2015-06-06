// Type definitions for ProtoBuf.js
// Project: https://github.com/dcodeIO/ProtoBuf.js
// Definitions by: Panu Horsmalahti <https://github.com/panuhorsmalahti>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../collection/collection.d.ts" />
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
    
    export function newBuilder(options?: Dictionary): ProtoBuilder;
  
    
    // ==========
    // protobufjs/src/ProtoBuf/Builder.js
    
    /**
     * TODO: constructor returns type ProtoBuilder
     */
    export interface Builder {
        (options?: Dictionary): void; // returns ProtoBuilder
        Message: Message;
        Service: Service;
        isValidMessage(def: Dictionary): boolean;
        isValidMessageField(def: Dictionary): boolean;
        isValidEnum(def: Dictionary): boolean;
        isValidService(def: Dictionary): boolean;
        isValidExtend(def: Dictionary): boolean;
    }
    
    /**
     * TODO: Confirm that message needs no further implementation
     */
    export interface Message {
        (values?: Dictionary, var_args?: string[]): void;
        [field: string]: any;
  	}
    
    /**
     * TODO: Implement service interface
     */
    export interface Service {
        (rpcImpl?: Function): void;
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
        options: Dictionary;
        syntax: string;
        reset(): void;
        define(pkg: string, options?: Dictionary): ProtoBuilder;
        create(defs?: Dictionary[]): ProtoBuilder;
        resolveAll(): void;
    		build(path?: string): ProtoBuf;
        lookup(path?: string): ReflectT;
  	}
    
    export interface ProtoBuf {
        [package: string]: Thesaurus<MetaMessage | any>;
    }
    
    export interface MetaMessage {
        (values?: Dictionary, var_args?: string[]): void; // returns Message
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
        (proto: string): void;
        tn: Tokenizer;
        parse(): MetaProto;
        toString(): string;
    }
    
    export interface Tokenizer {
        (proto: string): void;
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
        options: Dictionary;
        services: ProtoService[];
    }
    
    export interface ProtoEnum {
        name: string;
        values: ProtoEnumValue;
        options: Dictionary;
    }
    
    export interface ProtoEnumValue {
        name: string;
        id: string;
    }
    
    export interface ProtoField {
        rule: string;
        options: Dictionary;
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
        options: Dictionary;
        oneofs: Thesaurus<number[]>;
    }
    
    export interface ProtoRpcService {
        request: string;
        response: string;
        options: Dictionary;
    }
    
    export interface ProtoService {
        name: string;
        rpc: Thesaurus<ProtoRpcService>;
        options: Dictionary;
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
        (builder?: ProtoBuilder, parent?: ReflectT, name?: string): void;
        builder: ProtoBuilder;
        parent: ReflectT;
        name: string;
        fqn(): string;
        toString(includeClass?: boolean): string;
    }
    
    export interface ReflectNamespace extends ReflectT {
        (builder?: ProtoBuilder, parent?: ReflectNamespace, name?: string,
            options?: Dictionary): void;
        className: string;
        children: ReflectT[];
        options: Dictionary;
        syntax: string;
        getChildren(type?: ReflectT): ReflectT[];
        addChild(child: ReflectT): void;
        getChild(nameOrId?: string | number): ReflectT;
        resolve(qn: string, excludeFields?: boolean): ReflectNamespace;
        build(): any; // TODO: discover the return type of build
        buildOpt(): Dictionary;
        getOption(name?: string): any;
    }
    
    export interface ReflectMessage extends ReflectNamespace {
        (builder?: ProtoBuilder, parent?: ReflectNamespace, name?: string,
            options?: Dictionary, isGroup?: boolean): void;
        Field: ReflectField; // TODO: only for new ProtoBuf.Reflect.Message.Field();
        ExtensionField: ReflectExtensionField; // TODO: only for
                                          // new ProtoBuf.Reflect.Message.ExtensionField();
        OneOf: ReflectOneOf; // TODO: only for new ProtoBuf.Reflect.Message.OneOf();
        extensions: number[];
        clazz(): any; //TODO: discover type of clazz
        isGroup: boolean;
        build(rebuild?: boolean): any; // TODO: discover the return type of build
        encode(message: Message, buffer: Buffer, noVerify?: boolean): Buffer;
        calculate(message: Message): number;
        decode(buffer: Buffer, length?: number, expectedGroupEndId?: number): Message;
    }
    
    export interface ReflectEnum extends ReflectNamespace {
        (builder?: ProtoBuilder, parent?: ReflectT, name?: string,
            options?: Dictionary): void;
        Value: ReflectValue; // TODO: only for new ProtoBuf.Reflect.Enum.Value();
        object: Thesaurus<number>;
        build(): any; // TODO: discover the return type of build
    }
    
    export interface ReflectExtension extends ReflectT {
        (builder?: ProtoBuilder, parent?: ReflectT, name?: string, field?: ReflectField): void;
        field: ReflectField;
    }
    
    export interface ReflectService extends ReflectNamespace {
        Method: ReflectMethod; // TODO: only for new ProtoBuf.Reflect.Service.Method();
        RPCMethod: ReflectRPCMethod; // TODO: only for new ProtoBuf.Reflect.Service.RPCMethod();
        clazz(): any; // TODO: discover type of clazz
        build(rebuild?: boolean): any; // TODO: discover the return type of build
    }
    
    // TODO: check that the runtime instance of this type reflects this definition
    export interface ReflectField extends ReflectT {
        (builder: ProtoBuilder, message: ReflectMessage, rule: string, type: string,
            name: string, id: number, options: Dictionary, oneof: ReflectOneOf): void;
        className: string;
        required: boolean;
        repeated: boolean;
        type: string | WireTuple;
        resolvedType: ReflectT;
        id: number;
        options: Dictionary;
        defaultValue: any;
        oneof: ReflectOneOf;
        originalName: string;
        build(): any; // TODO: discover the return type of build
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
        (builder: ProtoBuilder, message: ReflectMessage, rule: string, type: string,
            name: string, id: number, options: Dictionary): void;
        extension: ReflectExtension;
    }
    
    export interface ReflectOneOf extends ReflectT {
        (builder: ProtoBuilder, message: ReflectMessage, name: string): void;
        fields: ReflectField[];
    }
    
    export interface ReflectValue extends ReflectT {
        (builder?: ProtoBuilder, enm?: ReflectEnum, name?: string, id?: number): void;
        className: string;
        id: number;
    }
    
    export interface ReflectMethod extends ReflectT {
        (builder: ProtoBuilder, svc: ReflectService, name: string, options: Dictionary): void;
        className: string;
        options: Dictionary;
        buildOpt(): Dictionary;
    }
    
    export interface ReflectRPCMethod extends ReflectMethod {
        (builder: ProtoBuilder, svc: ReflectService, name: string, request: string,
            response: string, options: Dictionary): void;
        requestName: string;
        responseName: string;
        resolvedRequestType: ReflectMessage;
        resolveResponseType: ReflectMessage;
    }

}

declare module "protobufjs" {
    export = ProtoBuf;
}

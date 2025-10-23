// package: google.protobuf.compiler
// file: compiler/plugin.proto

import * as jspb from "../../../index";
import * as google_protobuf_descriptor_pb from "../descriptor_pb";

export class Version extends jspb.Message {
    hasMajor(): boolean;
    clearMajor(): Version;
    getMajor(): number | undefined;
    setMajor(value: number): Version;

    hasMinor(): boolean;
    clearMinor(): Version;
    getMinor(): number | undefined;
    setMinor(value: number): Version;

    hasPatch(): boolean;
    clearPatch(): Version;
    getPatch(): number | undefined;
    setPatch(value: number): Version;

    hasSuffix(): boolean;
    clearSuffix(): Version;
    getSuffix(): string | undefined;
    setSuffix(value: string): Version;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Version.AsObject;
    static toObject(includeInstance: boolean, msg: Version): Version.AsObject;
    static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
    static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
    static serializeBinaryToWriter(message: Version, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Version;
    static deserializeBinaryFromReader(message: Version, reader: jspb.BinaryReader): Version;
}

export namespace Version {
    export type AsObject = {
        major?: number | undefined;
        minor?: number | undefined;
        patch?: number | undefined;
        suffix?: string | undefined;
    };
}

export class CodeGeneratorRequest extends jspb.Message {
    clearFileToGenerateList(): CodeGeneratorRequest;
    getFileToGenerateList(): string[];
    setFileToGenerateList(value: string[]): CodeGeneratorRequest;
    addFileToGenerate(value: string, index?: number): string;

    hasParameter(): boolean;
    clearParameter(): CodeGeneratorRequest;
    getParameter(): string | undefined;
    setParameter(value: string): CodeGeneratorRequest;

    clearProtoFileList(): CodeGeneratorRequest;
    getProtoFileList(): google_protobuf_descriptor_pb.FileDescriptorProto[];
    setProtoFileList(value: google_protobuf_descriptor_pb.FileDescriptorProto[]): CodeGeneratorRequest;
    addProtoFile(
        value?: google_protobuf_descriptor_pb.FileDescriptorProto,
        index?: number,
    ): google_protobuf_descriptor_pb.FileDescriptorProto;

    hasCompilerVersion(): boolean;
    clearCompilerVersion(): CodeGeneratorRequest;
    getCompilerVersion(): Version | undefined;
    setCompilerVersion(value?: Version): CodeGeneratorRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CodeGeneratorRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CodeGeneratorRequest): CodeGeneratorRequest.AsObject;
    static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
    static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
    static serializeBinaryToWriter(message: CodeGeneratorRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CodeGeneratorRequest;
    static deserializeBinaryFromReader(message: CodeGeneratorRequest, reader: jspb.BinaryReader): CodeGeneratorRequest;
}

export namespace CodeGeneratorRequest {
    export type AsObject = {
        fileToGenerateList: string[];
        parameter?: string | undefined;
        protoFileList: google_protobuf_descriptor_pb.FileDescriptorProto.AsObject[];
        compilerVersion?: Version.AsObject | undefined;
    };
}

export class CodeGeneratorResponse extends jspb.Message {
    hasError(): boolean;
    clearError(): CodeGeneratorResponse;
    getError(): string | undefined;
    setError(value: string): CodeGeneratorResponse;

    hasSupportedFeatures(): boolean;
    clearSupportedFeatures(): CodeGeneratorResponse;
    getSupportedFeatures(): number | undefined;
    setSupportedFeatures(value: number): CodeGeneratorResponse;

    clearFileList(): CodeGeneratorResponse;
    getFileList(): CodeGeneratorResponse.File[];
    setFileList(value: CodeGeneratorResponse.File[]): CodeGeneratorResponse;
    addFile(value?: CodeGeneratorResponse.File, index?: number): CodeGeneratorResponse.File;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CodeGeneratorResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CodeGeneratorResponse): CodeGeneratorResponse.AsObject;
    static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
    static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
    static serializeBinaryToWriter(message: CodeGeneratorResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CodeGeneratorResponse;
    static deserializeBinaryFromReader(
        message: CodeGeneratorResponse,
        reader: jspb.BinaryReader,
    ): CodeGeneratorResponse;
}

export namespace CodeGeneratorResponse {
    export type AsObject = {
        error?: string | undefined;
        supportedFeatures?: number | undefined;
        fileList: File.AsObject[];
    };

    export enum Feature {
        FEATURE_NONE = 0,
        FEATURE_PROTO3_OPTIONAL = 1,
    }

    export class File extends jspb.Message {
        hasName(): boolean;
        clearName(): File;
        getName(): string | undefined;
        setName(value: string): File;

        hasInsertionPoint(): boolean;
        clearInsertionPoint(): File;
        getInsertionPoint(): string | undefined;
        setInsertionPoint(value: string): File;

        hasContent(): boolean;
        clearContent(): File;
        getContent(): string | undefined;
        setContent(value: string): File;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): File.AsObject;
        static toObject(includeInstance: boolean, msg: File): File.AsObject;
        static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
        static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
        static serializeBinaryToWriter(message: File, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): File;
        static deserializeBinaryFromReader(message: File, reader: jspb.BinaryReader): File;
    }

    export namespace File {
        export type AsObject = {
            name?: string | undefined;
            insertionPoint?: string | undefined;
            content?: string | undefined;
        };
    }
}

// package: google.protobuf
// file: source_context.proto

import * as jspb from "../../index";

export class SourceContext extends jspb.Message {
    getFileName(): string;
    setFileName(value: string): SourceContext;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SourceContext.AsObject;
    static toObject(includeInstance: boolean, msg: SourceContext): SourceContext.AsObject;
    static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
    static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
    static serializeBinaryToWriter(message: SourceContext, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SourceContext;
    static deserializeBinaryFromReader(message: SourceContext, reader: jspb.BinaryReader): SourceContext;
}

export namespace SourceContext {
    export type AsObject = {
        fileName: string;
    };
}

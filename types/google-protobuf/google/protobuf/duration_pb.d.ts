// package: google.protobuf
// file: duration.proto

import * as jspb from "../../index";

export class Duration extends jspb.Message {
    getSeconds(): number;
    setSeconds(value: number): Duration;

    getNanos(): number;
    setNanos(value: number): Duration;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Duration.AsObject;
    static toObject(includeInstance: boolean, msg: Duration): Duration.AsObject;
    static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
    static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
    static serializeBinaryToWriter(message: Duration, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Duration;
    static deserializeBinaryFromReader(message: Duration, reader: jspb.BinaryReader): Duration;
}

export namespace Duration {
    export type AsObject = {
        seconds: number;
        nanos: number;
    };
}

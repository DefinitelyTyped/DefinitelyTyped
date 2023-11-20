/// <reference types="node" />

import {
    CodeGeneratorRequest as pb_CodeGeneratorRequest,
    CodeGeneratorResponse as pb_CodeGeneratorResponse,
} from "google-protobuf/google/protobuf/compiler/plugin_pb";
import { FileDescriptorProto, SourceCodeInfo } from "google-protobuf/google/protobuf/descriptor_pb";
import * as stream from "stream";
import Location = SourceCodeInfo.Location;

type OutputFiles = pb_CodeGeneratorResponse.File.AsObject[];
type SimplePluginCallback = (
    filesToGenerate: ReadonlyArray<FileDescriptorProto.AsObject>,
) => OutputFiles | Promise<OutputFiles>;

declare function simplePlugin(cb: SimplePluginCallback): Promise<void>;
declare namespace simplePlugin {
    function CodeGeneratorRequest(stdin?: stream.Readable): Promise<pb_CodeGeneratorRequest>;
    function CodeGeneratorResponse(stdout?: stream.Writable): (files: OutputFiles) => void;
    function CodeGeneratorResponseError(stdout?: stream.Writable): (err: Error) => void;
    function findCommentByPath(path: number[], locationList: Location.AsObject[]): string;
}

export = simplePlugin;

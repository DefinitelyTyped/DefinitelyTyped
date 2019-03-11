// Type definitions for protoc-plugin 0.0
// Project: https://github.com/konsumer/node-protoc-plugin/
// Definitions by: Jonny Reeves <https://github.com/jonnyreeves>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import * as stream from "stream";
import {
  CodeGeneratorRequest as pb_CodeGeneratorRequest,
  CodeGeneratorResponse as pb_CodeGeneratorResponse
} from "google-protobuf/google/protobuf/compiler/plugin_pb";
import { FileDescriptorProto, SourceCodeInfo } from "google-protobuf/google/protobuf/descriptor_pb";
import Location = SourceCodeInfo.Location;

export type OutputFiles = pb_CodeGeneratorResponse.File.AsObject[];

export type SimplePluginCallback = (filesToGenerate: ReadonlyArray<FileDescriptorProto.AsObject>) => (OutputFiles | Promise<OutputFiles>);

export default function simplePlugin(cb: SimplePluginCallback): Promise<void>;
export function CodeGeneratorRequest(stdin?: stream.Readable): Promise<pb_CodeGeneratorRequest>;
export function CodeGeneratorResponse(stdout?: stream.Writable): (files: OutputFiles) => void;
export function CodeGeneratorResponseError(stdout?: stream.Writable): (err: Error) => void;
export function findCommentByPath(path: number[], locationList: Location.AsObject[]): string;

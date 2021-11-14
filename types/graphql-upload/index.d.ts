// Type definitions for graphql-upload 8.0
// Project: https://github.com/jaydenseric/graphql-upload#readme
// Definitions by: Mike Marcacci <https://github.com/mike-marcacci>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.3

/* tslint:disable:no-unnecessary-generics */

import { IncomingMessage, ServerResponse } from "http";
import { GraphQLScalarType } from "graphql";
import { RequestHandler } from "express";
import { DefaultContext, DefaultState, Middleware } from "koa";
import { ReadStream } from "fs-capacitor";

export interface UploadOptions {
  maxFieldSize?: number | undefined;
  maxFileSize?: number | undefined;
  maxFiles?: number | undefined;
}

export interface GraphQLOperation {
  query: string;
  operationName?: null | string | undefined;
  variables?: null | unknown | undefined;
}

export function processRequest(
  request: IncomingMessage,
  response: ServerResponse,
  uploadOptions?: UploadOptions
): Promise<GraphQLOperation | GraphQLOperation[]>;

export function graphqlUploadExpress(
  uploadOptions?: UploadOptions
): RequestHandler;

export function graphqlUploadKoa <StateT = DefaultState, ContextT = DefaultContext>(
  uploadOptions?: UploadOptions
): Middleware<StateT, ContextT>;

export const GraphQLUpload: GraphQLScalarType;

export interface FileUpload {
  filename: string;
  mimetype: string;
  encoding: string;
  createReadStream(): ReadStream;
}

export class Upload {
  resolve(file: FileUpload): void;
  reject(reason?: any): void;
}

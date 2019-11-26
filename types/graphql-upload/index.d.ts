// Type definitions for graphql-upload 8.0
// Project: https://github.com/jaydenseric/graphql-upload#readme
// Definitions by: Mike Marcacci <https://github.com/mike-marcacci>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.3

/* tslint:disable:no-unnecessary-generics */

import { IncomingMessage, ServerResponse } from "http";
import { GraphQLScalarType } from "graphql";
import { RequestHandler } from "express";
import { Middleware } from "koa";
import { ReadStream } from "fs-capacitor";

export interface UploadOptions {
  maxFieldSize?: number;
  maxFileSize?: number;
  maxFiles?: number;
}

export interface GraphQLOperation {
  query: string;
  operationName?: null | string;
  variables?: null | unknown;
}

export function processRequest(
  request: IncomingMessage,
  response: ServerResponse,
  uploadOptions?: UploadOptions
): Promise<GraphQLOperation | GraphQLOperation[]>;

export function graphqlUploadExpress(
  uploadOptions?: UploadOptions
): RequestHandler;

export function graphqlUploadKoa <StateT = any, CustomT = {}>(
  uploadOptions?: UploadOptions
): Middleware<StateT, CustomT>;

export const GraphQLUpload: GraphQLScalarType;

export interface FileUpload {
  filename: string;
  mimetype: string;
  encoding: string;
  createReadStream(): ReadStream;
}

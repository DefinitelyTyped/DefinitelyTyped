// Type definitions for @hapi/subtext 7.0
// Project: https://github.com/hapijs/subtext#readme
// Definitions by: Sebastian Malton <https://github.com/nokel81>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { IncomingMessage } from 'http';
import stream = require('stream');
import { BrotliOptions, ZlibOptions } from 'zlib';

export interface MultipartOptions {
  output: "data" | "stream" | "file";
}

export interface DecompressionOptions {
  gzip?: ZlibOptions;
  deflate?: ZlibOptions;
  br?: BrotliOptions;
  compress?: BrotliOptions;
}

export interface ContentDecoders {
  gzip?: (options: ZlibOptions | null) => stream.Transform;
  deflate?: (options: ZlibOptions | null) => stream.Transform;
  br?: (options: BrotliOptions | null) => stream.Transform;
  compress?: (options: BrotliOptions | null) => stream.Transform;
}

export interface Options {
  parse: boolean;
  output: "data" | "stream" | "file";
  maxBytes?: number;
  override?: string;
  defaultContentType?: string;
  allow?: string[];
  timeout?: number;
  querystring?: (str: string) => Partial<Record<string, string | string[]>>;
  uploads?: string;
  multipart?: boolean | MultipartOptions;
  decoders?: ContentDecoders;
  compression?: DecompressionOptions;
}

export interface Result {
  /**
   * Will be `null` if no payload was present on request
   */
  payload: unknown;
  mime: string;
}

export function parse(req: IncomingMessage, tap: null | NodeJS.WritableStream, options: Options): Promise<Result>;

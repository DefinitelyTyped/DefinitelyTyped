// TypeScript Version: 2.1

/// <reference types="node" />

import { InputType, ZlibOptions } from "zlib";

export function gzip(input: InputType, options?: ZlibOptions): Promise<Buffer>;
export function ungzip(input: InputType, options?: ZlibOptions): Promise<Buffer>;

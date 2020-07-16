// Type definitions for node-gzip 1.1
// Project: https://github.com/Rebsos/node-gzip#readme
// Definitions by: mike castleman <https://github.com/mlc>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// TypeScript Version: 2.1

/// <reference types="node" />

import { InputType, ZlibOptions } from 'zlib';

export function gzip(input: InputType, options?: ZlibOptions): Promise<Buffer>;
export function ungzip(input: InputType, options?: ZlibOptions): Promise<Buffer>;

// Type definitions for concatjson 2.0
// Project: https://github.com/manidlou/concatjson
// Definitions by: David Hoppe <https://github.com/dh-sa>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { Transform } from 'stream';

export function parse(): Transform;
export function serialize(): Transform;
export { serialize as stringify };

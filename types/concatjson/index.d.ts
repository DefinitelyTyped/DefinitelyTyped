/// <reference types="node" />

import { Transform } from "stream";

export function parse(): Transform;
export function serialize(): Transform;
export { serialize as stringify };

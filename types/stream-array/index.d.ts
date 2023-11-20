/// <reference types="node" />

import { Readable } from "stream";

declare function streamify(array: ReadonlyArray<any>): Readable;

export = streamify;

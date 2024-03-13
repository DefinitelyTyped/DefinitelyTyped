/// <reference types="node" />

import { Readable } from "stream";

declare function streamify(array: readonly any[]): Readable;

export = streamify;

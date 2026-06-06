/// <reference types="node" />

import { Readable } from "stream";

declare function streamify(generator: AsyncIterableIterator<any>): Readable;

export = streamify;

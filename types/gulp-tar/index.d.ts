/// <reference types="node" />

import type { ArchiverOptions } from "archiver";

declare function gulpTar(
    filename: string,
    options?: ArchiverOptions,
): NodeJS.ReadableStream & NodeJS.WritableStream;

export default gulpTar;

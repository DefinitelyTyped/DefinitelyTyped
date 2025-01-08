/// <reference types="node" />

import archiver = require("archiver");

declare function gulpTar(
    filename: string,
    options?: archiver.ArchiverOptions,
): NodeJS.ReadableStream & NodeJS.WritableStream;

export default gulpTar;

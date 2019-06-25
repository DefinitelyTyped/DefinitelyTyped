// Type definitions for stream-mock 1.2
// Project: https://github.com/BastienAr/stream-mock
// Definitions by: Ivan Kerin <https://github.com/ivank>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import {
    Readable,
    ReadableOptions,
    WritableOptions,
    Writable,
    Duplex,
    DuplexOptions
} from "stream";

export class ReadableMock extends Readable {
    constructor(source: ReadonlyArray<any>, opts?: ReadableOptions);
}
export class WritableMock extends Writable {
    data: any;
    flatData: any;
}
export class DuplexMock extends Duplex {
    data: any;
    flatData: any;
}

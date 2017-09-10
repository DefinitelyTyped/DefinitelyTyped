// Type definitions for jpeg-extractor version 1.0
// Project: https://github.com/y0track/jpeg-extractor
// Definitions by: Kevin Rutkay <https://github.com/krutkay>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { Transform } from 'stream';

export class jpeg_extractor extends Transform {
    constructor(options?: any);
}

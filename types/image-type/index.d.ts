// Type definitions for image-type 3.0
// Project: https://github.com/sindresorhus/image-type#readme
// Definitions by: Florian Keller <https://github.com/ffflorian>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import FileType = require('file-type');

declare function ImageType(buf: Buffer | Uint8Array): FileType.FileTypeResult | null;

export = ImageType;

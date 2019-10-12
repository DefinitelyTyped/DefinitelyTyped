// Type definitions for image-thumbnail 1.0
// Project: https://github.com/onildoaguiar/image-thumbnail
// Definitions by: Noam Alffasy <https://github.com/noamalffasy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { ReadStream } from 'fs';

declare namespace ImageThumbnail {
    interface Options {
        percentage?: number;
        width?: number;
        height?: number;
        responseType?: string;
    }

    interface Init {
        (src: { uri: string } | string | Buffer | ReadStream, options?: { responseType: 'buffer' } & Options): Promise<
            Buffer
        >;
        (src: { uri: string } | string | Buffer | ReadStream, options?: { responseType: 'base64' } & Options): Promise<
            string
        >;
    }
}

declare const imageThumbnail: ImageThumbnail.Init;

export = imageThumbnail;
export as namespace imageThumbnail;

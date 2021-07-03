// Type definitions for express-processimage 10.1
// Project: https://github.com/papandreou/express-processimage#readme
// Definitions by: Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { NextFunction } from 'express';

/**
 * Middleware that processes images according to the query string.
 * It is intended to be used in a development setting with the static middleware,
 * but should play well with any middleware further down the stack,even an http proxy, via hijackresponse.
 */
declare function processImage(options?: processImage.Options): NextFunction;

declare namespace processImage {
    interface Options {
        allowedImageSourceContentTypes?: string[];
        allowOperation?: (operationName: string, ...args: any[]) => boolean;
        /** @debug false */
        debug?: boolean;
        filters?: Record<string, boolean>;
        maxInputPixels?: number;
        maxOutputPixels?: number;
        onPipeline?: (pipeline: object) => void;
        root?: string;
        sharpCache?: number;
        /** @defult false */
        secondGuessSourceContentType?: boolean;
    }
}

export = processImage;

import { NextFunction } from "express";

/**
 * Middleware that processes images according to the query string.
 * It is intended to be used in a development setting with the static middleware,
 * but should play well with any middleware further down the stack,even an http proxy, via hijackresponse.
 */
declare function processImage(options?: processImage.Options): NextFunction;

declare namespace processImage {
    interface Options {
        allowedImageSourceContentTypes?: string[] | undefined;
        allowOperation?: ((operationName: string, ...args: any[]) => boolean) | undefined;
        /** @default false */
        debug?: boolean | undefined;
        filters?: Record<string, boolean> | undefined;
        maxInputPixels?: number | undefined;
        maxOutputPixels?: number | undefined;
        onPipeline?: ((pipeline: object) => void) | undefined;
        root?: string | undefined;
        sharpCache?: number | undefined;
        /** @default false */
        secondGuessSourceContentType?: boolean | undefined;
    }
}

export = processImage;

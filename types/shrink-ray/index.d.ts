// Type definitions for shrink-ray 0.1
// Project: https://github.com/aickin/shrink-ray
// Definitions by: forabi <https://github.com/forabi>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { RequestHandler, Request, Response } from 'express';
import * as zlib from 'zlib';
type FilterFunction = (req: Request, res: Response) => boolean;

type Options = Partial<{
    cacheSize: number;
    threshold: number;
    zlib: Partial<{
        /** default: zlib.constants.Z_NO_FLUSH */
        flush?: number;

        /** default: zlib.constants.Z_FINISH */
        finishFlush?: number;

        /** default: 16*1024 */
        chunkSize?: number;
        windowBits?: number;

        /** compression only */
        strategy?: number;

        /** deflate/inflate only, empty dictionary by default */
        dictionary?: any;

        /** compression only */
        level: -1 | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

        /** compression only */
        memLevel: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
    }>;
    brotli: {
        lgblock: number;
        lgwin: number;
        mode: 0 | 1 | 2;
        quality: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;
    };
    filter: FilterFunction;
    cache(req: Request, res: Response): boolean;
}>;

interface CreateMiddleware {
    (options?: Options): RequestHandler;
    filter: FilterFunction;
}

declare const createMiddleware: CreateMiddleware;

export = createMiddleware;

// Type definitions for hijackresponse 4.0
// Project: https://github.com/gustavnikolaj/hijackresponse
// Definitions by: Matthias Kunnen <https://github.com/MatthiasKunnen>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.5

import express = require('express');
import { Readable } from 'stream';

declare namespace e {
    interface HijackedResponse<ResBody = any>
        extends express.Response<ResBody>,
            Omit<Readable, keyof express.Response> {
        destroyHijacked: () => boolean;
        unhijack: () => express.Response;
    }
}

declare function e<ResBody = any>(
    res: express.Response<ResBody>,
    callback: (err: null, res: e.HijackedResponse<ResBody>) => void,
): void;
export = e;

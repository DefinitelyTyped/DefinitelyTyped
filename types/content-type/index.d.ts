// Type definitions for content-type 1.1
// Project: https://www.npmjs.com/package/content-type
// Definitions by: Hiroki Horiuchi <https://github.com/horiuchi>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

import * as express from 'express';

declare var ct: ct.StaticFunctions;
export = ct;

declare namespace ct {
    interface StaticFunctions {
        parse(input: express.Request | express.Response | string): MediaType;
        format(obj: MediaType): string;
    }

    interface MediaType {
        type: string;
        parameters?: any;
    }
}

// Type definitions for stream-meter
// Project: https://github.com/brycebaril/node-stream-meter
// Definitions by: TANAKA Koichi <https://github.com/mugeso/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
/// <reference path="../node/node.d.ts" />

declare module "stream-meter" {
    import {Transform} from 'stream';

    function m(maxBytes?:number):m.StreamMeter;

    namespace m {
        export interface StreamMeter extends Transform {
            constructor(maxBytes?: number): StreamMeter;
            bytes: number;
            maxBytes: number;
        }
    }

   export = m;
}
// Type definitions for smile-js 0.5.0
// Project: https://github.com/ngyewch/smile-js

export function parse(data: any, options?: {}): any;

export class SmileError extends Error {
    constructor(msg: string);
}

export as namespace SMILE;

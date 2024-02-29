/// <reference types="node" />

import Vinyl = require("vinyl");

declare namespace tap {
    interface Tap {
        (tapFunction: TapFunction, t?: any): NodeJS.ReadWriteStream;
    }

    interface TapFunction {
        (file: Vinyl): any;
    }
}

declare function tap(tapFunction: (file: Vinyl, t?: {}) => void): NodeJS.ReadWriteStream;

export = tap;

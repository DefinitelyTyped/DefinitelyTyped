/// <reference types="node" />

import Vinyl = require("vinyl");

declare namespace intercept {
    interface Intercept {
        (interceptFunction: InterceptFunction): NodeJS.ReadWriteStream;
    }

    interface InterceptFunction {
        (file: Vinyl): Vinyl;
    }
}

declare var intercept: intercept.Intercept;

export = intercept;

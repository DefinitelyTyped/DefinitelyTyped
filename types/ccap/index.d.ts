// Type definitions for ccap 0.6
// Project: https://github.com/DoubleSpout/ccap
// Definitions by: taoqf <https://github.com/taoqf>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

interface Captcha {
    get(): [string, Buffer];
}

interface Options {
    width?: number;    // set width,default is 256
    height?: number;    // set height,default is 60
    offset?: number;    // set text spacing,default is 40
    quality?: number;    // set pic quality,default is 50
    fontsize?: number;    // set font size,default is 57
    // Custom the function to generate captcha text
    generate?(): string;
}

declare function ccap(width: number, height: number, offset: number): Captcha;
declare function ccap(options?: Options): Captcha;

declare namespace ccap { }
export = ccap;

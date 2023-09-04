// Type definitions for ccap 0.6
// Project: https://github.com/DoubleSpout/ccap
// Definitions by: taoqf <https://github.com/taoqf>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

interface Captcha {
    get(): [string, Buffer];
}

interface Options {
    width?: number | undefined; // set width,default is 256
    height?: number | undefined; // set height,default is 60
    offset?: number | undefined; // set text spacing,default is 40
    quality?: number | undefined; // set pic quality,default is 50
    fontsize?: number | undefined; // set font size,default is 57
    // Custom the function to generate captcha text
    generate?(): string;
}

declare function ccap(width: number, height: number, offset: number): Captcha;
declare function ccap(options?: Options): Captcha;

declare namespace ccap {}
export = ccap;

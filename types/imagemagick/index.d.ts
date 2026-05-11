// Imported from: https://github.com/soywiz/typescript-node-definitions/imagemagick.d.ts

/// <reference types="node" />

import child_process = require("child_process");

export declare function identify(
    path: string,
    callback: (err: Error, features: Features) => void,
): child_process.ChildProcess;
export declare function identify(
    path: any[],
    callback: (err: Error, result: string) => void,
): child_process.ChildProcess;
export declare namespace identify {
    export var path: string;
}
export declare function readMetadata(
    path: string,
    callback: (err: Error, result: any) => void,
): child_process.ChildProcess;

export declare function convert(args: any, callback: (err: Error, result: any) => void): child_process.ChildProcess;
export declare function convert(
    args: any,
    timeout: number,
    callback: (err: Error, result: any) => void,
): child_process.ChildProcess;
export declare namespace convert {
    export var path: string;
}

export declare function resize(
    options: Options,
    callback: (err: Error, result: any) => void,
): child_process.ChildProcess;
export declare function crop(options: Options, callback: (err: Error, result: any) => void): child_process.ChildProcess;
export declare function resizeArgs(options: Options): ResizeArgs;

export interface Features {
    format?: string | undefined;
    width?: number | undefined;
    height?: number | undefined;
    depth?: number | undefined;
}

export interface Options {
    srcPath?: string | undefined; // : null,
    srcData?: string | undefined; // : null,
    srcFormat?: string | undefined; // : null,
    dstPath?: string | undefined; // : null,
    quality?: number | undefined; // : 0.8,
    format?: string | undefined; // : 'jpg',
    progressive?: boolean | undefined; // : false,
    colorspace?: any; // : null,
    width?: number | undefined; // : 0,
    height?: number | undefined; // : 0,
    strip?: boolean | undefined; // : true,
    filter?: string | undefined; // : 'Lagrange',
    sharpening?: number | undefined; // : 0.2,
    customArgs?: any[] | undefined; // : [],
    timeout?: number | undefined; // : 0
}

export interface ResizeArgs {
    opt: Options;
    args: string[];
}

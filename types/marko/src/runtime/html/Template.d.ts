/// <reference types="node" />

import * as stream from 'stream';
//import * as AsyncStream from './AsyncStream';

type AsyncStream = any;

declare class Readable extends stream.Readable {
    _t: any;
    _d: any;
    _shouldBuffer: boolean;
    _rendered: boolean;

    constructor(template: T, data: any, options: any);
    write(data: any): void;
}

declare interface Renderable {
    createOut: any;
    renderToString(data?: any, callback?: any): any;
    renderSync(data?: any): any;
    render(data?: any, out?: any): any;
}

export default interface Template extends Renderable {
    path: string;
    _: any;
    ___shouldBuffer: boolean;
    meta: any;

    (path: string, renderFunc: any, options: any): Template;
    createOut(globalData: any, writer: any, parentOut: any, buffer: any): AsyncStream;
    stream(data: any): Readable;
}

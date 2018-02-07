// Type definitions for snowboy 1.2
// Project: https://github.com/Kitt-AI/snowboy
// Definitions by: Dolan Miu <https://github.com/dolanmiu>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { Stream } from "stream";

export type State = "sound" | "silence" | "hotword" | "error";

export class Detector extends Stream {
    constructor(params: any);

    on(event: State | symbol, callback: (index: any, hotword?: any, buffer?: Buffer) => void): this;
}

export class Models {
    add(params: any): void;
}

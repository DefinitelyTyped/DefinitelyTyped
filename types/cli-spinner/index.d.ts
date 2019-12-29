// Type definitions for cli-spinner 0.2
// Project: https://github.com/helloIAmPau/node-spinner
// Definitions by: Jay Anslow <https://github.com/janslow>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

export interface Options {
    text?: string;
    stream?: NodeJS.WritableStream;
    onTick?(this: Spinner, msg: string): void;
}

export class Spinner {
    static setDefaultSpinnerString(spinnerString: string | number): typeof Spinner;
    static setDefaultSpinnerDelay(spinnerDelay: number): typeof Spinner;

    readonly stream: NodeJS.WritableStream;

    constructor(titleOrOptions?: string | Options);

    start(): this;
    stop(clear?: boolean): this;
    isSpinning(): boolean;
    clearLine(stream: NodeJS.WritableStream): this;
    setSpinnerString(spinnerString: string | number): this;
    setSpinnerTitle(title: string): this;
    setSpinnerDelay(spinnerDelay: number): this;
}

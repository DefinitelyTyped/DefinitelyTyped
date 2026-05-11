/// <reference types="node" />

export interface Options {
    text?: string | undefined;
    stream?: NodeJS.WritableStream | undefined;
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

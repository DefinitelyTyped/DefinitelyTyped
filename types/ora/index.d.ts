// Type definitions for ora v0.3.0
// Project: https://github.com/sindresorhus/ora
// Definitions by: Basarat Ali Syed <https://github.com/basarat/>, Christian Rackerseder <https://www.echooff.de/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

type Color = 'black' | 'red' | 'green' | 'yellow' | 'blue' | 'magenta' | 'cyan' | 'white' | 'gray';
interface Options {
    text?: string;
    spinner?: string | Spinner;
    color?: Color;
    interval?: number;
    stream?: NodeJS.WritableStream;
    enabled?: boolean;
}
interface Spinner {
    interval?: number;
    frames: string[];
}
interface Instance {
    start(): Instance;
    stop(): Instance;
    succeed(): Instance;
    fail(): Instance;
    stopAndPersist(symbol?: string): Instance;
    clear(): Instance;
    render(): Instance;
    frame(): Instance;
    text: string;
    color: Color;
}
declare function ora(options: Options | string): Instance;
export = ora;

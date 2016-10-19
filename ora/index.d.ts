// Type definitions for ora v0.3.0
// Project: https://github.com/sindresorhus/ora
// Definitions by: Christian Rackerseder <https://github.com/screendriver/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

declare module "ora" {
    type Color = 'black' | 'red' | 'green' | 'yellow' | 'blue' | 'magenta' | 'cyan' | 'white' | 'gray';
    type Text = string;
    interface Options {
        text?: Text;
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
    function ora(options: Options | Text): Instance;
    export = ora;
}

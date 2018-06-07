// Type definitions for tinycon 0.6
// Project: https://github.com/tommoor/tinycon
// Definitions by: Daniel Waxweiler <https://github.com/dwaxweiler>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace Tinycon {
    function setBubble(count: number): void;

    function setOptions(options: TinyconOptions): void;

    interface TinyconOptions {
        abbreviate?: boolean;
        background?: string;
        color?: string;
        fallback?: boolean;
        font?: string;
        height?: number;
        width?: number;
    }
}

declare module "tinycon" {
    export = Tinycon;
}

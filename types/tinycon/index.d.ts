// Type definitions for tinycon 0.6
// Project: https://github.com/tommoor/tinycon
// Definitions by: Daniel Waxweiler <https://github.com/dwaxweiler>
//                 Julian Hundeloh <https://github.com/jaulz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export function setBubble(count: number | string | null): void;

export function setOptions(options: TinyconOptions): void;

export interface TinyconOptions {
    abbreviate?: boolean;
    background?: string;
    color?: string;
    fallback?: boolean | 'force';
    font?: string;
    height?: number;
    width?: number;
}

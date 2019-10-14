// Type definitions for estimate 1.0
// Project: https://github.com/bevacqua/estimate
// Definitions by: Luis Rodrigues <https://github.com/goblindegook>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface Options {
    speed?: number;
    spaces?: RegExp;
}

export interface Estimate {
    progress: number;
    remaining: number;
    total: number;
    update(): void;
    initialize(): void;
}

export function element(element: HTMLElement, options?: Options): Estimate;

export function text(text: string, options?: Options): number;

// Type definitions for Jdenticon 1.3.2
// Project: http://jdenticon.com/
// Definitions by: Martin Thorsen Ranang <https://github.com/mtr>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface JdenticonConfig {
    lightness?: {
        color?: number[];
        grayscale?: number[];
    };
    saturation?: number;
}

export var jdenticon_config: JdenticonConfig;

export namespace jdenticon {
    export function drawIcon(ctx: CanvasRenderingContext2D, hash: string, size: number): void;

    export function toSvg(hash: string, size: number, padding?: number): string;

    export function update(el: Element|string, hash?: string, padding?: number): void;

    export let config: JdenticonConfig;

    export const version: string;
}

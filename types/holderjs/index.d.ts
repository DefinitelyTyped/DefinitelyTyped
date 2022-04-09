// Type definitions for holderjs 2.9
// Project: http://holderjs.com
// Definitions by: Soner Köksal <https://github.com/renjfk>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace Holder;

export interface Options {
    images: HTMLElement | null;
}

export function run(options: Options): void;

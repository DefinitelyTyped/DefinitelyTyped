// Type definitions for siema 1.0
// Project: https://github.com/pawelgrzybek/siema
// Definitions by: Irmantas Zenkus <https://github.com/Irmiz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
declare class Siema {
    currentSlide: number;

    constructor(options?: SiemaOptions);

    next(): void;
    prev(): void;
    goTo(index: number): void;
}

interface SiemaOptions {
    selector?: string;
    duration?: number;
    easing?: string;
    perPage?: number;
    startIndex?: number;
    draggable?: boolean;
    threshold?: number;
    loop?: boolean;
}

export = Siema;

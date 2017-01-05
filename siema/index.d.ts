// Type definitions for siema
// Project: https://github.com/pawelgrzybek/siema
// Definitions by: Irmantas Zenkus <https://github.com/Irmiz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
declare module 'siema' {
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

    class Siema {
        public currentSlide: number;

        constructor(options?: SiemaOptions);

        public next(): void;
        public prev(): void;
        public goTo(index: number): void;
    }

    export = Siema;
}

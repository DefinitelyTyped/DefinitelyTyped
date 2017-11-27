// Type definitions for lozad 1.0
// Project: https://github.com/ApoorvSaxena/lozad.js
// Definitions by: York Yao <https://github.com/plantain-00>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface Option {
    rootMargin?: string;
    threshold?: number;
    load?(element: HTMLElement | HTMLCanvasElement): void;
}

interface Observer {
    observe(): void;
}

declare function lozad(selector?: string, options?: Option): Observer;

declare namespace lozad {
    const prototype: {
    };
}

export as namespace lozad;

export = lozad;

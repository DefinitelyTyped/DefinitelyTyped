// Type definitions for lozad 1.1
// Project: https://github.com/ApoorvSaxena/lozad.js
// Definitions by: York Yao <https://github.com/plantain-00>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace lozad {
    interface Option {
        rootMargin?: string;
        threshold?: number;
        load?(element: HTMLElement | HTMLCanvasElement): void;
    }

    interface Observer {
        observe(): void;
    }

    const prototype: {
    };
}

declare function lozad(selector?: string, options?: lozad.Option): lozad.Observer;

export as namespace lozad;

export = lozad;

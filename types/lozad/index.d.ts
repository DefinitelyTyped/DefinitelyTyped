// Type definitions for lozad 1.9
// Project: https://github.com/ApoorvSaxena/lozad.js
// Definitions by: York Yao <https://github.com/plantain-00>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

declare namespace lozad {
    interface Option {
        rootMargin?: string;
        threshold?: number;
        load?(element: Element): void;
        loaded?(element: Element): void;
    }

    interface Observer {
        observe(): void;
        triggerLoad(element: Element): void;
        observer: IntersectionObserver;
    }

    type Selector = string | Element | HTMLCollectionOf<Element> | NodeListOf<Element>;

    const prototype: {
    };
}

declare function lozad(selector?: lozad.Selector, options?: lozad.Option): lozad.Observer;

export as namespace lozad;

export = lozad;

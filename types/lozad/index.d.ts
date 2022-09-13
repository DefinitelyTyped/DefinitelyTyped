// Type definitions for lozad 1.16
// Project: https://github.com/ApoorvSaxena/lozad.js
// Definitions by: York Yao <https://github.com/plantain-00>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace lozad {
    interface Options {
        enableAutoReload?: boolean | undefined;
        rootMargin?: string | undefined;
        threshold?: number | undefined;
        load?(element: Element): void;
        loaded?(element: Element): void;
    }

    // TODO: remove on next major version bump
    // tslint:disable:next-line no-empty-interface
    interface Option extends Options {}

    interface Observer {
        observe(): void;
        triggerLoad(element: Element): void;
        observer: IntersectionObserver;
    }

    type Selector = string | Element | HTMLCollectionOf<Element> | NodeListOf<Element>;

    const prototype: {
    };
}

declare function lozad(selector?: lozad.Selector, options?: lozad.Options): lozad.Observer;

export as namespace lozad;

export = lozad;

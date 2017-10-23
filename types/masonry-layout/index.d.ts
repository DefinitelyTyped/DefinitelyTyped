// Type definitions for Masonry 4.0
// Project: https://github.com/desandro/masonry
// Definitions by: Mark Wilson <https://github.com/m-a-wilson>, Travis Brown <https://github.com/warriorrocker>
// Definitions: https://github.com/borisyankov/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery" />

export = Masonry;

declare class Masonry {
    constructor(options?: Masonry.Options);
    constructor(selector: string | Element, options?: Masonry.Options);

    masonry?(): void;
    masonry?(eventName: string, listener: any): void;

    // layout
    layout?(): void;
    layoutItems?(items: any[], isStill?: boolean): void;
    stamp?(elements: any[]): void;
    unstamp?(elements: any[]): void;

    // add and remove items
    appended?(elements: any[]): void;
    prepended?(elements: any[]): void;
    addItems?(elements: any[]): void;
    remove?(elements: any[]): void;

    // events
    on?(eventName: string, listener: any): void;
    off?(eventName: string, listener: any): void;
    once?(eventName: string, listener: any): void;

    // utilities
    reloadItems?(): void;
    destroy?(): void;
    getItemElements?(): any[];
    data?(element: Element): Masonry;
}

declare namespace Masonry {
    interface Options {
        // layout
        itemSelector?: string;
        columnWidth?: any;
        percentPosition?: boolean;
        gutter?: any;
        stamp?: string;
        fitWidth?: boolean;
        originLeft?: boolean;
        originTop?: boolean;

        // setup
        containerStyle?: {};
        transitionDuration?: any;
        resize?: boolean;
        initLayout?: boolean;
    }
}

declare global {
    interface JQuery {
        masonry(options?: Masonry.Options): JQuery;
    }
}

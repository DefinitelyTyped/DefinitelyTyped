// Type definitions for Masonry 4.0
// Project: https://github.com/desandro/masonry
// Definitions by: Mark Wilson <https://github.com/m-a-wilson>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference types="jquery" />

// Modified from original definitions by:
// Travis Brown < https://github.com/warriorrocker>

declare namespace Masonry {

    class Masonry implements MasonryGrid {
        constructor(options?: MasonryOptions);
        constructor(selector: string, options?: MasonryOptions);
    }

    interface MasonryGrid {
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

    interface MasonryOptions {

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

export = Masonry;

interface JQuery {
    masonry(options?: Masonry.MasonryOptions): JQuery;
}

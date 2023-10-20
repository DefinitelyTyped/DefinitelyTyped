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
    interface HiddenOrVisibleStyleOption {
        transform?: string | undefined;
        opacity?: number | undefined;
    }

    interface Options {
        // layout
        itemSelector?: string | undefined;
        columnWidth?: any;
        percentPosition?: boolean | undefined;
        gutter?: any;
        stamp?: string | undefined;
        fitWidth?: boolean | undefined;
        originLeft?: boolean | undefined;
        originTop?: boolean | undefined;
        horizontalOrder?: boolean | undefined;
        hiddenStyle?: HiddenOrVisibleStyleOption | undefined;
        visibleStyle?: HiddenOrVisibleStyleOption | undefined;

        // setup
        containerStyle?: {} | undefined;
        transitionDuration?: any;
        stagger?: string | number | undefined;
        resize?: boolean | undefined;
        initLayout?: boolean | undefined;
    }
}

declare global {
    interface JQuery {
        masonry(options?: Masonry.Options): JQuery;
        masonry(selector: string | Element, options?: Masonry.Options | JQuery): JQuery;
    }
}

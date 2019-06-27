// Type definitions for simonwep__selection-js 0.2
// Project: https://github.com/Simonwep/selection
// Definitions by: Mitsuka Hanakura a.k.a. ragg <https://github.com/ra-gg>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.4

type ElementList = Element | readonly Element[] | NodeList | HTMLCollection;

declare namespace Selection {
    interface SelectionEvent {
        selection: Selection;
        eventName: string;
        areaElement: readonly Element[];
        originalEvent: MouseEvent | TouchEvent;
        selectedElements: readonly Element[];
        changedElements: {
            added: readonly Element[];
            removed: readonly Element[];
        };
    }

    interface SingleSelectionEvent extends SelectionEvent {
        target: Element;
    }

    interface SelectionFilterEvent {
        eventName: 'selectionFilter';
        element: Element;
        selection: Selection;
    }

    type Mode = 'touch' | 'center' | 'cover';

    interface SelectionOptions {
        class?: string;
        mode?: Mode;
        startThreshold?: number;
        singleClick?: boolean;
        disableTouch?: boolean;
        selectables?: string[];
        scrollSpeedDivider?: number;
        startareas?: ReadonlyArray<string>;
        boundaries?: ReadonlyArray<string>;
        selectionAreaContainer?: string | HTMLElement | ReadonlyArray<string | HTMLElement>;
        validateStart?(evt: MouseEvent | TouchEvent): boolean;
        onStart?(evt: SelectionEvent): void;
        onSelect?(evt: SingleSelectionEvent): void;
        onMove?(evt: SelectionEvent): void;
        onStop?(evt: SelectionEvent): void;
        selectionFilter?(evt: SelectionFilterEvent): boolean;
    }

    interface SelectionUtils {
        on(
            el: ElementList,
            events: string | ReadonlyArray<string>,
            fn: (ev: Event) => void,
            options?: AddEventListenerOptions
        ): void;
        off(
            el: ElementList,
            events: string | ReadonlyArray<string>,
            fn: (ev: Event) => void,
            options?: AddEventListenerOptions
        ): void;
        css(el: Element, attr: Record<string, string | number>): any;
        css(el: Element, attr: string, val: string | number): any;
        intersects(a: Element, b: Element, mode: Mode): boolean;
        selectAll(selector: string | HTMLElement | ReadonlyArray<string | HTMLElement>): Element[];
        eventPath(evt: Event): EventTarget[];
        removeElement(arr: Element[], el: Element): void;
    }
}

declare class Selection {
    static create(options: Selection.SelectionOptions): Selection;
    static utils: Selection.SelectionUtils;
    static version: string;

    constructor(options: Selection.SelectionOptions);
    resolveSelectables(): void;
    keepSelection(): void;
    clearSelection(): void;
    removeFromSelection(el: Element): void;
    getSelection(): Element[];
    cancel(keepEvent?: boolean): void;
    option<K extends keyof Selection.SelectionOptions>(
        name: K,
        value: Selection.SelectionOptions[K] | null
    ): Selection.SelectionOptions[K];
    disable(): void;
    destroy(): void;
    enable(): void;
    select(query: Parameters<Selection.SelectionUtils['selectAll']>[0]): this;
}

export = Selection;
export as namespace Selection;

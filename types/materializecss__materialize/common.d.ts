/// <reference types="jquery"/>
type Cash = import("cash-dom").Cash;

type MElements = NodeListOf<Element> | JQuery | Cash;

declare namespace M {
    abstract class Component<TOptions> extends ComponentBase<TOptions> {
        /**
         * Construct component instance and set everything up
         */
        constructor(elem: Element, options?: Partial<TOptions>);

        /**
         * Destroy plugin instance and teardown
         */
        destroy(): void;
    }

    abstract class ComponentBase<TOptions> {
        constructor(options?: Partial<TOptions>);

        /**
         * The DOM element the plugin was initialized with
         */
        el: Element;

        /**
         * The options the instance was initialized with
         */
        options: TOptions;
    }

    interface Openable {
        isOpen: boolean;
        open(): void;
        close(): void;
    }

    interface InternationalizationOptions {
        cancel: string;
        clear: string;
        done: string;
        previousMonth: string;
        nextMonth: string;
        months: string[];
        monthsShort: string[];
        weekdays: string[];
        weekdaysShort: string[];
        weekdaysAbbrev: string[];
    }
}

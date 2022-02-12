// Type definitions for bootstrap-select 1.13
// Project: https://silviomoreto.github.io/bootstrap-select/
// Definitions by: Karol Janyst <https://github.com/LKay>
//                 Alex Truba <https://github.com/AlexTruba>
//                 Martin Badin <https://github.com/martin-badin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery"/>

interface BootstrapSelectOptions {
    actionsBox: boolean;
    container: string | false;
    countSelectedText: string | ((numSelected: number, numTotal: number) => string);
    deselectAllText: string;
    dropdownAlignRight: 'auto' | boolean;
    dropupAuto: boolean;
    header: string;
    hideDisabled: boolean;
    iconBase: string;
    liveSearch: boolean;
    liveSearchNormalize: boolean;
    liveSearchPlaceholder: string | null;
    liveSearchStyle: string;
    maxOptions: number | false;
    maxOptionsText: string | any[] | ((numAll: number, numGroup: number) => [string, string]);
    mobile: boolean;
    multipleSeparator: string;
    noneResultsText: string;
    noneSelectedText: string;
    sanitize: boolean;
    sanitizeFn: null | ((unsafeElements: Array<HTMLElement | ChildNode | Node>) => void);
    selectAllText: string;
    selectedTextFormat: string;
    selectOnTab: boolean;
    showContent: boolean;
    showIcon: boolean;
    showSubtext: boolean;
    showTick: boolean;
    size: 'auto' | number | false;
    style: string | null;
    styleBase: string | null;
    tickIcon: string;
    title: string | null;
    virtualScroll: boolean | number;
    width: string | false;
    windowPadding: number | [number, number, number, number];
    whiteList: Record<string, string[]>;
}

interface BootstrapSelectDefaults extends BootstrapSelectOptions {
    allowClear: boolean;
    chunkSize: number;
    display: boolean;
    doneButton: boolean;
    doneButtonText: string;
    placeholder: null;
    source: object;
    template: object;
}

interface BootstrapSelectEvents {
    'show.bs.select': (e: JQuery.Event) => void;
    'shown.bs.select': (e: JQuery.Event) => void;
    'hide.bs.select': (e: JQuery.Event) => void;
    'hidden.bs.select': (e: JQuery.Event) => void;
    'loaded.bs.select': (e: JQuery.Event) => void;
    'rendered.bs.select': (e: JQuery.Event) => void;
    'refreshed.bs.select': (e: JQuery.Event) => void;
    'changed.bs.select': (
        e: JQuery.Event,
        clickedIndex: number | null,
        isSelected: boolean | null,
        previousValue: string,
    ) => void;
}

interface BootstrapSelect<T = HTMLElement> {
    readonly Constructor: {
        readonly VERSION: string;
        readonly DEFAULTS: BootstrapSelectDefaults;

        BootstrapVersion: string;
    };

    /**
     * Main function
     */
    (opts?: Partial<BootstrapSelectOptions>): JQuery<T>;

    /**
     * Methods
     * @see {@link https://developer.snapappointments.com/bootstrap-select/methods/}
     */
    (method: 'val', value: string | string[]): JQuery<T>;
    (method: 'setStyle', className?: string, action?: 'add' | 'remove'): JQuery<T>;
    (
        method: 'selectAll' | 'deselectAll' | 'render' | 'mobile' | 'refresh' | 'toggle' | 'hide' | 'show' | 'destroy',
    ): JQuery<T>;
}

interface JQuery<TElement = HTMLElement> {
    selectpicker: BootstrapSelect<TElement>;

    on<K extends keyof BootstrapSelectEvents>(eventName: K, handler: BootstrapSelectEvents[K]): this;
}

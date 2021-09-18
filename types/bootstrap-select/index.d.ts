// Type definitions for bootstrap-select v1.13.14
// Project: https://silviomoreto.github.io/bootstrap-select/
// Definitions by: Karol Janyst <https://github.com/LKay>
//                 Alex Truba <https://github.com/AlexTruba>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery"/>

interface BootstrapSelectOptions {
    actionsBox: boolean;
    container: string | boolean;
    countSelectedText: string | ((numSelected: number, numTotal: number) => string);
    deselectAllText: string;
    dropdownAlignRight: string | boolean;
    dropupAuto: boolean;
    header: string;
    hideDisabled: boolean;
    iconBase: string;
    liveSearch: boolean;
    liveSearchNormalize: boolean;
    liveSearchPlaceholder: string;
    liveSearchStyle: string;
    maxOptions: number | boolean;
    maxOptionsText: string | any[] | ((numAll: number, numGroup: number) => [string, string]);
    mobile: boolean;
    multipleSeparator: string;
    noneResultsText: string;
    noneSelectedText: string;
    sanitize: boolean;
    sanitizeFn(unsafeElements: Array<HTMLElement | ChildNode | Node>): void;
    selectAllText: string;
    selectedTextFormat: string;
    selectOnTab: boolean;
    showContent: boolean;
    showIcon: boolean;
    showSubtext: boolean;
    showTick: boolean;
    size: 'auto' | number | boolean;
    style: string;
    styleBase: string;
    tickIcon: string;
    title: string;
    virtualScroll: boolean | number;
    width: string | boolean;
    windowPadding: number | number[];
}

interface BootstrapSelectDefaults extends BootstrapSelectOptions {
    allowClear: boolean;
    chunkSize: number;
    display: boolean;
    doneButton: boolean;
    doneButtonText: string;
    placeholder: null;
    sanitize: boolean;
    source: object;
    template: object;
    whiteList: Record<string, string[]>;
}

type MethodType =
    | 'val'
    | 'selectAll'
    | 'deselectAll'
    | 'render'
    | 'mobile'
    | 'setStyle'
    | 'refresh'
    | 'toggle'
    | 'hide'
    | 'show'
    | 'destroy';

interface SelectPicker {
    (opts?: Partial<BootstrapSelectOptions>): JQuery;
    (method: MethodType, ...args: Array<string | Array<string>>): JQuery;

    readonly Constructor: {
        BootstrapVersion: string;
        readonly DEFAULTS: BootstrapSelectDefaults;
        readonly VERSION: string;
    };
}

interface JQuery {
    selectpicker: SelectPicker;
}

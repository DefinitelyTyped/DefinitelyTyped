// Type definitions for bootstrap-select v1.13.14
// Project: https://silviomoreto.github.io/bootstrap-select/
// Definitions by: Karol Janyst <https://github.com/LKay>
//                 Alex Truba <https://github.com/AlexTruba>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery"/>

interface BootstrapSelectOptions {
    actionsBox?: boolean;
    container?: string | boolean;
    countSelectedText?: string | Function;
    deselectAllText?: string;
    dropdownAlignRight?: string | boolean;
    dropupAuto?: boolean;
    header?: string;
    hideDisabled?: boolean;
    iconBase?: string;
    liveSearch?: boolean;
    liveSearchNormalize?: boolean;
    liveSearchPlaceholder?: string;
    liveSearchStyle?: string;
    maxOptions?: number | boolean;
    maxOptionsText?: string | Array<any> | Function;
    mobile?: boolean;
    multipleSeparator?: string;
    noneSelectedText?: string;
    noneResultsText?: string;
    selectAllText?: string;
    selectedTextFormat?: string;
    selectOnTab?: boolean;
    showContent?: boolean;
    showIcon?: boolean;
    showSubtext?: boolean;
    showTick?: boolean;
    size?: 'auto' | number | boolean;
    style?: string;
    styleBase?: string;
    tickIcon?: string;
    title?: string;
    virtualScroll?: boolean | number;
    width?: string | boolean;
    windowPadding?: number | number[];
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

interface JQuery {
    selectpicker(opts?: BootstrapSelectOptions): JQuery;
    selectpicker(method: MethodType, ...args: Array<string | Array<string>>): JQuery;
}

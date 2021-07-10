// Type definitions for bootstrap-select v1.13.14
// Project: https://silviomoreto.github.io/bootstrap-select/
// Definitions by: Karol Janyst <https://github.com/LKay>
//                 Alex Truba <https://github.com/AlexTruba>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery"/>

interface BootstrapSelectOptions {
    actionsBox?: boolean | undefined;
    container?: string | boolean | undefined;
    countSelectedText?: string | Function | undefined;
    deselectAllText?: string | undefined;
    dropdownAlignRight?: string | boolean | undefined;
    dropupAuto?: boolean | undefined;
    header?: string | undefined;
    hideDisabled?: boolean | undefined;
    iconBase?: string | undefined;
    liveSearch?: boolean | undefined;
    liveSearchNormalize?: boolean | undefined;
    liveSearchPlaceholder?: string | undefined;
    liveSearchStyle?: string | undefined;
    maxOptions?: number | boolean | undefined;
    maxOptionsText?: string | Array<any> | Function | undefined;
    mobile?: boolean | undefined;
    multipleSeparator?: string | undefined;
    noneSelectedText?: string | undefined;
    noneResultsText?: string | undefined;
    selectAllText?: string | undefined;
    selectedTextFormat?: string | undefined;
    selectOnTab?: boolean | undefined;
    showContent?: boolean | undefined;
    showIcon?: boolean | undefined;
    showSubtext?: boolean | undefined;
    showTick?: boolean | undefined;
    sanitize?: boolean | undefined;
    sanitizeFn?: ((unsafeElements: Array<HTMLElement | ChildNode | Node>) => void) | undefined;
    size?: 'auto' | number | boolean | undefined;
    style?: string | undefined;
    styleBase?: string | undefined;
    tickIcon?: string | undefined;
    title?: string | undefined;
    virtualScroll?: boolean | number | undefined;
    width?: string | boolean | undefined;
    windowPadding?: number | number[] | undefined;
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

// Type definitions for bootstrap-select v1.11.2
// Project: https://silviomoreto.github.io/bootstrap-select/
// Definitions by: Karol Janyst <https://github.com/LKay>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery"/>

interface BootstrapSelectOptions {
    actionsBox?: boolean
    container?: string | boolean
    countSelectedText?: string | Function
    deselectAllText?: string
    dropdownAlignRight?: string | boolean
    dropupAuto?: boolean
    header?: string
    hideDisabled?: boolean
    iconBase?: string
    liveSearch?: boolean
    liveSearchNormalize?: boolean
    liveSearchPlaceholder?: string
    liveSearchStyle?: string
    maxOptions?: number | boolean
    maxOptionsText?: string | Array<any> | Function
    mobile?: boolean
    multipleSeparator?: string
    noneSelectedText?: string
    selectAllText?: string
    selectedTextFormat?: string
    selectOnTab?: boolean
    showContent?: boolean
    showIcon?: boolean
    showSubtext?: boolean
    showTick?: boolean
    size?: string | number | boolean
    style?: string
    tickIcon?: string
    title?: string
    width?: string | boolean
}

interface JQuery {
    selectpicker(opts?: BootstrapSelectOptions): void
    selectpicker(method: string, ...args: Array<string | Array<string>>): void
}

// Type definitions for zui 1.7
// Project: http://zui.sexy
// Definitions by: YuanXu <https://github.com/yuanxu>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface SortEvent {
    list: Array<JQuery | object>;
    element: JQuery | object;
}

interface SortableOption {
    selector?: string,
    trigger?: string,
    reverse?: boolean,
    dragCssClass?: string,
    sortingClass?: string,
    mouseButton?: string,
    start?(e?: SortEvent): void;
    order?(e?: SortEvent): void;
    finish?(e?: SortEvent): void;
}

interface JQuery {
    sortable(command?: string): JQuery
    sortable(option?: SortableOption): JQuery
}
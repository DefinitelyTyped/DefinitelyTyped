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
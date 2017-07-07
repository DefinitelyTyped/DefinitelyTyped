interface SelectableEvent {
    selections: Map<number, boolean>;
    selected: Array<number>;
}
interface SelectableOption {
    selector?: string,
    trigger?: string,
    rangeStyle?: string|object,
    clickBehavior?: string,
    mouseButton?: string,
    ignoreVal?: number,

    start?(e?: SelectableEvent): boolean;
    finish?(e?: SelectableEvent): void;
    select?(e?: SelectableEvent): void;
    unselect?(e?: SelectableEvent): void;
}

interface Selectable {
    toggle(): any;
    toggle(elementOrId: string | object | JQuery): any;
    select(): any;
    select(elementOrId: string | object | JQuery): any;
    unselect(): any;
    unselect(elementOrId: string | object | JQuery): any;
}

interface JQuery {
    selectable(option?: SelectableOption): JQuery;

}
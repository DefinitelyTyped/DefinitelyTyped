
interface Postion {
    left: number;
    top: number;
    width: number;
    height: number;
}
interface DraggableEvent {
    event?: object;
    element?: object;
    pos?: Postion;
    offset?: object;
    smallOffset?: object;
    startOffset?: object;

}
interface DraggableOption {
    container?: string,
    move?: boolean;
    selector?: string,
    handle?: string,
    mouseButton?: string,
    stopPropagation?: boolean,
    before?(e?: DraggableEvent): boolean;
    drag?(e: DraggableEvent): void;
    finish?(e: DraggableEvent): void
}

interface JQuery {
    draggable(command: string): JQuery;
    draggable(option: DraggableOption): JQuery;
}

interface Postion {
    left: number;
    top: number;
    width: number;
    height: number;
}
interface DroppableEvent {
    event?: object;
    element?: JQuery;
    target?: JQuery;
    pos?: Postion;
    offset?: object;
    smallOffset?: object;
    startOffset?: object;

}
interface DraggableOption {
    container?: string,
    selector?: string,
    handle?: string,
    target: JQuery | string,

    flex?: boolean,
    deviation?: number,
    sensorOffsetX?: number,
    sensorOffsetY?: number,

    stopPropagation?: boolean,
    before?(e?: DroppableEvent): boolean;
    start?(e?: DroppableEvent): void;
    drop?(e: DroppableEvent): void;
    beforeDrop?(e: DroppableEvent): boolean;
    finish?(e: DroppableEvent): void;
    always?(e: DroppableEvent): void;
}

interface JQuery {
    droppable(command: string): JQuery;
    droppable(option: DraggableOption): JQuery;
}
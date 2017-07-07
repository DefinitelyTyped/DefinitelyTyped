// Type definitions for zui 1.7
// Project: http://zui.sexy
// Definitions by: YuanXu <https://github.com/yuanxu>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

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
interface DroppableOption {
    container?: string,
    selector?: string,
    handle?: string,
    target: JQuery | string,

    flex?: boolean,
    deviation?: number,
    sensorOffsetX?: number,
    sensorOffsetY?: number,

    before?(e?: DroppableEvent): boolean;
    start?(e?: DroppableEvent): void;
    drag?(e: DroppableEvent): void;
    beforeDrop?(e: DroppableEvent): boolean;
    drop?(e: DroppableEvent): void;
    finish?(e: DroppableEvent): void;
    always?(e: DroppableEvent): void;
}

interface JQuery {
    droppable(command: string): JQuery;
    droppable(option: DroppableOption): JQuery;
}
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
interface DraggableEvent {
    event?: object;
    element?: JQuery | object;
    target?: JQuery | object;
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
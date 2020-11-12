import { Emitter } from "../core/emitter";
import { EventsTypes } from "../../events";

export interface Transform {
    k: number;
    x: number;
    y: number;
}
export interface Mouse {
    x: number;
    y: number;
}
export declare type ZoomSource = "wheel" | "touch" | "dblclick";
export declare class Area extends Emitter<EventsTypes> {
    el: HTMLElement;
    container: HTMLElement;
    transform: Transform;
    mouse: Mouse;
    private _startPosition;
    private _zoom;
    private _drag;
    constructor(container: HTMLElement, emitter: Emitter<EventsTypes>);
    update(): void;
    pointermove(e: PointerEvent): void;
    onStart(): void;
    onTranslate(dx: number, dy: number): void;
    onZoom(delta: number, ox: number, oy: number, source: ZoomSource): void;
    translate(x: number, y: number): void;
    zoom(zoom: number, ox: number, oy: number, source: ZoomSource): void;
    appendChild(el: HTMLElement): void;
    removeChild(el: HTMLElement): void;
}

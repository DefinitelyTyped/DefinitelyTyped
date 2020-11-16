import { ZoomSource } from './area';

declare type zoomFunc = (delta: number, ox: number, oy: number, source: ZoomSource) => void;

export declare class Zoom {
    el: HTMLElement;
    intensity: number;
    onzoom: zoomFunc;
    previous: {
        cx: number;
        cy: number;
        distance: number;
    } | null;
    pointers: PointerEvent[];
    destroy: () => void;
    constructor(container: HTMLElement, el: HTMLElement, intensity: number, onzoom: zoomFunc);
    get translating(): boolean;
    wheel(e: WheelEvent): void;
    touches(): {
        cx: number;
        cy: number;
        distance: number;
    };
    down(e: PointerEvent): void;
    move(e: PointerEvent): void;
    end(e: PointerEvent): void;
    dblclick(e: MouseEvent): void;
}

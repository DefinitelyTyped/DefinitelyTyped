export declare class Drag {
    private onTranslate;
    private onStart;
    private onDrag;
    pointerStart: [number, number] | null;
    el: HTMLElement;
    destroy: () => void;
    constructor(el: HTMLElement, onTranslate?: (_x: number, _y: number, _e: PointerEvent) => void, onStart?: (_e: PointerEvent) => void, onDrag?: (_e: PointerEvent) => void);
    down(e: PointerEvent): void;
    move(e: PointerEvent): void;
    up(e: PointerEvent): void;
}

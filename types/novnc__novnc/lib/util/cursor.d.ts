export default class Cursor {
    constructor();
    attach(target: HTMLElement): void;
    detach(): void;
    change(rgba: Uint8Array, hotx: number, hoty: number, w: number, h: number): void;
    clear(): void;
    move(clientX: number, clientY: number): void;
}

declare class Axel {
    brush: string;
    rows: number;
    cols: number;
    cursor: cursorInterface;

    lerp(p1: number, p2: number, m: number): number;
    circ(x: number, y: number, m: number): number;
    goto(x: number, y: number): void;
    scrub(x1: number, y1: number, w: number, h: number): void;
    box(x1: number, y1: number, w: number, h: number): void;
    point(x: number, y: number, char: string): void;
    dist(x1: number, y1: number, x2: number, y2: number): number;
    line(x1: number, y1: number, x2: number, y2: number): void;
    text(x: number, y: number, text: string): void;
    fg(r: number, g: number, b: number): void;
    bg(r: number, g: number, b: number): void;
    draw(cb: Function): void;
    clear(): void;
}

declare interface cursorInterface {
    on(): void;
    off(): void;
    reset(): void;
    restore(): void;
}

declare module "axel" {
    const instance: Axel;
    export = instance;
}

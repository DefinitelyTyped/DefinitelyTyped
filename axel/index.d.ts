// Type definitions for Axel module
// Project: https://github.com/F1LT3R/axel
// Definitions by: Ruslan Molodyko <https://github.com/ruslan-molodyko>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module 'axel' {
    export interface cursorInterface {
        on(): void;
        off(): void;
        reset(): void;
        restore(): void;
    }

    export let brush: string;
    export let rows: number;
    export let cols: number;
    export let cursor: cursorInterface;

    export function lerp(p1: number, p2: number, m: number): number;
    export function circ(x: number, y: number, m: number): number;
    export function goto(x: number, y: number): void;
    export function scrub(x1: number, y1: number, w: number, h: number): void;
    export function box(x1: number, y1: number, w: number, h: number): void;
    export function point(x: number, y: number, char: string): void;
    export function dist(x1: number, y1: number, x2: number, y2: number): number;
    export function line(x1: number, y1: number, x2: number, y2: number): void;
    export function text(x: number, y: number, text: string): void;
    export function fg(r: number, g: number, b: number): void;
    export function bg(r: number, g: number, b: number): void;
    export function draw(cb: Function): void;
    export function clear(): void;
}

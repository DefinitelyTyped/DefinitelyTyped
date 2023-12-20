import { Board } from "johnny-five";
export {};

// Opaque types typings
declare const tag: unique symbol;
interface TagContainer<Token> {
    readonly [tag]: Token;
}
type Opaque<Type, Token = unknown> = Type & TagContainer<Token>;

// Lib typings
export const BACKWARD: Opaque<number, "ShiftDirection">;
export const FORWARD: Opaque<number, "ShiftDirection">;
export type Direction = typeof BACKWARD | typeof FORWARD;

export namespace COLOR_ORDER {
    const GRB: Opaque<number, "ColorOrder">;
    const RGB: Opaque<number, "ColorOrder">;
    const BRG: Opaque<number, "ColorOrder">;
}

export interface StripArgs {
    board: Board;
    strips: Array<{ pin: string | number; length: number }> | number[];
    controller?: "FIRMATA" | "I2CBACKPACK";
    color_order?: typeof COLOR_ORDER.GRB | typeof COLOR_ORDER.RGB | typeof COLOR_ORDER.BRG;
    gamma?: number;
}

export class Strip {
    readonly length: number;

    constructor(args: StripArgs);

    pixel(index: number): Pixel;
    shift(index: number, direction: Direction, wrap: boolean): void;
    color(color: string | number[]): void;
    colour(color: string | number[]): void;
    off(): void;
    clear(): void;
    show(): void;

    on(event: string, callback: () => void): void;
    on(event: "error", callback: (e: Error) => void): void;
}

export interface Pixel {
    color(color: string | number[]): void;
    colour(color: string | number[]): void;
    off(): void;
    clear(): void;
}

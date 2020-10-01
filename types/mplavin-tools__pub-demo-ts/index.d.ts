// Type definitions for @mplavin-tools/pub-demo-ts 0.1
// Project: https://gitlab.com/mplavin/pub-demo-ts
// Definitions by: Max Plavinskiy <https://github.com/MaxPlav>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

    export interface RoundInterface {
        radius: number;
        square: () => number;
        getRadius: () => number;
    }
    export interface Color {
        value: number;
    }
    export interface Shape {
        value: number;
    }
    export function sum(): (a: number, b: number) => number;
    export class Circle implements RoundInterface {
        radius: number;
        constructor(radius: number);
        square(): number;
        getRadius(): number;
    }
    export class Red implements Color {
        private color;
        value: number;
        constructor(color: string);
        getColor(): string;
    }
    export class Round implements Shape {
        value: number;
        private shape;
        constructor(shape: string);
        getShape(): string;
    }

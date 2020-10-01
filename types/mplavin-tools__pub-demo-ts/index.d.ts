declare module '@mplavin-tools/pub-demo-ts' {
    export interface IRound {
        radius: number;
        square: () => number;
        getRadius: () => number;
    }
    export interface IColor {
    }
    export interface IShape {
    }
    export const sum: (a: number, b: number) => number;
    export class Circle implements IRound {
        radius: number;
        constructor(radius: number);
        square(): number;
        getRadius(): number;
    }
    export class Red implements IColor {
        private color;
        constructor(color: string);
        getColor(): string;
    }
    export class Round implements IShape {
        private shape;
        constructor(shape: string);
        getShape(): string;
    }
}

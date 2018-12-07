// Type definitions for color-string 1.5
// Project: https://github.com/qix-/color-string#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
//                 Dan Marshall <https://github.com/danmarshall>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export type Color = [number, number, number, number];

export interface ColorDescriptor {
    model: 'rgb' | 'hsl' | 'hwb';
    value: Color;
}

export function get(colorString: string): ColorDescriptor | null;

export namespace get {
    function hsl(colorString: string): Color | null;
    function hwb(colorString: string): Color | null;
    function rgb(colorString: string): Color | null;
}

export namespace to {
    function hex(...args: Array<number | number[]>): string;
    function rgb(...args: Array<number | number[]>): string;
    namespace rgb {
        function percent(...args: Array<number | number[]>): string;
    }
    function keyword(...args: Array<number | number[]>): string;
    function hsl(...args: Array<number | number[]>): string;
    function hwb(...args: Array<number | number[]>): string;
}

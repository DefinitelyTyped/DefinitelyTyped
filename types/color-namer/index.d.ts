// Type definitions for color-namer 1.3
// Project: https://github.com/zeke/color-namer
// Definitions by: Dmitriy Serdtsev <https://github.com/in19farkt>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

export = ColorNamer;
export as namespace ColorNamer;

declare function ColorNamer<T extends ColorNamer.Palette>(color: string, options?: { pick: T[] }): ColorNamer.Colors<T>;
declare function ColorNamer<T extends ColorNamer.Palette>(color: string, options?: { omit: T[] }): ColorNamer.Colors<Diff<ColorNamer.Palette, T>>;

type Diff<T extends string, U extends string> = ({[P in T]: P} & {[P in U]: never } & { [x: string]: never })[T];

declare namespace ColorNamer {
    type Colors<T extends Palette> = Record<T, Color[]>;

    type Palette = 'roygbiv' | 'basic' | 'html' | 'x11' | 'pantone' | 'ntc';

    interface Color {
        name: string;
        hex: string;
        distance: number;
    }
}

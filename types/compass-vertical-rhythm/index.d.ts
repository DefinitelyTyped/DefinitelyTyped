// Type definitions for compass-vertical-rhythm 1.4
// Project: https://github.com/KyleAMathews/compass-vertical-rhythm
// Definitions by: Luis Rodrigues <https://github.com/goblindegook>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

export = compassVerticalRhythm;

interface Options {
    baseFontSize?: string;
    baseLineHeight?: number | string;
    rhythmUnit?: '%' | 'em' | 'ex' | 'ch' | 'px' | 'rem' | 'vw' | 'vh' | 'vmin';
    defaultRhythmBorderWidth?: string;
    defaultRhythmBorderStyle?:
        | 'solid'
        | 'none'
        | 'hidden'
        | 'dashed'
        | 'dotted'
        | 'double'
        | 'groove'
        | 'ridge'
        | 'inset'
        | 'outset';
    roundToNearestHalfLine?: boolean;
    minLinePadding?: string;
}

interface VerticalRhythmStyles {
    fontSize: string;
    lineHeight: string;
}

interface VerticalRhythm {
    rhythm(lines?: number, fontSize?: string, offset?: number): number;
    establishBaseline(): VerticalRhythmStyles;
    linesForFontSize(fontSize: string): number;
    adjustFontSizeTo(toSize: string, lines?: number | 'auto' | null, fromSize?: string): VerticalRhythmStyles;
}

declare function compassVerticalRhythm(options: Options): VerticalRhythm;

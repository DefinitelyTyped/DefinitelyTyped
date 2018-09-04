// Type definitions for typography 0.16
// Project: https://github.com/KyleAMathews/typography.js
// Definitions by: Boye <https://github.com/boyeborg>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

interface baseLine {
    fontSize: string;
    lineHeight: string;
}

export interface verticalRhythm {
    rhythm: (value: number) => string;
    scale: (value: number) => object;
    adjustFontSizeTo: (value?: number | string) => object;
    linesForFontSize: (fontSize: number) => number;
    establishBaseline: () => baseLine;
}

export interface googleFont {
    name: string;
    styles: string[];
}

export interface typographyOptions {
    baseFontSize?: string;
    baseLineHeight?: number;
    scaleRatio?: number;
    googleFonts?: googleFont[];
    headerFontFamily?: string[];
    bodyFontFamily?: string[];
    headerColor?: string;
    bodyColor?: string;
    headerWeight?: number | string;
    bodyWeight?: number | string;
    boldWeight?: number | string;
    blockMarginBottom?: number;
    includeNormalize?: boolean;
    overrideStyles?: (
        verticalRhythm: verticalRhythm,
        options: typographyOptions,
        styles: any
    ) => object;
    overrideThemeStyles?: (
        verticalRhythm: verticalRhythm,
        options: typographyOptions,
        styles: any
    ) => object;
    plugins?: any[];
}

declare class Typography {
    constructor(opts: typographyOptions);
    options: typographyOptions;
    createStyles(): string;
    toJSON(): object;
    injectStyles(): void;
}

export default Typography;

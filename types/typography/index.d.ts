export interface BaseLine {
    fontSize: string;
    lineHeight: string;
}

export interface VerticalRhythm {
    rhythm: (value: number) => string;
    scale: (value: number) => BaseLine;
    adjustFontSizeTo: (value?: number | string) => object;
    linesForFontSize: (fontSize: number) => number;
    establishBaseline: () => BaseLine;
}

export interface GoogleFont {
    name: string;
    styles: string[];
}

export interface TypographyOptions {
    baseFontSize?: string | undefined;
    baseLineHeight?: number | undefined;
    scaleRatio?: number | undefined;
    googleFonts?: GoogleFont[] | undefined;
    headerFontFamily?: string[] | undefined;
    headerLineHeight?: number | undefined;
    bodyFontFamily?: string[] | undefined;
    headerColor?: string | undefined;
    bodyColor?: string | undefined;
    headerWeight?: number | string | undefined;
    bodyWeight?: number | string | undefined;
    boldWeight?: number | string | undefined;
    blockMarginBottom?: number | undefined;
    includeNormalize?: boolean | undefined;
    overrideStyles?:
        | ((
            VerticalRhythm: VerticalRhythm,
            options: TypographyOptions,
            styles: any,
        ) => object)
        | undefined;
    overrideThemeStyles?:
        | ((
            VerticalRhythm: VerticalRhythm,
            options: TypographyOptions,
            styles: any,
        ) => object)
        | undefined;
    plugins?: any[] | undefined;
}

declare class Typography {
    constructor(opts: TypographyOptions);
    options: TypographyOptions;
    createStyles(): string;
    toJSON(): object;
    injectStyles(): void;
    rhythm: VerticalRhythm["rhythm"];
    scale: VerticalRhythm["scale"];
    adjustFontSizeTo: VerticalRhythm["adjustFontSizeTo"];
    linesForFontSize: VerticalRhythm["linesForFontSize"];
    establishBaseline: VerticalRhythm["establishBaseline"];
}

export default Typography;

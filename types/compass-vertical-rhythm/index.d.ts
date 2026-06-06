export = compassVerticalRhythm;

declare namespace compassVerticalRhythm {
    interface Options {
        baseFontSize?: string | undefined;
        baseLineHeight?: number | string | undefined;
        rhythmUnit?: "%" | "em" | "ex" | "ch" | "px" | "rem" | "vw" | "vh" | "vmin" | undefined;
        defaultRhythmBorderWidth?: string | undefined;
        defaultRhythmBorderStyle?:
            | "solid"
            | "none"
            | "hidden"
            | "dashed"
            | "dotted"
            | "double"
            | "groove"
            | "ridge"
            | "inset"
            | "outset"
            | undefined;
        roundToNearestHalfLine?: boolean | undefined;
        minLinePadding?: string | undefined;
    }

    interface VerticalRhythmStyles {
        fontSize: string;
        lineHeight: string;
    }

    interface VerticalRhythm {
        rhythm(lines?: number, fontSize?: string, offset?: number): number;
        establishBaseline(): VerticalRhythmStyles;
        linesForFontSize(fontSize: string): number;
        adjustFontSizeTo(toSize: string, lines?: number | "auto" | null, fromSize?: string): VerticalRhythmStyles;
    }
}

declare function compassVerticalRhythm(
    options: compassVerticalRhythm.Options,
): compassVerticalRhythm.VerticalRhythm;

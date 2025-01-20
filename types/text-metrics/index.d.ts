export type Styles = Record<string, any>;

export function init(
    htmlElement: Node | Styles | null,
    styleOverwrites?: Styles,
): TextMetrics;

export interface Options {
    multiline: boolean;
}

export interface TextMetrics {
    parseArgs: (
        textOrOptions?: string | Options,
        optionsOrStyleOverwrites?: Options | Styles,
        styleOverwrites?: Styles,
    ) => {
        text: string;
        options: Options;
        styleOverwrites: Styles;
        styles: Styles;
    };
    width: (
        textOrOptions?: string | Options,
        optionsOrStyleOverwrites?: Options | Styles,
        styleOverwrites?: Styles,
    ) => number;
    height: (
        textOrOptions?: string | Options,
        optionsOrStyleOverwrites?: Options | Styles,
        styleOverwrites?: Styles,
    ) => number;
    lines: (
        textOrOptions?: string | Options,
        optionsOrStyleOverwrites?: Options | Styles,
        styleOverwrites?: Styles,
    ) => string[];
    maxFontSize: (
        textOrOptions?: string | Options,
        optionsOrStyleOverwrites?: Options | Styles,
        styleOverwrites?: Styles,
    ) => string | undefined;
}

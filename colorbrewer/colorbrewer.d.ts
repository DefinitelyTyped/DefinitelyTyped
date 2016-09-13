// Type definitions for colorbrewer v1.0.0
// Project: https://github.com/jeanlauliac/colorbrewer
// Definitions by: Matt Traynham <https://github.com/mtraynham>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare var colorbrewer: ColorBrewer.Base;

declare namespace ColorBrewer {
    interface ColorScheme {
        [n: number]: string[];
    }

    interface EightColorScheme extends ColorScheme {
        3: [string, string, string];
        4: [string, string, string, string];
        5: [string, string, string, string, string];
        6: [string, string, string, string, string, string];
        7: [string, string, string, string, string, string, string];
        8: [string, string, string, string, string, string, string, string];
    }

    interface NineColorScheme extends EightColorScheme {
        9: [string, string, string, string, string, string, string, string, string];
    }

    interface ElevenColorScheme extends NineColorScheme {
        10: [string, string, string, string, string, string, string, string, string, string];
        11: [string, string, string, string, string, string, string, string, string, string, string];
    }

    interface TwelveColorScheme extends ElevenColorScheme {
        12: [string, string, string, string, string, string, string, string, string, string, string, string];
    }

    interface Base {
        YlGn: NineColorScheme;
        YlGnBu: NineColorScheme;
        GnBu: NineColorScheme;
        BuGn: NineColorScheme;
        PuBuGn: NineColorScheme;
        PuBu: NineColorScheme;
        BuPu: NineColorScheme;
        RdPu: NineColorScheme;
        PuRd: NineColorScheme;
        OrRd: NineColorScheme;
        YlOrRd: NineColorScheme;
        YlOrBr: NineColorScheme;
        Purples: NineColorScheme;
        Blues: NineColorScheme;
        Greens: NineColorScheme;
        Oranges: NineColorScheme;
        Reds: NineColorScheme;
        Greys: NineColorScheme;
        PuOr: ElevenColorScheme;
        BrBG: ElevenColorScheme;
        PRGn: ElevenColorScheme;
        PiYG: ElevenColorScheme;
        RdBu: ElevenColorScheme;
        RdGy: ElevenColorScheme;
        RdYlBu: ElevenColorScheme;
        Spectral: ElevenColorScheme;
        RdYlGn: ElevenColorScheme;
        Accent: EightColorScheme;
        Dark2: EightColorScheme;
        Paired: TwelveColorScheme;
        Pastel1: NineColorScheme;
        Pastel2: EightColorScheme;
        Set1: NineColorScheme;
        Set2: EightColorScheme;
        Set3: TwelveColorScheme;
    }
}

declare module 'colorbrewer' {
    export = colorbrewer;
}

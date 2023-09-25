// Type definitions for string-pixel-width 1.10
// Project: https://github.com/adambisek/string-pixel-width#readme
// Definitions by: Graham Dyson <https://github.com/grahamdyson>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = getWidth;

declare function getWidth(string: string, settings?: Settings): number;

interface Settings {
    bold?: boolean | undefined;
    font?:
        | "andale mono"
        | "arial"
        | "avenir"
        | "avenir next"
        | "comic sans ms"
        | "courier new"
        | "georgia"
        | "helvetica"
        | "impact"
        | "open sans"
        | "quantify"
        | "tahoma"
        | "times new roman"
        | "trebuchet ms"
        | "verdana"
        | "webdings"
        | undefined;
    italic?: boolean | undefined;
    size?: number | undefined;
}

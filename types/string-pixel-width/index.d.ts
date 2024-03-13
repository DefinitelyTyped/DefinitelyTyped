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

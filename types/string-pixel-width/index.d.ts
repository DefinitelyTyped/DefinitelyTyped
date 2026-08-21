export = getWidth;

declare function getWidth(string: string, settings?: getWidth.Settings): number;

declare namespace getWidth {
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
            | "inter"
            | "times new roman"
            | "trebuchet ms"
            | "verdana"
            | "webdings"
            | "open sans"
            | "tahoma"
            | "quantify"
            | undefined;
        italic?: boolean | undefined;
        size?: number | undefined;
    }
}

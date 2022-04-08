// Type definitions for string-pixel-width 1.7
// Project: https://github.com/adambisek/string-pixel-width#readme
// Definitions by: Graham Dyson <https://github.com/grahamdyson>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = getWidth;

declare function getWidth(
    string: string,
    settings?: Settings,
): number;

interface Settings {
    bold?: boolean;
    font?: "andale mono"|"arial"|"avenir next"|"avenir"|"comic sans ms"|"courier new"|"georgia"|"impact"|"open sans"|"tahoma"|"times new roman"|"trebuchet ms"|"verdana"|"webdings";
    italic?: boolean;
    size?: number;
}

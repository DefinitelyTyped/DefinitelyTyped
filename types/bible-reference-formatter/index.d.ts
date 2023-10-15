// Type definitions for bible-reference-formatter 1.0
// Project: https://github.com/openbibleinfo/Bible-Reference-Formatter#readme
// Definitions by: Mauricio Robayo <https://github.com/MauricioRobayo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

type Style = "esv-long" | "esv-short" | "niv-long" | "niv-short" | "niv-shortest" | "nlt-long" | "nlt-short";
declare function osisToEn(style: Style, osis: string, context?: string): string;
export = osisToEn;

// Type definitions for @cloudfour/simple-svg-placeholder 1.0
// Project: https://github.com/cloudfour/simple-svg-placeholder#readme
// Definitions by: Mike Deverell <https://github.com/devrelm>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function simpleSvgPlaceholder(options?: {
    width?: number;
    height?: number;
    text?: string;
    fontFamily?: string;
    fontWeight?: string | number;
    fontSize?: number;
    dy?: number;
    bgColor?: string;
    textColor?: string;
    dataUri?: boolean;
    charset?: string;
}): string;

export = simpleSvgPlaceholder;

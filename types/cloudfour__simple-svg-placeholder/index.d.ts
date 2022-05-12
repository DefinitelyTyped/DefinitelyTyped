// Type definitions for @cloudfour/simple-svg-placeholder 1.0
// Project: https://github.com/cloudfour/simple-svg-placeholder#readme
// Definitions by: Mike Deverell <https://github.com/devrelm>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function simpleSvgPlaceholder(options?: {
    width?: number | undefined;
    height?: number | undefined;
    text?: string | undefined;
    fontFamily?: string | undefined;
    fontWeight?: string | number | undefined;
    fontSize?: number | undefined;
    dy?: number | undefined;
    bgColor?: string | undefined;
    textColor?: string | undefined;
    dataUri?: boolean | undefined;
    charset?: string | undefined;
}): string;

export = simpleSvgPlaceholder;

// Type definitions for @cloudfour/simple-svg-placeholder 1.1
// Project: https://github.com/cloudfour/simple-svg-placeholder#readme
// Definitions by: Mike Deverell <https://github.com/devrelm>
//                 Constantin Metz <https://github.com/keimeno>
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

declare namespace simpleSvgPlaceholder {}

export = simpleSvgPlaceholder;

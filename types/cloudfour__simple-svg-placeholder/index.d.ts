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

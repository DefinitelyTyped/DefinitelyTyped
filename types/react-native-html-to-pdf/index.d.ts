// Type definitions for react-native-html-to-pdf 0.8
// Project: https://github.com/christopherdro/react-native-html-to-pdf
// Definitions by: euZebe <https://github.com/euzebe>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface Options {
    html: string;
    fileName?: string | undefined;
    base64?: boolean | undefined;
    directory?: string | undefined;
    height?: number | undefined;
    width?: number | undefined;

    // iOS only
    paddingLeft?: number | undefined;
    paddingRight?: number | undefined;
    paddingTop?: number | undefined;
    paddingBottom?: number | undefined;
    padding?: number | undefined;
    bgColor?: string | undefined;

    // android only
    fonts?: string[] | undefined;
}

export interface Pdf {
    filePath?: string | undefined;
    base64?: string | undefined;
}

export function convert(options: Options): Promise<Pdf>;

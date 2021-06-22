// Type definitions for react-native-html-to-pdf 0.8
// Project: https://github.com/christopherdro/react-native-html-to-pdf
// Definitions by: euZebe <https://github.com/euzebe>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface Options {
    html: string;
    fileName?: string;
    base64?: boolean;
    directory?: string;
    height?: number;
    width?: number;

    // iOS only
    paddingLeft?: number;
    paddingRight?: number;
    paddingTop?: number;
    paddingBottom?: number;
    padding?: number;
    bgColor?: string;

    // android only
    fonts?: string[];
}

export interface Pdf {
    filePath?: string;
    base64?: string;
}

export function convert(options: Options): Promise<Pdf>;

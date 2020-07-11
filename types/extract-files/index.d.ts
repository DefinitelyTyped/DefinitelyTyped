// Type definitions for extract-files 8.1
// Project: https://github.com/jaydenseric/extract-files#readme
// Definitions by: Edward Sammut Alessi <https://github.com/Slessi>
//                 Alex K <https://github.com/lynxtaa>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface ReactNativeFileOptions {
    uri: string;
    type?: string;
    name?: string;
}

export class ReactNativeFile {
    uri: string;
    type?: string;
    name?: string;

    constructor(options: ReactNativeFileOptions);
}

export type ExtractableFile = File | Blob | ReactNativeFile;

export function isExtractableFile(value: any): value is ExtractableFile;

export function extractFiles<TFile = ExtractableFile>(
    value: any,
    path?: string,
    isExtractableFile?: (value: any) => value is TFile,
): {
    clone: any;
    files: Map<TFile, string[]>;
};

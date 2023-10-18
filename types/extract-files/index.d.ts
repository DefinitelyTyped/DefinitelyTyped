export interface ReactNativeFileOptions {
    uri: string;
    type?: string | undefined;
    name?: string | undefined;
}

export class ReactNativeFile {
    uri: string;
    type?: string | undefined;
    name?: string | undefined;

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

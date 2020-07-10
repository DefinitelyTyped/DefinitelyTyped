// Type definitions for extract-files 8.1
// Project: https://github.com/jaydenseric/extract-files#readme
// Definitions by: Edward Sammut Alessi <https://github.com/Slessi>
//                 Alex K <https://github.com/lynxtaa>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export type ExtractableFileMatcher = (value: any) => boolean;

export const isExtractableFile: ExtractableFileMatcher;

export function extractFiles<T>(
    value: T,
    path?: string,
    isExtractableFile?: ExtractableFileMatcher,
): {
    clone: T;
    files: Map<any, string[]>;
};

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

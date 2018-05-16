// Type definitions for extract-files 3.1
// Project: https://github.com/jaydenseric/extract-files#readme
// Definitions by: My Self <https://github.com/me>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface ReactNativeFileOptions {
    uri: string;
    type: string;
    name: string;
}

export class ReactNativeFile {
    uri: string;
    type: string;
    name: string;

    constructor(options: ReactNativeFileOptions);

    static list(files: ReactNativeFileOptions[]): ReactNativeFile[];
}

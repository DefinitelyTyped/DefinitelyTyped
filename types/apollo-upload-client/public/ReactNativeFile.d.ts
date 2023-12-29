interface ReactNativeFileOptions {
    uri: string;
    type?: string | undefined;
    name?: string | undefined;
}

declare class ReactNativeFile {
    uri: string;
    type?: string | undefined;
    name?: string | undefined;

    constructor(options: ReactNativeFileOptions);
}
export = ReactNativeFile;

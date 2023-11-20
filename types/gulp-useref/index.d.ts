/// <reference types="node" />

interface Options {
    searchPath?: string | string[] | undefined;
    base?: string | undefined;
    noAssets?: boolean | undefined;
    noconcat?: boolean | undefined;
    additionalStreams?: Array<NodeJS.ReadWriteStream> | undefined;
    transformPath?: ((filePath: string) => void) | undefined;
}

interface Useref {
    (options?: Options, ...transformStreams: NodeJS.ReadWriteStream[]): NodeJS.ReadWriteStream;
}

declare var useref: Useref;
export = useref;

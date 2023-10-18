interface Options {
    size: number;
    unicodeAware?: boolean | undefined;
}

declare function fastChunkString(str: string, options: Options): string[];

export = fastChunkString;

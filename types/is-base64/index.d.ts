interface IsBase64Options {
    allowEmpty?: boolean | undefined;
    allowMime?: boolean | undefined;
    mimeRequired?: boolean | undefined;
    paddingRequired?: boolean | undefined;
}

declare function isBase64(string: string, options?: IsBase64Options): boolean;

export = isBase64;

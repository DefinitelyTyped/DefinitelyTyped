declare function dashify(input: string, options?: dashify.Options): string;

declare namespace dashify {
    interface Options {
        condense?: boolean | undefined;
    }
}

export = dashify;

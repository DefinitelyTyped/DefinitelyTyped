declare function filesizeParser(size: string | number, options?: Options): number;

interface Options {
    base: 2 | 10;
}

export = filesizeParser;

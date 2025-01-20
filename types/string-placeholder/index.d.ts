declare function template(str: string, data: Readonly<unknown>, options?: Readonly<Options>): string;

interface Options {
    before?: string | undefined;
    after?: string | undefined;
    escape?: string | undefined;
    clean?: boolean | undefined;
}

export = template;

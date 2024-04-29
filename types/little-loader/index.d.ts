interface Options {
    context?: any;
    setup?: ((this: any, script: any) => void) | undefined;
    callback?: ((this: any, err: string) => void) | undefined;
}

declare function loader(
    module: string,
    callback?: (this: any, err: string) => void,
    context?: any,
): void;

declare function loader(
    module: string,
    options?: Options,
): void;

export = loader;

interface Options {
    verbose?: boolean | undefined;
}

type Transform = (source: string, filename: string) => string;

interface NodeHook {
    hook: {
        (extension: string, transform: Transform, options?: Options): void;
        (transform: Transform, _?: undefined, options?: Options): void;
    };
    unhook(extension?: string): void;
}

declare const hook: NodeHook;

export = hook;

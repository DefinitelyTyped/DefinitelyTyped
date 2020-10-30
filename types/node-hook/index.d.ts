// Type definitions for node-hook 1.0
// Project: https://github.com/bahmutov/node-hook#readme
// Definitions by: Nathan Hardy <https://github.com/nhardy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface Options {
    verbose?: boolean;
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

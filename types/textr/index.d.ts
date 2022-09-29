// Type definitions for textr 0.3
// Project: https://github.com/shuvalov-anton/textr
// Definitions by: DefinitelyTyped <https://github.com/DefinitelyTyped>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

type TextrArgs = string | object;

interface textr {
    /**
     * Register new middleware and array of middlewares.
     */
    use(...fn: any): textr;
    /**
     * Process given text by the middlewares.
     */
    exec(text: string, options?: object): string;
    /**
     * List of registred middlewares.
     */
    mws(): string[];
}

declare function textr(defaults?: TextrArgs): textr;

export = textr;

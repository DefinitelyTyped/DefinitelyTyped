// Type definitions for css-global-variables 3.0
// Project: https://github.com/colxi/css-global-variables
// Definitions by: M. Ege Ercan <https://github.com/eggei>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface CGVInterface {
    [index: string]: string;
}

export const CSSGlobalVariables: {
    new (config?: { filter?: string; autoprefix?: boolean; normalize?: (name: string) => string }): CGVInterface;
};

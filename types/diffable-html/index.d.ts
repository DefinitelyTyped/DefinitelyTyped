// Type definitions for diffable-html 5.0
// Project: https://github.com/rayrutjes/diffable-html#readme
// Definitions by: Zhang Yi Jiang <https://github.com/ZhangYiJiang>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function format(
    html: string,
    options?: {
        sortAttributes?: (names: string[]) => string[];
    },
): string;

export = format;

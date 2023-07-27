// Type definitions for json-to-plain-text 1.1
// Project: https://github.com/sumithemmadi/json-to-plain-text#readme
// Definitions by: sumithemmadi <https://github.com/sumithemmadi>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface Options {
    color?: boolean;
    spacing?: boolean;
    squareBracketsForArray?: boolean;
    doubleQuotesForKeys?: boolean;
    doubleQuotesForValues?: boolean;
}

declare function jsonToPlainText(data: unknown, options: Options): string;

export { jsonToPlainText, Options };

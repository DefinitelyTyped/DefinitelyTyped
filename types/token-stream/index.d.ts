// Type definitions for token-stream 1.0
// Project: https://github.com/pugjs/token-stream#readme
// Definitions by: Maiko Tan <https://github.com/MaikoTan>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = TokenStream;

declare class TokenStream<T = any> {
    constructor(tokens: T[]);
    lookahead(index: number): T | undefined;
    peek(): T | undefined;
    advance(): T | undefined;
    defer(token: T): void;
}

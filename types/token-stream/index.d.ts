export = TokenStream;

declare class TokenStream<T = any> {
    constructor(tokens: T[]);
    lookahead(index: number): T | undefined;
    peek(): T | undefined;
    advance(): T | undefined;
    defer(token: T): void;
}

// Type definitions for anybar 2.0.1
// Project: https://github.com/sindresorhus/anybar
// Definitions by: Chris Khoo <https://github.com/khoomeister>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module 'anybar' {
    const anybar: {
        (color: string, options?: { port: number }): void
    }
    export = anybar
}

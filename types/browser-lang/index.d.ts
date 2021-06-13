// Type definitions for browser-lang 0.1
// Project: https://github.com/InJaEE/DefinitelyTyped
// Definitions by: InJaEE <https://github.com/InJaEE>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface BrowserOption {
    languages: string[];
    fallback: string;
}

declare function browserLang(option?: BrowserOption): string;

export default browserLang;

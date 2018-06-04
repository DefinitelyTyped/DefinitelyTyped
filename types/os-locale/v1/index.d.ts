// Type definitions for os-locale 1.4
// Project: https://github.com/sindresorhus/os-locale
// Definitions by: Aya Morisawa <https://github.com/AyaMorisawa>
//                 BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = osLocale;

declare function osLocale(options: { spawn?: boolean }, cb: (err: any, locale: string) => void): void;
declare function osLocale(cb: (err: any, locale: string) => void): void;

declare namespace osLocale {
    function sync(options?: { spawn?: boolean }): string;
}

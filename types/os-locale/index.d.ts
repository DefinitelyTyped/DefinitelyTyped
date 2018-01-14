// Type definitions for os-locale 2.1
// Project: https://github.com/sindresorhus/os-locale
// Definitions by: Aya Morisawa <https://github.com/AyaMorisawa>
//                 BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = osLocale;

declare function osLocale(options?: osLocale.Options): Promise<string>;

declare namespace osLocale {
    function sync(options?: Options): string;

    interface Options {
        spawn?: boolean;
    }
}

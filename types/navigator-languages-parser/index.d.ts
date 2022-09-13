// Type definitions for navigator-languages-parser 0.10
// Project: https://github.com/artka54/navigator-languages-parser
// Definitions by: mike castleman <https://github.com/mlc>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// tslint:disable-next-line no-unnecessary-class
declare class NavigatorLanguagesParser {
    private static _getUsersPreferredLanguages(): string[] | undefined;

    static parseLanguages(acceptedLangs: readonly string[], defaultLang: string): string;
    static parseLanguages(acceptedLangs: readonly string[], defaultLang?: false): string | undefined;
}

export = NavigatorLanguagesParser;

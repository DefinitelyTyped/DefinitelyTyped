// tslint:disable-next-line no-unnecessary-class
declare class NavigatorLanguagesParser {
    private static _getUsersPreferredLanguages(): string[] | undefined;

    static parseLanguages(acceptedLangs: readonly string[], defaultLang: string): string;
    static parseLanguages(acceptedLangs: readonly string[], defaultLang?: false): string | undefined;
}

export = NavigatorLanguagesParser;

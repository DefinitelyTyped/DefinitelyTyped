// Type definitions for human-interval 1.0
// Project: https://github.com/agenda/human-interval#readme
// Definitions by: Paul Melnikow <https://github.com/paulmelnikow>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function humanInterval(time?: string): number | undefined;

declare namespace humanInterval {
    interface LanguageMap {
        [s: string]: number;
    }

    let languageMap: LanguageMap;
}

export = humanInterval;

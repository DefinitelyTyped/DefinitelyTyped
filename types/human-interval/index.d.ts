declare function humanInterval(time?: string): number | undefined;

declare namespace humanInterval {
    interface LanguageMap {
        [s: string]: number;
    }

    let languageMap: LanguageMap;
}

export = humanInterval;

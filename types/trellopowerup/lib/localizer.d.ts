export interface ResourceDictionary {
    [key: string]: string;
}

export interface Localizer {
    resourceDictionary: ResourceDictionary;
    localize(key: string, args: readonly string[]): string;
}

export interface Localization {
    defaultLocale: string;
    supportedLocales: string[];
    resourceUrl: string;
}

export interface LocalizerOptions {
    localizer?: Localizer;
    loadLocalizer?(): Promise<Localizer>;
    localization?: Localization;
}

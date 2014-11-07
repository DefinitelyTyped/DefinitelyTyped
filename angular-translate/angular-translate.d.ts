// Type definitions for Angular Translate v2.4.0 (pascalprecht.translate module)
// Project: https://github.com/PascalPrecht/angular-translate
// Definitions by: Michel Salib <https://github.com/michelsalib>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../angularjs/angular.d.ts" />

declare module ng.translate {
    
    interface ITranslatePartialLoaderService {
        addPart(name: string): ITranslatePartialLoaderService;
        deletePart(name: string, removeData?: boolean): ITranslatePartialLoaderService;
        isPartAvailable(name: string): boolean;
    }
  
    interface ITranslationTable {
        [key: string]: string;
    }

    interface ILanguageKeyAlias {
        [key: string]: string;
    }

    interface IStorage {
        get(name: string): string;
        set(name: string, value: string): void;
    }

    interface ISTaticFilesLoaderOptions {
        prefix: string;
        suffix: string;
        key?: string;
    }

    interface ITranslateService {
        (translationId: string, interpolateParams?: any, interpolationId?: string): ng.IPromise<string>;
        (translationId: string[], interpolateParams?: any, interpolationId?: string): ng.IPromise<{ [key: string]: string }>;
        cloakClassName(): string;
        cloakClassName(name: string): ITranslateProvider;
        fallbackLanguage(langKey?: string): string;
        fallbackLanguage(langKey?: string[]): string;
        instant(translationId: string, interpolateParams?: any, interpolationId?: string): string;
        instant(translationId: string[], interpolateParams?: any, interpolationId?: string): { [key: string]: string };
        isPostCompilingEnabled(): boolean;
        preferredLanguage(langKey?: string): string;
        proposedLanguage(): string;
        refresh(langKey?: string): ng.IPromise<void>;
        storage(): IStorage;
        storageKey(): string;
        use(): string;
        use(key: string): ng.IPromise<string>;
        useFallbackLanguage(langKey?: string): void;
        versionInfo(): string;
        loaderCache(): any;
    }

    interface ITranslateProvider extends ng.IServiceProvider {
        translations(): ITranslationTable;
        translations(key: string, translationTable: ITranslationTable): ITranslateProvider;
        cloakClassName(): string;
        cloakClassName(name: string): ITranslateProvider;
        addInterpolation(factory: any): ITranslateProvider;
        useMessageFormatInterpolation(): ITranslateProvider;
        useInterpolation(factory: string): ITranslateProvider;
        useSanitizeValueStrategy(value: string): ITranslateProvider;
        preferredLanguage(): ITranslateProvider;
        preferredLanguage(language: string): ITranslateProvider;
        translationNotFoundIndicator(indicator: string): ITranslateProvider;
        translationNotFoundIndicatorLeft(): string;
        translationNotFoundIndicatorLeft(indicator: string): ITranslateProvider;
        translationNotFoundIndicatorRight(): string;
        translationNotFoundIndicatorRight(indicator: string): ITranslateProvider;
        fallbackLanguage(): ITranslateProvider;
        fallbackLanguage(language: string): ITranslateProvider;
        fallbackLanguage(languages: string[]): ITranslateProvider;
        use(): string;
        use(key: string): ITranslateProvider;
        storageKey(): string;
        storageKey(key: string): void; // JeroMiya - the library should probably return ITranslateProvider but it doesn't here
        useUrlLoader(url: string): ITranslateProvider;
        useStaticFilesLoader(options: ISTaticFilesLoaderOptions): ITranslateProvider;
        useLoader(loaderFactory: string, options: any): ITranslateProvider;
        useLocalStorage(): ITranslateProvider;
        useCookieStorage(): ITranslateProvider;
        useStorage(storageFactory: any): ITranslateProvider;
        storagePrefix(): string;
        storagePrefix(prefix: string): ITranslateProvider;
        useMissingTranslationHandlerLog(): ITranslateProvider;
        useMissingTranslationHandler(factory: string): ITranslateProvider;
        usePostCompiling(value: boolean): ITranslateProvider;
        determinePreferredLanguage(fn?: () => void): ITranslateProvider;
        registerAvailableLanguageKeys(): string[];
        registerAvailableLanguageKeys(languageKeys: string[], aliases?: ILanguageKeyAlias): ITranslateProvider;
        useLoaderCache(cache?: any): ITranslateProvider;
    }
}

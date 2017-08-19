// Type definitions for Angular Translate (pascalprecht.translate module) 2.15
// Project: https://github.com/PascalPrecht/angular-translate
// Definitions by: Michel Salib <https://github.com/michelsalib>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="angular" />

declare var _: string;
export = _;

import * as angular from 'angular';

declare module 'angular' {
    export namespace translate {

        interface ITranslationTable {
            [key: string]: string | ITranslationTable;
        }

        interface ILanguageKeyAlias {
            [key: string]: string;
        }

        interface IStorage {
            get(name: string): string;
            put(name: string, value: string): void;
        }

        interface IStaticFilesLoaderOptions {
            prefix: string;
            suffix: string;
            key?: string;
        }

        interface IPartialLoader<T> {
            addPart(name: string, priority?: number): T;
            deletePart(name: string): T;
            isPartAvailable(name: string): boolean;
        }

        interface ITranslatePartialLoaderService extends IPartialLoader<ITranslatePartialLoaderService> {
            getRegisteredParts(): Array<string>;
            isPartLoaded(name: string, lang: string): boolean;
        }

        interface ITranslatePartialLoaderProvider extends angular.IServiceProvider, IPartialLoader<ITranslatePartialLoaderProvider> {
            setPart(lang: string, part: string, table: ITranslationTable): ITranslatePartialLoaderProvider;
        }

        interface ITranslateService {
            (translationId: string, interpolateParams?: any, interpolationId?: string, defaultTranslationText?: string, forceLanguage?: string): angular.IPromise<string>;
            (translationId: string[], interpolateParams?: any, interpolationId?: string, defaultTranslationText?: string, forceLanguage?: string): angular.IPromise<{ [key: string]: string }>;
            cloakClassName(): string;
            cloakClassName(name: string): ITranslateProvider;
            fallbackLanguage(langKey?: string): string;
            fallbackLanguage(langKey?: string[]): string;
            instant(translationId: string, interpolateParams?: any, interpolationId?: string, forceLanguage?: string, sanitizeStrategy?: string): string;
            instant(translationId: string[], interpolateParams?: any, interpolationId?: string, forceLanguage?: string, sanitizeStrategy?: string): { [key: string]: string };
            isPostCompilingEnabled(): boolean;
            preferredLanguage(langKey?: string): string;
            proposedLanguage(): string;
            refresh(langKey?: string): angular.IPromise<void>;
            storage(): IStorage;
            storageKey(): string;
            use(): string;
            use(key: string): angular.IPromise<string>;
            useFallbackLanguage(langKey?: string): void;
            versionInfo(): string;
            loaderCache(): any;
            isReady(): boolean;
            onReady(): angular.IPromise<void>;
            resolveClientLocale(): string;
        }

        interface ITranslateProvider extends angular.IServiceProvider {
            translations(key?: string): ITranslationTable;
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
            forceAsyncReload(value: boolean): ITranslateProvider;
            use(): string;
            use(key: string): ITranslateProvider;
            storageKey(): string;
            storageKey(key: string): void; // JeroMiya - the library should probably return ITranslateProvider but it doesn't here
            uniformLanguageTag(options: string | Object): ITranslateProvider;
            useUrlLoader(url: string): ITranslateProvider;
            useStaticFilesLoader(options: IStaticFilesLoaderOptions | { files: IStaticFilesLoaderOptions[] }): ITranslateProvider;
            useLoader(loaderFactory: string, options?: any): ITranslateProvider;
            useLocalStorage(): ITranslateProvider;
            useCookieStorage(): ITranslateProvider;
            useStorage(storageFactory: any): ITranslateProvider;
            storagePrefix(): string;
            storagePrefix(prefix: string): ITranslateProvider;
            useMissingTranslationHandlerLog(): ITranslateProvider;
            useMissingTranslationHandler(factory: string): ITranslateProvider;
            usePostCompiling(value: boolean): ITranslateProvider;
            directivePriority(): number;
            directivePriority(priority: number): ITranslateProvider;
            determinePreferredLanguage(fn?: () => void): ITranslateProvider;
            registerAvailableLanguageKeys(): string[];
            registerAvailableLanguageKeys(languageKeys: string[], aliases?: ILanguageKeyAlias): ITranslateProvider;
            useLoaderCache(cache?: any): ITranslateProvider;
            resolveClientLocale(): string;
        }
    }

    interface IFilterService {
        (name: 'translate'): {
            (translationId: string, interpolateParams?: any, interpolation?: string, forceLanguage?: string): string;
        };
    }
}

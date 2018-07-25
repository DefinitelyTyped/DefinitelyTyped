// Type definitions for angular-dynamic-locale v0.1.27
// Project: https://github.com/lgalfaso/angular-dynamic-locale
// Definitions by: Stephen Lautier <https://github.com/stephenlautier>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="angular" />

import * as angular from 'angular';

declare module 'angular' {
    export namespace dynamicLocale {

        interface tmhDynamicLocaleService {
            set(locale: string): angular.IPromise<string>;
            get(): string;
        }

        interface tmhDynamicLocaleProvider extends angular.IServiceProvider {
            defaultLocale(locale: string): void;
            localeLocationPattern(location: string): tmhDynamicLocaleProvider;
            localeLocationPattern(): string;
            storageKey(storageKey: string): void;
            useStorage(storageName: string): void;
            useCookieStorage(): void;
        }
    }
}

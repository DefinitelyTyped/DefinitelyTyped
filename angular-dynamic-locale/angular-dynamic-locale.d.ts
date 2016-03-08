// Type definitions for angular-dynamic-locale v0.1.27
// Project: https://github.com/lgalfaso/angular-dynamic-locale
// Definitions by: Stephen Lautier <https://github.com/stephenlautier>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../angularjs/angular.d.ts" />

declare module "angular-dynamic-locale" {
	import ng = angular.dynamicLocale;
	export = ng;
}

declare module angular.dynamicLocale {

	interface tmhDynamicLocaleService {
		set(locale: string): void;
		get(): string;
	}

	interface tmhDynamicLocaleProvider extends angular.IServiceProvider {
		localeLocationPattern(location: string): tmhDynamicLocaleProvider;
		localeLocationPattern(): string;
		useStorage(storageName: string): void;
		useCookieStorage(): void;
	}
}
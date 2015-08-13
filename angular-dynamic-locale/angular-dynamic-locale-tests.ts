/// <reference path='../angularjs/angular.d.ts' />
/// <reference path='angular-dynamic-locale.d.ts' />

var app = angular.module('testModule', ['tmh.dynamicLocale']);
app.config((localStorageServiceProvider: angular.dynamicLocale.tmhDynamicLocaleProvider) => {
	localStorageServiceProvider
		.localeLocationPattern("app/config/locales/")
		.useCookieStorage();
});

class LocaleTestController {

	constructor(tmhDynamicLocaleService: angular.dynamicLocale.tmhDynamicLocaleService) {

		var locale = tmhDynamicLocaleService.get();

		var newLocale = "mt"
		tmhDynamicLocaleService.set(newLocale);
	}

}

app.controller('TestController', LocaleTestController);

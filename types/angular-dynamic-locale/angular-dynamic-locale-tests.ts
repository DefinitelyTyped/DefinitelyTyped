import * as angular from 'angular';

var app = angular.module('testModule', ['tmh.dynamicLocale']);
app.config((localStorageServiceProvider: angular.dynamicLocale.tmhDynamicLocaleProvider) => {
	localStorageServiceProvider
		.localeLocationPattern("app/config/locales/")
		.useCookieStorage();
    localStorageServiceProvider.defaultLocale('en');
});

class LocaleTestController {

	constructor(tmhDynamicLocaleService: angular.dynamicLocale.tmhDynamicLocaleService) {

		var locale = tmhDynamicLocaleService.get();

		var newLocale = "mt"
		tmhDynamicLocaleService.set(newLocale);

		newLocale = "en";
		tmhDynamicLocaleService.set(newLocale).then((value) => {});
	}

}

app.controller('TestController', LocaleTestController);

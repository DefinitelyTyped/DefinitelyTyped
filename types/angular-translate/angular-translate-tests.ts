import * as angular from 'angular';
import * as angularTranslate from 'angular-translate';

var app = angular.module('at', [angularTranslate]);

app.factory('customLoader', ($q:angular.IQService) => {
    return (options:any) => {
        var dfd:angular.IDeferred<string> = $q.defer();
        dfd.resolve('whatever you wanted to translate, I simply know nothing about the language with the key ' + options.key);
        return dfd.promise;
    }
});

app.config(($translateProvider: angular.translate.ITranslateProvider) => {
    $translateProvider.translations('en', {
        TITLE: 'Hello',
        FOO: 'This is a paragraph.',
        BUTTON_LANG_EN: 'english',
        BUTTON_LANG_DE: 'german'
    });
    $translateProvider.translations('de', {
        TITLE: 'Hallo',
        FOO: 'Dies ist ein Paragraph.',
        BUTTON_LANG_EN: 'englisch',
        BUTTON_LANG_DE: 'deutsch'
    });
    $translateProvider.preferredLanguage('en');

    $translateProvider.useLoader('customLoader');
    $translateProvider.forceAsyncReload(true);
});

interface Scope extends ng.IScope {
    changeLanguage(key: any): void;
}

app.controller('Ctrl', ($scope: Scope, $translate: angular.translate.ITranslateService) => {
    $scope['changeLanguage'] = function (key: any) {
		$translate.onReady().then(() => {
			if($translate.isReady()) {
				$translate.use(key);
			}
		});
    };
}).run(($filter: ng.IFilterService) => {
    var x: string;
    x = $filter('translate')('something');
    x = $filter('translate')('something', {});
    x = $filter('translate')('something', {}, '');
});

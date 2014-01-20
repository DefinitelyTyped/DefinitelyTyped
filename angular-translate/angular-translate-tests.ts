/// <reference path="angular-translate.d.ts" />

var app = angular.module('at', ['pascalprecht.translate']);

app.config(($translateProvider: ng.translate.ITranslateProvider) => {
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
});

app.controller('Ctrl', ($scope: ng.IScope, $translate: ng.translate.ITranslateService) => {
    $scope['changeLanguage'] = function (key: any) {
        $translate.uses(key);
    };
});

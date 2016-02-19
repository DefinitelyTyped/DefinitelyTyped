/// <reference path="../angularjs/angular.d.ts" />
/// <reference path="ngstorage.d.ts" />

var app: any;

app.controller('MainCtrl', function ($localStorage: angular.storage.ILocalStorageService) {

    $localStorage.set('MyKey', 'value');

    $localStorage.get('MyKey');

    $localStorage.$default({
        counter: 1
    });

    $localStorage.$reset({
        counter: 1
    });

    $localStorage.$apply();
});

app.config(['$localStorageProvider',
    function ($localStorageProvider: angular.storage.ILocalStorageProvider) {
        $localStorageProvider.setKeyPrefix('NewPrefix');

        $localStorageProvider.get('MyKey');

        $localStorageProvider.set('MyKey', { counter: 'value' });

        var mySerializer = function (value:any):string {
            return value.toString();
        };

        var myDeserializer = function (value:string):any {
            return value;
        };

        $localStorageProvider.setSerializer(mySerializer);
        $localStorageProvider.setDeserializer(myDeserializer);
    }
]);

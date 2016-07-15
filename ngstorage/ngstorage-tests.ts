/// <reference types="angular" />


var app: any;

app.controller('LocalCtrl', function ($localStorage: angular.storage.IStorageService) {

    $localStorage.$default({
        counter: 1
    });

    $localStorage.$reset({
        counter: 1
    });
    
    $localStorage.$reset();

    $localStorage.$apply();
    
    $localStorage.$sync();
});

app.controller('SessionCtrl', function ($sessionStorage: angular.storage.IStorageService) {

    $sessionStorage.$default({
        counter: 1
    });

    $sessionStorage.$reset({
        counter: 1
    });
    
    $sessionStorage.$reset();

    $sessionStorage.$apply();
    
    $sessionStorage.$sync();
});

app.config(['$localStorageProvider', function ($localStorageProvider: angular.storage.IStorageProvider) {

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
]).config(['$sessionStorageProvider', function ($sessionStorageProvider: angular.storage.IStorageProvider) {

        $sessionStorageProvider.setKeyPrefix('NewPrefix');

        $sessionStorageProvider.get('MyKey');

        $sessionStorageProvider.set('MyKey', { counter: 'value' });

        var mySerializer = function (value:any):string {
            return value.toString();
        };

        var myDeserializer = function (value:string):any {
            return value;
        };

        $sessionStorageProvider.setSerializer(mySerializer);
        $sessionStorageProvider.setDeserializer(myDeserializer);
    }
]);

import * as angular from "angular";
import { ngstorage } from "ngstorage";

let app: angular.IModule = angular.module('at', ['ngStorage']);

app.controller('LocalCtrl', ($localStorage: ngstorage.StorageService) => {
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

app.controller('SessionCtrl', ($sessionStorage: ngstorage.StorageService) => {
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

app.config(($localStorageProvider: ngstorage.StorageProvider) => {
    $localStorageProvider.setKeyPrefix('NewPrefix');
    $localStorageProvider.get('MyKey');
    $localStorageProvider.set('MyKey', { counter: 'value' });

    const mySerializer = (value: any): string => {
        return value.toString();
    };

    const myDeserializer = (value: string): any => {
        return value;
    };

    $localStorageProvider.setSerializer(mySerializer);
    $localStorageProvider.setDeserializer(myDeserializer);
});

app.config(($sessionStorageProvider: ngstorage.StorageProvider) => {
    $sessionStorageProvider.setKeyPrefix('NewPrefix');
    $sessionStorageProvider.get('MyKey');
    $sessionStorageProvider.set('MyKey', { counter: 'value' });

    const mySerializer = (value: any): string => {
        return value.toString();
    };

    const myDeserializer = (value: string): any => {
        return value;
    };

    $sessionStorageProvider.setSerializer(mySerializer);
    $sessionStorageProvider.setDeserializer(myDeserializer);
});

import * as angular from "angular";
import { ngStorage } from "ngstorage";

const app: angular.IModule = angular.module('at', ['ngStorage']);

app.controller('LocalCtrl', ($localStorage: ngStorage.StorageService) => {
    if ($localStorage.$supported()) {
        const store: MyStore & ngStorage.StorageService = $localStorage.$default<MyStore>({
            counter: 1
        });

        store.$reset<MyStore>({
            counter: 1
        });

        store.$reset();
        store.$apply();
        store.$sync();
    }
});

app.controller('SessionCtrl', ($sessionStorage: ngStorage.StorageService) => {
    if ($sessionStorage.$supported()) {
        const store: MyStore & ngStorage.StorageService = $sessionStorage.$default<MyStore>({
            counter: 1
        });

        store.$reset<MyStore>({
            counter: 1
        });

        store.$reset();
        store.$apply();
        store.$sync();
    }
});

app.config(($localStorageProvider: ngStorage.StorageProvider) => {
    if ($localStorageProvider.supported()) {
        $localStorageProvider.setKeyPrefix('NewPrefix');
        $localStorageProvider.set('MyKey', { counter: 'value' });
        $localStorageProvider.get('MyKey');
        $localStorageProvider.remove('MyKey');

        const mySerializer = (value: any): string => {
            return value.toString();
        };

        const myDeserializer = (value: string): any => {
            return value;
        };

        $localStorageProvider.setSerializer(mySerializer);
        $localStorageProvider.setDeserializer(myDeserializer);
    }
});

app.config(($sessionStorageProvider: ngStorage.StorageProvider) => {
    if ($sessionStorageProvider.supported()) {
        $sessionStorageProvider.setKeyPrefix('NewPrefix');
        $sessionStorageProvider.set('MyKey', { counter: 'value' });
        $sessionStorageProvider.get('MyKey');
        $sessionStorageProvider.remove('MyKey');

        const mySerializer = (value: any): string => {
            return value.toString();
        };

        const myDeserializer = (value: string): any => {
            return value;
        };

        $sessionStorageProvider.setSerializer(mySerializer);
        $sessionStorageProvider.setDeserializer(myDeserializer);
    }
});

interface MyStore {
    counter?: number;
    foo?: string;
}

interface TestScope {
    submit(key: string, value: string): boolean;
    getItem(key: string): string;
    removeItem(key: string): boolean;
    clearNumbers(): boolean;
    clearAll(): boolean;
    unbind?: () => void;
    update(val: string): void;
}

class TestController implements TestScope {
    unbind?: () => void;

    constructor(
        private readonly localStorageService: ng.local.storage.ILocalStorageService,
        private readonly $scope: angular.IScope,
    ) {}

    $onInit() {
        // isSupported
        if (this.localStorageService.isSupported) {
            // do something
        }

        // getStorageType
        const storageType = this.localStorageService.getStorageType();

        const lsKeys = this.localStorageService.keys();

        // bind
        this.localStorageService.set('property', 'oldValue');
        this.unbind = this.localStorageService.bind(this.$scope, 'property');

        // deriveKey
        console.log(this.localStorageService.deriveKey('property')); // ls.property

        // length
        const lsLength: number = this.localStorageService.length();
    }

    $onDestroy() {
        this.unbind && this.unbind();
    }

    submit(key: string, value: any) {
        return this.localStorageService.set(key, value);
    }
    getItem(key: string) {
        return this.localStorageService.get(key);
    }
    removeItem(key: string) {
        return this.localStorageService.remove(key);
    }
    clearNumbers() {
        return this.localStorageService.clearAll(/^\d+$/);
    }
    clearAll() {
        return this.localStorageService.clearAll();
    }
    update(val: string) {
        this.localStorageService.set('property', val);
    }
}

TestController.$inject = ['localStorageService', '$scope'];

const app = angular.module('angular-local-storage-tests', ['LocalStorageModule']);
app.config((localStorageServiceProvider: ng.local.storage.ILocalStorageServiceProvider) => {
    localStorageServiceProvider
        .setPrefix('myApp')
        .setStorageType('sessionStorage')
        .setDefaultToCookie(false)
        .setNotify(true, true);
});

app.controller('TestController', TestController);

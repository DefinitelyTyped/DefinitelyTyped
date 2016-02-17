///<reference path="../angularjs/angular.d.ts" />
///<reference path="./angularLocalStorage.d.ts" />

interface TestScope extends ng.IScope {
  viewType: string;
}

export class TestController {
  constructor(private $scope: TestScope, private storage: ng.localStorage.ILocalStorageService) {
    storage.bind($scope, 'varName');
    storage.bind($scope,'varName', { defaultValue: 'randomValue123', storeName: 'customStoreKey' });
    $scope.viewType = 'ANYTHING';
    storage.unbind($scope, 'viewType');

    storage.set('key', 'value');
    storage.get('key');
    storage.remove('key');

    storage.clearAll();
  }
}

var app = angular.module('angularLocalStorageTests', ['angularLocalStorage']);
app.controller('testCtrl', ['$scope', 'storage',  ($scope: TestScope, storage: ng.localStorage.ILocalStorageService) => new TestController($scope, storage)]);


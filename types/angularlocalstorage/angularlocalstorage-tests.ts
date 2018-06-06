interface TestScope extends ng.IScope {
  viewType: string;
}

class TestController {
  constructor(private readonly $scope: TestScope, private readonly storage: ng.localStorage.ILocalStorageService) {
    storage.bind($scope, 'varName');
    storage.bind($scope,'varName', { defaultValue: 'randomValue123', storeName: 'customStoreKey' });
    $scope.viewType = 'ANYTHING';
    storage.unbind($scope, 'viewType');

    storage.set('key', 'value');
    storage.get('key');
    storage.remove('key');

    storage.clearAll();
  }
  $onInit() {
  }
}

var app = angular.module('angularLocalStorageTests', ['angularLocalStorage']);
app.controller('testCtrl', ['$scope', 'storage',  ($scope: TestScope, storage: ng.localStorage.ILocalStorageService) => new TestController($scope, storage)]);


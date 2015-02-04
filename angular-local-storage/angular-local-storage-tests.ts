/// <reference path='../angularjs/angular.d.ts' />
/// <reference path='angular-local-storage.d.ts' />

interface TestScope extends ng.IScope {
  submit: (key: string, value: string) => boolean;
  getItem: (key: string) => string;
  removeItem: (key: string) => boolean;
  clearNumbers: () => boolean;
  clearAll: () => boolean;
  unbind: Function;
  update: (val: string) => void;
  property: string;
}

module ng.local.storage.tests {
  export class TestController {
    constructor($scope: TestScope, localStorageService: ng.local.storage.ILocalStorageService<string>) {
      // isSupported
      if (localStorageService.isSupported) {
        // do something
      }

      // getStorageType
      var storageType: string = localStorageService.getStorageType();

      // set
      $scope.submit = (key, value) => {
        return localStorageService.set(key, value);
      };

      // get
      $scope.getItem = (key) => {
        return localStorageService.get(key);
      };

      // remove
      $scope.removeItem = (key) => {
        return localStorageService.remove(key);
      };

      // clearAll(regexp)
      $scope.clearNumbers = () => {
        return localStorageService.clearAll(/^\d+$/);
      };

      // clearAll
      $scope.clearAll = () => {
        return localStorageService.clearAll();
      };

      // keys
      var lsKeys = localStorageService.keys();

      // bind
      localStorageService.set('property', 'oldValue');
      $scope.unbind = localStorageService.bind($scope, 'property');

      // deriveKey
      console.log(localStorageService.deriveKey('property')); // ls.property

      // length
      var lsLength: number = localStorageService.length();
    }
  }
}

var app = angular.module('angular-local-storage-tests', ['LocalStorageModule']);
app.config(function (localStorageServiceProvider: ng.local.storage.ILocalStorageServiceProvider) {
  localStorageServiceProvider
    .setPrefix('myApp')
    .setStorageType('sessionStorage')
    .setNotify(true, true);
});

app.controller('TestController', ng.local.storage.tests.TestController);

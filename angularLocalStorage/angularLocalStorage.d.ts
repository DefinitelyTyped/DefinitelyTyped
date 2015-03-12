// Type definitions for AngularLocalStorage 0.1.7
// Project: https://github.com/agrublev/angularLocalStorage
// Definitions by: Horiuchi_H <https://github.com/horiuchi/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../angularjs/angular.d.ts"/>

declare module angular.localStorage {
  interface ILocalStorageService {
    set(key: string, value: any): any;
    get(key: string): any;
    remove(key: string): boolean;
    clearAll(): void;

    bind($scope: angular.IScope, key: string, opts?: {
      defaultValue?: any;
      storeName?: string;
    }): any;
    unbind($scope: angular.IScope, key: string, storeName?: string): void;
  }
}


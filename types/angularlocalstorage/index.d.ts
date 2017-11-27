// Type definitions for AngularLocalStorage 0.1.7
// Project: https://github.com/agrublev/angularLocalStorage
// Definitions by: Horiuchi_H <https://github.com/horiuchi>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="angular"/>

import * as ng from 'angular';

declare module 'angular' {
  export namespace localStorage {
    interface ILocalStorageService {
      set(key: string, value: any): any;
      get(key: string): any;
      remove(key: string): boolean;
      clearAll(): void;

      bind($scope: ng.IScope, key: string, opts?: {
        defaultValue?: any;
        storeName?: string;
      }): any;
      unbind($scope: ng.IScope, key: string, storeName?: string): void;
    }
  }
}


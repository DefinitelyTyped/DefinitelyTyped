/// <reference types="angular"/>

import * as ng from "angular";

declare module "angular" {
    export namespace localStorage {
        interface ILocalStorageService {
            set(key: string, value: any): any;
            get(key: string): any;
            remove(key: string): boolean;
            clearAll(): void;

            bind($scope: ng.IScope, key: string, opts?: {
                defaultValue?: any;
                storeName?: string | undefined;
            }): any;
            unbind($scope: ng.IScope, key: string, storeName?: string): void;
        }
    }
}

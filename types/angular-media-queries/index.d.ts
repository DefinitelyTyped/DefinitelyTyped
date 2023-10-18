/// <reference types="angular" />

import * as angular from "angular";

declare module "angular" {
    export namespace matchmedia {
        interface IScreenSize {
            // Returns a value indicating if the current device has a retina screen
            isRetina: boolean;

            is(list: Array<string> | string): boolean;

            // Executes the callback function on window resize with the match truthiness as the first argument.
            // Returns the current match truthiness.
            // The 'scope' parameter is optional. If it's not passed in, '$rootScope' is used.
            on(list: Array<string> | string, callback: (result: boolean) => void, scope?: angular.IScope): boolean;

            // Executes the callback function ONLY when the match differs from previous match.
            // Returns the current match truthiness.
            // The 'scope' parameter is required for cleanup reasons (destroy event).
            onChange(scope: angular.IScope, list: Array<string> | string, callback: (result: boolean) => void): boolean;

            // Executes the callback only when inside of the particular screensize.
            // The 'scope' parameter is optional. If it's not passed in, '$rootScope' is used.
            when(list: Array<string> | string, callback: (result: boolean) => void, scope?: angular.IScope): boolean;
        }
    }
}

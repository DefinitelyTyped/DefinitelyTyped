// Type definitions for angular-spinner.js 0.5.1
// Project: https://github.com/urish/angular-spinner
// Definitions by: Marcin Biegała <https://github.com/Biegal>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../angularjs/angular.d.ts" />

/**
* SpinnerService 
* see https://github.com/urish/angular-spinner
*/
interface ISpinnerService {
    /**
     * Start selected spinner
     * 
     * @param spinner key
     */
    spin(key: string): void;

    /**
     * Stop selected spinner
     * 
     * @param spinner key
     */
    stop(key: string): void;
}

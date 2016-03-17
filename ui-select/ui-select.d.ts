// Type definitions for ui-select 0.13.2
// Project: https://github.com/angular-ui/ui-select
// Definitions by: Niko Kovačič <https://github.com/nkovacic>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped 

/// <reference path="../angularjs/angular.d.ts" />

declare module "ui-select" {
    var _: string;
    export = _;
}

declare namespace angular.ui.select {
    interface ISelectConfig {
        appendToBody: boolean;
        resetSearchInput: boolean;
        theme: string;
    }
}

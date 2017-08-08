// Type definitions for angular-modal 0.5.0
// Project: https://github.com/btford/angular-modal
// Definitions by: Paul Lessing <https://github.com/paullessing>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="angular" />
/// <reference types="jquery" />

declare namespace angularModal {

    type AngularModalControllerDefinition = (new (...args: any[]) => any) | Function | string; // Possible arguments to IControllerService

    type AngularModalJQuerySelector = string | Element | Element[] | JQuery | Function | any[] | {}; // Possible arguments to IAugmentedJQueryStatic

    interface AngularModalSettings {
        controller?: AngularModalControllerDefinition;
        controllerAs?: string;
        container?: AngularModalJQuerySelector;
    }

    export interface AngularModalSettingsWithTemplate extends AngularModalSettings {
        template: any;
    }

    export interface AngularModalSettingsWithTemplateUrl extends AngularModalSettings {
        templateUrl: string;
    }

    export interface AngularModal {
        activate(): angular.IPromise<void>;
        deactivate(): angular.IPromise<void>;
        active(): boolean;
    }

    export interface AngularModalFactory {
        (settings: AngularModalSettingsWithTemplate | AngularModalSettingsWithTemplateUrl): AngularModal;
    }
}

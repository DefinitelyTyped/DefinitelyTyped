/// <reference types="angular" />

declare namespace angularModal {
    type AngularModalControllerDefinition = (new(...args: any[]) => any) | Function | string; // Possible arguments to IControllerService

    type AngularModalJQuerySelector = string | Element | Element[] | JQuery | Function | any[] | {}; // Possible arguments to IAugmentedJQueryStatic

    interface AngularModalSettings {
        controller?: AngularModalControllerDefinition | undefined;
        controllerAs?: string | undefined;
        container?: AngularModalJQuerySelector | undefined;
    }

    export interface AngularModalSettingsWithTemplate extends AngularModalSettings {
        template: any;
    }

    export interface AngularModalSettingsWithTemplateUrl extends AngularModalSettings {
        templateUrl: string;
    }

    export interface AngularModal {
        activate(locals?: {}): angular.IPromise<void>;
        activate<T>(locals: T): angular.IPromise<void>;
        deactivate(): angular.IPromise<void>;
        active(): boolean;
    }

    export interface AngularModalFactory {
        (settings: AngularModalSettingsWithTemplate | AngularModalSettingsWithTemplateUrl): AngularModal;
    }
}

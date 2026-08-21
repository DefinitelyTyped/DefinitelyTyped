/// <reference types="angular" />

declare namespace aa {
    export interface ILabelStrategies {
        [strategyName: string]: (element: ng.IAugmentedJQueryStatic, labelText: string, isRequired: boolean) => void;
    }

    export interface IFieldGroupStrategies {
        [strategyName: string]: (element: ng.IAugmentedJQueryStatic) => void;
    }

    export interface IValMsgPlacementStrategies {
        [strategyName: string]: (
            formFieldElement: ng.IAugmentedJQueryStatic,
            formName: string,
            formFieldName: string,
        ) => void;
    }

    export interface IValidIconStrategy {
        validIcon: string;
        invalidIcon: string;
        getContainer(element: ng.IAugmentedJQueryStatic): void;
    }

    export interface ISpinnerClickStrategies {
        [strategyName: string]: (element: ng.IAugmentedJQueryStatic) => void;
    }

    export interface IOnNavigateAwayStrategies {
        [strategyName: string]: (
            rootFormScope: ng.IScope,
            rootForm: ng.IAugmentedJQueryStatic,
            $injector: ng.auto.IInjectorService,
        ) => void;
    }

    export interface IValidationMessages {
        [validationKey: string]: string;
    }

    export interface IGlobalSettings {
        [settingName: string]: any;
    }

    export interface IFormExtensionsProvider extends ng.IServiceProvider {
        defaultLabelStrategy: string;
        defaultFieldGroupStrategy: string;
        defaultValMsgPlacementStrategy: string;
        validIconStrategy: IValidIconStrategy;
        defaultSpinnerClickStrategy: string;
        defaultNotifyTarget: string;
        defaultOnNavigateAwayStrategy: string;
        validationMessages: IValidationMessages;
        valMsgForTemplate: string;
        confirmResetStrategy: () => boolean;
        globalSettings: IGlobalSettings;

        labelStrategies: ILabelStrategies;
        fieldGroupStrategies: IFieldGroupStrategies;
        valMsgPlacementStrategies: IValMsgPlacementStrategies;
        spinnerClickStrategies: ISpinnerClickStrategies;
        onNavigateAwayStrategies: IOnNavigateAwayStrategies;
    }

    export interface INotifyPredicate {
        (message: string, options: any, notifier: any): any;
    }

    export interface INotifyDefaults {
        success: INotifyPredicate;
        info: INotifyPredicate;
        warning: INotifyPredicate;
        danger: INotifyPredicate;
        error: INotifyPredicate;
    }

    export interface INotifyConfig {
        name: string;
        template?: string | undefined;
        templateName?: string | undefined;
        options: INotifyOptions;
        namedDefaults: INotifyDefaults;
    }

    export interface INotifyOptions {
        cssClasses?: string | undefined;
        messageType: string;
        allowHtml: boolean;
        message: string;
    }

    export interface INotifyConfigProvider extends ng.IServiceProvider {
        notifyConfigs: any;
        defaultTargetContainerName: string;
        defaultNotifyConfig: string;
        addOrUpdateNotifyConfig(name: string, opts: INotifyConfig): void;
        optionsTransformer(options: INotifyOptions, $sce: ng.ISCEService): void;
    }

    export interface IExternalFormValidationConfig {
        validations: any;
        ignore?: any;
        globals?: any;
        resolve?: any;
        resolveFn?: ((modelValue: string) => string) | undefined;
    }
}

/// <reference types="angular" />

declare var deferredBootstrapper: angular.IDeferredBootstrapperStatic;

declare namespace angular {
    interface IDeferredBootstrapperStatic {
        bootstrap(configParam: IConfigParam): ng.IPromise<boolean>;
    }

    interface IConfigParam {
        element?: Node | undefined;
        module?: string | undefined;
        resolve: any;
    }
}

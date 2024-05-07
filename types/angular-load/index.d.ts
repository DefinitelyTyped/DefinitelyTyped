/// <reference types="angular" />

declare namespace angular.load {
    interface IAngularLoadService {
        loadScript(url: string): ng.IPromise<any>;
        loadCSS(url: string): ng.IPromise<any>;
    }
}

/// <reference path="../angularjs/angular.d.ts" />

declare module angular.load {

    interface IAngularLoadService {
        loadScript(url:string): ng.IPromise<any>;
        loadCss(url:string): ng.IPromise<any>;
    }

}
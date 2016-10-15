// Type definitions for angular-deferred-bootstrap v0.1.9
// Project: https://github.com/philippd/angular-deferred-bootstrap
// Definitions by: Markus Wagner <https://github.com/Ritzlgrmft/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../angularjs/angular.d.ts" />

declare var deferredBootstrapper: angular.IDeferredBootstrapperStatic;

declare module angular {
	interface IDeferredBootstrapperStatic {
		bootstrap(configParam: IConfigParam): ng.IPromise<boolean>
	}

	interface IConfigParam {
		element?: Node,
		module?: string,
		resolve: any
	}
}
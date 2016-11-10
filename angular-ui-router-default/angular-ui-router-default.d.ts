// Type definitions for angular-ui-router-default 0.5+
// Project: https://github.com/nonplus/angular-ui-router-default
// Definitions by: Stepan Riha <https://github.com/nonplus>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../angular-ui-router/angular-ui-router.d.ts" />

declare namespace angular.ui {
	export type StateDefaultSpecifier = string
		| ((...args: any[]) => string)
		| ((...args: any[]) => ng.IPromise<string>)
		| (string | ((...args: any[]) => string))[]
		| (string | ((...args: any[]) => ng.IPromise<string>))[];
	interface IState {
		default?: StateDefaultSpecifier
	}
}

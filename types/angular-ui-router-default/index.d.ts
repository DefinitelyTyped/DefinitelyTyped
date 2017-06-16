// Type definitions for angular-ui-router-default 0.5
// Project: https://github.com/nonplus/angular-ui-router-default
// Definitions by: Stepan Riha <https://github.com/nonplus>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as aur from "angular-ui-router";

declare module "angular" {
	namespace ui {
		export type StateDefaultSpecifier = string
			| ((...args: any[]) => string)
			| ((...args: any[]) => ng.IPromise<string>)
			| (string | ((...args: any[]) => string))[]
			| (string | ((...args: any[]) => ng.IPromise<string>))[];
		interface IState {
			default?: StateDefaultSpecifier
		}
	}
}

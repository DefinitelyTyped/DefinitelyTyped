// Type definitions for angular-ui-uib-modal (ui.router module) 0.11
// Project: https://github.com/nonplus/angular-ui-router-uib-modal
// Definitions by: Stepan Riha <https://github.com/nonplus>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as auir from "angular-ui-router";

declare module "angular" {
	namespace ui {
		interface IState {
			modal?: boolean | string[];
		}
	}
}

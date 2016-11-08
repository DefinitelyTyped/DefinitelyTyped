// Type definitions for angular-ui-uib-modal 0.11+ (ui.router module)
// Project: https://github.com/nonplus/angular-ui-router-uib-modal
// Definitions by: Stepan Riha <https://github.com/nonplus>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as auir from "angular-ui-router";

declare module "angular" {
	namespace ui {
		interface IState {
			modal?: boolean | string[];
		}
	}
}

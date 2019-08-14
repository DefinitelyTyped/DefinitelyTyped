// Type definitions for express-flash-notification 0.5
// Project: https://github.com/carlosascari/express-flash-notification
// Definitions by: Mister4Eyes <https://github.com/Mister4Eyes>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.6

import express = require("express");

interface efnOptions {
	sessionName?: string;
	utilityName?: string;
	localsName?: string;
	viewName?: string;
	beforeSingleRender?: (item: any, callback: (err: any, item: any) => void) => void;
	afterAllRender?: (htmlFragments: string[], callback: (err: any, html: string) => void) => void;
}

declare function express_flash_notification(app: express.Application, options?: efnOptions, ...args: any[]): any;

declare namespace express_flash_notification {
	const prototype: {};
}

declare global {
	namespace Express {
		interface FlashOptions {
			type?: string;
			message?: string;
			redirect?: boolean;
			url?: string;
		}
		interface Request {
			flash(type: string, message?: string, redirect?: string|boolean): void;
			flash(object: FlashOptions): void;
		}
	}
}

export = express_flash_notification;

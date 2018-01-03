// Type definitions for jquery.growl 1.3
// Project: https://github.com/ksylvest/jquery-growl#readme
// Definitions by: Amir.h Yeganemehr <https://github.com/yeganemehr>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery" />

declare namespace growl {
	interface Options {
		// Message
		message: string;
		// Title
		title?: string;
		// URL
		url?: string;
		// while hovering over the alert, prevent it from being dismissed (true | false - default: true)
		delayOnHover?: boolean;
		// the duration (in milliseconds) for which the alert is displayed (default: 3200)
		duration?: number;
		// whether the alert should be fixed rather than auto- dismissed(true | false - default: false)
		fixed?: boolean;
		// the alert's position ('tl' | 'tr' | 'bl' | 'br' | 'tc' | 'bc' - default: 'tr')
		location?: string;
		// the alert's size ('small' | 'medium' | 'large' - default: 'medium')
		size?: string;
		// the alert's style ('default' | 'error' | 'notice' | 'warning' - default: 'default')
		style?: string;
	}
}

interface growl {
	(options: growl.Options): void;
	error(options: growl.Options): void;
	notice(options: growl.Options): void;
	warning(options: growl.Options): void;
	success(options: growl.Options): void;
}

interface JQueryStatic {
	growl: growl;
}

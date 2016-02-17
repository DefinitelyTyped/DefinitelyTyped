// Type definitions for Bootbox 4.4.0
// Project: https://github.com/makeusabrew/bootbox
// Definitions by: Vincent Bortone <https://github.com/vbortone/>, Kon Pik <https://github.com/konpikwastaken/>, Anup Kattel <https://github.com/kanup/>, Dominik Schroeter <https://github.com/icereed/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../jquery/jquery.d.ts" />
interface BootboxAlertOptions {
	size?: string;
	message: string;
	callback?: () => any;
}

interface BootboxConfirmOptions {
	size?: string;
	message: string;
	callback: (result: boolean) => any;
}

interface BootboxPromptOptions {
	size?: string;
	message?: string;
	callback: (result: string) => any;
}

interface BootboxButton {
	label?: string;
	className?: string;
	callback?: () => any;
}

interface BootboxButtonMap {
  [key: string]: BootboxButton | Function;
}

interface BootboxDialogOptions {
	message: string | Element;
	title?: string | Element;
	locale?: string;
	callback?: (result: boolean) => any;
	onEscape?: () => any | boolean;
	show?: boolean;
	backdrop?: boolean;
	closeButton?: boolean;
	animate?: boolean;
	className?: string;
	size?: string;
	buttons?: BootboxButtonMap; // complex object where each key is of type BootboxButton
}

interface BootboxDefaultOptions {
	locale?: string;
	show?: boolean;
	backdrop?: boolean;
	closeButton?: boolean;
	animate?: boolean;
	className?: string;
}

interface BootboxLocaleValues {
	OK: string;
	CANCEL: string;
	CONFIRM: string;
}

interface BootboxStatic {
	alert(message: string, callback?: () => void): JQuery;
	alert(options: BootboxAlertOptions): JQuery;
	confirm(message: string, callback: (result: boolean) => void): JQuery;
	confirm(options: BootboxConfirmOptions): JQuery;
	prompt(message: string, callback: (result: string) => void): JQuery;
	prompt(options: BootboxPromptOptions): JQuery;
	dialog(message: string, callback?: (result: string) => void): JQuery;
	dialog(options: BootboxDialogOptions): JQuery;
	setDefaults(options: BootboxDefaultOptions): void;
	hideAll(): void;

	addLocale(name: string, values: BootboxLocaleValues): void;
	removeLocale(name: string): void;
	setLocale(name: string): void;
}

declare var bootbox: BootboxStatic;

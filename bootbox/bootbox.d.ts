// Type definitions for Bootbox 4.4.0
// Project: https://github.com/makeusabrew/bootbox
// Definitions by: Vincent Bortone <https://github.com/vbortone/>, Kon Pik <https://github.com/konpikwastaken/>, Anup Kattel <https://github.com/kanup/>, Dominik Schroeter <https://github.com/icereed/>, Troy McKinnon <https://github.com/trodi/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../jquery/jquery.d.ts" />

/** Bootbox options shared by all modal types */
interface BootboxBaseOptions {
	title?: string | Element;
	callback?: (result: boolean | string) => any;
	onEscape?: (() => any) | boolean;
	show?: boolean;
	backdrop?: boolean;
	closeButton?: boolean;
	animate?: boolean;
	className?: string;
	size?: string;
	buttons?: BootboxButtonMap; // complex object where each key is of type BootboxButton
}

/** Bootbox options available for custom modals */
interface BootboxDialogOptions extends BootboxBaseOptions {
	message: string | Element;
}

/** Bootbox options available for alert modals */
interface BootboxAlertOptions extends BootboxDialogOptions {
	callback?: () => any;
	buttons?: BootboxAlertButtonMap;
}

/** Bootbox options available for confirm modals */
interface BootboxConfirmOptions extends BootboxDialogOptions {
	callback: (result: boolean) => any;
	buttons?: BootboxConfirmPromptButtonMap;
}

/** Bootbox options available for prompt modals */
interface BootboxPromptOptions extends BootboxBaseOptions {
	title: string;
	value?: string;
	inputType?: string;
	callback: (result: string) => any;
	buttons?: BootboxConfirmPromptButtonMap;
}

/** Bootbox options available when setting defaults for modals */
interface BootboxDefaultOptions {
	locale?: string;
	show?: boolean;
	backdrop?: boolean;
	closeButton?: boolean;
	animate?: boolean;
	className?: string;
}

interface BootboxButton {
	label?: string;
	className?: string;
	callback?: () => any;
}

interface BootboxButtonMap {
  [key: string]: BootboxButton | Function;
}

/** ButtonMap options for alerts modals */
interface BootboxAlertButtonMap extends BootboxButtonMap {
	ok: BootboxButton | Function;
}

/** ButtonMap options for confirm and prompt modals */
interface BootboxConfirmPromptButtonMap extends BootboxButtonMap {
	confirm: BootboxButton | Function;
	cancel: BootboxButton | Function;
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

declare module "bootbox" {
    export = bootbox;
}

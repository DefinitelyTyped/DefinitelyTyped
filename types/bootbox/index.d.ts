// Type definitions for Bootbox 4.4.0
// Project: https://github.com/makeusabrew/bootbox
// Definitions by: Vincent Bortone <https://github.com/vbortone>, Kon Pik <https://github.com/konpikwastaken>, Anup Kattel <https://github.com/kanup>, Dominik Schroeter <https://github.com/icereed>, Troy McKinnon <https://github.com/trodi>, Stanny Nuytkens <https://github.com/stannynuytkens>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery" />

/** Bootbox options shared by all modal types */
interface BootboxBaseOptions<T = any> {
	title?: string | Element;
	callback?: (result: T) => any;
	onEscape?: (() => any) | boolean;
	show?: boolean;
	backdrop?: boolean;
	closeButton?: boolean;
	animate?: boolean;
	className?: string;
	/** All other values result in medium */
	size?: "small" | "large";
	buttons?: BootboxButtonMap; // complex object where each key is of type BootboxButton
}

/** Bootbox options available for custom modals */
interface BootboxDialogOptions<T = any> extends BootboxBaseOptions<T> {
	message: string | Element;
}

/** Bootbox options available for alert modals */
interface BootboxAlertOptions extends BootboxDialogOptions<void> {
	callback?: () => any;
	buttons?: BootboxAlertButtonMap;
}

/** Bootbox options available for confirm modals */
interface BootboxConfirmOptions extends BootboxDialogOptions<boolean> {
	callback: (result: boolean) => any;
	buttons?: BootboxConfirmPromptButtonMap;
}

/** Bootbox options available for prompt modals */
interface BootboxPromptOptions extends BootboxBaseOptions<string> {
	title: string;
	value?: string;
	inputType?: "text" | "textarea" | "email" | "select" | "checkbox" | "date" | "time" | "number" | "password";
	callback: (result: string) => any;
	buttons?: BootboxConfirmPromptButtonMap;
	inputOptions?: { text: string, value: string, group?: string }[];
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
	dialog(options: BootboxDialogOptions<string>): JQuery;
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

// Type definitions for Bootbox 4.0.0
// Project: https://github.com/makeusabrew/bootbox
// Definitions by: Vincent Bortone <https://github.com/vbortone/>, Kon Pik <https://github.com/konpikwastaken/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped


interface BootboxAlertOptions {
	message: string;
	callback?: () => any;
}

interface BootboxConfirmOptions {
	message: string;
	callback?: (result: boolean) => any;
}

interface BootboxPromptOptions {
	message: string;
	callback?: (result: string) => any;
}

interface BootboxButton {
	label?: string;
	className?: string;
	callback?: () => any;
}

interface BootboxDialogOptions {
	message: any; // String | Element
	title?: any; // String | Element
	callback?: (result: boolean) => any;
	show?: boolean;
	onEscape?: () => any;
	backdrop?: boolean;
	closeButton?: boolean;
	animate?: boolean;
	className?: string;
	buttons?: Object; // complex object where each key is of type BootboxButton
}

interface BootboxDefaultOptions {
	locale?: string;
	show?: boolean;
	backdrop?: boolean;
	closeButton?: boolean;
	animate?: boolean;
	className?: string;
}

interface BootboxStatic {
	alert(message: string, callback?: () => void): void;
	alert(options: BootboxAlertOptions): void;
	confirm(message: string, callback?: (result: boolean) => void): void;
	confirm(options: BootboxConfirmOptions): void;
	prompt(message: string, callback?: (result: string) => void): void;
	prompt(options: BootboxPromptOptions): void;
	dialog(message: string, callback?: (result: string) => void): void;
	dialog(options: BootboxDialogOptions): void;
	setDefaults(options: BootboxDefaultOptions): void;
	hideAll(): void;
}

declare var bootbox: BootboxStatic;
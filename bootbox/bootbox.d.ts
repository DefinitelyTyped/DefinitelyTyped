// Type definitions for Bootbox 3.0.0
// Project: https://github.com/makeusabrew/bootbox
// Definitions by: Vincent Bortone <https://github.com/vbortone/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

interface BootboxLocale {
	OK: string;
	CANCEL: string;
	CONFIRM: string;
}

interface BootboxIcons {
	OK: any;
	CANCEL: any;
	CONFIRM: any;
}

interface BootboxHandler {
	label: string;
	class: string;
	callback: (result?: any) => void;
}

interface BootboxOption {
	header: string;
	headerCloseButton: bool;
}

interface BootboxStatic {
	alert(message: string, callback: () => void): void;
	alert(message: string, customButtonText?: string, callback?: () => void): void;
	confirm(message: string, callback: (result: bool) => void): void;
	confirm(message: string, cancelButtonText?: string, confirmButtonText?: string, callback?: (result: bool) => void): void;
	prompt(message: string, callback: (result: string) => void, defaultValue?: string): void;
	prompt(message: string, cancelButtonText?: string, confirmButtonText?: string, callback?: (result: string) => void, defaultValue?: string): void;
	dialog(message: string, handlers: BootboxHandler[], options?: any): void;
	dialog(message: string, handler: BootboxHandler): void;
	dialog(message: string): void;
	hideAll(): void;
	animate(shouldAnimate: bool): void;
	backdrop(backdropValue: string): void;
	classes(customCssClasses: string): void;
	setIcons(icons: BootboxIcons): void;
	setLocale(localeName: string): void;
	addLocale(localeName: string, translations: BootboxLocale) : void;
}

declare var bootbox : BootboxStatic;
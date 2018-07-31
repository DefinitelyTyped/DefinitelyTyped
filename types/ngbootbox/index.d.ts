// Type definitions for ngbootbox
// Project: https://github.com/eriktufvesson/ngBootbox
// Definitions by: Sam Saint-Pettersen <https://github.com/stpettersens>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="bootbox" />

interface NgBootboxDialog {
	title?: string;
	message?: string;
	templateUrl?: string;
	locale?: string;
	callback?: () => any;
	onEscape?: () => any | boolean;
	show?: boolean;
	backdrop?: boolean;
	closeButton?: boolean;
	animate?: boolean;
	className?: string;
	size?: string;
	buttons?: BootboxButtonMap;
}

interface BootboxService {
	alert(msg: string): Promise<any>;
	confirm(msg: string): Promise<any>;
	prompt(msg: string): Promise<any>;
	customDialog(options: NgBootboxDialog): void;
	setDefaults(options: BootboxDefaultOptions): void;
	hideAll(): void;

	addLocale(name: string, values: BootboxLocaleValues): void;
	removeLocale(name: string): void;
	setLocale(name: string): void;
}

declare var $ngBootbox: BootboxService;

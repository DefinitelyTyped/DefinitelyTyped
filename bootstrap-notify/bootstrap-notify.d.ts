// Type definitions for bootstrap-notify v3.1.3
// Project: http://bootstrap-notify.remabledesigns.com/
// Definitions by: Robert McIntosh <https://github.com/mouse0270>, Robert Voica <https://github.com/robert-voica>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../jquery/jquery.d.ts" />

/* tslint:disable: interface-name no-any */

interface JQueryStatic {
	/* tslint:enable: interface-name */
    notify(message: string): INotifyReturn;
	notify(opts: INotifyOptions, settings?: INotifySettings): INotifyReturn;
	notifyDefaults(settings: INotifySettings): void;
	notifyClose(): void;
	notifyClose(command: string): void;
}

interface INotifyOptions {
	message: string;
	title?: string;
	icon?: string;
	url?: string;
	target?: string;
}

interface INotifySettings {
	element?: string;
	position?: string;
	type?: string;
	allow_dismiss?: boolean;
	allow_duplicates?: boolean;
	newest_on_top?: boolean;
	showProgressbar?: boolean;
	placement?: {
		from?: string;
		align?: string;
	};
	offset?: number;
	spacing?: number;
	z_index?: number;
	delay?: number;
	timer?: number;
	url_target?: string;
	mouse_over?: string;
	animate?: {
		enter?: string;
		exit?: string;
	};
	onShow?: () => void;
	onShown?: () => void;
	onClose?: () => void;
	onClosed?: () => void;
	icon_type?: string;
	template?: string;
}

interface INotifyReturn {
	$ele: JQueryStatic;
	close: () => void;
	update: (command: string, update: any) => void;
}
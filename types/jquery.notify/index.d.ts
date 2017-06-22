// Type definitions for jQuery Notify UI Widget 1.5 by Eric Hynds
// Project: https://github.com/ehynds/jquery-notify
// Definitions by: Sergei Dorogin <https://github.com/evil-shrike>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="jquery"/>

interface JQueryNotifyOptions {
	close?: () => void;
	open?: () => void;
	custom?: boolean;
	disabled?: boolean;
	expires?: number;
	queue?: boolean;
	speed?: number;
	stack?: "below" | "above";
}
interface JQuery {
	notify (options?: JQueryNotifyOptions): JQueryNotifyWidget;
	notify (method: string, template: number, params?: Object, opts?: JQueryNotifyOptions): JQueryNotifyInstance;
	notify (method: string, params?: Object, opts?: JQueryNotifyOptions): JQueryNotifyInstance;
}
interface JQueryNotifyInstance extends JQuery {
	element: JQuery;
	isOpen: boolean;
	options: JQueryNotifyOptions;
	close (): void;
	open (): void;
}
interface JQueryNotifyWidget extends JQuery  {
}

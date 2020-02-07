// tslint:disable-next-line: no-bad-reference
/// <reference path="../ts3.5/index.d.ts"/>

declare module 'jsdom' {
	export interface DOMWindow {
		InputEvent: typeof InputEvent;
		External: typeof External;
	}
}

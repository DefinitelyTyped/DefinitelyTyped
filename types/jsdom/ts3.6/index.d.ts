// tslint:disable-next-line: no-bad-reference
/// <reference path="../ts3.5/index.d.ts"/>

// tslint:disable-next-line: no-declare-current-package
declare module 'jsdom' {
	interface DOMWindow {
		InputEvent: typeof InputEvent;
		External: typeof External;
	}
}

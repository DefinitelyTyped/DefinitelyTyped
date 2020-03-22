// tslint:disable-next-line: no-bad-reference
/// <reference path="../ts3.1/index.d.ts"/>

// tslint:disable-next-line: no-declare-current-package
declare module 'jsdom' {
	interface DOMWindow {
		ShadowRoot: typeof ShadowRoot;
	}
}

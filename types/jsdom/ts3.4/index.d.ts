// tslint:disable-next-line: no-bad-reference
/// <reference path="../ts3.1/index.d.ts"/>

declare module 'jsdom' {
	export interface DOMWindow {
		ShadowRoot: typeof ShadowRoot;
	}
}

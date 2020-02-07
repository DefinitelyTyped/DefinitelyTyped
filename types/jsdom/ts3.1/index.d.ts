// tslint:disable-next-line: no-bad-reference
/// <reference path="../index.d.ts"/>

declare module 'jsdom' {
	export interface DOMWindow {
		HTMLSlotElement: typeof HTMLSlotElement;
		AbstractRange: typeof AbstractRange;
		StaticRange: typeof StaticRange;
	}
}

// tslint:disable-next-line: no-bad-reference
/// <reference path="../index.d.ts"/>

// tslint:disable-next-line: no-declare-current-package no-single-declare-module
declare module 'jsdom' {
	interface DOMWindow {
		HTMLSlotElement: typeof HTMLSlotElement;
		AbstractRange: typeof AbstractRange;
		StaticRange: typeof StaticRange;
		CustomElementRegistry: typeof CustomElementRegistry;
	}
}

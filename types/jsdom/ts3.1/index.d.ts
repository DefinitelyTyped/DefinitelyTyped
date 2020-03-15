import '../index';

// tslint:disable-next-line: no-declare-current-package
declare module 'jsdom' {
	interface DOMWindow {
		HTMLSlotElement: typeof HTMLSlotElement;
		AbstractRange: typeof AbstractRange;
		StaticRange: typeof StaticRange;
	}
}

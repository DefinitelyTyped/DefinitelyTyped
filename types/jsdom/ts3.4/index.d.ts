import '../ts3.1/index';

// tslint:disable-next-line: no-declare-current-package
declare module 'jsdom' {
	interface DOMWindow {
		ShadowRoot: typeof ShadowRoot;
	}
}

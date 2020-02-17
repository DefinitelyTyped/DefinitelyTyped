import '../ts3.5/index';

// tslint:disable-next-line: no-declare-current-package
declare module 'jsdom' {
	interface DOMWindow {
		InputEvent: typeof InputEvent;
		External: typeof External;
	}
}

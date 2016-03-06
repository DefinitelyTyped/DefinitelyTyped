// Type definitions for iScroll Lite 5
// Project: http://cubiq.org/iscroll-5-ready-for-beta-test
// Definitions by: Christiaan Rakowski <https://github.com/csrakowski/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

interface IScrollOptions {
	//hScroll?: boolean;
	//vScroll?: boolean;

	scrollX?: boolean;
	scrollY?: boolean;

	x?: number;
	y?: number;
	bounce?: boolean;
	bounceLock?: boolean;
	momentum?: boolean;
	lockDirection?: boolean;
	useTransform?: boolean;
	useTransition?: boolean;
}

declare class IScroll {

	constructor (element: string, options?: IScrollOptions);
	constructor (element: HTMLElement, options?: IScrollOptions);

	destroy(): void;
	refresh(): void;
	scrollTo(x: number, y: number, time?: number, relative?: boolean): void;
	scrollToElement(element: string, time?: number): void;
	scrollToElement(element: HTMLElement, time?: number): void;
	disable(): void;
	enable(): void;
	stop(): void;

	// Events
	on: (type: string, fn: () => void) => void;
}

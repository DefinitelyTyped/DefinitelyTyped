// Type definitions for iScroll 5
// Project: http://cubiq.org/iscroll-5-ready-for-beta-test
// Definitions by: Christiaan Rakowski <https://github.com/csrakowski/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

interface IScrollOptions {
	//hScroll?: boolean;
	//vScroll?: boolean;
	x?: number;
	y?: number;
	bounce?: boolean;
	bounceLock?: boolean;
	momentum?: boolean;
	lockDirection?: boolean;
	useTransform?: boolean;
	useTransition?: boolean;
	topOffset?: number;
	checkDOMChanges?: boolean;
	handleClick?: boolean;

	// Scrollbar
	hScrollbar?: boolean;
	vScrollbar?: boolean;
	fixedScrollbar?: boolean;
	hideScrollbar?: boolean;
	fadeScrollbar?: boolean;
	scrollbarClass?: string;

	// Zoom
	zoom?: boolean;
	zoomMin?: number;
	zoomMax?: number;
	doubleTapZoom?: number;
	wheelAction?: string;

	
	///String or boolean
	snap?: any;
	snapThreshold?: number;

	//new in IScroll 5?

	resizeIndicator?: boolean;
	mouseWheelSpeed?: number;
	startX?: number;
	startY?: number;
	scrollX?: boolean;
	scrollY?: boolean;
	directionLockThreshold?: number;

	bounceTime?: number;

	///String or function
	bounceEasing?: any;
	
	preventDefault?: boolean;
	preventDefaultException?: boolean;

	HWCompositing?: boolean;

	freeScroll?: boolean;

	resizePolling?: number;
	tap?: boolean;
	click?: boolean;
	invertWheelDirection?: boolean;

	///Boolean or string
	eventPassthrough?: any;
}

declare class IScroll {

	constructor (element: string, options?: IScrollOptions);
	constructor (element: HTMLElement, options?: IScrollOptions);

	destroy(): void;
	refresh(): void;
	scrollTo(x: number, y: number, time?: number, relative?: boolean): void;
	scrollToElement(element: string, time?: number): void;
	scrollToElement(element: HTMLElement, time?: number): void;
	scrollToPage(pageX: number, pageY: number, time?: number): void;
	disable(): void;
	enable(): void;
	stop(): void;
	zoom(x: number, y: number, scale: number, time?: number): void;
	isReady(): boolean;

	// Events
	on: (type: string, fn: () => void) => void;
}

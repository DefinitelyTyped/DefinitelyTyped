// Type definitions for headroom.js v0.7.0
// Project: http://wicky.nillia.ms/headroom.js/
// Definitions by: Jakub Olek <https://github.com/hakubo/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface HeadroomOptions {
	offset?: number;
	tolerance?: any;
	classes?: {
		initial?: string;
		notBottom?:string;
		notTop?: string;
		pinned?: string;
		top?: string;
		unpinned?: string;
	};
	scroller?: Element;
	onPin?: () => void;
	onUnPin?: () => void;
	onTop?: () => void;
	onNotTop?: () => void;

}

declare class Headroom {
	constructor(element: Node, options?: HeadroomOptions);
	constructor(element: Element, options?: HeadroomOptions);
	init: () => void;
}

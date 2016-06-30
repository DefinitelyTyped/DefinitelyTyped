// Type definitions for Masonry 4.0.0
// Project: https://github.com/desandro/masonry
// Definitions by: Travis Brown <https://github.com/warriorrocker>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../jquery/jquery.d.ts" />

declare class Masonry implements IMasonry {
	constructor(options?: IMasonryOptions);
	constructor(selector: string, options?: IMasonryOptions);
}

interface IMasonry {
	masonry?(): void;
	masonry?(callback: string, handler: any): void;

	// Layout
	layout?(): void;
	layoutItems?(items: Array<any>, isStill?: boolean): void;
	stamp?(elements: Array<any>): void;
	unstamp?(elements: Array<any>): void;

	// Add and Remove Items
	appended?(elements: Array<any>): void;
	prepended?(elements: Array<any>): void;
	addItems?(elements: Array<any>): void;
	remove?(elements: Array<any>): void;

	// Events
	on?(callback: string, handler: any): void;
	off?(callback: string, handler: any): void;
	once?(callback: string, handler: any): void;

	// Utilities
	reloadItems?(): void;
	destroy?(): void;
	getItemElements?(): Array<any>;
	data?(element: Element): Masonry;
}

interface IMasonryOptions {
	// Layout
	itemSelector?: string;
	columnWidth?: any;
	percentPosition?: boolean;
	gutter?: any;
	stamp?: string;
	fitWidth?: boolean;
	originLeft?: boolean;
	originTop?: boolean;

	// Setup
	containerStyle?: Object;
	transitionDuration?: any;
	resize?: boolean;
	initLayout?: boolean;
}

interface JQuery {
	masonry(options?: IMasonryOptions): JQuery;
}
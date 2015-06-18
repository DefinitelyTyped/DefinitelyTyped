// Type definitions for ScrollToFixed
// Project: https://github.com/bigspotteddog/ScrollToFixed
// Definitions by: Ben Dixon <https://github.com/bmdixon>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../jquery/jquery.d.ts" />

declare module ScrollToFixed {
	interface ScrollToFixedOptions {
		marginTop? : number | (() => number);		
		limit? : number | (() => number);
		bottom?: number;
		zIndex? : number;
		spacerClass? : string;
		preFixed?: () => void;
		fixed?: () => void;
		postFixed?: () => void;
		preUnfixed?: () => void;
		unfixed?: () => void;
		postUnfixed?: () => void;
		preAbsolute?: () => void;
		postAbsolute?: () => void;
		offsets? : boolean;
		minWidth? : number;
		maxWidth? : number;
		dontCheckForPositionFixedSupport? : boolean;
		dontSetWidth? : boolean;
		removeOffsets? : boolean;
	}
}

interface JQuery {
	isScrollToFixed(el: Element) : JQuery;
	isScrollToFixed(el: Element[]) : JQuery;
	isScrollToFixed(el: {}) : JQuery;
	isScrollToFixed(el: JQuery) : JQuery;
	ScrollToFixed(el : Element, options : ScrollToFixed.ScrollToFixedOptions) : JQuery;
	ScrollToFixed(el: Element[], options : ScrollToFixed.ScrollToFixedOptions) : JQuery;
	ScrollToFixed(el: {}, options : ScrollToFixed.ScrollToFixedOptions) : JQuery;
	ScrollToFixed(el: JQuery, options : ScrollToFixed.ScrollToFixedOptions) : JQuery;
	
    scrollToFixed : (options? : ScrollToFixed.ScrollToFixedOptions) => JQuery[];
}
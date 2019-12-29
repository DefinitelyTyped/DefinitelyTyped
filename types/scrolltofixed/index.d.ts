// Type definitions for ScrollToFixed
// Project: https://github.com/bigspotteddog/ScrollToFixed
// Definitions by: Ben Dixon <https://github.com/bmdixon>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery" />

declare namespace ScrollToFixed {
	interface ScrollToFixedOptions {
		marginTop? : number | (() => number);
		limit? : number | (() => number);
		bottom?: number;
		zIndex? : number;
		spacerClass? : string;
		preFixed?: () => void;
		postFixed?: () => void;
		fixed?: () => void;
		unfixed?: () => void;
		preUnfixed?: () => void;
		postUnfixed?: () => void;
		preAbsolute?: () => void;
		postAbsolute?: () => void;
		offsets? : boolean;
		minWidth? : number;
		maxWidth? : number;
		dontCheckForPositionFixedSupport? : boolean;
		dontSetWidth? : boolean;
		removeOffsets? : boolean;
		baseClassName?: string;
		className?: string;
	}
}

interface JQuery {
    scrollToFixed : (options? : ScrollToFixed.ScrollToFixedOptions) => JQuery[];
}

interface JQueryStatic {
	isScrollToFixed(el: Element) : JQuery;
	isScrollToFixed(el: Element[]) : JQuery;
	isScrollToFixed(el: {}) : JQuery;
	isScrollToFixed(el: JQuery) : JQuery;

    ScrollToFixed(el: Element, options: ScrollToFixed.ScrollToFixedOptions): void;
	ScrollToFixed(el : Element, options : ScrollToFixed.ScrollToFixedOptions) : JQuery;
	ScrollToFixed(el: Element[], options : ScrollToFixed.ScrollToFixedOptions) : JQuery;
	ScrollToFixed(el: {}, options : ScrollToFixed.ScrollToFixedOptions) : JQuery;
	ScrollToFixed(el: JQuery, options : ScrollToFixed.ScrollToFixedOptions) : JQuery;
}

// Type definitions for jquery-sticky 1.0
// Project: https://github.com/garand/sticky
// Definitions by: Matthieu Tabuteau <https://github.com/maixiu>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery" />

interface JQueryStickyOptions {
	/**
	 * Pixels between the page top and the element's top.
	 * @default 0
	 */
	topSpacing?: number;

	/**
	 * Pixels between the page bottom and the element's bottom.
	 * @default 0
	 */
	bottomSpacing?: number;

	/**
	 * CSS class added to the element's wrapper when "sticked".
	 * @default is-sticky
	 */
	className?: string;

	/**
	 * CSS class added to the wrapper.
	 * @default 'sticky-wrapper'
	 */
	wrapperClassName?: string;

	/**
	 * Boolean determining whether the sticky element should be horizontally centered in the page.
	 * @default false
	 */
	center?: boolean;

	/**
	 * Selector of element referenced to set fixed width of "sticky" element.
	 * @default ''
	 */
	getWidthFrom?: string;

	/**
	 * Boolean determining whether width of the "sticky" element should be updated to match the wrapper's width.
	 * Wrapper is a placeholder for "sticky" element while it is fixed (out of static elements flow), and its width depends on the context and CSS rules.
	 * Works only as long getWidthForm isn't set.
	 * @default true
	 */
	widthFromWrapper?: boolean;

	/**
	 * Boolean determining whether widths will be recalculated on window resize (using getWidthfrom).
	 * @default false
	 */
	responsiveWidth?: boolean;

	/**
	 * Controls z-index of the sticked element.
	 * @default inherit
	 */
	zIndex?: string;
}

interface JQuery {
	/**
	 * Initializer. options is optional.
	 */
	sticky(options?: JQueryStickyOptions): JQuery;

	/**
	 * Recalculates the element's position.
	 */
	sticky(method: 'update'): JQuery;

	/**
	 * To unstick an object.
	 */
	unstick(): JQuery;
}

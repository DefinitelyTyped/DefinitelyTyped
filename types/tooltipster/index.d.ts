// Type definitions for tooltipster
// Project: https://github.com/iamceege/tooltipster
// Definitions by: Stephen Lautier <https://github.com/stephenlautier>
//                 Patrick Magee <https://github.com/pjmagee>,
//                 Dmitry Pesterev <https://github.com/VorobeY1326>,
//                 Leonard Thieu <https://github.com/leonard-thieu>,
//                 Jan Hirzel <https://github.com/janhi>,
//                 Joe Skeen <https://github.com/joeskeen>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery" />

declare namespace JQueryTooltipster {
	/**
	* Tooltipster options @see http://iamceege.github.io/tooltipster/
	*/
	export interface ITooltipsterOptions {

		/**
		 * Determines how the tooltip will animate in and out. In addition to the built-in transitions, 
		 * you may also create custom transitions in your CSS files. In IE9 and lower, all animations 
		 * default to a JavaScript generated, fade animation. 
		 * @default 'fade'
		 */
		animation?: 'fade' | 'grow' | 'swing' | 'slide' | 'fall';

		/**
		 * Sets the duration of the animation, in milliseconds. If you wish to provide different durations 
		 * for the opening and closing animations, provide an array of two different values. 
		 * @default 350
		 */
		animationDuration?: number | number[];

		/**
		 * Add a "speech bubble" arrow to the tooltip. 
		 * @default true
		 */
		arrow?: boolean;

		/**
		 * If set, this will override the content of the tooltip. If you provide something else than a string 
		 * or jQuery-wrapped HTML element, you will need to use the 'functionFormat' option to format your 
		 * content for display. 
		 * @default null
		 */
		content?: string | JQuery | any;

		/**
		 * If the content of the tooltip is provided as a string, it is displayed as plain text by default. 
		 * If this content should actually be interpreted as HTML, set this option to true. 
		 * @default false
		 */
		contentAsHTML?: boolean;

		/**
		 * If you provide a jQuery object to the 'content' option, this sets if it is a clone of this object 
		 * that should actually be used. 
		 * @default false
		 */
		contentCloning?: boolean;

		/**
		 * Tooltipster logs hints and notices into the console when you're doing something you ideally shouldn't 
		 * be doing. Set to false to disable logging. 
		 * @default true
		 */
		debug?: boolean;

		/**
		 * Upon mouse interaction, this is the delay before the tooltip starts its opening and closing animations 
		 * when the 'hover' trigger is used (*). If you wish to specify different delays for opening and closing, 
		 * you may provide an array of two different values. 
		 * @default 300
		 */
		delay?: number | number[];

		/**
		 * Upon touch interaction, this is the delay before the tooltip starts its opening and closing animations 
		 * when the 'hover' trigger is used (*). If you wish to specify different delays for opening and closing, 
		 * you may provide an array of two different values. 
		 * @default [300, 500]
		 */
		delayTouch?: number | number[];

		/**
		 * The distance between the origin and the tooltip, in pixels. The value may be an integer or an array of 
		 * integers (in the usual CSS syntax) if you wish to specify a different distance for each side. 
		 * @default 6
		 */
		distance?: number | number[];

		/**
		 * A custom function to be fired only once at instantiation. 
		 * @default null
		 */
		functionInit?: TooltipsterStandardCallbackFunction;

		/**
		 * A custom function to be fired before the tooltip is opened. This function may prevent the opening if it 
		 * returns false. 
		 * @default null
		 */
		functionBefore?: TooltipsterStandardCallbackFunction;

		/**
		 * A custom function to be fired when the tooltip and its contents have been added to the DOM. 
		 * @default null
		 */
		functionReady?: TooltipsterStandardCallbackFunction;

		/**
		 * A custom function to be fired once the tooltip has been closed and removed from the DOM. 
		 * @default null
		 */
		functionAfter?: TooltipsterStandardCallbackFunction;

		/**
		 * A custom function that does not modify the content but that can format it for display. It gets the two 
		 * first usual arguments and also the content as third argument. It must return the value that will be 
		 * displayed in the tooltip, either a string or a jQuery-wrapped HTML element (see the formatting section). 
		 * @default null
		 */
		functionFormat?: (instance: ITooltipsterInstance, helper: ITooltipsterHelper, content: any) => string | JQuery;

		/**
		 * A custom function fired when the tooltip is repositioned. It gives you the ability to slightly or 
		 * completely modify the position that Tooltipster is about to give to the tooltip. It gets the proposed 
		 * set of placement values as third argument. The function must return the set of placement values, which 
		 * you may have edited (see the positioning section). 
		 * @default null
		 */
		functionPosition?: (instance: ITooltipsterInstance, helper: ITooltipsterHelper, position: ITooltipPosition) => ITooltipPosition;

		/**
		 * The minimum version of Internet Explorer to run on. 
		 * @default 6
		 */
		IEmin?: number;

		/**
		 * Give users the possibility to interact with the content of the tooltip. If you want them to be able to 
		 * make clicks, fill forms or do other interactions inside the tooltip, you have to set this option to 
		 * true. When the 'hover' close trigger is used, the user has to move the cursor to the tooltip before it 
		 * starts closing (this lapse of time has its duration set by the 'delay' option). 
		 * @default false
		 */
		interactive?: boolean;

		/**
		 * Set a maximum width for the tooltip. 
		 * @default null (no max width)
		 */
		maxWidth?: number;

		/**
		 * Corresponds to the minimum distance to enforce between the center of the arrow and the edges of the 
		 * tooltip. Mainly used to create an arrow bigger than those of the default themes. 
		 * @default 16
		 */
		minIntersection?: number;

		/**
		 * Set a minimum width for the tooltip. 
		 * @default 0 (auto width)
		 */
		minWidth?: number;

		/**
		 * Allows you to put several tooltips on a single element (see the multiple section). 
		 * @default false
		 */
		multiple?: boolean;

		/**
		 * The names of plugins to be used by Tooltipster. 
		 * @default ['sideTip']
		 */
		plugins?: string[];

		/**
		 * Several plugins may have options of the same name. To resolve the conflict, wrap the options of plugins 
		 * under a property with their full name.
		 */
		[pluginName: string]: any;

		/**
		 * Repositions the tooltip if it goes out of the viewport when the user scrolls the page, in order to 
		 * keep it visible as long as possible. 
		 * @default false
		 */
		repositionOnScroll?: boolean;

		/**
		 * Specifies if a TITLE attribute should be restored on the HTML element after a call to the 'destroy' 
		 * method. This attribute may be omitted, or be restored with the value that existed before Tooltipster 
		 * was initialized, or be restored with the stringified value of the current content. Note: in case of 
		 * multiple tooltips on a single element, only the last destroyed tooltip may trigger a restoration. 
		 * 
		 * @default 'none'
		 */
		restoration?: 'none' | 'previous' | 'current';

		/**
		 * Sets if the tooltip should self-destruct after a few seconds when its origin is removed from the DOM. 
		 * This prevents memory leaks. 
		 * @default true
		 */
		selfDestruction?: boolean;

		/**
		 * Sets the side of the tooltip. The value may one of the following: 'top', 'bottom', 'left', 'right'. 
		 * It may also be an array containing one or more of these values. When using an array, the order of 
		 * values is taken into account as order of fallbacks and the absence of a side disables it (see the 
		 * sides section). Default: ['top', 'bottom', 'right', 'left']
		 */
		side?: TooltipPositioningSide | TooltipPositioningSide[];

		/**
		 * How long (in ms) the tooltip should live before closing. 
		 * @default 0 (disabled)
		 */
		timer?: number;

		/**
		 * Set a theme that will override the default tooltip appearance. You may provide an array of strings 
		 * to apply several themes at once (see the themes section). 
		 * @default: []
		 */
		theme?: string | string[];

		/**
		 * Sets how often the tracker should run (see trackOrigin and trackTooltip), in milliseconds. The tracker 
		 * runs even if trackOrigin and trackTooltip are false to check if the origin has not been removed while 
		 * the tooltip was open, so you shouldn't set too high or too low values unless you need to. 
		 * @default 500
		 */
		trackerInterval?: number;

		trackOrigin?: boolean;

		trackTooltip?: boolean;

		/**
		 * Set how tooltips should be activated and closed.
		 * Possible values: hover, click or custom.
		 */
		trigger?: string;

		/**
		 * When 'trigger' is set to 'custom', all built-in close triggers are disabled by default. This option 
		 * allows you to reactivate the triggers of your choice to create a customized behavior. Only applies 
		 * if 'trigger' is set to 'custom'. See http://iamceege.github.io/tooltipster/#triggers.
		 */
		triggerClose?: {
			/**
			 * When a mouse click happens anywhere in the page. However, if the interactive option is set to true, 
			 * a click happening inside the tooltip will not close it.
			 */
			click?: boolean;
			/**
			 * When the mouse goes away from the origin. The delay option is taken into account as the delay before 
			 * closing.
			 */
			mouseleave?: boolean;
			/**
			 * When the origin is clicked by a mouse. This mimics a behavior that browsers usually have and is meant 
			 * to be used with the mouseenter open trigger.
			 */
			originClick?: boolean;
			/**
			 * When scrolling happens in the window or in a scrollable area which is a parent of the origin.
			 */
			scroll?: boolean;
			/**
			 * When the finger taps (ie presses and releases) anywhere in the touch screen.
			 */
			tap?: boolean;
			/**
			 * When the finger is removed from the touch screen or if the interaction was stopped by the device. The 
			 * delayTouch option is taken into account as the delay before closing.
			 */
			touchleave?: boolean;
		};

		/**
		 * When 'trigger' is set to 'custom', all built-in open triggers are disabled by default. This option 
		 * allows you to reactivate the triggers of your choice to create a customized behavior. Only applies 
		 * if 'trigger' is set to 'custom'. See http://iamceege.github.io/tooltipster/#triggers.
		 */
		triggerOpen?: {
			/**
			 * When the origin is clicked by a mouse.
			 */
			click?: boolean;
			/**
			 * When a mouse comes over the origin. The delay option is taken into account as the delay before 
			 * opening.
			 */
			mouseenter?: boolean;
			/**
			 * When the origin is pressed on a touch screen. The delayTouch option is taken into account as the 
			 * delay before opening.
			 */
			touchstart?: boolean;
			/**
			 * When the origin is tapped (ie pressed and then released) on a touch screen.
			 */
			tap?: boolean;
		};

		/**
		 * Plays a subtle animation when the content of the tooltip is updated (if the tooltip is open). You 
		 * may create custom animations in your CSS files. Set to null to disable the animation. 
		 * @default 'rotate'
		 */
		updateAnimation?: 'fade' | 'rotate' | 'scale' | null;

		/**
		 * Tries to place the tooltip in such a way that it will be entirely visible on screen when it's opened.
		 * If the tooltip is to be opened while its origin is off screen (using a method call), you may want to 
		 * set this option to false. 
		 * @default true
		 */
		viewportAware?: boolean;

		/**
		 * Set the z-index of the tooltip. 
		 * @default 9999999
		 */
		zIndex?: number;
	}

	type TooltipsterStandardCallbackFunction = (instance: ITooltipsterInstance, helper: ITooltipsterHelper) => void;

	interface ITooltipsterHelper {
		origin: HTMLElement;

		/** provided on functionReady and open callbacks */
		tooltip?: HTMLElement | undefined;

		/** provided on functionBefore and functionAfter callbacks */
		event?: MouseEvent | TouchEvent | null | undefined;

		/** provided on position callback */
		mode?: 'natural' | 'constrained';
		/** provided on position callback */
		tooltipClone?: HTMLElement;
		/** provided on position callback */
		geo?: ITooltipsterGeoHelper;
	}

	interface ITooltipsterGeoHelper {
		document: {
			size: {
				height: number;
				width: number;
			};
		};
		window: {
			scroll: {
				left: number;
				top: number;
			};
			size: {
				height: number;
				width: number;
			}
		};
		origin: {
			/** the origin has a fixed lineage if itself or one of its ancestors has a fixed position */
			fixedLineage: boolean;
			offset: {
				/** this is the distance between the bottom side of the origin and the top of the document */
				bottom: number;
				left: number;
				/** this is the distance between the right side of the origin and the left of the document */
				right: number;
				top: number;
			};
			size: {
				height: number;
				width: number
			};
			/** if the origin is a map area, this will hold the associated image element */
			usemapImage: HTMLImageElement | null;
			windowOffset: {
				/** this is the distance between the bottom side of the origin and the top of the viewport */
				bottom: number;
				left: number;
				/** this is the distance between the right side of the origin and the left of the viewport */
				right: number;
				top: number
			}
		}
	}

	/** see http://iamceege.github.io/tooltipster/#positioning */
	interface ITooltipPosition {
		/** determines the position of the tooltip and are relative to the viewport */
		coord: {
			left: number;
			top: number;
		};
		/** the offset that will be applied between the origin and the tooltip */
		distance: number;
		/** is the side Tooltipster has judged best for your tooltip, according to your requirements */
		side: TooltipPositioningSide;
		/**
		 * the size that your tooltip will have. It is either the natural size of the tooltip, or a size that has been 
		 * set by Tooltipster to fit best on screen according to your requirements
		 */
		size: {
			height: number;
			width: number;
		};
		/**
		 * the location Tooltipster thinks the tooltip should ideally be centered on, and the arrow aiming at. It is 
		 * given as the distance from the relevant edge of the viewport (left edge if the side is "top" or "bottom", 
		 * top edge if the side is "left" or "right"). The target is usually the middle of the origin, but can be 
		 * somewhere else when the origin is actually a portion of text split in several lines. Editing this value 
		 * will change the location the arrow is aiming at but will not change the position of the tooltip itself 
		 * (use coord for that).
		 */
		target: number;
	}

	type TooltipPositioningSide = 'top' | 'bottom' | 'left' | 'right';
	type TooltipEventName = 'init' | 'before' | 'ready' | 'after' | 'format' | 'position'
		| 'close' | 'closing' | 'created' | 'destroy' | 'destroyed' | 'dismissable'
		| 'geometry' | 'positionTest' | 'positionTested' | 'reposition' | 'repositioned'
		| 'scroll' | 'start' | 'startcancel' | 'startend' | 'state' | 'updated';

	/**
	* Tooltipster tooltip instance object.
	*/
	export interface ITooltipsterInstance {

		/**
		 * Closes the tooltip. When the animation is over, its HTML element is destroyed (definitely removed from the 
		 * DOM). The `callback` function argument is optional.
		 */
		close(callback?: TooltipsterStandardCallbackFunction): void;

		/**
		 * Returns a tooltip's current content. If the selector matches multiple origins, only the value of the first 
		 * will be returned.
		 */
		content(): any;

		/**
		 * Updates the tooltip's content.
		 * @param value the new content of the tooltip
		 */
		content(value: any): ITooltipsterInstance;

		/**
		 * Closes and destroys the tooltip functionality.
		 */
		destroy(): void;

		/**
		 * Temporarily disables a tooltip from being able to open.
		 */
		disable(): void;

		/**
		 * Returns the HTML element which has been tooltipped.
		 */
		elementOrigin(): HTMLElement;

		/**
		 * Returns the HTML root element of the tooltip if it is open, `null` if it is closed.
		 */
		elementTooltip(): HTMLElement | null;

		/**
		 * If a tooltip was disabled, restores its previous functionality.
		 */
		enable(): void;

		/**
		 * Returns the instance of Tooltipster associated to the tooltip. If the selector matches multiple origins, 
		 * only the instance of the first will be returned.
		 */
		instance(): ITooltipsterInstance;

		/**
		 * Handle Tooltipster's `on` event coming from any instance. See http://iamceege.github.io/tooltipster/#events
		 * for a complete description of available events.
		 */
		on(eventName: string, callback: (e: JQueryEventObject) => void): ITooltipsterInstance;
		/**
		 * Handle Tooltipster's `one` event coming from any instance.
		 */
		one(eventName: string, callback: (e: JQueryEventObject) => void): ITooltipsterInstance;
		/**
		 * Handle Tooltipster's `off` event coming from any instance.
		 */
		off(eventName: string): ITooltipsterInstance;
		/**
		 * Trigger a Tooltipster's event coming from any instance.
		 */
		triggerHandler(eventName: string): ITooltipsterInstance;

		/**
		 * Opens the tooltip. The `callback` function argument is optional (see its input signature) and, if provided, 
		 * is called when the opening animation has ended
		 */
		open(callback?: TooltipsterStandardCallbackFunction): ITooltipsterInstance;

		/**
		 * Returns the value of an option.
		 */
		option(optionName: string): any;

		/**
		 * Sets the value of an option (for advanced users only; we do not provide support on unexpected results).
		 */
		option(optionName: string, optionValue: any): ITooltipsterInstance;

		/**
		 * Resizes and repositions the tooltip.
		 */
		reposition(): ITooltipsterInstance;

		/**
		 * Returns various information about the tooltip, like whether it is open or not. See 
		 * http://iamceege.github.io/tooltipster/#status
		 */
		status(): ITooltipStatus;

		/**
		 * Several plugins may have methods of the same name. To resolve the conflict, use the instance object of the 
		 * tooltip and specify the full name of the desired plugin in your calls.
		 */
		[pluginName: string]: any;
	}

	/**
	* Tooltipster methods available on a JQuery object
	*/
	export interface ITooltipsterJQuery {

		/** Activates Tooltipster */
		(options?: ITooltipsterOptions): JQuery;

		/**
		 * Closes the tooltip. When the animation is over, its HTML element is destroyed (definitely removed from the 
		 * DOM). The `callback` function argument is optional.
		 */
		(method: 'close', callback?: TooltipsterStandardCallbackFunction): JQuery;

		/**
		 * Returns a tooltip's current content. If the selector matches multiple origins, only the value of the first 
		 * will be returned.
		 */
		(method: 'content'): any;

		/**
		 * Updates the tooltip's content.
		 * @param value the new content of the tooltip
		 */
		(method: 'content', value: string): JQuery;

		/**
		 * Closes and destroys the tooltip functionality.
		 */
		(method: 'destroy'): JQuery;

		/**
		 * Temporarily disables a tooltip from being able to open.
		 */
		(method: 'disable'): JQuery;

		/**
		 * Returns the HTML element which has been tooltipped.
		 */
		(method: 'elementOrigin'): HTMLElement;

		/**
		 * Returns the HTML root element of the tooltip if it is open, `null` if it is closed.
		 */
		(method: 'elementTooltip'): HTMLElement | null;

		/**
		 * If a tooltip was disabled, restores its previous functionality.
		 */
		(method: 'enable'): JQuery;

		/**
		 * Returns the instance of Tooltipster associated to the tooltip. If the selector matches multiple origins, 
		 * only the instance of the first will be returned.
		 */
		(method: 'instance'): ITooltipsterInstance;

		/**
		 * Handle Tooltipster's `on` event coming from any instance. See http://iamceege.github.io/tooltipster/#events
		 * for a complete description of available events.
		 */
		(method: 'on', eventName: string, callback: (e: JQueryEventObject) => void): JQuery;
		/**
		 * Handle Tooltipster's `one` event coming from any instance.
		 */
		(method: 'one', eventName: string, callback: (e: JQueryEventObject) => void): JQuery;
		/**
		 * Handle Tooltipster's `off` event coming from any instance.
		 */
		(method: 'off', eventName: string): JQuery;
		/**
		 * Trigger a Tooltipster's event coming from any instance.
		 */
		(method: 'triggerHandler', eventName: string): JQuery;

		/**
		 * Opens the tooltip. The `callback` function argument is optional (see its input signature) and, if provided, 
		 * is called when the opening animation has ended
		 */
		(method: 'open', callback?: TooltipsterStandardCallbackFunction): JQuery;

		/**
		 * Returns the value of an option.
		 */
		(method: 'option', optionName: string): any;

		/**
		 * Sets the value of an option (for advanced users only; we do not provide support on unexpected results).
		 */
		(method: 'option', optionName: string, optionValue: any): JQuery;

		/**
		 * Resizes and repositions the tooltip.
		 */
		(method: 'reposition'): JQuery;

		/**
		 * Returns various information about the tooltip, like whether it is open or not. See 
		 * http://iamceege.github.io/tooltipster/#status
		 */
		(method: 'status'): ITooltipStatus;
	}

	interface ITooltipsterStatic {
		/**
		 * all instances of all tooltips present in the page are returned
		 */
		instances(): ITooltipsterInstance[];
		/**
		 * Returns the instances of Tooltipster of all tooltips set on the element(s) matched by the argument.
		 */
		instances(selector: string | JQuery): ITooltipsterInstance[];
		/**
		 * Returns the instances of Tooltipster of all tooltips set on the element(s) matched by the argument.
		 */
		instances(element: HTMLElement): ITooltipsterInstance[];

		/**
		 * Returns the instances of Tooltipster which were generated during the last initializing call.
		 */
		instancesLatest(): ITooltipsterInstance[];

		/**
		 * Handle Tooltipster's `on` event coming from any instance. See http://iamceege.github.io/tooltipster/#events
		 * for a complete description of available events.
		 */
		on(eventName: string, callback: (e: ITooltipEvent) => void): ITooltipsterStatic;
		/**
		 * Handle Tooltipster's `one` event coming from any instance.
		 */
		one(eventName: string, callback: (e: ITooltipEvent) => void): ITooltipsterStatic;
		/**
		 * Handle Tooltipster's `off` event coming from any instance.
		 */
		off(eventName: string): ITooltipsterStatic;
		/**
		 * Trigger a Tooltipster's event coming from any instance.
		 */
		triggerHandler(eventName: string): ITooltipsterStatic;

		/**
		 * Returns an array of all HTML elements in the page which have one or several tooltips initialized. If a selector 
		 * is passed, the results will be limited to the descendants of the matched elements.
		 */
		origins(selector?: string | JQuery): HTMLElement[];

		/**
		 * Changes the default options that will apply to any tooltips created from now on.
		 */
		setDefaults(options: ITooltipsterOptions): void;
	}

	interface ITooltipEvent {
		instance: ITooltipsterInstance;
		origin: HTMLElement;
		event: JQueryEventObject;
	}

	interface ITooltipStatus {
		/** if the tooltip has been destroyed */
		destroyed: boolean,
		/** if the tooltip is scheduled for destruction (which means that the tooltip is currently closing and may not be reopened) */
		destroying: boolean,
		/** if the tooltip is enabled */
		enabled: boolean,
		/** if the tooltip is open (either appearing, stable or disappearing) */
		open: boolean,
		/** the state equals one of these four values: */
		state: 'appearing' | 'stable' | 'disappearing' | 'closed'
	}
}

interface JQuery {
	tooltipster: JQueryTooltipster.ITooltipsterJQuery;
}

interface JQueryStatic {
	tooltipster: JQueryTooltipster.ITooltipsterStatic;
}

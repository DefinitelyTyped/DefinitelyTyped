// Type definitions for materialize-css 0.100
// Project: http://materializecss.com/
// Definitions by:  Erik Lieben <https://github.com/eriklieben>
//                  Leon Yu <https://github.com/leonyu>
//                  Sukhdeep Singh <https://github.com/SinghSukhdeep>
//                  Jean-Francois Cere <https://github.com/jfcere>
//                  Sebastien Cote <https://github.com/scote>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery" />
/// <reference types="pickadate" />

declare namespace Materialize {
	/**
	 * The collapsible options
	 */
	interface CollapsibleOptions {
		/**
		 * A setting that changes the collapsible behavior to expandable instead of the default accordion style
		 */
		accordion?: boolean;

		/**
		 * Callback for Collapsible section close.
		 * @default `function() { alert('Closed'); }`
		 */
		onClose?: Function;

		/**
		 * Callback for Collapsible section open.
		 * @default `function() { alert('Opened'); }`
		 */
		onOpen?: Function;
	}

	interface TooltipOptions {
		/**
		 * The delay before the tooltip shows (in milliseconds)
		 */
		delay: number;
		/**
		 * Tooltip text. Can use custom HTML if you set the html option
		 */
		tooltip?: string;
		/**
		 * Set the direction of the tooltip. 'top', 'right', 'bottom', 'left'.
		 *
		 * @default `'bottom'`
		 */
		position?: string;
		/**
		 * Allow custom html inside the tooltip.
		 *
		 * @default `false`
		 */
		html?: boolean;
	}

	/**
	 * The dropdown options
	 */
	interface DropDownOptions {
		/**
		 * The duration of the transition enter in milliseconds.
		 * @default `300`
		 */
		inDuration?: number;

		/**
		 * The duration of the transition out in milliseconds.
		 * @default `225`
		 */
		outDuration?: number;

		/**
		 * If true, constrainWidth to the size of the dropdown activator.
		 * @default `true`
		 */
		constrainWidth?: boolean;
		/**
		 * If true, the dropdown will open on hover.
		 * @default `false`
		 */
		hover?: boolean;

		/**
		 * This defines the spacing from the aligned edge.
		 * @default `0`
		 */
		gutter?: number;

		/**
		 * If true, the dropdown will show below the activator.
		 * @default `false`
		 */
		belowOrigin?: boolean;

		/**
		 * Defines the edge the menu is aligned to.
		 * @default `'left'`
		 */
		alignment?: string;
		/**
		 * If true, stops the event propagating from the dropdown origin click handler.
		 *
		 * @default `false`
		 */
		stopPropagation?: boolean;
	}

	/**
	 * The slider options
	 */
	interface SliderOptions {
		/**
		 * Set to false to hide slide indicators.
		 * @default `true`
		 */
		indicators?: boolean;

		/**
		 * Set height of slider.
		 * @default `400`
		 */
		height?: number;

		/**
		 * Set the duration of the transition animation in ms.
		 * @default `500`
		 */
		transition?: number;

		/**
		 * Set the duration between transitions in ms.
		 * @default `6000`
		 */
		interval?: number;
	}

	/**
	 * The carousel options
	 */
	interface CarouselOptions {
		/**
		 * Transition duration in milliseconds
		 * @default `200`
		 */
		duration?: number;

		/**
		 * Perspective zoom. If 0, all items are the same size.
		 * @default `-100`
		 */
		dist?: number;

		/**
		 * Set the duration of the transition animation in ms.
		 * @default `500`
		 */
		shift?: number;

		/**
		 * Set the duration between transitions in ms.
		 * @default `6000`
		 */
		padding?: number;

		/**
		 * Set the width of the carousel.
		 * @default `false`
		 */
		fullWidth?: boolean;
		/**
		 * Set to true to show indicators.
		 *
		 * @default `false`
		 */
		indicators?: boolean;
		/**
		 * Don't wrap around and cycle through items.
		 *
		 * @default `false`
		 */
		noWrap?: boolean;
	}

	/**
	 * The modal options
	 */
	interface ModalOptions {
		/**
		 * Modal can be dismissed by clicking outside of the modal.
		 * @default `true`
		 */
		dismissible?: boolean;

		/**
		 * Opacity of modal background.
		 * @default `.5`
		 */
		opacity?: number;

		/**
		 * Transition in duration.
		 * @default `300`
		 */
		inDuration?: number;

		/**
		 * Transition out duration.
		 * @default `200`
		 */
		outDuration?: number;
		/**
		 * Starting top style attribute
		 * @default `4%`
		 */
		startingTop?: string;
		/**
		 * Ending top style attribute
		 * @default `10%`
		 */
		endingTop?: string;

		/**
		 * Callback for Modal open.
		 * @default `function() { alert('Ready'); }`
		 */
		ready?: Function;

		/**
		 * Callback for Modal close.
		 * @default `function() { alert('Closed'); }`
		 */
		complete?: Function;
	}

	/**
	 * The push pin options
	 */
	interface PushpinOptions {
		/**
		 * The distance in pixels from the top of the page where the element becomes fixed.
		 * @default `0`
		 */
		top?: number;

		/**
		 * The distance in pixels from the top of the page where the elements stops being fixed.
		 * @default `Infinity`
		 */
		bottom?: number;

		/**
		 * The offset from the top the element will be fixed at.
		 * @default `0`
		 */
		offset?: number;
	}

	/**
	 * The scroll spy options
	 */
	interface ScrollSpyOptions {
		/**
		 * Offset from top.
		 * @default `200`
		 */
		scrollOffset?: number;
		/**
		 * Class name to be added to the active link.
		 * @default `active`
		 */
		activeClass?: string;
		/**
		 * Function that returns a selector to add activeClass to. The parameter is the section id
		 */
		getActiveElement?: Function;
	}

	/**
	 * The slideNav options
	 */
	interface SideNavOptions {
		/**
		 * The sideNav width.
		 * @default `240`
		 */
		menuWidth?: number;

		/**
		 * The horizontal origin.
		 * @default `'left'`
		 */
		edge?: string;

		/**
		 * Closes sideNav on <a> clicks, useful for Angular/Meteor.
		 * @default `false`
		 */
		closeOnClick?: boolean;

		/**
		 * Choose whether you can drag to open on touch screens.
		 * @default `true`
		 */
		draggable?: boolean;

		/**
		 * Execute a callback function when sideNav is opened.
		 *
		 * The callback provides a parameter which refers to the sideNav being opened.
		 */
		onOpen?: Function;

		/**
		 * Execute a callback function when sideNav is closed.
		 *
		 * The callback provides a parameter which refers to the sideNav being closed.
		 */
		onClose?: Function;
	}

	interface ScrollFireOptions {
		/**
		 * The selector for the element that is being tracked.
		 */
		selector?: string;

		/**
		 * Offset to use when activating the scroll fire event
		 * If this is 0, the callback will be fired when the selector element is at the very bottom of the user's window.
		 */
		offset?: number;

		/**
		 * The string function call that you want to make when the user scrolls to the threshold.
		 * It will only be called once.
		 * Example: 'console.log("hello, world!")';
		 * or callback: () => { console.log('hello world'); }
		 */
		callback?: string | (() => void);
	}

	interface TabOptions {
		/**
		 * Execute a callback function when the tab is changed.
		 *
		 * The callback provides a parameter which refers to the current tab being shown.
		 */
		onShow?: Function;

		/**
		 * Set to true to enable swipeable tabs. This also uses the responsiveThreshold option.
		 *
		 * @default `false`
		 */
		swipeable?: boolean;

		/**
		 * The maximum width of the screen, in pixels, where the swipeable functionality initializes.
		 *
		 * @default `Infinity`
		 */
		responsiveThreshold?: number;
	}

	interface ChipDataObject {
		tag: string;
		image?: string;
		id?: number;
	}

	interface ChipOptions {
		/**
		 * Set the chip data
		 */
		data?: ChipDataObject[];
		/**
		 * Set first placeholder when there are no tags
		 */
		placeholder?: string;
		/**
		 * Set second placeholder when adding additional tags.
		 */
		secondaryPlaceholder?: string;
		/**
		 * Set autocomplete data.
		 */
		autocompleteData?: any;
		/**
		 * Set autocomplete limit.
		 */
		autocompleteLimit?: number;
		/**
		 * Set autocompleteOptions
		 */
		autocompleteOptions?: AutoCompleteOptions;
	}

	interface AutoCompleteOptions {
		/**
		 * The JSON object data to be used for the autocomplete suggetions list
		 */
		data: object;
		/**
		 * The max amount of results that can be shown at once.
		 * @default `Infinity`
		 */
		limit?: number;
		/**
		 * Callback function when value is autcompleted.
		 */
		onAutocomplete?: (val: any) => void;
		/**
		 * The minimum length of the input for the autocomplete to start.
		 * @default `1`
		 */
		minLength?: number;
	}

	interface Toast {
		/**
		 * Dismiss all toasts
		 */
		removeAll: Function;
	}

	/**
	 * The Materialize object
	 */
	interface Materialize {
		/**
		 * Displays a toast message on screen
		 *
		 * @param string | JQuery message The message to display on screen
		 * @param number displayLength The duration in milliseconds to display the message on screen
		 * @param string className The className to use to format the message to display
		 * @param Function completeCallback Callback function to call when the messages completes/hides.
		 */
		toast(message: string | JQuery, displayLength: number, className?: string, completeCallback?: Function): void;

		/**
		 * Fires an event when the page is scrolled to a certain area
		 *
		 * @param ScrollFireOptions options optional parameter with scroll fire options
		 */
		scrollFire(options?: ScrollFireOptions[]): void;

		/**
		 * A staggered reveal effect for any UL Tag with list items
		 *
		 * @param string selector the selector for the list to show in staggered fasion
		 */
		showStaggeredList(selector: string): void;

		/**
		 * Fade in images. It also animates grayscale and brightness to give it a unique effect.
		 *
		 * @param string selector the selector for the image to fade in
		 */
		fadeInImage(selector: string): void;

		/**
		 * Update all text field to reinitialize all the Materialize labels on the page if dynamically adding inputs
		 */
		updateTextFields(): void;

		/**
		 * Toast functions
		 */
		Toast: Toast;
	}
}

/**
 * Declare Pickadate namespace again in order to add more Materialize specific properties to TimeOptions interface
 *
 * @see http://www.typescriptlang.org/docs/handbook/declaration-merging.html
 */
declare namespace Pickadate {
	interface TimeOptions {
		/**
		 * Set default time such as : 'now', '1:30AM', '16:30'.
		 * @default `'now'`
		 */
		default?: string;
		/**
		 * set default time to * milliseconds from now (using with default = 'now')
		 * @default `0`
		 */
		fromnow?: number;
		/**
		 * Use AM/PM or 24-hour format
		 * @default `false`
		 */
		twelvehour?: boolean;
		/**
		 * text for done-button
		 * @default `'OK'`
		 */
		donetext?: string;
		/**
		 * text for clear-button
		 * @default `'Clear'`
		 */
		cleartext?: string;
		/**
		 * Text for cancel-button
		 * @default `'Cancel'`
		 */
		canceltext?: string;
		/**
		 * automatic close timepicker
		 * @default `false`
		 */
		autoclose?: boolean;
		/**
		 * make AM PM clickable
		 * @default `true`
		 */
		ampmclickable?: boolean;
		/**
		 * Function for after opening timepicker
		 */
		aftershow?: Function;
	}
}

declare var Materialize: Materialize.Materialize;

interface JQuery {
	/**
	 * open Fixed Action Button
	 */
	openFAB(): void;
	/**
	 * close Fixed Action Button
	 */
	closeFAB(): void;

	/**
	 * Select allows user input through specified options.
	 *
	 * @param string method "destroy" destroy the material select
	 */
	material_select(method?: string): void;

	/**
	 * Use a character counter in fields where a character restriction is in place.
	 */
	characterCounter(): JQuery;

	/**
	 * Collapsibles are accordion elements that expand when clicked on.
	 * They allow you to hide content that is not immediately relevant to the user.
	 *
	 * @param CollapsibleOptions | string options the collapsible options or the string "destroy" to destroy the collapsible
	 */
	collapsible(options?: Materialize.CollapsibleOptions | string): JQuery;

	/**
	 * Programmatically trigger an event on a selected index
	 *
	 * @param string method the string "open" or "close" to open or to close the collapsible element on specified index
	 * @param number index the element index to trigger "open" or "close" function
	 */
	collapsible(method: string, index: number): JQuery;

	/**
	 * Tooltips are small, interactive, textual hints for mainly graphical elements.
	 * When using icons for actions you can use a tooltip to give people clarification on its function.
	 *
	 * @param TooltipOptions | string options the tooltip options or the string "remove" to remove the tooltip function
	 */
	tooltip(options?: Materialize.TooltipOptions | string): JQuery;

	/**
	 * Add a dropdown list to any button.
	 * Make sure that the data-activates attribute matches the id in the <ul> tag.
	 *
	 * @param DropDownOptions options the drop down options
	 */
	dropdown(options?: Materialize.DropDownOptions): void;

	/**
	 * Material box is a material design implementation of the Lightbox plugin.
	 */
	materialbox(): JQuery;

	/**
	 * slider is a simple and elegant image carousel.
	 * You can also have captions that will be transitioned on their own depending on their alignment.
	 * You can also have indicators that show up on the bottom of the slider.
	 *
	 * @param SliderOptions options the slider options
	 */
	slider(options?: Materialize.SliderOptions): JQuery;

	/**
	 * slider is a simple and elegant image carousel.
	 * You can also have captions that will be transitioned on their own depending on their alignment.
	 * You can also have indicators that show up on the bottom of the slider.
	 *
	 * @param string method the string "start" to start the animation or "pauze" to pauze the animation
	 */
	slider(method: string): JQuery;

	/**
	 * Our slider is a simple and elegant image carousel.
	 * You can also have captions that will be transitioned on their own depending on their alignment.
	 * You can also have indicators that show up on the bottom of the slider.
	 *
	 * @param CarouselOptions options the slider options or the string "start" to start the animation or "pauze" to pauze the animation
	 */
	carousel(options?: Materialize.CarouselOptions): JQuery;

	/**
	 * Our slider is a simple and elegant image carousel.
	 * You can also have captions that will be transitioned on their own depending on their alignment.
	 * You can also have indicators that show up on the bottom of the slider.
	 *
	 * @param string method the methods to pause, start, move to next and move to previous slide.
	 */
	carousel(method: string, count?: number): JQuery;

	/**
	 * Modal for dialog boxes, confirmation messages, or other content that can be called up.
	 *
	 * To customize the behaviour of a modal
	 *
	 * @param ModalOptions options the lean modal options
	 */
	modal(options?: Materialize.ModalOptions): void;

	/**
	 * Modal for dialog boxes, confirmation messages, or other content that can be called up.
	 *
	 * For opening and closing modals programatically.
	 *
	 * @param string action action to do (`open` or `close)
	 */
	modal(action: string, options?: Materialize.ModalOptions): void;

	/**
	 * Parallax is an effect where the background content or image in this case, is moved at a different speed than the foreground content while scrolling.
	 */
	parallax(): JQuery;

	/**
	 * Pushpin is a fixed positioning plugin.
	 *
	 * @param PushpinOptions options the push pin options
	 */
	pushpin(options?: Materialize.PushpinOptions): JQuery;

	/**
	 * Scrollspy is a jQuery plugin that tracks certain elements and which element the user's screen is currently centered on.
	 *
	 * @param ScrollSpyOptions options the scroll spy options
	 */
	scrollSpy(options?: Materialize.ScrollSpyOptions): JQuery;

	/**
	 * A slide out menu. You can add a dropdown to your sidebar by using our collapsible component.
	 *
	 * @param SideNavOptions | string methodOrOptions the slide navigation options or a string with "show" to reveal or "hide" to hide the menu
	 */
	sideNav(methodOrOptions?: Materialize.SideNavOptions | string): void;

	/**
	 * Programmatically trigger the tab change event
	 *
	 * @param string method : the method to call (always "select_tab")
	 * @param string tab : id of the tab to open
	 */
	tabs(method?: string, tab?: string): JQuery;

	/**
	 * Tab Initialization with options
	 *
	 * @param TabOptions options jQuery plugin options
	 */
	tabs(options?: Materialize.TabOptions): JQuery;

	/**
	 * Chip Initialization
	 *
	 * @param ChipOptions options Material chip options
	 */
	material_chip(options?: Materialize.ChipOptions): JQuery;

	/**
	 * To access chip data
	 *
	 * @param string method name of the method to invoke
	 */
	material_chip(method: string): Materialize.ChipDataObject[] | Materialize.ChipDataObject;

	/**
	 * Add an autocomplete dropdown below your input to suggest possible values.
	 * @param autocompleteOptions options : @see autocompleteOptions for possible options
	 */
	autocomplete(options: Materialize.AutoCompleteOptions): JQuery;

	/**
	 * Feature discovery - open and close a tap target
	 * @param string action : either `'open'` or `'close'`
	 */
	tapTarget(action?: string): JQuery;
}

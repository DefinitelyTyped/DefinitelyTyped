// Type definitions for polymer's paper-toast
// Project: https://github.com/Polymer/core-selector
// Definitions by: Louis Grignon <https://github.com/lgrignon>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

///<reference path="polymer.d.ts"/>

declare module PolymerComponents {
	export module Core {
		export interface Overlay extends PolymerElement, HTMLElement {
			/**
			 * The target element that will be shown when the overlay is opened. If unspecified, the core-overlay itself is the target.
			 * default: the overlay element
			 */
			target: Object;

			/**
			 * A core-overlay's size is guaranteed to be constrained to the window size. To achieve this, the sizingElement is sized with a max-height/width. By default this element is the target element, but it can be specifically set to a specific element inside the target if that is more appropriate. This is useful, for example, when a region inside the overlay should scroll if needed.
			 * default: the target element
			 */
			sizingTarget: Object;

			/**
			 * Set opened to true to show an overlay and to false to hide it. A core-overlay may be made initially opened by setting its opened attribute.
			 * default: false
			 */
			opened: boolean;

			/**
			 * If true, the overlay has a backdrop darkening the rest of the screen. The backdrop element is attached to the document body and may be styled with the class core-overlay-backdrop. When opened the core-opened class is applied.
			 * default: false
			 */
			backdrop: boolean;

			/**
			 * If true, the overlay is guaranteed to display above page content.
			 * default: false
			 */
			layered: boolean;

			/**
			 * By default an overlay will close automatically if the user taps outside it or presses the escape key. Disable this behavior by setting the autoCloseDisabled property to true.
			 * default: false
			 */
			autoCloseDisabled: boolean;

			/**
			 * By default an overlay will focus its target or an element inside it with the autoFocus attribute. Disable this behavior by setting the autoFocusDisabled property to true.
			 * default: false
			 */
			autoFocusDisabled: boolean;
	
			/**
			 * This property specifies an attribute on elements that should close the overlay on tap. Should not set closeSelector if this is set.
			 * default: "core-overlay-toggle"
			 */
			closeAttribute: string;
	
			/**
			 * This property specifies a selector matching elements that should close the overlay on tap. Should not set closeAttribute if this is set.
			 * default: ''
			 */
			closeSelector: string;
	
			/**
			 * The transition property specifies a string which identifies a core-transition element that will be used to help the overlay open and close. The default core-transition-fade will cause the overlay to fade in and out.
			 * default: 'core-transition-fade'
			 */
			transition: string;

			/**
			 * Toggle the opened state of the overlay.
			 */
			toggle(): void;

			/**
			 * Open the overlay. This is equivalent to setting the opened property to true.
			 */
			open(): void;
			
			/**
			 * Close the overlay. This is equivalent to setting the opened property to false.
			 */
			close(): void;

			/**
			 * Extensions of core-overlay should implement the resizeHandler method to adjust the size and position of the overlay when the browser window resizes.
			 */
			resizeHandler(): void;
		}
	}
} 
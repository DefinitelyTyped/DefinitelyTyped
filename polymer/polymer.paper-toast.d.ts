// Type definitions for polymer's paper-toast
// Project: https://github.com/Polymer/paper-toast
// Definitions by: Louis Grignon <https://github.com/lgrignon>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

///<reference path="polymer.d.ts"/>

declare module PolymerComponents {
	export module Paper {
		export interface Toast extends PolymerElement, HTMLElement {
			/**
			 * The text shows in a toast.
			 * default: ''
			 */
			text: string;
			
			/**
			 * The duration in milliseconds to show the toast.
			 * default: 3000
			 */
			duration: number;
			
			/**
			 * Set opened to true to show the toast and to false to hide it.
			 * default: false
			 */
			opened: boolean;
			
			/**
			 * Min-width when the toast changes to narrow layout. In narrow layout, the toast fits at the bottom of the screen when opened.
			 * default: '480px'
			 */
			responsiveWidth: string;
			
			/**
			 * If true, the toast can't be swiped.
			 * default: false
			 */
			swipeDisabled: boolean;
			
			/**
			 * By default, the toast will close automatically if the user taps outside it or presses the escape key. Disable this behavior by setting the autoCloseDisabled property to true.
			 * default: false
			 */
			autoCloseDisabled: boolean;
			
			/**
			 * Show the toast for the specified duration
			 */
			show(): void;
			
			/**
			 * Dismiss the toast and hide it.
			 */
			dismiss(): void;
			
			/**
			 * Toggle the opened state of the toast.
			 */
			toggle(): void;
		}
	}
} 
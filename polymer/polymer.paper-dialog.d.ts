// Type definitions for polymer's paper-dialog
// Project: https://github.com/Polymer/paper-dialog
// Definitions by: Louis Grignon <https://github.com/lgrignon>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

///<reference path="polymer.d.ts"/>
///<reference path="polymer.core-overlay.d.ts"/>

declare module PolymerComponents {
	export module Paper {
		export interface Dialog extends PolymerComponents.Core.Overlay, HTMLElement {
			/**
			 * The title of the dialog.
			 * default: ''
			 */
			heading: string;
			
			/**
			 * See paper-dialog-transition
			 * default: ''
			 */
			transition: string;
			
			/**
			 * default: true
			 */
			layered: boolean;
		}
	}
} 
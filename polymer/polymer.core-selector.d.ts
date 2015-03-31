// Type definitions for polymer's paper-toast
// Project: https://github.com/Polymer/core-selector
// Definitions by: Louis Grignon <https://github.com/lgrignon>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module PolymerComponents {
	export module Core {
		export interface Selector extends PolymerElement, HTMLElement {
		}

		export interface SelectorOnSelectEvent extends Event {
			detail: {
				item: HTMLElement;
				isSelected: boolean;
			};
		}
	}
} 
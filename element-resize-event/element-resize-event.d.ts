// Type definitions for element-resize-event 1.0.1
// Project: https://github.com/KyleAMathews/element-resize-event
// Definitions by: Rogier Schouten <https://github.com/rogierschouten>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module "element-resize-event" {
	function elementResizeEvent(domNode: Element, callback: () => void): void;
	export = elementResizeEvent;
}

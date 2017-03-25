// Type definitions for svgjs.resize
// Project: http://www.svgjs.com/
// Definitions by: Kevin Gutiérrez <https://github.com/jkevingutierrez>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Reference: https://github.com/Fuzzyma/svg.resize.js


declare namespace svgjs {
	export interface Element {
		selectize(): Element
		selectize(obj: Object): Element
		resize(): Element
		resize(obj: Object): Element
	}
}

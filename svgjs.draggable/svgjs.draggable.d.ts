// Type definitions for svgjs.draggable
// Project: http://www.svgjs.com/
// Definitions by: Luigi Trabacchin <https://github.com/LiFeleSs>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


declare namespace svgjs {
	export module draggable {
		export interface DragDelta {
			x: number
			y: number
			zoom: number
		}
	}

	export interface Element {
		draggable(): this
		draggable(obj: Object): this
		fixed(): this
		beforedrag: (event: MouseEvent) => any
		dragstart: (delta: draggable.DragDelta, event: MouseEvent) => any
		dragmove: (delta: draggable.DragDelta, event: MouseEvent) => any
		dragend: (delta: draggable.DragDelta, event: MouseEvent) => any

	}
}

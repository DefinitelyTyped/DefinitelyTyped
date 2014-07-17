// Type definitions for svgjs.draggable
// Project: http://www.svgjs.com/
// Definitions by: Luigi Trabacchin <https://github.com/LiFeleSs>
// Definitions: https://github.com/borisyankov/DefinitelyTyped


declare module svgjs {
	export module draggable {
		export interface DragDelta {
			x: number
			y: number
			zoom: number
		}
	}

	export interface Element {
		draggable(): Element
		draggable(obj: Object):Element
		fixed(): Element
		beforedrag: (event: MouseEvent) => any
		dragstart: (delta: draggable.DragDelta, event: MouseEvent) => any
		dragmove: (delta: draggable.DragDelta, event: MouseEvent) => any
		dragend: (delta: draggable.DragDelta, event: MouseEvent) => any

	}
}

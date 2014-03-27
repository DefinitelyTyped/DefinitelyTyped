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
		beforedrag: (e) => any
		dragstart: (delta: draggable.DragDelta, e) => any
		dragmove: (delta: draggable.DragDelta, e) => any
		dragend: (delta: draggable.DragDelta, e) => any

	}
}

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

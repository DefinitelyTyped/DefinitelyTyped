declare namespace svgjs {
    export namespace draggable {
        export interface DragDelta {
            x: number;
            y: number;
            zoom: number;
        }
    }

    export interface Element {
        draggable(): this;
        draggable(obj: Object): this;
        fixed(): this;
        beforedrag: (event: MouseEvent) => any;
        dragstart: (delta: draggable.DragDelta, event: MouseEvent) => any;
        dragmove: (delta: draggable.DragDelta, event: MouseEvent) => any;
        dragend: (delta: draggable.DragDelta, event: MouseEvent) => any;
    }
}

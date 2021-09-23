import { ComponentType, DragEventHandler, ReactNode } from 'react';

declare namespace Draggable {
    interface Props {
        /**
         * The HTML id of the element to clone on drag.
         */
        elementId: string;
        /**
         * Arbitrary data object attached to the drag and drop event.
         */
        transferData: any;
        /**
         * A function to be called when dragging starts.
         */
        onDragStart?(): void;
        /**
         * A function to be called when dragging ends.
         */
        onDragEnd?(): void;
        /**
         * Render prop providing `onDragStart` and `onDragEnd` for the
         * draggable element.
         */
        children(props: { onDraggableStart: DragEventHandler; onDraggableEnd: DragEventHandler }): ReactNode;
    }
}
declare const Draggable: ComponentType<Draggable.Props>;

export default Draggable;

declare namespace OO.ui.mixin {
    /**
     * DraggableGroupElement is a mixin class used to create a group element to
     * contain draggable elements, which are items that can be clicked and dragged by a mouse.
     * The class is used with {@link OO.ui.mixin.DraggableElement}.
     *
     * ResourceLoader module: `oojs-ui-widgets`
     *
     * https://doc.wikimedia.org/oojs-ui/master/js/#!/api/OO.ui.mixin.DraggableGroupElement
     */
    interface DraggableGroupElement extends DraggableGroupElement.Prototype, DraggableGroupElement.Props {}

    namespace DraggableGroupElement {
        interface EventMap extends GroupElement.EventMap {
            drag: [item: DraggableElement, newIndex?: number];
            reorder: [item: DraggableElement, newIndex?: number];
            draggable: [draggable?: boolean];
        }

        interface ConfigOptions extends GroupElement.ConfigOptions {
            items?: DraggableElement[];

            /**
             * Item orientation: 'horizontal' or 'vertical'.
             * The orientation should match the layout of the items. Items displayed in a single row
             * or in several rows should use horizontal orientation. The vertical orientation should
             * only be used when the items are displayed in a single column.
             */
            orientation?: "horizontal" | "vertical";

            /**
             * The items are draggable. This can change with
             * {@link DraggableGroupElement.toggleDraggable toggleDraggable}
             */
            draggable?: boolean;
        }

        type Props = GroupElement.Props;

        interface Prototype extends GroupElement.Prototype {
            /**
             * Change the draggable state of this widget.
             * This allows users to temporarily halt the dragging operations.
             *
             * @param isDraggable Widget supports draggable operations
             */
            toggleDraggable(isDraggable: boolean): void;

            /**
             * Check the draggable state of this widget
             *
             * @return Widget supports draggable operations
             */
            isDraggable(): boolean;

            /**
             * Update the index properties of the items
             */
            updateIndexes(): void;

            /**
             * Reorder the items in the group
             *
             * @param item Reordered item
             * @param newIndex New index
             */
            reorder(item: DraggableElement, newIndex: number): void;

            /**
             * Set a dragged item
             *
             * @param item Dragged item
             */
            setDragItem(item: DraggableElement): void;

            /**
             * Unset the current dragged item
             */
            unsetDragItem(): void;

            /**
             * Get the item that is currently being dragged.
             *
             * @return The currently dragged item, or `null` if no item is being dragged
             */
            getDragItem(): DraggableElement | null;
        }

        interface Constructor {
            /** @param config Configuration options */
            new(config?: ConfigOptions): DraggableGroupElement;
            prototype: Prototype;
            static: {};
        }
    }

    const DraggableGroupElement: DraggableGroupElement.Constructor;
}

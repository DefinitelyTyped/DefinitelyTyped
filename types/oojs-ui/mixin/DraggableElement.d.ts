declare namespace OO.ui.mixin {
    /**
     * DraggableElement is a mixin class used to create elements that can be clicked
     * and dragged by a mouse to a new position within a group. This class must be used
     * in conjunction with {@link OO.ui.mixin.DraggableGroupElement}, which provides a container for
     * the draggable elements.
     *
     * ResourceLoader module: `oojs-ui-widgets`
     *
     * @see https://doc.wikimedia.org/oojs-ui/master/js/#!/api/OO.ui.mixin.DraggableElement
     */
    interface DraggableElement extends DraggableElement.Props, DraggableElement.Prototype {}

    namespace DraggableElement {
        interface EventMap {
            dragstart: [item: DraggableElement];
            dragend: [];
            drop: [];
        }

        interface ConfigOptions {
            /** The part of the element which can be used for dragging, defaults to the whole element */
            $handle?: JQuery;

            /**
             * The items are draggable. This can change with {@link DraggableElement.toggleDraggable toggleDraggable}
             * but the draggable state should be called from the {@link DraggableGroupElement},
             * which updates the whole group
             */
            draggable?: boolean;
        }

        interface Static {
            /**
             * Cancel mouse down events.
             *
             * This property is usually set to `true` to prevent the focus from changing when the
             * button is clicked.
             * Classes such as {@link OO.ui.mixin.DraggableElement DraggableElement} and
             * {@link OO.ui.ButtonOptionWidget ButtonOptionWidget} use a value of `false` so that
             * dragging behavior is possible and mousedown events can be handled by a parent widget.
             */
            cancelButtonMouseDownEvents: boolean;
        }

        interface Props {
            $handle: JQuery;
        }

        interface Prototype {
            /**
             * Change the draggable state of this widget.
             * This allows users to temporarily halt the dragging operations.
             *
             * @param isDraggable Widget supports draggable operations
             */
            toggleDraggable(isDraggable: boolean): void;

            /**
             * Check the draggable state of this widget.
             *
             * @return Widget supports draggable operations
             */
            isDraggable(): boolean;
        }

        interface Constructor {
            /** @param config Configuration options */
            new(config?: ConfigOptions): DraggableElement;
            prototype: Prototype;
            static: Static;
        }
    }

    const DraggableElement: DraggableElement.Constructor;
}

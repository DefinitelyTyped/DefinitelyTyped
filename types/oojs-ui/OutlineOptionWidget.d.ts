declare namespace OO.ui {
    /**
     * OutlineOptionWidget is an item in an {@link OO.ui.OutlineSelectWidget OutlineSelectWidget}.
     *
     * Currently, this class is only used by {@link OO.ui.BookletLayout booklet layouts}, which
     * contain {@link OO.ui.PageLayout page layouts}. See {@link OO.ui.BookletLayout BookletLayout}
     * for an example.
     *
     * ResourceLoader module: `oojs-ui-widgets`
     *
     * @see https://doc.wikimedia.org/oojs-ui/master/js/#!/api/OO.ui.OutlineOptionWidget
     */
    interface OutlineOptionWidget extends OutlineOptionWidget.Props, OutlineOptionWidget.Prototype {}

    namespace OutlineOptionWidget {
        interface ConfigOptions extends DecoratedOptionWidget.ConfigOptions {
            /** Indentation level */
            level?: number;
            /** Allow modification from {@link OO.ui.OutlineControlsWidget outline controls}. */
            movable?: boolean;

            removable?: boolean;
        }

        interface Static extends DecoratedOptionWidget.Static {
            levelClass: string;

            levels: number;
        }

        type Props = DecoratedOptionWidget.Props;

        interface Prototype extends DecoratedOptionWidget.Prototype {
            /**
             * Check if item is movable.
             *
             * Movability is used by {@link OO.ui.OutlineControlsWidget outline controls}.
             *
             * @return Item is movable
             */
            isMovable(): boolean;

            /**
             * Check if item is removable.
             *
             * Removability is used by {@link OO.ui.OutlineControlsWidget outline controls}.
             *
             * @return Item is removable
             */
            isRemovable(): boolean;

            /**
             * Get indentation level.
             *
             * @return Indentation level
             */
            getLevel(): number;

            /**
             * Set movability.
             *
             * Movability is used by {@link OO.ui.OutlineControlsWidget outline controls}.
             *
             * @param movable Item is movable
             * @return The widget, for chaining
             */
            setMovable(movable: boolean): this;

            /**
             * Set removability.
             *
             * Removability is used by {@link OO.ui.OutlineControlsWidget outline controls}.
             *
             * @param removable Item is removable
             * @return The widget, for chaining
             */
            setRemovable(removable: boolean): this;

            /**
             * Set indentation level.
             *
             * @param level Indentation level, in the range of [0, maxLevel]
             * @return The widget, for chaining
             */
            setLevel(level?: number): this;
        }

        interface Constructor {
            /** @param config Configuration options */
            new(config?: ConfigOptions): OutlineOptionWidget;
            prototype: Prototype;
            static: Static;
            super: DecoratedOptionWidget.Constructor;
            /** @deprecated Use `super` instead */
            parent: DecoratedOptionWidget.Constructor;
        }
    }

    const OutlineOptionWidget: OutlineOptionWidget.Constructor;
}

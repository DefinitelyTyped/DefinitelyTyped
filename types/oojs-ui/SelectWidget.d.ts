declare namespace OO.ui {
    /**
     * A SelectWidget is of a generic selection of options. The OOUI library contains several types
     * of select widgets, including {@link OO.ui.ButtonSelectWidget button selects},
     * {@link OO.ui.RadioSelectWidget radio selects}, and {@link OO.ui.MenuSelectWidget
     * menu selects}.
     *
     * This class should be used together with OO.ui.OptionWidget or OO.ui.DecoratedOptionWidget. For
     * more information, please see the [OOUI documentation on MediaWiki](https://www.mediawiki.org/wiki/OOUI/Widgets/Selects_and_Options).
     *
     *     // A select widget with three options.
     *     var select = new OO.ui.SelectWidget( {
     *         items: [
     *             new OO.ui.OptionWidget( {
     *                 data: 'a',
     *                 label: 'Option One',
     *             } ),
     *             new OO.ui.OptionWidget( {
     *                 data: 'b',
     *                 label: 'Option Two',
     *             } ),
     *             new OO.ui.OptionWidget( {
     *                 data: 'c',
     *                 label: 'Option Three',
     *             } )
     *         ]
     *     } );
     *     $( document.body ).append( select.$element );
     *
     * ResourceLoader module: `oojs-ui-core`
     *
     * @see https://doc.wikimedia.org/oojs-ui/master/js/#!/api/OO.ui.SelectWidget
     */
    interface SelectWidget extends SelectWidget.Props, SelectWidget.Prototype {}

    namespace SelectWidget {
        // HACK: Copy properties of mixin.GroupElement.EventMap instead of extending
        // SelectWidget arguments the params of EmitterList's 'add' and 'remove' events in a way not
        // allowed in TypeScript, so we need to omit them from GroupElement.EventMap which extends
        // EmitterListEventMap. Unfortunately, doing such will result in a TS2430 error on
        // SelectWidget.Prototype, and by copy-pasting properties this problem is solved.
        interface EventMap extends Widget.EventMap {
            highlight: [item: OptionWidget | null];
            press: [item: OptionWidget | null];
            select: [items: OptionWidget[] | OptionWidget | null];
            choose: [item: OptionWidget, selected: boolean];
            add: [items: OptionWidget[] | OptionWidget, index: number];
            remove: [items: OptionWidget[] | OptionWidget, index: number];

            // Omit<mixin.GroupElement.EventMap, 'add' | 'remove' >
            change: [items: Element[]];
            clear: [];
            move: [item: EventEmitter, index: number, oldIndex: number];
        }

        interface ConfigOptions extends Widget.ConfigOptions, mixin.GroupElement.ConfigOptions {
            /**
             * An array of options to add to the select.
             * Options are created with {@link OO.ui.OptionWidget OptionWidget} classes. See
             * the [OOUI documentation on MediaWiki](https://www.mediawiki.org/wiki/OOUI/Widgets/Selects_and_Options)
             * for examples.
             */
            items?: OptionWidget[];

            /** Allow for multiple selections */
            multiselect?: boolean;
        }

        interface Static extends Widget.Static {
            /**
             * Whether this widget will respond to the navigation keys Home, End, PageUp, PageDown.
             */
            handleNavigationKeys: boolean;

            /**
             * Whether selecting items using arrow keys or navigation keys in this widget will wrap
             * around after the user reaches the beginning or end of the list.
             */
            listWrapsAround: boolean;

            /**
             * Normalize text for filter matching
             *
             * @param text Text
             * @return Normalized text
             */
            normalizeForMatching(text: string): string;
        }

        interface Props extends Widget.Props, mixin.GroupElement.Props {
            $focusOwner: JQuery;
        }

        interface Prototype extends Widget.Prototype, mixin.GroupElement.Prototype {
            /**
             * Scroll item into view, preventing spurious mouse highlight actions from happening.
             *
             * @param item Item to scroll into view
             */
            scrollItemIntoView(item: OptionWidget): void;

            /**
             * @return The first (of possibly many) selected item, if any
             */
            findFirstSelectedItem(): OptionWidget | null;

            /**
             * Find all selected items, if there are any. If the widget allows for multiselect
             * it will return an array of selected options. If the widget doesn't allow for
             * multiselect, it will return the selected option or null if no item is selected.
             *
             * @return If the widget is multiselect
             *  then return an array of selected items (or empty array),
             *  if the widget is not multiselect, return a single selected item, or `null`
             *  if no item is selected
             */
            findSelectedItems(): OptionWidget[] | OptionWidget | null;

            /**
             * Find selected item.
             *
             * @return If the widget is multiselect
             *  then return an array of selected items (or empty array),
             *  if the widget is not multiselect, return a single selected item, or `null`
             *  if no item is selected
             */
            findSelectedItem(): OptionWidget[] | OptionWidget | null;

            /**
             * Find highlighted item.
             *
             * @return Highlighted item, `null` if no item is highlighted
             */
            findHighlightedItem(): OptionWidget | null;

            /**
             * Toggle pressed state.
             *
             * Press is a state that occurs when a user mouses down on an item, but
             * has not yet let go of the mouse. The item may appear selected, but it will not be
             * selected until the user releases the mouse.
             *
             * @param pressed An option is being pressed
             */
            togglePressed(pressed: boolean): void;

            /**
             * Highlight an option. If the `item` param is omitted, no options will be highlighted
             * and any existing highlight will be removed. The highlight is mutually exclusive.
             *
             * @param item Item to highlight, omit for no highlight
             * @return The widget, for chaining
             */
            highlightItem(item?: OptionWidget): this;

            /**
             * Fetch an item by its label.
             *
             * @param label Label of the item to select.
             * @param prefix Allow a prefix match, if only a single item matches
             * @return Item with equivalent label, `null` if none exists
             */
            getItemFromLabel(label: string, prefix?: boolean): Element | null;

            /**
             * Programmatically select an option by its label. If the item does not exist,
             * all options will be deselected.
             *
             * @param label Label of the item to select.
             * @param prefix Allow a prefix match, if only a single item matches
             * @return The widget, for chaining
             */
            selectItemByLabel(label?: string, prefix?: boolean): this;

            /**
             * Programmatically select an option by its data. If the `data` parameter is omitted,
             * or if the item does not exist, all options will be deselected.
             *
             * @param data Value of the item to select, omit to deselect all
             * @return The widget, for chaining
             */
            selectItemByData(data?: any): this;

            /**
             * Programmatically unselect an option by its reference. If the widget
             * allows for multiple selections, there may be other items still selected;
             * otherwise, no items will be selected.
             * If no item is given, all selected items will be unselected.
             *
             * @param unselectedItem Item to unselect
             * @return The widget, for chaining
             */
            unselectItem(unselectedItem?: OptionWidget): this;

            /**
             * Programmatically select an option by its reference. If the `item` parameter is
             * omitted, all options will be deselected.
             *
             * @param item Item to select, omit to deselect all
             * @return The widget, for chaining
             */
            selectItem(item?: OptionWidget): this;

            /**
             * Press an item.
             *
             * Press is a state that occurs when a user mouses down on an item, but has not
             * yet let go of the mouse. The item may appear selected, but it will not be selected
             * until the user releases the mouse.
             *
             * @param item Item to press, omit to depress all
             * @return The widget, for chaining
             */
            pressItem(item?: OptionWidget): this;

            /**
             * Choose an item.
             *
             * Note that ‘choose’ should never be modified programmatically. A user can choose
             * an option with the keyboard or mouse and it becomes selected. To select an item
             * programmatically, use the {@link selectItem} method.
             *
             * This method is identical to {@link selectItem}, but may vary in subclasses that take
             * additional action when users choose an item with the keyboard or mouse.
             *
             * @param item Item to choose
             * @return The widget, for chaining
             */
            chooseItem(item: OptionWidget): this;

            /**
             * Find an option by its position relative to the specified item (or to the start of the option
             * array, if item is `null`). The direction and distance in which to search through the option array
             * is specified with a number: e.g. -1 for the previous item (the default) or 1 for the next item,
             * or 15 for the 15th next item, etc. The method will return an option, or `null` if there are no
             * options in the array.
             *
             * @param item Item to describe the start position, or `null` to start at
             *  the beginning of the array.
             * @param offset Relative position: negative to move backward, positive to move forward
             * @param filter Only consider items for which this function returns
             *  true. Function takes an OO.ui.OptionWidget and returns a boolean.
             * @param wrap Do not wrap around after reaching the last or first item
             * @return Item at position, `null` if there are no items in the select
             */
            findRelativeSelectableItem(
                item: OptionWidget | null,
                offset: number,
                filter?: (item: OptionWidget) => boolean,
                wrap?: boolean,
            ): OptionWidget | null;

            /**
             * Find the next selectable item or `null` if there are no selectable items.
             * Disabled options and menu-section markers and breaks are not selectable.
             *
             * @return Item, `null` if there aren't any selectable items
             */
            findFirstSelectableItem(): OptionWidget | null;

            /**
             * Add an array of options to the select. Optionally, an index number can be used to
             * specify an insertion point.
             *
             * @param items Options to add
             * @param index Index to insert items aft
             * @return The widget, for chaining
             */
            addItems(items: OptionWidget[], index?: number): this;

            /**
             * Remove the specified array of options from the select. Options will be detached
             * from the DOM, not removed, so they can be reused later. To remove all options from
             * the select, you may wish to use the {@link clearItems} method instead.
             *
             * @param items Items to remove
             * @return The widget, for chaining
             */
            removeItems(items: OptionWidget[]): this;

            /**
             * Clear all options from the select. Options will be detached from the DOM, not removed,
             * so that they can be reused later. To remove a subset of options from the select, use
             * the {@link removeItems} method.
             *
             * @return The widget, for chaining
             */
            clearItems(): this;

            // #region EventEmitter overloads
            on<K extends keyof EventMap, A extends ArgTuple = [], C = null>(
                event: K,
                method: EventHandler<C, (this: C, ...args: [...A, ...EventMap[K]]) => void>,
                args?: A,
                context?: C,
            ): this;
            on<K extends string, C = null>(
                event: K extends keyof EventMap ? never : K,
                method: EventHandler<C>,
                args?: any[],
                context?: C,
            ): this;

            once<K extends keyof EventMap>(event: K, listener: (this: null, ...args: EventMap[K]) => void): this;
            once<K extends string>(
                event: K extends keyof EventMap ? never : K,
                listener: (this: null, ...args: any[]) => void,
            ): this;

            off<K extends keyof EventMap, C = null>(
                event: K,
                method?: EventHandler<C, (this: C, ...args: EventMap[K]) => void>,
                context?: C,
            ): this;
            off<K extends string, C = null>(
                event: K extends keyof EventMap ? never : K,
                method?: EventHandler<C>,
                context?: C,
            ): this;

            emit<K extends keyof EventMap>(event: K, ...args: EventMap[K]): boolean;
            emit<K extends string>(event: K extends keyof EventMap ? never : K, ...args: any[]): boolean;

            emitThrow<K extends keyof EventMap>(event: K, ...args: EventMap[K]): boolean;
            emitThrow<K extends string>(event: K extends keyof EventMap ? never : K, ...args: any[]): boolean;

            connect<T extends Partial<Record<keyof EventMap, any>>, C>( // eslint-disable-line @definitelytyped/no-unnecessary-generics
                context: C,
                methods: EventConnectionMap<T, C, EventMap>,
            ): this;

            disconnect<T extends Partial<Record<keyof EventMap, any>>, C>( // eslint-disable-line @definitelytyped/no-unnecessary-generics
                context: C,
                methods?: EventConnectionMap<T, C, EventMap>,
            ): this;
            // #endregion
        }

        interface Constructor {
            /** @param config Configuration options */
            new(config?: ConfigOptions): SelectWidget;
            prototype: Prototype;
            static: Static;
            super: Widget.Constructor;
            /** @deprecated Use `super` instead */
            parent: Widget.Constructor;
        }
    }

    const SelectWidget: SelectWidget.Constructor;
}

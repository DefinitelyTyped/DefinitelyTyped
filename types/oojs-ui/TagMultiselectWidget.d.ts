declare namespace OO.ui {
    /**
     * A basic tag multiselect widget, similar in concept to
     * {@link OO.ui.ComboBoxInputWidget combo box widget} that allows the user to add multiple values
     * that are displayed in a tag area.
     *
     * This widget is a base widget; see {@link OO.ui.MenuTagMultiselectWidget MenuTagMultiselectWidget}
     * and {@link OO.ui.PopupTagMultiselectWidget PopupTagMultiselectWidget} for the implementations
     * that use a menu and a popup respectively.
     *
     *     // A TagMultiselectWidget.
     *     var widget = new OO.ui.TagMultiselectWidget( {
     *         inputPosition: 'outline',
     *         allowedValues: [ 'Option 1', 'Option 2', 'Option 3' ],
     *         selected: [ 'Option 1' ]
     *     } );
     *     $( document.body ).append( widget.$element );
     *
     * ResourceLoader module: `oojs-ui-widgets`
     *
     * @see https://doc.wikimedia.org/oojs-ui/master/js/#!/api/OO.ui.TagMultiselectWidget
     */
    interface TagMultiselectWidget extends TagMultiselectWidget.Props, TagMultiselectWidget.Prototype {}

    namespace TagMultiselectWidget {
        type Direction = "forwards" | "backwards";

        interface TagInfo {
            data: string;
            label: string;
        }

        interface ValueMap {
            data: any;
            label: string;
        }

        interface EventMap
            extends
                Widget.EventMap,
                mixin.GroupElement.EventMap,
                mixin.DraggableGroupElement.EventMap,
                mixin.FlaggedElement.EventMap
        {}

        interface ConfigOptions
            extends
                Widget.ConfigOptions,
                mixin.GroupElement.ConfigOptions,
                mixin.DraggableGroupElement.ConfigOptions,
                mixin.IndicatorElement.ConfigOptions,
                mixin.IconElement.ConfigOptions,
                mixin.TabIndexedElement.ConfigOptions,
                mixin.FlaggedElement.ConfigOptions,
                mixin.TitledElement.ConfigOptions
        {
            /** Configuration options for the input widget */
            input?: TextInputWidget.ConfigOptions;

            /**
             * An optional input widget. If given, it will
             * replace the input widget used in the TagMultiselectWidget. If not given,
             * TagMultiselectWidget creates its own.
             */
            inputWidget?: InputWidget;

            /**
             * Position of the input. Options are:
             * - inline: The input is invisible, but exists inside the tag list, so
             *   the user types into the tag groups to add tags.
             * - outline: The input is underneath the tag area.
             * - none: No input supplied
             */
            inputPosition?: "inline" | "outline" | "none";

            /**
             * Placeholder text for the input box
             */
            placeholder?: string;

            /** Allow editing of the tags by clicking them */
            allowEditTags?: boolean;

            /** Allow data items to be added even if not present in the menu. */
            allowArbitrary?: boolean;

            /** An array representing the allowed items by their datas. */
            allowedValues?: any[];

            /** Allow duplicate items to be added */
            allowDuplicates?: boolean;

            /**
             * Allow the display of
             * invalid tags. These tags will display with an invalid state, and
             * the widget as a whole will have an invalid state if any invalid tags
             * are present.
             */
            allowDisplayInvalidTags?: boolean;

            /**
             * An optional limit on the number of selected options.
             * If 'tagLimit' is set and is reached, the input is disabled, not allowing any
             * additions. If 'tagLimit' is unset or is 0, an unlimited number of items can be
             * added.
             */
            tagLimit?: number;

            /** Allow reordering of the items */
            allowReordering?: boolean;

            /**
             * A set of selected tags. If given,
             * these will appear in the tag list on initialization, as long as they
             * pass the validity tests.
             */
            selected?: any[];
        }

        interface Static
            extends
                Widget.Static,
                mixin.IndicatorElement.Static,
                mixin.IconElement.Static,
                mixin.FlaggedElement.Static,
                mixin.TitledElement.Static
        {
            /**
             * Allowed input positions.
             * - inline: The input is inside the tag list
             * - outline: The input is under the tag list
             * - none: There is no input
             */
            allowedInputPositions: string[];
        }

        interface Props
            extends
                Widget.Props,
                mixin.GroupElement.Props,
                mixin.DraggableGroupElement.Props,
                mixin.IndicatorElement.Props,
                mixin.IconElement.Props,
                mixin.TabIndexedElement.Props,
                mixin.FlaggedElement.Props,
                mixin.TitledElement.Props
        {
            $content: JQuery;
            $handle: JQuery;
        }

        interface Prototype
            extends
                Widget.Prototype,
                mixin.GroupElement.Prototype,
                mixin.DraggableGroupElement.Prototype,
                mixin.IndicatorElement.Prototype,
                mixin.IconElement.Prototype,
                mixin.TabIndexedElement.Prototype,
                mixin.FlaggedElement.Prototype,
                mixin.TitledElement.Prototype
        {
            /**
             * Respond to input focus event
             */
            onInputFocus(): void;

            /**
             * Respond to input blur event
             */
            onInputBlur(): void;

            /**
             * Perform an action after the Enter key on the input
             *
             * @param e Event data
             * @param withMetaKey Whether this key was pressed with
             * a meta key like Control
             * @return Whether to prevent defaults
             */
            doInputEnter(e: JQuery.Event, withMetaKey?: boolean): boolean;

            /**
             * Perform an action responding to the Backspace key on the input
             *
             * @param e Event data
             * @param withMetaKey Whether this key was pressed with
             * a meta key like Control
             * @return Whether to prevent defaults
             */
            doInputBackspace(e: JQuery.Event, withMetaKey?: boolean): boolean;

            /**
             * Perform an action after the Escape key on the input
             *
             * @param e Event data
             */
            doInputEscape(e: JQuery.Event): void;

            /**
             * Perform an action after the Left/Right arrow key on the input, select the previous
             * item from the input.
             * See getPreviousItem
             *
             * @param e Event data
             * @param direction Direction of the movement; forwards or backwards
             * @param withMetaKey Whether this key was pressed with a meta key like Control
             */
            doInputArrow(e: JQuery.Event, direction: Direction, withMetaKey?: boolean): void;

            /**
             * Respond to item select event
             *
             * @param item Selected item
             */
            onTagSelect(item: TagItemWidget): void;

            /**
             * Respond to item fixed state change
             *
             * @param item Selected item
             */
            onTagFixed(item: TagItemWidget): void;

            /**
             * Respond to change event, where items were added, removed, or cleared.
             */
            onChangeTags(): void;

            /**
             * Respond to tag remove event
             *
             * @param item Removed tag
             */
            onTagRemove(item: TagItemWidget): void;

            /**
             * Respond to navigate event on the tag
             *
             * @param item Removed tag
             * @param direction Direction of movement; 'forwards' or 'backwards'
             */
            onTagNavigate(item: TagItemWidget, direction: Direction): void;

            /**
             * Get data and label for a new tag from the input value
             *
             * @return The data and label for a tag
             */
            getTagInfoFromInput(): TagInfo;

            /**
             * Add tag from input value
             */
            addTagFromInput(): void;

            /**
             * Clear the input
             */
            clearInput(): void;

            /**
             * Check whether the given value is a duplicate of an existing
             * tag already in the list.
             *
             * @param data Requested value
             * @return Value is duplicate
             */
            isDuplicateData(data: any): boolean;

            /**
             * Check whether a given value is allowed to be added
             *
             * @param data Requested value
             * @return Value is allowed
             */
            isAllowedData(data: any): boolean;

            /**
             * Get the allowed values list
             *
             * @return Allowed data values
             */
            getAllowedValues(): unknown[];

            /**
             * Add a value to the allowed values list
             *
             * @param value Allowed data value
             */
            addAllowedValue(value: any): void;

            /**
             * Get the datas of the currently selected items
             *
             * @return Datas of currently selected items
             */
            getValue(): unknown[];

            /**
             * Set the value of this widget by datas.
             *
             * @param valueObject An object representing the data
             *  and label of the value. If the widget allows arbitrary values,
             *  the items will be added as-is. Otherwise, the data value will
             *  be checked against allowedValues.
             *  This object must contain at least a data key. Example:
             *  ```
             *      { data: 'foo', label: 'Foo item' }
             *  ```
             *  For multiple items, use an array of objects. For example:
             *  ```
             *      [ { data: 'foo', label: 'Foo item' }, { data: 'bar', label: 'Bar item' } ]
             *  ```
             *  Value can also be added with plaintext array, for example:
             *  ```
             *      [ 'foo', 'bar', 'bla' ]
             *  ```
             *  or a single string, like `'foo'`
             */
            setValue(valueObject: ValueMap | ValueMap[] | string[] | string): void;

            /**
             * Add tag to the display area.
             *
             * Performs a validation check on the tag to be added.
             *
             * @param data Tag data
             * @param label Tag label. If no label is provided, the
             *  stringified version of the data will be used instead.
             * @return Item was added successfully
             */
            addTag(data: any, label: string | JQuery): boolean;

            /**
             * Check whether the number of current tags is within the limit.
             *
             * @return True if current tag count is within the limit or
             *  if 'tagLimit' is not set
             */
            isUnderLimit(): boolean;

            /**
             * Remove tag by its data property.
             *
             * @param data Tag data
             */
            removeTagByData(data: any): void;

            /**
             * Check whether all items in the widget are valid
             *
             * @return Widget is valid
             */
            checkValidity(): boolean;

            /**
             * Set the valid state of this item
             *
             * @param valid Item is valid, omit to toggle
             */
            toggleValid(valid?: boolean): void;

            /**
             * Get the current valid state of the widget
             *
             * @return Widget is valid
             */
            isValid(): boolean;

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
            new(config?: ConfigOptions): TagMultiselectWidget;
            prototype: Prototype;
            static: Static;
            super: Widget.Constructor;
            /** @deprecated Use `super` instead */
            parent: Widget.Constructor;
        }
    }

    const TagMultiselectWidget: TagMultiselectWidget.Constructor;
}

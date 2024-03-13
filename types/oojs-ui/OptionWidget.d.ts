declare namespace OO.ui {
    /**
     * OptionWidgets are special elements that can be selected and configured with data. The
     * data is often unique for each option, but it does not have to be. OptionWidgets are used
     * with OO.ui.SelectWidget to create a selection of mutually exclusive options. For more information
     * and examples, please see the [OOUI documentation on MediaWiki](https://www.mediawiki.org/wiki/OOUI/Widgets/Selects_and_Options).
     *
     * ResourceLoader module: `oojs-ui-core`
     *
     * @see https://doc.wikimedia.org/oojs-ui/master/js/#!/api/OO.ui.OptionWidget
     */
    interface OptionWidget extends OptionWidget.Props, OptionWidget.Prototype {}

    namespace OptionWidget {
        interface EventMap extends Widget.EventMap, mixin.LabelElement.EventMap, mixin.FlaggedElement.EventMap {}

        interface ConfigOptions
            extends
                Widget.ConfigOptions,
                mixin.LabelElement.ConfigOptions,
                mixin.FlaggedElement.ConfigOptions,
                mixin.AccessKeyedElement.ConfigOptions,
                mixin.TitledElement.ConfigOptions
        {}

        interface Static
            extends
                Widget.Static,
                mixin.LabelElement.Static,
                mixin.FlaggedElement.Static,
                mixin.AccessKeyedElement.Static,
                mixin.TitledElement.Static
        {
            /** Whether this option can be selected. See {@link Prototype.setSelected setSelected}. */
            selectable: boolean;

            /** Whether this option can be highlighted. See {@link Prototype.setHighlighted setHighlighted}. */
            highlightable: boolean;

            /** Whether this option can be pressed. See {@link Prototype.setPressed setPressed}. */
            pressable: boolean;

            /** Whether this option will be scrolled into view when it is selected. */
            scrollIntoViewOnSelect: boolean;
        }

        interface Props
            extends
                Widget.Props,
                mixin.LabelElement.Props,
                mixin.FlaggedElement.Props,
                mixin.AccessKeyedElement.Props,
                mixin.TitledElement.Props
        {}

        interface Prototype
            extends
                Widget.Prototype,
                mixin.LabelElement.Prototype,
                mixin.FlaggedElement.Prototype,
                mixin.AccessKeyedElement.Prototype,
                mixin.TitledElement.Prototype
        {
            /**
             * Check if the option can be selected.
             *
             * @return Item is selectable
             */
            isSelectable(): boolean;

            /**
             * Check if the option can be highlighted. A highlight indicates that the option
             * may be selected when a user presses Enter key or clicks. Disabled items cannot
             * be highlighted.
             *
             * @return Item is highlightable
             */
            isHighlightable(): boolean;

            /**
             * Check if the option can be pressed. The pressed state occurs when a user mouses
             * down on an item, but has not yet let go of the mouse.
             *
             * @return Item is pressable
             */
            isPressable(): boolean;

            /**
             * Check if the option is selected.
             *
             * @return Item is selected
             */
            isSelected(): boolean;

            /**
             * Check if the option is highlighted. A highlight indicates that the
             * item may be selected when a user presses Enter key or clicks.
             *
             * @return Item is highlighted
             */
            isHighlighted(): boolean;

            /**
             * Check if the option is pressed. The pressed state occurs when a user mouses
             * down on an item, but has not yet let go of the mouse. The item may appear
             * selected, but it will not be selected until the user releases the mouse.
             *
             * @return Item is pressed
             */
            isPressed(): boolean;

            /**
             * Set the option’s selected state. In general, all modifications to the selection
             * should be handled by the SelectWidget’s
             * {@link OO.ui.SelectWidget.selectItem selectItem( [item] )} method instead of this method.
             *
             * @param state Select option
             * @return The widget, for chaining
             */
            setSelected(state?: boolean): this;

            /**
             * Set the option’s highlighted state. In general, all programmatic
             * modifications to the highlight should be handled by the
             * SelectWidget’s {@link OO.ui.SelectWidget.highlightItem highlightItem( [item] )}
             * method instead of this method.
             *
             * @param state Highlight option
             * @return The widget, for chaining
             */
            setHighlighted(state?: boolean): this;

            /**
             * Set the option’s pressed state. In general, all
             * programmatic modifications to the pressed state should be handled by the
             * SelectWidget’s {@link OO.ui.SelectWidget.pressItem pressItem( [item] )}
             * method instead of this method.
             *
             * @param state Press option
             * @return The widget, for chaining
             */
            setPressed(state?: boolean): this;

            /**
             * Get text to match search strings against.
             *
             * The default implementation returns the label text, but subclasses
             * can override this to provide more complex behavior.
             *
             * @return String to match search string against
             */
            getMatchText(): string | boolean;

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
            new(config?: ConfigOptions): OptionWidget;
            prototype: Prototype;
            static: Static;
            super: Widget.Constructor;
            /** @deprecated Use `super` instead */
            parent: Widget.Constructor;
        }
    }
    const OptionWidget: OptionWidget.Constructor;
}

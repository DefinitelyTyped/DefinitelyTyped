declare namespace OO.ui {
    /**
     * Widgets are compositions of one or more OOUI elements that users can both view
     * and interact with. All widgets can be configured and modified via a standard API,
     * and their state can change dynamically according to a model.
     *
     * ResourceLoader module: `oojs-ui-core`
     *
     * @see https://doc.wikimedia.org/oojs-ui/master/js/#!/api/OO.ui.Widget
     */
    interface Widget extends Widget.Props, Widget.Prototype {}

    namespace Widget {
        interface EventMap {
            disable: [disabled: boolean];
            toggle: [visible: boolean];
        }

        interface ConfigOptions extends Element.ConfigOptions {
            /** Disable the widget. Disabled widgets cannot be used and their appearance reflects this state. */
            disabled?: boolean;
        }

        type Static = Element.Static;

        type Props = Element.Props;

        interface Prototype extends Element.Prototype, EventEmitter {
            /**
             * Check if the widget is disabled.
             *
             * @return Widget is disabled
             */
            isDisabled(): boolean;

            /**
             * Set the 'disabled' state of the widget.
             *
             * When a widget is disabled, it cannot be used and its appearance is updated to reflect this state.
             *
             * @param disabled Disable widget
             * @return The widget, for chaining
             */
            setDisabled(disabled: boolean): this;

            /**
             * Update the disabled state, in case of changes in parent widget.
             *
             * @return The widget, for chaining
             */
            updateDisabled(): this;

            /**
             * Get an ID of a labelable node which is part of this widget, if any, to be used for `<label for>`
             * value.
             *
             * If this function returns null, the widget should have a meaningful {@link simulateLabelClick} method
             * instead.
             *
             * @return The ID of the labelable element
             */
            getInputId(): string | null;

            /**
             * Simulate the behavior of clicking on a label (a HTML `<label>` element) bound to this input.
             * HTML only allows `<label>` to act on specific "labelable" elements; complex widgets might need to
             * override this method to provide intuitive, accessible behavior.
             *
             * By default, this does nothing. {@link OO.ui.mixin.TabIndexedElement} overrides it for focusable widgets.
             * Individual widgets may override it too.
             *
             * This method is called by {@link OO.ui.LabelWidget} and {@link OO.ui.FieldLayout}. It should not be called
             * directly.
             */
            simulateLabelClick(): void;

            /**
             * Set the element with the given ID as a label for this widget.
             *
             * @param id
             */
            setLabelledBy(id: string | null): void;

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
            new(config?: ConfigOptions): Widget;
            prototype: Prototype;
            static: Static;
            super: Element.Constructor;
            /** @deprecated Use `super` instead */
            parent: Element.Constructor;
        }
    }

    const Widget: Widget.Constructor;
}

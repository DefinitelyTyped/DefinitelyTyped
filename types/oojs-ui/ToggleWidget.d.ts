declare namespace OO.ui {
    /**
     * ToggleWidget implements basic behavior of widgets with an on/off state.
     * Please see OO.ui.ToggleButtonWidget and OO.ui.ToggleSwitchWidget for examples.
     *
     * ResourceLoader module: `oojs-ui-widgets`
     *
     * @see https://doc.wikimedia.org/oojs-ui/master/js/#!/api/OO.ui.ToggleWidget
     */
    interface ToggleWidget extends ToggleWidget.Props, ToggleWidget.Prototype {}

    namespace ToggleWidget {
        interface EventMap extends Widget.EventMap {
            change: [value: boolean];
        }

        interface ConfigOptions extends Widget.ConfigOptions, mixin.TitledElement.ConfigOptions {
            /** The toggle’s initial on/off state. By default, the toggle is in the 'off' state. */
            value?: boolean;
        }

        interface Static extends Widget.Static, mixin.TitledElement.Static {}

        interface Props extends Widget.Props, mixin.TitledElement.Props {}

        interface Prototype extends Widget.Prototype, mixin.TitledElement.Prototype {
            /**
             * Get the value representing the toggle’s state.
             *
             * @return The on/off state of the toggle
             */
            getValue(): boolean;

            /**
             * Set the state of the toggle: `true` for 'on', `false` for 'off'.
             *
             * @param value The state of the toggle
             * @return The widget, for chaining
             */
            setValue(value: boolean): this;

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
            new(config?: ConfigOptions): ToggleWidget;
            prototype: Prototype;
            static: Static;
            super: Widget.Constructor;
            /** @deprecated Use `super` instead */
            parent: Widget.Constructor;
        }
    }

    const ToggleWidget: ToggleWidget.Constructor;
}

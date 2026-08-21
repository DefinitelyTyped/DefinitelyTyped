declare namespace OO.ui {
    /**
     * MessageWidget produces a visual component for sending a notice to the user
     * with an icon and distinct design noting its purpose. The MessageWidget changes
     * its visual presentation based on the type chosen, which also denotes its UX
     * purpose.
     *
     * ResourceLoader module: `oojs-ui-core`
     *
     * @see https://doc.wikimedia.org/oojs-ui/master/js/#!/api/OO.ui.MessageWidget
     */
    interface MessageWidget extends MessageWidget.Props, MessageWidget.Prototype {}

    namespace MessageWidget {
        type Type = "notice" | "error" | "warning" | "success";

        /**
         * @see https://www.mediawiki.org/wiki/OOUI/Elements/Flagged#MessageWidget
         */
        type Flag = Type;

        interface EventMap extends Widget.EventMap, mixin.LabelElement.EventMap, mixin.FlaggedElement.EventMap {
            close: [];
        }

        interface ConfigOptions
            extends
                Widget.ConfigOptions,
                mixin.IconElement.ConfigOptions,
                mixin.LabelElement.ConfigOptions,
                mixin.TitledElement.ConfigOptions,
                mixin.FlaggedElement.ConfigOptions
        {
            /**
             * The type of the notice widget. This will also
             * impact the flags that the widget receives (and hence its CSS design) as well
             * as the icon that appears. Available types:
             * 'notice', 'error', 'warning', 'success'
             */
            type?: Type;
            /** Set the notice as an inline notice. The default is not inline, or 'boxed' style. */
            inline?: boolean;
            /** Show a close button. Can't be used with inline. */
            showClose?: boolean;

            flags?: LiteralUnion<Flag> | Array<LiteralUnion<Flag>>;
        }

        interface Static
            extends
                Widget.Static,
                mixin.IconElement.Static,
                mixin.LabelElement.Static,
                mixin.TitledElement.Static,
                mixin.FlaggedElement.Static
        {
            /** An object defining the icon name per defined type. */
            iconMap: Record<string, Icon>;
        }

        interface Props
            extends
                Widget.Props,
                mixin.IconElement.Props,
                mixin.LabelElement.Props,
                mixin.TitledElement.Props,
                mixin.FlaggedElement.Props
        {}

        interface Prototype
            extends
                Widget.Prototype,
                mixin.IconElement.Prototype,
                mixin.LabelElement.Prototype,
                mixin.TitledElement.Prototype,
                mixin.FlaggedElement.Prototype
        {
            /**
             * Set the inline state of the widget.
             *
             * @param inline Widget is inline
             */
            setInline(inline: boolean): void;

            /**
             * Set the widget type. The given type must belong to the list of
             * legal types set by OO.ui.MessageWidget.static.iconMap
             *
             * @param type
             */
            setType(type?: Type): void;

            /**
             * Handle click events on the close button
             */
            onCloseButtonClick(): void;

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
            new(config?: ConfigOptions): MessageWidget;
            prototype: Prototype;
            static: Static;
            super: Widget.Constructor;
            /** @deprecated Use `super` instead */
            parent: Widget.Constructor;
        }
    }

    const MessageWidget: MessageWidget.Constructor;
}

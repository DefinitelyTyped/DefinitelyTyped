declare namespace OO.ui {
    /**
     * ButtonWidget is a generic widget for buttons. A wide variety of looks,
     * feels, and functionality can be customized via the class’s configuration options
     * and methods. Please see the [OOUI documentation on MediaWiki](https://www.mediawiki.org/wiki/OOUI/Widgets/Buttons_and_Switches)
     * for more information and examples.
     *
     *     // A button widget.
     *     var button = new OO.ui.ButtonWidget( {
     *         label: 'Button with Icon',
     *         icon: 'trash',
     *         title: 'Remove'
     *     } );
     *     $( document.body ).append( button.$element );
     *
     * NOTE: HTML form buttons should use the OO.ui.ButtonInputWidget class.
     *
     * ResourceLoader module: `oojs-ui-core`
     *
     * @see https://doc.wikimedia.org/oojs-ui/master/js/#!/api/OO.ui.ButtonWidget
     */
    interface ButtonWidget extends ButtonWidget.Props, ButtonWidget.Prototype {}

    namespace ButtonWidget {
        interface EventMap
            extends
                Widget.EventMap,
                mixin.ButtonElement.EventMap,
                mixin.LabelElement.EventMap,
                mixin.FlaggedElement.EventMap
        {}

        interface ConfigOptions
            extends
                Widget.ConfigOptions,
                mixin.ButtonElement.ConfigOptions,
                mixin.IconElement.ConfigOptions,
                mixin.IndicatorElement.ConfigOptions,
                mixin.LabelElement.ConfigOptions,
                mixin.TitledElement.ConfigOptions,
                mixin.FlaggedElement.ConfigOptions,
                mixin.TabIndexedElement.ConfigOptions,
                mixin.AccessKeyedElement.ConfigOptions
        {
            /** Whether button should be shown as active */
            active?: boolean;
            /** Hyperlink to visit when the button is clicked. */
            href?: string | null;
            /** The frame or window in which to open the hyperlink. */
            target?: string | null;
            /** Search engine traversal hint */
            noFollow?: boolean;
            /** Relationship attributes for the hyperlink */
            rel?: string | string[];

            flags?: LiteralUnion<mixin.ButtonElement.Flag> | Array<LiteralUnion<mixin.ButtonElement.Flag>>;
        }

        interface Static
            extends
                Widget.Static,
                mixin.ButtonElement.Static,
                mixin.IconElement.Static,
                mixin.IndicatorElement.Static,
                mixin.LabelElement.Static,
                mixin.TitledElement.Static,
                mixin.FlaggedElement.Static,
                mixin.AccessKeyedElement.Static
        {}

        interface Props
            extends
                Widget.Props,
                mixin.ButtonElement.Props,
                mixin.IconElement.Props,
                mixin.IndicatorElement.Props,
                mixin.LabelElement.Props,
                mixin.TitledElement.Props,
                mixin.FlaggedElement.Props,
                mixin.TabIndexedElement.Props,
                mixin.AccessKeyedElement.Props
        {}

        interface Prototype
            extends
                Widget.Prototype,
                mixin.ButtonElement.Prototype,
                mixin.IconElement.Prototype,
                mixin.IndicatorElement.Prototype,
                mixin.LabelElement.Prototype,
                mixin.TitledElement.Prototype,
                mixin.FlaggedElement.Prototype,
                mixin.TabIndexedElement.Prototype,
                mixin.AccessKeyedElement.Prototype
        {
            /**
             * Get hyperlink location.
             *
             * @return Hyperlink location
             */
            getHref(): string | null;

            /**
             * Get hyperlink target.
             *
             * @return Hyperlink target
             */
            getTarget(): string | null;

            /**
             * Get search engine traversal hint.
             *
             * @return Whether search engines should avoid traversing this hyperlink
             */
            getNoFollow(): boolean;

            /**
             * Get the relationship attribute of the hyperlink.
             *
             * @return Relationship attributes that apply to the hyperlink
             */
            getRel(): string[];

            /**
             * Set hyperlink location.
             *
             * @param href Hyperlink location, null to remove
             * @return The widget, for chaining
             */
            setHref(href: string | null): this;

            /**
             * Set hyperlink target.
             *
             * @param target Hyperlink target, null to remove
             * @return The widget, for chaining
             */
            setTarget(target: string | null): this;

            /**
             * Set search engine traversal hint.
             *
             * @param noFollow True if search engines should avoid traversing this hyperlink
             * @return The widget, for chaining
             */
            setNoFollow(noFollow: boolean): this;

            /**
             * Set the `rel` attribute of the hyperlink.
             *
             * @param rel Relationship attributes for the hyperlink, omit to remove
             * @return The widget, for chaining
             */
            setRel(rel?: string | string[]): this;

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
            new(config?: ConfigOptions): ButtonWidget;
            prototype: Prototype;
            static: Static;
            super: Widget.Constructor;
            /** @deprecated Use `super` instead */
            parent: Widget.Constructor;
        }
    }

    const ButtonWidget: ButtonWidget.Constructor;
}

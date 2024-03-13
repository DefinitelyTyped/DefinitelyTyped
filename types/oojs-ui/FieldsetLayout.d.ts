declare namespace OO.ui {
    /**
     * FieldsetLayouts are composed of one or more {@link OO.ui.FieldLayout FieldLayouts},
     * which each contain an individual widget and, optionally, a label. Each Fieldset can be
     * configured with a label as well. For more information and examples,
     * please see the [OOUI documentation on MediaWiki](https://www.mediawiki.org/wiki/OOUI/Layouts/Fields_and_Fieldsets).
     *
     *     // Example of a fieldset layout
     *     var input1 = new OO.ui.TextInputWidget( {
     *         placeholder: 'A text input field'
     *     } );
     *
     *     var input2 = new OO.ui.TextInputWidget( {
     *         placeholder: 'A text input field'
     *     } );
     *
     *     var fieldset = new OO.ui.FieldsetLayout( {
     *         label: 'Example of a fieldset layout'
     *     } );
     *
     *     fieldset.addItems( [
     *         new OO.ui.FieldLayout( input1, {
     *             label: 'Field One'
     *         } ),
     *         new OO.ui.FieldLayout( input2, {
     *             label: 'Field Two'
     *         } )
     *     ] );
     *     $( document.body ).append( fieldset.$element );
     *
     * ResourceLoader module: `oojs-ui-core`
     *
     * @see https://doc.wikimedia.org/oojs-ui/master/js/#!/api/OO.ui.FieldsetLayout
     */
    interface FieldsetLayout extends FieldsetLayout.Props, FieldsetLayout.Prototype {}

    namespace FieldsetLayout {
        interface EventMap extends mixin.GroupElement.EventMap, mixin.LabelElement.EventMap {}

        interface ConfigOptions
            extends
                Layout.ConfigOptions,
                mixin.IconElement.ConfigOptions,
                mixin.LabelElement.ConfigOptions,
                mixin.GroupElement.ConfigOptions
        {
            /**
             * An array of fields to add to the fieldset.
             * See OO.ui.FieldLayout for more information about fields.
             */
            items?: FieldLayout[];

            /**
             * Help text.
             *
             * When help text is specified and `helpInline` is `false`, a "help" icon will appear in
             * the upper-right corner of the rendered field; clicking it will display the text in a
             * popup. If `helpInline` is `true`, then a subtle description will be shown after the
             * label.
             *
             * For feedback messages, you are advised to use `notices`.
             */
            help?: string | HtmlSnippet;

            /** Whether or not the help should be inline, or shown when the "help" icon is clicked. */
            helpInline?: boolean;

            /**
             * Passed to OO.ui.PopupButtonWidget for help popup, if `help` is given.
             * See <https://www.mediawiki.org/wiki/OOUI/Concepts#Overlays>.
             */
            $overlay?: JQuery;
        }

        interface Static extends Layout.Static, mixin.IconElement.Static, mixin.LabelElement.Static {}

        interface Props
            extends Layout.Props, mixin.IconElement.Props, mixin.LabelElement.Props, mixin.GroupElement.Props
        {
            $header: JQuery;
        }

        interface Prototype
            extends
                Layout.Prototype,
                mixin.IconElement.Prototype,
                mixin.LabelElement.Prototype,
                mixin.GroupElement.Prototype
        {
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
            new(config?: ConfigOptions): FieldsetLayout;
            prototype: Prototype;
            static: Static;
            super: Layout.Constructor;
            /** @deprecated Use `super` instead */
            parent: Layout.Constructor;
        }
    }

    const FieldsetLayout: FieldsetLayout.Constructor;
}

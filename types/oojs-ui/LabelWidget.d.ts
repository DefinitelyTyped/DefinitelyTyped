declare namespace OO.ui {
    /**
     * LabelWidgets help identify the function of interface elements. Each LabelWidget can
     * be configured with a `label` option that is set to a string, a label node, or a function:
     *
     * - String: a plaintext string
     * - jQuery selection: a jQuery selection, used for anything other than a plaintext label, e.g., a
     *   label that includes a link or special styling, such as a gray color or additional
     *   graphical elements.
     * - Function: a function that will produce a string in the future. Functions are used
     *   in cases where the value of the label is not currently defined.
     *
     * In addition, the LabelWidget can be associated with an {@link OO.ui.InputWidget input widget},
     * which will come into focus when the label is clicked.
     *
     *     // Two LabelWidgets.
     *     var label1 = new OO.ui.LabelWidget( {
     *             label: 'plaintext label'
     *         } ),
     *         label2 = new OO.ui.LabelWidget( {
     *             label: $( '<a>' ).attr( 'href', 'default.html' ).text( 'jQuery label' )
     *         } ),
     *         // Create a fieldset layout with fields for each example.
     *         fieldset = new OO.ui.FieldsetLayout();
     *     fieldset.addItems( [
     *         new OO.ui.FieldLayout( label1 ),
     *         new OO.ui.FieldLayout( label2 )
     *     ] );
     *     $( document.body ).append( fieldset.$element );
     *
     * ResourceLoader module: `oojs-ui-core`
     *
     * @see https://doc.wikimedia.org/oojs-ui/master/js/#!/api/OO.ui.LabelWidget
     */
    interface LabelWidget extends LabelWidget.Props, LabelWidget.Prototype {}

    namespace LabelWidget {
        interface EventMap extends Widget.EventMap, mixin.LabelElement.EventMap {}

        interface ConfigOptions
            extends Widget.ConfigOptions, mixin.LabelElement.ConfigOptions, mixin.TitledElement.ConfigOptions
        {
            /**
             * {@link OO.ui.InputWidget Input widget} that uses the label.
             * Clicking the label will focus the specified input field.
             */
            input?: InputWidget;
        }

        interface Static extends Widget.Static, mixin.LabelElement.Static, mixin.TitledElement.Static {}

        interface Props extends Widget.Props, mixin.LabelElement.Props, mixin.TitledElement.Props {}

        interface Prototype extends Widget.Prototype, mixin.LabelElement.Prototype, mixin.TitledElement.Prototype {
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
            new(config?: ConfigOptions): LabelWidget;
            prototype: Prototype;
            static: Static;
            super: Widget.Constructor;
            /** @deprecated Use `super` instead */
            parent: Widget.Constructor;
        }
    }

    const LabelWidget: LabelWidget.Constructor;
}

declare namespace OO.ui {
    /**
     * FieldLayouts are used with OO.ui.FieldsetLayout. Each FieldLayout requires a field-widget,
     * which is a widget that is specified by reference before any optional configuration settings.
     *
     * Field layouts can be configured with help text and/or labels. Labels are aligned in one of
     * four ways:
     *
     * - **left**: The label is placed before the field-widget and aligned with the left margin.
     *   A left-alignment is used for forms with many fields.
     * - **right**: The label is placed before the field-widget and aligned to the right margin.
     *   A right-alignment is used for long but familiar forms which users tab through,
     *   verifying the current field with a quick glance at the label.
     * - **top**: The label is placed above the field-widget. A top-alignment is used for brief forms
     *   that users fill out from top to bottom.
     * - **inline**: The label is placed after the field-widget and aligned to the left.
     *   An inline-alignment is best used with checkboxes or radio buttons.
     *
     * Help text can either be:
     *
     * - accessed via a help icon that appears in the upper right corner of the rendered field layout,
     *   or
     * - shown as a subtle explanation below the label.
     *
     * If the help text is brief, or is essential to always expose it, set `helpInline` to `true`.
     * If it is long or not essential, leave `helpInline` to its default, `false`.
     *
     * Please see the [OOUI documentation on MediaWiki](https://www.mediawiki.org/wiki/OOUI/Layouts/Fields_and_Fieldsets)
     * for examples and more information.
     *
     * ResourceLoader module: `oojs-ui-core`
     *
     * @see https://doc.wikimedia.org/oojs-ui/master/js/#!/api/OO.ui.FieldLayout
     */
    interface FieldLayout<T extends Widget = Widget> extends FieldLayout.Props, FieldLayout.Prototype<T> {}

    namespace FieldLayout {
        type EventMap = mixin.LabelElement.EventMap;

        interface ConfigOptions
            extends Layout.ConfigOptions, mixin.LabelElement.ConfigOptions, mixin.TitledElement.ConfigOptions
        {
            /** Alignment of the label: 'left', 'right', 'top' or 'inline' */
            align?: "left" | "right" | "top" | "inline";

            /** Error messages about the widget, which will be displayed below the widget. */
            errors?: Array<string | HtmlSnippet>;

            /** Warning messages about the widget, which will be displayed below the widget. */
            warnings?: Array<string | HtmlSnippet>;

            /**
             * Success messages on user interactions with the widget, which will be displayed below
             * the widget. The array may contain strings or OO.ui.HtmlSnippet instances.
             */
            successMessages?: Array<string | HtmlSnippet>;

            /**
             * Notices about the widget, which will be displayed
             * below the widget.
             * The array may contain strings or OO.ui.HtmlSnippet instances.
             * These are more visible than `help` messages when `helpInline` is set, and so
             * might be good for transient messages.
             */
            notices?: Array<string | HtmlSnippet>;

            /**
             * Help text.
             *
             * When help text is specified and `helpInline` is `false`, a "help" icon will appear in
             * the upper-right corner of the rendered field; clicking it will display the text in a
             * popup. If `helpInline` is `true`, then a subtle description will be shown after the
             * label.
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

        interface Static extends Layout.Static, mixin.LabelElement.Static, mixin.TitledElement.Static {}

        interface Props extends Layout.Props, mixin.LabelElement.Props, mixin.TitledElement.Props {
            $field: JQuery;
            $messages: JQuery;
            $header: JQuery;
            $body: JQuery;
            $help: JQuery;
        }

        interface Prototype<T extends Widget = Widget>
            extends Layout.Prototype, mixin.LabelElement.Prototype, mixin.TitledElement.Prototype
        {
            /**
             * Handle click events on the field label, or inline help
             *
             * @param event
             */
            onLabelClick(): JQuery.Event;

            /**
             * Get the widget contained by the field.
             *
             * @return Field widget
             */
            getField(): T;

            /**
             * Return `true` if the given field widget can be used with `'inline'` alignment (see
             * {@link setAlignment}). Return `false` if it can't or if this can't be determined.
             *
             * @return
             */
            isFieldInline(): boolean;

            /**
             * Set the list of error messages.
             *
             * @param errors Error messages about the widget, which will be displayed below the
             *  widget. The array may contain strings or OO.ui.HtmlSnippet instances.
             * @return The layout, for chaining
             */
            setErrors(errors: Array<string | HtmlSnippet>): this;

            /**
             * Set the list of warning messages.
             *
             * @param warnings Warning messages about the widget, which will be displayed below
             *  the widget.
             *  The array may contain strings or OO.ui.HtmlSnippet instances.
             * @return The layout, for chaining
             */
            setWarnings(warnings: Array<string | HtmlSnippet>): this;

            /**
             * Set the list of success messages.
             *
             * @param  successMessages Success messages about the widget, which will be displayed
             *  below the widget.
             *  The array may contain strings or OO.ui.HtmlSnippet instances.
             * @return The layout, for chaining
             */
            setSuccess(successMessages: Array<string | HtmlSnippet>): this;

            /**
             * Set the list of notice messages.
             *
             * @param notices Notices about the widget, which will be displayed below the widget.
             *  The array may contain strings or OO.ui.HtmlSnippet instances.
             * @return The layout, for chaining
             */
            setNotices(notices: Array<string | HtmlSnippet>): this;

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
            /**
             * @param fieldWidget Field widget
             * @param config Configuration options
             * @throws {Error} An error is thrown if no widget is specified
             */
            new<T extends Widget>(fieldWidget: T, config?: ConfigOptions): FieldLayout<T>;
            prototype: Prototype;
            static: Static;
            super: Layout.Constructor;
            /** @deprecated Use `super` instead */
            parent: Layout.Constructor;
        }
    }

    const FieldLayout: FieldLayout.Constructor;
}

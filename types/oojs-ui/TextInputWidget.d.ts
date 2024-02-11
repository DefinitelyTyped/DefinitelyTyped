declare namespace OO.ui {
    /**
     * TextInputWidgets, like HTML text inputs, can be configured with options that customize the
     * size of the field as well as its presentation. In addition, these widgets can be configured
     * with {@link OO.ui.mixin.IconElement icons}, {@link OO.ui.mixin.IndicatorElement indicators}, an
     * optional validation-pattern (used to determine if an input value is valid or not) and an input
     * filter, which modifies incoming values rather than validating them.
     * Please see the [OOUI documentation on MediaWiki](https://www.mediawiki.org/wiki/OOUI/Widgets/Inputs)
     * for more information and examples.
     *
     * This widget can be used inside an HTML form, such as a OO.ui.FormLayout.
     *
     *     // A TextInputWidget.
     *     var textInput = new OO.ui.TextInputWidget( {
     *         value: 'Text input'
     *     } );
     *     $( document.body ).append( textInput.$element );
     *
     * ResourceLoader module: `oojs-ui-core`
     *
     * @see https://doc.wikimedia.org/oojs-ui/master/js/#!/api/OO.ui.TextInputWidget
     */
    interface TextInputWidget extends TextInputWidget.Props, TextInputWidget.Prototype {}

    namespace TextInputWidget {
        interface Range {
            from: number | null;
            to: number | null;
        }

        /**
         * @see https://www.mediawiki.org/wiki/OOUI/Elements/Flagged#TextInputWidget
         */
        type Flag = "invalid";

        interface EventMap extends InputWidget.EventMap, mixin.LabelElement.EventMap, mixin.FlaggedElement.EventMap {
            enter: [];
        }

        interface ConfigOptions
            extends
                InputWidget.ConfigOptions,
                mixin.IconElement.ConfigOptions,
                mixin.IndicatorElement.ConfigOptions,
                mixin.PendingElement.ConfigOptions,
                mixin.LabelElement.ConfigOptions,
                mixin.FlaggedElement.ConfigOptions,
                mixin.RequiredElement.ConfigOptions
        {
            /**
             * The value of the HTML `type` attribute: 'text', 'password' 'email', 'url' or 'number'.
             * Subclasses might support other types.
             */
            type?: LiteralUnion<"text" | "password" | "email" | "url" | "number">;

            /** Placeholder text */
            placeholder?: string;

            /** Use an HTML `autofocus` attribute to instruct the browser to focus this widget. */
            autofocus?: boolean;

            /** Prevent changes to the value of the text input. */
            readOnly?: boolean;

            /** Maximum number of characters allowed in the input. */
            maxLength?: number;

            /**
             * Minimum number of characters allowed in the input.
             *
             * For unfortunate historical reasons, this counts the number of UTF-16 code units
             * rather than Unicode codepoints, which means that codepoints outside the Basic
             * Multilingual Plane (e.g. many emojis) count as 2 characters each.
             */
            minLength?: number;

            /**
             * The position of the inline label relative to that of the value or placeholder text:
             * `'before'` or `'after'`
             */
            labelPosition?: "before" | "after";

            /**
             * Should the browser support autocomplete for this field?
             * Type hints such as 'email' are also allowed.
             */
            autocomplete?: boolean | string;

            /**
             * Should the browser support spellcheck for this field (`undefined` means leaving it up
             * to the browser).
             */
            spellcheck?: boolean;

            /**
             * Validation pattern: when string, a symbolic name of a
             * pattern defined by the class: 'non-empty' (the value cannot be an empty string) or
             * 'integer' (the value must contain only numbers); when RegExp, a regular expression
             * that must match the value for it to be considered valid; when Function, a function
             * receiving the value as parameter that must return true, or promise resolving to true,
             * for it to be considered valid.
             */
            validate?: RegExp | string | ((value: string) => boolean | JQuery.Promise<boolean>);

            flags?: LiteralUnion<Flag> | Array<LiteralUnion<Flag>>;
        }

        interface Static
            extends
                InputWidget.Static,
                mixin.IconElement.Static,
                mixin.IndicatorElement.Static,
                mixin.LabelElement.Static,
                mixin.FlaggedElement.Static
        {
            validationPatterns: Record<string, RegExp>;
        }

        interface Props
            extends
                InputWidget.Props,
                mixin.IconElement.Props,
                mixin.IndicatorElement.Props,
                mixin.PendingElement.Props,
                mixin.LabelElement.Props,
                mixin.FlaggedElement.Props,
                mixin.RequiredElement.Props
        {}

        interface Prototype
            extends
                InputWidget.Prototype,
                mixin.IconElement.Prototype,
                mixin.IndicatorElement.Prototype,
                mixin.PendingElement.Prototype,
                mixin.LabelElement.Prototype,
                mixin.FlaggedElement.Prototype,
                mixin.RequiredElement.Prototype
        {
            /**
             * Check if the input is {@link ConfigOptions.readOnly read-only}.
             *
             * @return
             */
            isReadOnly(): boolean;

            /**
             * Set the {@link ConfigOptions.readOnly read-only} state of the input.
             *
             * @param state Make input read-only
             * @return The widget, for chaining
             */
            setReadOnly(state: boolean): this;

            /**
             * Support function for making onElementAttach work across browsers.
             *
             * Due to MutationObserver performance woes, onElementAttach is only somewhat reliably
             * called the first time that the element gets attached to the documented.
             */
            installParentChangeDetector(): void;

            /**
             * Focus the input and select a specified range within the text.
             *
             * @param from Select from offset
             * @param to Select to offset
             * @return The widget, for chaining
             */
            selectRange(from: number, to?: number): this;

            /**
             * Get an object describing the current selection range in a directional manner
             *
             * @return Object containing 'from' and 'to' offsets
             */
            getRange(): Range;

            /**
             * Get the length of the text input value.
             *
             * This could differ from the length of {@link getValue} if the value gets filtered
             *
             * @return Input length
             */
            getInputLength(): number;

            /**
             * Focus the input and select the entire text.
             *
             * @return The widget, for chaining
             */
            select(): this;

            /**
             * Focus the input and move the cursor to the start.
             *
             * @return The widget, for chaining
             */
            moveCursorToStart(): this;

            /**
             * Focus the input and move the cursor to the end.
             *
             * @return The widget, for chaining
             */
            moveCursorToEnd(): this;

            /**
             * Insert new content into the input.
             *
             * @param content Content to be inserted
             * @return The widget, for chaining
             */
            insertContent(content: string): this;

            /**
             * Insert new content either side of a selection.
             *
             * @param pre Content to be inserted before the selection
             * @param post Content to be inserted after the selection
             * @return The widget, for chaining
             */
            encapsulateContent(pre: string, post: string): this;

            /**
             * Set the validation pattern.
             *
             * The validation pattern is either a regular expression, a function, or the symbolic
             * name of a pattern defined by the class: 'non-empty' (the value cannot be an empty
             * string) or 'integer' (the value must contain only numbers).
             *
             * @param validate Regular expression, function, or the symbolic name of a pattern
             *  (either ‘integer’ or ‘non-empty’) defined by the class.
             */
            setValidation(
                validate: null | RegExp | string | ((value: string) => boolean | JQuery.Promise<boolean>),
            ): void;

            /**
             * Sets the 'invalid' flag appropriately.
             *
             * @param isValid Optionally override validation result
             */
            setValidityFlag(isValid?: boolean): void;

            /**
             * Get the validity of current value.
             *
             * This method returns a promise that resolves if the value is valid and rejects if
             * it isn't. Uses the {@link ConfigOptions.validate validation pattern}  to check for
             * validity.
             *
             * @return A promise that resolves if the value is valid, rejects if not.
             */
            getValidity(): JQuery.Promise<void>;

            /**
             * Set the position of the inline label relative to that of the value: `‘before’` or
             * `‘after’`.
             *
             * @param labelPosition Label position, 'before' or 'after'
             * @return The widget, for chaining
             */
            setLabelPosition(labelPosition: "before" | "after"): this;

            /**
             * Update the position of the inline label.
             *
             * This method is called by {@link setLabelPosition}, and can also be called on its own
             * if something causes the label to be mispositioned.
             *
             * @return The widget, for chaining
             */
            updatePosition(): this;

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
            new(config?: ConfigOptions): TextInputWidget;
            prototype: Prototype;
            static: Static;
            super: InputWidget.Constructor;
            /** @deprecated Use `super` instead */
            parent: InputWidget.Constructor;
        }
    }

    const TextInputWidget: TextInputWidget.Constructor;
}

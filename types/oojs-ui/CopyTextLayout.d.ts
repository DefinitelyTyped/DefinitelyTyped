declare namespace OO.ui {
    /**
     * CopyTextLayout is an action field layout containing some readonly text
     * and a button to copy it to the clipboard.
     *
     * ResourceLoader module: `oojs-ui-widgets`
     *
     * @see https://doc.wikimedia.org/oojs-ui/master/js/#!/api/OO.ui.CopyTextLayout
     */
    interface CopyTextLayout<
        T extends TextInputWidget | MultilineTextInputWidget =
            | TextInputWidget
            | MultilineTextInputWidget,
    > extends CopyTextLayout.Props, CopyTextLayout.Prototype<T> {}

    namespace CopyTextLayout {
        interface EventMap extends mixin.LabelElement.EventMap {
            /**
             * When the user has executed a copy command.
             *
             * @param success Whether the copy command succeeded
             */
            copy: [success: boolean];
        }

        interface ConfigOptions<M extends boolean | undefined> extends ActionFieldLayout.ConfigOptions {
            /** Text to copy, can also be provided as `textInput.value` */
            copyText?: string;
            /** Config for the text input widget */
            textInput?: M extends true ? MultilineTextInputWidget.ConfigOptions
                : TextInputWidget.ConfigOptions;
            /** Config for the button widget */
            button?: ButtonWidget.ConfigOptions;
            /** Whether to use a multiline text input */
            multiline?: M;
        }

        type Static = ActionFieldLayout.Static;

        interface Props extends ActionFieldLayout.Props {
            /** Text input widget used in the layout */
            textInput: TextInputWidget | MultilineTextInputWidget;
            /** Button widget used in the layout */
            button: ButtonWidget;
        }

        interface Prototype<
            T extends TextInputWidget | MultilineTextInputWidget =
                | TextInputWidget
                | MultilineTextInputWidget,
        > extends FieldLayout.Prototype<T> {
            /**
             * Handle button click events.
             *
             * @fires copy
             */
            onButtonClick(): void;

            /**
             * Handle text widget focus events.
             */
            onInputFocus(): void;

            /**
             * Select the text to copy.
             */
            selectText(): void;

            /**
             * Get the widget contained by the field.
             *
             * @return Field widget
             */
            getField(): T;

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

            once<K extends keyof EventMap>(
                event: K,
                listener: (this: null, ...args: EventMap[K]) => void,
            ): this;
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
            emitThrow<K extends string>(
                event: K extends keyof EventMap ? never : K,
                ...args: any[]
            ): boolean;

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
            new<M extends boolean | undefined = undefined>(config: ConfigOptions<M>): CopyTextLayout<
                M extends true ? MultilineTextInputWidget : TextInputWidget
            >;
            prototype: Prototype;
            static: Static;
            super: ActionFieldLayout.Constructor;
            /** @deprecated Use `super` instead */
            parent: ActionFieldLayout.Constructor;
        }
    }

    const CopyTextLayout: CopyTextLayout.Constructor;
}

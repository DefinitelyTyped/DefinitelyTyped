declare namespace OO.ui {
    /**
     * CheckboxInputWidgets, like HTML checkboxes, can be selected and/or configured with a value.
     * Note that these {@link OO.ui.InputWidget input widgets} are best laid out
     * in {@link OO.ui.FieldLayout field layouts} that use the {@link OO.ui.FieldLayout.ConfigOptions.align inline}
     * alignment.For more information, please see the[OOUI documentation on MediaWiki](https://www.mediawiki.org/wiki/OOUI/Widgets/Inputs).
     *
     * This widget can be used inside an HTML form, such as a OO.ui.FormLayout.
     *
     *     // An example of selected, unselected, and disabled checkbox inputs.
     *     var checkbox1 = new OO.ui.CheckboxInputWidget( {
     *             value: 'a',
     *              selected: true
     *         } ),
     *         checkbox2 = new OO.ui.CheckboxInputWidget( {
     *             value: 'b'
     *         } ),
     *         checkbox3 = new OO.ui.CheckboxInputWidget( {
     *             value:'c',
     *             disabled: true
     *         } ),
     *         // Create a fieldset layout with fields for each checkbox.
     *         fieldset = new OO.ui.FieldsetLayout( {
     *             label: 'Checkboxes'
     *         } );
     *     fieldset.addItems( [
     *         new OO.ui.FieldLayout( checkbox1, { label: 'Selected checkbox', align: 'inline' } ),
     *         new OO.ui.FieldLayout( checkbox2, { label: 'Unselected checkbox', align: 'inline' } ),
     *         new OO.ui.FieldLayout( checkbox3, { label: 'Disabled checkbox', align: 'inline' } ),
     *     ] );
     *     $( document.body ).append( fieldset.$element );
     *
     * ResourceLoader module: `oojs-ui-core`
     *
     * @see https://doc.wikimedia.org/oojs-ui/master/js/#!/api/OO.ui.CheckboxInputWidget
     */
    interface CheckboxInputWidget extends CheckboxInputWidget.Props, CheckboxInputWidget.Prototype {}

    namespace CheckboxInputWidget {
        // HACK: See SelectWidget.d.ts
        interface EventMap {
            change: [selected: boolean | string, indeterminate?: boolean];
            disable: [disabled: boolean];
            toggle: [visible: boolean];
        }

        interface ConfigOptions extends InputWidget.ConfigOptions, mixin.RequiredElement.ConfigOptions {
            /** Select the checkbox initially. By default, the checkbox is not selected. */
            selected?: boolean;
            /** Whether the checkbox is in the indeterminate state. */
            indeterminate?: boolean;
        }

        type Static = InputWidget.Static;

        interface Props extends InputWidget.Props, mixin.RequiredElement.Props {}

        interface Prototype extends InputWidget.Prototype, mixin.RequiredElement.Prototype {
            /**
             * Set selection state of this checkbox.
             *
             * @param state Selected state
             * @return The widget, for chaining
             */
            setSelected(state: boolean): this;

            /**
             * Check if this checkbox is selected.
             *
             * @return Checkbox is selected
             */
            isSelected(): boolean;

            /**
             * Set indeterminate state of this checkbox.
             *
             * @param state Indeterminate state
             * @return The widget, for chaining
             */
            setIndeterminate(state: boolean): this;

            /**
             * Check if this checkbox is selected.
             *
             * @return Checkbox is selected
             */
            isIndeterminate(): boolean;

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
            new(config?: ConfigOptions): CheckboxInputWidget;
            prototype: Prototype;
            static: Static;
            super: InputWidget.Constructor;
            /** @deprecated Use `super` instead */
            parent: InputWidget.Constructor;
        }
    }

    const CheckboxInputWidget: CheckboxInputWidget.Constructor;
}

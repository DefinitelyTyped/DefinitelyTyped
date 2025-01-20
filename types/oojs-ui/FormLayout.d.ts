declare namespace OO.ui {
    /**
     * FormLayouts are used to wrap {@link OO.ui.FieldsetLayout FieldsetLayouts} when you intend to use
     * browser-based form submission for the fields instead of handling them in JavaScript. Form layouts
     * can be configured with an HTML form action, an encoding type, and a method using the
     * {@link FormLayout.ConfigOptions.action action}, {@link FormLayout.ConfigOptions.enctype enctype},
     * and {@link FormLayout.ConfigOptions.method method} configs, respectively.
     * See the [OOUI documentation on MediaWiki](https://www.mediawiki.org/wiki/OOUI/Layouts/Forms)
     * for more information and examples.
     *
     * Only widgets from the {@link OO.ui.InputWidget InputWidget} family support form submission. It
     * includes standard form elements like {@link OO.ui.CheckboxInputWidget checkboxes},
     * {@link OO.ui.RadioInputWidget radio buttons} and {@link OO.ui.TextInputWidget text fields},
     * as well as some fancier controls. Some controls have both regular and InputWidget variants,
     * for example OO.ui.DropdownWidget and OO.ui.DropdownInputWidget – only the latter support form
     * submission and often have simplified APIs to match the capabilities of HTML forms.
     * See the [OOUI documentation on MediaWiki](https://www.mediawiki.org/wiki/OOUI/Widgets/Inputs)
     * for more information about InputWidgets.
     *
     *     // Example of a form layout that wraps a fieldset layout.
     *     var input1 = new OO.ui.TextInputWidget( {
     *             placeholder: 'Username'
     *         } ),
     *         input2 = new OO.ui.TextInputWidget( {
     *             placeholder: 'Password',
     *             type: 'password'
     *         } ),
     *         submit = new OO.ui.ButtonInputWidget( {
     *             label: 'Submit'
     *         } ),
     *         fieldset = new OO.ui.FieldsetLayout( {
     *             label: 'A form layout'
     *         } );
     *
     *     fieldset.addItems( [
     *         new OO.ui.FieldLayout( input1, {
     *             label: 'Username',
     *             align: 'top'
     *         } ),
     *         new OO.ui.FieldLayout( input2, {
     *             label: 'Password',
     *             align: 'top'
     *         } ),
     *         new OO.ui.FieldLayout( submit )
     *     ] );
     *     var form = new OO.ui.FormLayout( {
     *         items: [ fieldset ],
     *         action: '/api/formhandler',
     *         method: 'get'
     *     } )
     *     $( document.body ).append( form.$element );
     *
     * ResourceLoader module: `oojs-ui-core`
     *
     * @see https://doc.wikimedia.org/oojs-ui/master/js/#!/api/OO.ui.FormLayout
     */
    interface FormLayout extends FormLayout.Props, FormLayout.Prototype {}

    namespace FormLayout {
        interface EventMap extends mixin.GroupElement.EventMap {
            submit: [];
        }

        interface ConfigOptions extends Layout.ConfigOptions, mixin.GroupElement.ConfigOptions {
            /** HTML form `method` attribute */
            method?: string;
            /** HTML form `action` attribute */
            action?: string;
            /** HTML form `enctype` attribute */
            enctype?: string;
            /** Fieldset layouts to add to the form layout. */
            items?: FieldsetLayout[];
        }

        type Static = Layout.Static;

        interface Props extends Layout.Props, mixin.GroupElement.Props {}

        interface Prototype extends Layout.Prototype, mixin.GroupElement.Prototype {
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
            new(config?: ConfigOptions): FormLayout;
            prototype: Prototype;
            static: Static;
            super: Layout.Constructor;
            /** @deprecated Use `super` instead */
            parent: Layout.Constructor;
        }
    }

    const FormLayout: FormLayout.Constructor;
}

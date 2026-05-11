declare namespace OO.ui {
    /**
     * MenuSelectWidget is a {@link OO.ui.SelectWidget select widget} that contains options and
     * is used together with OO.ui.MenuOptionWidget. It is designed be used as part of another widget.
     * See {@link OO.ui.DropdownWidget DropdownWidget},
     * {@link OO.ui.ComboBoxInputWidget ComboBoxInputWidget}, and
     * {@link OO.ui.mixin.LookupElement LookupElement} for examples of widgets that contain menus.
     * MenuSelectWidgets themselves are not instantiated directly, rather subclassed
     * and customized to be opened, closed, and displayed as needed.
     *
     * By default, menus are clipped to the visible viewport and are not visible when a user presses the
     * mouse outside the menu.
     *
     * Menus also have support for keyboard interaction:
     *
     * - Enter/Return key: choose and select a menu option
     * - Up-arrow key: highlight the previous menu option
     * - Down-arrow key: highlight the next menu option
     * - Escape key: hide the menu
     *
     * Unlike most widgets, MenuSelectWidget is initially hidden and must be shown by calling
     * {@link toggle}.
     *
     * Please see the [OOUI documentation on MediaWiki](https://www.mediawiki.org/wiki/OOUI/Widgets/Selects_and_Options)
     * for more information.
     *
     * ResourceLoader module: `oojs-ui-core`
     *
     * @see https://doc.wikimedia.org/oojs-ui/master/js/#!/api/OO.ui.MenuSelectWidget
     */
    interface MenuSelectWidget extends MenuSelectWidget.Props, MenuSelectWidget.Prototype {}

    namespace MenuSelectWidget {
        interface EventMap extends SelectWidget.EventMap {
            ready: [];
        }

        interface ConfigOptions
            extends
                SelectWidget.ConfigOptions,
                mixin.ClippableElement.ConfigOptions,
                mixin.FloatableElement.ConfigOptions
        {
            /**
             * Text input used to implement option highlighting for menu
             * items that match the text the user types. This config is used by
             * {@link OO.ui.ComboBoxInputWidget ComboBoxInputWidget} and
             * {@link OO.ui.mixin.LookupElement LookupElement}
             */
            input?: TextInputWidget;

            /**
             * Text input used to implement option highlighting for menu items that match
             * the text the user types. This config is used by
             * {@link OO.ui.TagMultiselectWidget TagMultiselectWidget}
             */
            $input?: JQuery;

            /**
             * Widget associated with the menu's active state. If the user clicks
             * the mouse anywhere on the page outside of this widget, the menu is hidden. For
             * example, if there is a button that toggles the menu's visibility on click, the menu
             * will be hidden then re-shown when the user clicks that button, unless the button (or
             * its parent widget) is passed in here.
             */
            widget?: Widget;

            /** Hide the menu when the mouse is pressed outside the menu. */
            autoHide?: boolean;

            /** If these elements are clicked, don't auto-hide the menu. */
            $autoCloseIgnore?: JQuery;

            /** Hide the menu when the user chooses an option. */
            hideOnChoose?: boolean;

            /** Filter the displayed options from the input */
            filterFromInput?: boolean;

            /** Highlight the first result when filtering */
            highlightOnFilter?: boolean;

            /**
             * The mode by which the menu filters the results.
             * Options are 'exact', 'prefix' or 'substring'. See `OO.ui.SelectWidget.getItemMatcher`
             */
            filterMode?: "substring" | "prefix" | "exact";

            /**
             * Width of the menu as a number of pixels or CSS string with unit
             * suffix, used by {@link OO.ui.mixin.ClippableElement ClippableElement}
             */
            width?: number | string;
        }

        interface Static extends SelectWidget.Static {
            /**
             * Positions to flip to if there isn't room in the container for the
             * menu in a specific direction.
             */
            flippedPositions: Record<string, string>;
        }

        interface Props extends SelectWidget.Props, mixin.ClippableElement.Props, mixin.FloatableElement.Props {
            $input: JQuery | null;
            $widget: JQuery | null;
            $autoCloseIgnore: JQuery;
        }

        interface Prototype
            extends SelectWidget.Prototype, mixin.ClippableElement.Prototype, mixin.FloatableElement.Prototype
        {
            /**
             * Return the visible items in the menu.
             *
             * @return Visible items
             */
            getVisibleItems(): MenuOptionWidget[];

            /**
             * Toggle visibility of the menu for screen readers.
             *
             * @param screenReaderMode
             */
            toggleScreenReaderMode(screenReaderMode: boolean): void;

            /**
             * Scroll to the top of the menu
             */
            scrollToTop(): void;

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
            new(config?: ConfigOptions): MenuSelectWidget;
            prototype: Prototype;
            static: Static;
            super: SelectWidget.Constructor;
            /** @deprecated Use `super` instead */
            parent: SelectWidget.Constructor;
        }
    }

    const MenuSelectWidget: MenuSelectWidget.Constructor;
}

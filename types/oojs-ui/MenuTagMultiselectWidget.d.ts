declare namespace OO.ui {
    /**
     * MenuTagMultiselectWidget is a {@link OO.ui.TagMultiselectWidget OO.ui.TagMultiselectWidget}
     * intended to use a menu of selectable options.
     *
     *     // A basic MenuTagMultiselectWidget.
     *     var widget = new OO.ui.MenuTagMultiselectWidget( {
     *         inputPosition: 'outline',
     *         options: [
     *            { data: 'option1', label: 'Option 1', icon: 'tag' },
     *            { data: 'option2', label: 'Option 2' },
     *            { data: 'option3', label: 'Option 3' },
     *         ],
     *         selected: [ 'option1', 'option2' ]
     *     } );
     *     $( document.body ).append( widget.$element );
     *
     * ResourceLoader module: `oojs-ui-widgets`
     *
     * @see https://doc.wikimedia.org/oojs-ui/master/js/#!/api/OO.ui.MenuTagMultiselectWidget
     */
    interface MenuTagMultiselectWidget extends MenuTagMultiselectWidget.Props, MenuTagMultiselectWidget.Prototype {}

    namespace MenuTagMultiselectWidget {
        type Option =
            & Required<Pick<MenuOptionWidget.ConfigOptions, "data">>
            & Pick<MenuOptionWidget.ConfigOptions, "label" | "icon">;

        interface ConfigOptions extends TagMultiselectWidget.ConfigOptions {
            /** Clear the text input value when a menu option is chosen */
            clearInputOnChoose?: boolean;
            /** Configuration object for the menu widget */
            menu?: MenuSelectWidget.ConfigOptions;
            /**
             * An overlay for the menu.
             * See <https://www.mediawiki.org/wiki/OOUI/Concepts#Overlays>.
             */
            $overlay?: JQuery;
            /** Array of menu options in the format `{ data: …, label: … }` */
            options?: Option[];
        }

        type Static = TagMultiselectWidget.Static;

        type Props = TagMultiselectWidget.Props;

        interface Prototype extends TagMultiselectWidget.Prototype {
            /**
             * Respond to resize event
             */
            onResize(): void;

            /**
             * Respond to input change event
             */
            onInputChange(): void;

            /**
             * Respond to menu choose event, which is intentional by the user.
             *
             * @param menuItem Selected menu items
             * @param selected Item is selected
             */
            onMenuChoose(menuItem: OptionWidget, selected: boolean): void;

            /**
             * Respond to menu toggle event. Reset item highlights on hide.
             *
             * @param isVisible The menu is visible
             */
            onMenuToggle(isVisible: boolean): void;

            /**
             * Create the menu for this widget. This is in a separate method so that
             * child classes can override this without polluting the constructor with
             * unnecessary extra objects that will be overridden.
             *
             * @param menuConfig Configuration options
             * @return Menu widget
             */
            createMenuWidget(menuConfig: MenuSelectWidget.ConfigOptions): MenuSelectWidget;

            /**
             * Add options to the menu, ensuring that they are unique by data.
             *
             * @param menuOptions Object defining options
             */
            addOptions(menuOptions: Option[]): void;

            /**
             * Create a menu option widget.
             *
             * @param data Item data
             * @param label Item label
             * @param icon Symbolic icon name
             * @return Option widget
             */
            createMenuOptionWidget(data: string, label?: string, icon?: Icon): OptionWidget;

            /**
             * Get the menu
             *
             * @return Menu
             */
            getMenu(): MenuSelectWidget;

            /**
             * Get the allowed values list
             *
             * @return Allowed data values
             */
            getAllowedValues(): string[];
        }

        interface Constructor {
            /** @param config Configuration options */
            new(config?: ConfigOptions): MenuTagMultiselectWidget;
            prototype: Prototype;
            static: Static;
            super: TagMultiselectWidget.Constructor;
            /** @deprecated Use `super` instead */
            parent: TagMultiselectWidget.Constructor;
        }
    }

    const MenuTagMultiselectWidget: MenuTagMultiselectWidget.Constructor;
}

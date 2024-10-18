declare namespace OO.ui {
    /**
     * ButtonMenuSelectWidgets launch a menu of options created with OO.ui.MenuOptionWidget.
     * The ButtonMenuSelectWidget takes care of opening and displaying the menu so that
     * users can interact with it.
     *
     *     // A ButtonMenuSelectWidget with a menu that contains three options.
     *     var buttonMenu = new OO.ui.ButtonMenuSelectWidget( {
     *         icon: 'menu',
     *         menu: {
     *             items: [
     *                 new OO.ui.MenuOptionWidget( {
     *                     data: 'a',
     *                     label: 'First'
     *                 } ),
     *                 new OO.ui.MenuOptionWidget( {
     *                     data: 'b',
     *                     label: 'Second'
     *                 } ),
     *                 new OO.ui.MenuOptionWidget( {
     *                     data: 'c',
     *                     label: 'Third'
     *                 } )
     *             ]
     *         }
     *     } );
     *
     *     $( document.body ).append( buttonMenu.$element );
     *
     *     // When using the `clearOnSelect` option, listen to the `choose` event
     *     // to avoid getting the null select event.
     *     buttonMenu.getMenu().on( 'choose', function ( menuOption ) {
     *         console.log( menuOption.getData() );
     *     } );
     *
     * ResourceLoader module: `oojs-ui-widgets`
     *
     * @see https://doc.wikimedia.org/oojs-ui/master/js/#!/api/OO.ui.ButtonMenuSelectWidget
     */
    interface ButtonMenuSelectWidget extends ButtonMenuSelectWidget.Props, ButtonMenuSelectWidget.Prototype {}

    namespace ButtonMenuSelectWidget {
        interface ConfigOptions extends ButtonWidget.ConfigOptions {
            /** Clear selection immediately after making it */
            clearOnSelect?: boolean;
            /**
             * Class for the menu widget. This
             * must be a subclass of {@link OO.ui.MenuSelectWidget menu select widget}.
             */
            menuClass?: new(...args: any[]) => any;
            /**
             * Configuration options to pass to {@link OO.ui.MenuSelectWidget menu select widget}.
             */
            menu?: MenuSelectWidget.ConfigOptions;
            /**
             * Render the menu into a separate layer. This configuration is
             * useful in cases where the expanded menu is larger than its containing `<div>`. The
             * specified overlay layer is usually on top of the containing `<div>` and has a larger
             * area. By default, the menu uses relative positioning. Pass 'true' to use the default
             * overlay. See <https://www.mediawiki.org/wiki/OOUI/Concepts#Overlays>.
             */
            $overlay?: JQuery | boolean;
        }

        type Static = ButtonWidget.Static;

        interface Props extends ButtonWidget.Props {
            $overlay: JQuery;
        }

        interface Prototype extends ButtonWidget.Prototype {
            /**
             * Get the menu.
             *
             * @return Menu of widget
             */
            getMenu(): MenuSelectWidget;
        }

        interface Constructor {
            /** @param config Configuration options */
            new(config?: ConfigOptions): ButtonMenuSelectWidget;
            prototype: Prototype;
            static: Static;
            super: ButtonWidget.Constructor;
            /** @deprecated Use `super` instead */
            parent: ButtonWidget.Constructor;
        }
    }

    const ButtonMenuSelectWidget: ButtonMenuSelectWidget.Constructor;
}

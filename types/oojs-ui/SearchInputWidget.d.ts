declare namespace OO.ui {
    /**
     * SearchInputWidgets are TextInputWidgets with `type="search"` assigned and feature a
     * {@link OO.ui.mixin.IconElement 'search' icon} as well as a functional
     * {@link OO.ui.mixin.IndicatorElement 'clear' indicator} by default.
     * Please see the [OOUI documentation on MediaWiki](https://www.mediawiki.org/wiki/OOUI/Widgets/Inputs#SearchInputWidget)
     * for more information and examples.
     *
     * ResourceLoader module: `oojs-ui-core`
     *
     * @see https://doc.wikimedia.org/oojs-ui/master/js/#!/api/OO.ui.SearchInputWidget
     */
    interface SearchInputWidget extends SearchInputWidget.Props, SearchInputWidget.Prototype {}

    namespace SearchInputWidget {
        type ConfigOptions = TextInputWidget.ConfigOptions;

        type Static = TextInputWidget.Static;

        type Props = TextInputWidget.Props;

        interface Prototype extends TextInputWidget.Prototype {
            /**
             * Clear and focus the input element when pressing enter on the 'clear' indicator.
             *
             * @param e KeyDown event
             * @return
             */
            onIndicatorKeyDown(e: JQuery.Event): boolean;

            /**
             * Clear and focus the input element when clicking on the 'clear' indicator.
             *
             * @param e Click event
             * @return
             */
            onIndicatorClick(e: JQuery.Event): boolean;

            /**
             * Update the 'clear' indicator displayed on type: 'search' text
             * fields, hiding it when the field is already empty or when it's not
             * editable.
             */
            updateSearchIndicator(): void;
        }

        interface Constructor {
            /** @param config Configuration options */
            new(config?: ConfigOptions): SearchInputWidget;
            prototype: Prototype;
            static: Static;
            super: TextInputWidget.Constructor;
            /** @deprecated Use `super` instead */
            parent: TextInputWidget.Constructor;
        }
    }

    const SearchInputWidget: SearchInputWidget.Constructor;
}

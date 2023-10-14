declare namespace OO.ui {
    /**
     * SearchWidgets combine a {@link OO.ui.TextInputWidget text input field},
     * where users can type a search query, and a menu of search results,
     * which is displayed beneath the query field.
     * Unlike {@link OO.ui.mixin.LookupElement lookup menus}, search result menus are always visible
     * to the user. Users can choose an item from the menu or type a query into the text field to
     * search for a matching result item.
     * In general, search widgets are used inside a separate {@link OO.ui.Dialog dialog} window.
     *
     * Each time the query is changed, the search result menu is cleared and repopulated. Please see
     * the [OOUI demos](https://doc.wikimedia.org/oojs-ui/master/demos/#SearchInputWidget-type-search)
     * for an example.
     *
     * ResourceLoader module: `oojs-ui-widgets`
     *
     * @see https://doc.wikimedia.org/oojs-ui/master/js/#!/api/OO.ui.SearchWidget
     */
    interface SearchWidget<T extends InputWidget = SearchInputWidget>
        extends SearchWidget.Props, SearchWidget.Prototype<T>
    {}

    namespace SearchWidget {
        interface ConfigOptions<T extends InputWidget> extends Widget.ConfigOptions {
            /** Placeholder text for query input */
            placeholder?: JQuery | string;
            /** Initial query value */
            value?: string;
            /**
             * {@link OO.ui.InputWidget Input widget} for search. Defaults
             * to a {@link OO.ui.SearchInputWidget search input widget} if not provided.
             */
            input?: T;
        }

        type Static = Widget.Static;

        interface Props extends Widget.Props {
            $query: JQuery;
            $results: JQuery;
        }

        interface Prototype<T extends InputWidget = InputWidget> extends Widget.Prototype {
            /**
             * Get the query input.
             *
             * @return Query input
             */
            getQuery(): T;

            /**
             * Get the search results menu.
             *
             * @return Menu of search results
             */
            getResults(): SelectWidget;
        }

        interface Constructor {
            /** @param config Configuration options */
            new<T extends InputWidget = SearchInputWidget>(config?: ConfigOptions<T>): SearchWidget<T>;
            prototype: Prototype;
            static: Static;
            super: Widget.Constructor;
            /** @deprecated Use `super` instead */
            parent: Widget.Constructor;
        }
    }

    const SearchWidget: SearchWidget.Constructor;
}

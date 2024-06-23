declare namespace OO.ui.mixin {
    /**
     * LookupElement is a mixin that creates a {@link OO.ui.MenuSelectWidget menu} of suggested
     * values for a {@link OO.ui.TextInputWidget text input widget}. Suggested values are based on
     * the characters the user types into the text input field and, in general, the menu is only
     * displayed when the user types. If a suggested value is chosen from the lookup menu, that value
     * becomes the value of the input field.
     *
     * Note that a new menu of suggested items is displayed when a value is chosen from the
     * lookup menu. If this is not the desired behavior, disable lookup menus with the
     * {@link setLookupsDisabled} method, then set the value, then re-enable lookups.
     *
     * See the [OOUI demos](https://doc.wikimedia.org/oojs-ui/master/demos/#LookupElement-try-inputting-an-integer)
     * for an example.
     *
     * ResourceLoader module: `oojs-ui-widgets`
     *
     * @see https://doc.wikimedia.org/oojs-ui/master/js/#!/api/OO.ui.mixin.LookupElement
     */
    interface LookupElement extends RequestManager {
        /**
         * Disable or re-enable lookups.
         *
         * When lookups are disabled, calls to populateLookupMenu will be ignored.
         *
         * @param disabled Disable lookups
         */
        setLookupsDisabled(disabled: boolean): void;

        /**
         * Set the read-only state of the widget.
         *
         * This will also disable/enable the lookups functionality.
         *
         * @param readOnly Make input read-only
         * @return The element, for chaining
         */
        setReadOnly(readOnly: boolean): this;
    }

    namespace LookupElement {
        interface ConfigOptions extends RequestManager.ConfigOptions {
            /**
             * Overlay for the lookup menu; defaults to relative positioning.
             * See <https://www.mediawiki.org/wiki/OOUI/Concepts#Overlays>.
             */
            $overlay?: JQuery;

            /**
             * The container element. The lookup menu is rendered beneath the
             * specified element.
             */
            $container?: JQuery;

            /**
             * Configuration options to pass to {@link OO.ui.MenuSelectWidget menu select widget}
             */
            menu?: MenuSelectWidget.ConfigOptions;

            /**
             * Request and display a lookup menu when the text input is empty.
             * By default, the lookup menu is not generated and displayed until the user begins to
             * type.
             */
            allowSuggestionsWhenEmpty?: boolean;

            /**
             * Whether the first lookup result should be highlighted
             * (so, that the user can take it over into the input with simply pressing return)
             * automatically or not.
             */
            highlightFirst?: boolean;

            /**
             * Show suggestions when focusing the input. If this
             * is set to false, suggestions will still be shown on a mousedown triggered focus.
             * This matches browser autocomplete behavior.
             */
            showSuggestionsOnFocus?: boolean;
        }

        interface Constructor {
            /** @param config Configuration options */
            new(config?: ConfigOptions): LookupElement;
            prototype: LookupElement;
            static: {};
        }
    }

    const LookupElement: LookupElement.Constructor;
}

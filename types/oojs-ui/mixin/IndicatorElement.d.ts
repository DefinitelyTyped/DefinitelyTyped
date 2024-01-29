declare namespace OO.ui.mixin {
    /**
     * IndicatorElement is often mixed into other classes to generate an indicator.
     * Indicators are small graphics that are generally used in two ways:
     *
     * - To draw attention to the status of an item. For example, an indicator might be
     *   used to show that an item in a list has errors that need to be resolved.
     * - To clarify the function of a control that acts in an exceptional way (a button
     *   that opens a menu instead of performing an action directly, for example).
     *
     * For a list of indicators included in the library, please see the
     * [OOUI documentation on MediaWiki](https://www.mediawiki.org/wiki/OOUI/Widgets/Icons,_Indicators,_and_Labels#Indicators).
     *
     * Note that indicators don't come with any functionality by default. See e.g.
     * {@link OO.ui.SearchInputWidget SearchInputWidget} for a working 'clear' or
     * {@link OO.ui.ComboBoxInputWidget ComboBoxInputWidget} for a working 'down' indicator.
     *
     * ResourceLoader module: `oojs-ui-core`
     *
     * @see https://doc.wikimedia.org/oojs-ui/master/js/#!/api/OO.ui.mixin.IndicatorElement
     */
    interface IndicatorElement extends IndicatorElement.Props, IndicatorElement.Prototype {}

    namespace IndicatorElement {
        interface ConfigOptions {
            /**
             * The indicator element created by the class. If this configuration is omitted,
             * the indicator element will use a generated `<span>`.
             */
            $indicator?: JQuery;

            /**
             * Symbolic name of the indicator (e.g. ‘required’ or ‘down’).
             * See the [OOUI documentation on MediaWiki](https://www.mediawiki.org/wiki/OOUI/Widgets/Icons,_Indicators,_and_Labels#Indicators)
             * for a list of indicators included in the library.
             */
            indicator?: Indicator;
        }

        interface Static {
            /**
             * Symbolic name of the indicator (e.g. ‘required’ or ‘down’).
             * The static property will be overridden if the {@link ConfigOptions.indicator indicator}
             * configuration is used.
             */
            indicator: string | null;

            /**
             * A text string used as the indicator title, a function that returns title text, or `null`
             * for no title. The static property will be overridden if the indicatorTitle configuration
             * is used.
             */
            indicatorTitle: Deferrable<string> | null;
        }

        interface Props {
            $indicator: JQuery;
        }

        interface Prototype {
            /**
             * Set the indicator element.
             *
             * If an element is already set, it will be cleaned up before setting up the new element.
             *
             * @param $indicator Element to use as indicator
             */
            setIndicatorElement($indicator: JQuery): void;

            /**
             * Set the indicator by its symbolic name. Built-in names currently include ‘clear’, ‘up’,
             * ‘down’ and ‘required’ (declared via indicators.json). Use `null` to remove the indicator.
             *
             * @param indicator Symbolic name of indicator, or `null` for no indicator
             * @return The element, for chaining
             */
            setIndicator(indicator: Indicator | null): this;

            /**
             * Get the symbolic name of the indicator (e.g., ‘required’ or ‘down’).
             *
             * @return Symbolic name of indicator, null if not set
             */
            getIndicator(): string | null;
        }

        interface Constructor {
            /** @param config Configuration options */
            new(config?: ConfigOptions): IndicatorElement;
            prototype: Prototype;
            static: Static;
        }
    }

    const IndicatorElement: IndicatorElement.Constructor;
}

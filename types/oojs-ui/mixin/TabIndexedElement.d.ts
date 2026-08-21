declare namespace OO.ui.mixin {
    /**
     * The TabIndexedElement class is an attribute mixin used to add additional functionality to an
     * element created by another class. The mixin provides a ‘tabIndex’ property, which specifies the
     * order in which users will navigate through the focusable elements via the Tab key.
     *
     *     // TabIndexedElement is mixed into the ButtonWidget class
     *     // to provide a tabIndex property.
     *     var button1 = new OO.ui.ButtonWidget( {
     *             label: 'fourth',
     *             tabIndex: 4
     *         } ),
     *         button2 = new OO.ui.ButtonWidget( {
     *             label: 'second',
     *             tabIndex: 2
     *         } ),
     *         button3 = new OO.ui.ButtonWidget( {
     *             label: 'third',
     *             tabIndex: 3
     *         } ),
     *         button4 = new OO.ui.ButtonWidget( {
     *             label: 'first',
     *             tabIndex: 1
     *         } );
     *     $( document.body ).append(
     *         button1.$element,
     *         button2.$element,
     *         button3.$element,
     *         button4.$element
     *      );
     *
     * ResourceLoader module: `oojs-ui-core`
     *
     * @see https://doc.wikimedia.org/oojs-ui/master/js/#!/api/OO.ui.mixin.TabIndexedElement
     */
    interface TabIndexedElement extends TabIndexedElement.Props, TabIndexedElement.Prototype {}

    namespace TabIndexedElement {
        interface ConfigOptions {
            /**
             * The element that should use the tabindex functionality. By default,
             * the functionality is applied to the element created by the class ({@link Element.Props.$element $element}).
             * If a different element is specified, the tabindex functionality will be applied to it instead.
             */
            $tabIndexed?: JQuery;

            /**
             * Number that specifies the element’s position in the
             * tab-navigation order (e.g., 1 for the first focusable element). Use 0 to use the default
             * navigation order; use -1 to remove the element from the tab-navigation flow.
             */
            tabIndex?: Numberish | null;
        }

        interface Props {
            $tabIndexed: JQuery;
        }

        interface Prototype {
            /**
             * Set the element that should use the tabindex functionality.
             *
             * This method is used to retarget a tabindex mixin so that its functionality applies
             * to the specified element. If an element is currently using the functionality, the
             * mixin’s effect on that element is removed before the new element is set up.
             *
             * @param $tabIndexed Element that should use the tabindex functionality
             * @return The element, for chaining
             */
            setTabIndexedElement($tabIndexed: JQuery): this;

            /**
             * Set the value of the tabindex.
             *
             * @param tabIndex Tabindex value, or `null` for no tabindex
             * @return The element, for chaining
             */
            setTabIndex(tabIndex: Numberish | null): this;

            /**
             * Get the value of the tabindex.
             *
             * @return Tabindex value
             */
            getTabIndex(): number | null;

            /**
             * Get an ID of a focusable element of this widget, if any, to be used for `<label for>`
             * value.
             *
             * If the element already has an ID then that is returned, otherwise unique ID is
             * generated, set on the element, and returned.
             *
             * @return The ID of the focusable element
             */
            getInputId(): string | null;

            /**
             * Focus this element.
             *
             * @return The element, for chaining
             */
            focus(): this;

            /**
             * Blur this element.
             *
             * @return The element, for chaining
             */
            blur(): this;
        }

        interface Constructor {
            /** @param config Configuration options */
            new(config?: ConfigOptions): TabIndexedElement;
            prototype: Prototype;
            static: {};
        }
    }

    const TabIndexedElement: TabIndexedElement.Constructor;
}

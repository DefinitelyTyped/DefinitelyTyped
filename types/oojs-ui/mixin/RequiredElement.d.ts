declare namespace OO.ui.mixin {
    /**
     * RequiredElement is mixed into other classes to provide a `required` attribute.
     *
     * ResourceLoader module: `oojs-ui-core`
     *
     * @see https://doc.wikimedia.org/oojs-ui/master/js/#!/api/OO.ui.mixin.RequiredElement
     */
    interface RequiredElement extends RequiredElement.Props, RequiredElement.Prototype {}

    namespace RequiredElement {
        interface ConfigOptions {
            /**
             * The element to which the `required` attribute is applied.
             * If this config is omitted, the required functionality is applied to $input if it
             * exists, or {@link Element.Props.$element $element} if it doesn't.
             */
            $required?: JQuery;

            /** Mark the field as required with `true`. */
            required?: boolean;

            /**
             * Element which mixes in OO.ui.mixin.IndicatorElement.
             * Will set the indicator on that element to 'required' when the element is required.
             * Note that `false` & setting `indicator: 'required'` will result in no indicator shown.
             */
            indicatorElement?: Element;
        }

        interface Props {
            $required: JQuery;
        }

        interface Prototype {
            /**
             * Set the element which can take the required attribute.
             *
             * This method is used to retarget a RequiredElement mixin so that its functionality
             * applies to the specified element.
             * If an element is already set, the mixin’s effect on that element is removed before
             * the new element is set up.
             *
             * @param $required Element that should use the 'required' functionality
             */
            setRequiredElement($required: JQuery): void;

            /**
             * Check if the input is {@link ConfigOptions.required required}.
             *
             * @return
             */
            isRequired(): boolean;

            /**
             * Set the {@link ConfigOptions.required required} state of the input.
             *
             * @param state Make input required
             * @return The widget, for chaining
             */
            setRequired(state: boolean): this;
        }

        interface Constructor {
            /** @param config Configuration options */
            new(config?: ConfigOptions): RequiredElement;
            prototype: Prototype;
            static: {};
        }
    }

    const RequiredElement: RequiredElement.Constructor;
}

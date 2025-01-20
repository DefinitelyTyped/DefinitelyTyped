declare namespace OO.ui.mixin {
    /**
     * TitledElement is mixed into other classes to provide a `title` attribute.
     * Titles are rendered by the browser and are made visible when the user moves the mouse over
     * the element. Titles are not visible on touch devices.
     *
     *     // TitledElement provides a `title` attribute to the
     *     // ButtonWidget class.
     *     var button = new OO.ui.ButtonWidget( {
     *         label: 'Button with Title',
     *         title: 'I am a button'
     *     } );
     *     $( document.body ).append( button.$element );
     *
     * ResourceLoader module: `oojs-ui-core`
     *
     * @see https://doc.wikimedia.org/oojs-ui/master/js/#!/api/OO.ui.mixin.TitledElement
     */
    interface TitledElement extends TitledElement.Props, TitledElement.Prototype {}

    namespace TitledElement {
        interface ConfigOptions {
            /**
             * The element to which the `title` attribute is applied.
             * If this config is omitted, the title functionality is applied to
             * {@link Element.Props.$element $element}, the element created by the class.
             */
            $titled?: JQuery;

            /**
             * The title text or a function that returns text. If this config is omitted, the value
             * of the {@link Static.title static title} property is used. If config for an invisible
             * label ({@link OO.ui.mixin.LabelElement}) is present, and a title is omitted, the label
             * will be used as a fallback for the title.
             */
            title?: Deferrable<string>;
        }

        interface Static {
            /**
             * The title text, a function that returns text, or `null` for no title. The value of the
             * static property is overridden if the {@link ConfigOptions.title title} config option
             * is used.
             *
             * If the element has a default title (e.g. `<input type=file>`), `null` will allow that
             * title to be shown. Use empty string to suppress it.
             */
            title: Deferrable<string> | null;
        }

        interface Props {
            $titled: JQuery;
        }

        interface Prototype {
            /**
             * Set the titled element.
             *
             * This method is used to retarget a TitledElement mixin so that its functionality
             * applies to the specified element.
             * If an element is already set, the mixin’s effect on that element is removed before
             * the new element is set up.
             *
             * @param $titled Element that should use the 'titled' functionality
             */
            setTitledElement($titled: JQuery): void;

            /**
             * Set title.
             *
             * @param title Title text, a function that returns text, or `null` for no title
             * @return The element, for chaining
             */
            setTitle(title: Deferrable<string> | null): this;

            /**
             * Get title.
             *
             * @return Title string
             */
            getTitle(): string | null;
        }

        interface Constructor {
            /** @param config Configuration options */
            new(config?: ConfigOptions): TitledElement;
            prototype: Prototype;
            static: Static;
        }
    }

    const TitledElement: TitledElement.Constructor;
}

declare namespace OO.ui.mixin {
    /**
     * AccessKeyedElement is mixed into other classes to provide an `accesskey` HTML attribute.
     * Access keys allow an user to go to a specific element by using a shortcut combination of a
     * browser specific keys + the key set to the field.
     *
     *     // AccessKeyedElement provides an `accesskey` attribute to the
     *     // ButtonWidget class.
     *     var button = new OO.ui.ButtonWidget( {
     *         label: 'Button with access key',
     *         accessKey: 'k'
     *     } );
     *     $( document.body ).append( button.$element );
     *
     * ResourceLoader module: `oojs-ui-core`
     *
     * @see https://doc.wikimedia.org/oojs-ui/master/js/#!/api/OO.ui.mixin.AccessKeyedElement
     */
    interface AccessKeyedElement extends AccessKeyedElement.Props, AccessKeyedElement.Prototype {}

    namespace AccessKeyedElement {
        interface ConfigOptions {
            /**
             * The element to which the `accesskey` attribute is applied.
             * If this config is omitted, the access key functionality is applied to
             * {@link Element.Props.$element $element}, the element created by the class.
             */
            $accessKeyed?: JQuery;

            /**
             * The key or a function that returns the key. If this config is omitted, no access key
             * will be added.
             */
            accessKey?: Deferrable<string> | null;
        }

        interface Static {
            /**
             * The access key, a function that returns a key, or `null` for no access key.
             */
            accessKey: Deferrable<string> | null;
        }

        interface Props {
            $accessKeyed: JQuery;
        }

        interface Prototype {
            /**
             * Set the access keyed element.
             *
             * This method is used to retarget a AccessKeyedElement mixin so that its functionality
             * applies to the specified element.
             * If an element is already set, the mixin's effect on that element is removed before
             * the new element is set up.
             *
             * @param $accessKeyed Element that should use the 'access keyed' functionality
             */
            setAccessKeyedElement($accessKeyed: JQuery): void;

            /**
             * Set access key.
             *
             * @param accessKey Key, a function that returns a key, or `null` for no access key
             * @return The element, for chaining
             */
            setAccessKey(accessKey: Deferrable<string> | null): this;

            /**
             * Get access key.
             *
             * @return accessKey string
             */
            getAccessKey(): string;

            /**
             * Add information about the access key to the element's tooltip label.
             * (This is only public for hacky usage in {@link FieldLayout}.)
             *
             * @param title Tooltip label for `title` attribute
             * @return
             */
            formatTitleWithAccessKey(title: string): string;
        }

        interface Constructor {
            /** @param config Configuration options */
            new(config?: ConfigOptions): AccessKeyedElement;
            prototype: Prototype;
            static: Static;
        }
    }

    const AccessKeyedElement: AccessKeyedElement.Constructor;
}

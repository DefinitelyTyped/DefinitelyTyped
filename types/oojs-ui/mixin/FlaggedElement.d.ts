declare namespace OO.ui.mixin {
    /**
     * The FlaggedElement class is an attribute mixin, meaning that it is used to add
     * additional functionality to an element created by another class. The class provides
     * a ‘flags’ property assigned the name (or an array of names) of styling flags,
     * which are used to customize the look and feel of a widget to better describe its
     * importance and functionality.
     *
     * The library currently contains the following styling flags for general use:
     *
     * - **progressive**: Progressive styling is applied to convey that the widget will move the user
     *   forward in a process.
     * - **destructive**: Destructive styling is applied to convey that the widget will remove
     *   something.
     *
     * The flags affect the appearance of the buttons:
     *
     *     // FlaggedElement is mixed into ButtonWidget to provide styling flags
     *     var button1 = new OO.ui.ButtonWidget( {
     *             label: 'Progressive',
     *             flags: 'progressive'
     *         } ),
     *         button2 = new OO.ui.ButtonWidget( {
     *             label: 'Destructive',
     *             flags: 'destructive'
     *         } );
     *     $( document.body ).append( button1.$element, button2.$element );
     *
     * {@link OO.ui.ActionWidget ActionWidgets}, which are a special kind of button that execute an
     * action, use these flags: **primary** and **safe**.
     * Please see the [OOUI documentation on MediaWiki](https://www.mediawiki.org/wiki/OOUI/Elements/Flagged)
     * for more information.
     *
     * ResourceLoader module: `oojs-ui-core`
     *
     * @see https://doc.wikimedia.org/oojs-ui/master/js/#!/api/OO.ui.mixin.FlaggedElement
     */
    interface FlaggedElement extends FlaggedElement.Props, FlaggedElement.Prototype {}

    namespace FlaggedElement {
        interface EventMap {
            flag: [changes: Record<string, boolean>];
        }

        interface ConfigOptions {
            /**
             * The name or names of the flags (e.g., 'progressive' or 'primary')
             * to apply.
             * Please see the [OOUI documentation on MediaWiki](https://www.mediawiki.org/wiki/OOUI/Elements/Flagged)
             * for more information about available flags.
             */
            flags?: string | string[];

            /**
             * The flagged element. By default,
             * the flagged functionality is applied to the element created by the class ($element).
             * If a different element is specified, the flagged functionality will be applied to it
             *  instead.
             */
            $flagged?: JQuery;
        }

        interface Static {
            flags: string | string[] | Record<string, boolean>;
        }

        interface Props {
            $flagged: JQuery;
        }

        interface Prototype {
            /**
             * Set the flagged element.
             *
             * This method is used to retarget a flagged mixin so that its functionality applies to
             * the specified element.
             * If an element is already set, the method will remove the mixin’s effect on that element.
             *
             * @param $flagged Element that should be flagged
             */
            setFlaggedElement($flagged: JQuery): void;

            /**
             * Check if the specified flag is set.
             *
             * @param flag Name of flag
             * @return The flag is set
             */
            hasFlag(flag: string): boolean;

            /**
             * Get the names of all flags set.
             *
             * @return Flag names
             */
            getFlags(): string[];

            /**
             * Clear all flags.
             *
             * @return The element, for chaining
             */
            clearFlags(): this;

            /**
             * Add one or more flags.
             *
             * @param flags A flag name, an array of flag names,
             *  or an object keyed by flag name with a boolean value that indicates whether the flag
             *  should be added (`true`) or removed (`false`).
             * @return The element, for chaining
             */
            setFlags(flags: string | string[] | Record<string, boolean>): this;
        }

        interface Constructor {
            /** @param config Configuration options */
            new(config?: ConfigOptions): FlaggedElement;
            prototype: Prototype;
            static: Static;
        }
    }

    const FlaggedElement: FlaggedElement.Constructor;
}

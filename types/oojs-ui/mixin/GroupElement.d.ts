declare namespace OO.ui.mixin {
    /**
     * Any OOUI widget that contains other widgets (such as {@link OO.ui.ButtonWidget buttons} or
     * {@link OO.ui.OptionWidget options}) mixes in GroupElement. Adding, removing, and clearing
     * items from the group is done through the interface the class provides.
     * For more information, please see the
     * [OOUI documentation on MediaWiki](https://www.mediawiki.org/wiki/OOUI/Elements/Groups).
     *
     * ResourceLoader module: `oojs-ui-core`
     *
     * @see https://doc.wikimedia.org/oojs-ui/master/js/#!/api/OO.ui.mixin.GroupElement
     */
    interface GroupElement extends GroupElement.Props, GroupElement.Prototype {}

    namespace GroupElement {
        interface EventMap extends EmitterListEventMap {
            change: [items: Element[]];
        }

        interface ConfigOptions {
            /**
             * The container element created by the class. If this configuration is omitted, the group
             * element will use a generated `<div>`.
             */
            $group?: JQuery;
        }

        interface Props {
            $group: JQuery;
        }

        // HACK: Omit props to address LSP violation issue
        interface Prototype extends Omit<EmitterList, "addItems" | "removeItems" | "clearItems"> {
            /**
             * Set the group element.
             *
             * If an element is already set, items will be moved to the new element.
             *
             * @param $group Element to use as group
             */
            setGroupElement($group: JQuery): void;

            /**
             * Find an item by its data.
             *
             * Only the first item with matching data will be returned. To return all matching items,
             * use the {@link findItemsFromData} method.
             *
             * @param data Item data to search for
             * @return Item with equivalent data, `null` if none exists
             */
            findItemFromData(data: any): Element | null;

            /**
             * Find items by their data.
             *
             * All items with matching data will be returned. To return only the first match, use the
             * {@link findItemFromData} method instead.
             *
             * @param data Item data to search for
             * @return  Items with equivalent data
             */
            findItemsFromData(data: any): Element[];

            /**
             * Add items to the group.
             *
             * Items will be added to the end of the group array unless the optional `index` parameter
             * specifies a different insertion point. Adding an existing item will move it to the
             * end of the array or the point specified by the `index`.
             *
             * @param items Elements to add to the group
             * @param index Index of the insertion point
             * @return The element, for chaining
             */
            addItems(items: Element[], index?: number): this;

            /**
             * Remove the specified items from a group.
             *
             * Removed items are detached (not removed) from the DOM so that they may be reused.
             * To remove all items from a group, you may wish to use the {@link clearItems} method
             * instead.
             *
             * @param items An array of items to remove
             * @return  The element, for chaining
             */
            removeItems(items: Element[]): this;

            /**
             * Clear all items from the group.
             *
             * Cleared items are detached from the DOM, not removed, so that they may be reused.
             * To remove only a subset of items from a group, use the {@link removeItems} method.
             *
             * @return The element, for chaining
             */
            clearItems(): this;
        }

        interface Constructor {
            /** @param config Configuration options */
            new(config?: ConfigOptions): GroupElement;
            prototype: Prototype;
            static: {};
        }
    }

    const GroupElement: GroupElement.Constructor;
}

import { DownshiftTypedProps, ListBoxBaseItemType } from "../../../typings/shared";

interface SharedOptions {
    locale: string,
}

interface SortItemsOptions<ItemType> extends SharedOptions, DownshiftTypedProps<ItemType> {
    compareItems(item1: ItemType, item2: ItemType, options: SharedOptions): number,
    selectedItems: ItemType[],
}

export interface MultiSelectSortingProps<ItemType extends ListBoxBaseItemType = string> {
    compareItems?(item1: ItemType, item2: ItemType, options: SharedOptions): number, // required but has default value
    sortItems?(items: ReadonlyArray<ItemType>, options: SortItemsOptions<ItemType>): ItemType[], // required but has default value
}

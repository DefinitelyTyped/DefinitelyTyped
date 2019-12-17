import * as React from "react";
import { DownshiftTypedProps, ListBoxBaseItemType } from "../../../typings/shared";
import { MultiSelectProps } from "./MultiSelect";

interface InheritedProps<ItemType extends ListBoxBaseItemType> extends MultiSelectProps<ItemType> { }

interface FilterItemsExtra<ItemType> {
    inputValue: string,
    itemToString: NonNullable<DownshiftTypedProps<ItemType>["itemToString"]>,
}

export interface FilterableMultiSelectProps<ItemType extends ListBoxBaseItemType = string> extends InheritedProps<ItemType> {
    filterItems?(items: ReadonlyArray<ItemType>, extra: FilterItemsExtra<ItemType>): ItemType[],
}

declare class FilterableMultiSelect extends React.Component<FilterableMultiSelectProps> { }

export default FilterableMultiSelect;

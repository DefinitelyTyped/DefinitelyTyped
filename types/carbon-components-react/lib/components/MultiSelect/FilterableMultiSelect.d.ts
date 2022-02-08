import * as React from "react";
import { DownshiftTypedProps, ListBoxBaseItemType } from "../../../typings/shared";
import { MultiSelectProps } from "./MultiSelect";

interface FilterItemsExtra<T> {
    inputValue: string,
    itemToString: NonNullable<DownshiftTypedProps<T>["itemToString"]>,
}

export interface FilterableMultiSelectProps<T extends ListBoxBaseItemType = string> extends MultiSelectProps<T> {
    filterItems?(items: readonly T[], extra: FilterItemsExtra<T>): T[],
    placeholder: string;
}

declare class FilterableMultiSelect<T extends ListBoxBaseItemType = string> extends React.Component<FilterableMultiSelectProps<T>> { }

export default FilterableMultiSelect;

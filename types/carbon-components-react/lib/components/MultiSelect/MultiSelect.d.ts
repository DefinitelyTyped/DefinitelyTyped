import * as React from "react";
import { DownshiftTypedProps, InternationalProps, ListBoxBaseItemType, RequiresIdProps, ThemeProps, ValidityProps } from "../../../typings/shared";
import { ListBoxProps } from "../ListBox";
import { ListBoxMenuIconTranslationKey } from "../ListBox/ListBoxMenuIcon";
import FilterableMultiSelect from "./FilterableMultiSelect";
import { MultiSelectSortingProps } from "./MultiSelectPropTypes";
import { ListBoxSize } from "../ListBox/ListBoxPropTypes";
import { ListBoxSelectionTranslationKey } from "../ListBox/ListBoxSelection";

interface InheritedProps<T extends ListBoxBaseItemType = string> extends
    DownshiftTypedProps<T>,
    InternationalProps<ListBoxMenuIconTranslationKey | ListBoxSelectionTranslationKey>,
    MultiSelectSortingProps<T>,
    RequiresIdProps,
    ThemeProps,
    ValidityProps
{
    disabled?: ListBoxProps["disabled"],
    size?: ListBoxSize,
    type?: ListBoxProps["type"],
}

export interface MultiSelectProps<T extends ListBoxBaseItemType = string> extends InheritedProps<T> {
    direction?: "bottom" | "top",
    downshiftProps?: any, // TODO
    initialSelectedItems?: readonly T[],
    items: readonly T[],
    inline?: boolean,
    label?: React.ReactNode,
    locale?: string,
    onChange: ({ selectedItems }: { selectedItems: T[] }) => void,
    open?: boolean,
    selectionFeedback?: "fixed" | "top" | "top-after-reopen",
    titleText?: string,
    useTitleInItem?: boolean,
}

declare class MultiSelect<T extends ListBoxBaseItemType = string> extends React.Component<MultiSelectProps<T>> {
    static readonly Filterable: typeof FilterableMultiSelect;
}

export default MultiSelect;

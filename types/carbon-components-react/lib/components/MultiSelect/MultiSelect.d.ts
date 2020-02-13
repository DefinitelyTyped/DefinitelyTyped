import * as React from "react";
import { DownshiftTypedProps, InternationalProps, ListBoxBaseItemType, RequiresIdProps, ThemeProps, ValidityProps } from "../../../typings/shared";
import { ListBoxProps } from "../ListBox";
import { ListBoxMenuIconTranslationKey } from "../ListBox/ListBoxMenuIcon";
import FilterableMultiSelect from "./FilterableMultiSelect";
import { MultiSelectSortingProps } from "./MultiSelectPropTypes";

interface InheritedProps<T extends ListBoxBaseItemType = string> extends
    DownshiftTypedProps<T>,
    InternationalProps<ListBoxMenuIconTranslationKey>,
    MultiSelectSortingProps<T>,
    RequiresIdProps,
    ThemeProps,
    ValidityProps
{
    disabled?: ListBoxProps["disabled"],
    type?: ListBoxProps["type"],
}

export interface MultiSelectProps<T extends ListBoxBaseItemType = string> extends InheritedProps<T> {
    downshiftProps?: any, // TODO
    initialSelectedItems?: T[],
    items: T[],
    inline?: boolean,
    label?: React.ReactNode,
    locale?: string,
    open?: boolean,
    selectionFeedback?: "fixed" | "top" | "top-after-reopen",
    useTitleInItem?: boolean,
}

declare class MultiSelect<T extends ListBoxBaseItemType = string> extends React.Component<MultiSelectProps<T>> {
    static readonly Filterable: FilterableMultiSelect;
}

export default MultiSelect;

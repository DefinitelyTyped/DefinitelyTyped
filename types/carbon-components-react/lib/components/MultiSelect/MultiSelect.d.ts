import * as React from "react";
import {
    InternationalProps,
    ListBoxBaseItemType,
    VerticalDirection,
    ForwardRefProps,
    FCReturn
} from "../../../typings/shared";
import { ListBoxProps } from "../ListBox";
import { ListBoxMenuIconTranslationKey } from "../ListBox/ListBoxMenuIcon";
import FilterableMultiSelect from "./FilterableMultiSelect";
import { MultiSelectSortingProps } from "./MultiSelectPropTypes";
import { ListBoxSize } from "../ListBox/ListBoxPropTypes";
import { ListBoxSelectionTranslationKey } from "../ListBox/ListBoxSelection";

export interface MultiSelectProps<T extends ListBoxBaseItemType = string> extends
    MultiSelectSortingProps<T>,
    InternationalProps<ListBoxMenuIconTranslationKey | ListBoxSelectionTranslationKey>
{
    clearSelectionDescription?: string;
    clearSelectionText?: string;
    direction?: VerticalDirection,
    disabled?: ListBoxProps["disabled"],
    downshiftProps?: any, // TODO
    id: string,
    initialSelectedItems?: readonly T[],
    items: readonly T[],
    itemToString?(item: T | null | undefined): string;
    inline?: boolean,
    invalid?: boolean,
    invalidText?: React.ReactNode,
    label?: React.ReactNode,
    light?: boolean,
    locale?: string,
    onChange: ({ selectedItems }: { selectedItems: T[] }) => void,
    onMenuChange?(open: boolean): void;
    open?: boolean,
    selectionFeedback?: "fixed" | "top" | "top-after-reopen",
    size?: ListBoxSize,
    titleText?: React.ReactNode,
    type?: ListBoxProps["type"],
    useTitleInItem?: boolean,
    warn?: boolean,
    warnText?: React.ReactNode,
}

interface MultiSelect {
    <T extends ListBoxBaseItemType = string>(props: ForwardRefProps<HTMLButtonElement, MultiSelectProps<T>>): FCReturn;
    readonly Filterable: typeof FilterableMultiSelect;
}

declare const MultiSelect: MultiSelect;

export default MultiSelect;

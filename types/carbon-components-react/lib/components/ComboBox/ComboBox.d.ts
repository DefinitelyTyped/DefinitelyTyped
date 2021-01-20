import * as React from "react";
import { InternationalProps, ReactInputAttr, VerticalDirection } from "../../../typings/shared";
import { ListBoxProps } from "../ListBox";
import { ListBoxMenuIconTranslationKey } from "../ListBox/ListBoxMenuIcon";
import { ListBoxSelectionTranslationKey } from "../ListBox/ListBoxSelection";
import { ListBoxSize } from "../ListBox/ListBoxPropTypes";

type ExcludedAttributes = "id" | "onChange" | "placeholder" | "ref" | "size";

export interface ComboBoxProps<ItemType = string, CustomElementProps = Extract<ItemType, object>> extends
    Omit<ReactInputAttr, ExcludedAttributes>,
    InternationalProps<ListBoxMenuIconTranslationKey | ListBoxSelectionTranslationKey>
{
    ariaLabel?: string,
    direction?: VerticalDirection,
    downshiftProps?: any, // TODO
    helperText?: React.ReactNode,
    id: string;
    initialSelectedItem?: ItemType;
    invalid?: boolean;
    invalidText?: React.ReactNode;
    items: readonly ItemType[],
    itemToElement?: CustomElementProps extends object ? React.ComponentType<CustomElementProps> : never,
    itemToString?(item: ItemType | null | undefined): string;
    light?: boolean;
    onChange?(data: { selectedItem: ItemType | null | undefined }): void,
    onInputChange?(inputValue?: string): void,
    placeholder: string,
    selectedItem?: ItemType | null,
    shouldFilterItem?(data: { item: ItemType, itemToString?: ComboBoxProps<ItemType>["itemToString"], inputValue?: string }): void,
    size?: ListBoxSize,
    titleText?: React.ReactNode,
    type?: ListBoxProps["type"],
}

declare class ComboBox<T = string> extends React.Component<ComboBoxProps<T>> { }

export default ComboBox;

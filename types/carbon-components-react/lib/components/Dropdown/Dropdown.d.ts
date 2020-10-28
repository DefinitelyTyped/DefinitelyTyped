import * as React from "react";
import { InternationalProps, ReactDivAttr, ForwardRefProps, FCReturn } from "../../../typings/shared";
import { ListBoxProps } from "../ListBox";
import { ListBoxMenuIconTranslationKey } from "../ListBox/ListBoxMenuIcon";

export interface OnChangeData<ItemType = string> {
    selectedItem?: ItemType | null;
}

export interface DropdownProps<ItemType = string> extends
    Omit<ReactDivAttr, "id" | "onChange">,
    InternationalProps<ListBoxMenuIconTranslationKey>
{
    ariaLabel?: string,
    direction?: "bottom" | "top",
    disabled?: boolean,
    downshiftProps?: any; // TODO
    id: string,
    initialSelectedItem?: ItemType,
    /**
     * @deprecated
     */
    inline?: boolean,
    invalid?: boolean;
    invalidText?: React.ReactNode;
    helperText?: React.ReactNode,
    items: readonly ItemType[],
    itemToElement?: ItemType extends object ? React.ComponentType<ItemType> : never,
    itemToString?(item: ItemType): string
    label: NonNullable<React.ReactNode>,
    light?: boolean,
    onChange?(data: OnChangeData<ItemType>): void,
    selectedItem?: ItemType | null,
    size?: ListBoxProps["size"],
    titleText: NonNullable<React.ReactNode>,
    type?: ListBoxProps["type"],
    warn?: boolean,
    warnText?: React.ReactNode,
}

declare function Dropdown<ItemType = string>(props: ForwardRefProps<HTMLButtonElement, DropdownProps<ItemType>>): FCReturn;

export default Dropdown;

import * as React from "react";
import {
    DownshiftTypedProps,
    InternationalProps,
    ReactInputAttr,
    RequiresIdProps,
    ThemeProps,
    ValidityProps, ReactDivAttr
} from "../../../typings/shared";
import { ListBoxProps } from "../ListBox";
import { ListBoxMenuIconTranslationKey } from "../ListBox/ListBoxMenuIcon";

interface InheritedProps<ItemType> extends
    Omit<ReactDivAttr, "id" | "onChange">,
    DownshiftTypedProps<ItemType>,
    InternationalProps<ListBoxMenuIconTranslationKey>,
    RequiresIdProps,
    ThemeProps,
    ValidityProps
{
    ariaLabel: React.AriaAttributes["aria-label"],
    disabled?: ReactInputAttr["disabled"],
    size?: ListBoxProps["size"],
    type?: ListBoxProps["type"],
}

export interface OnChangeData<ItemType = string> {
    selectedItem?: ItemType | null;
}

export interface DropdownProps<ItemType = string> extends InheritedProps<ItemType> {
    direction?: "bottom" | "top",
    downshiftProps?: any; // TODO
    initialSelectedItem?: ItemType,
    /**
     * @deprecated
     */
    inline?: boolean,
    helperText?: React.ReactNode,
    items: readonly ItemType[],
    itemToElement?: ItemType extends object ? React.ComponentType<ItemType> : never,
    label: NonNullable<React.ReactNode>,
    onChange?(data: OnChangeData<ItemType>): void,
    selectedItem?: ItemType | null,
    titleText: NonNullable<React.ReactNode>,
}

export default class Dropdown<ItemType = string> extends React.Component<DropdownProps<ItemType>> { }

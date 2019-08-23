import * as React from "react";
import { DownshiftTypedProps, InternationalProps, ReactInputAttr, ThemeProps, ValidityProps } from "../../../typings/shared";
import { ListBoxProps } from "../ListBox";
import { ListBoxMenuIconTranslationKey } from "../ListBox/ListBoxMenuIcon";

interface InheritedProps<ItemType> extends
    DownshiftTypedProps<ItemType>,
    InternationalProps<ListBoxMenuIconTranslationKey>,
    ThemeProps,
    ValidityProps
{
    ariaLabel: React.AriaAttributes["aria-label"],
    disabled?: ReactInputAttr["disabled"],
    type?: ListBoxProps["type"],
}

export interface OnChangeData<ItemType = string> {
    selectedItem?: ItemType;
}

export interface DropdownProps<ItemType = string> extends InheritedProps<ItemType> {
    initialSelectedItem?: ItemType,
    inline?: boolean,
    helperText?: React.ReactNode,
    items: ItemType[],
    itemToElement?(item: ItemType): React.ComponentType<any>,
    label: NonNullable<React.ReactNode>,
    onChange?(data: OnChangeData<ItemType>): void,
    selectedItem?: ItemType,
    titleText: NonNullable<React.ReactNode>,
}

export default class Dropdown<ItemType = string> extends React.Component<DropdownProps<ItemType>> { }

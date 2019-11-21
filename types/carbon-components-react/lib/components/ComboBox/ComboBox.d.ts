import * as React from "react";
import { DownshiftTypedProps, InternationalProps, ReactInputAttr, RequiresIdProps, ThemeProps, ValidityProps } from "../../../typings/shared";
import { ListBoxProps } from "../ListBox";
import { ListBoxMenuIconTranslationKey } from "../ListBox/ListBoxMenuIcon";
import { ListBoxSelectionTranslationKey } from "../ListBox/ListBoxSelection";

type ExcludedAttributes = "id" | "onChange" | "placeholder" | "ref";
interface InheritedProps<ItemType> extends
    Omit<ReactInputAttr, ExcludedAttributes>,
    DownshiftTypedProps<ItemType>,
    InternationalProps<ListBoxMenuIconTranslationKey | ListBoxSelectionTranslationKey>,
    RequiresIdProps,
    ThemeProps,
    ValidityProps
{
    ariaLabel?: React.AriaAttributes["aria-label"],
    placeholder: NonNullable<ReactInputAttr["placeholder"]>,
    type?: ListBoxProps["type"],
}

export interface ComboBoxProps<ItemType = string, CustomElementProps = Extract<ItemType, object>>
extends InheritedProps<ItemType> {
    downshiftProps?: any, // TODO
    helperText?: React.ReactNode,
    initialSelectedItem?: ItemType;
    items: ItemType[],
    itemToElement?: CustomElementProps extends object ? React.ComponentType<CustomElementProps> : never,
    onChange?(data: { selectedItem?: ItemType }): void,
    onInputChange?(inputValue?: string): void,
    shouldFilterItem?(item: ItemType, itemToString?: ComboBoxProps<ItemType>["itemToString"], inputValue?: string): void,
    titleText?: React.ReactNode,
}

declare class ComboBox<T = string> extends React.Component<ComboBoxProps<T>> { }

export default ComboBox;

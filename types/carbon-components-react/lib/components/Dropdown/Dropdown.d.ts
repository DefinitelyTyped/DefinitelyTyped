import * as React from 'react';
import { InternationalProps, ReactDivAttr, ForwardRefProps, FCReturn } from '../../../typings/shared';
import { ListBoxProps } from '../ListBox';
import { ListBoxMenuIconTranslationKey } from '../ListBox/ListBoxMenuIcon';

export interface OnChangeData<ItemType = string> {
    selectedItem?: ItemType | null | undefined;
}

export interface DropdownProps<ItemType = string>
    extends Omit<ReactDivAttr, 'id' | 'onChange'>,
        InternationalProps<ListBoxMenuIconTranslationKey> {
    ariaLabel?: string | undefined;
    direction?: 'bottom' | 'top' | undefined;
    disabled?: boolean | undefined;
    downshiftProps?: any; // TODO
    id: string;
    initialSelectedItem?: ItemType | undefined;
    /**
     * @deprecated
     */
    inline?: boolean | undefined;
    invalid?: boolean | undefined;
    invalidText?: React.ReactNode | undefined;
    hideLabel?: boolean | undefined;
    helperText?: React.ReactNode | undefined;
    items: readonly ItemType[];
    itemToElement?: ItemType extends object ? React.JSXElementConstructor<ItemType> : never | undefined;
    itemToString?(item: ItemType): string;
    label: NonNullable<React.ReactNode>;
    light?: boolean | undefined;
    onChange?(data: OnChangeData<ItemType>): void;
    renderSelectedItem?(item: ItemType): string;
    selectedItem?: ItemType | null | undefined;
    size?: ListBoxProps['size'] | undefined;
    titleText?: React.ReactNode | undefined;
    type?: ListBoxProps['type'] | undefined;
    warn?: boolean | undefined;
    warnText?: React.ReactNode | undefined;
}

declare function Dropdown<ItemType = string>(
    props: ForwardRefProps<HTMLButtonElement, DropdownProps<ItemType>>,
): FCReturn;

export default Dropdown;

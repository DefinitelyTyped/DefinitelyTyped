import * as React from 'react';
import {
    InternationalProps,
    ReactInputAttr,
    VerticalDirection,
    FCReturn,
    ForwardRefProps,
} from '../../../typings/shared';
import { ListBoxProps } from '../ListBox';
import { ListBoxMenuIconTranslationKey } from '../ListBox/ListBoxMenuIcon';
import { ListBoxSelectionTranslationKey } from '../ListBox/ListBoxSelection';
import { ListBoxSize } from '../ListBox/ListBoxPropTypes';

type ExcludedAttributes = 'id' | 'onChange' | 'ref' | 'size';

export interface ComboBoxProps<ItemType = string, CustomElementProps = Extract<ItemType, object>>
    extends Omit<ReactInputAttr, ExcludedAttributes>,
        InternationalProps<ListBoxMenuIconTranslationKey | ListBoxSelectionTranslationKey> {
    ariaLabel?: string | undefined;
    direction?: VerticalDirection | undefined;
    downshiftProps?: any; // TODO
    helperText?: React.ReactNode | undefined;
    id: string;
    initialSelectedItem?: ItemType | undefined;
    invalid?: boolean | undefined;
    invalidText?: React.ReactNode | undefined;
    items: readonly ItemType[];
    itemToElement?: CustomElementProps extends object
        ? React.JSXElementConstructor<CustomElementProps>
        : never | undefined;
    itemToString?(item: ItemType | null | undefined): string;
    light?: boolean | undefined;
    onChange?(data: { selectedItem: ItemType | null | undefined }): void;
    onInputChange?(inputValue?: string): void;
    onToggleClick?(evt: React.MouseEvent<HTMLButtonElement>): void;
    selectedItem?: ItemType | null | undefined;
    shouldFilterItem?(data: {
        item: ItemType;
        itemToString?: ComboBoxProps<ItemType>['itemToString'] | undefined;
        inputValue?: string | undefined;
    }): void;
    size?: ListBoxSize | undefined;
    titleText?: React.ReactNode | undefined;
    type?: ListBoxProps['type'] | undefined;
    warn?: boolean | undefined;
    warnText?: React.ReactNode | undefined;
}

declare function ComboBox<T = string>(props: ForwardRefProps<HTMLInputElement, ComboBoxProps<T>>): FCReturn;

export default ComboBox;

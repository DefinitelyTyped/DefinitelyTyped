import * as React from 'react';
import {
    InternationalProps,
    ListBoxBaseItemType,
    VerticalDirection,
    ForwardRefProps,
    FCReturn,
} from '../../../typings/shared';
import { ListBoxProps } from '../ListBox';
import { ListBoxMenuIconTranslationKey } from '../ListBox/ListBoxMenuIcon';
import FilterableMultiSelect from './FilterableMultiSelect';
import { MultiSelectSortingProps } from './MultiSelectPropTypes';
import { ListBoxSize } from '../ListBox/ListBoxPropTypes';
import { ListBoxSelectionTranslationKey } from '../ListBox/ListBoxSelection';

export interface MultiSelectProps<T extends ListBoxBaseItemType = string>
    extends MultiSelectSortingProps<T>,
        InternationalProps<ListBoxMenuIconTranslationKey | ListBoxSelectionTranslationKey> {
    clearSelectionDescription?: string | undefined;
    clearSelectionText?: string | undefined;
    direction?: VerticalDirection | undefined;
    disabled?: ListBoxProps['disabled'] | undefined;
    downshiftProps?: any; // TODO
    helperText?: React.ReactNode | undefined;
    hideLabel?: boolean | undefined;
    id: string;
    initialSelectedItems?: readonly T[] | undefined;
    items: readonly T[];
    itemToElement?: React.JSXElementConstructor<T>;
    itemToString?(item: T): string;
    inline?: boolean | undefined;
    invalid?: boolean | undefined;
    invalidText?: React.ReactNode | undefined;
    label?: React.ReactNode | undefined;
    light?: boolean | undefined;
    locale?: string | undefined;
    onChange: ({ selectedItems }: { selectedItems: T[] }) => void;
    onMenuChange?(open: boolean): void;
    open?: boolean | undefined;
    selectedItems?: T[] | undefined;
    selectionFeedback?: 'fixed' | 'top' | 'top-after-reopen' | undefined;
    size?: ListBoxSize | undefined;
    titleText?: React.ReactNode | undefined;
    type?: ListBoxProps['type'] | undefined;
    useTitleInItem?: boolean | undefined;
    warn?: boolean | undefined;
    warnText?: React.ReactNode | undefined;
}

interface MultiSelect {
    <T extends ListBoxBaseItemType = string>(props: ForwardRefProps<HTMLButtonElement, MultiSelectProps<T>>): FCReturn;
    readonly Filterable: typeof FilterableMultiSelect;
}

declare const MultiSelect: MultiSelect;

export default MultiSelect;

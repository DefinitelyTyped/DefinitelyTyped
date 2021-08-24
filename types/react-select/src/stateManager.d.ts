import { Component, ComponentType, Ref as ElementRef } from 'react';

import SelectBase, { Props as SelectProps } from './Select';
import { ActionMeta, GroupTypeBase, InputActionMeta, OptionTypeBase, ValueType } from './types';

export interface DefaultProps {
    defaultInputValue: string;
    defaultMenuIsOpen: boolean;
    defaultValue: readonly OptionTypeBase[] | OptionTypeBase | null;
}

export const defaultProps: DefaultProps;

export interface Props<
    OptionType extends OptionTypeBase,
    IsMulti extends boolean,
    GroupType extends GroupTypeBase<OptionType> = GroupTypeBase<OptionType>
> {
    defaultInputValue?: string | undefined;
    defaultMenuIsOpen?: boolean | undefined;
    defaultValue?: readonly OptionType[] | OptionType | null | undefined;
    inputValue?: string | undefined;
    menuIsOpen?: boolean | undefined;
    value?: readonly OptionType[] | OptionType | null | undefined;
    onChange?: ((value: ValueType<OptionType, IsMulti>, actionMeta: ActionMeta<OptionType>) => void) | undefined;
}

type StateProps<T extends SelectProps<any, boolean, any>> = Pick<
    T,
    Exclude<
        keyof T,
        'inputValue' | 'value' | 'menuIsOpen' | 'onChange' | 'onInputChange' | 'onMenuClose' | 'onMenuOpen'
    >
>;

interface State<OptionType extends OptionTypeBase, IsMulti extends boolean> {
    inputValue: string;
    menuIsOpen: boolean;
    value: readonly OptionType[] | OptionType | null;
}

type GetOptionType<T> = T extends SelectBase<infer OT> ? OT : never;

export class StateManager<
    OptionType extends OptionTypeBase = { label: string; value: string },
    IsMulti extends boolean = false,
    GroupType extends GroupTypeBase<OptionType> = GroupTypeBase<OptionType>,
    T extends SelectBase<OptionType, IsMulti> = SelectBase<OptionType, IsMulti>
> extends Component<
    StateProps<SelectProps<OptionType, IsMulti, GroupType>> &
        Props<OptionType, IsMulti, GroupType> &
        SelectProps<OptionType, IsMulti, GroupType>,
    State<OptionType, IsMulti>
> {
    static defaultProps: DefaultProps;

    select: T;

    focus(): void;
    blur(): void;
    getProp(key: string): any;
    callProp(name: string, ...args: any[]): any;
    onChange: (value: ValueType<OptionType, IsMulti>, actionMeta: ActionMeta<OptionType>) => void;
    onInputChange: (value: ValueType<OptionType, IsMulti>, actionMeta: InputActionMeta) => void;
    onMenuOpen: () => void;
    onMenuClose: () => void;
}

export function manageState<T extends SelectBase<any, boolean>>(
    SelectComponent: T,
): StateManager<GetOptionType<T>, boolean, GroupTypeBase<GetOptionType<T>>, T>;

export default manageState;

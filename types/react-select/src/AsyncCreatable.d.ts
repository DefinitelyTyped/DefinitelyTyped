import { Component, Ref as ElementRef } from 'react';
import { Props as AsyncProps, State as AsyncState } from './Async';
import { Props as CreatableProps, State as CreatableState } from './Creatable';
import { OptionsType, ValueType, ActionMeta, InputActionMeta, OptionTypeBase, GroupTypeBase } from './types';
import { cleanValue } from './utils';

export type Props<
    OptionType extends OptionTypeBase,
    IsMulti extends boolean,
    GroupType extends GroupTypeBase<OptionType> = GroupTypeBase<OptionType>
> = AsyncProps<OptionType, IsMulti, GroupType> & CreatableProps<OptionType, IsMulti, GroupType>;

export type State<OptionType extends OptionTypeBase> = AsyncState<OptionType> & CreatableState<OptionType>;

export class AsyncCreatable<
    OptionType extends OptionTypeBase,
    IsMulti extends boolean,
    GroupType extends GroupTypeBase<OptionType> = GroupTypeBase<OptionType>
> extends Component<Props<OptionType, IsMulti, GroupType>, State<OptionType>> {
    static defaultProps: Props<any, boolean>;
    select: ElementRef<any>;
    lastRequest: {};
    mounted: boolean;
    optionsCache: { [key: string]: OptionsType<OptionType> };

    focus(): void;
    blur(): void;
    loadOptions(inputValue: string, callback: (options: OptionsType<OptionType>) => void): void;
    handleInputChange: (newValue: string, actionMeta: InputActionMeta) => string;
    onChange: (newValue: ValueType<OptionType, IsMulti>, actionMeta: ActionMeta<OptionType>) => void;
}

export default AsyncCreatable;

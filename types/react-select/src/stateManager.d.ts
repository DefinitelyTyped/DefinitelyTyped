import { Component, ComponentType, Ref as ElementRef } from 'react';

import SelectBase, { Props as SelectProps } from './Select';
import { ActionMeta, InputActionMeta, OptionTypeBase, ValueType } from './types';

export interface DefaultProps<OptionType extends OptionTypeBase> {
  defaultInputValue: string;
  defaultMenuIsOpen: boolean;
  defaultValue: ValueType<OptionType, true | false>;
}

export interface Props<OptionType extends OptionTypeBase, isMulti extends boolean> {
  defaultInputValue?: string;
  defaultMenuIsOpen?: boolean;
  defaultValue?: ValueType<OptionType, true | false>;
  inputValue?: string;
  menuIsOpen?: boolean;
  value?: ValueType<OptionType, isMulti>;
  onChange?: (value: ValueType<OptionType, isMulti>, actionMeta: ActionMeta<OptionType>) => void;
}

type StateProps<T extends SelectProps<any, true | false>> = Pick<T, Exclude<keyof T,
  | 'inputValue'
  | 'value'
  | 'menuIsOpen'
  | 'onChange'
  | 'onInputChange'
  | 'onMenuClose'
  | 'onMenuOpen'
>>;

interface State<OptionType extends OptionTypeBase, isMulti extends boolean> {
  inputValue: string;
  menuIsOpen: boolean;
  value: ValueType<OptionType, isMulti>;
}

type GetOptionType<T> = T extends SelectBase<infer OT> ? OT : never;

export class StateManager<
  OptionType extends OptionTypeBase = { label: string; value: string },
  isMulti extends boolean = false,
  T extends SelectBase<OptionType, isMulti> = SelectBase<OptionType, isMulti>
> extends Component<StateProps<SelectProps<OptionType, isMulti>> & Props<OptionType, isMulti> & SelectProps<OptionType, isMulti>, State<OptionType, isMulti>> {
  static defaultProps: DefaultProps<any>;

  select: T;

  focus(): void;
  blur(): void;
  getProp(key: string): any;
  callProp(name: string, ...args: any[]): any;
  onChange: (value: ValueType<OptionType, isMulti>, actionMeta: ActionMeta<OptionType>) => void;
  onInputChange: (value: ValueType<OptionType, isMulti>, actionMeta: InputActionMeta) => void;
  onMenuOpen: () => void;
  onMenuClose: () => void;
}

export function manageState<T extends SelectBase<any, true | false>>(
  SelectComponent: T
): StateManager<GetOptionType<T>, true | false, T>;

export default manageState;

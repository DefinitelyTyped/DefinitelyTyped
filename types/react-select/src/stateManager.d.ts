import { Component, ComponentType, Ref as ElementRef } from 'react';

import SelectBase, { Props as SelectProps } from './Select';
import { ActionMeta, InputActionMeta, OptionTypeBase, ValueType } from './types';

export interface DefaultProps {
  defaultInputValue: string;
  defaultMenuIsOpen: boolean;
  defaultValue: ValueType<OptionTypeBase, boolean>;
}

export interface Props<OptionType extends OptionTypeBase, IsMulti extends boolean> {
  defaultInputValue?: string;
  defaultMenuIsOpen?: boolean;
  defaultValue?: IsMulti extends true ? ValueType<OptionType, boolean> : ValueType<OptionType, false>;
  inputValue?: string;
  menuIsOpen?: boolean;
  value?: ValueType<OptionType, IsMulti>;
  onChange?: (value: ValueType<OptionType, IsMulti>, actionMeta: ActionMeta<OptionType>) => void;
}

type StateProps<T extends SelectProps<any, boolean>> = Pick<T, Exclude<keyof T,
  | 'inputValue'
  | 'value'
  | 'menuIsOpen'
  | 'onChange'
  | 'onInputChange'
  | 'onMenuClose'
  | 'onMenuOpen'
>>;

interface State<OptionType extends OptionTypeBase, IsMulti extends boolean> {
  inputValue: string;
  menuIsOpen: boolean;
  value: ValueType<OptionType, IsMulti>;
}

type GetOptionType<T> = T extends SelectBase<infer OT> ? OT : never;

export class StateManager<
  OptionType extends OptionTypeBase = { label: string; value: string },
  IsMulti extends boolean = false,
  T extends SelectBase<OptionType, IsMulti> = SelectBase<OptionType, IsMulti>
> extends Component<StateProps<SelectProps<OptionType, IsMulti>> & Props<OptionType, IsMulti> & SelectProps<OptionType, IsMulti>, State<OptionType, IsMulti>> {
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
  SelectComponent: T
): StateManager<GetOptionType<T>, boolean, T>;

export default manageState;

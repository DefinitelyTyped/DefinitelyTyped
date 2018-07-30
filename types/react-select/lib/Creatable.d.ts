import * as React from 'react';
import Select, { Props as SelectProps } from './Select';
import { OptionType, OptionsType, ValueType, ActionMeta } from './types';
import { cleanValue } from './utils';
import manageState from './stateManager';

export type CreatableProps = {
  /* Allow options to be created while the `isLoading` prop is true. Useful to
     prevent the "create new ..." option being displayed while async results are
     still being loaded. */
  allowCreateWhileLoading?: boolean,
  /* Gets the label for the "create new ..." option in the menu. Is given the
     current input value. */
  formatCreateLabel?: (inputValue: string) => Node,
  /* Determines whether the "create new ..." option should be displayed based on
     the current input value, select value and options array. */
  isValidNewOption?: (a: string, b: ValueType, c: OptionsType) => boolean,
  /* Returns the data for the new option when it is created. Used to display the
     value, and is passed to `onChange`. */
  getNewOptionData?: (a: string, b: Node) => OptionType,
  /* If provided, this will be called with the input value when a new option is
     created, and `onChange` will **not** be called. Use this when you need more
     control over what happens when new options are created. */
  onCreateOption?: (inputValue: string) => void,
  /* Sets the position of the createOption element in your options list. Defaults to 'last' */
  createOptionPosition?: 'first' | 'last',
};

export type Props = SelectProps & CreatableProps;

export const defaultProps: Props;

export type State = {
  newOption: OptionType | undefined,
  options: OptionsType,
};

export class Creatable extends React.Component<Props, State> {
  static defaultProps: Props;
  select: React.Ref<any>;

  onChange: (newValue: ValueType, actionMeta: ActionMeta) => void;
  focus(): void;
  blur(): void;
}

export function makeCreatableSelect(SelectComponent: React.ComponentType<any>): Creatable;

export default Creatable;

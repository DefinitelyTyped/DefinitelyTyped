/// <reference types="baseui"/>
import * as React from 'react';
import { StyletronComponent } from 'styletron-react';
import { SIZE } from '../input';
import { OnItemSelect } from '../menu';

export interface TYPE {
  select: 'select';
  search: 'search';
}
export interface STATE_CHANGE_TYPE {
  select: 'select';
  remove: 'remove';
  clear: 'clear';
}

export interface Option {
  readonly id?: string | number;
  readonly label?: React.ReactNode;
  readonly disabled?: boolean;
  readonly clearableValue?: boolean;
  readonly isCreatable?: boolean;
}
export type Value = ReadonlyArray<Option>;

export type ChangeAction = () => any;

export type filterOptions = (
  options: Value,
  filterValue: string,
  excludeOptions?: Value,
  newProps?: {
    filterOption?: (option: Option, filterValue: string) => boolean;
    ignoreCase?: boolean;
    labelKey?: string;
    matchPos?: 'any' | 'start';
    matchProp?: 'any' | 'label' | 'value';
    trimFilter?: boolean;
    valueKey?: string;
  }
) => Value;

export interface SelectOverrides {
  Root?: Override<any>;
  ControlContainer?: Override<any>;
  Placeholder?: Override<any>;
  ValueContainer?: Override<any>;
  SingleValue?: Override<any>;
  MultiValue?: Override<any>;
  InputContainer?: Override<any>;
  Input?: Override<any>;
  IconsContainer?: Override<any>;
  SelectArrow?: Override<any>;
  ClearIcon?: Override<any>;
  LoadingIndicator?: Override<any>;
  SearchIcon?: Override<any>;
  Popover?: Override<any>;
  DropdownContainer?: Override<any>;
  Dropdown?: Override<any>;
  DropdownOption?: Override<any>;
  DropdownListItem?: Override<any>;
  OptionContent?: Override<any>;
  StatefulMenu?: Override<any>;
}
export interface SelectProps {
  'aria-label'?: string;
  'aria-describedby'?: string;
  'aria-labelledby'?: string;
  autoFocus?: boolean;
  backspaceRemoves?: boolean;
  clearable?: boolean;
  closeOnSelect?: boolean;
  creatable?: boolean;
  deleteRemoves?: boolean;
  disabled?: boolean;
  error?: boolean;
  positive?: boolean;
  escapeClearsValue?: boolean;
  filterOptions?: (
    options: Value,
    filterValue: string,
    excludeOptions?: Value,
    newProps?: {valueKey: string, labelKey: string},
  ) => Value;
  filterOutSelected?: boolean;
  getOptionLabel?: (args: {
    option?: Option,
    optionState: {
      $selected?: boolean;
      $disabled?: boolean;
      $isHighlighted?: boolean;
    }
  }) => React.ReactNode;
  getValueLabel?: (args: {option: Option}) => React.ReactNode;
  isLoading?: boolean;
  labelKey?: string;
  maxDropdownHeight?: string;
  multi?: boolean;
  noResultsMsg?: React.ReactNode;
  onBlur?: (e: Event) => any;
  onBlurResetsInput?: boolean;
  onChange?: (params: OnChangeParams) => any;
  onFocus?: (e: React.SyntheticEvent<HTMLElement>) => any;
  onInputChange?: (e: React.SyntheticEvent<HTMLInputElement>) => any;
  onCloseResetsInput?: boolean;
  onSelectResetsInput?: boolean;
  onOpen?: () => any;
  onClose?: () => any;
  openOnClick?: boolean;
  options?: Value;
  overrides?: SelectOverrides;
  placeholder?: React.ReactNode;
  required?: boolean;
  searchable?: boolean;
  size?: SIZE[keyof SIZE];
  type?: TYPE[keyof TYPE];
  value?: Value;
  valueKey?: string;
  mountNode?: HTMLElement;
}
export interface SelectState {
  inputValue: string;
  isFocused: boolean;
  isOpen: boolean;
  isPseudoFocused: boolean;
}
export class Select extends React.Component<SelectProps, SelectState> {
  focus(): void;
  handleTouchOutside(event: TouchEvent): void;
  handleTouchMove(): void;
  handleTouchStart(): void;
  handleTouchEnd(event: TouchEvent): void;
  handleTouchEndClearValue(event: TouchEvent): void;
  handleClick(event: MouseEvent | TouchEvent): void;
  closeMenu(): void;
  handleInputFocus(event: React.SyntheticEvent<HTMLElement>): void;
  handleBlur(event: Event): void;
  handleClickOutside(event: MouseEvent): void;
  handleInputChange(event: React.SyntheticEvent<HTMLInputElement>): void;
  handleKeyDown(event: KeyboardEvent): void;
  getOptionLabel(locale: Locale, {option}: {
    option: Option;
    optionState: {
      $selected: boolean;
      $disabled: boolean;
      $isHighlighted: boolean;
    }
  }): React.ReactNode;
  getValueLabel({option}: {option: Option}): React.ReactNode;
  getValueArray(value: Value): Option[];
  setValue(value: Value, option: Option, type: ChangeAction): void;
  selectValue({item}: {item: Option}): void;
  addValue(item: Option): void;
  popValue(): void;
  removeValue(item: Option): void;
  clearValue(event: KeyboardEvent | MouseEvent | TouchEvent): void;
  renderLoading(): React.ReactNode;
  renderValue(valueArray: Value, isOpen: boolean, locale: Locale): React.ReactNode;
  renderInput(): React.ReactNode;
  renderClear(): React.ReactNode;
  renderArrow(): React.ReactNode;
  renderSearch(): React.ReactNode;
  filterOption(excludeOptions?: Value): Value;
  getSharedProps(): {
    $clearable: boolean;
    $creatable: boolean;
    $disabled: boolean;
    $error: boolean;
    $positive: boolean;
    $isFocused: boolean;
    $isLoading: boolean;
    $isOpen: boolean;
    $isPseudoFocused: boolean;
    $multi: boolean;
    $required: boolean;
    $searchable: boolean;
    $size: SIZE[keyof SIZE];
    $type: TYPE[keyof TYPE];
  };
}

export const SingleValue: React.FC<any>;
export const MultiValue: React.FC<any>;

export interface AutosizeInputOverrides {
  Input?: Override<any>;
}
export interface AutosizeInputProps {
  value?: string;
  defaultValue?: string;
  inputRef?: React.Ref<any>;
  overrides?: AutosizeInputOverrides;
  $size?: SIZE[keyof SIZE];
}
export interface AutosizeInputState {
  inputWidth: number;
}
export class AutosizeInput extends React.Component<AutosizeInputProps, AutosizeInputState> {
  sizerRef(el?: HTMLElement): void;
  updateInputWidth(): void;
}

export interface DropdownOverrides {
  DropdownContainer?: Override<any>;
  Dropdown?: Override<any>;
  DropdownOption?: Override<any>;
  DropdownListItem?: Override<any>;
  OptionContent?: Override<any>;
  StatefulMenu?: Override<any>;
}
export interface DropdownProps {
  error?: boolean;
  getOptionLabel?: (args: {
    option: Option;
    optionState: {
      $selected: boolean;
      $disabled: boolean;
      $isHighlighted: boolean;
    };
  }) => React.ReactNode;
  innerRef?: React.Ref<any>;
  isLoading?: boolean;
  labelKey?: string;
  maxDropdownHeight?: string;
  multi?: boolean;
  noResultsMsg?: React.ReactNode;
  onItemSelect?: OnItemSelect;
  options?: Value;
  overrides?: DropdownOverrides;
  required?: boolean;
  searchable?: boolean;
  size?: SIZE[keyof SIZE];
  type?: TYPE[keyof TYPE];
  value?: Value;
  valueKey?: string;
  width?: number;
}
export class SelectDropdown extends React.Component<DropdownProps> {
  getSharedProps(): {
    $error: boolean;
    $isLoading: boolean;
    $multi: boolean;
    $required: boolean;
    $searchable: boolean;
    $size: SIZE[keyof SIZE];
    $type: TYPE[keyof TYPE];
    $width: number;
  };
  getItemLabel(option: {[key: string]: any}): React.ReactNode;
  onMouseDown(e: Event): void;
}

export interface State {
  value: Value;
}
export type StateReducer = (
  stateType: string,
  nextState: State,
  currentState: State,
) => State;
export interface OnChangeParams {
  value?: Value;
  option?: Option;
  type?: STATE_CHANGE_TYPE[keyof STATE_CHANGE_TYPE];
}
export type StatefulSelectProps = SelectProps & {
  initialState?: State;
  stateReducer?: StateReducer;
  onChange?: (params: OnChangeParams) => any;
};
export const StatefulSelect: React.FC<StatefulSelectProps>;

export interface StatefulContainerProps {
  overrides?: SelectOverrides;
  children?: React.ReactNode;
  initialState?: State;
  stateReducer?: StateReducer;
  onChange?: (params: OnChangeParams) => any;
}
export class StatefulSelectContainer extends React.Component<StatefulContainerProps, State> {
  onChange(params: OnChangeParams): void;
  internalSetState(params: OnChangeParams): void;
}

export const StyledRoot: StyletronComponent<any>;
export const StyledControlContainer: StyletronComponent<any>;
export const StyledValueContainer: StyletronComponent<any>;
export const StyledPlaceholder: StyletronComponent<any>;
export const StyledSingleValue: StyletronComponent<any>;
export const StyledInputContainer: StyletronComponent<any>;
export const StyledInput: StyletronComponent<any>;
export const StyledInputSizer: StyletronComponent<any>;
export const StyledIconsContainer: StyletronComponent<any>;
export const StyledSelectArrow: StyletronComponent<any>;
export const StyledClearIcon: StyletronComponent<any>;
export const StyledSearchIcon: StyletronComponent<any>;
export const StyledDropdownContainer: StyletronComponent<any>;
export const StyledDropdown: StyletronComponent<any>;
export const StyledDropdownListItem: StyletronComponent<any>;
export const StyledOptionContent: StyletronComponent<any>;

export const TYPE: TYPE;
export const STATE_CHANGE_TYPE: STATE_CHANGE_TYPE;

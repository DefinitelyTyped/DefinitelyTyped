import * as React from 'react';
import Select, { Props as SelectProps } from './Select';
import { handleInputChange } from './utils';
import manageState from './stateManager';
import { OptionsType, InputActionMeta } from './types';

export interface AsyncProps<OptionType> {
  /* The default set of options to show before the user starts searching. When
     set to `true`, the results for loadOptions('') will be autoloaded.
     Default: false. */
  defaultOptions?: OptionsType<OptionType> | boolean;
  /* Function that returns a promise, which is the set of options to be used
     once the promise resolves. */
  loadOptions: (inputValue: string, callback: ((options: OptionsType<OptionType>) => void)) => Promise<any> | void;
  /* If cacheOptions is truthy, then the loaded data will be cached. The cache
     will remain until `cacheOptions` changes value.
     Default: false. */
  cacheOptions?: any;
}

export type Props<OptionType> = SelectProps<OptionType> & AsyncProps<OptionType>;

export const defaultProps: Props<any>;

export interface State<OptionType> {
  defaultOptions?: OptionsType<OptionType>;
  inputValue: string;
  isLoading: boolean;
  loadedInputValue?: string;
  loadedOptions: OptionsType<OptionType>;
  passEmptyOptions: boolean;
}

export class Async<OptionType> extends React.Component<Props<OptionType>, State<OptionType>> {
  static defaultProps: Props<any>;
  select: React.Ref<any>;
  lastRequest: {};
  mounted: boolean;
  optionsCache: { [key: string]: OptionsType<OptionType> };

  focus(): void;
  blur(): void;
  loadOptions(inputValue: string, callback: (options: OptionsType<OptionType>) => void): void;
  handleInputChange: (newValue: string, actionMeta: InputActionMeta) => string;
}

export function makeAsyncSelect(SelectComponent: React.ComponentType<any>): Async<any>;

export default Async;

import * as React from 'react';
import Select, { Props as SelectProps, DefaultSelectComponentsProps } from './Select';
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

export type Props<OptionType, SelectComponentsProps = DefaultSelectComponentsProps> =
    SelectProps<OptionType, SelectComponentsProps> & AsyncProps<OptionType>;

export const defaultProps: Props<any, any>;

export interface State<OptionType> {
  defaultOptions?: OptionsType<OptionType>;
  inputValue: string;
  isLoading: boolean;
  loadedInputValue?: string;
  loadedOptions: OptionsType<OptionType>;
  passEmptyOptions: boolean;
}

export class Async<OptionType, SelectComponentsProps = DefaultSelectComponentsProps> extends React.Component<Props<OptionType, SelectComponentsProps>, State<OptionType>> {
  static defaultProps: Props<any, any>;
  select: React.Ref<any>;
  lastRequest: {};
  mounted: boolean;
  optionsCache: { [key: string]: OptionsType<OptionType> };

  focus(): void;
  blur(): void;
  loadOptions(inputValue: string, callback: (options: OptionsType<OptionType>) => void): void;
  handleInputChange: (newValue: string, actionMeta: InputActionMeta) => string;
}

export function makeAsyncSelect(SelectComponent: React.ComponentType<any>): Async<any, any>;

export default Async;

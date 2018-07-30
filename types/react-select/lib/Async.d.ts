import * as React from 'react';
import Select, { Props as SelectProps } from './Select';
import { handleInputChange } from './utils';
import manageState from './stateManager';
import { OptionsType, InputActionMeta } from './types';

export type AsyncProps = {
  /* The default set of options to show before the user starts searching. When
     set to `true`, the results for loadOptions('') will be autoloaded. */
  defaultOptions: OptionsType | boolean,
  /* Function that returns a promise, which is the set of options to be used
     once the promise resolves. */
  loadOptions: (inputValue: string, callback: ((options: OptionsType) => void)) => Promise<any> | void,
  /* If cacheOptions is truthy, then the loaded data will be cached. The cache
     will remain until `cacheOptions` changes value. */
  cacheOptions: any,
};

export type Props = SelectProps & AsyncProps;

export const defaultProps: Props;

export type State = {
  defaultOptions?: OptionsType,
  inputValue: string,
  isLoading: boolean,
  loadedInputValue?: string,
  loadedOptions: OptionsType,
  passEmptyOptions: boolean,
};

export class Async extends React.Component<Props, State> {
  static defaultProps: Props;
  select: React.Ref<any>;
  lastRequest: {};
  mounted: boolean;
  optionsCache: { [key: string]: OptionsType };

  focus(): void;
  blur(): void;
  loadOptions(inputValue: string, callback: (options: OptionsType) => void): void;
  handleInputChange: (newValue: string, actionMeta: InputActionMeta) => string;
}

export function makeAsyncSelect(SelectComponent: React.ComponentType<any>): Async;

export default Async;

import * as React from 'react';
import Select, { Props as SelectProps } from './Select';
import { handleInputChange } from './utils';
import manageState from './stateManager';
import { OptionsType, InputActionMeta, OptionTypeBase, GroupTypeBase } from './types';

export interface AsyncProps<
    OptionType extends OptionTypeBase,
    GroupType extends GroupTypeBase<OptionType> = GroupTypeBase<OptionType>
> {
    /**
     * The default set of options to show before the user starts searching. When
     * set to `true`, the results for loadOptions('') will be autoloaded.
     * @default false
     */
    defaultOptions?: ReadonlyArray<OptionType | GroupType> | boolean | undefined;
    /**
     * Function that returns a promise, which is the set of options to be used
     * once the promise resolves.
     */
    loadOptions?: ((
        inputValue: string,
        callback: (options: ReadonlyArray<OptionType | GroupType>) => void,
    ) => Promise<ReadonlyArray<OptionType | GroupType>> | void) | undefined;
    /**
     * If cacheOptions is truthy, then the loaded data will be cached. The cache
     * will remain until `cacheOptions` changes value.
     * @default false
     */
    cacheOptions?: any;
}

export type Props<
    OptionType extends OptionTypeBase,
    IsMulti extends boolean,
    GroupType extends GroupTypeBase<OptionType> = GroupTypeBase<OptionType>
> = SelectProps<OptionType, IsMulti, GroupType> & AsyncProps<OptionType, GroupType>;

export const defaultProps: Props<any, boolean>;

export interface State<OptionType extends OptionTypeBase> {
    defaultOptions?: OptionsType<OptionType> | undefined;
    inputValue: string;
    isLoading: boolean;
    loadedInputValue?: string | undefined;
    loadedOptions: OptionsType<OptionType>;
    passEmptyOptions: boolean;
}

export class Async<
    OptionType extends OptionTypeBase,
    IsMulti extends boolean = false,
    GroupType extends GroupTypeBase<OptionType> = GroupTypeBase<OptionType>
> extends React.Component<Props<OptionType, IsMulti, GroupType>, State<OptionType>> {
    static defaultProps: Props<any, boolean>;
    select: React.Ref<any>;
    lastRequest: {};
    mounted: boolean;
    optionsCache: { [key: string]: OptionsType<OptionType> };

    focus(): void;
    blur(): void;
    loadOptions(inputValue: string, callback: (options: OptionsType<OptionType>) => void): void;
    handleInputChange: (newValue: string, actionMeta: InputActionMeta) => string;
}

type ClassProps<T> = T extends new (props: infer P) => any ? P : never;
type FunctionProps<T> = T extends (props: infer P) => any ? P : never;

type SelectComponentProps<T> = T extends React.FunctionComponent<any>
    ? FunctionProps<T>
    : T extends React.ComponentClass<any>
    ? ClassProps<T>
    : never;

type AsyncComponentProps<T extends React.ComponentType<any> = React.ComponentType<any>> = SelectComponentProps<T> &
    AsyncProps<any>;

export function makeAsyncSelect<T extends React.ComponentType<any> = React.ComponentType<any>>(
    SelectComponent: T,
): React.ComponentClass<AsyncComponentProps<T>>;

export default Async;

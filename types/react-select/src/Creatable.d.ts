import * as React from 'react';
import Select, { Props as SelectProps } from './Select';
import { OptionsType, ValueType, ActionMeta, OptionTypeBase, GroupTypeBase } from './types';
import { cleanValue } from './utils';
import manageState from './stateManager';

export interface CreatableProps<
    OptionType extends OptionTypeBase,
    IsMulti extends boolean,
    GroupType extends GroupTypeBase<OptionType> = GroupTypeBase<OptionType>
> {
    /**
     * Allow options to be created while the `isLoading` prop is true. Useful to
     * prevent the "create new ..." option being displayed while async results are
     * still being loaded.
     */
    allowCreateWhileLoading?: boolean | undefined;
    /**
     * Gets the label for the "create new ..." option in the menu. Is given the
     * current input value.
     */
    formatCreateLabel?: ((inputValue: string) => React.ReactNode) | undefined;
    /**
     * Determines whether the "create new ..." option should be displayed based on
     * the current input value, select value and options array.
     */
    isValidNewOption?: ((
        inputValue: string,
        value: ValueType<OptionType, IsMulti>,
        options: ReadonlyArray<OptionType | GroupType>,
    ) => boolean) | undefined;
    /**
     * Returns the data for the new option when it is created. Used to display the
     * value, and is passed to `onChange`.
     */
    getNewOptionData?: ((inputValue: string, optionLabel: React.ReactNode) => OptionType) | undefined;
    /**
     * If provided, this will be called with the input value when a new option is
     * created, and `onChange` will **not** be called. Use this when you need more
     * control over what happens when new options are created.
     */
    onCreateOption?: ((inputValue: string) => void) | undefined;
    /** Sets the position of the createOption element in your options list. Defaults to 'last' */
    createOptionPosition?: 'first' | 'last' | undefined;
}

export type Props<
    OptionType extends OptionTypeBase,
    IsMulti extends boolean,
    GroupType extends GroupTypeBase<OptionType> = GroupTypeBase<OptionType>
> = SelectProps<OptionType, IsMulti, GroupType> & CreatableProps<OptionType, IsMulti, GroupType>;

export const defaultProps: Props<any, boolean>;

export interface State<OptionType extends OptionTypeBase> {
    newOption: OptionType | undefined;
    options: OptionsType<OptionType>;
}

export class Creatable<OptionType extends OptionTypeBase, IsMulti extends boolean = false> extends React.Component<
    Props<OptionType, IsMulti>,
    State<OptionType>
> {
    static defaultProps: Props<any, boolean>;
    select: React.Ref<any>;

    onChange: (newValue: ValueType<OptionType, IsMulti>, actionMeta: ActionMeta<OptionType>) => void;
    focus(): void;
    blur(): void;
}

export function makeCreatableSelect(SelectComponent: React.ComponentType<any>): Creatable<any, boolean>;

export default Creatable;

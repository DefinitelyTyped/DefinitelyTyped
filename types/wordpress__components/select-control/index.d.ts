import { ComponentType, HTMLProps } from 'react';

import BaseControl from '../base-control';

declare namespace SelectControl {
    interface Option {
        /**
         * The label to be shown to the user.
         */
        label: string;
        /**
         * The internal value used to choose the selected value. This is also
         * the value passed to `onChange` when the option is selected.
         */
        value: string;
        /**
         * Whether or not the option should have the disabled attribute.
         *
         * @defaultValue false
         */
        disabled?: boolean;
    }
    type Props<T extends string | readonly string[]> = Omit<
        HTMLProps<HTMLSelectElement>,
        keyof BaseControl.ControlProps | 'multiple' | 'onChange' | 'value'
    > &
        BaseControl.ControlProps & {
            options?: readonly Option[] | undefined;
            value?: T | undefined;
            /**
             * A function that receives the value of the new option that is being
             * selected as input. If multiple is true the value received is an
             * array of the selected value. If multiple is false the value received
             * is a single value with the new selected value.
             */
            onChange(value: T): void;
        } & (T extends readonly string[] ? { multiple: true } : { multiple?: false | undefined });
}
declare function SelectControl<T extends string | readonly string[]>(
    // tslint:disable-next-line:no-unnecessary-generics
    props: SelectControl.Props<T>
): JSX.Element;

export default SelectControl;

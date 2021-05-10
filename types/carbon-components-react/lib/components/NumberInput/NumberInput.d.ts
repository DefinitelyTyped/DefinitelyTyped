import * as React from "react";
import {
    InternationalProps,
    ReactInputAttr,
    ForwardRefReturn
} from "../../../typings/shared";

export type NumberInputTranslationKey = "decrement.number" | "increment.number";

type ExcludedInputPropKeys = "aria-label" | "id" | "onChange" | "ref" | "size";

type OnChangeDirection = "up" | "down";

export interface NumberInputProps extends Omit<ReactInputAttr, ExcludedInputPropKeys>, InternationalProps<NumberInputTranslationKey> {
    allowEmpty?: boolean,
    ariaLabel?: string,
    helperText?: React.ReactNode,
    hideLabel?: boolean,
    iconDescription?: string,
    id: string,
    invalid?: boolean,
    invalidText?: React.ReactNode,
    /**
     * @deprecated
     */
    isMobile?: boolean,
    label?: React.ReactNode,
    light?: boolean,
    onChange?:
        | ((evt: React.ChangeEvent<HTMLInputElement>, data: { direction: OnChangeDirection, value: number | string }) => void)
        | ((evt: React.ChangeEvent<HTMLInputElement>, direction: OnChangeDirection, value: number | string) => void);
    size?: "sm" | "md" | "lg" | "xl",
    value: number | '',
    warn?: boolean,
    warnText?: React.ReactNode,
}

declare class NumberInputComponent extends React.Component<NumberInputProps> { }
export { NumberInputComponent as NumberInput };

declare const NumberInput: ForwardRefReturn<HTMLInputElement, NumberInputProps>;
export default NumberInput;

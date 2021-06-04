import * as React from "react";
import {
    InternationalProps,
    ReactInputAttr,
    ForwardRefReturn
} from "../../../typings/shared";

export type NumberInputTranslationKey = "decrement.number" | "increment.number";

type ExcludedInputPropKeys = "aria-label" | "id" | "onChange" | "onClick" | "ref" | "size";

type NumberInputArrowDirection = "up" | "down";
export type NumberInputOnChangeDataVariant = (
    evt: React.ChangeEvent<HTMLInputElement> | React.MouseEvent<HTMLButtonElement>,
    data: { direction: NumberInputArrowDirection; value: number | string },
) => void;
export type NumberInputOnChangeDefaultVariant = (
    evt: React.ChangeEvent<HTMLInputElement> | React.MouseEvent<HTMLButtonElement>,
    direction: NumberInputArrowDirection,
    value: number | string,
) => void;

export type NumberInputOnClickDataVariant = (
    evt: React.MouseEvent<HTMLButtonElement>,
    data: { direction: NumberInputArrowDirection, value: string | number }
) => void;
export type NumberInputOnClickDefaultVariant = (
    evt: React.MouseEvent<HTMLButtonElement>,
    direction: NumberInputArrowDirection,
    value: number | string,
) => void;
export type NumberInputOnClickInputVariant = (
    evt: React.MouseEvent<HTMLInputElement>,
) => void;

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
    onChange?: NumberInputOnChangeDataVariant | NumberInputOnChangeDefaultVariant;
    onClick?: NumberInputOnClickDataVariant | NumberInputOnClickDefaultVariant | NumberInputOnClickInputVariant;
    size?: "sm" | "md" | "lg" | "xl",
    value: number | '',
    warn?: boolean,
    warnText?: React.ReactNode,
}

declare class NumberInputComponent extends React.Component<NumberInputProps> { }
export { NumberInputComponent as NumberInput };

declare const NumberInput: ForwardRefReturn<HTMLInputElement, NumberInputProps>;
export default NumberInput;

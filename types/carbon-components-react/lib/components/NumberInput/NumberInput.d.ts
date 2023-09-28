import * as React from "react";
import { ForwardRefReturn, InternationalProps, ReactInputAttr } from "../../../typings/shared";

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
    data: { direction: NumberInputArrowDirection; value: string | number },
) => void;
export type NumberInputOnClickDefaultVariant = (
    evt: React.MouseEvent<HTMLButtonElement>,
    direction: NumberInputArrowDirection,
    value: number | string,
) => void;
export type NumberInputOnClickInputVariant = (
    evt: React.MouseEvent<HTMLInputElement>,
) => void;

export interface NumberInputProps
    extends Omit<ReactInputAttr, ExcludedInputPropKeys>, InternationalProps<NumberInputTranslationKey>
{
    allowEmpty?: boolean | undefined;
    ariaLabel?: string | undefined;
    helperText?: React.ReactNode | undefined;
    hideLabel?: boolean | undefined;
    hideSteppers?: boolean | undefined;
    iconDescription?: string | undefined;
    id: string;
    invalid?: boolean | undefined;
    invalidText?: React.ReactNode | undefined;
    /**
     * @deprecated
     */
    isMobile?: boolean | undefined;
    label?: React.ReactNode | undefined;
    light?: boolean | undefined;
    onChange?: NumberInputOnChangeDataVariant | NumberInputOnChangeDefaultVariant | undefined;
    onClick?:
        | NumberInputOnClickDataVariant
        | NumberInputOnClickDefaultVariant
        | NumberInputOnClickInputVariant
        | undefined;
    size?: "sm" | "md" | "lg" | "xl" | undefined;
    value: number | "";
    warn?: boolean | undefined;
    warnText?: React.ReactNode | undefined;
}

declare class NumberInputComponent extends React.Component<NumberInputProps> {}
export { NumberInputComponent as NumberInput };

declare const NumberInput: ForwardRefReturn<HTMLInputElement, NumberInputProps>;
export default NumberInput;

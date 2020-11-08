import * as React from "react";
import {
    InternationalProps,
    ReactInputAttr,
    CarbonInputSize, ForwardRefReturn
} from "../../../typings/shared";

export type NumberInputTranslationKey = "decrement.number" | "increment.number";
type ExcludedAttributes = "aria-label" | "id" | "ref" | "size";
export interface NumberInputProps extends Omit<ReactInputAttr, ExcludedAttributes>, InternationalProps<NumberInputTranslationKey> {
    allowEmpty?: boolean,
    ariaLabel?: string,
    helperText?: React.ReactNode,
    hideLabel?: boolean,
    iconDescription?: string,
    id: string,
    invalid?: boolean,
    invalidText?: React.ReactNode,
    isMobile?: boolean,
    label?: React.ReactNode,
    light?: boolean,
    size?: Extract<CarbonInputSize, "sm" | "xl">,
    value: number,
    warn?: boolean,
    warnText?: React.ReactNode,
}

declare const NumberInput: ForwardRefReturn<HTMLInputElement, NumberInputProps>;

export default NumberInput;

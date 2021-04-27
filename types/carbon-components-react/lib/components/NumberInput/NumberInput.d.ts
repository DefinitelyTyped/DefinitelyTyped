import * as React from "react";
import {
    InternationalProps,
    ReactInputAttr,
    ForwardRefReturn
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
    /**
     * @deprecated
     */
    isMobile?: boolean,
    label?: React.ReactNode,
    light?: boolean,
    size?: "sm" | "md" | "lg" | "xl",
    value: number | '',
    warn?: boolean,
    warnText?: React.ReactNode,
}

declare class NumberInputComponent extends React.Component<NumberInputProps> { }
export { NumberInputComponent as NumberInput };

declare const NumberInput: ForwardRefReturn<HTMLInputElement, NumberInputProps>;
export default NumberInput;

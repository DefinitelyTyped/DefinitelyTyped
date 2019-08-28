import * as React from "react";
import { EmbeddedIconProps, InternationalProps, ReactInputAttr, RequiresIdProps, ThemeProps, ValidityProps } from "../../../typings/shared";

type ExcludedAttributes = "aria-label" | "id" | "ref";
export type NumberInputTranslationKey = "decrement.number" | "increment.number";
interface InheritedProps extends
    Omit<ReactInputAttr, ExcludedAttributes>,
    EmbeddedIconProps,
    InternationalProps<NumberInputTranslationKey>,
    RequiresIdProps,
    ThemeProps,
    ValidityProps
{
    value: number,
}

export interface NumberInputProps extends InheritedProps {
    allowEmpty?: boolean,
    helperText?: string,
    hideLabel?: boolean,
    label?: React.ReactNode,
    isMobile?: boolean,
}

declare const NumberInput: React.RefForwardingComponent<HTMLInputElement, NumberInputProps>;

export default NumberInput;

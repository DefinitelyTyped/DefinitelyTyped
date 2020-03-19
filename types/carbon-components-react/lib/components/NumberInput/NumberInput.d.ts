import * as React from "react";
import { EmbeddedIconProps, InternationalProps, ReactInputAttr, RequiresIdProps, ThemeProps, ValidityProps, RefForwardingProps } from "../../../typings/shared";

type ExcludedAttributes = "aria-label" | "id" | "ref";
export type NumberInputTranslationKey = "decrement.number" | "increment.number";
interface InheritedProps extends
    Omit<ReactInputAttr, ExcludedAttributes>,
    EmbeddedIconProps,
    InternationalProps<NumberInputTranslationKey>,
    RequiresIdProps,
    ThemeProps,
    ValidityProps,
    RefForwardingProps<HTMLInputElement>
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

declare class NumberInput extends React.Component<NumberInputProps> { }

export default NumberInput;

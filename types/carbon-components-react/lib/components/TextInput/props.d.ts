import * as React from "react";
import {
    ReactInputAttr,
    RequiresIdProps,
    ThemeProps,
    ValidityProps,
    RefForwardingProps,
    CarbonInputSize
} from "../../../typings/shared";

type ExcludedAttributes = "defaultValue" | "id" | "size" | "value";
interface TextInputInheritedProps extends
    Omit<ReactInputAttr, ExcludedAttributes>,
    RequiresIdProps,
    ThemeProps,
    ValidityProps,
    RefForwardingProps<HTMLInputElement>
{ }

export interface TextInputSharedProps extends TextInputInheritedProps {
    defaultValue?: TextInputSharedProps["value"],
    helperText?: React.ReactNode,
    hideLabel?: boolean,
    labelText: NonNullable<React.ReactNode>,
    value?: string | number,
}

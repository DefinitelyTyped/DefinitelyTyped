import * as React from "react";
import { ReactInputAttr, } from "../../../typings/shared";

type ExcludedAttributes = "defaultValue" | "id" | "size" | "value";

export interface TextInputSharedProps extends Omit<ReactInputAttr, ExcludedAttributes> {
    defaultValue?: TextInputSharedProps["value"],
    helperText?: React.ReactNode,
    hideLabel?: boolean,
    id: string,
    invalid?: boolean,
    invalidText?: React.ReactNode,
    labelText: NonNullable<React.ReactNode>,
    light?: boolean,
    value?: string | number,
}

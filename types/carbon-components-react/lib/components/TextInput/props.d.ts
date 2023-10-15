import * as React from "react";
import { ReactInputAttr } from "../../../typings/shared";

type ExcludedAttributes = "defaultValue" | "id" | "size" | "value";

export interface TextInputSharedProps extends Omit<ReactInputAttr, ExcludedAttributes> {
    defaultValue?: TextInputSharedProps["value"] | undefined;
    helperText?: React.ReactNode | undefined;
    hideLabel?: boolean | undefined;
    id: string;
    invalid?: boolean | undefined;
    invalidText?: React.ReactNode | undefined;
    labelText: NonNullable<React.ReactNode>;
    light?: boolean | undefined;
    value?: string | number | undefined;
}

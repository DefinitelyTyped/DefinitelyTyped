import * as React from "react";
import { ReactInputAttr, RequiresIdProps, ForwardRefReturn } from "../../../typings/shared";

type ExcludedAttributes = "aria-label" | "className" | "id" | "onChange" | "ref" | "type";

export interface InlineCheckboxProps extends Omit<ReactInputAttr, ExcludedAttributes>, RequiresIdProps {
    ariaLabel?: ReactInputAttr["aria-label"],
    indeterminate?: boolean,
    onChange?(checked: boolean, id: string, event: React.ChangeEvent<HTMLInputElement>): void,
}

declare const InlineCheckbox: ForwardRefReturn<HTMLInputElement, InlineCheckboxProps>;

export default InlineCheckbox;

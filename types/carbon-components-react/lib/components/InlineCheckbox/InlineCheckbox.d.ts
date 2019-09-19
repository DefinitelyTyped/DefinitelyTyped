import * as React from "react";
import { ReactInputAttr, RequiresIdProps } from "../../../typings/shared";

type ExcludedAttributes = "aria-label" | "className" | "id" | "onChange" | "ref" | "type";

interface InheritedProps extends
    Omit<ReactInputAttr, ExcludedAttributes>,
    RequiresIdProps
{
    ariaLabel?: ReactInputAttr["aria-label"],
}

export interface InlineCheckboxProps extends InheritedProps {
    indeterminate?: boolean,
    innerRef?: React.Ref<HTMLInputElement>;
    onChange?(checked: boolean, id: string, event: React.ChangeEvent<HTMLInputElement>): void,
}

declare const InlineCheckbox: React.RefForwardingComponent<HTMLInputElement, InlineCheckboxProps>;

export default InlineCheckbox;

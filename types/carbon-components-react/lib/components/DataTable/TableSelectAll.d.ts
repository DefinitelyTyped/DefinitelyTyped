import * as React from "react";
import { ReactAttr } from "../../../typings/shared";
import { InlineCheckboxProps } from "../InlineCheckbox";

export interface TableSelectAllProps {
    ariaLabel?: InlineCheckboxProps["ariaLabel"] | undefined; // required but has default value
    checked: NonNullable<InlineCheckboxProps["checked"]>;
    className?: ReactAttr["className"] | undefined;
    disabled?: InlineCheckboxProps["disabled"] | undefined;
    id: NonNullable<InlineCheckboxProps["id"]>;
    indeterminate?: InlineCheckboxProps["indeterminate"] | undefined;
    name: NonNullable<InlineCheckboxProps["name"]>;
    onSelect: InlineCheckboxProps["onClick"];
}

declare const TableSelectAll: React.FC<TableSelectAllProps>;

export default TableSelectAll;

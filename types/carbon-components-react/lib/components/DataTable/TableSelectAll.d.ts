import * as React from "react";
import { ReactAttr } from "../../../typings/shared";
import { InlineCheckboxProps } from "../InlineCheckbox";

interface InheritedProps {
    ariaLabel?: InlineCheckboxProps["ariaLabel"], // required but has default value
    checked: NonNullable<InlineCheckboxProps["checked"]>,
    className?: ReactAttr["className"],
    id: NonNullable<InlineCheckboxProps["id"]>,
    indeterminate?: InlineCheckboxProps["indeterminate"],
    name: NonNullable<InlineCheckboxProps["name"]>
    onSelect: NonNullable<InlineCheckboxProps["onSelect"]>,
}

export interface TableSelectAllProps extends InheritedProps { }

declare const TableSelectAll: React.FC<TableSelectAllProps>;

export default TableSelectAll;

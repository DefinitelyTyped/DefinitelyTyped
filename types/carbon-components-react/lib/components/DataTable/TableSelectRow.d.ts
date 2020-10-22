import * as React from "react";
import { ReactAttr, ReactInputAttr, RequiresIdProps } from "../../../typings/shared";

interface InheritedProps extends RequiresIdProps {
    ariaLabel?: React.AriaAttributes["aria-label"],
    checked: NonNullable<ReactInputAttr["checked"]>,
    className?: ReactAttr["className"],
    disabled?: ReactInputAttr["disabled"],
    name: NonNullable<ReactInputAttr["name"]>,
}

export interface TableSelectRowProps extends InheritedProps {
    radio?: boolean,
    onSelect(event: React.MouseEvent<HTMLInputElement>): void,
}

declare const TableSelectRow: React.FC<TableSelectRowProps>;

export default TableSelectRow;

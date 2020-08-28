import * as React from "react";
import { ReactAttr } from "../../../typings/shared";

interface InheritedProps extends ReactAttr<HTMLTableRowElement> {
    ariaLabel: NonNullable<React.AriaAttributes["aria-label"]>,
}

export interface TableExpandRowProps extends InheritedProps {
    expandHeader?: string,
    expandIconDescription?: string,
    isExpanded: boolean,
    onExpand(event: React.MouseEvent<HTMLButtonElement>): void,
}

declare const TableExpandRow: React.FC<TableExpandRowProps>;

export default TableExpandRow;

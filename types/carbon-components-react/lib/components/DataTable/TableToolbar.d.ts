import * as React from "react";
import { ReactAttr } from "../../../typings/shared";

export interface TableToolbarProps extends ReactAttr {
    size?: "lg" | "normal" | "sm" | "small" | undefined;
}

declare const TableToolbar: React.FC<TableToolbarProps>;

export default TableToolbar;

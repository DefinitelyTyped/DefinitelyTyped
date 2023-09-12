import * as React from "react";
import { InlineCheckboxProps } from "../InlineCheckbox";
import { RadioButtonProps } from "../RadioButton";

export type TableSelectRowOnChange = (
    value: RadioButtonProps["value"] | InlineCheckboxProps["checked"],
    idOrName: RadioButtonProps["name"] | InlineCheckboxProps["id"],
    evt: React.ChangeEvent<HTMLInputElement>,
) => void;

export interface TableSelectRowProps {
    ariaLabel?: string | undefined;
    checked: boolean;
    className?: string | undefined;
    disabled?: boolean | undefined;
    id: string;
    name: string;
    onChange?: TableSelectRowOnChange | undefined;
    onSelect(event: React.MouseEvent<HTMLInputElement>): void;
    radio?: boolean | undefined;
}

declare const TableSelectRow: React.FC<TableSelectRowProps>;

export default TableSelectRow;

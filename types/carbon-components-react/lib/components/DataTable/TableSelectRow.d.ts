import * as React from "react";
import { InlineCheckboxProps } from "../InlineCheckbox";
import { RadioButtonProps } from "../RadioButton";

export type TableSelectRowOnChange = (
    value: RadioButtonProps["value"] | InlineCheckboxProps["checked"],
    idOrName: RadioButtonProps["name"] | InlineCheckboxProps["id"],
    evt: React.ChangeEvent<HTMLInputElement>
) => void;

export interface TableSelectRowProps {
    ariaLabel?: string,
    checked: boolean,
    className?: string,
    disabled?: boolean,
    id: string,
    name: string,
    onChange?: TableSelectRowOnChange;
    onSelect(event: React.MouseEvent<HTMLInputElement>): void,
    radio?: boolean,
}

declare const TableSelectRow: React.FC<TableSelectRowProps>;

export default TableSelectRow;

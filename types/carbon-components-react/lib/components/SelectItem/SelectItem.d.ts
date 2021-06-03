import * as React from "react";

export interface SelectItemProps extends Omit<React.OptionHTMLAttributes<HTMLOptionElement>, "value"> {
    text: string,
    value: any,
}

declare const SelectItem: React.FC<SelectItemProps>;

export default SelectItem;

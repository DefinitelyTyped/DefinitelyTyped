import * as React from "react";

interface InheritedProps extends Omit<React.OptionHTMLAttributes<HTMLOptionElement>, "value"> {
    value: any,
}

export interface SelectItemProps extends InheritedProps {
    text: string,
}

declare const SelectItem: React.FC<SelectItemProps>;

export default SelectItem;

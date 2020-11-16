import * as React from "react";

type ReactOptGroupAttr = React.OptgroupHTMLAttributes<HTMLOptGroupElement>;

export interface SelectItemGroupProps extends Omit<ReactOptGroupAttr, "label"> {
    label: string,
}

declare const SelectItemGroup: React.FC<SelectItemGroupProps>;

export default SelectItemGroup;

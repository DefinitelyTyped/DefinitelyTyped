import * as React from "react";

type ReactOptGroupAttr = React.OptgroupHTMLAttributes<HTMLOptGroupElement>;

interface InheritedProps extends Omit<ReactOptGroupAttr, "label"> {
    label: NonNullable<ReactOptGroupAttr["label"]>,
}

export interface SelectItemGroupProps extends InheritedProps { }

declare const SelectItemGroup: React.FC<SelectItemGroupProps>;

export default SelectItemGroup;

import * as React from "react";
import { ContextMenuGroupProps } from "./ContextMenuGroup";
import { ContextMenuRadioGroupOptionsProps } from "./ContextMenuRadioGroupOptions";

export interface ContextMenuRadioGroupProps {
    initialSelectedItem?: ContextMenuRadioGroupOptionsProps["initialSelectedItem"];
    items: ContextMenuRadioGroupOptionsProps["items"];
    label: ContextMenuGroupProps["label"];
}

declare const ContextMenuRadioGroup: React.FC<ContextMenuRadioGroupProps>;

export default ContextMenuRadioGroup;

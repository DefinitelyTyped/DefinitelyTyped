import * as React from "react";

export interface ContextMenuRadioGroupOptionsProps {
    initialSelectedItem?: string;
    items: readonly string[];
    onChange?(item: string): void;
}

declare const ContextMenuRadioGroupOptions: React.FC<ContextMenuRadioGroupOptionsProps>;

export default ContextMenuRadioGroupOptions;

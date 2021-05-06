import * as React from "react";

export interface ContextMenuGroupProps {
    children?: React.ReactNode;
    label: string;
}

declare const ContextMenuGroup: React.FC<ContextMenuGroupProps>;

export default ContextMenuGroup;

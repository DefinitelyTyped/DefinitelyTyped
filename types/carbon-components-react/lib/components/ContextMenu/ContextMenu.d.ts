import * as React from "react";

export interface ContextMenuProps {
    children?: React.ReactNode;
    level?: number;
    onClose?(): void;
    onKeyDown?(evt: React.KeyboardEvent<HTMLUListElement>): void;
    open?: boolean;
    x?: number;
    y?: number;
}

declare const ContextMenu: React.FC<ContextMenuProps>;

export default ContextMenu;

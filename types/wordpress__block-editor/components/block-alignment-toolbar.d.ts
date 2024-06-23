import { ComponentType } from "react";

declare namespace BlockAlignmentToolbar {
    type Control = "center" | "full" | "left" | "right" | "wide";
    interface Props {
        children?: never | undefined;
        controls?: Control[] | undefined;
        isCollapsed?: boolean | undefined;
        onChange(newValue: Control | undefined): void;
        value: Control | undefined;
    }
}

declare const BlockAlignmentToolbar: ComponentType<BlockAlignmentToolbar.Props>;

export default BlockAlignmentToolbar;

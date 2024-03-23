import { Slot, ToolbarGroup } from "@wordpress/components";
import { FC, JSX, ReactNode } from "react";

declare namespace BlockControls {
    type BlockControlGroup =
        | "default"
        | "block"
        | "inline"
        | "other"
        | "parent";

    interface Props extends Pick<Parameters<typeof ToolbarGroup>[0], "controls"> {
        children: ReactNode;
        group?: BlockControlGroup | undefined;
    }
}
declare const BlockControls: {
    (props: BlockControls.Props): JSX.Element;
    Slot: FC<Omit<Slot.Props, "name">>;
};

export default BlockControls;

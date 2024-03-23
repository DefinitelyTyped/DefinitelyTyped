import {SlotComponentProps} from "@wordpress/components/build-types/slot-fill/types";
import {ToolbarGroupCollapsedProps} from "@wordpress/components/build-types/toolbar/toolbar-group/types";
import {FC, JSX, ReactNode} from "react";

declare namespace BlockControls {
    type BlockControlGroup =
        | "default"
        | "block"
        | "inline"
        | "other"
        | "parent";

    interface Props extends Pick<ToolbarGroupCollapsedProps, "controls"> {
        children: ReactNode;
        group?: BlockControlGroup | undefined;
    }
}
declare const BlockControls: {
    (props: BlockControls.Props): JSX.Element;
    Slot: FC<Omit<SlotComponentProps, "name">>;
};

export default BlockControls;

import { Slot, Toolbar } from "@wordpress/components";
import { FC, JSX, ReactNode } from "react";

declare namespace BlockControls {
    interface Props extends Pick<Toolbar.Props, "controls"> {
        children: ReactNode;
    }
}
declare const BlockControls: {
    (props: BlockControls.Props): JSX.Element;
    Slot: FC<Omit<Slot.Props, "name">>;
};

export default BlockControls;

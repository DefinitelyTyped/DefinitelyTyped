import { SlotComponentProps } from "@wordpress/components/build-types/slot-fill/types";
import { FC, JSX, ReactNode } from "react";

declare namespace BlockFormatControls {
    interface Props {
        children: ReactNode;
    }
}
declare const BlockFormatControls: {
    (props: BlockFormatControls.Props): JSX.Element;
    Slot: FC<Omit<SlotComponentProps, "name">>;
};

export default BlockFormatControls;

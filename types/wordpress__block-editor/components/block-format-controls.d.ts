import { Slot } from "@wordpress/components";
import { FC, JSX, ReactNode } from "react";

declare namespace BlockFormatControls {
    interface Props {
        children: ReactNode;
    }
}
declare const BlockFormatControls: {
    (props: BlockFormatControls.Props): JSX.Element;
    Slot: FC<Omit<Parameters<typeof Slot>[0], "name">>;
};

export default BlockFormatControls;

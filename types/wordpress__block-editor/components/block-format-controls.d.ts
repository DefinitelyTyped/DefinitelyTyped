import { Slot } from "@wordpress/components";
import { ComponentProps, FC, JSX, ReactNode } from "react";

declare namespace BlockFormatControls {
    interface Props {
        children: ReactNode;
    }
}
declare const BlockFormatControls: {
    (props: BlockFormatControls.Props): JSX.Element;
    Slot: FC<Omit<ComponentProps<typeof Slot>, "name">>;
};

export default BlockFormatControls;

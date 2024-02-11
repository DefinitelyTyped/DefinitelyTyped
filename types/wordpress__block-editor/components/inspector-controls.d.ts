import { Slot } from "@wordpress/components";
import { FC, JSX, ReactNode } from "react";

declare namespace InspectorControls {
    interface Props {
        children: ReactNode;
    }
}
declare const InspectorControls: {
    (props: InspectorControls.Props): JSX.Element;
    Slot: FC<Omit<Slot.Props, "name">>;
};

export default InspectorControls;

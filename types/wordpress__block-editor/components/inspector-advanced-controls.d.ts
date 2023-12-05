import { Slot } from "@wordpress/components";
import { FC, JSX, ReactNode } from "react";

declare namespace InspectorAdvancedControls {
    interface Props {
        children: ReactNode;
    }
}
declare const InspectorAdvancedControls: {
    (props: InspectorAdvancedControls.Props): JSX.Element;
    Slot: FC<Omit<Slot.Props, "name">>;
};

export default InspectorAdvancedControls;

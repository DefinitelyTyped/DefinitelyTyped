import { SlotComponentProps } from "@wordpress/components/build-types/slot-fill/types";
import { FC, JSX, ReactNode } from "react";

declare namespace InspectorAdvancedControls {
    interface Props {
        children: ReactNode;
    }
}
declare const InspectorAdvancedControls: {
    (props: InspectorAdvancedControls.Props): JSX.Element;
    Slot: FC<Omit<SlotComponentProps, "name">>;
};

export default InspectorAdvancedControls;

import { SlotComponentProps } from "@wordpress/components/build-types/slot-fill/types";
import { FC, JSX, ReactNode } from "react";

declare namespace InspectorControls {
    interface Props {
        group?: string;
        children: ReactNode;
    }
}
declare const InspectorControls: {
    (props: InspectorControls.Props): JSX.Element;
    Slot: FC<Omit<SlotComponentProps, "name">>;
};

export default InspectorControls;
